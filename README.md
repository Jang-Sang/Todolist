## TodoList 만들기

CheckList(Y/N)

1. 나는 react-query의 staleTime과 cacheTime의 역할에 대하여 인지하고 있다.
2. 나는 react-query의 mutate, mutateAsync, useQuery를 사용할 수 있다.
3. 나는 reacy-query의 getQueryData와 setQueryData를 사용할 수 있다.
4. 나는 react-query의 onMutate와 setQueryData를 활용하여 optimistic update를 할 수 있다.
5. 나는 react-hook-form을 활용하여 form의 invalidate를 할 수 있다.
6. 나는 axios의 instance를 생성하고, 인증 토큰과 리프레쉬 토큰을 통한 토큰 재발급을 할 수 있다.

Requirements

1. 가장 먼저 재사용 및 상태 최적화를 고려하여 폴더 구조를 고민하기

- 기존에 있던 수업자료는 다양한 학습 과정을 담기 위해 폴더 구조를 과장했어요!
- 정말 필요에 따라 나누어 폴더 구조를 먼저 생각 해봐야해요 :)

2. RHF와 yup을 활용하여 회원가입, 로그인을 구현해야해요 - email을 email 양식을 보여줘야해요!

- password는 특수문자가 반드시 포함되어야해요!
- 에러 메세지를 반드시 실시간으로 표시해줘야해요!
- 유효성 검사가 되지 않았다면 버튼이 disabled 되어야해요!

3. react-query를 활용하여 캐싱 되어있는 것을 꼭 확인해야해요! - staleTime 값을 0이었을 때, 아니었을 떄를 설정해서 캐싱이 뭔지 확인해야해요!

- todo가 추가되었을 때 캐싱되어 데이터가 재호출되지 않는 것을 경험 해야하고 해소해야해요!

4. todo의 완료 상태를 바꿨을 때는 반드시 낙관적 업데이트(optimistic-update)를 해봐요
5. access_token, refresh_token을 이용해서 인증 로직을 구현해야해요

### API 분석하기

----- user -----
status {401} - 인증 토큰 만료
status {403} - 리프레쉬 토큰 만료

회원가입

- email,pw
- 200: -- 축하합니다. 회원가입에 성공하셨습니다 --
- 400: -- 이미 존재하는 이메일입니다 --

로그인

- email,pw
- 200: token: access_token
- 400: -- 로그인에 실패하셨습니다 --
  -- 가입되지 않은 회원입니다 --

로그아웃

----- todo -----

todolist
title
content

추가,수정,삭제
