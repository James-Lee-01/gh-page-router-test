import { StyledLink, StyledLinkWrapper, StyledTitle } from "./PageStyles.js";

export default function ThirdSubPage() {
  return (
    <div>
      <StyledTitle>This is Third Subpage</StyledTitle>
      <StyledLinkWrapper>
        <StyledLink to='/'>Home Page</StyledLink>
        <StyledLink to='/third'>Third Page</StyledLink>
      </StyledLinkWrapper>
    </div>
  );
}
