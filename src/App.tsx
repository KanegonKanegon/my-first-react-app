import React, { useState } from 'react';

const App: React.FC = () => {
  // stateの宣言: countは数字型(number)
  const [count, setCount] = useState<number>(0);

  // カウントを増やす関数
  const increment = () => setCount(count + 1);

  // カウントを減らす関数
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>カウンターアプリ</h1>
      <p>カウント: {count}</p>
      <button onClick={decrement}>− 減らす</button>
      <button onClick={increment} style={{ marginLeft: '10px' }}>＋ 増やす</button>
    </div>
  );
};

export default App;
