import * as React from 'react';

interface Props {
  todos: { id: number; text: string }[];
}

export const Todo = (props: Props) => {
  const { todos } = props;
  return (
    <div>
      {todos.map((data: { id: number; text: string }, index) => {
        return (
          <div key={index}>
            <span>{data.id}</span>
            <span>{data.text}</span>
          </div>
        );
      })}
    </div>
  );
};
