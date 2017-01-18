import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Message from "../src/js/components/Message";

describe("<Message>", function() {
  it('should have props for content', function() {
    const wrapper = shallow(<Message/>);
    expect(wrapper.props().content).to.be.defined;
  });
});
