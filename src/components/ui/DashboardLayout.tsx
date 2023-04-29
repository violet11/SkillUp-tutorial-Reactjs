import { FC, ReactNode } from 'react'
import Sidebar from './Sidebar'
import Topbar from 'components/ui/Topbar'

interface Props {
  children: ReactNode | ReactNode[]
}

// FC is Functional Component
const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <Topbar />
      </div>
      <div className="p-4">{children}</div>
    </>
  )
}

export default DashboardLayout
