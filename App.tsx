import * as React from 'react';
import './style.css';

export default function App() {
  const [windowSize, setWindowSize] = React.useState(0);

  React.useEffect(() => {
    const handleSetWindowSize = (e: any) => {
      setWindowSize(e.target.document.body.clientWidth);
    };
    window.addEventListener('resize', handleSetWindowSize);

    return () => {
      window.removeEventListener('resize', handleSetWindowSize);
    };
  }, []);

  return (
    <div className="container">
      <form className="form-container">
        <h1>반응형에 대한 컨벤션</h1>
        <div className="input-container">
          <input value="width: 80%" />
          <button>width: 20%</button>
        </div>
        <div className="input-container-vw">
          <input value="width: 60vw" />
          <button>width: 20vw</button>
        </div>
        <div className="input-container-rem">
          <input value="width: 50rem" />
          <button>width: 13rem</button>
        </div>
      </form>
      <h1 className="window-size-notification">화면 크기: {windowSize}px</h1>
    </div>
  );
}
