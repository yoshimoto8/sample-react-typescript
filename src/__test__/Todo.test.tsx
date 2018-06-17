import * as React from 'react';
import { Todo } from '../components/Todo';
import { shallow } from 'enzyme';
import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('Todo test', () => {
  const demoData = [{ id: 1, text: 'test' }];
  const wrapper = shallow(<Todo todos={demoData} />);
  it('todo id test', () => {
    const subject = wrapper.find('.todo-id');
    expect(subject.text()).toBe('1');
  });
  it('todo text test', () => {
    const subject = wrapper.find('.todo-text');
    expect(subject.text()).toBe('test');
  });
});
