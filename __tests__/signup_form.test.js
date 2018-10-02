import Signup from '../src/Signup';
import React from "react";
import { mount } from "enzyme";

test("Signup Form can take name, email, password, password confirmation", function() {
  var user = { name: "TestName", email: "ab@cd.com", password: "123456", passwordConfirmation: "123456" }

  var wrapper = mount(
    <Signup signup={user} />
  );
});