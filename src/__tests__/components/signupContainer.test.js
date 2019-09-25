import React from 'react';
import { shallow } from '../../../config/enzymeConfig';
import SignupComponent from '../../components/pages/Signup';
import { Signup } from '../../containers/signupContainer';

const props = { errors: 'Errors here', signupSuccess: { errors: 'error' }, postDataThunk: jest.fn() };
let wrapper;

describe('<Signup />', () => {
  beforeAll(() => {
    wrapper = shallow(<Signup {...props}/>);
  });
  it('Should render <SignupComponent />  component', () => {
    expect(wrapper.find(SignupComponent)).toHaveLength(1);
    expect(wrapper.find(Error)).toHaveLength(0);
  });

  it('Should give initial state', () => {
    expect(wrapper.state()).toBeDefined();
  });
});
describe('Input tests...', () => {
  beforeAll(() => {
    wrapper = shallow(<Signup {...props}/>);
  });
});
