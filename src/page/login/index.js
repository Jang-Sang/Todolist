import { useState } from "react";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import FormChangeBtn from "./components/FormChangeBtn";

const HomePage = () => {
  // useState를 사용해서 로그인 폼을 확인, 기본 true
  const [isSignForm, setIsSignForm] = useState(true);
  return (
    <div>
      {isSignForm ? <SignIn /> : <SignUp setIsSignForm={setIsSignForm} />}
      <FormChangeBtn isSignForm={isSignForm} setIsSignForm={setIsSignForm} />
    </div>
  );
};
export default HomePage;
