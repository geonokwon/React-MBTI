import LeftSidebar from "../Component/LeftSidebar";
import MainView from "../Component/MainView";
import RightSidebar from "../Component/RightSidebar";

const MainPage = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start min-h-screen ">
            {/* 모바일: 최상단 고정, 웹: 왼쪽 고정 (고정 너비 적용) */}
            {/*<LeftSidebar className="fixed top-0 left-0 w-[400px] h-[72px] bg-white shadow-md z-50 md:w-[200px] md:h-screen" />*/}

            {/* 메인 콘텐츠 (남은 공간을 차지) */}
            <div className="w-full md:ml-[200px] md:mr-[200px] flex flex-col items-center justify-center px-6 mt-[12px] md:mt-0">
                <MainView />
            </div>

            {/* 웹에서만 오른쪽 사이드바 표시 (고정 너비 적용) */}
            {/*<RightSidebar className="fixed top-0 right-0  h-screen bg-white shadow-md hidden md:flex" />*/}
        </div>
    );
};

export default MainPage;
