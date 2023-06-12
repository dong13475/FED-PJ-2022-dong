/// Member 모듈 - Member.js ///

/* 
  [ 후크 : Hook - 왜 필요한가? ]
  1. 목적 - 어떤 특정 데이터가 변경될때
  다른 것을 매칭하여 실시간으로 변경할 필요가 있을 경우
  간단하고 효과적으로 이것을 구현해주는 방법이다!
  2. 구현방법
    1) 상단에 후크를 import 한다 -> useState
    2) useState() 메서드를 사용한다
    코드법: 
      배열변수 = useState(초기값)
    일반형:
      const [변수명,set변수명] = useState(초기값)
      -> set변수명 작성시 변수명 첫글자는 대문자로처리!
      -> set변수명(값) : 메서드 형태로 값을 셋팅한다!(셋터와 비슷함)
    3) 작동원리
      - useState에 쓴 초기값이 배열변수 첫번째에 할당된다
      - 코드에서 set변수명 에 값을 할당하면
      useState가 이것을 체크하여 다른 변경을 
      하도록 메서드를 실행한다!
    4) 사용결과
      - 별도의 메서드 호출없이 후크 상태변수를 사용한 곳이
      자동으로 변경될때마다 다시 갱신되는 것을 확인할 수 있다!
*/

import React, { useState } from "react";
import $ from "jquery";
import "./css/member.css";

// 제이쿼리 로드구역 함수
function jqFn() {
  $(() => {}); ///////////// JQB ///////////////
} ///////////////// jqFn 함수 /////////////////

function Member() {

  // 요구사항 : 각 입력항목에 맞는 유효성검사를 입력하는 순간!
  //            실시간으로 체크하여 결과를 화면에 리턴한다!

  // [ 후크 useState 메서드 셋팅하기 ]
  // [ 1. 입력요소 후크변수 ]
  // 1. 아이디변수
  const [userId,setUserId] = useState("");
  // 2. 비밀번호변수
  const [pwd,setPwd] = useState("");
  // 3. 비밀번호확인변수
  const [chkPwd,setChkPwd] = useState("");
  // 4. 사용자이름변수
  const [userName,setUserName] = useState("");
  // 5. 이메일변수
  const [email,setEmail] = useState("");
  
  // [ 2. 에러상태값 후크변수 ]
  // -> 에러상태값변수 : 초기값은 에러 아님상태(false)
  // 1. 아이디에러변수
  const [userIdError,setUserIdError] = useState(false);
  // 2. 비밀번호에러변수
  const [pwdError,setPwdError] = useState(false);
  // 3. 비밀번호확인에러변수
  const [chkPwdError,setChkPwdError] = useState(false);
  // 4. 사용자이름에러변수
  const [userNameError,setUserNameError] = useState(false);
  // 5. 이메일에러변수
  const [emailError,setEmailError] = useState(false);

  // [ 3. 유효성검사 메서드 ]
  // 1. 아이디 유효성 검사
  const changeUserId = e => {
    // e - 이벤트전달변수
    // 아이디 유효성 검사식(따옴표싸지 말것!)
    const valid = /^[A-Za-z0-9+]{5,}$/;

    // 입력값 확인 : e.target -> 이벤트가 발생한 요소
    console.log(e.target.value);
    
  }; ///////////////// changeUserId ////////////////////
  
  
  
  
  return (
    <>
      {/* 모듈코드 */}
      <section className="membx">
        <h2>Member</h2>
        <form>
          {/* 1. 아이디 */}
          <label>아이디를 입력하세요</label>
          <input type="text" maxLength="20" placeholder="아이디를 입력하세요" value={userId} onChange={changeUserId} />
          {
            // 에러일경우 메시지 보여주기
            // 조건문 && 요소 -> 조건이 true이면 요소출력
            <div className="msg">
              <small style={{ color: "red", fontSize: "10px" }}>
                사용자 아이디는 5글자 이상 문자 또는 숫자를 포함해야 합니다
              </small>
            </div>
          }
          {/* 2. 비밀번호 */}
          {/* 3. 이름 */}
          {/* 4. 이메일 */}
          {/* 5. 버튼 */}
          {/* 6. 로그인페이지링크 */}
        </form>
      </section>

      {/* 빈루트를 만들고 JS로드함수포함 */}
      {jqFn()}
    </>
  );
} /////////////// 어떤 함수 ///////////////

export default Member;
