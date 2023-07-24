import React, { useState } from 'react';

const Likeandadd = () => {
  const [birdList, setBirdList] = useState([]);
  const [birdName, setBirdName] = useState('');
  const [count, setCount] = useState(0);

  const handleInputChange = (e) => {
    setBirdName(e.target.value);
  };

  const handleAddBird = () => {
    if (birdName.trim() !== '') {
      setBirdList([...birdList, { name: birdName, count: 0 }]);
      setBirdName('');
    }
  };

  const handleIncreaseCount = (index) => {
    const updatedBirdList = [...birdList];
    updatedBirdList[index].count += 1;
    setBirdList(updatedBirdList);
  };

  return (
    <div>
      <input
        placeholder='Enter bird name'
        value={birdName}
        onChange={handleInputChange}
      />
      
      <br/>
      <br/>
      <button onClick={handleAddBird}>Add bird</button>
      <ul>
        {birdList.map((bird, index) => (
          <li key={index}>
            {bird.name}{' '}
            <br/>
            <span>Count: {bird.count}</span>
            <button onClick={() => handleIncreaseCount(index)}>+</button>
            {/* <span>Count: {bird.count}</span> */}
          </li>
          
        ))}
        <br/>
      </ul>
    </div>
  );
};

export default Likeandadd;
