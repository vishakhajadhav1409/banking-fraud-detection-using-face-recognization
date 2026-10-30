export default function FraudAlerts() {

  const alerts = [
    {
      id: 1,
      type: 'Duplicate Face',
      severity: 'High'
    },
    {
      id: 2,
      type: 'Blacklist Match',
      severity: 'Critical'
    }
  ]

  return (
    <div style={{marginTop:'40px'}}>
      <h2>Fraud Alerts</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Severity</th>
          </tr>
        </thead>

        <tbody>
          {alerts.map(alert => (
            <tr key={alert.id}>
              <td>{alert.id}</td>
              <td>{alert.type}</td>
              <td>{alert.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
