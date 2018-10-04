import React from "react";
import Posts from '../components/posts';
import {shallow, mount, render} from 'enzyme'

describe('posts', () => {
  const wrapper = shallow(<Posts />)

  describe('submit', () => {

    it('returns all post objects as json', () => {

      // expect(response.content_type).toEqual("application/json")
    })

    it('renders all objects' () => {

    })
  })
})
