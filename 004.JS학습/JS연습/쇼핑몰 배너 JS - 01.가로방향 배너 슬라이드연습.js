window.addEventListener("DOMContentLoaded",loadFn);
function loadFn(){
  let slist = document.querySelectorAll("#slide>li");
  slist.forEach((ele,idx)=>{
    ele.setAttribute("data-seq",idx);
  }); ///// forEach //////
  const abtn = document.querySelectorAll(".abtn");
  const slide = document.querySelector("slide");
  const indic = document.querySelectorAll(".indic li");
  let prot = 0;
  const goSlide = (seq) => {
    if(prot) return;
    prot = 1;
    setTimeout(()=>{
      prot = 0;
    },400);
    let clist = slide.querySelectorAll("li");
    if(seq){
      slide.style.left = "-100%";
      slide.style.transition = "left .4s ease-in-out";
      setTimeout(()=>{
        slide.appendChild(clist[0]);
        slide.style.left = "0";
        slide.style.transition = "none";
      },400); /////// 타임아웃 //////////
    } ////////// if //////////
    else {
      slide.insertBefore(clist[clist.length-1],clist[0]);
      slide.style.left = "-100%";
      slide.style.transition = "none";
      setTimeout(()=>{
        slide.style.left = "0";
        slide.style.transition = "left .4s ease-in-out";
      },0); ////// 타임아웃 /////////
    } //////// else //////////
    clist = slide.querySelectorAll("li");
    let cseq = clist[seq].getAttribute("data-seq");
    for(let x of indic) x.classList.remove("on");
    indic[cseq].classList.add("on");
  }; ///// goSlide 함수 ///////
  abtn.forEach((ele,idx)=>{
    ele.onclick = () => {
      goSlide(idx);
    }; /////// click 함수 ///////
  }); ///// forEach /////////
}; /////// loadFn함수 ///////