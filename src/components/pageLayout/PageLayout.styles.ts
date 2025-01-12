import media from "@/styles/media";
import { styled } from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadows.main};
`;

export const NavBar = styled.nav`
  width: 15rem;
  height: 100vh;
  background: ${({ theme }) => theme.colors.gray100};
  border-radius: 24px;

  ${media.mobile`
    display: none;
  `}
`;

export const ChildrenLayout = styled.div`
  min-height: 100vh;
  margin-left: 10rem;
  padding: 0 1.8rem;

  ${media.mobile`
    margin: 8rem 0 0 0;
  `}
`;
