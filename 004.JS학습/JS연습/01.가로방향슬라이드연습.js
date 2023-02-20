// loadFn 함수 호출 
window.addEventListener("DOMContentLoaded",loadFn);
// 로드구역
function loanFn(){
  // 슬라이드번호 변수
  let snum = 0;
  // 슬라이드 개수 변수
  let scnt = document.querySelectorAll("#slide>li").length;

  const abtn = document.querySelectorAll(".abtn");
  const slide = document.querySelector("#slide");
  // 슬라이드 변경함수
  const goSlide = (seq) => {
    // 방향에 따른분기
    // 오른쪽버튼 클릭시 : seq===1일경우
    if(seq){
      // 슬라이드 번호 증가
      snum++;
    }
    // 왼쪽버튼 클릭시 : seq===0일경우
    else{
      // 슬라이드 번호 감소
      snum--;
    }
    // 한계값 체크
    // 처음이전 -> 끝
    if(snum===-1) snum = scnt-1;
    // 끝다음 -> 처음
    else if(snum === scnt) snum =0;
    // 이동하기
    slide.style.left = (snum*-100)+"%";
    slide.style.transition = "left .4s ease-in-out";
  };
  // 대상에 이벤트 설정하기
  abtn.forEach((ele,idx)=>{
    ele.onclick = () => {
      goSlide(idx);
    };
  });
} // 로드구역 // 