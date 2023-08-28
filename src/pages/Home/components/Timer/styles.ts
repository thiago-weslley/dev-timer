import styled from "styled-components";

export const TimerContainer = styled.div`
  user-select: none;
  display: flex;
  gap: 1.6rem;
  font-family: "Roboto Mono", monospace;
  font-size: 15rem;
  color: ${(props) => props.theme["gray-100"]};

  span {
    background: ${(props) => props.theme["gray-700"]};
    padding: 0rem 1.5rem;
    border-radius: 8px;
    text-shadow: 3px 3px 8px ${(props) => props.theme.black};
    box-shadow: 2px 2px 15px ${(props) => props.theme.black};
  }

  @media screen and (max-width: 700px) {
    font-size: 9rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 6rem;
    gap: 1rem;
  }

  @media screen and (max-width: 290px) {
    font-size: 4rem;
    gap: 0.5rem;
  }
`;

export const Separator = styled.div`
  overflow: hidden;
  color: ${(props) => props.theme["green-500"]};
  text-shadow: 3px 3px 10px ${(props) => props.theme.black};
`;
