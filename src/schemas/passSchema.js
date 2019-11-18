import * as Yup from 'yup';

const passSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required")
});

export default passSchema;