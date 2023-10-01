import { useState }  from 'react';
import './App.css';
import Form from './components/Form';
import Info from './components/Info';

function App() {
  const [userData, setUserData] = useState();

  const handleUserFetch = (userData) => {
    setUserData(userData);
  }

  return (
    <div className="App">
      <h1>USER INFO</h1>
      <Form onUserFetch={handleUserFetch}/>
      {userData && <Info user={userData}/>} 
     
    </div>
  );
}

export default App;
