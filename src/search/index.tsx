import * as React from 'react';

import SearchInput from './SearchInput';

import './styles.css';

const search = () => {
    const onSearch = (val: string) => console.warn(val);

    return (
        <section className="Search">
            <SearchInput placeholder="Search" onSearch={onSearch} />
        </section>
    );
};

export default search;
