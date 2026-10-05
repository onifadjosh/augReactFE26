import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Register = () => {
  const [serverMessage, setServerMessage] = useState(null);
  const [messageType, setMessageType] = useState("success");
  const [preview, setPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const fileInputRef = useRef(null);

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    tag: "",
    photo: "",
  };

  const validationSchema = Yup.object({
    firstname: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name is too long")
      .required("First name is required"),
    lastname: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name is too long")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[A-Z]/, "Must contain an uppercase letter")
      .matches(/[0-9]/, "Must contain a number")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
    tag: Yup.string().max(20, "Tag is too long").nullable(),
    photo: Yup.string().required("Profile photo is required"),
  });

  const handleFileChange = (e, setFieldValue) => {
    const file = e.currentTarget.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFieldValue("photo", reader.result);
      setPreview(reader.result);

      //   console.log(preview);
    };
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setServerMessage(null);
    try {
      const { confirmPassword, ...payload } = values;

      console.log(values);

      const response = await axios.post(
        "http://localhost:5008/api/v1/register",
        {
          firstname: payload.firstname,
          lastname: payload.lastname,
          email: payload.email,
          password: payload.password,
          tag: payload.tag.trim().length < 1 && payload.tag,
          photo:payload.photo
        },
        { headers: { "Content-Type": "application/json" } },
      );

      setMessageType("success");
      setServerMessage(
        `Account created! Your account number: ${response.data.data.accountNumber}`,
      );
      resetForm();
      setPreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";

      localStorage.setItem("token", response.data.data.token);
    } catch (error) {
      setMessageType("danger");
      setServerMessage(
        error.response?.data?.message || "Something went wrong. Try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  //   console.log(preview);

  return (
    <div className="container-fluid min-vh-100 p-0">
      <div className="row g-0 min-vh-100">
        {/* ── LEFT: Branding panel with background image ─────── */}
        <div
          className="col-lg-5 d-none d-lg-flex position-relative overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1669251921941-ae3645715017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark gradient overlay for text readability */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.75) 100%)",
            }}
          ></div>

          <div className="d-flex flex-column justify-content-between p-5 w-100 position-relative">
            {/* Brand */}
            <div className="d-flex align-items-center gap-2">
              <div
                className="bg-white text-dark rounded-3 d-flex align-items-center justify-content-center fw-bold"
                style={{ width: 40, height: 40 }}
              >
                A
              </div>
              <span className="text-white fw-bold fs-5">AugBank</span>
            </div>

            {/* Hero copy */}
            <div>
              <p className="text-white-50 text-uppercase small fw-medium mb-3">
                Where transactions are made easy
              </p>
              <h1 className="display-4 text-white fw-bold lh-1 mb-4">
                Banking,
                <br />
                <span className="text-white-50">reimagined.</span>
              </h1>
              <p className="text-white-50 fs-6 pe-5 mb-0">
                Join thousands of users managing their money with speed, clarity
                and control. Open your account in under a minute.
              </p>
            </div>

            {/* Footer */}
            <div className="d-flex align-items-center gap-3 text-white-50 small">
              <span>© 2026 AugBank</span>
              <span className="opacity-25">•</span>
              <span>Secured &amp; encrypted</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Form panel ──────────────────────────────── */}
        <div className="col-lg-7 d-flex align-items-center justify-content-center bg-light p-4 p-md-5">
          <div style={{ maxWidth: 480 }} className="w-100">
            {/* Mobile-only brand */}
            <div className="d-flex d-lg-none align-items-center gap-2 mb-4">
              <div
                className="bg-dark text-white rounded-3 d-flex align-items-center justify-content-center fw-bold"
                style={{ width: 36, height: 36 }}
              >
                A
              </div>
              <span className="text-dark fw-bold">AugBank</span>
            </div>

            {/* Heading */}
            <div className="mb-4">
              <h2 className="text-dark fw-bold mb-2">Create your account</h2>
              <p className="text-secondary small mb-0">
                It takes less than a minute. No credit card required.
              </p>
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form>
                  {/* ── Avatar picker ─────────────────────── */}
                  <div className="d-flex align-items-center gap-3 mb-4 pb-4 border-bottom">
                    <div
                      className="position-relative flex-shrink-0"
                      style={{ width: 72, height: 72 }}
                    >
                      <div className="rounded-circle overflow-hidden bg-white border w-100 h-100 d-flex align-items-center justify-content-center">
                        {preview ? (
                          <img
                            src={preview}
                            alt="Profile preview"
                            className="w-100 h-100"
                            style={{ objectFit: "cover" }}
                          />
                        ) : (
                          <i className="bi bi-person text-secondary fs-2"></i>
                        )}
                      </div>

                      <label
                        htmlFor="photo-upload"
                        className="position-absolute bottom-0 end-0 bg-dark text-white rounded-circle d-flex align-items-center justify-content-center border border-2 border-white"
                        style={{ width: 26, height: 26, cursor: "pointer" }}
                        title="Upload photo"
                      >
                        <i
                          className="bi bi-pencil-fill"
                          style={{ fontSize: 10 }}
                        ></i>
                      </label>

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        id="photo-upload"
                        className="d-none"
                        onChange={(e) => handleFileChange(e, setFieldValue)}
                      />
                    </div>

                    <div className="flex-grow-1">
                      <div className="text-dark fw-medium small mb-1">
                        Profile photo
                      </div>
                      <div className="text-secondary" style={{ fontSize: 12 }}>
                        PNG or JPG — recommended 400×400
                      </div>
                      <ErrorMessage
                        name="photo"
                        component="div"
                        className="text-danger mt-1"
                        style={{ fontSize: 12 }}
                      />
                    </div>
                  </div>

                  {/* ── Server alert ──────────────────────── */}
                  {serverMessage && (
                    <div
                      className={`alert border rounded-3 d-flex align-items-start gap-2 py-3 px-3 ${
                        messageType === "success"
                          ? "bg-white border-secondary-subtle text-dark"
                          : "bg-white border-danger text-danger"
                      }`}
                      role="alert"
                    >
                      <i
                        className={`bi ${
                          messageType === "success"
                            ? "bi-check-circle"
                            : "bi-exclamation-triangle"
                        } mt-1`}
                      ></i>
                      <div className="small">{serverMessage}</div>
                    </div>
                  )}

                  {/* ── Name row ──────────────────────────── */}
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label className="form-label text-secondary small fw-medium mb-1">
                        First name
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white text-secondary">
                          <i className="bi bi-person"></i>
                        </span>
                        <Field
                          type="text"
                          name="firstname"
                          className="form-control bg-white text-dark"
                          placeholder="John"
                        />
                      </div>
                      <ErrorMessage
                        name="firstname"
                        component="div"
                        className="text-danger mt-1"
                        style={{ fontSize: 12 }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label text-secondary small fw-medium mb-1">
                        Last name
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white text-secondary">
                          <i className="bi bi-person"></i>
                        </span>
                        <Field
                          type="text"
                          name="lastname"
                          className="form-control bg-white text-dark"
                          placeholder="Doe"
                        />
                      </div>
                      <ErrorMessage
                        name="lastname"
                        component="div"
                        className="text-danger mt-1"
                        style={{ fontSize: 12 }}
                      />
                    </div>
                  </div>

                  {/* ── Email ─────────────────────────────── */}
                  <div className="mt-3">
                    <label className="form-label text-secondary small fw-medium mb-1">
                      Email address
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-white text-secondary">
                        <i className="bi bi-envelope"></i>
                      </span>
                      <Field
                        type="email"
                        name="email"
                        className="form-control bg-white text-dark"
                        placeholder="you@example.com"
                      />
                    </div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger mt-1"
                      style={{ fontSize: 12 }}
                    />
                  </div>

                  {/* ── Tag ───────────────────────────────── */}
                  <div className="mt-3">
                    <label className="form-label text-secondary small fw-medium mb-1">
                      Tag{" "}
                      <span className="text-secondary opacity-50">
                        (optional)
                      </span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-white text-secondary">
                        <i className="bi bi-at"></i>
                      </span>
                      <Field
                        type="text"
                        name="tag"
                        className="form-control bg-white text-dark"
                        placeholder="johndoe"
                      />
                    </div>
                    <ErrorMessage
                      name="tag"
                      component="div"
                      className="text-danger mt-1"
                      style={{ fontSize: 12 }}
                    />
                  </div>

                  {/* ── Passwords ─────────────────────────── */}
                  <div className="row g-3 mt-1">
                    <div className="col-sm-6">
                      <label className="form-label text-secondary small fw-medium mb-1">
                        Password
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white text-secondary">
                          <i className="bi bi-lock"></i>
                        </span>
                        <Field
                          type={showPassword ? "text" : "password"}
                          name="password"
                          className="form-control bg-white text-dark"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          className="input-group-text bg-white text-secondary"
                          onClick={() => setShowPassword((s) => !s)}
                          tabIndex={-1}
                        >
                          <i
                            className={`bi ${
                              showPassword ? "bi-eye-slash" : "bi-eye"
                            }`}
                          ></i>
                        </button>
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger mt-1"
                        style={{ fontSize: 12 }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label text-secondary small fw-medium mb-1">
                        Confirm password
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white text-secondary">
                          <i className="bi bi-shield-lock"></i>
                        </span>
                        <Field
                          type={showConfirm ? "text" : "password"}
                          name="confirmPassword"
                          className="form-control bg-white text-dark"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          className="input-group-text bg-white text-secondary"
                          onClick={() => setShowConfirm((s) => !s)}
                          tabIndex={-1}
                        >
                          <i
                            className={`bi ${
                              showConfirm ? "bi-eye-slash" : "bi-eye"
                            }`}
                          ></i>
                        </button>
                      </div>
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-danger mt-1"
                        style={{ fontSize: 12 }}
                      />
                    </div>
                  </div>

                  {/* ── Submit ────────────────────────────── */}
                  <button
                    type="submit"
                    className="btn btn-dark w-100 fw-semibold py-2 rounded-3 mt-4 d-flex align-items-center justify-content-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Creating account...
                      </>
                    ) : (
                      <>
                        Create account
                        <i className="bi bi-arrow-right"></i>
                      </>
                    )}
                  </button>

                  {/* ── Footer link ───────────────────────── */}
                  <p className="text-secondary text-center small mt-4 mb-0">
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="text-dark text-decoration-none fw-medium"
                    >
                      Sign in
                    </a>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
