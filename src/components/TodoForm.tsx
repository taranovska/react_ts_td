import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      props.onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        onChange={changeHandler}
        value={title}
        type="text"
        id="title"
        placeholder="Input name"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Input name
      </label>
    </div>
  );
};
