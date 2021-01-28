import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './helpers/functions/testUtils';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  // const wrapper = shallow(<App store={store}  />).childAt(0).dive();
  const wrapper = shallow(<App store={store}  />);
  // console.log(wrapper.debug())
  return wrapper;
}

describe('App component', () => {

  let wrapper;
  beforeEach(() => {
    const initialState = {
      products: {
        data: [
          {
            id: 1,
            title: "Shirt",
            cost: 50,
            description: "Description goes here",
            image: 'https://kdkkdfkk.com'
          }
        ],
        count: 0,
        loaded: true
      }
    }
    wrapper = setUp(initialState);
  });

  it('Should render without errors', () => {
    const component = findByTestAttr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });
})
