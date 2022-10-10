# growup-diary-stackblitz

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-ts-sonu6f)

# 탐구 주제

input 요소의 initialValue는 리렌더링시 변화가 없을까?

# 배경

prolog 프로젝트에서 임시 저장 기능을 구현중인데, 아무리 content에 대한 내용을 바꿔도 계속 '' (빈 string)이 나왔다.
초기값을 ''에서 null로 바꾸어주었더니 나중에 로드된 content가 잘 들어가는 것을 보았다.
studylogEditor 컴포넌트의 구현부를 보니 content !== null 일 경우 Editor를 마운트 시켜주는 것이었다.
Editor 컴포넌트의 initialValue에 content가 들어가니깐, '' (빈 string)을 넣었을 때는 새로 로드한 값이 들어가지 않았다. 이는, 초기값이 설정되면 initialValue는 아무리 리렌더링 되더라도 안바뀌나보다 생각했다. 그래서 그것을 테스트하려고 한다.

# 실험결과

당연하게, 바뀐다. setValue를 통해서 value를 바꾸게 되면 리렌더링이 일어나고, 당연히 input 컴포넌트도 새로운 defaultValue를 활용하여 리렌더링 될 것
