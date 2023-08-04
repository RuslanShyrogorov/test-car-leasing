import React from 'react';

export default function Button({ children, addClass }) {
  return (
    <button className={`button ${addClass}`} type="button">
      {children}
    </button>
  );
}
