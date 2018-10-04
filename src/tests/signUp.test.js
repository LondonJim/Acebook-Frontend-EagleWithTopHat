import React from "react";
import SignUp from '../components/signUp';
import {shallow, mount, render} from 'enzyme'

describe('signUp', () => {
  const wrapper = shallow(<SignUp />)

  // it('should render without throwing an error', () => {
  //   expect(wrapper.find('form.signup').toBe(true)
  // })

  describe('fullName', () => {
    const fullNameState = wrapper.state().fullName
    it('starts with empty full name', () => {

      expect(fullNameState).toEqual("")
    })

    it('recognises keyboard input', () => {
      wrapper.find('[name="fullName"]').simulate('click')

      expect(wrapper).toMatchSnapshot();
    })


    it('changes state on keyboard input', () => {
      wrapper.find('#fullName').simulate('change', { target: {name:'fullName', value: 'fakeemail@fakeemail.com' }})

      expect(wrapper.state('fullName')).toEqual('fakeemail@fakeemail.com')
    })
  })

})
