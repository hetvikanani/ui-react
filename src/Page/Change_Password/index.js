import React, { Component } from "react";
import { ChangePasswordStyle } from "./style";
import { Label, Input, Button } from "../../components/index";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  current_password: Yup.string().trim().required(" "),
  new_password: Yup.string().trim().required(" "),
  confirm_new: Yup.string().trim().required(" "),
});

class Change_Password extends Component {
  constructor() {
    super();
    this.state = {
      initState: {
        current_password: "",
        new_password: "",
        confirm_new: "",
      },
    };
  }

  handleSubmit = (value) => {};
  render() {
    const { initState } = this.state;

    return (
      <ChangePasswordStyle>
        <div className="mainDiv">
          <div className="divShadow">
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
                  <div className="parentDiv">
                    <Label
                      title="Current Password"
                      className={
                        errors.current_password && touched.current_password
                          ? "empty"
                          : ""
                      }
                    ></Label>
                    <Input
                      placeholder="Enter Current Password"
                      className={
                        errors.current_password && touched.current_password
                          ? "empty"
                          : ""
                      }
                      onBlur={handleBlur}
                      name="current_password"
                      value={values.current_password}
                      handleChange={handleChange}
                      tabIndex="1"
                    ></Input>
                    <Label
                      title="New Password"
                      className={
                        errors.new_password && touched.new_password
                          ? "empty"
                          : ""
                      }
                    ></Label>
                    <Input
                      placeholder="Enter New Password"
                      className={
                        errors.new_password && touched.new_password
                          ? "empty"
                          : ""
                      }
                      onBlur={handleBlur}
                      name="new_password"
                      value={values.new_password}
                      handleChange={handleChange}
                      tabIndex="2"
                    ></Input>
                    <Label title="Confirm New Password"  className={
                        errors.confirm_new && touched.confirm_new
                          ? "empty"
                          : ""
                      }
                     ></Label>
                    <Input placeholder="Confirm New Password"
                     className={
                        errors.confirm_new && touched.confirm_new
                          ? "empty"
                          : ""
                      }
                      onBlur={handleBlur}
                      name="confirm_new"
                      value={values.confirm_new}
                      handleChange={handleChange}
                      tabIndex="3"></Input>
                  </div>

                  <div className="btnDiv">
                    <Button type="submit">Update Password</Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </ChangePasswordStyle>
    );
  }
}

export default Change_Password;
