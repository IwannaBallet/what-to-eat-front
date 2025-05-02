
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [nickname, setNickname] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the registration logic
    console.log('Registration data:', { nickname, userId, password });
    // Redirect to login page after successful registration
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 animate-fade-in">
      <h1 className="text-5xl font-bold text-[#40e0d0] mb-10">뭐먹을냉?</h1>
      
      <form onSubmit={handleRegister} className="w-full max-w-sm space-y-4">
        <div>
          <Input 
            placeholder="닉네임" 
            className="border border-gray-300 rounded-md" 
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </div>
        
        <div>
          <Input 
            placeholder="아이디" 
            className="border border-gray-300 rounded-md" 
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        
        <div>
          <Input 
            type="password" 
            placeholder="비밀번호" 
            className="border border-gray-300 rounded-md" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <Button 
          type="submit"
          className="w-full bg-[#40FBD0] hover:bg-[#3bcdc0] text-white font-medium py-2"
        >
          가입하기
        </Button>
      </form>
    </div>
  );
};

export default Registration;
