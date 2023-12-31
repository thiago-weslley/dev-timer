import styled from "styled-components";

export const HistoryContainer = styled.div`
  padding: 6rem 0 5rem 0;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.4rem;
    color: ${(props) => props.theme["gray-100"]};
  }

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export const HistoryList = styled.div`
  overflow: auto;
  margin-top: 3rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: ${(props) => props.theme["gray-600"]};
      padding: 1.2rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 10px;
        padding-left: 2.5rem;
      }

      &:last-child {
        border-top-right-radius: 10px;
        padding-right: 2.5rem;
      }
    }

    td {
      background: ${(props) => props.theme["gray-700"]};
      border-top: 4px solid ${(props) => props.theme["gray-800"]};
      padding: 1.2rem;
      line-height: 1.4;

      &:first-child {
        width: 40%;
        padding-left: 2.5rem;
      }

      &:last-child {
        padding-right: 2.5rem;
      }
    }
  }

  @media screen and (max-width: 450px) {
    font-size: 1.4rem;
  }
`;

const STATUS_COLORS = {
  red: "red-500",
  yellow: "yellow-500",
  green: "green-500",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: "";
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`;
