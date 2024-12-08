import React from 'react';
import GradientGenerator from '@components/GradientGenerator';

const Index: React.FC = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto p-4">
        <GradientGenerator />
      </div>
    </main>
  );
};

export default Index;
```