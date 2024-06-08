
import { useSelector } from "react-redux";
import { useModalContext } from "../components/context/snackbarContexts";
import { useEffect, useState } from "react";
import ChildFirst from "../components/ChildFirst";
import {MemorizedComp} from "../components/ChildSecond";

export default function Dashboard() {
  const userData = useSelector((state: any) => state.Auth.user);
  const { setShow, setMsg } = useModalContext();

  const [count, setCount] = useState(0);


  useEffect(() => {
    setMsg("hello there!")
    setShow(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <>
    <div>
      Dashboard {count}
      <div>{userData?.username}</div>
    </div>
    <button onClick={()=> setCount(count+1)}>+</button>

    <ChildFirst/>
    <MemorizedComp />
    </>
  )
}
