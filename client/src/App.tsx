import { useRef } from 'react';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FileService from './FileService'
import AuthService from "./AuthService";
import ScheduleService from "./ScheduleService";
import ProfileService from "./ProfileService";


function App() {
  return (
    // <Route path="/auth" element={<AuthService/>}></Route>
    // <Route path="/file" element={<FileService/>}></Route>
    // <Route path="/schedule" element={<ScheduleService/>}></Route>
    // <Route path="/profile" element={<ProfileService/>}></Route>
      <div className="App">
          <AuthService/>
          <FileService/>
          <ScheduleService/>
          <ProfileService/>
      </div>
  );
}


export default App;
