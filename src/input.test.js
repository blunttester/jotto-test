import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import Input from './input';

/**
 * setup function for Input component
 * @returns {shallowWrapper}
 */
const setup = () => {
    return shallow(<Input/>);
};

test('renders without error', () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, 'component-input');
    expect(inputComponent).toHaveLength(1);
});