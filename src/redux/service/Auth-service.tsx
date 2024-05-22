import axios from 'axios';


interface PayloadProps {
    username: string;
    OrganizationName: string;
    password: string;
  }
  /// Sign in
  const SignIn = async (reqPayload: PayloadProps) => {
    try {
      let response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, { ...reqPayload });
      return response.data;
    } catch (e) {
      return e;
    }
  };


  const rolesService = {
    SignIn
  };
  export default rolesService;