import LeftSidebar from "../Component/LeftSidebar";
import MainView from "../Component/MainView";
import RightSidebar from "../Component/RightSidebar";

const MainPage = () => {
    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100">
            {/* 왼쪽 사이드바 */}
            <div className="w-1/5">
                <LeftSidebar />
            </div>

            {/* 메인 콘텐츠 */}
            <div className="w-3/5">
                <MainView />
            </div>

            {/* 오른쪽 사이드바 */}
            <div className="w-1/5">
                <RightSidebar />
            </div>
        </div>
    );
};

export default MainPage;
