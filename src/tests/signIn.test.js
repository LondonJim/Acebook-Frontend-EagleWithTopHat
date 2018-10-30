import React from "react";
import SignIn from '../components/signIn';
import {shallow, mount, render} from 'enzyme'

describe('signIn', () => {
  const wrapper = shallow(<SignIn />)

  describe('email', () => {
    const emailState = wrapper.state().email
    it('starts empty', () => {
      expect(emailState).toEqual("")
    })

    it('recognises keyboard input', () => {
      wrapper.find('[name="email"]').simulate('click')

      expect(wrapper).toMatchSnapshot();
    })

    it('changes state on keyboard input', () => {
      wrapper.find('[name="email"]').simulate('change', { target: {name:'email', value: 'fakeemail@fakeemail.com' }})

      expect(wrapper.state('email')).toEqual('fakeemail@fakeemail.com')
    })
  })

  describe('password', () => {
    const passwordState = wrapper.state().password
    it('starts empty', () => {
      expect(passwordState).toEqual("")
    })

    it('recognises keyboard input', () => {
      wrapper.find('[name="password"]').simulate('click')

      expect(wrapper).toMatchSnapshot();
    })

    it('changes state on keyboard input', () => {
      wrapper.find('[name="password"]').simulate('change', { target: {name:'password', value: 'fakepassword' }})

      expect(wrapper.state('password')).toEqual('fakepassword')
    })
  })

  describe('submit', () => {

    it('returns all post objects as json', () => {

      // expect(response.content_type).toEqual("application/json")
    })
  })
})
