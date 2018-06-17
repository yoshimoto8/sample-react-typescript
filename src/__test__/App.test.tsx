import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import {
  funcAddTodo,
  funcChangeText
} from '../components/functions/handleAddTodo';
import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('App', () => {
  const wrapper = shallow(<App />);
  it('show Page test', () => {
    const subject = wrapper.find('h1');
    expect(subject.text()).toBe('Todoアプリ');
  });
});

describe('App function test', () => {
  it('funcAddTodo test', () => {
    const result = funcAddTodo([{ id: 1, text: 'test' }], 'test2');
    expect(result).toEqual({
      todos: [{ id: 1, text: 'test' }, { id: 2, text: 'test2' }],
      textValue: ''
    });
  });

  it('funcChangeText test', () => {
    const result = funcChangeText('testman');
    expect(result).toEqual({
      textValue: 'testman'
    });
  });
});
