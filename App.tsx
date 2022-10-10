import * as React from 'react';
import './style.css';

export default function App() {
  const [initialValue, setInitialValue] = React.useState('');

  console.log('rendered');

  React.useEffect(() => {
    setTimeout(() => setInitialValue('changed'), 1000);
  }, []);

  return (
    <div>
      <input defaultValue={initialValue} />
    </div>
  );
}
