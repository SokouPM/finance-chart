import { useCallback, useContext } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import AppContext from "/src/components/AppContext";
import FormField from "/src/components/form/FormField";

const displayingErrorMessagesSchema = Yup.object().shape({
  amount: Yup.number()
    .typeError("Le montant doit être un nombre")
    .min(-999999, "Le montant doit être supérieur ou égal à -999999")
    .max(999999, "Le montant doit être inférieur ou égal à 999999")
    .test(
      "Amount equal to 0 ?",
      "Le montant ne doit pas être égal à 0",
      (amount) => amount != 0
    )
    .required("Le champ est requis"),
  description: Yup.string().required("Le champ est requis"),
});

const DashboardForm = () => {
  const { addDatas } = useContext(AppContext);

  const handleFormSubmit = useCallback(
    (values, { resetForm }) => {
      addDatas({
        amount: Number(values.amount),
        description: values.description,
      });
      resetForm();

      return true;
    },
    [addDatas]
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
