import styled from "styled-components"
import { Link } from "react-router-dom"


export const StyledTitle = styled.h1`
text-align: center;
`

export const StyledLink = styled(Link)`
color: inherit;
Font-size: 1.5rem;
`;

export const StyledLinkWrapper = styled.div`
display: flex;
justify-content: space-around;
gap: 3rem;
`