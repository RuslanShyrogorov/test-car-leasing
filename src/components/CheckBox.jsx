import React from 'react';

export default function CheckBox() {
  return (
    <label>
      <div className="wrapper-checkbox">
        <input type="checkbox" className="checkbox" />
        <div className="slider"></div>
        <p className="checkbox-text">В сравнение</p>
      </div>
    </label>
  );
}
