import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useState} from 'react'
import {Dialog} from '@headlessui/react';
import {EventData} from './page'
import emailjs from 'emailjs-com';

interface RsvpFormProps {
    eventData: EventData;
    
  }
export function RsvpForm({ eventData}: RsvpFormProps) {
    
    const formSchema = Yup.object().shape({
        emailAddress: Yup.string().required('Required'),
        phoneNumber: Yup.string(),
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        attending: Yup.boolean().required('Required'),
        mealPrefId: Yup.number(),
        addPlusOne: Yup.boolean(),
        plusOneName: Yup.string().when('addPlusOne', (addPlusOneValue: any , schema: any) => {
            return addPlusOneValue ? schema.required('Please enter the name of your plus-one.') : schema.notRequired();
        })

    });
    const [modalOpen, setModalOpen] = useState(false);
    const [rsvpId , setRsvpId] = useState(null);
    const [submitError, setSubmitError] = useState(null);
    const formik = useFormik({
        initialValues: {
            emailAddress:'',
            phoneNumber:'',
            firstName:'',
            lastName:'',
            attending:false,
            mealPrefId:'',
            addPlusOne:false,
            plusOneName:'none'
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
                    eventId: eventData.eventId, 
                    addPlusOne: Boolean(values.addPlusOne),
                    plusOneName: values.plusOneName
                };
                
            console.log("Sending Form values:", newGuestAndRSVP);

            fetch(`https://weddingbells-api.onrender.com/rsvp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify( newGuestAndRSVP),
            })
            .then((r) => r.json())
            .then((data) => {
                console.warn(data)
                resetForm()
                setRsvpId(data.rsvP_ID)
                setModalOpen(true);
                setSubmitError(null);
                const emailData = {
                    to_name: values.firstName + ' ' + values.lastName,
                    to_email: values.emailAddress,
                    from_name: "Kendall and Melissa",
                    event_name: eventData.title,
                    event_location: eventData.location,
                    plus_one: values.plusOneName,
                    event_date: eventData.date
                };
                emailjs.send('service_kandmwedding', 'template_60ncaoc', emailData, '8zUT3hCrM_RlE28_E')
                .then((response) => {
                    console.log('Email sent successfully!', response.status, response.text);
                    // Additional handling if needed
                }, (err) => {
                    console.log('Failed to send email...', err);
                    // Error handling
                });
            })
            .catch(error => {
                
                setModalOpen(true);
                setRsvpId(null);
                error.response.json().then((body: any) => {
                    setSubmitError(error.message);
                    console.error("Server response:", body);
                });
            });
        },
    });

    const handleAddPlusOneChange = (e: { target: { value: string; }; }) => {
        const isAddPlusOne = e.target.value === "true";
        formik.setFieldValue("addPlusOne", isAddPlusOne);
        if (!isAddPlusOne) {
            formik.setFieldValue("plusOneName", "");
        }
    };

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
                        checked={formik.values.attending === true}
                        onChange={() => formik.setFieldValue('attending', true)}                    
                    /> Yes
                    <input
                        type="radio"
                        name="attending"
                        id="attending"
                        value="false"
                        checked={formik.values.attending === false}
                        onChange={() => formik.setFieldValue('attending', false)}
                    /> No
                    {formik.touched.attending && formik.errors.attending && (
                        <div className="text-red-500">{formik.errors.attending}</div>
                    )}
                </div>
                <div>
                    <label htmlFor="mealPrefId" className="block text-sm font-sans leading-6  text-yellow-500">Meal Pref:</label>
                    <input
                        type="radio"
                        name="mealPrefId"
                        id="mealPrefId"
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
                        checked={formik.values.addPlusOne === true}
                        onChange={handleAddPlusOneChange}                    
                    /> Yes
                    <input
                        type="radio"
                        name="addPlusOne"
                        id = "addPlusOne"
                        value="false"
                        checked={formik.values.addPlusOne === false}
                        onChange={handleAddPlusOneChange}
                    /> No
                    {formik.values.addPlusOne === true && (
                    <div>
                        <label htmlFor="plusOneName" className="block text-sm font-sans leading-6 text-yellow-500">
                            Plus-One Name:
                        </label>
                        <input
                            type="text"
                            name="plusOneName"
                            id="plusOneName"
                            value={formik.values.plusOneName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ${formik.touched.plusOneName && formik.errors.plusOneName ? "ring-red-500" : "ring-slate-300"} focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6`}
                        />
                        {formik.touched.plusOneName && formik.errors.plusOneName && (
                            <div className="text-red-500">{formik.errors.plusOneName}</div>
                        )}
                    </div>
                )}
                </div>
                
                <button onClick={()=>console.log(formik.values)}type="submit" className="block w-full font-sans rounded-md bg-yellow-500 px-3.5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-500">Add</button>
            </form>
            <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                RSVP Submission
                            </Dialog.Title>
                            <div className="mt-2">
                                {rsvpId ? (
                                    <p className="text-sm text-gray-500">
                                        RSVP submitted successfully! Your RSVP ID is {rsvpId}.
                                        Please have this ID if you need to contact Host to edit the reservation.
                                    </p>
                                ) : (
                                    <p className="text-sm text-gray-500">
                                        Failed to submit RSVP: {submitError}.
                                        Please contact Site Administrator.
                                    </p>
                                )}
                            </div>
                            <div className="mt-4">
                                <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    onClick={() => setModalOpen(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
            
        </div>
    </div>
    )
}