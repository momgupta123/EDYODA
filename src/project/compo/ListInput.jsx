import React from 'react';

const ListInput = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
};

export default ListInput;
