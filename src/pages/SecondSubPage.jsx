import { StyledLink, StyledLinkWrapper, StyledTitle } from "./PageStyles.js";

export default function SecondSubPage() {
  return (
    <div>
      <StyledTitle>This is Second Subpage</StyledTitle>
      <StyledLinkWrapper>
        <StyledLink to='/'>Home Page</StyledLink>
        <StyledLink to='/second'>Second Page</StyledLink>
      </StyledLinkWrapper>
    </div>
  );
}
