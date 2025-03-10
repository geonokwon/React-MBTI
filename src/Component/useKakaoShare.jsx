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
                    imageUrl: "https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png",
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
        <button
            onClick={shareKakao}
            className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow-md hover:bg-yellow-500 transition"
        >
            📢 카카오톡으로 공유하기
        </button>
    );
};

export default KakaoShareButton;
