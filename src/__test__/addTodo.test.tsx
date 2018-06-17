import * as React from 'react';
import { AddTodo } from '../components/AddTodo';
import { shallow } from 'enzyme';
import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('AddTodo test', () => {
  const handleAddTodo = jest.fn();
  const handleChangeText = jest.fn();
  const wrapper = shallow(
    <AddTodo
      handleAddTodo={handleAddTodo}
      handleChangeText={handleChangeText}
      textValue=""
    />
  );
  it('handleAddTodo test', () => {
    const subject = wrapper.find('button');
    subject.simulate('click');
    expect(handleAddTodo).toHaveBeenCalled();
  });
});
