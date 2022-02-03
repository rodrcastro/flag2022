import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ToastContext } from './contexts/toast-context';
import { WeatherContext } from './contexts/weather-context';

import './App.scss';
import Toast from './components/toast/toast';
import Sidebar from './components/sidebar/sidebar';
import Team from './components/team/team';
import Clients from './components/clients/clients';
//import Client from './components/client/client';
import Contact from './components/contact/contact';
import Weather from './components/weather/weather';
import Github from './components/github/github';

function NotFound() {
  return (
    <p
      style={{
        fontSize: '4em',
        textAlign: 'center',
        margin: 'auto',
      }}
    >
      Are you lost?
    </p>
  );
}

function App() {
  const [toasts, setToasts] = useState([]);
  const [weather, setWeather] = useState({});

  return (
    <ToastContext.Provider value={{ toasts, setToasts }}>
      <WeatherContext.Provider value={{ weather, setWeather }}>
        <Router>
          <Toast />
          <main className="main">
            <Sidebar />
            <div className="content">
              <Routes>
                <Route exact path="/" element={<p>Home</p>} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/github" element={<Github />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>
        </Router>
      </WeatherContext.Provider>
    </ToastContext.Provider>
  );
}

export default App;
