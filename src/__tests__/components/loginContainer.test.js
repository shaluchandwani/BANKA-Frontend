import React from 'react';
import { shallow, mount } from '../../../config/enzymeConfig';

import LoginComponet from '../../components/Login';
import { Login } from '../../containers/loginView';
import FormContainer from '../../components/common/FormContainer';
import Input from '../../components/common/input';

const props = {
  errors: 'Errors here',
  userCredentials: { errors: 'error' },
  postDataThunk: jest.fn(),
  history: {},
};
let wrapper;

describe('<Login />', () => {
  beforeAll(() => {
    wrapper = shallow(<Login {...props}/>);
  });
  it('Should render <LoginComponet />  component', () => {
    expect(wrapper.find(LoginComponet)).toHaveLength(1);
    expect(wrapper.find(Error)).toHaveLength(0);
  });

  it('Should give initial state', () => {
    expect(wrapper.state()).toBeDefined();
  });
});

describe('Input tests...', () => {
  beforeAll(() => {
    wrapper = shallow(<Login {...props}/>);
  });
  it('should type in the Email', () => {
    wrapper = mount(<Login {...props}/>);
    const form = wrapper.find(LoginComponet).find(FormContainer).find(Input);
    const Email = form.find('input[name="email"]');
    Email.simulate('change', {
      target: { value: 'joseph@gmail.com', name: 'email' },
    });
    expect(wrapper.state()).toEqual({ user: { email: 'joseph@gmail.com', password: '' } });
  });

  it('should type in the Paaword', () => {
    wrapper = mount(<Login {...props}/>);
    const form = wrapper.find(LoginComponet).find(FormContainer).find(Input);
    const password = form.find('input[name="password"]');
    expect(password).toHaveLength(1);
    password.simulate('change', {
      target: { value: 'Example@1', name: 'password' },
    });
    expect(wrapper.state()).toEqual({ user: { email: '', password: 'Example@1' } });
  });

  describe('submit button test...', () => {
    let instance;
    let submitButton;
    beforeAll(() => {
      instance = wrapper.instance();
      submitButton = wrapper.find('button[type="submit"]');
      submitButton.simulate('click');
    });
    it('should make a request to the server', () => {
      expect(submitButton).toHaveLength(1);
      wrapper.update();
      const event = {
        preventDefault: jest.fn(),
      };
      instance.handleSubmit(event);
    });
  });
});
