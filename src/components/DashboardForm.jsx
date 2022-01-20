import { Form, Formik } from "formik";
import { useCallback } from "react";
import * as Yup from "yup";
import FormField from "/src/components/FormField";

const displayingErrorMessagesSchema = Yup.object().shape({
  amount: Yup.number()
    .typeError("Le montant doit être un nombre !")
    .test(
      "montant égal à 0 ?",
      "Le montant ne doit pas être égale à 0 !",
      (amount) => amount != 0
    )
    .required("Le champ est requis !"),
  description: Yup.string().required("Le champ est requis !"),
});

const DashboardForm = (props) => {
  const { onSubmit } = props;

  const handleFormSubmit = useCallback(
    ({ amount, description }, { resetForm }) => {
      onSubmit({ amount, description });
      resetForm();

      return true;
    },
    [onSubmit]
  );

  return (
    <Formik
      initialValues={{
        amount: "0",
        description: "",
      }}
      validationSchema={displayingErrorMessagesSchema}
      onSubmit={handleFormSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <FormField
            id="amount"
            name="amount"
            placeholder="La valeur"
            errorType={errors.amount}
            touchedType={touched.amount}
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
