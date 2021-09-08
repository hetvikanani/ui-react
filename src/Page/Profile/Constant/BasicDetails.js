import React, { Component } from "react";
import { Input, Label, Button, Select, FileUpload } from "../../../components";
import { Row, Col, Image } from "antd";
import { ProfileStyle } from "../style";
import { CloseOutlined, VerticalAlignTopOutlined } from "@ant-design/icons";

import { Formik, Form } from "formik";
import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  company_name: Yup.string().trim().required(" "),
  partner_code: Yup.string().trim().required(" "),
  email_id: Yup.string().trim().required(" "),
  mobile_no:Yup.string()
  .trim()
  .min(10)
  .max(10)
  .required("Please enter valid Mobile No"),
  gst_type: Yup.string().trim().required(" "),
  gst_number: Yup.string().trim().required(" "),
});

export default class BasicDetails extends Component {
  constructor() {
    super();
    this.state = {
      imgByte: "",
      imgnm: "",

      initState: {
        company_name: "",
        partner_code: "",
        email_id: "",
        mobile_no: "",
        gst_type: "",
        gst_number: "",
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
          // accept="image/*"
          accept=".jpg, .jpeg, .png"
          image={true}
          sendByte={this.setByte}
          elements={
            <Button color="secondary" className="uploadbtn">
              <VerticalAlignTopOutlined />
              No File Choosen
            </Button>
          }
        />
      );
    } catch (error) {
      console.log(error);
    }
  };

  setByte = (byteCode, name) =>
    this.setState({ imgByte: byteCode, imgnm: name });

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
                      title="Company Name"
                      className={
                        errors.company_name && touched.company_name
                          ? "empty"
                          : ""
                      }
                    ></Label>

                    <Input
                      placeholder="Naapbooks Limited"
                      className={
                        errors.company_name && touched.company_name
                          ? "empty"
                          : ""
                      }
                      onBlur={handleBlur}
                      name="company_name"
                      value={values.company_name}
                      handleChange={handleChange}
                      tabIndex="1"
                    ></Input>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label
                      title="Partner Code"
                      className={
                        errors.partner_code && touched.partner_code
                          ? "empty"
                          : ""
                      }
                    ></Label>
                    <Input
                      placeholder="12345"
                      className={
                        errors.partner_code && touched.partner_code
                          ? "empty"
                          : ""
                      }
                      onBlur={handleBlur}
                      name="partner_code"
                      value={values.partner_code}
                      handleChange={handleChange}
                      tabIndex="2"
                    ></Input>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label
                      title="Email ID"
                      className={
                        errors.email_id && touched.email_id ? "empty" : ""
                      }
                    ></Label>
                    <Input
                      placeholder="text@gmail.com"
                      className={
                        errors.email_id && touched.email_id ? "empty" : ""
                      }
                      onBlur={handleBlur}
                      name="email_id"
                      value={values.email_id}
                      handleChange={handleChange}
                      tabIndex="3"
                    ></Input>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label
                      title="Mobile No"
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
                      tabIndex="4"
                    ></Input>
                     {errors.mobile_no && touched.mobile_no && (
                      <div className="form-error">{errors.mobile_no}</div>
                    )}
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label
                      title="GST Type"
                      className={
                        errors.gst_type && touched.gst_type ? "empty" : ""
                      }
                    ></Label>
                    <Select
                      defaultValue="Select Option"
                      withID
                      selectClass={
                        errors.gst_type && touched.gst_type ? "empty" : ""
                      }
                      name="gst_type"
                      tabIndex="5"
                      value={values.gst_type}
                      // onChange={() => {}}
                    ></Select>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label
                      title="GST Number"
                      className={
                        errors.gst_number && touched.gst_number ? "empty" : ""
                      }
                    ></Label>
                    <Input
                      placeholder="22AAAAA0000A1Z5"
                      className={
                        errors.gst_number && touched.gst_number ? "empty" : ""
                      }
                      onBlur={handleBlur}
                      name="gst_number"
                      value={values.gst_number}
                      handleChange={handleChange}
                      tabIndex="6"
                    ></Input>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label title="Pan"></Label>
                    <Input placeholder="BNZPM2501F"></Input>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label title="Aadhaar No"></Label>
                    <Input placeholder="444433332222"></Input>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Label title="Company Logo"></Label>
                    <>{this.fileUpload()}</>
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
