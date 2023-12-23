import React from 'react';
import { mount, shallow } from 'enzyme';
import UserForm from './UserForm';

describe('Test UserForm using Shallow rendering', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<UserForm/>);
    });

    it('has 2 text input elements', () => {
        expect(wrapper.find('input').length).toEqual(2);
    })

    it('has a single button', () => {
        expect(wrapper.find('button').length).toEqual(1);
    })

    it('should allow to type in name input field', () => {
        wrapper.find('input#name').simulate('change', {
            target: {value: 'Sachin'}
        });
        wrapper.update();
        expect(wrapper.find('input#name').prop('value')).toEqual('Sachin');
    })

    it('should allow to type in location input field', () => {
        wrapper.find('input#location').simulate('change', {
            target: {value: 'Mumbai'}
        });
        wrapper.update();
        expect(wrapper.find('input#location').prop('value')).toEqual('Mumbai');
    })
});

describe('Test UserForm using Full DOM rendering', () => {
    let mountWrapper;

    beforeEach(() => {
        mountWrapper = mount(<UserForm/>);
    });

    afterEach(() => {
        mountWrapper.unmount();
    })

    it('has 2 text input elements', () => {
        expect(mountWrapper.find('input').length).toEqual(2);
    })

    it('has a single button', () => {
        expect(mountWrapper.find('button').length).toEqual(1);
    })
 });
