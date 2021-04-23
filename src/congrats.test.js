import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import Congrats from './Congrats';

const defaultProps = { success: false };
/**
 * @function setup
 * @param {object} props 
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />);
}; 

describe('Congrats tests', () => {
    test('renders without error', () => {
        const wrapper = setup({ success: false });
        const component = findByTestAttr(wrapper, 'component-congrats');
        expect(component).toHaveLength(1);
     });    

    test('renders no text when success prop is false', () => { 
        const wrapper = setup({ success: false});
        const component = findByTestAttr(wrapper, 'component-congrats');
        expect(component.text()).toBe('');

    });

    test('renders no text when success prop is null', () => {

        const wrapper = setup({ success: null});
        const message = findByTestAttr(wrapper, 'congrats-message');
        expect(message).toHaveLength(0);
     });

    test('renders no text when success prop is undefined', () => { 
        const wrapper = setup({ success: undefined});
        const message = findByTestAttr(wrapper, 'congrats-message');
        expect(message).toHaveLength(0);
    });

    test('renders non-empty text when success prop is true', () => { 
        const wrapper = setup({ success: true });
        const message = findByTestAttr(wrapper, 'congrats-message');
        expect(message.text()).not.toHaveLength(0);});
    
    test('does not throw warning with expected props', () => {
        const expectedProps = { success: false };
        checkProps(Congrats, expectedProps);
    });
})