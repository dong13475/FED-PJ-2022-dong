window.addEventListener("DOMContentLoaded",()=>{
  // 리턴함수 셋팅구역
  const q = (x) => {
    let rv = document.querySelectorAll(x);
    let cnt = rv.length;
    cg(cnt + "개");
    if (cnt === 1) rv = rv[0];
    return rv;
  };
  const cg = (x) => console.log(x);
  const retVal = (ele) => ele.getBoundingClientRect().top;
  // 스크롤 등장액션 기능구현하기
  const scAct = q(".scAct");
  const topA = q("#top");
  const tbtn = q(".tbtn");
  const hv = (window.innerHeight / 3) * 2;
});