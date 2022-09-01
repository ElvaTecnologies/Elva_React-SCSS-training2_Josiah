import { ErrorMessage, useField } from "formik";
import React from "react";
import errorIcon from "../../assets/image/icon-error.svg";

function FormElement({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label
        className={`input-div ${meta.error && meta.touched ? "error" : null}`}
      >
        <input placeholder={label} {...field} {...props} />
        {meta.error && meta.touched ? <img src={errorIcon} alt="" /> : null}
      </label>
      <sup className="error">
        <ErrorMessage name={field.name} />
      </sup>
    </>
  );
}

export default FormElement;
