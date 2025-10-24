import React from 'react';
import TaskManager from '../components/TaskManager';
import APIData from '../components/APIData';

const Home = () => {
  return (
    <div className="space-y-8">
      <TaskManager />
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">API Data</h2>
        <APIData />
      </div>
    </div>
  );
};

export default Home;
