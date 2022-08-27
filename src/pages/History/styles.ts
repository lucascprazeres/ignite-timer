import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;

  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.fonts.primary};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme.tableHead};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme.fonts.primary};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme.bodyLight};
      border-top: 4px solid ${(props) => props.theme.body};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        padding-left: 1.5rem;
        width: 50%;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

interface StatusProps {
  statusColor: 'primary' | 'warning' | 'danger'
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 4px;
    background: ${(props) => props.theme[props.statusColor]};
  }
`
