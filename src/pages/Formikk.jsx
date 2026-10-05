
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Modal } from 'bootstrap'


import * as yup from "yup";
import Modalcomp from "../components/Modalcomp";
import { useState } from "react";

const Formikk = () => {
  const navigate = useNavigate()
  const [errorMessage, seterrorMessage] = useState(null)
  let formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },

    onSubmit: async() => {
      try {
        console.log(formik.values);
      let response =await axios.post("http://localhost:5005/api/v1/register", formik.values,
        {
          headers:{
            "Authorization":"Bearer eyfgjklñlkjhgfdxbnmmnbvcx bnmklkjhgfdszxcvhjkjytrdesxcjkjhgfdsxcvjkjhgfd"
          }
        }

      )
      console.log("the response itself",response);
       
      console.log("the res.data",response.data);
        
        console.log("the res.data.message", response.data.message);

        if(response.status==201){
          seterrorMessage(null)
          navigate("/effectt")
        }
        
      } catch (err) {
        console.log(err);
        console.log(err.response.data.message);
        // alert("")
        seterrorMessage(err.response.data.message)
        
        const modalEl = document.getElementById('exampleModal');
  const modal = Modal.getOrCreateInstance(modalEl);
  modal.show();
        
      }
    },

    validationSchema: yup.object({
      firstname: yup
        .string("First name must be a string")
        .required("First name is required")
        .min(3),
      lastname: yup
        .string("Last name must be a string")
        .required("Last name is required")
        .min(3),
      email: yup
        .string("email must be a string")
        .required("email is required")
        .email("Invalid email"),
      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password is too weak",
        ),
    }),
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Registration Form</h2>
              
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="firstname" className="form-label fw-semibold">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    id="firstname"
                    name="firstname"
                    className={`form-control ${formik.touched.firstname && formik.errors.firstname ? 'is-invalid' : ''}`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                  />
                  {formik.touched.firstname && formik.errors.firstname && (
                    <div className="invalid-feedback">{formik.errors.firstname}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label fw-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    id="lastname"
                    name="lastname"
                    className={`form-control ${formik.touched.lastname && formik.errors.lastname ? 'is-invalid' : ''}`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                  />
                  {formik.touched.lastname && formik.errors.lastname && (
                    <div className="invalid-feedback">{formik.errors.lastname}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    name="email"
                    className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="invalid-feedback">{formik.errors.email}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                    name="password"
                    className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="invalid-feedback">{formik.errors.password}</div>
                  )}
                  <small className="text-muted mt-1 d-block">
                    Min 8 chars, uppercase, lowercase, number & special char
                  </small>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-100 py-2 fw-semibold"
                  disabled={!formik.isValid || !formik.dirty}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>


      <Modalcomp message={errorMessage}/>
    </div>
  );
};

export default Formikk;