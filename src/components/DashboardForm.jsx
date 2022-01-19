import { Form, Formik } from "formik";
import { useCallback } from "react";
import * as Yup from "yup";
import FormField from "/src/components/FormField";

const displayingErrorMessagesSchema = Yup.object().shape({
  value: Yup.number()
    .typeError("Le champ doit être un nombre !")
    .test(
      "Egale à 0 ?",
      "La valeur ne doit pas être égale à 0 !",
      (value) => value != 0
    )
    .required("Le champ est requis !"),
  description: Yup.string().required("Le champ est requis !"),
});

const DashboardForm = (props) => {
  const { onSubmit } = props;

  const handleFormSubmit = useCallback(
    ({ value, description }, { resetForm }) => {
      // onSubmit({ value, description });
      alert(value + description);
      resetForm();

      return true;
    },
    [onSubmit]
  );

  return (
    <Formik
      initialValues={{
        value: "0",
        description: "",
      }}
      validationSchema={displayingErrorMessagesSchema}
      onSubmit={handleFormSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <FormField
            id="value"
            name="value"
            placeholder="La valeur"
            errorType={errors.value}
            touchedType={touched.value}
          />
          <FormField
            type="textarea"
            id="description"
            name="description"
            placeholder="Une description"
            imputStyle="h-32"
            errorType={errors.description}
            touchedType={touched.description}
          />
          <button
            className="w-full p-2 text-white bg-gray-700 hover:bg-gray-400"
            type="submit"
          >
            Ajouter
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default DashboardForm;
