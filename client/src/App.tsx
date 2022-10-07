import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FileService from './FileService'
import AuthService from "./AuthService";
import ScheduleService from "./ScheduleService";
import ProfileService from "./ProfileService";


function App() {
  return (
      <Router>
          <a href="/auth">auth</a><br/>
          <a href="/file">file</a><br/>
          <a href="/schedule">schedule</a><br/>
          <a href="/profile">profile</a><br/>
        <Routes>

            <Route path="/auth" element={<AuthService/>}></Route>
            <Route path="/file" element={<FileService/>}></Route>
            <Route path="/schedule" element={<ScheduleService/>}></Route>
            <Route path="/profile" element={<ProfileService/>}></Route>
        </Routes>
      </Router>
  );
}


export default App;
