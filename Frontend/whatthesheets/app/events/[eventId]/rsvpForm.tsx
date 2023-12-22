
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface RsvpFormProps {
    eventId: number;
  }
export function RsvpForm({ eventId}: RsvpFormProps) {

    const formSchema = Yup.object().shape({
        emailAddress: Yup.string().required('Required'),
        phoneNumber: Yup.string(),
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        attending: Yup.boolean().required('Required'),
        mealPref: Yup.number(),
        addPlusOne: Yup.boolean().required('Required')

    });

    const formik = useFormik({
        initialValues: {
            emailAddress:'',
            phoneNumber:'',
            firstName:'',
            lastName:'',
            attending:'',
            mealPrefId:'',
            addPlusOne:''
        },
        validationSchema: formSchema,
            onSubmit: (values, { resetForm }) => {
                console.log("submit works")
                const newGuestAndRSVP = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    emailAddress: values.emailAddress,
                    phoneNumber: values.phoneNumber,
                    attending: Boolean(values.attending),
                    mealPrefId: Number(1), 
                    eventId: eventId, 
                    addPlusOne: Boolean(values.addPlusOne) 
                };
                
            console.log("Sending Form values:", newGuestAndRSVP);

            fetch(`https://weddingbells-api.onrender.com/rsvp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify( newGuestAndRSVP),
            })
            .then((r) => r.json())
            .then((data) => {
                console.warn(data); 
                resetForm()
            })
            .catch(error => {
                error.response.json().then((body: any) => {
                    console.error("Server response:", body);
                });
            });
        },
    });

    return (
    <div className="mx-auto font-sans text-center justify-between gap-x-6 p-6 lg:px-8">
        <div className="mx-10 mb-8 border-none shadow-sm p-6">
        <h2 className="p-6 my-3 text-yellow-500 text-4xl font-bold">Make RSVP</h2>
        <form onSubmit={formik.handleSubmit} className="mx-auto mt-6 max-w-lg grid grid-cols-2 gap-4">
            <div>
                <label htmlFor="fristName" className="block text-sm font-semibold font-sans leading-6  text-yellow-500"> First Name</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ${formik.touched.firstName && formik.errors.firstName ? "ring-red-500" : "ring-slate-300"} focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6`}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                    <div className="text-red-500">{formik.errors.firstName}</div>
                )}
            </div>
            <div>
                <label htmlFor="lastName" className="block text-sm font-sans leading-6  text-yellow-500">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`block w-full rounded-md border-0 font-sanspx-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ${formik.touched.lastName && formik.errors.lastName ? "ring-red-500" : "ring-slate-300"} focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6`}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                    <div className="text-red-500">{formik.errors.lastName}</div>
                )}
            </div>
            <div>
                <label htmlFor="emailAddress" className="block text-sm font-sans leading-6  text-yellow-500">Email Address</label>
                <input
                    type="text"
                    name="emailAddress"
                    id="emailAddress"
                    value={formik.values.emailAddress}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`block w-full rounded-md border-0 font-sanspx-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ${formik.touched.emailAddress && formik.errors.emailAddress
                        ? "ring-red-500" : "ring-slate-300"} focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6`}
                />
                {formik.touched.emailAddress && formik.errors.emailAddress && (
                    <div className="text-red-500">{formik.errors.emailAddress}</div>
                )}
            </div>
            <div>
                <label htmlFor="phoneNumber" className="block text-sm font-semibold font-sans leading-6  text-yellow-500">Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ${formik.touched.phoneNumber && formik.errors.phoneNumber ? "ring-red-500" : "ring-slate-300"} focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6`}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                    <div className="text-red-500">{formik.errors.phoneNumber}</div>
                )}
            </div>
            <div>
                <label htmlFor="attending" className="block text-sm font-sans leading-6  text-yellow-500">Attending:</label>
                <input
                    type="radio"
                    name="attending"
                    id="attending"
                    value="true"
                    checked={formik.values.attending === 'true'}
                    onChange={formik.handleChange}                    
                /> Yes
                <input
                    type="radio"
                    name="attending"
                    value="false"
                    checked={formik.values.attending === 'false'}
                    onChange={formik.handleChange}
                /> No
                {formik.touched.attending && formik.errors.attending && (
                    <div className="text-red-500">{formik.errors.attending}</div>
                )}
            </div>
            <div>
                <label htmlFor="mealPrefId" className="block text-sm font-sans leading-6  text-yellow-500">Meal Pref:</label>
                <input
                    type="radio"
                    name="mealPref"
                    id="mealPref"
                    value={Number(1)}
                    checked={formik.values.mealPrefId === '1'}
                    onChange={formik.handleChange}
                    //className={`block w-full rounded-md border-0 font-sanspx-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ${formik.touched.mealPrefId && formik.errors.mealPrefId ? "ring-red-500" : "ring-slate-300"} focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6`}
                /> Chicken Tacos
                {formik.touched.mealPrefId && formik.errors.mealPrefId && (
                    <div className="text-red-500">{formik.errors.mealPrefId}</div>
                )}
                <h1>Host will contact for dinning options.</h1>
            </div>
            <div>
                <label htmlFor="addPlusOne" className="block text-sm font-sans leading-6  text-yellow-500">Add Plus-One:</label>
                <input
                    type="radio"
                    name="addPlusOne"
                    id="addPlusOne"
                    value="true"
                    checked={formik.values.addPlusOne === 'true'}
                    onChange={formik.handleChange}                    
                /> Yes
                <input
                    type="radio"
                    name="addPlusOne"
                    id = "addPlusOne"
                    value="false"
                    checked={formik.values.addPlusOne === 'false'}
                    onChange={formik.handleChange}
                /> No
                {formik.touched.addPlusOne && formik.errors.addPlusOne && (
                    <div className="text-red-500">{formik.errors.addPlusOne}</div>
                )}
            </div>
            
            <button type="submit" className="block w-full font-sans rounded-md bg-yellow-500 px-3.5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-500">Add</button>
            </form>
        </div>
    </div>
    )
}