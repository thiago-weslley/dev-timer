import { NavLink } from "react-router-dom";
import { HeaderContainer, Nav } from "./styles";
import { Timer, Scroll } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink to="/" title="Timer">
          <Timer size={36} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={36} />
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
}
