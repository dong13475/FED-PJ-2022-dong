// 보그 PJ 링크시스템 JS - linksys.js

// 넘어온 url 받기! pm -> parameter(전달값변수)
let pm = location.href;
// location.href 이 이퀄 오른쪽에 있으면 url주소 읽어옴!

// 문자열 잘라서 값 읽어오기
// -> 물음표로 잘라서 두번째값, 이퀄로 잘라서 두번째값
pm = pm.split("?")[1].split("=")[1];

// pm값 특수문자 복원하기
pm = decodeURIComponent(pm);

console.log(pm);

////////// 로딩구역 ///////////
window.addEventListener("DOMContentLoaded",linkFn);

/////// 링크시스템 로드함수 //////////////
function linkFn(){
  
  console.log("링크 로딩완료!");

  // 1. 링크 대상 선정 : 
  // (1) GNB : .gnb a
  const gnb = document.querySelectorAll(".gnb a");
  // console.log(gnb);
  // (2) 로고 : .logo a
  const logo = document.querySelector(".logo a");

  // 2. 클릭이벤트 설정하기
  // (1) GNB 클릭설정 //////////
  for(let x of gnb){
    x.onclick = (e) => {
      // 클릭이동기능막기
      e.preventDefault();
      
      // (1) 클릭된 a요소 텍스트 읽기
      let atxt = x.innerText.toLowerCase().trim();
      // toLowerCase() -> 소문자변환
      // 참고) toUpperCase() -> 대문자변환
      // trim() -> 앞뒤공백제거
      
      console.log(atxt);

      // (2) 서브페이지 이동하기
      if(atxt !== "search") // 검색이 아니면 서브이동
      location.href = "category.html?cat="
      +encodeURIComponent(atxt);

    }; ///////// click ////////

  } ///////// for of /////////////

  // (2) 로고 클릭설정
  logo.onclick = (e) => {
    e.preventDefault();

    // 홈으로 이동하기
    location.href = "index.html";
    
  }; ///////// click //////////
  
} ///////// linkFn 함수 ///////////