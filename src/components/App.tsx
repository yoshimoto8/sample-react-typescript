import * as React from 'react';
import { Todo } from './Todo';
import { AddTodo } from './AddTodo';

interface Props {}
interface State {
  todos: { id: number; text: string }[];
  textValue: string;
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todos: [{ id: 1, text: 'test' }],
      textValue: ''
    };
  }

  handleAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id: number = this.state.todos.length + 1;
    this.setState({
      todos: [...this.state.todos, { id: id, text: this.state.textValue }],
      textValue: ''
    });
  };

  handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ textValue: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Todoアプリ</h1>
        <Todo todos={this.state.todos} />
        <AddTodo
          handleAddTodo={e => this.handleAddTodo(e)}
          textValue={this.state.textValue}
          handleChangeText={e => this.handleChangeText(e)}
        />
      </div>
    );
  }
}

export default App;
