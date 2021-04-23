import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import { findByTestAttr, checkProps } from '../test/testUtils';
import Input from './input';

const defaultProps = {
    secretWord: ''
}
/**
 * setup function for Input component
 * @returns {shallowWrapper}
 */
const setup = (props) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Input {...setupProps} />);
};

test('renders without error', () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, 'component-input');
    expect(inputComponent).toHaveLength(1);
});

test('does not throw warning with expected props', () => {
    const expectedProps = { secretWord: 'false' };
    checkProps(Input, expectedProps);
});

test('throws warning with unexpected props', () => {
    const unexpectedProps = { secretWord: false };
    const propError = checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    Input.propTypes,
    unexpectedProps,
    'prop',
    Input.name
    );
    expect(propError).toBeTruthy();

});

describe('state controlled input field', () => {
    const mockSetCurrentGuess = jest.fn();
    beforeEach(() => {        
        React.useState = jest.fn(() => ['', mockSetCurrentGuess]); 
    })
    test('state updates with value of input box upon change', () =>{
        
        const wrapper = setup();
        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = { target: { value: 'train' }};
        inputBox.simulate('change', mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
     })

     test('state updates with empty value when button is clicked', () =>{
        
        const wrapper = setup();
        const submitButton = findByTestAttr(wrapper, 'submit-button');

        const mockEvent = { target: { value: '' }};
        submitButton.simulate('click', mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
     })
})
