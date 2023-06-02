// 배너 컴포넌트 - Ban.js
// 배너 CSS
import "./css/ban.css";
// 배너 데이터
import ban_data from "./data/banner";
// 제이쿼리
import $ from "jquery";

////////////////// JQB //////////////////////
$(() => {
  // 광클금지변수
  let prot = 0;

  // 1. 버튼 클릭시 이동기능구현
  $(".abtn").click(function () {
    // 0. 광클금지
    if (prot) return;
    prot = 1;
    setTimeout(() => (prot = 0), 400);

    // 1. 버튼구분하기
    let isB = $(this).is(".rb");
    console.log("오른쪽?", isB);

    // 슬라이드 타겟설정 : 클릭된 버튼의 형제요소 슬라이더
    let tg = $(this).siblings(".slider");
    // console.log(tg);

    // 2. 분기하여 기능구현하기
    // (1) 오른쪽버튼 클릭시 : 오른쪽에서 들어옴(left: 0 -> -100%)
    if (isB) {
      tg.animate({ left: "-100%" }, 500, function () {
        // this는 타겟!
        // 첫번째 li 맨뒤로 보내기! 동시에 left:0
        $(this).append($(this).find("li").first()).css({ left: 0 });
      }); //////////// animate ///////////
    } ////////////// if //////////////

    // (2) 왼쪽버튼 클릭시 : 왼쪽에서 들어옴(left: -100% -> 0)
    else {
      // 마지막 li 맨앞이동 + 동시에 left:-100% 후 left:0 애니
      tg.prepend(tg.find("li").last()).css({ left: "-100%" }).animate({ left: 0 }, 400);
    } ///////////// else //////////////

    // 3. 배너와 일치하는 블릿에 클래스 "on" 넣기
    // 대상 : .indic li
    // eq(순번) -> 오른쪽 이동시 1, 왼쪽 이동시 0
    // isB값으로 오른쪽은 true -> 1, 왼쪽은 false -> 0
    // true/false는 숫자를 써야되는상황에서 자동으로 숫자로 변환된다!
    // 순서가 바뀌는 슬라이드에 고유 순번속성 data-seq값을 읽어옴!
    $(".indic li").eq(tg.find("li").eq(isB).attr("data-seq"))
    .addClass("on").siblings().removeClass("on");
    
  }); ////////// click /////////////
}); ///////////////// JQB ///////////////////

// 반복리스트 코드 생성용 컴포넌트 /////
function MakeList(props) {
  // rec - 개별레코드값(객체형식)
  // idx - 유일키값
  return (
    <li data-seq={props.idx}>
      <img className="banimg" src={props.rec["src"]} alt="배너" />
      <section className="bantit">
        <h3>{props.rec["tit1"]}</h3>
        <h2>{props.rec["tit2"]}</h2>
        <p>{props.rec["cont"]}</p>
        <button>{props.rec["btn"]}</button>
      </section>
    </li>
  );
} //////////// MakeList 컴포넌트 ////////////

// 배너출력용 컴포넌트 /////
function Ban(props) {
  // props.cat은 배너데이터 구분속성명
  const sel_data = ban_data[props.cat];
  // sel_data에 담긴값은 data/banner.js의 객체의 배열값

  return (
    <div className="banner">
      {/* 이동 슬라이드 */}
      <ul className="slider">
        {sel_data.map((x, i) => (
          <MakeList rec={x} key={i} idx={i} />
        ))}
      </ul>
      {/* 이동버튼 + 슬라이드 블릿 : 슬라이드가 2개이상 */}
      {
        // 조건식 && 코드 : 조건식이 true일때 코드출력
        sel_data.length > 1 && (
          <>
            {/* 양쪽이동버튼 */}
            <button className="abtn lb">＜</button>
            <button className="abtn rb">＞</button>
            {/* 블릿 인디케이터 */}
            <ol className="indic">
              {
                sel_data.map((x,i)=>
                <li className={i==0?'on':''} key={i}></li>
                )
              }
            </ol>
          </>
        )
      }
    </div>
  );
} ///////////// Ban 컴포넌트 //////////////

export default Ban;
