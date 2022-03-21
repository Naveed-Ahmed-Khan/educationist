import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddJob from "./Pages/AddJob";
import AddParent from "./Pages/AddParent";
import AddTutor from "./Pages/AddTutor";
import AddJob from "./Pages/AddJob";
import AllJobs from "./Pages/AllJobs";
import AllTutors from "./Pages/AllTutors";
import Feedback from "./Pages/Feedback";
import JobsApplied from "./Pages/JobsApplied";
import JobsDetails from "./Pages/JobsDetails";
import TutorDetails from "./Pages/TutorDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<AddParent />} />
          <Route path="/add-tutor" element={<AddTutor />} />

          <Route path="/all-tutors" element={<AllTutors />} />
          <Route path="/tutor-details" element={<TutorDetails />} />
          <Route path="/all-jobs" element={<AllJobs />} />
          <Route path="/add-job" element={<AddJob />} />
          <Route path="/jobs-applied" element={<JobsApplied />} />
          <Route path="/jobs-details" element={<JobsDetails />} />
          <Route path="/feedback" element={<Feedback />} />


        </Route>
      </Routes>
    </>
  );
}

export default App;
