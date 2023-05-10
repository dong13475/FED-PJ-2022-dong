// 서브페이지 뷰엑스 스토어 셋팅 JS - store.js
const store = new Vuex.Store({
  state: {
    // 서브데이터 셋업
    subData: {
      남성: {
        // 남성메뉴
        menu: ["NEW ARRIVAL", "WINDBREAKER", "BEACH STYLE", "SPORT STYLE"],
        // 배너개수
        cnt: 3,
        // 카테고리명
        cat: "men",
      },
      여성: {
        // 여성메뉴
        menu: ["NEW ARRIVAL", "SPORTY FASHION", "FREE STYLE", "COMFORTABLE STYLE"],
        // 배너개수
        cnt: 3,
        // 카테고리명
        cat: "women",
      },
      스타일: {
        // 스타일메뉴
        menu: ["NEW ARRIVAL", "GOLF LIFE", "CAMPING STYLE", "SPORT STYLE"],
        // 배너개수
        cnt: 5,
        // 카테고리명
        cat: "style",
      },
    },
    // 공통처리 메뉴 변수
    menu: ["NEW ARRIVAL", "WINDBREAKER", "BEACH STYLE", "SPORT STYLE"],
    // 공통처리 배너개수 변수
    cnt: 3,
    // 공통처리 카테고리명 변수
    cat: "men",
  },
  // state 데이터 변경 메서드구역!
  mutations: {
    // 데이터 변경 셋업 메서드
    chgData(dt,pm){ // dt-state데이터, pm-전달값
      console.log("데이터변경:",pm);
      // pm에 객체데이터 속성명이 전달됨(남성/여성/스타일)
      // 1. 해당 카테고리 개수 업데이트
      dt.cnt = dt.subData[pm].cnt;
      // 2. 해당 카테고리 이름 업데이트
      dt.cat = dt.subData[pm].cat;
      // 3. 해당 카테고리 메뉴 업데이트
      dt.menu = dt.subData[pm].menu;
    }, //////// chgData 메서드 ////////
  },
});

// 내보내기!
export default store;