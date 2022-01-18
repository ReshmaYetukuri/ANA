import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles.css";
import LogInPage from "../pages/login";
import Signup from "../pages/signup";

interface Props {
  onSubmit:React.FormEventHandler
  // any props that come into the component
}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage onSubmit={e => (e.target)} />} />
        <Route path="/signup" element={<Signup onSubmit={e => (e.target)}/>} />
        {/* <Route path="*"><Redirect to="/404" /></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
