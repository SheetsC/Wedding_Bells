import { useRSVPSubmit, RSVPData } from "@/hooks";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
export const RSVPSection: React.FC = () => {
  const { submitRSVP, loading, response, error } = useRSVPSubmit();

  const formik = useFormik<RSVPData>({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      plusOneName: "",
      attending: "no",
      addPlusOne: "no",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      emailAddress: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      phoneNumber: Yup.string().required("Required"),
      attending: Yup.string().required("Required"),
      addPlusOne: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("here");
      console.log(values);
      submitRSVP(values);
    },
  });

  return (
    <div className="mt-20 mb-12 mx-auto p-4">
      <h1 className="text-3xl font-lora text-black tracking-wider text-center mb-8 underline italic">
        RSVP
      </h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          placeholder="First Name"
          className="w-full p-2 border rounded text-black font-lora"
          disabled={loading}
        />
        <input
          type="text"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          placeholder="Last Name"
          className="w-full p-2 border rounded text-black font-lora"
          disabled={loading}
        />
        <input
          type="email"
          name="emailAddress"
          onChange={formik.handleChange}
          value={formik.values.emailAddress}
          placeholder="Email Address"
          className="w-full p-2 border rounded text-black font-lora"
          disabled={loading}
        />
        <input
          type="text"
          name="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          placeholder="Phone Number"
          className="w-full p-2 border rounded text-black font-lora"
          disabled={loading}
        />
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center text-black font-lora text-xl tracking-wider">
            Attending:
            <label className="flex gap-2 text-black font-lora">
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={formik.values.attending === "yes"}
                onChange={formik.handleChange}
                disabled={loading}
              />
              Yes
            </label>
            <label className="flex gap-2 text-black font-lora">
              <input
                type="radio"
                name="attending"
                value="no"
                checked={formik.values.attending === "no"}
                onChange={formik.handleChange}
                disabled={loading}
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex gap-2 items-center text-black font-lora text-xl tracking-wider">
            Bringing a Plus One:
            <label className="flex gap-2 text-black font-lora">
              <input
                type="radio"
                name="addPlusOne"
                value="yes"
                checked={formik.values.addPlusOne === "yes"}
                onChange={formik.handleChange}
                disabled={loading}
              />
              Yes
            </label>
            <label className="flex gap-2 text-black font-lora">
              <input
                type="radio"
                name="addPlusOne"
                value="no"
                checked={formik.values.addPlusOne === "no"}
                onChange={formik.handleChange}
                disabled={loading}
              />
              No
            </label>
          </div>
          {formik.values.addPlusOne === "yes" && (
            <input
              type="text"
              name="plusOneName"
              onChange={formik.handleChange}
              value={formik.values.plusOneName}
              placeholder="Plus One Name"
              className="w-full p-2 border rounded text-black font-lora"
              disabled={loading}
            />
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white p-2 mt-4 rounded"
        >
          {loading ? (
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          ) : (
            <span>Submit</span>
          )}
        </button>
      </form>
      {error && (
        <div className="text-red-500 text-center mt-4 mb-4 font-lora">
          Error submitting form. Please try again.
        </div>
      )}
      {response && (
        <div className="text-green-500 text-center mt-4 mb-4 font-lora">
          Your RSVP was recorded!
        </div>
      )}
    </div>
  );
};
