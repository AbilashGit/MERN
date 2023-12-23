import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import App from './App'

let mockResponse = {
    status: 200,
    response: [
            {
                "id": 1,
                "name": "Raman",
                "location": "Bangalore"
            },
            {
                "id": 2,
                "name": "Rajan",
                "location": "Pune"
            },
            {
                "id": 3,
                "name": "Vinay Kumar",
                "location": "Kochi"
            }
    ]
};

describe('App Component Mount Test ', () => {
    let mountWrapper;

    beforeAll(() => {
        moxios.install();
    })
    
    afterAll(() => {
        moxios.uninstall();
    })
    
    it('renders correctly', (done) => {
        moxios.stubRequest('http://localhost:4000/users', mockResponse);
        mountWrapper = mount(<App/>);
        moxios.wait(() => {
            mountWrapper.update();
            expect(mountWrapper).toMatchSnapshot();
            done();
            mountWrapper.unmount();
        })
    });
})
