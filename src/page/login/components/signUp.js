import styled from "styled-components";
import JsButton from "../../../components/jsbutton";
import JsInput from "../../../components/jsinput";
import useInputs from "../../../hook/inputs";

const SignUp = ({ setIsFormLogin }) => {
  const onSubmitSignUp = (e) => {
    e.preventDefault();
    alert("회원가입이 되었습니다. 축하합니다");
    setIsFormLogin(true);
  };

  const [{ email, password, passwordConfirm }, onChangeInputs] = useInputs({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  return (
    <J.Form onSubmit={onSubmitSignUp}>
      <JsInput
        label="이메일"
        name="email"
        type="text"
        onChange={onChangeInputs}
        placeholder="이메일을 입력해주세요"
      />
      <JsInput
        label="비밀번호"
        name="password"
        type="password"
        onChange={onChangeInputs}
        placeholder="비밀번호를 입력해주세요"
      />
      <JsInput
        label="비밀번호 확인"
        name="passwordConfirm"
        type="password"
        onChange={onChangeInputs}
        placeholder="비밀번호 확인"
      />
      <JsButton>회원가입</JsButton>
    </J.Form>
  );
};
export default SignUp;

export const Form = styled.form`
  width: 360px;
  flex-direction: column;
  padding: 32px 0 0 0;
`;

const J = {
  Form,
};
