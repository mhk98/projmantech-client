import "./App.css";
import AddStudent from "./Pages/AddStudent";
import Students from "./Pages/Students";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Students></Students>
      <AddStudent></AddStudent>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
