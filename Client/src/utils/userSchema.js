import * as yup from "yup";
// const passwordRules = "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$";
// .matches(passwordRules)
export const registeSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email().required(),
  password: yup.string().required("required").min(8),
  education: yup.string().required("required"),
  profileImage: yup.string().required("required"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("required"),
  password: yup.string().required("required"),
});

export const loginInitialValues = {
  email: "",
  password: "",
};
//initialValues for the Formik
export const registerInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  education: "",
  profileImage: null,
};
