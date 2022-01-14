//import logo from './logo.svg';
import './App.scss';
import Toast from './components/toast/toast'
import Sidebar from './components/sidebar/sidebar'
import Team from './components/team/team';
import Clients from './components/clients/clients';
import Client from './components/client/client';
import Contact from './components/contact/contact';


function App() {
  return (
    <>
      <Toast/>
      <main className='main'>
        <Sidebar />
        <div className='content'>
          <Team />
        </div>
      </main>
    </>
  );
}

export default App;
