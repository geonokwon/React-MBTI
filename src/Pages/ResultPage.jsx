import {Link, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import HighOrder from "../assets/images/Result_HighOrder.png";

const ResultView = () => {
    const [isRevealed, setIsRevealed] = useState(false); // 결과 공개 여부 상태
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리
    const [imageLoaded, setImageLoaded] = useState(false); // 이미지 로드 상태

    // 비동기 데이터 로딩
    // 이미지 로드 후 로딩 상태 해제
    useEffect(() => {
        if (imageLoaded) {
            setTimeout(() => {
                setIsLoading(false);
            }, 1500); // 이미지 로드 후 0.5초 뒤에 로딩 제거 (더 자연스럽게)
        }
    }, [imageLoaded]);


    const [searchParams] = useSearchParams();
    const mbtiResult = searchParams.get("mbti") || "알 수 없는 결과"; // URL에서 MBTI 가져오기

    // MBTI 결과에 따른 텍스트 매핑
    const mbtiTexts = {
        "ESTJ": "/ESTJ.png",
        "ESTP": "/ESTP.png",
        "ESFJ": "/ESFJ.png",
        "ESFP": "/ESFP.png",
        "ENTJ": "/ENTJ.png",
        "ENTP": "/ENTP.png",
        "ENFJ": "/ENFJ.png",
        "ENFP": "/ENFP.png",
        "ISTJ": "/ISTJ.png",
        "ISTP": "/ISTP.png",
        "ISFJ": "/ISFJ.png",
        "ISFP": "/ISFP.png",
        "INTJ": "/INTJ.png",
        "INTP": "/INTP.png",
        "INFJ": "/INFJ.png",
        "INFP": "/INFP.png",
    };

    // MBTI 결과 텍스트 설정
    const mbtiResultText = mbtiTexts[mbtiResult] || "알 수 없는 결과";

    return (
        <>
            {/* 로딩 화면 (이미지가 완전히 로드될 때까지 유지) */}
            {isLoading && (
                <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-white">
                    <p className="text-xl font-bold text-gray-700">결과를 불러오는 중...</p>
                    <div className="mt-4 w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            <div className={`min-h-screen flex flex-col items-center justify-between px-6 pt-8 pb-1 ${isLoading ? "hidden" : ""}`}>
                {/* 이미지 영역 */}
                <div className="relative w-auto flex justify-center">

                    {/* 실제 결과 이미지 */}
                    <img
                        src={mbtiResultText}
                        alt="테스트 결과"
                        className="h-auto w-auto rounded-lg shadow-lg scale-100 origin-top animate-wiggle motion-safe:animate-wiggle"
                    />

                    {/* 이미지 중앙부터 하단만 블러 처리 */}
                    <div
                        className={`absolute bottom-0 left-0 w-full h-1/2 backdrop-blur-lg flex flex-col items-center justify-start transition-opacity duration-500 py-6 ${
                            isRevealed ? "opacity-0" : "opacity-100"
                        }`}
                    >
                        <p className="text-lg font-semibold text-black px-4 py-2 text-center">
                            전체 결과를 확인해 보세요
                        </p>

                        <button
                            onClick={() => {
                                setIsRevealed(true); // 블러 해제
                                window.open("https://kt-telecop.co.kr/bbs/board.php?bo_table=hiorder&wr_id=1", "_blank"); // 새 창 열기
                            }}
                            className="mt-4 px-6 py-3 bg-gradient-to-r from-[#41a6e7] to-[#16d5de] text-white font-bold rounded-lg shadow-md hover:from-[#16d5de] hover:to-[#41a6e7] transition-all"
                        >
                            방문하고 확인하기!
                        </button>
                        {/* 하이오더 광고 이미지*/}
                        <div className="w-70 h-70 mt-6 md:w-100 md:h-100">
                            <img
                                src={HighOrder}
                                alt="하이오더 이미지"
                                className="w-full rounded-lg animate-[var(--animate-spin-wiggle)]"
                                onLoad={() => setImageLoaded(true)} // 이미지 로드 상태 변경
                            />
                        </div>

                    </div>
                </div>

                {/* 버튼 영역 */}
                <div className="mt-4 w-full flex justify-center">
                    <Link to="/">
                        <button className="px-6 py-3 bg-gradient-to-r from-[#41a6e7] to-[#16d5de] text-white font-bold rounded-lg shadow-md hover:from-[#16d5de] hover:to-[#41a6e7] transition-all mt-5 mb-10">
                            다시하기!
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default ResultView;