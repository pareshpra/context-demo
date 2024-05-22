import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PublicRoute = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = localStorage.getItem("user");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      navigate("/login");
    }
  };
  useEffect(() => {
    checkUserToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return <>{isLoggedIn ? <Outlet /> : null}</>;
};
export default PublicRoute;
