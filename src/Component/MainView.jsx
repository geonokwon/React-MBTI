import  testImage from "../assets/images/0_Title.png";
import { Link } from "react-router-dom";
const MainView = () => {
    return (
        <div className="h-screen bg-white flex flex-col items-center justify-start p-6">
            {/*<h1 className="text-2xl font-bold">우리의 우정 징표 테스트</h1>*/}
            {/*<p className="text-gray-500 mt-2">우리의 우정 징표는 어떤 물건일까?</p>*/}
            <div className="w-full max-w-lg mt-20 mb-6">
                <img
                    src={testImage}
                    alt="테스트 이미지"
                    className="w-full rounded-lg shadow-lg"
                />
            </div>

            <Link to="/QuizPage" className="w-70 mt-8">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#29f19c] to-[#02a1f9] text-white font-bold rounded-lg border-2 border-gray shadow-md hover:from-[#02a1f9] hover:to-[#29f19c] transition-all">
                    START
                </button>
            </Link>
        </div>
    );
};

export default MainView;
