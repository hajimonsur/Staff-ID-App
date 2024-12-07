
import './App.css'
import StaffCard from './components/StaffCard'
import StaffList from './components/StaffList'


function App() {
  const style = {
  textAlign: "center",
  color: ""
    
  }


  return (
    <div>
      <h1 style={style}>STAFFS</h1>
      <StaffList/>
    </div>
  )
}

export default App
