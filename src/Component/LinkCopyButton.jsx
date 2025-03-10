import { useState } from "react";
import Share_Btn_Link from "../assets/images/Share_Btn_Link.png"; // 🔥 이미지 불러오기

const LinkCopyButton = () => {
    const [copied, setCopied] = useState(false);

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);

            // 1초 후 알림 메시지 사라지게 설정
            setTimeout(() => setCopied(false), 1000);
        } catch (err) {
            console.error("링크 복사 실패:", err);
        }
    };

    return (
        <button onClick={copyLink} className="relative">
            <img
                src={Share_Btn_Link}
                alt="링크 복사"
                className="w-14 h-14 transition"
            />
            {/* 복사 완료 메시지 (오른쪽 + 위쪽 배치) */}
            {copied && (
                <span className="absolute top-[-10px] left-full ml-2 bg-black text-white px-3 py-1 rounded-md text-sm whitespace-nowrap">
                    복사 완료!
                </span>
            )}
        </button>
    );
};

export default LinkCopyButton;
