import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoute from './components/routes/PrivateRoute';
import Dashboard from './pages/Dashboard';
import {
  ModalContext,
} from "./components/context/snackbarContexts";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function App() {

  const [show, setShow] = React.useState(false)
  const [msg, setMsg] = React.useState('')

  return (
    <React.Fragment>
      <ModalContext.Provider value={{ show, setShow, setMsg }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/" element={<Dashboard />} />
          {/* </Route> */}
        </Routes>
        <Snackbar open={show} autoHideDuration={2000}>
          <Alert severity="success" sx={{ width: '100%' }}>
            {msg}
          </Alert>
        </Snackbar>
      </ModalContext.Provider>
    </React.Fragment>
  );
}

export default App;
