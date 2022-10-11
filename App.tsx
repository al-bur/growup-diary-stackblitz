import * as React from 'react';
import './style.css';

export default function App() {
  const [name, setName] = React.useState('');

  const handleSetName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value.trim());
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(name);
      }}
    >
      <input value={name} onChange={handleSetName} pattern="[^\s]+" required />
      <button type="submit">제출</button>
    </form>
  );
}
