import "./index.css";
import Employee from "./components/Employee";
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  
  const showEmployees = true;
  return (
    <div className="App bg-red-300">
      {console.log("Inside the return")}
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Emilian" role="Intern" />
          <Employee name="Andreea" role={role}/>
          <Employee name="Diana" />
        </>
      ) : (
        <p>You cannot see this page</p>
      )}
    </div>
  );
}

export default App;
