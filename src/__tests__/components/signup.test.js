/* eslint-disable import/no-named-as-default */
import React from 'react';
import { expect } from 'chai';
import { shallow } from '../../../config/enzymeConfig';
import SignupComponet from '../../components/pages/Signup';
import FormContainer from '../../components/common/FormContainer';
import TextInput from '../../components/common/TextInput';

describe('<SignupComponet />', () => {
  it('Should render three <TextInput /> elements', () => {
    const wrapper = shallow(<SignupComponet />);
    expect(
      wrapper.find(FormContainer).shallow().find(TextInput),
    ).to.have.lengthOf(0);
  });
});

describe('<SignupComponet />', () => {
  it('Should contain <input/> element inside <TextInput/>', () => {
    const wrapper = shallow(<TextInput />);
    expect(wrapper.contains(<input />)).to.equal(true);
  });
});
