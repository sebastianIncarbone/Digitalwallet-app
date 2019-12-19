import * as Yup from 'yup';

const cashoutSchema = Yup.object().shape({
    cvuTO: Yup.string()
      .min(9, "cvu must be 9 characters")
      .required("cvu is required"),
});

export default cashoutSchema;