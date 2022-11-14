import "./App.css";
import Employee from "./components/Employee";

function App() {
  console.log("We are about to list the employees");
  const showEmployees = true;
  return (
    <div className="App">
      { console.log('Inside the return') }
      {showEmployees ? (
        <>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </>
      ) : (
        <p>You cannot see this page</p>
      )}
    </div>
  );
}

export default App;
