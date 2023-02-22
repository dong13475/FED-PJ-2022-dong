window.addEventListener("DOMContentLoaded",loadFn);
function loadFn(){

  let slist = document.querySelectorAll("#slide>li");
  slist.forEach((ele,idx)=>{
    ele.setAttribute("data-seq",idx);
  });

  const abtn = document.querySelectorAll(".abtn");
  const slide = document.querySelector("#slide");
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
      },400);
    }
    else{
      slide.insertBefore(clist[clist.length-1],clist[0]);
      slide.style.left = "-100%";
      slide.style.transition = "none";
      setTimeout(()=>{
        slide.style.left = "0";
        slide.style.transition = "left .4s ease-in-out";
      },0);
    }

    clist = slide.querySelectorAll("li");
    let cseq = clist[seq].getAttribute("data-seq");
    for(let x of indic) x.classList.remove("on");
    indic[cseq].classList.add("on");
  };


  abtn.forEach((ele,idx)=>{
    ele.onclick = () => {
      clearAuto();
      goSlide(idx);
    };
  });

  let autoI;
  let autoT;
  function autoSlide(){
    autoI = setInterval(()=>goSlide(1),3000);
  }

  autoSlide();
  
  function clearAuto(){
    clearInterval(autoI);
    clearTimeout(autoT);
    autoT = setTimeout(autoSlide,5000);
  }
} 