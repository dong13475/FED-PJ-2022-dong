// 패럴렉스 PJ JS - main.js

/*********************************************************** 
  패럴렉스 효과란?
  - 스크롤과 동시에 배경이미지나 어떤 특정 요소가 시차를 두고 
  이동함에 따라 공간감이 느껴지게 하는 효과
  (원경은 천천히, 중경은 조금 빠르게, 근경 아주 빠르게 설정함)
***********************************************************/

// 로드 이벤트 설정
window.addEventListener("DOMContentLoaded",loadFn);

// 로드함수 
function loadFn(){

  console.log("로딩완료!");

  // 1. 부드러운 스크롤 적용하기
  startSS();

  // 2. 공통선택자함수
  const qs = x => document.querySelector(x);
  const qsa = x => document.querySelectorAll(x);
  // 3. 등장위치리턴함수
  const retVal = x => x.getBoundingClientRect().top;
  // getBoundingClientRect().top 
  // -> 화면에 등장후 위로 올라가면 마이너스됨!

  // 4. 화면높이값읽기 : 등장요소의 시작값이 이것임!
  const winH = window.innerHeight;
  console.log("winH",winH);

  // 5. 패럴렉스 수치범위 : 움직일값 설정
  const setH1 = 100;
  const setH2 = 200;

  // 6. 패럴렉스 대상선정
  // (1) 글자박스
  const tg1 = qsa(".txt");
  // (2) 아이콘
  const tg2 = qsa(".icon");

  // 7. 패럴렉스 이동함수 
  const moveEl = (elpos,ele,setH) => {
    // 전달값 : 
    // elpos - 위치값 / ele - 요소 / setH - 정한범위수

    // 패럴렉스 범위 : 윈도우높이값 ~ 0 까지!
    // 화면에서 완전히 사라질때 범위는 0이아니고
    // 요소의 -높이값만큼 이다! -> 적당히 -수치로 해결!
    if(elpos < winH && elpos > -200){

      // 1. 위치이동값 계산
      let x = setH - (elpos * setH) / winH;
      console.log("x",-x);

      // 2. 해당요소에 위치이동 CSS반영
      ele.style.cssText = `
        transform:translateY(${-x}px);
      `;
      // cssText속성은 style 속성값을 직접넣어준다!
      
      // 대상요소의 트랜스폼 Y축이동
      // 위치이동의 계산원리
      // -> 윈동우화면 : 위치값 = 정한범위 : 실제이동값
      // -> 윈동우가 1000px : 500px = 200px : x?
      // 실제이동값 = 정한범위 - (위치값*정한범위) / 윈도우화면
      // x = setH2 - (elpos * setH2) / winH
      // -> 이동수치는 0부터 서서히 증가해야 하므로
      // 정한범위수에서 빼준다!
      
    } //////// if : 패럴렉스 범위 /////////

  }; //////// moveEl //////////

  // 8. 스크롤 이벤트함수 만들기
  window.addEventListener("scroll",()=>{
    // 대상1 : 글자박스 패럴렉스호출!
    tg1.forEach(ele => 
      moveEl(retVal(ele),ele,setH2));
      // moveEl(위치값,요소,정한범위)

    // 대상2 : 아이콘 패럴렉스호출!
    tg2.forEach(ele => 
      moveEl(retVal(ele),ele,setH1));
      // moveEl(위치값,요소,정한범위)

  }); //////////// scroll //////////////

  // 스크롤바를 직접 잡고 움직일시 부드러운 스크롤 
  // 위치값 업데이트 - 그래야 스크롤후 스크롤바를 잡으면
  // 튀지않는다!
  window.addEventListener("mouseup", () => {
    pos = window.scrollY;
  }); ////////// mouseup ////////////
  window.addEventListener("keyup", () => {
    pos = window.scrollY;
  }); ////////// keyup ////////////

  // 로딩시 맨위로 이동하기
  setTimeout(() => {
    // 맨위로 이동
    window.scrollTo(0,0);
    // 부드러운 스크롤 위치값 반영!
    pos = 0; // 안하면 튄다!
  }, 400);


} /////////// loadFn 함수 ////////////////