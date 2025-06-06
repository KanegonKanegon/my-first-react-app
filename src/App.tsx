import React, { useState } from 'react';

const App: React.FC = () => {
  // stateの宣言: countは数字型(number)
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  const [countstar, setCountstar] = useState<number>(0);

  // カウントを増やす
  const increment = () => setCount(count + step);

  // カウントを減らす
  const decrement = () => setCount(count - step);
  
  function writestar(x: number): string {
    let result="";
    for (let i=0; i<x; i++) {
      result+="★";
    }
    return result;
  }
  console.log(writestar(5)); // → ★★★★★
  console.log(writestar(0)); // → ""
  console.log(writestar(1)); // → ★


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>カウンターアプリ</h1>
      <p>カウント: {count}</p>
      <button onClick={decrement}>− 減らす</button>
      <button onClick={increment} style={{ marginLeft: '10px' }}>＋ 増やす</button>
      <div>
        <p>増幅幅の設定</p>
        <input 
        type="number" //入力できる値を数字限定に
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        style={{marginLeft:'10px', width: '50px'}}
        min="1"
        /> 
      </div>
      <div>
        <h1>星の表示</h1>
        <input
        type="number"
        value={countstar}
        onChange={(e) => setCountstar(Number(e.target.value))}
        />
        <p
        style={{
          textAlign: 'center',
          width: '200px',
          whiteSpace: 'normal',
          wordBreak: 'break-all',
          margin: '0 auto',
        }}>{writestar(countstar)}</p> {/*ここでwritestarを使った値starsを呼び出す*/}
      </div>
    </div>
  );
};

export default App;
