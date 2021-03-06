import * as React from 'react';

import { SearchInputProps } from '../../types/components/search';

import './styles.css';

export const ENTER_KEY = 13;

const SearchInput: React.StatelessComponent<SearchInputProps> = ({ onSearch, placeholder }) => {
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === ENTER_KEY) {
            const val = e.currentTarget.value;
            onSearch(val);
        }
    };

    return (
        <div className="Search-input input-field">
            <input className="Search-input" placeholder={placeholder} onKeyDown={onKeyDown} />
        </div>
    );
};

SearchInput.defaultProps = {
    placeholder: '',
};

export default SearchInput;
