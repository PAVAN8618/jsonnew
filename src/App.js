import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('http://localhost:3000/data')
  useEffect(()=>{
    fetch(url)
    .then(response=>response.json())
    .then(json =>setData(json))

  }, [url])
 
  //

//console.log(data);
  return (
    <div className="App">
    <h1>Product Description</h1>
    <div className="trip-list">
      {data.map(data=>(
        <li key={data.id}>
          <h3>{data.name}</h3>
          <h3>{data.description}</h3>
          <h3>{data.price}</h3>
          <h3>{data.loc}</h3>
        </li>
      ))}
    
    <div className="filter">
    <button onClick={(e)=>setUrl('http://localhost:3000/data?loc=India')}>India</button>
    <button onClick={(e)=>setUrl('http://localhost:3000/data')}>All</button>
    </div>
    </div>
    </div>
  );
}

export default App;
