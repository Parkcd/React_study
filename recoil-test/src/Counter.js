import React from 'react'
import countState from './atoms'
import {
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
    useResetRecoilState
} from "recoil"

function Counter() {
   const [counter, setCounter] = useRecoilState(countState);
   // useState와 같지만, useRecoilState를 사용해 다른 파일에 있는 atom을 읽을 수 있다.

   const currentCount = useRecoilValue(countState); // 읽기 전용
   const counterHandler = useSetRecoilState(countState); // 값만 변경시키기
   const resetCounter = useResetRecoilState(countState); // 디폴트 값 변경


   const plusCount = () => {
       counterHandler((pre) => pre + 1);
   };

   const minusCount =  () => {
       counterHandler((pre) => pre - 1);
   }

   return (
       <div>
           <div>
              {/* <div>{counter}</div> */}
              {/* 아래 코드도 작동됨 */}
              {/* <button onClick={() => setCounter((num) => num + 1)}>+</button>
              <button onClick={() => setCounter((num) => num - 1)}>-</button> */}
              
              <div>{currentCount}</div>
              
              <button onClick={plusCount}>+</button>
              <button onClick={minusCount}>-</button>
              <button onClick={resetCounter}>초기화</button>
           </div>
       </div>
   )
}

export default Counter