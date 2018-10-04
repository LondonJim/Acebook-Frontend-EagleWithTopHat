import React from "react";
import SignUp from '../components/signUp';
import {shallow, mount, render} from 'enzyme'

describe('signUp', () => {
  it('starts with empty full name', () => {
    const wrapper = shallow(<SignUp />)
    const fullNameState = wrapper.state().fullName

    expect(fullNameState).toEqual("")
  })
})
