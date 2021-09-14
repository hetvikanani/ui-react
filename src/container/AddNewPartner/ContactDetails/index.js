import React, { Component } from "react";
import { Menu, Header, Input, Label, Button } from "components/Form";
import { Row, Col, Card } from "antd";
import { ContactDetailStyle } from "./style";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const UserValidation = Yup.object().shape({
  contactName: Yup.string()
    .trim()
    .required(" "),
  mobile: Yup.string()
    .trim()
    .min(10)
    .max(10).required(" "),
  email: Yup.string()
    .trim()
    .email()
    .required(" "),



});
export default class ContactDetail extends Component {
  constructor() {
    super();
    this.state = {
      disable: false,
    


      initialState: [{
        contactName: "",
        mobile: "",
        email: "",
        designation: "",
       
      },]
    };
  }

  increase = () => {


    if (this.state.check) {
      this.setState({
        initialState: [...this.state.initialState, {
          contactName: "",
          mobile: "",
          email: "",
          designation: "",
          check: false,
          save: false,
        }], save: true
      })
    }
  }



  handleSubmit = async (values, { setSubmitting }) => {
    try {
      this.setState({ btnDisable: true, check: true });
      setTimeout(() => {
        this.setState({ btnDisable: false });
      }, 4500);
      let data = { contactName: values.contactName, mobile: values.mobile, email: values.email, designation: values.designation };
      // await this.props.login(data);
      console.log("data", data)
      setSubmitting(false);
    } catch (error) {
      console.log(error, "handle error");
    }
  };

  render() {
    const { initialState, disable } = this.state;
    return (
      <ContactDetailStyle>
        <Menu />
        <div className="container">
          <Header />
          <div className="allDiv">
            <h1 className="header">Add New Partner</h1>
            {initialState.map(data =>

              <div className="boxDiv">
                <Card>
                  <h2 className="headerCard">Contact Details:</h2>
                  <Formik
                    initialValues={data}
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

                                <Label title="Contact Name :" className="label" />
                                <Input
                                  onBlur={handleBlur}
                                  name="contactName"
                                  value={values.contactName}
                                  handleChange={handleChange}
                                  max={255}
                                  tabIndex="1"
                                  className={
                                    errors.contactName && touched.contactName
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
                                  className={
                                    errors.mobile && touched.mobile ? "empty" : ""
                                  }
                                  onBlur={handleBlur}
                                  name="mobile"
                                  type="number"
                                  value={values.mobile}
                                  handleChange={handleChange}
                                  tabIndex="4"
                                />
                              </div>
                            </Col>
                          </Row>

                          <Row gutter={24}>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                              <div className="cardDiv">

                                <Label title="Email Id :" className="label" />
                                <Input
                                  className={
                                    errors.email && touched.email ? "empty" : ""
                                  }
                                  onBlur={handleBlur}
                                  name="email"
                                  type="email"
                                  value={values.email}
                                  handleChange={handleChange}
                                  max={255}
                                  tabIndex="5"
                                />
                              </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                              <div className="cardDiv">

                                <Label title="Designation :" className="label" />
                                <Input
                                  onBlur={handleBlur}
                                  name="designation"
                                  value={values.designation}
                                  handleChange={handleChange}
                                  max={255}
                                  tabIndex="3"
                                  className={
                                    errors.designation && touched.designation
                                      ? "empty"
                                      : ""
                                  }
                                />
                              </div>
                            </Col>

                          </Row>
                        </div>


                        <div className="btn-div">
                          <Button onClick={this.increase}>Add Another</Button>
                          <Button type="submit"
                            disabled={disable}

                          >
                            {this.state.save ? "Save" : "Submit"}

                          </Button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </Card>
              </div>

            )}

          </div>
        </div>
      </ContactDetailStyle>
    );
  }
}