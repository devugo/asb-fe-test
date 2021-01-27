import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../helpers/functions/testUtils';
import Button from './index';

describe('Button Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw warning', () => {
            const expectedProps = {
                text: 'Click',
                clickAction: () => {},
                styles: {
                    color: 'white'
                }
            };

            const propsError = checkProps(Button, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Component Renders', () => {

        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                text: 'Example Button Text',
                clickAction: mockFunc
            }
            wrapper = shallow(<Button {...props} />);
        })

        it('Should render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        })

        it('Should emit callback on click event', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);

        })
    });

    describe('Should NOT render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                clickAction: () => {}
            }

            wrapper = shallow(<Button {...props} />);

        })

        it('Component is not rendered', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(0);
        })
    });
})