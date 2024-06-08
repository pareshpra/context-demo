import React from 'react'

export const ChildSecond = ({data}:any) => {

    console.log("childSecond call");
  return (
    <div>ChildSecond ---- {data}</div>
  )
}

export const MemorizedComp= React.memo(ChildSecond);