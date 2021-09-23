import React, { Component } from "react";
import { Row, Col,Image } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CloseOutlined, UploadOutlined } from "@ant-design/icons";

import { ProAddEditStyle } from "./style";
import { Input, Label, Button,FileUpload } from "components/Form";
const ProductValidation = Yup.object().shape({
  productName: Yup.string().trim().required(" "),
});
class ProAddEditDetail extends Component {
  constructor() {
    super();
    this.state = {
      disable: false,
      comLogoName: null,
      comLogoByte: null,
      // imgnm1: null,
      // imgByte1: null,
      title: "",
      iconName: null,
      iconByte: null,
      features:[],
      initialState: {
        productName: "",
        proDescription: "",
        // title: "",
        // icon: "",
      },
    };
  }
  fileUpload=(a,b)=>{
    try {
      if (a && b) {
        let name = a.split(".");
        name = name[0].substr(0, 5) + "." + name[1];
        return (
          <>
            <span className="optionui">
              <span className="txtWrap">{name}</span>
              <CloseOutlined onClick={() => this.removefile()} />
            </span>
            <Image src={b} width={50} height={30} />
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
  }
  setByte = (byteCode, name) =>
    this.setState({ comLogoByte : byteCode, comLogoName: name });
  render() {
    const { 
      initialState, 
      disable,
      comLogoName, 
      comLogoByte,
      title,
      iconName,
      iconByte,
    } = this.state;
    return (
      <ProAddEditStyle>
        <Formik
          initialValues={initialState}
          validationSchema={ProductValidation}
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
            setFieldValue,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Row  gutter={20}>
                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                  <div className="field">
                    <Label
                      title="Product Name:"
                      className={
                        errors.productName && touched.productName ? "empty" : ""
                      }
                    />
                    <Input
                      onBlur={handleBlur}
                      name="productName"
                      value={values.productName}
                      handleChange={handleChange}
                      tabIndex="1"
                      className={
                        errors.productName && touched.productName ? "empty" : ""
                      }
                    />
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                  <div className="field">
                    <Label title="Company Logo:"/>
                    {this.fileUpload(comLogoName, comLogoByte)}
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <div className="field">
                    <Label title="Product Description:"/>
                    <Input row={3}
                    />
                  </div>
                </Col>
              </Row>
              <h2>Features:</h2> 
              <Row  gutter={20}>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <div className="field">
              <Label title="Title:"/>
              <Input
              value={title}
              handleChange={handleChange}
              />
              </div>
              </Col>

              </Row>

            </Form>
          )}
        </Formik>
      </ProAddEditStyle>
    );
  }
}
export default ProAddEditDetail;
