import * as React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { mount } from 'enzyme';

import { ProtectedRoute } from './';

describe('ProtectedRoute component', () => {
    class DumbComponent extends React.Component {
        render() {
            return <div>Test</div>;
        }
    }

    const LoginComponent = () => <div>Login</div>;

    it('redirects to login if user is not logged in', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <Switch>
                    <Route path="/login" component={LoginComponent} />
                    <ProtectedRoute loggedIn={false} path="/" component={DumbComponent} />
                </Switch>
            </MemoryRouter>
        );

        const rendered = wrapper.find('div');

        expect(rendered).toHaveLength(1);
        expect(rendered.first().text()).toBe('Login');
    });

    it('renders the component if the user is logged in', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <Switch>
                    <Route path="/login" component={LoginComponent} />
                    <ProtectedRoute loggedIn={true} path="/" component={DumbComponent} />
                </Switch>
            </MemoryRouter>
        );

        const rendered = wrapper.find('div');

        expect(rendered).toHaveLength(1);
        expect(rendered.first().text()).toBe('Test');
    });
});
