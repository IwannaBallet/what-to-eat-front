import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import ChatInterface from "./pages/Chat";
import Layout from "./components/layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LoadingScreen />} />
          <Route path="/home" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

          {/* Routes that use the shared layout */}
          <Route path="/" element={<Layout />}>
            <Route path="main" element={<MainPage />} />         {/* ✅ moved here */}
            <Route path="mypage" element={<MyPage />} />
            <Route path="chat" element={<ChatInterface />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
