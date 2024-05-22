import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../service/Auth-service";
import { showError } from "./Error-slice";

interface PayloadProps {
  username: string;
  OrganizationName: string;
  password: string;
}



export const SignIn: any = createAsyncThunk(
    "user/SignIn",
    async (reqPayload: PayloadProps, thunkAPI) => {
      const data = await authService.SignIn(reqPayload);
      if (data) {
        thunkAPI.dispatch(showError({ message: "success", status: "true" }));
        return data;
      } else {
        thunkAPI.dispatch(
          showError({ message: data?.message, status: "false" })
        );
        throw thunkAPI.rejectWithValue(data?.response);
      }
    }
  );

  const authSlice = createSlice({
    name: "Auth",
    initialState: {
      user: {
        password: "",
        username: "",
      },
      registerData: null,
      accessToken: "",
      isLogin: false,
      isFetching: false,
      error: "",
      successMessage: "",
      isError: false,
      isSuccess: false,
      message: null,
      isEmailExist: null,
      isRegister: false,
      isRegisterData: null,
      organization: [],
      organizationUserName: "",
      organizationUser: null,
    },
    reducers: {
      updateUser: (state: any) => {
        localStorage.getItem("eningo-user");
        state.isLogin = true;
        state.user = JSON.parse(localStorage.getItem("eningo-user") || "");
        state.accessToken = localStorage.getItem("en-token");
      },
      clearOrganization: (state) => {
        state.organization = [];
        state.organizationUser = null;
        state.organizationUserName = "";
      },
    },
    extraReducers: (builder) => {
      /// sign in Api call
      builder
        .addCase(SignIn.pending, (state) => {
          state.isFetching = true;
          state.user = {
            password: "",
            username: "",
          };
          state.isLogin = false;
          state.isRegister = false;
        })
        .addCase(SignIn.fulfilled, (state, action) => {
          localStorage.setItem(
            "eningo-user",
            JSON.stringify(action.payload.name)
          );
          localStorage.setItem("en-token", action.payload.access_token);
          state.isFetching = false;
          state.user.username = action.payload.name;
          state.accessToken = action.payload.access_token;
          state.successMessage = action?.payload.message;
          state.isLogin = true;
          state.error = "";
        })
        .addCase(SignIn.rejected, (state, action) => {
          state.user = {
            password: "",
            username: "",
          };
          state.isLogin = false;
          state.isFetching = false;
          state.error = action?.payload?.data?.message;
        });
    },
  });

  export const { clearOrganization } = authSlice.actions;
  export default authSlice;