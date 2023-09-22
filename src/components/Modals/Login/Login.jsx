import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import axios from "axios";

import "./Login.scss";

const Login = ({ widgetHandler, setIsOpenAlert, setIsAlert }) => {
  const [isRegister, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPasword, setSecondPassword] = useState("");
  const [error, setError] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [hashPassword, setHashPassword] = useState("");

  useEffect(() => {
    if (isRegister) {
      if (password.length < 5) {
        setError("short password");
      } else {
        if (password !== secondPasword) {
          console.log(secondPasword);
          console.log(password);
          setError(`passwords don't match`);
        } else {
          setError("");
        }
      }
    }
  }, [password, secondPasword]);

  useEffect(() => {
    if (email.length > 3) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(email);

      setIsValidEmail(isValid);
    }
  }, [email]);

  const onSubmit = () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    if (password && isValidEmail) {
      if (isRegister) {
        formData.append("format", "register");

        // Отправка POST-запроса на регистрацию
        axios
          .post("/index.php", formData)
          .then((response) => {
            if (response.data) {
              setIsOpenAlert(true);

              setIsAlert((state) => ({
                ...state,
                value: "success",
                text: `You have successfully registered`,
              }));
            }
          })
          .catch((error) => {
            console.error(error);
            setIsOpenAlert(true);

            setIsAlert((state) => ({
              ...state,
              value: "error",
              text: `${error}`,
            }));
          });
      } else {
        formData.append("format", "login");

        axios
          .post("/index.php", formData)
          .then((response) => {
            if (response.data) {
              console.log(response.data);
              // localStorage.setItem("login", JSON.stringify(response.data));

              setIsOpenAlert(true);

              setIsAlert((state) => ({
                ...state,
                value: "success",
                text: `Login successfully completed`,
              }));
            } else {
              setIsOpenAlert(true);

              setIsAlert((state) => ({
                ...state,
                value: "error",
                text: `Login error`,
              }));
            }
          })
          .catch((error) => {
            console.error(error);
            // Обработка ошибки
            setIsOpenAlert(true);

            setIsAlert((state) => ({
              ...state,
              value: "error",
              text: `${error}`,
            }));
          });
      }
      setError("");
    } else {
      setError("fill in all the fields with the correct data");
    }
  };

  return (
    <div className="Login">
      <h2>{isRegister ? "Create new account" : "Login"}</h2>
      <CloseOutlined className="close" onClick={() => widgetHandler("login")} />
      <div className="form">
        <div className="column-input">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {!isValidEmail && (
            <p style={{ color: "red" }}>Enter the correct email</p>
          )}
        </div>
        <div className="column-input">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {error.length > 1 && <p style={{ color: "red" }}>{error}</p>}
        </div>
        {isRegister && (
          <div className="column-input">
            <label htmlFor="secondPassword">Confrim password</label>
            <Input
              type="password"
              id="secondPassword"
              onChange={(e) => setSecondPassword(e.target.value)}
              value={secondPasword}
            />
          </div>
        )}

        {!isRegister ? (
          <div className="column buttons">
            <Button ghost onClick={onSubmit}>
              Login
            </Button>
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
            <Button ghost onClick={onSubmit}>
              Register
            </Button>
            <Button
              type="button"
              onClick={() => setRegister((state) => !state)}
            >
              Back
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
