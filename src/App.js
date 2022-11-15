import './App.css';
import Content from "./components/content/Content"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <div className='App'>
      <div className='Navbar__bg'>
        <Navbar />
      </div>
      <Content />
    </div>
  )
}

export default App;
