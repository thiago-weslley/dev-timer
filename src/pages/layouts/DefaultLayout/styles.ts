import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 110rem;
  display: flex;
  flex-direction: column;
  margin: 8rem auto 0 auto;
  padding: 3.5rem;
  border-radius: 10px;
  background: ${(props) => props.theme["gray-800"]};
`;
