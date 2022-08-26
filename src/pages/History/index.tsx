import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const tasks = [1, 2, 3]

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task}>
                <td>Tarefa 1</td>
                <td>20 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="success">Concluído</Status>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
