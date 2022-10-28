import * as React from 'react';
import './style.css';

export default function App() {
  console.log('A rendering');

  React.useEffect(() => {
    console.log('A');
  }, []);

  React.useEffect(() => {
    console.log('A-1');
  }, []);

  React.useEffect(() => {
    console.log('A-2');
  }, []);

  React.useEffect(() => {
    console.log('A-3');
  }, []);

  return (
    <div>
      <ChildComponent />
    </div>
  );
}

function ChildComponent() {
  console.log('B rendering');

  React.useEffect(() => {
    console.log('B');
  }, []);
  return (
    <div>
      <GrandChildComponent />
    </div>
  );
}

function GrandChildComponent() {
  console.log('C rendering');

  React.useEffect(() => {
    console.log('C');
  }, []);

  return <div>grandchild</div>;
}
