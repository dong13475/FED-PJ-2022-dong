window.addEventListener("DOMContentLoaded",loadFn);
function loadFn(){
  console.log("로딩완료!");
  let snum = 0;
  let scnt = document.querySelectorAll("#slide>li").length;
  console.log("슬라이드개수",scnt);
  const abtn = document.querySelectorAll(".abtn");
  const slide = document.querySelector("#slide");
  const goSlide = (seq) => {
    if(seq){
      snum++;
      console.log("오른쪽!",snum);
    }
    else{
      snum--;
      console.log("왼쪽!",snum);
    }
    if(snum === -1) snum = scnt - 1;
    else if(snum === scnt) snum = 0;
    slide.style.left = (snum*-100)+"%";
    slide.style.transition = "left .4s ease-in-out";
  };
  abtn.forEach((ele,idx)=>{
    ele.onclick = () => {
      goSlide(idx);
    };
  });
}