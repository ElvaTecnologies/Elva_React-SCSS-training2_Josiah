import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./FormCOmponent.scss";
import FormElement from "./FormElement";

function FormCOmponent() {
  const validate = Yup.object({
    firstName: Yup.string().required("First Name cannot be empty"),
    lastName: Yup.string().required("Last Name cannot be empty"),
    email: Yup.string()
      .email("Looks like this is not an email")
      .required("Email cannot be empty"),
    password: Yup.string().required("Password cannot be empty"),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const handelSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className="FormCOmponent">
      <div className="top-card">Try it free 7 days then $20/mo. thereafter</div>
      <div className="form-card">
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={(FormData) => handelSubmit(FormData)}
        >
          {(Formik) => (
            <>
              <Form>
                <FormElement
                  type="text"
                  label={"First Name"}
                  name={"firstName"}
                />
                <FormElement
                  type="text"
                  label={"Last Name"}
                  name={"lastName"}
                />
                <FormElement type="email" label={"Email"} name={"email"} />
                <FormElement
                  type="password"
                  label={"Password"}
                  name={"password"}
                />
                <button type="submit">Claim your free trial </button>
              </Form>
              <sup>
                By clicking the button, you are agreeing to our
                <a href="#">Terms and Services</a>
              </sup>
            </>
          )}
        </Formik>
      </div>
    </div>
    // </div>
  );
}

export default FormCOmponent;
