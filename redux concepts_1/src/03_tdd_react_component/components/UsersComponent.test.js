import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import UsersComponent from './UsersComponent'

describe('When users array is passed as props to UsersComponent', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            users: [
                {
                    "name": "Rahul",
                    "location": "Nagpur"
                },
                {
                    "name": "Manish",
                    "location": "Delhi"
                }
            ]
        }
        wrapper = shallow(<UsersComponent {...props}/>);
    });

    it('displays 2 users in the list', () => {
        let liWrapper = wrapper.find('li');
//        console.log(toJson(liWrapper));
        expect(liWrapper.length).toEqual(2);
    });

    it('displays the first user name correctly in the list', () => {
        let firstUser = wrapper.find('li').at(0);
      console.log(toJson(firstUser));
        expect(firstUser.render().text()).toContain('Rahul');  // Rahul,Nagpur
    });

    it('displays the first user location correctly in the list', () => {
        let firstUser = wrapper.find('li').first();
        expect(firstUser.render().text()).toContain('Nagpur');
    });

    it('displays the second user name correctly in the list', () => {
        let secondUser = wrapper.find('li').at(1);
        expect(secondUser.render().text()).toContain('Manish');
    });

    it('displays the second user location correctly in the list', () => {
        let secondUser = wrapper.find('li').at(1);
        expect(secondUser.render().text()).toContain('Delhi');
    });
});

describe('When users array passed to UsersComponent is null', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            users: null
        }
        wrapper = shallow(<UsersComponent {...props}/>);
    });

    it('should not crash', () => {
        let li = wrapper.find('li');
        expect(li.length).toEqual(0);
    });

});