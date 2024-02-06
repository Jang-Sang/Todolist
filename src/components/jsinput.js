import { styled } from "styled-components";

const JsInput = ({ label, error, ...inputProps }) => {
  return (
    <>
      <S.InputBox>
        <label>{label}</label>
        <input {...inputProps} />
      </S.InputBox>
      {error && <p>{error}</p>}
    </>
  );
};
export default JsInput;

export const InputBox = styled.div``;

const S = {
  InputBox,
};
