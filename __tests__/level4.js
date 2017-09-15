import React from 'react';
import {shallow} from 'enzyme';
import Facet from '../src/components/Facet';
import App from '../src/App';
import {countByKey} from '../src/utils';
import Shoe from '../src/components/Shoe';
import Cart from '../src/components/Cart';

const mockShoes = [
    { id: 'a', brand: 'Nike', name: 'Air Max 90', price: 2999.99 },
    { id: 'b', brand: 'Nike', name: 'Cortez', price: 2129.99 },
    { id: 'c', brand: 'Nike', name: 'Roshe', price: 333.99 },
    { id: 'd', brand: 'Reebok', name: 'Classic Brown', price: 1999.99 },
    { id: 'e', brand: 'Reebok', name: 'Classic White', price: 1999.99 },
    { id: 'f', brand: 'Adidas', name: 'Ultra Boost', price: 1500.00 }
  ];

  describe('App', () => {
    it('should contain a <Cart /> component', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(Cart).length).toEqual(1);
      });

       it('should render a <Cart />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Cart).length).toEqual(1);
    });

    it('should have an instance method called `handleDeleteFromCart`', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.instance().handleDeleteFromCart).toBeInstanceOf(Function);
      });


      it('the <Cart /> component should be passed `onCartShoeRemove` as a prop', () => {
        const wrapper = shallow(<App/>);
        const cartProps = wrapper.find(Cart).props();
        expect(Object.keys(cartProps)).toContain('onCartShoeRemove');
        expect(cartProps.onCartShoeRemove).toBeInstanceOf(Function);
      });
    



  });