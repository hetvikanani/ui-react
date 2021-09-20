import React, { Component } from "react";
import { Menu, Header, Input, Label, Button } from "components/Form";
import { Row, Col, Card } from "antd";
import { FinancialDetailStyle } from "./style";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router";

const UserValidation = Yup.object().shape({
  bankName: Yup.string()
    .trim()
    .required(" "),
  branchName: Yup.string()
    .trim()
    .required(" "),
   
    branchName: Yup.string()
    .trim()
    .required(" "),
    pincode: Yup.string().trim().required(" ").min(6).max(6),
    accountNo: Yup.string().trim().min(11).max(11).required(" "),
  ifscCode: Yup.string()
    .trim()
    .required(" ")
    .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "only"),


});

class FinancialDetail extends Component {
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
                    validateForm,

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
                              type="number"
                                onBlur={handleBlur}
                                name="accountNo"
                                value={values.accountNo}
                                handleChange={handleChange}
                                
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
                                
                                tabIndex="3"
                                
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
                                type="number"
                                onBlur={handleBlur}
                                name="pincode"
                                value={values.pincode}
                                handleChange={handleChange}
                               
                                tabIndex="3"
                                className={
                                  errors.pincode && touched.pincode
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

                        <Button  className="submitBtn"
                          disabled={disable}
                          onClick={()=>{this.props.history.push("/admin/basicdetail")}}
                        >
                          
                          Previous
                        </Button>
                        <Button 
                        type="submit"
                        disabled={disable}
                        onClick={() => {
                          validateForm().then((d) => {
                            if (Object.keys(d).length === 0)
                            this.props.history.push('/admin/contactdetail');
                            else handleSubmit();
                          });
                        }}
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


export default withRouter(FinancialDetail);