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

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  color: ${(props) => props.theme["gray-100"]};
  font-weight: bold;
  flex-wrap: wrap;
`;

const baseInput = styled.input`
  background: transparent;
  border: none;
  height: 2.5rem;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
  color: ${(props) => props.theme["gray-100"]};
  text-align: center;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["green-500"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const TaskInput = styled(baseInput)`
  flex: 1;
`;

export const MinutesAmountInput = styled(baseInput)`
  width: 5rem;
`;

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
`;

export const Separator = styled.div`
  overflow: hidden;
  color: ${(props) => props.theme["green-500"]};
  text-shadow: 3px 3px 10px ${(props) => props.theme.black};
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

export const PauseTimerButton = styled(baseTimer)`
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
