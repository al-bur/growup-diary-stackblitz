import * as React from 'react';
import './style.css';

export default function App() {
  (() => {
    console.log(1);
    setTimeout(() => console.log(2), 0);
  })();
  setTimeout(() => console.log('macro'), 0);
  Promise.resolve('micro')
    .then((v) => v)
    .then((v) => console.log(v + '-again'));
  console.log(3);

  return (
    <div>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
