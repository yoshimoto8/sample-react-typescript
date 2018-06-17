import * as React from 'react';
import { Todo } from './Todo';
import { AddTodo } from './AddTodo';

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

  handleAddTodo = (text: string) => {
    const id: number = this.state.todos.length + 1;
    this.setState({ todos: [...this.state.todos, { id: id, text: text }] });
  };

  render() {
    return (
      <div>
        <h1>Todoアプリ</h1>
        <Todo todos={this.state.todos} />
        <AddTodo handleAddTodo={() => this.handleAddTodo} />
      </div>
    );
  }
}

export default App;
