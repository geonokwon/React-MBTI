import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RightSidebar from "../Component/RightSidebar.jsx";
import LeftSidebar from "../Component/LeftSidebar.jsx";


const QuizPage = () => {
    // 질문 리스트 (실제 데이터는 props 로 받을 수도 있음)
    const questions = [
        {
            question: "새로운 손님이 가게에 오면?",
            optionA: "먼저 다가가 말을 걸고 친근하게 인사한다.",
            optionB: "조용히 손님이 원하는 걸 살피고 필요하면 다가간다.",
        },
        {
            question: "손님이 갑자기 바뀐 메뉴나 가격에 대해 물어볼 때?",
            optionA: "친절하게 설명하면서 자연스럽게 대화를 이어간다.",
            optionB: "필요한 정보만 간단히 답하고 조용히 상황을 정리한다. ",
        },
        {
            question: "하루 종일 손님 응대하고 나면?",
            optionA: "더 많은 사람들과 어울리고 싶다.",
            optionB: "혼자만의 시간이 필요하다.",
        },
        {
            question: "가게 홍보 방법을 정할 때?",
            optionA: "검증된 전단지, 쿠폰 등 효과가 입증된 방법을 우선 고려한다.",
            optionB: "SNS 챌린지, 감성 브랜딩 등 새로운 마케팅 방식을 시도해 본다.",
        },
        {
            question: "알바생이 “이렇게 하면 더 편할 것 같아요!”라며 새로운 업무 방식을 제안하면?",
            optionA: "기존 방식과 비교하면서 실용적인지 먼저 따져본다.",
            optionB: "재미있고 신선한 방법이라면 한 번 시도해 본다.",
        },
        {
            question: "신메뉴를 만들 때 어떤 방식이 더 나에게 맞을까?",
            optionA: "기존 인기 메뉴를 참고해서 안정적인 조합으로 만든다.",
            optionB: "기존에 없던 조합이나 특별한 컨셉을 시도해 본다.",
        },
        {
            question: "가게 운영 결정을 내릴 때?",
            optionA: "수익성과 효율성을 우선 고려해 현실적인 선택을 한다.",
            optionB: "고객과 직원의 만족도까지 생각하며 균형 잡힌 결정을 한다.",
        },
        {
            question: "손님이 '이 가게 너무 좋아요!' 라고 칭찬하면?",
            optionA: "\"감사합니다! 어떤 점이 좋으셨나요?\"라며 구체적인 피드백을 얻는다.",
            optionB: "\"정말 감사합니다! 그렇게 말해주셔서 기뻐요\"라고 따뜻하게 반응한다.",
        },
        {
            question: "알바생이 개인 사정으로 갑자기 휴가를 요청하면?",
            optionA: "가게 운영에 지장이 있는지 먼저 판단한 후 승인 여부를 결정한다.",
            optionB: "힘든 상황일 수도 있으니 최대한 배려하려고 한다.",
        },
        {
            question: "하루 일과를 어떻게 정리하는 편인가?",
            optionA: "일정과 계획을 철저히 세우고 그대로 실행한다.",
            optionB: "상황에 따라 유동적으로 움직이며 즉흥적인 결정을 한다.",
        },
        {
            question: "가게 인테리어를 바꾸려 할 때, 나는?",
            optionA: "미리 예산과 일정, 시공 계획을 꼼꼼하게 세운다.",
            optionB: "일단 하고 싶은 부분부터 손봐가며 자연스럽게 변화를 준다.",
        },
        {
            question: "메뉴판을 업데이트해야 하는데, 나는?",
            optionA: "미리 전체적인 구성을 계획하고, 한 번에 수정한다",
            optionB: "필요한 부분만 그때그때 수정하면서 자연스럽게 바꾼다.",
        },
    ];
    const navigate = useNavigate();


    // 현재 진행 중인 질문 (0부터 시작)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    // 선택지 저장 (A 선택: 0, B 선택: 1)
    const [answers, setAnswers] = useState([]);

    // A/B 선택 시 호출되는 함수
    const onAnswerClick = (choice) => {
        const updatedAnswers = [...answers, choice];
        setAnswers(updatedAnswers);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // 👇 마지막 질문 선택 시 결과 페이지로 이동 + 선택된 답변 전달
            navigate("/result", { state: { answers: updatedAnswers } });
        }
    };

    // 진행률 퍼센트 계산
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100">
            {/* 왼쪽 사이드바 */}
            <div className="w-1/5">
                <LeftSidebar />
            </div>

            <div className="w-3/5">
                <div className="h-screen flex flex-col items-center justify-center px-6">
                    {/* 질문 */}
                    <h1 className="text-2xl font-bold text-center mb-9">
                        {questions[currentQuestionIndex].question}
                    </h1>

                    {/* 선택지 A */}
                    <button
                        className="w-full max-w-md px-6 py-4 mb-4 border-2 border-[#00b7f9] rounded-lg shadow-md hover:bg-[rgba(173,253,255,0.3)] transition"
                        onClick={() => onAnswerClick(0)}
                    >
                        {questions[currentQuestionIndex].optionA}
                    </button>

                    {/* 선택지 B */}
                    <button
                        className="w-full max-w-md px-6 py-4 border-2 border-[#00b7f9] rounded-lg shadow-md hover:bg-[rgba(173,253,255,0.3)]  transition"
                        onClick={() => onAnswerClick(1)}
                    >
                        {questions[currentQuestionIndex].optionB}
                    </button>

                    {/* 진행 바 */}
                    <div className="w-full max-w-lg mt-12">
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div
                                className="h-2 bg-[#1e8eff] rounded-full"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* 현재 진행 상태 */}
                    <p className="mt-4 text-lg font-semibold">{currentQuestionIndex + 1} / {questions.length}</p>
                </div>
            </div>

            {/* 오른쪽 사이드바 */}
            <div className="w-1/5">
                <RightSidebar />
            </div>
        </div>
    );
};

export default QuizPage;
