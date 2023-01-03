import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
    {/* Writing NoteState at the very top is becaue of the obvious reasons and that is, inside every component, we can use NoteState variable(remembet that we passed inside value attribute) */}
      <NoteState>                         

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />

          </Routes>
          {/* <TextForm showAlert={showAlert} heading="Wanna Modify The Text ? Welcome To FormatText!" mode={mode}/> */}

        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
