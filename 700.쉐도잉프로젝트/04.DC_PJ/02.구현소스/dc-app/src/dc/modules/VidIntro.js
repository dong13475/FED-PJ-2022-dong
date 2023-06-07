// VidIntro 컴포넌트 JS - VidIntro.js

import $ from "jquery";
import "../css/vidintro.css";
import vidintro_data from "../data/vidintro";

// 제이쿼리 로드구역 함수
function jqFn() {
  $(() => {}); ///////////// JQB ///////////////
} ///////////////// jqFn 함수 /////////////////

function VidIntro(props) {
  // props.pg - 해당페이지 데이터속성명

  // 데이터 선택하기
  const rec = vidintro_data[props.pg];

  // 링크코드 생성 함수 : desc 데이터 / sum 데이터에서 처리
  const lcode = (data) => {
    // data는 desc/sum 둘중에 전달됨
    return (
      <>
        {data.split("*")[0]}
        <a href={rec.link[1]} target="_blank">
          {rec.link[0]}
        </a>
        {data.split("*")[1]}
      </>
    );
  };

  return (
    <>
      {/* 모듈코드 */}
      <section className="vidbox">
        {/* 비디오파트 */}
        <div className="vb1">
          <iframe src={rec.vsrc} title={rec.btit}></iframe>
        </div>
        {/* 타이틀파트 */}
        <div className="vd2">
          <h3>{rec.stit}</h3>
          <h2>{rec.btit}</h2>
          <p>
            {/* 특수문자(*)여부에 따라 처리 
            indexOf(문자열) -> 없으면 -1 리턴 */}
            {rec.sum.indexOf("*") == -1 ? rec.sum : lcode(rec.sum)}
          </p>
          <p className="desc">
            {/* 특수문자(*)여부에 따라 처리 
            indexOf(문자열) -> 없으면 -1 리턴 */}
            {rec.desc.indexOf("*") == -1 ? rec.desc : lcode(rec.desc)}
          </p>
          {/* 링크있을경우 표시 */}
        </div>
      </section>
      {/* 빈루트를 만들고 JS로드함수포함 */}
      {jqFn()}
    </>
  );
} /////////////// 어떤 함수 ///////////////

export default VidIntro;
