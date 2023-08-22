import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 10rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 4rem;

  a {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme["gray-100"]};
    transition: all 0.25s ease;

    &:hover {
      color: ${(props) => props.theme["green-500"]};
    }

    &.active {
      color: ${(props) => props.theme["green-500"]};
    }

    &:focus {
      box-shadow: none;
    }
  }
`;
