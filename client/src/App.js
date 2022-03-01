import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddParent from "./Pages/AddParent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<AddParent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
