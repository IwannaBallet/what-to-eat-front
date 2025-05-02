import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const foodItems = [
  { name: "밥", icon: "🍚" },
  { name: "소고기", icon: "🥩" },
  { name: "콩", icon: "🫛" },
  { name: "체리", icon: "🍒", days: "D-1" },
  { name: "치킨", icon: "🍗" },
  { name: "오렌지", icon: "🍊" },
  { name: "새우", icon: "🦐" },
  { name: "계란", icon: "🥚", days: "D-3" },
  { name: "고구마", icon: "🍠" },
];

const MainPage = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Grid of items */}
      <div className="grid grid-cols-3 gap-4 p-4 pt-6">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center relative bg-[#fff] rounded-xl shadow-sm border p-2 aspect-square"
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <span className="text-sm font-medium">{item.name}</span>
            {item.days && (
              <span className="absolute top-1 right-1 text-xs font-semibold text-red-500">
                {item.days}
              </span>
            )}
          </div>
        ))}
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

export default MainPage;
