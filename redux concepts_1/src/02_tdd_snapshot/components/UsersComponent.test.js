import React from 'react';
import {shallow} from 'enzyme';
import UsersComponent from './UsersComponent'

describe('When no props is passed to UsersComponent ', () => {
    it('renders correctly', () => {
        let wrapper = shallow(<UsersComponent/>);
        expect(wrapper).toMatchSnapshot();
    });
});

describe('When users array is passed to UsersComponent', () => {
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

    it('renders correctly when passed the  props', () => {
        expect(wrapper).toMatchSnapshot();
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
        expect(wrapper).toMatchSnapshot();
    });

});
