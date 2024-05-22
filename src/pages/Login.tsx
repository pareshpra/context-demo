import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from 'react'
import Validation from '../components/validation/Validations';
import usePasswordToggle from '../hooks/usePasswordToggle';
import { Box, Button, TextField, Typography } from "@mui/material";
import {
  SignIn
} from "../redux/features/Auth-slice";
import { useModalContext } from "../components/context/snackbarContexts";

export default function Login() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [errors, setErrors] = useState<any>();
  const {setShow} = useModalContext();

  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

   const handleSubmit = (e: any) => {
    e.preventDefault();
    setShow(true);
    const message = Validation(loginData)
    setErrors(message)
    // if (Object.keys(message).length === 0) {
    //   dispatch(
    //     SignIn({
    //       username: loginData.username,
    //       password: loginData.password,
    //     })
    //   );
    //   navigation("/");
    // }
  };

  return (
    <>
    <div>Login
      <form>
        <Box className="formGroup">
          <TextField
            type="username"
            fullWidth
            name="username"
            value={loginData?.username}
            label={"username"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
            focused
          />
          <Typography className="errorText">{errors?.username}</Typography>
        </Box>&nbsp;
        <Box className="formGroup">
          <TextField
            type={PasswordInputType as string}
            name="password"
            value={loginData?.password}
            fullWidth
            label={"password"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
            focused
          />
          {ToggleIcon}
          <Typography className="errorText">{errors?.password}</Typography>
        </Box>
        <Box className="formCard__btn">
          <Button
            variant="contained"
            color="primary"
            className="btn"
            onClick={(e: any) => handleSubmit(e)}
          //   disabled={isFetching || disabledButton}
          >
            {/* {isFetching ? <CircularProgress size={23} /> : "Logga in"} */}login
          </Button>
        </Box>
      </form>
    </div>
    </>
  )
}
