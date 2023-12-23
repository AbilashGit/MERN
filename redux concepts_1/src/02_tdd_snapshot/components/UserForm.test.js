import React from 'react';
import {shallow} from 'enzyme';
import UserForm from './UserForm'

describe('UserForm', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<UserForm/>);
    });

    test('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
