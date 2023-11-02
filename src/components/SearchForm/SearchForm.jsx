import React, { useState } from 'react';
import { Form } from './SearchForm.styled';
import PropTypes from 'prop-types';

export const SearchForm = ({ handleSetQuery }) => {
    const [searchText, setSearchText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSetQuery(searchText); // Викликати функцію пошуку, передаючи введений текст

    };

    return (
        <Form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Find your movie"
            />
            <button type="submit">Search</button>
        </Form>
    );
};
SearchForm.propTypes = {
    handleSetQuery: PropTypes.func.isRequired,
};