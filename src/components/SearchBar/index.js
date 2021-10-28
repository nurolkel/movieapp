import React, { useState, useEffect, useRef } from 'react';
import PropTypes from "prop-types";
// Image
import searchIcon from '../../images/search-icon.svg';
// Styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {

    const [state, setState] = useState('')
    const initial = useRef(true);
    // useRef won't trigger at render
    // Instead of running the search through the state variable, we put it in the setSearchTerm for a slight pause
    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(()=> {
            setSearchTerm(state);
        },500)

        return () => clearTimeout(timer);
    },[setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input 
                    type="text"
                    placeholder="Search Movie"
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
};

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func,
}

export default SearchBar;