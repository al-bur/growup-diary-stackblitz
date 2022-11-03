import * as React from 'react';
import Child from './Child';
import './style.css';

export default function App() {
  const [arr, setArr] = React.useState([1, 1, 3, 4, 5]);
  const [temp, setTemp] = React.useState(true);

  React.useEffect(() => {
    setTemp(false);
  }, []);

  return (
    <div>
      {arr.map((ele, index) => (
        <Child key={ele} />
      ))}
    </div>
  );
}
