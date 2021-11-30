import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Custom/Header/Header';
import Chats from './Components/Chats/Chats'

function App() {
  return (
    <>
      <Header/>
      <section className="pages">
        <Sidebar/>
        <Chats/>
      </section>
    </>
  );
}

export default App;
