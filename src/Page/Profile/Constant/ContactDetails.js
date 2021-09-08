import React, { Component } from "react";
import { Input, Label, Button } from "../../../components";
import { Row, Col, Divider } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ProfileStyle } from "../style";

const ValidationSchema = Yup.object().shape({
  contact_name: Yup.string()
    .trim()
    .required(
      "Please enter only alphanumeric letters. Special characters are not allowed"
    )
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  mobile_no: Yup.string()
    .trim()
    .min(10)
    .max(10)
    .required("Please enter valid Mobile No"),
  email_id: Yup.string()
    .trim()
    .email()
    .required("Please enter valid Email Address"),
});

export default class ContactDetails extends Component {
  constructor() {
    super();
    this.state = {
      initState: {
        contact_name: "",
        mobile_no: "",
        email_id: "",
      },
    };
  }

  handleSubmit = (value) => {};

  render() {
    const { initState } = this.state;

    return (
      <ProfileStyle>
        <div>
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
                <Row gutter={24}>
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label
                      title="Contact Name"
                      className={
                        errors.contact_name && touched.contact_name
                          ? "empty"
                          : ""
                      }
                    ></Label>
                    <Input
                      placeholder="John"
                      className={
                        errors.contact_name && touched.contact_name
                          ? "empty"
                          : ""
                      }
                      onBlur={handleBlur}
                      name="contact_name"
                      value={values.contact_name}
                      handleChange={handleChange}
                      tabIndex="1"
                    ></Input>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label
                      title="Mobile Number"
                      className={
                        errors.mobile_no && touched.mobile_no ? "empty" : ""
                      }
                    ></Label>
                    <Input
                      placeholder="9845784512"
                      type="number"
                      className={
                        errors.mobile_no && touched.mobile_no ? "empty" : ""
                      }
                      onBlur={handleBlur}
                      name="mobile_no"
                      value={values.mobile_no}
                      handleChange={handleChange}
                      tabIndex="2"
                    ></Input>
                    {errors.mobile_no && touched.mobile_no && (
                      <div className="form-error">{errors.mobile_no}</div>
                    )}
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label
                      title="Email ID"
                      className={
                        errors.email_id && touched.email_id ? "empty" : ""
                      }
                    ></Label>
                    <Input
                      placeholder="john@gmail.com"
                      className={
                        errors.email_id && touched.email_id ? "empty" : ""
                      }
                      onBlur={handleBlur}
                      name="email_id"
                      value={values.email_id}
                      handleChange={handleChange}
                      tabIndex="3"
                    ></Input>
                    {errors.email_id && touched.email_id && (
                      <div className="form-error">{errors.email_id}</div>
                    )}
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label title="Designation"></Label>
                    <Input placeholder="Web designer"></Input>
                  </Col>
                </Row>
                <div className="button">
                  <Button type="submit">Save</Button>
                </div>
              </Form>
            )}
          </Formik>
          <Divider />
        </div>
      </ProfileStyle>
    );
  }
}
