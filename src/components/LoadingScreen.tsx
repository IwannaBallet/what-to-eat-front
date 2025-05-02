
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // 2초 후에 페이드아웃 애니메이션 시작
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);
    
    // 2.5초 후 로그인 페이지로 이동 (0.5초는 페이드아웃 애니메이션 시간)
    const redirectTimer = setTimeout(() => {
      navigate('/login');
    }, 2500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);
  
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-white transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <h1 className="text-5xl font-bold text-[#40e0d0]">뭐먹을냉?</h1>
    </div>
  );
};

export default LoadingScreen;
