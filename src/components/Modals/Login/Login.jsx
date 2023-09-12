import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { Button, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import './Login.scss';

// Валидационная схема для полей формы
const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'require field';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'incorrect email';
  }

  if (!values.password) {
    errors.password = 'require field';
  } else if (values.password.length < 6) {
    errors.password = 'incorrect password';
  }

  if (!values.secondPassword) {
    errors.secondPassword = 'require field';
  } else if (values.secondPassword.length < 6) {
    errors.secondPassword = 'incorrect password';
  } else if (values.password !== values.secondPassword) {
    errors.secondPassword = 'password mismatch';
  }

  return errors;
};

// Функция для обработки отправки формы
const handleSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const Login = ({ widgetHandler }) => {
  const [isRegister, setRegister] = useState(false);

  return (
    <div className='Login'>
      <h1>{isRegister ? 'Create new account' : 'Login'}</h1>
      <CloseOutlined className='close' onClick={() => widgetHandler('login')} />
      <Formik
        initialValues={{ email: '', password: '', secondPassword: '' }}
        validate={validate}
        onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div className='column'>
              <label htmlFor='email'>Email</label>
              <Input type='email' name='email' />
              <ErrorMessage name='email' component='div' />
            </div>
            <div className='column'>
              <label htmlFor='password'>Password</label>
              <Input type='password' name='password' />
              <ErrorMessage name='password' component='div' />
            </div>
            {isRegister && (
              <div className='column'>
                <label htmlFor='secondPassword'>Repeat password</label>
                <Input type='password' name='secondPassword' />
                <ErrorMessage name='secondPassword' component='div' />
              </div>
            )}
            <div className='column' style={{ alignItems: 'center !important' }}>
              <Button type='submit' disabled={isSubmitting}>
                Login
              </Button>
              {!isRegister && (
                <div>
                  <p style={{ color: 'gray' }}>no account?</p>
                  <Button type='button' onClick={() => setRegister(true)}>
                    Register
                  </Button>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
