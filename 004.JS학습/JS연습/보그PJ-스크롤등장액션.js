window.addEventListener("DOMContentLoaded",()=>{
  // 리턴함수 셋팅구역
  const q = (x) => {
    let rv = document.querySelectorAll(x);
    let cnt = rv.length;
    cg(cnt + "개");
    if (cnt === 1) rv = rv[0];
    return rv;
  }; // 리턴함수 구역
  const cg = (x) => console.log(x);
  // 등장액션 대상 위치값 리턴함수 //
  const retVal = (ele) => ele.getBoundingClientRect().top;
  //********* 스크롤 등장액션 기능구현하기 *********//
  const scAct = q(".scAct");
  const topA = q("#top");
  const tbtn = q(".tbtn");
  const hv = (window.innerHeight / 3) * 2;
  //////// 클래스 넣기 함수 만들기
  const showIt = (ele) => {
    let xval = retVal(ele);
    if (xval < hv && xval > 0){
      ele.classList.add("on");
    }
  };
  let scTop;
  //////// 스크롤 이벤트 ///////////////
  window.addEventListener("scroll",()=>{
    scTop = window.scrollY;
    cg(scTop);
    if(scTop >= 100) topA.classList.add("on");
    else topA.classList.remove("on");
    if(scTop >= 300) tbtn.classList.add("on");
    else tbtn.classList.remove("on");
    for(let x of scAct) showIt(x);
  }); /////////// 스크롤 /////////////////
});