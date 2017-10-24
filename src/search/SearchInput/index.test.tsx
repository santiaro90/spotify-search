import * as React from 'react';
import { shallow } from 'enzyme';

import SearchInput, { ENTER_KEY } from './';

describe('Search input component', () => {
    it('sends its value back when pressing enter', () => {
        const onSearch = jest.fn();
        const keyEvent = {
            keyCode: ENTER_KEY,
            currentTarget: { value: 'search' }
        };

        const wrapper = shallow(<SearchInput onSearch={onSearch} />);

        wrapper.find('input').simulate('keydown', keyEvent);

        expect(onSearch).toHaveBeenCalledTimes(1);
        expect(onSearch).toHaveBeenCalledWith('search');
    });

    it('doesn\'t send any values if other keys are pressed', () => {
        const onSearch = jest.fn();
        const someEvent = { keyCode: 12 };
        const anotherEvent = { keyCode: 25 };

        const wrapper = shallow(<SearchInput onSearch={onSearch} />);

        wrapper.find('input').simulate('keydown', someEvent);
        wrapper.find('input').simulate('keydown', anotherEvent);

        expect(onSearch).not.toHaveBeenCalled();
    });
});
