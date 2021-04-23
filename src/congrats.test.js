import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from '../test/testUtils';
import Congrats from './congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * @function setup
 * @param {object} props 
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    return shallow(<Congrats {...props} />)
}
describe('Congrats tests', () => {
    test('renders without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-congrats');
        expect(component).toHaveLength(1);
     });    

    test('renders no text when success prop is false', () => { 
        const wrapper = setup({ success: false});
        const component = findByTestAttr(wrapper, 'component-congrats');
        expect(component.text()).toBe('');

    });

    test('renders no text when success prop is null', () => {

        const wrapper = setup({ success: true});
        const message = findByTestAttr(wrapper, 'congrats-message');
        expect(message.text()).not.toHaveLength(0);
     });

    test('renders no text when success prop is undefined', () => { });

    test('renders non-empty text when success prop is true', () => { });
})