import Page from "/src/components/Page";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormField from "/src/components/FormField";
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter()
  const displayingErrorMessagesSchema = Yup.object().shape({
    value: Yup.number("Le champ doit être un nombre !")
      .required("Le champ est requis !"),
    description: Yup.string().required("Le champ est requis !"),
  });

  return (
    <Page router={router}>
      <Formik
        initialValues={{
          value: "",
          description: "",
        }}
        validationSchema={displayingErrorMessagesSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2)); // TODO
          router.push({ pathname: "/" });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <FormField
              label="Valeur"
              id="value"
              name="value"
              placeholder="La valeur"
              errorType={errors.value}
              touchedType={touched.value}
            />
            <FormField
              label="Description"
              type="textarea"
              id="description"
              name="description"
              placeholder="Une description"
              errorType={errors.description}
              touchedType={touched.description}
            />
            <button type="submit">Ajouter</button>
          </Form>
        )}
      </Formik>
    </Page>
  );
};

export default Contact;
