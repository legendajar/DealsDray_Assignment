import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'
import DashboardSection from './DashboardSection'
import AddEmployeeSection from './AddEmployeeSection'
import ListEmployee from './ListEmployeeSection'

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-row gap-4'>
        <Sidebar />
        {/* <DashboardSection /> */}
        {/* <AddEmployeeSection /> */}
        <ListEmployee />
      </div>
    </>
  )
}

export default Dashboard