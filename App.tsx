import * as React from 'react';
import './style.css';

export default function App() {
  const [temp, setTemp] = React.useState({ name: 'sam' });

  return (
    <div>
      {temp.name}
      <button
        onClick={() => {
          const shallowCopy = temp
          shallowCopy.name = 'albur';
          console.log(shallowCopy);
          setTemp(shallowCopy);
        }}
      >
        얕은 복사
      </button>
      <button
        onClick={() => {
          const deepCopy = { ...temp };
          deepCopy.name = 'albur';
          console.log(deepCopy);
          setTemp(deepCopy);
        }}
      >
        깊은 복사
      </button>
    </div>
  );
}
