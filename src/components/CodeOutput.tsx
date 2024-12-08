import React, { useState } from 'react';

interface CodeOutputProps {
  code: string;
  className?: string;
}

const CodeOutput: React.FC<CodeOutputProps> = ({ code, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy to clipboard. Please try again.');
      });
  };

  return (
    <div className={`${className} p-4 border border-gray-300 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800`}>
      <h2 className="text-lg font-medium mb-2">Generated CSS</h2>
      <textarea
        className="w-full h-32 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 resize-none"
        readOnly
        value={code}
      />
      <button
        onClick={handleCopy}
        className={`mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${copied ? 'opacity-50 cursor-wait' : ''}`}
      >
        {copied ? 'Copied!' : 'Copy CSS'}
      </button>
    </div>
  );
};

export default CodeOutput;

```