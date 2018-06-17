export const funcAddTodo = (
  todos: { id: number; text: string }[],
  textValue: string
) => {
  const id: number = todos.length + 1;
  return {
    todos: [...todos, { id: id, text: textValue }],
    textValue: ''
  };
};

export const funcChangeText = (text: string) => {
  return { textValue: text };
};
