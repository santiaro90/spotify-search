import * as React from 'react';
import { connect } from 'react-redux';

import SearchInput from './SearchInput';

import { getTracks } from './actions';

import './styles.css';

type SearchProps = {
    onSearch: (search: string) => void;
    getTracks: (search: string) => void;
};

class Search extends React.Component<SearchProps> {
    render() {
        return (
            <section className="Search">
                <SearchInput
                    placeholder="Search"
                    onSearch={(s: string) => this.props.getTracks(s)}
                />
            </section>
        );
    }
}

const mapDispatchToProps = (dispatch: Function) => ({
    getTracks: (search: string) => dispatch(getTracks(search)),
});

export default connect((state: {}) => state, mapDispatchToProps)(Search);
