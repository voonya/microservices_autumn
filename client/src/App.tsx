import { useRef } from 'react';
import FileService from './FileService'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ScheduleService from './ScheduleService';


function App() {
  return (
      <Router>
          <a href="/auth">auth</a><br/>
          <a href="/file">file</a><br/>
          <a href="/schedule">schedule</a><br/>
          <a href="/profile">profile</a><br/>
        <Routes>
            <Route path="/file" element={<FileService/>}></Route>
            <Route path="/schedule" element={<ScheduleService/>}></Route>
        </Routes>
      </Router>
  );
}


export default App;
