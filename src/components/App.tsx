import * as React from 'react';
import { Todo } from './Todo';
import { AddTodo } from './AddTodo';
import { funcAddTodo, funcChangeText } from './functions/handleAddTodo';

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
    this.setState(funcAddTodo(this.state.todos, this.state.textValue));
  };

  handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(funcChangeText(e.target.value));
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
