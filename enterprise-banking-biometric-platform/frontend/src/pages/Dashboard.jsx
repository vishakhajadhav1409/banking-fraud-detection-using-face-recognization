export default function Dashboard() {

  return (
    <div>
      <h1>Banking Fraud Dashboard</h1>

      <div style={{
        display:'flex',
        gap:'20px',
        marginTop:'20px'
      }}>

        <div style={{
          padding:'20px',
          border:'1px solid #ccc',
          borderRadius:'10px'
        }}>
          <h3>Total Customers</h3>
          <h2>12,440</h2>
        </div>

        <div style={{
          padding:'20px',
          border:'1px solid #ccc',
          borderRadius:'10px'
        }}>
          <h3>Fraud Alerts</h3>
          <h2>42</h2>
        </div>

        <div style={{
          padding:'20px',
          border:'1px solid #ccc',
          borderRadius:'10px'
        }}>
          <h3>Blacklisted Matches</h3>
          <h2>5</h2>
        </div>

      </div>
    </div>
  )
}
