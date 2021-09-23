import React, { Component } from "react";
import { Row, Col, Image } from "antd";
import { CloseOutlined, UploadOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { BasicDetailsStyle } from "./style";
import {basicDetailConst} from "./constant";


import { Input, Label, RoundSwitch, Button, FileUpload } from "components/Form";
const UserValidation = Yup.object().shape({
  companyName: Yup.string()
  .trim()
  .required(" ")
  .matches(/^[aA-zZ0-9\s]+$/, "Only alphabets are allowed for this field "),
  

  email: Yup.string().trim().email().required(" "),
  mobile: Yup.string().trim().min(10).max(10).required(" "),
  gstnumber: Yup.string()
    .trim()
    .matches(
      /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/,
      "Enter Valid GST No."
    ),
  pan: Yup.string()
    .trim()
    .matches(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/, "Enter Valid Pan No."),
  aadhar: Yup.string()
    .trim()
    .min(12, "Enter Min 12 no.")
    .max(12, "Enter Max 12 no."),
});
class BasicDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disable: false,
      gstType: false,
      gstNoError: false,
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
  switchChange = () => {
    try {
      const { gstType } = this.state;
      this.setState({ gstType: !gstType });
    } catch (error) {
      console.log(error);
    }
  };
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
     
      const { gstType } = this.state;
      this.setState({ btnDisable: true });
      setTimeout(() => {
        this.setState({ btnDisable: false });
      }, 4500);
      if(gstType && values.gstnumber === ""){
      this.setState({ gstNoError: gstType && values.gstnumber === "" });
      }else{
        this.props.countInc();
      }
      
      

      setSubmitting(false);
    } catch (error) {
      console.log(error, "handle error");
    }
  };

  render() {
    const { initialState, disable, gstType, gstNoError } = this.state;
    return (
      <BasicDetailsStyle>
        <h2>Basic Details:</h2>
        <div className="formDiv">
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
                <Row gutter={24}>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <div className="field">
                      <Label
                        title={basicDetailConst.comName}
                        className={
                          errors.companyName && touched.companyName
                            ? "empty"
                            : ""
                        }
                      />
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
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <div className="field">
                      <Label
                        title={basicDetailConst.email}
                        className={errors.email && touched.email ? "empty" : ""}
                      />
                      <Input
                        onBlur={handleBlur}
                        name="email"
                        value={values.email}
                        handleChange={handleChange}
                        tabIndex="2"
                        className={errors.email && touched.email ? "empty" : ""}
                      />
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <div className="field">
                      <Label
                        title={basicDetailConst.mobile}
                        className={
                          errors.mobile && touched.mobile ? "empty" : ""
                        }
                      />
                      <Input
                        type="number"
                        onBlur={handleBlur}
                        name="mobile"
                        value={values.mobile}
                        handleChange={handleChange}
                        tabIndex="3"
                        className={
                          errors.mobile && touched.mobile ? "empty" : ""
                        }
                      />
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <div className="field">
                      <Label title={basicDetailConst.gst} />
                      <RoundSwitch
                        left="Not Registered"
                        right="Registered"
                        checked={gstType}
                        handleChange={this.switchChange}
                      />
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <div className="field">
                      <Label
                        title={basicDetailConst.pan}
                        className={errors.pan && touched.pan ? "empty" : ""}
                      />
                      <Input
                        onBlur={handleBlur}
                        name="pan"
                        value={values.pan}
                        handleChange={handleChange}
                        tabIndex="4"
                        className={errors.pan && touched.pan ? "empty" : ""}
                      />
                    </div>
                    {errors.pan && touched.pan && (
                      <div className="form-error">{errors.pan}</div>
                    )}
                  </Col>
                  {gstType ? (
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                      <div className="field">
                        <Label
                          title={basicDetailConst.gstNum}
                          className={
                            (errors.gstnumber && touched.gstnumber) ||
                            (gstNoError && values.gstnumber === "")
                              ? "empty"
                              : ""
                          }
                        />
                        <Input
                          onBlur={handleBlur}
                          name="gstnumber"
                          value={values.gstnumber.toUpperCase()}
                          handleChange={handleChange}
                          tabIndex="5"
                          className={
                            (errors.gstnumber && touched.gstnumber) ||
                            (gstNoError && values.gstnumber === "")
                              ? "empty"
                              : ""
                          }
                        />
                        {errors.gstnumber && touched.gstnumber && (
                          <div className="form-error">{errors.gstnumber}</div>
                        )}
                      </div>
                    </Col>
                  ) : (
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}></Col>
                  )}
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <div className="field">
                      <Label title={basicDetailConst.aadhar} />
                      <Input
                        type="number"
                        onBlur={handleBlur}
                        name="aadhar"
                        value={values.aadhar}
                        handleChange={handleChange}
                        tabIndex="6"
                        className={
                          errors.aadhar && touched.aadhar ? "empty" : ""
                        }
                      />
                      {errors.aadhar && touched.aadhar && (
                        <div className="form-error">{errors.aadhar}</div>
                      )}
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <div className="field">
                      <Label title={basicDetailConst.comLogo}/>
                      <div className="pointer">{this.fileUpload()}</div>
                    </div>
                  </Col>
                </Row>
                <div className="bottomDiv">
                  <div className="btn">
                    <Button type="button" onClick ={() => this.props.history.push("/partners")}>{basicDetailConst.previous}</Button>
                    <Button type="submit" disabled={disable}>{basicDetailConst.next}</Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </BasicDetailsStyle>
    );
  }
}
export default  withRouter (BasicDetails);
