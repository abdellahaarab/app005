import './App.css';
import Cpmmunication from './Cpmmunication/Cpmmunication';
import LoginControl, { Validator } from './LoginControl';

function App() {
  return (
    <div className="container mt-5">
        {/* <LoginControl/> */}
        <Cpmmunication/>
    </div>
  );
}

export default App;
