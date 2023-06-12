/// Member 모듈 - Member.js ///

import $ from "jquery";
import "./css/member.css";

// 제이쿼리 로드구역 함수
function jqFn() {
  $(() => {
    
  }); ///////////// JQB ///////////////
} ///////////////// jqFn 함수 /////////////////

function Member() {
  return (
    <>
      {/* 모듈코드 */}
      <h2>Member</h2>
      
      {/* 빈루트를 만들고 JS로드함수포함 */}
      {jqFn()}
    </>
  );
} /////////////// 어떤 함수 ///////////////

export default Member;
