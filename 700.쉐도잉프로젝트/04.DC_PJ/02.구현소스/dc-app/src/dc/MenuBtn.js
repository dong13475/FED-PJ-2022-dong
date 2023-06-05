/// 메뉴버튼 모듈 - MenuBtn.js ///
import $ from "jquery";
import "./css/menubtn.css";
// import menubtn_data from "./data/menubtn";

// 제이쿼리 로드구역 함수
function jqFn() {
  $(() => {

  }); ///////////// JQB ///////////////
} ///////////////// jqFn 함수 /////////////////

function MenuBtn(props) {
  return (
    <>
      <section className="menubtn">
        <div>
          {/* 이미지박스 */}
          <div className="imbx">
            <img src={props.rec["isrc"]} alt="배너이미지" />
          </div>
          {/* 타이틀박스 */}
          <div className="titbx">
            <h3>{props.rec["tit"].split("^")[0]}</h3>
            <h2>{props.rec["tit"].split("^")[1]}</h2>
          </div>
          {/* 버튼박스 */}
          <div className="btnbx">
            <button>{props.rec["btn"]}</button>
          </div>
        </div>
      </section>
      {/* 빈루트를 만들고 JS로드함수포함 */}
      {jqFn()}
    </>
  );
} /////////////// MenuBtn 함수 ///////////////
export default MenuBtn;
// 메뉴 출력용 컴포넌트 ///////
// function Menu(){
//   const menubtnData = menubtn_data;
//   return(
//     <>
//       <div>
//         {menubtnData.map((x,i)=>(
//           <MenuBtn rec={x} key={i} idx={i} />
//         ))}
//       </div>
//     </>
//   );
// }

