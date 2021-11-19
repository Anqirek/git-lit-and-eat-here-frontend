import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
       <Head>Git Lit Eat Here</Head>
    )
}

export default Header

const Head = styled.header`
    color:black;
    font-size: 50px;
    padding-top: 30px;
    text-align: center;
    font-family: 'Roboto Slab', serif;
    position: relative;
    font-weight:bold;
 
`