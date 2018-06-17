import * as React from 'react';

interface Props {
  handleAddTodo: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textValue: string;
}

export const AddTodo: React.StatelessComponent<Props> = props => {
  return (
    <form>
      <input
        type="text"
        value={props.textValue}
        onChange={e => props.handleChangeText(e)}
      />
      <button onClick={e => props.handleAddTodo(e)}>インプット</button>
    </form>
  );
};
