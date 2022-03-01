import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddParent from "./Pages/AddParent";

function App() {
  return (
<<<<<<< HEAD:client/src/App.js
    <div className="App">
      <h1>Educationist</h1>
    </div>
=======
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<AddParent />} />
        </Route>
      </Routes>
    </>
>>>>>>> 96f19541f6db2603c7d790572cf3d796a373a036:src/App.js
  );
}

export default App;
