// src/components/Card.jsx
import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;