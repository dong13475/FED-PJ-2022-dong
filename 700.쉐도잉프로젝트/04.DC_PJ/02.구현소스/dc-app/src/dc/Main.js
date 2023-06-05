// DC 메인 페이지 컴포넌트
import React from "react";
import Ban from "./Ban";
import MenuBtn from "./MenuBtn";
import menubtn_data from "./data/menubtn";

const Main = () => {
  return(
    <>
      <Ban cat="main" />
      <div className="fbox">
        {
          menubtn_data.map((x,i)=>{
            return <MenuBtn rec={x} key={i} />
          })
        }
      </div>
    </>
  );
}; ////////////// Main /////////////

export default Main;