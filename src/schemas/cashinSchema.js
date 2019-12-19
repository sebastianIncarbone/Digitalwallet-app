import * as Yup from 'yup';

const cashinSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .min(10, "Card number must be 10 characters")
      .required("Card number is required"),
    name: Yup.string()
      .required("Name is required")
});

export default cashinSchema;