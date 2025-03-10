import { useState, useEffect } from "react";
import playIcon from "../assets/images/Sound_On.png";  // 재생 버튼 이미지
import pauseIcon from "../assets/images/Sound_Off.png"; // 정지 버튼 이미지
import bgMusic from "../assets/audio/BGM.mp3"; // 배경음 파일

const BackgroundMusicButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio] = useState(new Audio(bgMusic)); // 오디오 객체 생성

    useEffect(() => {
        audio.loop = true; // 배경음 무한 루프 설정
        return () => {
            audio.pause(); // 컴포넌트 언마운트 시 정지
        };
    }, [audio]);

    const toggleMusic = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <button onClick={toggleMusic}
                className="fixed top-20 right-1 md:top-10 md:right-54 w-14 h-14 z-50 flex items-center justify-center"
        >
            <img
                src={isPlaying ?  playIcon : pauseIcon}
                alt="배경음 토글"
                className="w-8 h-8 md:w-10 md:h-10  transition-transform transform active:scale-70"
            />
        </button>
    );
};

export default BackgroundMusicButton;
