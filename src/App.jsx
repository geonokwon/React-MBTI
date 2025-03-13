import './App.css'
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage.jsx";
import QuizPage from "./Pages/QuizPage.jsx";
import {lazy, Suspense} from "react";

const ResultPage = lazy(() => import("./Pages/ResultPage"));
function App() {
  return (
    <>
        <Router>
            <Suspense fallback={<div className="text-center text-xl"></div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/QuizPage" element={<QuizPage />} />
                    <Route path="/result" element={<ResultPage />} />

                    {/* 알수없는 경로 접근시 메인으로!*/}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Suspense>
        </Router>
    </>
  )
}

export default App
