import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .matches(
      /@dolphinchat\.ai$|@civilcops\.ai$/,
      "Enter email with correct domain name!"
    )
    .max(255)
    .required("Email is required"),
  password: Yup.string().max(255).required("Password is required"),
});

export const signUpSchema = Yup.object().shape({
  fname: Yup.string().max(255).required("First name is required"),
  lname: Yup.string().max(255).required("Last name is required"),
  email: Yup.string()
    .email("Must be a valid email")
    .matches(
      /@dolphinchat\.ai$|@civilcops\.ai$/,
      "Enter email with correct domain name!"
    )
    .max(255)
    .required("Email is required"),
  business_name: Yup.string().max(255).required("Buissness name is required"),
  password1: Yup.string()
    .min(8, "Must be at least 8 characters")
    .max(255)
    .required("Required"),
  password2: Yup.string().when("password1", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password1")],
      "Both password need to be the same"
    ),
  }),
  gender: Yup.string().required("Gender is required"),
});

export const resetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .matches(
      /@dolphinchat\.ai$|@civilcops\.ai$/,
      "Enter email with correct domain name!"
    )
    .max(255)
    .required("Email is required"),
});
