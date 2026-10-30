import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import UploadFace from './pages/UploadFace'
import FraudAlerts from './pages/FraudAlerts'

export default function App() {
  return (
    <div style={{display:'flex', fontFamily:'Arial'}}>
      <Sidebar />

      <div style={{padding:'20px', width:'100%'}}>
        <Dashboard />
        <UploadFace />
        <FraudAlerts />
      </div>
    </div>
  )
}
