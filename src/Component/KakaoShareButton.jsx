import Share_Btn_Kakao from "../assets/images/Share_Btn_Kakao.png";
import { useEffect } from "react";

const KakaoShareButton = () => {
    useEffect(() => {
        if (window.Kakao) {
            const { Kakao } = window;
            if (!Kakao.isInitialized()) {
                Kakao.init("9aee4068a43e16bab4aa804926747955"); // 자신의 JavaScript 키 입력
            }
        }
    }, []);

    const shareKakao = () => {
        if (window.Kakao) {
            const { Kakao } = window;
            Kakao.Share.sendDefault({
                objectType: "feed",  // 피드 형식 메시지
                content: {
                    title: "오늘의 추천 콘텐츠 📢",
                    description: "이 링크를 확인해보세요!",
                    imageUrl: "https://raw.githubusercontent.com/geonokwon/React-MBTI/main/src/assets/images/Share_Title_Image.jpg"
        ,
                    link: {
                        mobileWebUrl: "https://developers.kakao.com",
                        webUrl: "https://developers.kakao.com",
                    },
                },
                buttons: [
                    {
                        title: "자세히 보기",
                        link: {
                            mobileWebUrl: "https://developers.kakao.com",
                            webUrl: "https://developers.kakao.com",
                        },
                    },
                ],
            });
        }
    };

    return (
        <button onClick={shareKakao}>
            <img
                src={Share_Btn_Kakao}
                alt="카카오톡 공유"
                className="w-14 h-14 transition"
            />
        </button>
    );
};

export default KakaoShareButton;
