import styled from "styled-components";

export const HomeContainer = styled.main`
  padding: 6rem 0 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6rem;
  }
`;

const baseTimer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 1.2rem 0;
  width: 100%;
  border: none;
  border-radius: 8px;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.1s ease-in-out;
  box-shadow: 2px 2px 15px ${(props) => props.theme.black};
  color: ${(props) => props.theme["gray-100"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StopTimerButton = styled(baseTimer)`
  background: ${(props) => props.theme["red-500"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme["red-700"]};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme["red-700"]};
  }
`;

export const StartTimerButton = styled(baseTimer)`
  background: ${(props) => props.theme["green-500"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme["green-700"]};
  }
`;
