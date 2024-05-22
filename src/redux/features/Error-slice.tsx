import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: "ErrorShow",
    initialState: {
      isOpen: false,
      message:null,
      status:""
    },
    reducers: {
        showError: (state, action)=> {       
            state.isOpen = true;
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        hideError: (state)=> {
            state.isOpen = false;
            state.message =null;
            state.status = "";
        }
    },
  });
  
  export const { showError, hideError } = errorSlice.actions
  export default errorSlice;
  