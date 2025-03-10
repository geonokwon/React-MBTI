import  titleImage from "../assets/images/0_Title.png";
import { Link } from "react-router-dom";
import KakaoShareButton from "./KakaoShareButton.jsx";
import LinkCopyButton from "./LinkCopyButton.jsx";

const MainView = () => {
    return (
        <div className="h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
            {/* 상단 이미지 */}
            <div className="w-full max-w-lg mb-6">
                <img
                    src={titleImage}
                    alt="테스트 이미지"
                    className="w-full rounded-lg shadow-lg"
                />
            </div>

            {/* 중앙 콘텐츠 (텍스트 + 버튼) */}
            <p className="mb-2 text-lg font-semibold">몰입감을 위해 이어폰을 준비해주세요!</p>

            <Link to="/QuizPage" className="w-60">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#41a6e7] to-[#16d5de] text-white font-bold rounded-lg border-2 border-gray shadow-md hover:from-[#16d5de] hover:to-[#41a6e7] transition-all">
                    START
                </button>
            </Link>

            {/* 공유 버튼 */}
            <div className="flex justify-center gap-4 mt-6">
                <KakaoShareButton />
                <LinkCopyButton />
            </div>
        </div>
    );
};

export default MainView;
