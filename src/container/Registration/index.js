import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin, Image } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Label, Input, Button } from "components/Form";
import { login } from "redux/login/actions";
import { FormValidation, ButtonConstant } from "App/AppConstant";
import { StyleContainer } from "./style.js";
import { LoginConstant } from "./constant";

const loginValidationSchema = Yup.object().shape({
  name: Yup.string().trim().required(" "),
  email: Yup.string().trim().email(" ").required(" "),
  mobile: Yup.string()
    .trim()
    .min(6, FormValidation.mobileMin)
    .max(25, FormValidation.mobileMax)
    .required(" "),
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { btnDisable: false };
  }
  handleSubmit = async (values, { setSubmitting }) => {
    try {
      this.setState({ btnDisable: true });
      setTimeout(() => {
        this.setState({ btnDisable: false });
      }, 4500);
      let data = {
        email: values.email.trim(),
        mobile: values.mobile.trim(),
      };
      await this.props.login(data);
      setSubmitting(false);
    } catch (error) {
      console.log(error, "handle error");
    }
  };
  render() {
    const { loading } = this.props;
    const { btnDisable } = this.state;
    return (
      <Spin spinning={loading} size="large">
        <StyleContainer>
          <div className="form-div">
            {/* <Image alt="logo" className="anime" width={50} src={logo}preview={false}/> */}
            <hr className="anime" />
            <Label className="head anime" title={LoginConstant.reg} />
            <div className="loginDiv">
              <Formik
                initialValues={{ email: "", mobile: "", name: "", ref: "" }}
                validationSchema={loginValidationSchema}
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
                  <Form
                    onSubmit={handleSubmit}
                    noValidate
                    className="grid grid-cols-12 gap-4 gap-y-5 mt-5"
                  >
                    <div className="anime col-span-12 sm:col-span-12">
                      <Label
                        title={LoginConstant.name}
                        className={errors.name && touched.name ? "empty" : ""}
                      />
                      <Input
                        autocomplete={"off"}
                        onBlur={handleBlur}
                        name="name"
                        value={values.name.trim()}
                        handleChange={handleChange}
                        className={errors.name && touched.name ? "empty" : ""}
                      />
                      {/* {errors.email && touched.email ? (<div className="form-error">{errors.email}</div>) : null} */}
                    </div>
                    <div className="anime col-span-12 sm:col-span-12">
                      <Label
                        title={LoginConstant.email}
                        className={errors.email && touched.email ? "empty" : ""}
                      />
                      <Input
                        autocomplete={"off"}
                        onBlur={handleBlur}
                        name="email"
                        value={values.email.trim()}
                        handleChange={handleChange}
                        className={errors.email && touched.email ? "empty" : ""}
                      />
                      {/* {errors.email && touched.email ? (<div className="form-error">{errors.email}</div>) : null} */}
                    </div>
                    <div className="anime col-span-12 sm:col-span-12">
                      <Label
                        title={LoginConstant.mobile}
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
                        className={
                          errors.mobile && touched.mobile ? "empty" : ""
                        }
                      />
                      {errors.mobile && touched.mobile ? (
                        <div className="form-error">{errors.mobile}</div>
                      ) : null}
                    </div>
                    <div className="anime col-span-12 sm:col-span-12">
                      <Label
                        title={LoginConstant.RefC}
                        className={errors.ref && touched.ref ? "empty" : ""}
                      />
                      <Input
                        onBlur={handleBlur}
                        name="ref"
                        value={values.ref.trim()}
                        handleChange={handleChange}
                        className={errors.ref && touched.ref ? "empty" : ""}
                      />
                      {/* {errors.ref && touched.ref ? (<div className="form-error">{errors.ref}</div>) : null} */}
                    </div>

                    {/* <NavLink to="/forget-mobile" className="forgetlbl">
                        {LoginConstant.forgerPwd}
                      </NavLink> */}
                    <div className="anime col-span-12 flex items-center sm:justify-end mt-5 btnDiv">
                      <Button type="submit" disabled={btnDisable}>
                        {ButtonConstant.submit}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </StyleContainer>
      </Spin>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.login.loading,
  error: state.login.error,
  message: state.login.message,
});
const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
