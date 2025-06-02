import React, { useState } from 'react';

const App: React.FC = () => {
  // stateの宣言: countは数字型(number)
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  // カウントを増やす関数
  const increment = () => setCount(count + step);

  // カウントを減らす関数
  const decrement = () => setCount(count - step);

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
    </div>
  );
};

export default App;
