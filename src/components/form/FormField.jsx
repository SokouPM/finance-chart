import { Field } from "formik"

const FormField = (props) => {
  return (
    <div className="mb-8">
      <Field
        as={props.type}
        id={props.id}
        className={`${props.imputStyle} w-full mb-1 p-2 border-2 rounded`}
        name={props.name}
        placeholder={props.placeholder}
      ></Field>
      {props.touchedType && props.errorType && (
        <div className="errorField w-full p-2 bg-red-200 text-red-500">
          {props.errorType}
        </div>
      )}
    </div>
  )
}

export default FormField
