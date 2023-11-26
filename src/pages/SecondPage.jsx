import { StyledLink, StyledLinkWrapper, StyledTitle } from "./PageStyles.js";

export default function SecondPage() {
  return (
    <div>
      <StyledTitle>This is Second Page</StyledTitle>
      <StyledLinkWrapper>
        <StyledLink to='/'>Home Page</StyledLink>
        <StyledLink to='./sub'>Subpage</StyledLink>
      </StyledLinkWrapper>
    </div>
  );
}
