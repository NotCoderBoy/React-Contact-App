import React, { useState } from "react";
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../lib/routes";
import { CustomToast } from "widgets/Toast";

import BgImage from "../../assets/img/illustrations/signin.svg";

export default function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const [checked, setChecked] = useState(false);
  const handleTandCChange = () => {
    setChecked(!checked);
    // console.log(!checked);
  };

  const submitRegister = async (e) => {
    e.preventDefault();
    try {
      const { fname, lname, email, password, reEnterPassword } = user;
      if (fname && lname && email && password && reEnterPassword && checked) {
        if (password == reEnterPassword) {
          await axios
            .post("/api/register", {
              firstName: fname,
              lastName: lname,
              email,
              password,
            })
            .then((response) => {
              CustomToast({ type: "success", msg: response.data.message });
              setTimeout(() => {
                navigate("/login", { replace: true });
              }, 5000);
            })
            .catch((error) => {
              if (error.response.status == 400) {
                error.message = error.response.data.message;
              }
              CustomToast({ type: "error", msg: error.message });
            });
        } else {
          CustomToast({ type: "error", msg: "Password Not Matched!!!" });
        }
      } else {
        CustomToast({ type: "error", msg: "All fields are required!!!" });
      }
    } catch (error) {
      CustomToast({ type: "error", msg: error.message });
    }
  };

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={paths.ROOT} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to
              homepage
            </Card.Link>
          </p>
          <Row
            className="justify-content-center form-bg-image"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Form className="mt-4" onSubmit={submitRegister}>
                  <Row>
                    <Col>
                      <Form.Group id="fname" className="mb-4">
                        <Form.Label>First Name</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUser} />
                          </InputGroup.Text>
                          <Form.Control
                            autoFocus
                            required
                            type="text"
                            placeholder="First Name"
                            name="fname"
                            value={user.fname}
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group id="lname" className="mb-4">
                        <Form.Label>Last Name</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUser} />
                          </InputGroup.Text>
                          <Form.Control
                            autoFocus
                            required
                            type="text"
                            placeholder="Last Name"
                            name="lname"
                            value={user.lname}
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        required
                        type="email"
                        placeholder="example@company.com"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Confirm Password"
                        name="reEnterPassword"
                        value={user.reEnterPassword}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                  <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck.Input
                      onClick={handleTandCChange}
                      required
                      id="terms"
                      className="me-2"
                    />
                    <FormCheck.Label htmlFor="terms">
                      I agree to the <Card.Link>terms and conditions</Card.Link>
                    </FormCheck.Label>
                  </FormCheck>

                  <Button variant="primary" type="submit" className="w-100">
                    Sign up
                  </Button>
                </Form>

                <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pill text-facebook me-2"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pill text-twitter me-2"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pil text-dark"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link as={Link} to={paths.LOGIN} className="fw-bold">
                      {` Login here `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
