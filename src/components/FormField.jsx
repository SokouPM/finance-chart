import { Field } from "formik";

const FormField = (props) => {
  return (
    <div className={props.style}>
      <Field
        as={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
      ></Field>
      {props.touchedType && props.errorType && (
        <div className="errorField">{props.errorType}</div>
      )}
    </div>
  );
};

export default FormField;
