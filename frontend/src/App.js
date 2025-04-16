import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  // Function to call the backend API
  const fetchData = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/connect', {
        host: 'localhost',
        port: 9000,
        user: 'default',
        password: '',
        database: 'default',
      });
      
      setResponseData(response.data); // Set the response data to be displayed
    } catch (err) {
      setError('Error connecting to the backend');
    }
  };

  return (
    <div className="App">
      <h1>ClickHouse API Connection</h1>
      <button onClick={fetchData}>Connect to ClickHouse</button>
      {responseData && <pre>{JSON.stringify(responseData, null, 2)}</pre>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;

