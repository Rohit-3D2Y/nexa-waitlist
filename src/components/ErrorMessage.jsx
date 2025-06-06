import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="text-red-500 text-sm mt-2 text-center">
      {message}
    </div>
  );
};

export default ErrorMessage;
