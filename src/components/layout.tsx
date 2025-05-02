import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>

      <div className="fixed bottom-0 w-full flex justify-around p-2 border-t bg-white z-50">
        <Button
          variant="ghost"
          className={`flex-1 rounded-full ${
            currentPath === "/chat" ? "bg-[#40e0d0] text-white" : ""
          }`}
          onClick={() => navigate("/chat")}
        >
          레시피 추천
        </Button>
        <Button
          variant="ghost"
          className={`flex-1 rounded-full ${
            currentPath === "/main" ? "bg-[#40e0d0] text-white" : ""
          }`}
          onClick={() => navigate("/main")}
        >
          내 냉장고
        </Button>
        <Button
          variant="ghost"
          className={`flex-1 rounded-full ${
            currentPath === "/mypage" ? "bg-[#40e0d0] text-white" : ""
          }`}
          onClick={() => navigate("/mypage")}
        >
          마이페이지
        </Button>
      </div>
    </div>
  );
};

export default Layout;
