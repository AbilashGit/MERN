import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import UserForm from './UserForm';

describe('Test UserForm submission using axios', () => {
    let wrapper;
    beforeAll(() => {
        moxios.install();
    })
    
    afterAll(() => {
        moxios.uninstall();
    })
    
    it('should send correct user info on submission', (done) => {
        wrapper = mount(<UserForm/>);
        wrapper.find('input#name').simulate('change', {
            target: {value: 'Sachin'}
        });
        wrapper.find('input#location').simulate('change', {
            target: {value: 'Mumbai'}
        });
        wrapper.update();

        wrapper.find('form').simulate('submit');
        moxios.wait(() => {
            let request = moxios.requests.mostRecent();
            wrapper.update();
            expect(JSON.parse(request.config.data)).toMatchObject({"name":"Sachin","location":"Mumbai"});
            done();
            wrapper.unmount();
        })
    })
});
