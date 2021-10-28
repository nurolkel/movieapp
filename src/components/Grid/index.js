import React from 'react';
import PropTypes from "prop-types";
// Styles
import { Wrapper, Content } from './Grid.styles';

const Grid = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>
            {children}
        </Content>
    </Wrapper>
);

// Don't need to check the Children Prop because it is part of React

Grid.propTypes = {
    header: PropTypes.string,
}

export default Grid;