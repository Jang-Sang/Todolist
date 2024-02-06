import styled from "styled-components";
import JsButton from "../../../components/jsbutton";
import JsInput from "../../../components/jsinput";
import useInputs from "../../../hook/inputs";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const navigate = useNavigate();

  const [{ email, password }, onChangeInputs] = useInputs({
    email: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();

  // const onSubmitSignIn = (e) => {
  //   e.preventDefault();
  //   if (email === "test@test.com" && password === "test") {
  //     return navigate("/todo");
  //   }
  //   alert("아이디와 비밀번호를 다시 한번 확인해주세요");
  // };

  return (
    <J.Form
      onSubmit={handleSubmit(async (data) => {
        await new Promise((r) => setTimeout(r, 1000));
        alert(JSON.stringify(data));
      })}
    >
      <JsInput
        label="이메일"
        type="text"
        name="email"
        onChange={onChangeInputs}
        placeholder="이메일을 입력해주세요"
        aria-invalid={
          isSubmitted ? (errors.email ? "true" : "false") : undefined
        }
        {...register("email", {
          required: "이메일은 필수 입력입니다.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "이메일 형식에 맞지 않습니다.",
          },
        })}
      />
      {errors.email && <small role="alert">{errors.email.message}</small>}
      <JsInput
        label="비밀번호"
        type="password"
        name="password"
        onChange={onChangeInputs}
        placeholder="비밀번호를 입력해주세요"
        aria-invalid={
          isSubmitted ? (errors.password ? "true" : "false") : undefined
        }
        {...register("password", {
          required: "비밀번호는 필수 입력입니다.",
          minLength: {
            value: 8,
            message: "8자리 이상 비밀번호를 사용하세요.",
          },
        })}
      />
      {errors.password && <small role="alert">{errors.password.message}</small>}
      <JsButton type="submit" disabled={isSubmitting}>
        로그인
      </JsButton>
    </J.Form>
  );
};
export default SignIn;

export const Form = styled.form`
  width: 360px;
  flex-direction: column;
  padding: 32px 0 0 0;
`;

const J = {
  Form,
};
