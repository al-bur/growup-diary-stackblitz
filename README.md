# microtaskqueue

## 동기

microtaskqueue의 동작 방식에 대해서 어떻게 동작하는 지 궁금해서 실험해보았습니다.

## 결과

promise를 활용하면, microtaskqueue에 들어가게 되어서, then chaining을 다 실행한 후 에 macrotaskqueue를 실행한다.
