
import { useSelector } from "react-redux";
import { useModalContext } from "../components/context/snackbarContexts";
import { useEffect } from "react";

export default function Dashboard() {
  const userData = useSelector((state: any) => state.Auth.user);
  console.log("===>", userData)
  const { setShow, setMsg } = useModalContext();

  useEffect(() => {
    setMsg("hello there!")
    setShow(true)
  }, [])


  return (
    <div>Dashboard
      <div>{userData?.username}</div>
    </div>
  )
}
