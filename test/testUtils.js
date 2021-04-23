/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper 
 * @param {string} val 
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
wrapper.find('[data-test="${val}"]');
}