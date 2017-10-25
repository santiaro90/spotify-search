import { History } from 'history';

export type SearchInputProps = {
    onSearch: Function;
    placeholder?: string;
};

export type SearchProps = {
    history: History;
    onSearch: (search: string) => void;
    getTracks: (search: string) => void;
};
