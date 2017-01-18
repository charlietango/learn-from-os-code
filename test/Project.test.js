import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { Button } from "semantic-ui-react";

import Project from "../src/js/components/Project";

describe("<Project>", function() {
  it('should have props for projectName, creationDate, projectDescription, url, forks, stars and user', function() {
    const wrapper = shallow(<Project/>);
    expect(wrapper.props().projectName).to.be.defined;
    expect(wrapper.props().creationDate).to.be.defined;
    expect(wrapper.props().projectDescription).to.be.defined;
    expect(wrapper.props().url).to.be.defined;
    expect(wrapper.props().forks).to.be.defined;
    expect(wrapper.props().stars).to.be.defined;
    expect(wrapper.props().user).to.be.defined;
  });

  it('should have a button', function() {
    const wrapper = shallow(<Project/>);
    const button = wrapper.find(Button);
    expect(button).to.have.length(1);
    button.simulate('click');
  });
});
