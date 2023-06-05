// DC로고 컴포넌트
import React from "react";
import isrc from "./ImgSrc";

const Logo = () => {

  //객체형 스타일적용: 속성명이 틀리면 아예 출력되지 않는다!
  const mystyle = {
    width: "81px",
    height: "81px",
    backgroundImage: "linear-gradient(45deg, #88f62f, #fa8104)",
    borderRadius: "50%",
    // outline:"3px solid lime"
  };

  return(
    <h1 style={mystyle}>
      <img src={isrc.logo} style={{width:"81px"}} alt="로고" />
    </h1>
  );

}; //////////////// Logo 컴포넌트 ///////////////////

// 내보내기
export default Logo;
