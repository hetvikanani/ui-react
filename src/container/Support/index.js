import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { SupportStyle } from "./style";
import { Menu, Header } from "components/Form";
import { Button, Input, Label } from "components/Form";
import { PageConst, ButtonConstant, FormValidation } from "App/AppConstant";
const ValidationSchema = Yup.object().shape({
  name: Yup.string().trim().required(" "),
  email: Yup.string()
    .trim() 
    .required(" ")
    .email(FormValidation.emailInvalid),
  message: Yup.string().trim().required(" "),
  number: Yup.string()
    .trim()
    .min(10, FormValidation.mobileInvalid)
    .max(10, FormValidation.mobileInvalid),
});
class Support extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disable: false,
      initValues: {
        name: "",
        email: "",
        message: "",
        number: "",
      },
    };
  }
  handleSubmit = () => {
    try {
      this.setState({ disable: true });
      setTimeout(() => {
        this.setState({ disable: false });
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { initValues, disable } = this.state;
    return (
      <SupportStyle>
        <Menu />
        <div className="container">
          <Header />
          <div className="allDiv">
            <Formik
              initialValues={initValues}
              validationSchema={ValidationSchema}
              onSubmit={this.handleSubmit}
              enableReinitialize
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
                  <div className="form_div">
                    <div className="field">
                      <Label title={PageConst.name} 
                      className={
                        errors.name && touched.name
                          ? "empty"
                          : ""
                      }
                      />
                      <Input
                        placeholder={PageConst.entYoNa}
                        className={errors.name && touched.name ? "empty" : ""}
                        onBlur={handleBlur}
                        name="name"
                        value={values.name}
                        handleChange={handleChange}
                        tabIndex="1"
                      />                      
                    </div>
                    <div className="field">
                      <Label title={PageConst.email}
                         className={
                          errors.email && touched.email
                            ? "empty"
                            : ""
                        }
                      />
                      <Input
                        placeholder={PageConst.entYoEmaAdd}
                        className={errors.email && touched.email ? "empty" : ""}
                        onBlur={handleBlur}
                        name="email"
                        value={values.email}
                        handleChange={handleChange}
                        tabIndex="2"
                      />
                      {errors.email && touched.email && (
                        <div className="form-error">{errors.email}</div>
                      )}
                    </div>
                    <div className="field">
                      <Label title={PageConst.msg} 
                      className={
                        errors.message && touched.message
                          ? "empty"
                          : ""
                      }
                      />
                      <Input
                        className={
                          errors.message && touched.message ? "empty" : ""
                        }
                        row={3}
                        name="message"
                        value={values.message}
                        handleChange={handleChange}
                        tabIndex="3"
                      />
                      {errors.message && touched.message && (
                        <div className="form-error">{errors.message}</div>
                      )}
                    </div>
                    <div className="field">
                      <Label title={PageConst.phonNo} />
                      <Input
                        placeholder={PageConst.entYoPhoNo}
                        className={
                          errors.number && touched.number ? "empty" : ""
                        }
                        onBlur={handleBlur}
                        name="number"
                        value={values.number}
                        handleChange={handleChange}
                        tabIndex="4"
                      />
                      {errors.number && touched.number && (
                        <div className="form-error">{errors.number}</div>
                      )}
                    </div>
                    <div className="btnDiv">
                      <Button type="submit" disabled={disable}>
                        {ButtonConstant.submit}
                      </Button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </SupportStyle>
    );
  }
}
export default Support;
