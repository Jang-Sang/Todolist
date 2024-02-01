import { useState } from "react";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import FormChangeBtn from "./components/FormChangeBtn";

const HomePage = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  return (
    <div>
      {isSignForm ? <SignIn /> : <SignUp setIsSignForm={setIsSignForm} />}
      <FormChangeBtn isSignForm={isSignForm} setIsSignForm={setIsSignForm} />
    </div>
  );
};
export default HomePage;
