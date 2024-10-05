import { House, LogOut, UserPlus2, UserSearchIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-black flex flex-col justify-between p-6 text-white">
      {/* Sidebar Header */}
      <div>
        <ul className="space-y-4">
          <li className="hover:bg-gray-700 p-3 rounded-md flex items-center gap-3 transition-all duration-200 cursor-pointer">
            <House className="text-xl" />
            <a href="#dashboard" className="text-lg font-medium">Dashboard</a>
          </li>
          <li className="hover:bg-gray-700 p-3 rounded-md flex items-center gap-3 transition-all duration-200 cursor-pointer">
            <UserPlus2 className="text-xl" />
            <a href="#profile" className="text-lg font-medium">Add Employee</a>
          </li>
          <li className="hover:bg-gray-700 p-3 rounded-md flex items-center gap-3 transition-all duration-200 cursor-pointer">
            <UserSearchIcon className="text-xl" />
            <a href="#settings" className="text-lg font-medium">List Employee</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar