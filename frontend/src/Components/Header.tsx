import React from 'react'
import styled from 'styled-components'


const Header: React.FC = () => {
    return (
        <Title>
            <h1>Events</h1>
        </Title>
    )
}

const Title = styled.header`
    padding: 0 15px;
`

export default Header