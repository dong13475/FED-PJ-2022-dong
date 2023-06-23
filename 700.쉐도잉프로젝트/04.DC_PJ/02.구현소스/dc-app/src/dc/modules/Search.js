/// 검색 모듈 - Search.js ///

import $ from "jquery";
import "../css/search.css";
import CatList from "./CatList";
import cat_data from "../data/cat";
import { useState } from "react";

/* 폰트어썸 임포트 */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 제이쿼리 로드구역 함수
function jqFn() {
  $(() => {}); ///////////// JQB ///////////////
} ///////////////// jqFn 함수 /////////////////

function Search() {
  // 데이터 선택하기 : Hook 데이터 구성하기
  let [sdt, setSdt] = useState(cat_data);
  // 데이터 건수 : Hook 데이터 구성하기
  let [tot, setTot] = useState(cat_data.length);

  // 데이터 검색 함수 /////////////
  const schList = () => {
    // 검색요소 대상 : #schin
    let inp = document.querySelector("#schin");

    // 1. 검색어 읽기
    let keyword = inp.value;
    
    // 2. 검색어 입력확인분기
    if(keyword.trim()==""){
      // 입력창으로 다시 보내기
      inp.focus();
      return;
    }
    console.log("검색어:",keyword);

    // 3. 데이터 검색하기
    // 배열값 다중검색 메서드 -> filter()
    // 검색대상 : 전체원본데이터 (cat_data)
    let newList = cat_data.filter(v=>{
      if(v.cname.toLowerCase().indexOf(keyword) !== -1) return true;
    }); /////////// filter //////////////

    console.log("검색결과:",newList);
    
    
  }; /////////////// schList 함수 ////////////////////
  
  return (
    <>
      {/* 모듈코드 */}
      <section className="schbx">
        {/* 1. 옵션선택박스 */}
        <div className="schopt">
          {/* 검색박스 */}
          <div className="searching">
            {/* 검색버튼 돋보기아이콘 */}
            <FontAwesomeIcon 
            icon={faSearch} 
            className="schbtn" 
            title="Open search"
            onClick={schList} />
            {/* 입력창 */}
            <input id="schin" type="text" placeholder="Filter by Keyword" />
          </div>
        </div>
        {/* 2. 결과리스트박스 */}
        <div className="listbx">
          {/* 결과타이틀 */}
          <h2 className="restit">BROWSE CHARACTERS({tot})</h2>
          {/* 정렬선택박스 */}
          <aside className="sortbx"></aside>
          {/* 캐릭터 리스트 컴포넌트 
          전달속성 dt - 리스트 데이터 */}
          <CatList dt={sdt} />
        </div>
      </section>
      {/* 빈루트를 만들고 JS로드함수포함 */}
      {jqFn()}
    </>
  );
} /////////////// 어떤 함수 ///////////////

export default Search;
