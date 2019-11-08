import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(4, "Password must be 4 characters at minimum")
      .required("Password is required")
});

export default LoginSchema;