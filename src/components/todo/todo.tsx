import { useState } from "react";
import uuid from "react-uuid";
import arrow from "./../../img/arrow.png";
import check from "./../../img/check.png";
import {
  TodoContainer,
  MakeTodo,
  Item,
  Footer,
  ButtonPageBlock,
  ButtonPage,
  Icon,
  TopBlock,
  CheckFinish,
  StatusTodoText,
} from "./style/style";

interface TodoItems {
  text: string;
  active: boolean;
  id: string;
}

const Todo = () => {
  const [value, setValue] = useState<string>("");
  const [todoItem, setTodoItem] = useState<TodoItems[]>([]);
  const [activeTodo, setActiveTodo] = useState<TodoItems[]>([]);
  const [finishTodo, setFinishTodo] = useState<TodoItems[]>([]);
  const [sortBy, setSortBy] = useState<string>("all");
  const [statusTodo, setStatusTodo] = useState<string>("status");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const makeItem = (event: React.KeyboardEvent<HTMLElement>) => {
    
    if (event.key === "Enter"&&value.trim()!=='') {
      setTodoItem((prev:TodoItems[]) => [
        ...prev,
        { text: value, active: true, id: uuid() },
      ]);
      setValue("");
    }
  };

  const finishItem = (itemId: string) => {
    setTodoItem((prev:TodoItems[]) => {
      return prev.map((prevItem:TodoItems) =>
        prevItem.id === itemId
          ? { ...prevItem, active: !prevItem.active }
          : prevItem
      );
    });
  };

  const filterAll = () => {
    setSortBy("all");
  };
  const filterActive = () => {
    setActiveTodo(todoItem.filter((i:TodoItems) => i.active === true));
    setSortBy("active");
  };
  const filterCompleted = () => {
    setFinishTodo(todoItem.filter((i:TodoItems) => i.active === false));
    setSortBy("finish");
  };
  const counterTodo = () => {
    if (sortBy === "active") {
      return activeTodo.length;
    } else if (sortBy === "finish") {
      return finishTodo.length;
    }
    return todoItem.length;
  };
  const filterTodos = () => {
    if (sortBy === "active") {
      return activeTodo;
    } else if (sortBy === "finish") {
      return finishTodo;
    }
    return todoItem;
  };
  const StatusTodo = (item: TodoItems) => {
    if (todoItem.find((i: TodoItems) => i.id === item.id && i.active === true)) {
      setStatusTodo("Active");
    }
    if (todoItem.find((i: TodoItems) => i.id === item.id && i.active === false)) {
      setStatusTodo("Completed");
    }
  };
  return (
    <TodoContainer>
      <TopBlock>
        <Icon src={arrow} />
        <MakeTodo
          data-testid='todoInput'
          maxLength={32}
          type="text"
          placeholder="What needs to be done?"
          value={value}
          onChange={onChange}
          onKeyDown={makeItem}
        />
      </TopBlock>
      {filterTodos().map((item:TodoItems, index) => (
        <Item
          key={index}
          onClick={() => finishItem(item.id)}
          onMouseMove={() => StatusTodo(item)}
          style={{
            textDecoration: todoItem.find(
              (i: any) => i.id === item.id && i.active === true
            )
              ? "inherit"
              : "line-through",
          }}
        >
          {todoItem.find((i: any) => i.id === item.id && i.active === true) ? (
            <CheckFinish />
          ) : (
            <Icon src={check} />
          )}

          {item.text}
        </Item>
      ))}
      <Footer>
        <span>{counterTodo()} items left</span>
        <ButtonPageBlock>
          <ButtonPage
            onClick={filterAll}
            style={{ border: sortBy === "all" ? "1px solid #b3b1b3" : "" }}
          >
            All
          </ButtonPage>
          <ButtonPage
            onClick={filterActive}
            style={{ border: sortBy === "active" ? "1px solid #b3b1b3" : "" }}
          >
            Active
          </ButtonPage>
          <ButtonPage
            onClick={filterCompleted}
            style={{ border: sortBy === "finish" ? "1px solid #b3b1b3" : "" }}
          >
            Completed
          </ButtonPage>
        </ButtonPageBlock>
        <StatusTodoText>{statusTodo}</StatusTodoText>
      </Footer>
    </TodoContainer>
  );
};

export default Todo;
