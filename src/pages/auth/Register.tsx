import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { Button, Alert, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//actions
import { resetAuth, signupUser } from "../../redux/actions";

import { RootState, AppDispatch } from "../../redux/store";

// components
import { VerticalForm, FormInput } from "../../components/";

import AuthLayout from "./AuthLayout";

interface UserData {
  fullname: string;
  email: string;
  password: string;
}

/* bottom links */
const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <Row className="mt-3">
      <Col className="text-center">
        <p className="text-white-50">
          {t("Already have account?")}{" "}
          <Link to={"/auth/login"} className="text-white ms-1">
            <b>{t("Sign In")}</b>
          </Link>
        </p>
      </Col>
    </Row>
  );
};

const Register = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, userSignUp, error } = useSelector((state: RootState) => ({
    loading: state.Auth.loading,
    error: state.Auth.error,
    userSignUp: state.Auth.userSignUp,
  }));

  useEffect(() => {
    dispatch(resetAuth());
  }, [dispatch]);

  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      fullname: yup.string().required(t("Please enter Fullname")),
      email: yup
        .string()
        .required("Please enter Email")
        .email("Please enter valid Email"),
      password: yup.string().required(t("Please enter Password")),
    })
  );

  /*
   * handle form submission
   */
  const onSubmit = (formData: UserData) => {
    dispatch(
      signupUser(formData["fullname"], formData["email"], formData["password"])
    );
  };

  return (
    <>
      {userSignUp ? <Navigate to={"/auth/confirm"}></Navigate> : null}

      <AuthLayout
        helpText={t(
          "Don't have an account? Create your account, it takes less than a minute"
        )}
        bottomLinks={<BottomLink />}
      >
        {error && (
          <Alert variant="danger" className="my-2">
            {error}
          </Alert>
        )}

        <VerticalForm<UserData>
          onSubmit={onSubmit}
          resolver={schemaResolver}
          defaultValues={{}}
        >
          <FormInput
            label={t("Full Name")}
            type="text"
            name="fullname"
            placeholder={t("Enter your name")}
            containerClass={"mb-3"}
          />
          <FormInput
            label={t("Email address")}
            type="email"
            name="email"
            placeholder={t("Enter your email")}
            containerClass={"mb-3"}
          />
          <FormInput
            label={t("Password")}
            type="password"
            name="password"
            placeholder={t("Enter your password")}
            containerClass={"mb-3"}
          />
          <FormInput
            label={t("I accept Terms and Conditions")}
            type="checkbox"
            name="checkboxsignup"
            containerClass={"mb-3"}
          />

          <div className="text-center d-grid">
            <Button variant="success" type="submit" disabled={loading}>
              {t("Sign Up")}
            </Button>
          </div>
        </VerticalForm>

        <div
          className="d-flex align-items-center justify-content-center  rounded py-1 px-3 w-100"
          style={{ cursor: "pointer" }}
        >
          <p className="m-0 d-flex align-items-center gap-2 fw-semibold text-primary">
            Continue with Google
            <span>
              <i className="bi bi-google text-danger"></i>
            </span>
          </p>
        </div>
      </AuthLayout>
    </>
  );
};

export default Register;
