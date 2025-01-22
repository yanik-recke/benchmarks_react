import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [inputList, setInputList] = useState([]);

  let startTime = performance.now();
  
  const Content = () => {
    return <p>Content works</p>;
  };

  const onaddSingleBtnClick = () => {
    startTime = performance.now();
    setInputList(inputList.concat(<Content key={uuidv4()}/>));
  }

  const onAddBtnClick = () => {
    startTime = performance.now();
    const newList = [];
    for (let step = 0; step < 10_000; step++) {
      newList.push(<Content key={uuidv4()} />);
    }

    setInputList(newList);
  };
  

  const onRemoveBtnClick = () => {
    startTime = performance.now();
    setInputList([]);
  }

  const onRemoveSingleBtnClick = () => {
    startTime = performance.now();
    const remove = Math.floor(Math.random() * 10_000)
    const newList = inputList.filter((item, index) =>  index !== remove);
    setInputList(newList);
  }
  
  useEffect(() => {    console.log("Last action took: " + (performance.now() - startTime));
  }, [inputList]);
  
  return (

    <>
    <div>
      <button onClick={onaddSingleBtnClick}>Add single component</button>
      <button onClick={onAddBtnClick}>Add 10,000 components</button>
      <button onClick={onRemoveSingleBtnClick}>Remove single component</button>
      <button onClick={onRemoveBtnClick}>Remove 10,000 components</button>
      {inputList}
    </div>
    </>
  )
}

export default App
