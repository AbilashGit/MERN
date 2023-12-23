import React from 'react';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App'

describe('App', () => {
    let wrapper;
/*    
    beforeEach(() => {
        wrapper = mount(<App/>);
    });
*/
    
    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    test('render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

/*    
    afterEach(() => {
        wrapper = unmount(<App/>);
    });
*/    
});
