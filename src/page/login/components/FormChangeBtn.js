const FormChangeBtn = ({ isSignForm, setIsSignForm }) => {
  const onSignForm = () => {
    setIsSignForm((prev) => !prev);
  };

  return (
    <div>
      {isSignForm ? (
        <button onClick={onSignForm}>회원가입</button>
      ) : (
        <button onClick={onSignForm}>로그인</button>
      )}
    </div>
  );
};

export default FormChangeBtn;
