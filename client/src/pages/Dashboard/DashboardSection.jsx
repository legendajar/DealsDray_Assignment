import { User2 } from 'lucide-react';

const DashboardSection = () => {
  return (
    <div className="flex-1 p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg rounded-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105">
          <div className="flex items-center mb-4">
            <User2 className="text-4xl mr-2" />
            <h2 className="text-lg font-semibold">Total Employess</h2>
          </div>
          <p className="text-3xl font-bold">1,024</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
