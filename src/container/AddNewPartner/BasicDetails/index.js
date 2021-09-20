import React, { Component } from "react";
import { Menu, Header, Input, Label, Button, FileUpload } from "components/Form";
import { Row, Col, Card, Image, Switch } from "antd";
import { BasicDetailStyle } from "./style";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CloseOutlined, UploadOutlined } from "@ant-design/icons";


const UserValidation = Yup.object().shape({


  companyName: Yup.string()
    .trim()
    .required(" "),
  email: Yup.string()
    .trim()
    .email()
    .required(" "),
  mobile: Yup.string()
    .trim()
    .min(10)
    .max(10)
    .required(" "),




});



export default class BasicDetail extends Component {
  constructor() {
    super();
    this.state = {
      disable: false,
      imgByte: "",
      imgnm: "",
      initialState: {
        companyName: "",
        email: "",
        mobile: "",
        gstnumber: "",
        pan: "",
        aadhar: "",
      },
    };
  }

  fileUpload = () => {
    try {
      const { imgnm, imgByte } = this.state;
      let name = imgnm;
      if (imgnm && imgByte) {
        let a = name.split(".");
        name = a[0].substr(0, 5) + "." + a[1];
        return (
          <>
            <span className="optionui">
              <span className="txtWrap">{name}</span>
              <CloseOutlined onClick={() => this.removefile()} />
            </span>
            <Image src={imgByte} width={50} height={30} />
          </>
        );
      }
      return (
        <FileUpload
         
          accept=".jpg, .jpeg, .png"
          image={true}
          sendByte={this.setByte}
          elements={<UploadOutlined />}
        
        />
      );
    } catch (error) {
      console.log(error);
    }
  };
  removefile = () => this.setState({ imgByte: "", imgnm: "" });

  setByte = (byteCode, name) =>
    this.setState({ imgByte: byteCode, imgnm: name });

  handleSubmit = async (values, { setSubmitting }) => {
    try {
      this.setState({ btnDisable: true });
      setTimeout(() => {
        this.setState({ btnDisable: false });
      }, 4500);

      setSubmitting(false);
    } catch (error) {
      console.log(error, "handle error");
    }
  };



  render() {
    const { initialState, disable } = this.state;
    return (
      <BasicDetailStyle>
        <Menu />
        <div className="container">
          <Header />
          <div className="allDiv">
            <h1 className="header">Add New Partner</h1>
            <div>
              <Card>
                <h2 className="headerCard">Basic Details:</h2>
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

                              <Label title="Company Name :" className="label" />
                              <Input
                                onBlur={handleBlur}
                                name="companyName"
                                value={values.bankName}
                                handleChange={handleChange}
                                tabIndex="1"
                                className={
                                  errors.companyName && touched.companyName
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

                              <Label title="Email ID :" className="label" />
                              <Input
                                onBlur={handleBlur}
                                name="email"
                                value={values.email}
                                handleChange={handleChange}
                                tabIndex="2"
                                className={
                                  errors.email && touched.email
                                    ? "empty"
                                    : ""
                                }
                              />
                            </div>

                          </Col>
                          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <div className="cardDiv">

                              <Label title="Mobile No :" className="label" />
                              <Input
                                type="number"
                                onBlur={handleBlur}
                                name="mobile"
                                value={values.mobile}
                                handleChange={handleChange}
                                tabIndex="3"
                                className={
                                  errors.mobile && touched.mobile
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

                              <Label title="GST Type :" className="label" />
                              <span className="switch">Registered<Switch/>Unregistered</span>

                            </div>
                          </Col>
                          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <div className="cardDiv">

                              <Label title="GST Number :" className="label" />
                              <Input

                                onBlur={handleBlur}
                                name="gstnumber"
                                value={values.gstnumber}
                                handleChange={handleChange}
                                tabIndex="5"
                                className={
                                  errors.gstnumber && touched.gstnumber
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

                              <Label title="Pan :" className="label" />
                              <Input
                                onBlur={handleBlur}
                                name="pan"
                                value={values.pan}
                                handleChange={handleChange}
                                tabIndex="6"
                                className={
                                  errors.pan && touched.pan
                                    ? "empty"
                                    : ""
                                }
                              />
                            </div>
                          </Col>
                          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <div className="cardDiv">

                              <Label title="Aadhar No :" className="label" />
                              <Input

                                onBlur={handleBlur}
                                name="aadhar "
                                value={values.aadhar}
                                handleChange={handleChange}
                                tabIndex="7"
                                className={
                                  errors.aadhar && touched.aadhar
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

                              <Label title="Company Logo :" className="label" />
                              <div className='upload'>{this.fileUpload()}</div>

                            </div>
                          </Col>

                        </Row>
                      </div>


                      <div className="btn-div">

                        <Button className="submitBtn"
                          disabled={disable}
                        >
                          Previous
                        </Button>
                        <Button type="submit"
                          disabled={disable}
                          onClick={() => {
                            validateForm().then((d) => {
                              if (Object.keys(d).length === 0)
                              this.props.history.push('/admin/financialdetail');
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
      </BasicDetailStyle>
    );
  }
}