import React, { Component } from "react";
import { Input, Label, Button, Select } from "../../../components";
import { Row, Col } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ProfileStyle } from "../style";


let City=["rajkot","ahmedabd"];

const ValidationSchema = Yup.object().shape({
  bank_name: Yup.string()
    .trim()
    .required(" ")
    ,
  branch_name: Yup.string().trim().required(" ").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  account_no: Yup.string().trim().min(11).max(11).required(" "),
  ifsc_code: Yup.string()
    .trim()
    .required(" ")
    .matches(/^[A-Z]{4}[0][A-Z0-9]{6}$/, "only"),
  address: Yup.string().trim().required(" "),
  pincode: Yup.string().trim().required(" "),
  city: Yup.string().trim().required(" "),
  state: Yup.string().trim().required(" "),
});

export default class FinancialDetails extends Component {
  constructor() {
    super();
    this.state = {
      initState: {
        bank_name: "",
        branch_name: "",
        account_no: "",
        ifsc_code: "",
        address: "",
        pincode: "",
        city: "",
        state: "",
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
                      title="Bank Name"
                      className={
                        errors.bank_name && touched.bank_name ? "empty" : ""
                      }
                    ></Label>
                    <Select
                      defaultValue="-Select Bank-"
                      withID
                      selectClass={
                        errors.bank_name && touched.bank_name ? "empty" : ""
                      }
                      name="bank_name"
                      tabIndex="1"
                      value={values.bank_name}
                    ></Select>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label
                      title="Branch Name"
                      className={
                        errors.branch_name && touched.branch_name ? "empty" : ""
                      }
                    ></Label>
                    <Input
                      placeholder="Ahmedabad"
                      className={
                        errors.branch_name && touched.branch_name ? "empty" : ""
                      }
                      onBlur={handleBlur}
                      name="branch_name"
                      value={values.branch_name}
                      handleChange={handleChange}
                      tabIndex="2"
                    ></Input>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label
                      title="Account No."
                      className={
                        errors.account_no && touched.account_no ? "empty" : ""
                      }
                    ></Label>
                    <Input
                      placeholder="784512471254785124"
                      type="number"
                      className={
                        errors.account_no && touched.account_no ? "empty" : ""
                      }
                      onBlur={handleBlur}
                      name="account_no"
                      value={values.account_no}
                      handleChange={handleChange}
                      tabIndex="3"
                    ></Input>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label
                      title="IFSC Code"
                      className={
                        errors.ifsc_code && touched.ifsc_code ? "empty" : ""
                      }
                    ></Label>
                    <Input
                      placeholder="SBIN0005943"
                      className={
                        errors.ifsc_code && touched.ifsc_code ? "empty" : ""
                      }
                      onBlur={handleBlur}
                      name="ifsc_code"
                      value={values.ifsc_code}
                      handleChange={handleChange}
                      tabIndex="4"
                    ></Input>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label
                      title="Address"
                      className={
                        errors.address && touched.address ? "empty" : ""
                      }
                    ></Label>
                    <Input
                      rows={2}
                      placeholder=" Name"
                      className={
                        errors.address && touched.address ? "empty" : ""
                      }
                      onBlur={handleBlur}
                      name="address"
                      value={values.address}
                      handleChange={handleChange}
                      tabIndex="5"
                    ></Input>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label
                      title="Pincode"
                      className={
                        errors.pincode && touched.pincode ? "empty" : ""
                      }
                    ></Label>
                    <Input
                      placeholder="385511"
                      className={
                        errors.pincode && touched.pincode ? "empty" : ""
                      }
                      onBlur={handleBlur}
                      name="pincode"
                      type="number"
                      value={values.pincode}
                      handleChange={handleChange}
                      tabIndex="6"
                    ></Input>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label
                      title="City"
                      className={errors.city && touched.city ? "empty" : ""}
                    ></Label>
                    <Select
                      defaultValue="-Select City-"
                      data={City}
                      withID
                      selectClass={errors.city && touched.city ? "empty" : ""}
                      name="city"
                      tabIndex="7"
                      value={values.city}
                    ></Select>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label
                      title="State"
                      className={errors.state && touched.state ? "empty" : ""}
                    ></Label>
                    <Select
                      defaultValue="-Select State-"
                      withID
                      selectClass={errors.state && touched.state ? "empty" : ""}
                      name="state"
                      tabIndex="8"
                      value={values.state}
                    ></Select>
                  </Col>
                </Row>
                <div className="button">
                  <Button type="submit">Update</Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </ProfileStyle>
    );
  }
}
