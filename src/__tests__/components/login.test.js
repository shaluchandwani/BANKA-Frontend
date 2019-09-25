import React from 'react';
import { expect } from 'chai';
import { shallow } from '../../../config/enzymeConfig';
import LoginComponet from '../../components/Login';
import FormContainer from '../../components/common/FormContainer';
import Input from '../../components/common/input';


describe('<LoginComponet />', () => {
  it('Should render two <Input /> elements', () => {
    const wrapper = shallow(<LoginComponet />);
    expect(wrapper.find(FormContainer).shallow().find(Input)).to.have.lengthOf(2);
  });
});

describe('<Input />', () => {
  it('Should contain input', () => {
    const wrapper = shallow(<Input/>);
    expect(wrapper.contains(<input/>)).to.equal(true);
  });
});
