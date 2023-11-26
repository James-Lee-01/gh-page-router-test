import { StyledLink, StyledLinkWrapper, StyledTitle } from "./PageStyles.js";

export default function ThirdPage() {
  return (
    <div>
      <StyledTitle>This is Third Page</StyledTitle>
      <StyledLinkWrapper>
        <StyledLink to='/'>Home Page</StyledLink>
        <StyledLink to='sub'>Subpage</StyledLink>
      </StyledLinkWrapper>
    </div>
  );
}
