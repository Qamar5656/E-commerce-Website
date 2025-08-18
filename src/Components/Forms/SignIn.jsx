import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = { email: "", password: "" };
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  password: Yup.string
    .min(6, "Password Should be at least 6 characters")
    .required("Password is Required"),
});

const SigninForm = () => {
  function handleSubmit(values, { setSubmitting }) {
    e.preventDefault();
    alert("Submit Button clicked");
    setSubmitting(false);
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary px-4">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-light text-dark">
        <h2 className="text-3xl font-extrabold mb-6 text-secondary text-center">
          Sign In
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => {
            <Form className="space-y-5">
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded border border-secondary bg-transparent placeholder-secondary text-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded border border-secondary bg-transparent placeholder-secondary text-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-tertiary py-3 rounded font-semibold hover:bg-primary hover:text-secondary transition"
              >
                Sign In
              </button>
            </Form>;
          }}
        </Formik>
      </div>
    </div>
  );
};

export default SigninForm;
