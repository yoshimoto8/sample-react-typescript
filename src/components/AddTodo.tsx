import * as React from 'react';

interface Props {
  handleAddTodo: () => void;
}

export const AddTodo: React.StatelessComponent<Props> = props => {
  return (
    <form>
      <input type="text" />
      <button>インプット</button>
    </form>
  );
};
