import React from 'react';

const Child = () => {
  console.log('child');
  return <div>child</div>;
};

// export default Child;
export default React.memo(Child);
