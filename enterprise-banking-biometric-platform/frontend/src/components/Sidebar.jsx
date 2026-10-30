export default function Sidebar() {

  return (
    <div style={{
      width:'250px',
      background:'#111827',
      color:'white',
      minHeight:'100vh',
      padding:'20px'
    }}>
      <h2>Bank AI</h2>

      <ul style={{listStyle:'none', padding:0}}>
        <li>Dashboard</li>
        <li>Customer Onboarding</li>
        <li>Face Verification</li>
        <li>Group Scan</li>
        <li>Fraud Alerts</li>
        <li>Audit Logs</li>
      </ul>
    </div>
  )
}
