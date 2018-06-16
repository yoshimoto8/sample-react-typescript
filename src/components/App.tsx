import * as React from 'react';
import { Todo } from './Todo';

interface Props {}
interface State {
  todos: { id: number; text: string }[];
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todos: [{ id: 1, text: 'test' }]
    };
  }

  setTodo = (value: string) => {};

  render() {
    return (
      <div>
        <h1>Todoアプリ</h1>
        <Todo todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
