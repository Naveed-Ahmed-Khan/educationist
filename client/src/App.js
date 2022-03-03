import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddParent from "./Pages/AddParent";
import AddTutor from "./Pages/AddTutor";
import AllJobs from "./Pages/AllJobs";
import TutorDetails from "./Pages/TutorDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<AddParent />} />
          <Route path="/add-tutor" element={<AddTutor />} />
          <Route path="/tutor-details" element={<TutorDetails />} />
          <Route path="/all-jobs" element={<AllJobs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
