import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/api');
      const responseData = await response.json();
      setData(responseData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Backend Data</h1>
      <p>Data from backend: {JSON.stringify(data)}</p>
    </div>
  );
}

export default App;
