// 파일럿 PJ 메인페이지 JS - main.js

// 자동스크롤 기능 함수 가져오기
import autoScroll from "./jquery-autoScroll.js";

// 자동스크롤 호출
autoScroll();

// 메인 페이지

/************************************************ 
  [ 메인 페이지 주요 기능 ]

  1. 자동스크롤 기능 구현 (OK)
  + 페이지 도착후 등장액션 구현
  
  2. 햄버거버튼 전체메뉴 보이기 / 숨기기 (OK)
  + 전체메뉴 배경동영상 보일때만 재생(숨길때 멈춤)

  3. 배너 터치기능 넘기기 (제이쿼리 UI이용) 
  + 배너별 타이틀 등장하기
  + 양쪽 이동버튼 플러그인 적용하기


************************************************/

// 햄버거 버튼 클릭시 전체 메뉴 보이기
$(".ham").click(function () {
  // 햄버거 버튼 클래스 변경(토글)
  $(this).toggleClass("on");
  // 전체메뉴 보이기
  $(".mbox").fadeToggle(400);

  // 햄버거 버튼에 클래스 on이 있으면 재생 / 없으면 정지
  let isOn = $(this).is(".on");
  console.log(isOn);
  // 배경동영상 재생 / 멈춤
  if (isOn) $(".bgm").get(0).play();
  else $(".bgm").get(0).pause();
  // audio,video 요소 선택시 get(순번)
  // 을 사용하는 것은 같은 이름의 클래스를
  // 사용할 경우 순서대로 요소를 담는다!
}); ////// click //////

/*************************************************
  [ 터치 배너 기능구현하기 ]
  1. 원리: 제이쿼리 UI를 이용하여 X축으로만
  드래그가 되도록 설정후 위치값을 체크하여
  드래그가 끝난시점에 자동위치이동 애니메이션
  처리해 준다!

  2. 대상: .slide
  3. 기준
  (1) 왼쪽방향이동 : 
      기준값(-100%) 보다 -10% 작은경우(-110%)
  (2) 오른쪽방향이동 : 
      기준값(-100%) 보다 10% 큰경우(-90%)
  (3) 제자리이동
      양쪽기준값 사이일때(-110%~-90%)

  4. 구현시 주의사항
  -> %단위는 모두 px단위로 변환하여 구현한다!
  -> 배너크기가 윈도우가로크기와 같다! 이것을 활용함!
*************************************************/

// 1.대상선정
const slide = $(".slide");

// 2. 드래그 설정
slide.draggable({
  axis: "x", // x축고정
}); ////// 드래그설정 ////

// 윈도크기리턴함수
const reWin = () => $(window).width();
// 리사이즈 업데이트
$(window).resize(() => {
  winW = reWin();
  console.log("winW:", winW);
});

// 3. 드래그가 끝난후 기준위치 체크후 이동애니메이션

// 윈도우 가로크기 : left 기준위치 px변환! 
let winW = reWin();
console.log("winW*0.9:", winW*0.9);
console.log("winW:", winW);
console.log("winW*1.1:", winW*1.1);

// 광드래그 방지위해 커버셋팅(show()/hide())
const cover = $(".cover");


// 드래그끝난후 이벤트 함수 만들기
slide.on("dragstop",function(){

  // 광드래그 방지위해 커버 보이기
  cover.show();
  
  // 슬라이드 left위치값
  let sleft = $(this).offset().left;
  console.log("허허",sleft);

  // 1. 왼쪽으로 이동 : -110% 미만일때
  if(sleft < -winW*1.1){
    slide.animate({
      left: -winW*2 + "px"
    },600,"easeOutQuint",()=>{
      // 이동후 맨앞li 맨뒤이동
      slide.append(slide.find("li").first())
      .css({left:"-100%"});
      // 커버제거하기
      cover.hide();
    });
  } ////// if : 왼쪽이동 ////////
  
  // 2. 오른쪽으로 이동 : -90% 초과일때
  else if(sleft > -winW*0.9){
    slide.animate({
      left: "0px"
    },600,"easeOutQuint",()=>{
      // 이동후 맨뒤li 맨앞으로 이동하기
      slide.prepend(slide.find("li").last())
      .css({left:"-100%"});
      // 커버제거하기
      cover.hide();
    }); 
  } ////// else if : 오른쪽이동 ////////
  
  // 3. 제자리로 이동 : -90% 초과일때
  else{
    slide.animate({
      left: -winW + "px"
    },200,"easeOutQuint",()=>{
      // 커버제거하기
      cover.hide();
    });
  } ////// else : 제자리이동 ////////
  
}); ///////// slide //////////
