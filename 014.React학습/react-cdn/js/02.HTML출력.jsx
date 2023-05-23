// HTML 출력 JSX

// 변수에 태그를 jsx문법으로 작성하여 할당한다!
// JSX는 최상위 부모가 하나여야한다!(기본XML문법과 동일!)

// 배열 데이터 생성하기
const data = [
  { 이름: "김소영", 전화번호: "010-222-3333", 생일: "20.01.20" },
  { 이름: "전우치", 전화번호: "019-112-1234", 생일: "94.09.12" },
  { 이름: "강감찬", 전화번호: "011-1240-1412", 생일: "00.01.01" },
  { 이름: "공유", 전화번호: "010-4422-9900", 생일: "99.12.31" },
  { 이름: "김마리", 전화번호: "010-6577-3214", 생일: "88.08.18" },
];

// 배열 map메서드를 사용하여 태그를 데이터와 바인딩한다!
// 배열변수.map(변수=>태그구성)
// JSX파일은 태그구성시 태그를 그대로 사용해야 태그로 인식된다!
// 쉽게말해 따옴표를 쓰지 않는다!(Root는 하나!)

const list = data.map((val) => (
  <tr>
    <td>{val.이름}</td>
    <td>{val.전화번호}</td>
    <td>{val.생일}</td>
  </tr>
)); /////////// map ///////////

const myele = (
  <div>
    <h1>♣ 나의 친구 리스트</h1>
    <table>
      <tr>
        <th>이름</th>
        <th>전화번호</th>
        <th>생일</th>
      </tr>
      {list}
    </table>
  </div>
);

// 화면출력
// ReactDOM.render(출력할요소,대상요소)
ReactDOM.render(myele, document.querySelector("#root"));
