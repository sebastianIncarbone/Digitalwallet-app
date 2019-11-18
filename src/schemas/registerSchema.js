import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(4, "Password must be 4 characters at minimum")
      .required("Password is required"),
    tarjetaDeCredito: Yup.string()
      .required("Card is required"),
    nombre: Yup.string()
      .required("Name is required"),
    apellido: Yup.string()
      .required("Lastname is required")
});

export default RegisterSchema;