import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.scss';
import Toast from './components/toast/toast'
import Sidebar from './components/sidebar/sidebar'
import Team from './components/team/team';
import Clients from './components/clients/clients';
//import Client from './components/client/client';
import Contact from './components/contact/contact';


function NotFound() {
  return (
    <p style={{
      fontSize: '4em',
      textAlign: 'center',
      margin: 'auto'
    }}>Are you lost?</p>
  )
}

function App() {
  return (
    <Router>
      <Toast/>
      <main className='main'>
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<p>Home</p>} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/team' element={<Team />}/>
            <Route path='/contact-us' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
