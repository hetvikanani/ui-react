import React, { Component } from "react";
import { Menu, Header, Input, Label, Button } from "components/Form";
import { Row, Col, Card } from "antd";
import { ContactDetailStyle } from "./style";
import { Formik, Form } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";

const UserValidation = Yup.object().shape({
  contactName: Yup.string().trim().required(" "),
  mobile: Yup.string().trim().min(10).max(10).required(" "),
  email: Yup.string().trim().email().required(" "),
});
export default class ContactDetail extends Component {
  constructor() {
    super();
    this.state = {
      disable: false,

      initialState: [
        {
          key: uuidv4(),
          contactName: "",
          mobile: "",
          email: "",
          designation: "",
          check: false,
          save: false,
        },
      ],
    };
  }

  increase = (key) => {
    const newData = this.state.initialState.map((data) => {
      if (data.key === key) {
        return { ...data, save: true };
      } else return data;
    });
    this.setState({
      initialState: [
        ...newData,
        {
          key: uuidv4(),
          contactName: "",
          mobile: "",
          email: "",
          designation: "",
          check: false,
          save: false,
        },
      ],
    });
  };

  remove = (key, setFieldValue, handleReset) => {
    const newData = this.state.initialState.filter((data) => data.key !== key);
    this.setState({ initialState: newData }, () => {
      handleReset();
    });
  };

  handleSubmit = async (values, { setSubmitting }) => {
    try {
      this.setState({ btnDisable: true, check: true });
      setTimeout(() => {
        this.setState({ btnDisable: false });
      }, 4500);
      let data = {
        contactName: values.contactName,
        mobile: values.mobile,
        email: values.email,
        designation: values.designation,
      };

      console.log("data", data);
      setSubmitting(false);
    } catch (error) {
      console.log(error, "handle error");
    }
  };

  render() {
    const { initialState, disable } = this.state;
    console.log(initialState);
    return (
      <ContactDetailStyle>
        <Menu />
        <div className="container">
          <Header />
          <div className="allDiv">
            <h1 className="header">Add New Partner</h1>
            {initialState.map((data, index) => (
              <div className="boxDiv">
                <Card>
                  <h2 className="headerCard">Contact Details:</h2>
                  <Formik
                    enableReinitialize
                    initialValues={data}
                    validationSchema={UserValidation}
                    onSubmit={this.handleSubmit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isValid,
                      validateForm,
                      isValidating,
                      isInitialValid,
                      setFieldValue,
                      handleReset,
                      resetForm,
                    }) => (
                      <Form onSubmit={handleSubmit}>
                        {console.log(values, data, "values")}
                        <div className="form-div">
                          <Row gutter={24}>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                              <div className="cardDiv">
                                <Label
                                  title="Contact Name :"
                                  className="label"
                                />
                                <Input
                                  onBlur={handleBlur}
                                  name="contactName"
                                  value={values.contactName}
                                  handleChange={handleChange}
                                  className={
                                    errors.contactName && touched.contactName
                                      ? "empty"
                                      : ""
                                  }
                                  onChange={(e) => {
                                    let data = [...initialState];
                                    data[index].contactName = e.target.value;
                                    this.setState({ initialState: data });
                                  }}
                                  tabIndex="1"
                                />
                              </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                              <div className="cardDiv">
                                <Label title="Mobile No :" className="label" />
                                <Input
                                  className={
                                    errors.mobile && touched.mobile
                                      ? "empty"
                                      : ""
                                  }
                                  onBlur={handleBlur}
                                  name="mobile"
                                  type="number"
                                  value={values.mobile}
                                  handleChange={handleChange}
                                  onChange={(e) => {
                                    let data = [...initialState];
                                    data[index].mobile = e.target.value;
                                    this.setState({ initialState: data });
                                  }}
                                  tabIndex="2"
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
                                  onChange={(e) => {
                                    let data = [...initialState];
                                    data[index].email = e.target.value;
                                    this.setState({ initialState: data });
                                  }}
                                  max={255}
                                  tabIndex="3"
                                />
                              </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                              <div className="cardDiv">
                                <Label
                                  title="Designation :"
                                  className="label"
                                />
                                <Input
                                  onBlur={handleBlur}
                                  name="designation"
                                  value={values.designation}
                                  handleChange={handleChange}
                                  onChange={(e) => {
                                    let data = [...initialState];
                                    data[index].designation = e.target.value;
                                    this.setState({ initialState: data });
                                  }}
                                  max={255}
                                  tabIndex="4"
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

                      
                        <div className="buttonDiv">
                          <div>
                            {initialState.length - 1 === index && (
                              <Button
                              className="buttonParent"
                                // style={{ marginRight: "2rem" }}
                                onClick={() => {
                                  validateForm().then((d) => {
                                    if (Object.keys(d).length === 0)
                                      this.increase(data.key);
                                    else handleSubmit();
                                  });
                                }}
                              >
                                Add Another
                              </Button>
                            )}
                            {initialState.length !== 1 && (
                              <Button
                               
                                onClick={() => {
                                  this.remove(
                                    data.key,
                                    setFieldValue,
                                    handleReset
                                  );
                                }}
                              >
                                Remove
                              </Button>
                            )}
                          </div>
                          <div  >
                            <Button
                            className="submit"
                              type="submit"
                              disabled={disable}
                              style={{ float: "right" }}
                            >
                              {initialState.filter((d) => d.key === data.key)[0]
                                ?.save
                                ? "Save"
                                : "Submit"}
                            </Button>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </ContactDetailStyle>
    );
  }
}
