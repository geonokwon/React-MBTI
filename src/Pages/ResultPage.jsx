import {Link, useLocation} from "react-router-dom";


const ResultView = () => {
    const location = useLocation();
    const answers = location.state?.answers || []; // 선택한 답변 가져오기
    //3개씩 나눠서 배열을 따로 저장하는 함수
    const splitIntoGroups = (answers) => {
        let groups = [];
        for (let i = 0; i < answers.length; i += 3) {
            groups.push(answers.slice(i, i + 3));
        }
        return groups;
    };

    //3개씩 나눈 그룹 저장
    const groupedAnswers = splitIntoGroups(answers);

    //MBTI 유형별로 배열에 저장
    const MBTI_Categories = {
        E_I: groupedAnswers[0] || [], //외향(E) vs 내향(I)
        S_N: groupedAnswers[1] || [], //감각(S) vs 직관(N)
        T_F: groupedAnswers[2] || [], //사고(T) vs 감정(F)
        J_P: groupedAnswers[3] || [], //판단(J) vs 인식(P)
    };
    const determineMBTI = (categories) => {
        return {
            E_I: categories.E_I.filter(v => v === 0).length > categories.E_I.filter(v => v === 1).length ? "E" : "I",
            S_N: categories.S_N.filter(v => v === 0).length > categories.S_N.filter(v => v === 1).length ? "S" : "N",
            T_F: categories.T_F.filter(v => v === 0).length > categories.T_F.filter(v => v === 1).length ? "T" : "F",
            J_P: categories.J_P.filter(v => v === 0).length > categories.J_P.filter(v => v === 1).length ? "J" : "P",
        };
    };

    //최종 MBTI 결과 계산
    const mbtiResultObj = determineMBTI(MBTI_Categories);
    const mbtiResult = `${mbtiResultObj.E_I}${mbtiResultObj.S_N}${mbtiResultObj.T_F}${mbtiResultObj.J_P}`;

    // MBTI 결과에 따른 텍스트 매핑
    const mbtiTexts = {
        "ESTJ": "",
        "ESTP": "모험을 즐기는 현실주의자",
        "ESFJ": "배려의 리더",
        "ESFP": "자유로운 사교적 모험가",
        "ENTJ": "전략적인 리더형",
        "ENTP": "창의적인 혁신가",
        "ENFJ": "사람을 이끄는 리더",
        "ENFP": "열정적인 자유 영혼",
        "ISTJ": "원칙을 중시하는 관리자",
        "ISTP": "냉철한 현실주의 탐험가",
        "ISFJ": "헌신적인 조력자",
        "ISFP": "감각적이고 온화한 예술가",
        "INTJ": "계획적인 전략가",
        "INTP": "논리적이고 분석적인 사색가",
        "INFJ": "이상을 추구하는 조언자",
        "INFP": "감성적이고 창의적인 몽상가",
    };

    // MBTI 결과 텍스트 설정
    const mbtiResultText = mbtiTexts[mbtiResult] || "알 수 없는 결과";


    return (
        <div className="h-screen flex flex-col items-center justify-center px-6">
            <img
                src={mbtiResultText}
                alt="테스트 이미지"
                className="w-1/2 rounded-lg shadow-lg"
            />
            <div className="mt-6">
                <Link to="/">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-[#000046] to-[#1cb5e0] text-white font-bold rounded-lg shadow-md hover:from-[#1cb5e0] hover:to-[#000046] transition-all">다시하기!</button>
                </Link>
            </div>
        </div>
    );
};
export default ResultView;