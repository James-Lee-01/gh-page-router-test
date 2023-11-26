import { StyledLink, StyledLinkWrapper, StyledTitle } from "./PageStyles.js";

export default function FirstPage() {
  return (
    <div>
      <StyledTitle>This is First Page</StyledTitle>
      <StyledLinkWrapper>
        <StyledLink to='/'>Home Page</StyledLink>
        <StyledLink to='./sub'>Subpage</StyledLink>
      </StyledLinkWrapper>
    </div>
  );
}
