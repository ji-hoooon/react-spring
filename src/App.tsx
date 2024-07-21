import React from 'react';
import logo from './logo.svg';
import './App.css';

//3)jsx 문법
let a:number = 10; //변수
const c:number = 15; //상수 (불변)

function App() {
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
    //1)
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
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
