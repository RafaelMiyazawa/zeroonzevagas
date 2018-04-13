import { h, Component } from 'preact';
import Header from '../components/header';
import { Link } from 'preact-router/match';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow, deep } from 'preact-render-spy';

describe('Initial Test of the Header', () => {

    test('Header renders 2 nav items', () => {
        const context = shallow(<Header />);
        expect(context.find('h1').text()).toBe('Zero Onze Vagas');
        expect(context.find(<Link />).length).toBe(2);
    });
});