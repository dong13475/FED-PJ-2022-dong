// DC로고 컴포넌트
import React from "react";
import isrc from "./ImgSrc";

const Logo = (props) => {
  // props.gb : 상단, 하단구분코드

  //객체형 스타일적용: 속성명이 틀리면 아예 출력되지 않는다!
  const mystyle = {
    top:{
      width: "40px",
      height: "40px",
      marginRight:"30px",
      // backgroundImage: "linear-gradient(45deg, #88f62f, #fa8104)",
      borderRadius: "50%",
      // outline:"3px solid lime"
    },
    bottom:{
      height:"80px",
    },
  };

  let istyle = {
    top : "40px",
    bottom:"80px",
  }

  return(
    <h1 style={mystyle[props.gb]}>
      <img src={isrc.logo} style={{width:istyle[props.gb]}} alt="로고" />
    </h1>
  );

}; //////////////// Logo 컴포넌트 ///////////////////

// 내보내기
export default Logo;
