import './App.css'
import MainPage from "./Pages/MainPage.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import QuizPage from "./Pages/QuizPage.jsx";
import ResultView from "./Pages/ResultPage.jsx";

function App() {


  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/QuizPage" element={<QuizPage />} />
                <Route path="/result" element={<ResultView />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
