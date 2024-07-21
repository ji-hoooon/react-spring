import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//3)jsx 문법
let a:number = 10; //변수
const c:number = 15; //상수 (불변)

function App() {
  //4) useState
  //let number:number=1; //상태값 아님
  const [number,setNumber] = useState(1); //상태값: React안의 Hooks라이브러리 이용
  //:변수 number를 변경하기 위해서는 setNumber로 변경 -> 1->number


  const add =(): void =>{
    //number++; 
    //:setNumber로 변경해야함
    setNumber(number+1);
    console.log('add',number);
  };

  //3)jsx 문법
  let b:number = 25;

  //jsx (6) js에서 변수에 선언만 할 경우 -> undefined (NULL이 아님)
  let d;
  // let d=undefined;
  console.log(1,d);

  // jsx (7) css 디자인 -2. 내부에서 따로 분리
  const mystyle={
    color:'red'
  };


  //jsx (1) 리턴은 하나의 태그만
  return ( //jsx (5) 리턴이 한줄일 떄와 한줄 초과일 때 괄호 유무의 차이
    //4) useState
    <div>
      <div>
      {/* 4) 상태값이 아닌 변수이기 때문에 바뀌지 않음 : 렌더링 시점=상태값 변경*/}
      <h1>숫자 : {number}</h1>
      {/* 4) onclick시 실행하도록 바인딩 */}
      <button onClick={add}>더하기</button>
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
      <div style={mystyle}>Hello
      {/* <div>Hello */}
        {/* jsx (2) 변수삽입 */}
        {a}
        {/* jsx (3) if 사용 불가능 삼항연산자 */}
        {a === 10 ? 'true' : 'false'}
        {/* jsx (4) 참일 때만 조건부렌더링*/}
        {b === 25 && 'true'}
        {b === 35 && 'false'}
      </div>
      {/*  jsx (7) css 디자인 -2. 외부 파일에 쓰기*/}
      <h1 className='box-style'>Heading Tag
        {/* jsx (2) 변수삽입 */}
        {b}
      </h1>
    </div>
  );
}

export default App;
