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
        <div className="min-h-screen flex flex-col items-center justify-between px-6 pt-8 pb-1">
            {/* 이미지 영역 */}
            <div className="w-auto flex justify-center">
                <img
                    src={mbtiResultText}
                    alt="테스트 이미지"
                    className="h-auto max-h-[140vh] w-auto rounded-lg shadow-lg scale-100 origin-top"
                />
            </div>

            {/* 버튼 영역 */}
            <div className="mt-2 w-full flex justify-center">
                <Link to="/">
                    <button className="px-6 py-3 bg-gradient-to-r from-[#41a6e7] to-[#16d5de] text-white font-bold rounded-lg shadow-md hover:from-[#16d5de] hover:to-[#41a6e7] transition-all mt-5 mb-10">
                        다시하기!
                    </button>
                </Link>
            </div>
        </div>

    );
};
export default ResultView;