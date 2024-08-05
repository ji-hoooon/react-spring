import React, { createRef, useEffect, useMemo, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sub from "./Sub";
//5)
import { num } from "./aa/Third";
import { randomFill } from "crypto";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import LoginPage from "./pages/LoginPage";

//8) styled-components
// const Title = styled.h1`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

//3)jsx 문법
let a: number = 10; //변수
const c: number = 15; //상수 (불변)

function App() {
  //7) useRef (디자인)
  //: DOM의 변경
  const myRef = useRef<HTMLDivElement>(null);
  // const handleClick = () => {
  //   if (myRef.current) {
  //     myRef.current.style.backgroundColor = 'red';
  //   }
  // };

  //동적으로 리스트 변경 시,
  const [list2, setList2] = useState([
    { id: 1, name: "길동" },
    { id: 2, name: "춘향" },
  ]);

  //Ref를 배열로, createRef라는 동적으로 만든 배열 리턴 -> myref를 배열로 만들어주는 메서드
  let myRefs = Array.from({ length: list2.length }).map(() =>
    createRef<HTMLHeadingElement>(),
  );

  //6) useMemo
  //: 메모리제이션
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState("합계");

  const getAddResult = () => {
    let sum: number = 0;
    list.forEach((i) => (sum = sum + i)); //한 줄일 경우 리턴 생략 가능
    console.log("useMemo sum", sum);
    return sum;
  };

  //return에서 한 상태변수의 상태변경에 의해 다른 상태변수까지 상태변경되었다고 인지되는 것 방지
  //const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  const addResult = useMemo(() => getAddResult(), [list]);
  //두 개의 인자 : (1) 계산할 값 또는 함수, (2) 의존성 배열
  //-> 의존성 배열에 포함된 값이 변경될 때만 게산이 다시 수행
  //-> 함수선언은 호이스팅, 함수 표현식이나 화살표 함수는 호이스팅 안됨

  //5) useEffect
  const [data, setData] = useState(0); //초기값 0
  //변경시에 실행 되는 변수
  const [search, setSearch] = useState(0);

  //다운로드
  const down = () => {
    let downloadData = 5; //가정
    setData(downloadData);
  };

  //(1) 실행시점 : App() 함수가 최초 실행될 때 (마운트될 때, 즉 렌더링할 때)
  //: 매개변수 -> 콜백함수, 의존성리스트
  //(2) 상태변수가 변경될 때
  //(3) 의존리스트로 관리 가능
  useEffect(() => {
    console.log("useEffect 실행됨"); //데이터 변경없으면 한번 실행됨 -> 더하기 누를때 또 실행해야할까?
    down(); //초기값 0 -> 5
    //},[data]);  //data가 변경될때마다 실행 -> 상태변수가 변경될때마다 실행
    // },[]);  //최초에 한번만 실행 -> 어디에도 의존하지 않는다. -> useEffect 한번만 실행
  }, [search]); //data까지 변경

  //4) useState
  //let number:number=1; //상태값 아님
  const [number, setNumber] = useState(1); //상태값: React안의 Hooks라이브러리 이용해 상태화(Hooks가 관리하는 상태값)
  //:변수 number를 변경하기 위해서는 setNumber로 변경 -> 1->number
  //4) 다운로드 상태 저장
  console.log("App 실행됨");

  //const [users,setUsers] = useState([]);
  interface User {
    id: number;
    name: string;
  }
  //let num:number=1;

  // let sample:User[]=[
  //   {id:num++, name:"홍길동"},
  //   {id:num++, name:"임꺽정"},
  //   {id:num++, name:"장보고"},
  //   {id:num++, name:"이순신"},
  // ];
  const [num, setNum] = useState(5);
  let sample: User[] = [
    { id: 1, name: "홍길동" },
    { id: 2, name: "임꺽정" },
    { id: 3, name: "장보고" },
    { id: 4, name: "이순신" },
  ];

  //const [users,setUsers] = useState<User[]>([]);
  //const [users,setUsers] = useState([{id:5, name:"을지문덕"}]);
  //const [users,setUsers] = useState<User[]>([{id:5, name:"을지문덕"}]);
  //레퍼런스가 같다 -> App 한번만 실행
  const [users, setUsers] = useState(sample); //레퍼런스 변경되어야 동작

  const download = () => {
    // let sample:User[]=[
    //   {id:1, name:"홍길동"},
    //   {id:2, name:"임꺽정"},
    //   {id:3, name:"장보고"},
    //   {id:4, name:"이순신"},
    // ];
    //setUsers(sample); //레퍼런스 변경되어야 동작

    //sample에 5번 추가
    sample.push({ id: 5, name: "을지문덕" });
    //-> push는 불변
    console.log(sample);
    setUsers(sample);
    //-> 레퍼런스 변경 : filter, map, concat, slice, 정규연산자
    //const a=sample.concat({id:num++, name:"을지문덕"});
    //const a=sample.concat({id:num, name:"을지문덕"});
    console.log(a);
    //setUsers(a);

    //Fetch와 ajax
    //fetch().then().then();
    //setUsers([...sample]); //깊은 복사,덮어쓰기 -> 항상 다시 렌더링
    setUsers([...sample, { id: num, name: "을지문덕" }]); //깊은 복사,덮어쓰기 -> 항상 다시 렌더링
    setNum(num + 1);

    //setUsers([...users,...sample]); //깊은 복사,추가
    //setUsers(users,sample); //얕은 복사,추가
  };

  const add = (): void => {
    //number++;
    //:setNumber로 변경해야함
    setNumber(number + 1); //리액트가 상태 관리하므로, 리액트에게 상태변경요청
    console.log("add", number);
  };

  //3)jsx 문법
  let b: number = 25;

  //jsx (6) js에서 변수에 선언만 할 경우 -> undefined (NULL이 아님)
  let d;
  // let d=undefined;
  console.log(1, d);

  // jsx (7) css 디자인 -2. 내부에서 따로 분리
  const mystyle = {
    color: "red",
  };

  //jsx (1) 리턴은 하나의 태그만
  return (
    //jsx (5) 리턴이 한줄일 떄와 한줄 초과일 때 괄호 유무의 차이
    <div>
      {/* 8) styled-components */}
      {/* <Header />
      <Login />
      <Footer /> */}
      <LoginPage />
      <div ref={myRef}>
        <Title>박스</Title>
      </div>
      {/* 7) useRef (디자인) */}
      <button
        onClick={() => {
          if (myRef.current) {
            if (myRef.current.style.backgroundColor !== "red")
              myRef.current.style.backgroundColor = "red";
            else myRef.current.style.backgroundColor = "white";
          }

          if (myRefs[0].current) {
            if (myRefs[0].current.style.backgroundColor !== "black")
              myRefs[0].current.style.backgroundColor = "black";
            else myRefs[0].current.style.backgroundColor = "white";
          }
          if (myRefs[1].current) {
            if (myRefs[1].current.style.backgroundColor !== "blue")
              myRefs[1].current.style.backgroundColor = "blue";
            else myRefs[1].current.style.backgroundColor = "white";
          }

          console.log(myRef);
          console.log(myRef.current);
        }}
      >
        색 변경{" "}
      </button>
      {/* <button onClick={handleClick}>색 변경</button> */}
      <div ref={myRef}>박스</div>

      {/* 리스트 출력 */}
      <div>
        {list2.map((user, index) => (
          //useRef 배열 생성 필요 -> createRef
          <h1 ref={myRefs[index]}>{user.name}</h1>
        ))}
      </div>

      {/* 6) useMemo */}
      {list.map((i) => (
        <h1> {i}</h1>
      ))}
      <button
        onClick={() => {
          setList([...list, list[list.length - 1] + 1]);
        }}
      >
        리스트 값 추가
      </button>
      {/* <div> 합계 : {getAddResult()}</div> */}
      {/* 리스트 값 추가시 리턴이 다시 실행 -> 합계 다시 계산 */}
      <button
        onClick={() => {
          if (str === "합계") setStr("총합");
          else if (str === "총합") setStr("합계");
        }}
      >
        합계 문자 변경
      </button>
      {/* <div> {str} : {getAddResult()}</div>   */}
      {/* 합계 문자 변경시에도 useMemo sum함수 실행 -> 실행 안되도록 하려면? -> 필요한 함수만 실행*/}
      {/* :상태변수 str의 상태 변경 -> return 영역 다시 렌더링*/}
      <div>
        {" "}
        {str} : {addResult}
      </div>
      {/* 합계 문자 변경시에 useMemo sum함수 실행 안됨 -> useMemo 사용 */}

      {/* /5) useEffect */}
      <button
        onClick={() => {
          setSearch(Math.floor(Math.random() * 100));
        }}
      >
        검색하기
      </button>
      <h1>데이터: {data}</h1>
      {/* <button onClick={()=>{}}>더하기</button> */}
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
      {/* 초기값 0 -> 5 -> 6 -> useEffect -> 5 : 배열에 의존하도록 변경 필요*/}

      {/* 4) useState */}
      <div>
        {/* 4) 상태값이 아닌 변수이기 때문에 바뀌지 않음 : 렌더링 시점=상태값 변경*/}
        <h1>숫자 : {number}</h1>
        {/* 4) onclick시 실행하도록 바인딩 */}
        <button onClick={add}>더하기</button>
        {/* 4) Sub : 해당 서브 컴포넌트의 호출여부(렌더링여부)를 결정 가능*/}
        <Sub />
        {/* 4) 다운로드*/}
        <h1>
          다운로드 :
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                ID: {user.id}, Name: {user.name}
              </li>
            ))}
          </ul>
        </h1>
        <button onClick={download}>다운로드</button>
      </div>

      {/* 1)
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}

      {/*  jsx (7) css 디자인 -1. 내부에 직접*/}
      <div style={mystyle}>
        Hello
        {/* <div>Hello */}
        {/* jsx (2) 변수삽입 */}
        {a}
        {/* jsx (3) if 사용 불가능 삼항연산자 */}
        {a === 10 ? "true" : "false"}
        {/* jsx (4) 참일 때만 조건부렌더링*/}
        {b === 25 && "true"}
        {b === 35 && "false"}
      </div>
      {/*  jsx (7) css 디자인 -2. 외부 파일에 쓰기*/}
      <h1 className="box-style">
        Heading Tag
        {/* jsx (2) 변수삽입 */}
        {b}
      </h1>
    </div>
  );
}

export default App;
