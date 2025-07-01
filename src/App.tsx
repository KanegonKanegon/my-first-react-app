import React, { useState } from 'react';

const App: React.FC = () => {
  // stateの宣言: countは数字型(number)
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  const [countstar, setCountstar] = useState<number>(0);
  const [errorstar, setErrorstar] = useState<string>("");
  // 善行の内容
  const [goodeed, setGoodeed] = useState<string>("");
  // 善行の記録を設定
  const [deeds, setDeeds] = useState<GoodDeed[]>([]);

  // 善行記録の型を自分で作る
  type GoodDeed ={
    content: string;
    point: number;
    date: string;
  };

  const addDeed = () => {
    const today = new Date().toISOString().split("T")[0];
    const newdeed: GoodDeed={
      content: goodeed,
      point: count, 
      date: today,
    };
    setDeeds([...deeds, newdeed]);
    setGoodeed("");
    setCount(0);
  };

  //ポイントの累計
  const totalPoints = deeds.reduce((sum, deed) => sum+deed.point, 0)

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
    <div style={{ textAlign: 'center', marginTop: '50px', paddingBottom: '150px'}}>
      <h1>善行カウンターアプリ</h1>
      <p>累計善行ポイント: {totalPoints}</p>
      {totalPoints > 0 && totalPoints % 10 === 0 &&(
        <p style={{ color: "green", fontWeight: "bold"}}>
        🎉 おめでとう！{totalPoints}ポイント達成！ 🎉
        </p>
      )}
      <p>善行の内容: {goodeed}</p>
      <p>善行カウント: {count}</p>
      <button onClick={decrement}>− 減らす</button>
      <button onClick={increment} style={{ marginLeft: '10px' }}>＋ 増やす</button>
      <div>
        <p>善行の内容を表記</p>
        <input
        type="text"
        value={goodeed}
        onChange={(e) => setGoodeed(e.target.value)}></input>
      </div>
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
      <br></br>
      <div>
        <button onClick={addDeed}>善行を記録する！</button>
      </div>
      <div>
        <p>善行一覧</p>
        {deeds.map((d, i) => (
          <div key={i} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
            <p>日付: {d.date}</p>
            <p>内容: {d.content}</p>
            <p>ポイント: {d.point}</p>
          </div>
        ))}
      </div>
      <div>
        <h1>このアプリの評価(1~5段階)</h1>
        <input
        type="number"
        value={countstar}
        onChange={(e) => {
          const val=Number(e.target.value)
          if (!isNaN(val) && val>0 && val<=5) {
            setErrorstar("");
            setCountstar(val);
          } else if (val>5) {
            setErrorstar("気持ちは受け取っとくけどね？");
            setCountstar(1);
          } else {
            setErrorstar("正しい数字入れろバーカ");
          }
        }}
        />
        <p
        style={{
          textAlign: 'center',
          width: '200px',
          whiteSpace: 'normal',
          wordBreak: 'break-all',
          margin: '0 auto',
        }}>{writestar(countstar)}</p> {/*ここでwritestarを使った値starsを呼び出す*/}
        {errorstar && (
          <p style={{color: "red"}}>{errorstar}</p>
        )}
      </div>
    </div>
  );
};

export default App;
