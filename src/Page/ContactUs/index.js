import React, { Component } from "react";
import { ContactUsStyle } from "./style";
import { Row, Col } from "antd";
import { Button, Card, Input } from "../../components";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const footerArr = ["Surat", "Vadodara", "Mumbai", "U.S.A"];

const ValidationSchema = Yup.object().shape({
  name: Yup.string().trim().required(" "),
  email: Yup.string().trim().required(" "),
  message: Yup.string().trim().required(" "),
});

class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      initState: {
        name: "",
        email: "",
        message: "",
      },
    };
  }

  footer = () => {
    return footerArr.map((g) => (
      <Col xs={24} sm={12} md={12} lg={6} xl={6} className="footerCol">
        <div className="footerDiv2">{g}</div>

        <ul>
          <li> Broadway Business Centre,</li>
          <li> 3rd Floor, Netaji Rd,</li>
          <li> Elisbridge, Ahmedabad,</li>
          <li>Gujarat 380006</li>
        </ul>
      </Col>
    ));
  };

  handleSubmit = (value) => {};

  render() {
    const { initState } = this.state;

    return (
      <ContactUsStyle>
        <div className="mainDiv">
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Card className="cardShadow">
                <h3>Contact Us</h3>
                <Formik
                  initialValues={initState}
                  validationSchema={ValidationSchema}
                  onSubmit={this.handleSubmit}
                >
                  {({
                    values,
                    errors,
                    touched,
                    onBlur,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <div className="divCard">
                        <Input
                          onBlur={handleBlur}
                          name="name"
                          value={values.name}
                          handleChange={handleChange}
                          className={
                            errors.name && touched.name ? "empty" : "inputCard"
                          }
                          placeholder="Full Name"
                        />
                        <Input
                          onBlur={handleBlur}
                          name="email"
                          value={values.email.trim()}
                          handleChange={handleChange}
                          className={
                            errors.email && touched.email
                              ? "empty"
                              : "inputCard"
                          }
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="textareaDiv">
                      <Input
                        row={4}
                        placeholder="Message"
                        onBlur={handleBlur}
                        name="message"
                        value={values.message}
                        handleChange={handleChange}
                        className={
                          errors.message && touched.message
                            ? "empty"
                            : "inputCard"
                        }
                      ></Input>
                      </div>
                     
                      <div className="btnDiv">
                        <Button type="submit" className="btnCard1">
                          Send Message
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Card className="cardShadow">
                <h3>Head Office</h3>
                <div className="divCardHead">
                  <div className="iconDiv">
                    <i class="fas fa-map-marker-alt icon"></i>
                  </div>

                  <ul>
                    <li> Broadway Business Centre,</li>
                    <li> 3rd Floor, Netaji Rd,</li>
                    <li> Elisbridge, Ahmedabad,</li>
                    <li>Gujarat 380006</li>
                  </ul>
                </div>
                <div className="divCard2">
                  <div className="iconDiv">
                    <i class="fas fa-phone-alt icon"></i>
                  </div>
                  <div>
                    <p>+91 79264 46782</p>
                  </div>
                </div>
                <div className="divCard2">
                  <div className="iconDiv">
                    <i class="fas fa-envelope icon"></i>
                  </div>
                  <div>
                    <span>info@naapbooks.com</span>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <div>
            <Card className="cardfooterShadow">
              <div className="headerDiv">
                <h3>Our Branches</h3>

                <div className="searchInput">
                  <Input placeholder="Search" name="search"></Input>
                </div>
              </div>

              <Row>{this.footer()}</Row>
            </Card>
          </div>
        </div>
      </ContactUsStyle>
    );
  }
}
export default ContactUs;
