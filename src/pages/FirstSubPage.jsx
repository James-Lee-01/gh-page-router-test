import { StyledLink, StyledLinkWrapper, StyledTitle } from "./PageStyles.js";

export default function FirstSubPage() {
  return (
    <div>
      <StyledTitle>This is First Subpage</StyledTitle>
      <StyledLinkWrapper>
        <StyledLink to='/'>Home Page</StyledLink>
        <StyledLink to='/first'>First Page</StyledLink>
      </StyledLinkWrapper>
    </div>
  );
}
