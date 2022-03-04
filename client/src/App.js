import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddParent from "./Pages/AddParent";
import AddTutor from "./Pages/AddTutor";
import AddJob from "./Pages/AddJob";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<AddParent />} />
          <Route path="/add-tutor" element={<AddTutor />} />
          <Route path="/add-job" element={<AddJob />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
