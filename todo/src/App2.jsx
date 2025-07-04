import { useCallback, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

// 화면단에서 데이터 생성 후 수정/삭제/입력 작성
function App2() {
  const todoList = [
    {
      id: 1,
      title: "react 기초 알아보기",
      completed: true,
    },
    {
      id: 2,
      title: "반 찬거리 사오기",
      completed: false,
    },
    {
      id: 3,
      title: "누나한테 전화",
      completed: true,
    },
    {
      id: 4,
      title: "파라솔 비치 선베드 예약하기",
      completed: false,
    },
  ];

  //화면 재 렌더링 되어도 값 기억
  const nextId = useRef(5);
  const [todos, setTodos] = useState(todoList);

  // 할 일 입력시 todoList에 추가

  const onInsert = useCallback(
    (text) => {
      const newTodo = {
        id: nextId.current,
        title: text,
        conpleted: false,
      };

      setTodos(todos.concat(newTodo));
      nextId.current += 1;
    },
    [todos]
  );

  // 할 일 제거시 todo List 제거
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id != id));
    },
    [todos]
  );

  // completed : true
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        )
      );
    },
    [todos]
  );

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
}

export default App2;
