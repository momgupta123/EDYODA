import React from 'react';

const Result = ({ result }) => {
  return (
    <div>
      <h2>Results:</h2>
      <div>
        <h3>Items present only in A:</h3>
        <ul>
          {result.uniqueA.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Items present only in B:</h3>
        <ul>
          {result.uniqueB.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Items present in both A and B:</h3>
        <ul>
          {result.common.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Combined unique items:</h3>
        <ul>
          {result.combined.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Result;
