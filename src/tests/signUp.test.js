import React from "react";
import SignUp from '../components/signUp';
import {shallow, mount, render} from 'enzyme'

describe('signUp', () => {
  const wrapper = shallow(<SignUp />)

  describe('fullName', () => {
    const fullNameState = wrapper.state().fullName
    it('starts empty', () => {
      expect(fullNameState).toEqual("")
    })

    it('recognises keyboard input', () => {
      wrapper.find('[name="fullName"]').simulate('click')

      expect(wrapper).toMatchSnapshot();
    })

    it('changes state on keyboard input', () => {
      wrapper.find('[name="fullName"]').simulate('change', { target: {name:'fullName', value: 'Fake Name' }})

      expect(wrapper.state('fullName')).toEqual('Fake Name')
    })
  })

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

  describe('passwordConfirmation', () => {
    const passwordConfirmationState = wrapper.state().passwordConfirmation
    it('starts empty', () => {
      expect(passwordConfirmationState).toEqual("")
    })

    it('recognises keyboard input', () => {
      wrapper.find('[name="passwordConfirmation"]').simulate('click')

      expect(wrapper).toMatchSnapshot();
    })

    it('changes state on keyboard input', () => {
      wrapper.find('[name="passwordConfirmation"]').simulate('change', { target: {name:'passwordConfirmation', value: 'fakepasswordConfirmation' }})

      expect(wrapper.state('passwordConfirmation')).toEqual('fakepasswordConfirmation')
    })
  })

  describe('submit', () => {

    // it('sends form data via fetch request', () => {
    //   wrapper.find('[name="fullName"]').simulate('change', { target: {name:'fullName', value: 'Fake Name' }})
    //   wrapper.find('[name="email"]').simulate('change', { target: {name:'email', value: 'fakeemail@fakeemail.com' }})
    //   wrapper.find('[name="password"]').simulate('change', { target: {name:'password', value: 'fakepassword' }})
    //   wrapper.find('[name="passwordConfirmation"]').simulate('change', { target: {name:'passwordConfirmation', value: 'fakepasswordConfirmation' }})
    //
    //   // wrapper.find('[name="submit"]').simulate('click')
    //
    //   // expect(response).toEqual()
    //   // expect(response).toEqual()
    // })
  })

})
