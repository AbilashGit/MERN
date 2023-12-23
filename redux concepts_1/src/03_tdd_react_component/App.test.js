import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App'

import UserForm from './components/UserForm'
import UsersComponent from './components/UsersComponent'

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App/>);
})

it('displays a heading for Users', () => {
    let h1Wrapper = wrapper.find("h1");
//  console.log(toJson(h1Wrapper));
    expect(h1Wrapper.length).toEqual(1);
})

it('displays correct heading for Users', () => {
    expect(wrapper.find("h1").render().text()).toEqual("User Information");
})

it('displays UserForm', () => {
    expect(wrapper.find(UserForm).length).toEqual(1);
})

it('displays UsersComponent', () => {
    expect(wrapper.find(UsersComponent).length).toEqual(1);
})
