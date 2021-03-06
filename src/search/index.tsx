import * as React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchInput from './SearchInput';
import Tracks from '../tracks/index';

import { getTracks } from './actions';

import { SearchProps } from '../types/components/search';

import './styles.css';

export class Search extends React.Component<SearchProps> {
    getTracks = async (search: string) => {
        await this.props.getTracks(search);
        this.props.history.push('/search/results');
    }

    render() {
        return (
            <section className="Search">
                <SearchInput placeholder="Search" onSearch={this.getTracks} />
                <Route path="/search/results" component={Tracks} />
            </section>
        );
    }
}

const mapDispatchToProps = (dispatch: Function) => ({
    getTracks: (search: string) => dispatch(getTracks(search)),
});

export default connect((state: {}) => state, mapDispatchToProps)(Search);
