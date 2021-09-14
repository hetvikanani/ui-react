import React, { Component } from "react";
import { Menu, Header, Input, Label, Button } from "components/Form";
import { Row, Col, Card } from "antd";
import { FinancialDetailStyle } from "./style";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const UserValidation = Yup.object().shape({
  bankName: Yup.string()
    .trim()
    .required(" "),
  branchName: Yup.string()
    .trim()
    .required(" "),



});

export default class FinancialDetail extends Component {
  constructor() {
    super();
    this.state = {
      disable: false,
      initialState: {
        bankName: "",
        branchName: "",
        address: "",
        accountNo: "",
        ifscCode: "",
        pincode: '',
        city: '',
        state: '',
      },
    };
  }
  render() {
    const { initialState, disable } = this.state;
    return (
      <FinancialDetailStyle>
        <Menu />
        <div className="container">
          <Header />
          <div className="allDiv">
            <h1 className="header">Add New Partner</h1>
            <div>
              <Card>
                <h2 className="headerCard">Financial Details:</h2>
                <Formik
                  initialValues={initialState}
                  validationSchema={UserValidation}
                  onSubmit={this.handleSubmit}
                  enableReinitialize
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,

                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <div className="form-div">
                        <Row gutter={24}>
                          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <div className="cardDiv">

                              <Label title="Bank Name :" className="label" />
                              <Input
                                onBlur={handleBlur}
                                name="bankName"
                                value={values.bankName}
                                handleChange={handleChange}
                                max={255}
                                tabIndex="1"
                                className={
                                  errors.bankName && touched.bankName
                                    ? "empty"
                                    : ""
                                }
                              />
                            </div>
                          </Col>

                        </Row>

                        <Row gutter={24}>

                          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <div className="cardDiv">

                              <Label title="Branch Name :" className="label" />
                              <Input
                                onBlur={handleBlur}
                                name="branchName"
                                value={values.branchName}
                                handleChange={handleChange}
                                max={255}
                                tabIndex="3"
                                className={
                                  errors.branchName && touched.branchName
                                    ? "empty"
                                    : ""
                                }
                              />
                            </div>
                            <div className="cardDiv">

                              <Label title="Account No :" className="label" />
                              <Input
                                onBlur={handleBlur}
                                name="accountNo"
                                value={values.accountNo}
                                handleChange={handleChange}
                                max={255}
                                tabIndex="3"
                                className={
                                  errors.accountNo && touched.accountNo
                                    ? "empty"
                                    : ""
                                }
                              />
                            </div>
                          </Col>
                          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <div className="cardDiv">

                              <Label title="Address :" className="label" />
                              <Input
                                row={6}
                                onBlur={handleBlur}
                                name="branchName"
                                value={values.branchName}
                                handleChange={handleChange}
                                max={255}
                                tabIndex="3"
                                className={
                                  errors.branchName && touched.branchName
                                    ? "empty"
                                    : ""
                                }
                              />
                            </div>
                          </Col>

                        </Row>

                        <Row gutter={24}>

                          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <div className="cardDiv">

                              <Label title="IFSC Code :" className="label" />
                              <Input
                                onBlur={handleBlur}
                                name="ifscCode"
                                value={values.ifscCode}
                                handleChange={handleChange}
                                max={255}
                                tabIndex="3"
                                className={
                                  errors.ifscCode && touched.ifscCode
                                    ? "empty"
                                    : ""
                                }
                              />
                            </div>
                          </Col>
                          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <div className="cardDiv">

                              <Label title="Pincode :" className="label" />
                              <Input

                                onBlur={handleBlur}
                                name="branchName"
                                value={values.branchName}
                                handleChange={handleChange}
                                max={255}
                                tabIndex="3"
                                className={
                                  errors.branchName && touched.branchName
                                    ? "empty"
                                    : ""
                                }
                              />
                            </div>
                          </Col>

                        </Row>
                        <Row gutter={24}>

                          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <div className="cardDiv">

                              <Label title="City :" className="label" />
                              <Input
                                onBlur={handleBlur}
                                name="city"
                                value={values.city}
                                handleChange={handleChange}
                                max={255}
                                tabIndex="3"
                                className={
                                  errors.city && touched.city
                                    ? "empty"
                                    : ""
                                }
                              />
                            </div>
                          </Col>
                          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <div className="cardDiv">

                              <Label title="State :" className="label" />
                              <Input

                                onBlur={handleBlur}
                                name="state "
                                value={values.state}
                                handleChange={handleChange}
                                max={255}
                                tabIndex="3"
                                className={
                                  errors.state && touched.state
                                    ? "empty"
                                    : ""
                                }
                              />
                            </div>
                          </Col>

                        </Row>
                      </div>


                      <div className="btn-div">

                        <Button type="submit" className="submitBtn"
                          disabled={disable}
                        >
                          Previous
                        </Button>
                        <Button 
                          disabled={disable}
                        >
                          Next
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </Card>
            </div>
          </div>
        </div>
      </FinancialDetailStyle>
    );
  }
}