//import logo from './logo.svg';
import './App.scss';
import Toast from './components/toast/toast'
import Sidebar from './components/sidebar/sidebar'


function App() {
  return (
    <>
      <Toast message="Toast 1"/>
      <main className='main'>
        <Sidebar />
        <div className='content'>
          Content
        </div>
      </main>
    </>
  );
}

export default App;
