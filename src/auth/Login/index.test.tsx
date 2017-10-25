import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { shallow } from 'enzyme';

import { Login as LoginComponent } from './';

describe('Login component', () => {
    const wrapper = (props: {} = {}) => {
        const mergedProps = Object.assign({ loggedIn: false, login: jest.fn() }, props);
        return shallow(<LoginComponent {...mergedProps} />);
    };

    it('redirects to home if user is logged in', () => {
        const redirect = wrapper({ loggedIn: true }).find(Redirect);

        expect(redirect).toHaveLength(1);
        expect(redirect.first().prop('to')).toBe('/');
    });

    it('shows a login button is user is not logged in', () => {
        const button = wrapper().find('button');

        expect(button).toHaveLength(1);
        expect(button.text()).toBe('Login');
    });

    it('logs in when clicking on the button', () => {
        const login = jest.fn();
        const button = wrapper({ login }).find('button');

        button.first().simulate('click');

        expect(login).toHaveBeenCalledTimes(1);
    });
});
