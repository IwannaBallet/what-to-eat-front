import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ChevronRight, Plus } from "lucide-react";

const MyPage = () => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <h1 className="text-[#00e1c5] font-medium text-lg">My page</h1>
      </header>

      {/* Settings Section */}
      <div className="px-4 py-2 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-800">유통기한 만료 알림</span>
          <Switch />
        </div>

        <div className="flex items-center justify-between py-3">
          <span className="text-sm font-medium text-gray-800">아이디 변경하기</span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>

        <div className="flex items-center justify-between py-3">
          <span className="text-sm font-medium text-gray-800">비밀번호 변경하기</span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 right-5">
        <Button className="w-14 h-14 rounded-full bg-[#40e0d0] hover:bg-[#3bcdc0]">
          <Plus className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};

export default MyPage;
