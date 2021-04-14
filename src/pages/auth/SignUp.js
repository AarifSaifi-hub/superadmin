import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";
import { Formik } from "formik";
import { signUp } from "../../redux/actions/authActions";
import { signUpSchema } from "./Validation/validationSchema";

import {
  Button,
  Paper,
  TextField as MuiTextField,
  Typography,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { Alert as MuiAlert } from "@material-ui/lab";

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)}px;

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
`;

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Wrapper>
      <Helmet title="Sign Up" />

      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Register
      </Typography>
      <Typography component="h2" variant="body1" align="center">
        Start creating the best possible user experience for you customers
      </Typography>

      <Formik
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          business_name: "",
          password1: "",
          password2: "",
          gender: "",
          submit: false,
        }}
        validationSchema={signUpSchema}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await dispatch(
              signUp({
                first_name: values.fname,
                last_name: values.lname,
                email: values.email,
                business_name: values.business_name,
                password1: values.password1,
                password2: values.password2,
                gender: values.gender,
              })
            );
            history.push("/sign-in");
          } catch (error) {
            const message = error || "Something went wrong";

            setStatus({ success: false });
            setErrors({ submit: message });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            {errors.submit && (
              <Alert mt={2} mb={1} severity="warning">
                {errors.submit}
              </Alert>
            )}
            <TextField
              type="text"
              name="fname"
              label="First Name"
              value={values.fname}
              error={Boolean(touched.fname && errors.fname)}
              fullWidth
              helperText={touched.fname && errors.fname}
              onBlur={handleBlur}
              onChange={handleChange}
              my={3}
            />
            <TextField
              type="text"
              name="lname"
              label="Last Name"
              value={values.lname}
              error={Boolean(touched.lname && errors.lname)}
              fullWidth
              helperText={touched.lname && errors.lname}
              onBlur={handleBlur}
              onChange={handleChange}
              my={3}
            />
            <TextField
              type="email"
              name="email"
              label="Email Address"
              value={values.email}
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              onBlur={handleBlur}
              onChange={handleChange}
              my={3}
            />
            <TextField
              type="text"
              name="business_name"
              label="Company"
              value={values.business_name}
              error={Boolean(touched.business_name && errors.business_name)}
              fullWidth
              helperText={touched.business_name && errors.business_name}
              onBlur={handleBlur}
              onChange={handleChange}
              my={3}
            />
            <TextField
              type="text"
              name="gender"
              label="Gender"
              value={values.gender}
              error={Boolean(touched.gender && errors.gender)}
              fullWidth
              helperText={touched.gender && errors.gender}
              onBlur={handleBlur}
              onChange={handleChange}
              my={3}
            />
            <TextField
              type="password"
              name="password1"
              label="Password"
              value={values.password1}
              error={Boolean(touched.password1 && errors.password1)}
              fullWidth
              helperText={touched.password1 && errors.password1}
              onBlur={handleBlur}
              onChange={handleChange}
              my={3}
            />
            <TextField
              type="password"
              name="password2"
              label="Confirm Password"
              value={values.password2}
              error={Boolean(touched.password2 && errors.password2)}
              fullWidth
              helperText={touched.password2 && errors.password2}
              onBlur={handleBlur}
              onChange={handleChange}
              my={3}
            />

            <Button
              my={5}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Sign up
            </Button>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default SignUp;
