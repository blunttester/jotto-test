import checkPropTypes from 'check-prop-types';

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper 
 * @param {string} val 
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        // eslint-disable-next-line react/forbid-foreign-prop-types
        component.propTypes,
        conformingProps,
        'prop',
        component.name
        );
        expect(propError).toBeUndefined();
}