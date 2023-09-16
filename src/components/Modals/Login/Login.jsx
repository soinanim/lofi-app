import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Button, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import "./Login.scss";

// Валидационная схема для полей формы
const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "require field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "incorrect email";
  }

  if (!values.password) {
    errors.password = "require field";
  } else if (values.password.length < 6) {
    errors.password = "incorrect password";
  }

  if (!values.secondPassword) {
    errors.secondPassword = "require field";
  } else if (values.secondPassword.length < 6) {
    errors.secondPassword = "incorrect password";
  } else if (values.password !== values.secondPassword) {
    errors.secondPassword = "password mismatch";
  }

  return errors;
};

const Login = ({ widgetHandler, setIsOpenAlert, setIsAlert }) => {
  const [isRegister, setRegister] = useState(false);
  // Функция для обработки отправки формы
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    fetch('http://185.154.193.21:3011/register', {
  method: "POST",
  body: JSON.stringify({
    email: 'admin3@mail.ru',
    password: '123456'
  }),
  headers: {
    "Content-Type": "application/json",
  }
})
.then((response) => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then((data) => {
  console.log(data);
  setIsOpenAlert((state) => !state);
  setIsAlert((state) => ({
    ...state,
    value: "success",
    text: "success",
  }));
  setSubmitting(false);
})
.catch((error) => {
  console.error(error);
  setSubmitting(false);
});
  };

  return (
    <div className="Login">
      <h2>{isRegister ? "Create new account" : "Login"}</h2>
      <CloseOutlined className="close" onClick={() => widgetHandler("login")} />
      <Formik
        initialValues={{ email: "admin@mail.ru", password: "123456", secondPassword: "123456" }}
        // validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="column-input">
              <label htmlFor="email">Email</label>
              <Input type="email" name="email" id="email"/>
              <ErrorMessage
                name="password"
                component="p"
                style={{ color: "red", marginBottom: '5px' }}
              />
            </div>
            <div className="column-input">
              <label htmlFor="password">Password</label>
              <Input type="password" name="password" id="password" />
              <ErrorMessage
                name="password"
                component="p"
                style={{ color: "red", marginBottom: '5px'  }}
              />
            </div>
            {isRegister && (
              <div className="column-input">
                <label htmlFor="secondPassword">Confrim password</label>
                <Input
                  type="password"
                  name="secondPassword"
                  id="secondPassword"
                />
                <ErrorMessage
                  name="secondPassword"
                  component="p"
                  style={{ color: "red", marginBottom: '5px'  }}
                />
              </div>
            )}

            {!isRegister ? (
              <div className="column">
                <Button type="submit">Login</Button>
                <div className="column">
                  <p style={{ color: "gray" }}>no account?</p>
                  <Button
                    type="button"
                    onClick={() => setRegister((state) => !state)}
                  >
                    Register
                  </Button>
                </div>
              </div>
            ) : (
              <div className="column">
                <Button htmlType="submit" ghost>Register</Button>
                <Button
                  type="button"
                  onClick={() => setRegister((state) => !state)}
                >
                  Back
                </Button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
