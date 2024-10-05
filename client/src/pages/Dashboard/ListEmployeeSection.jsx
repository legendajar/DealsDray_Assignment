import { useState } from 'react';
import { Edit, Trash2 } from 'lucide-react'; 
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const employeesData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', mobile: '8869074696', designation: 'Developer', course: 'BCA', createdDate: '2022-01-01' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: '8869074697', designation: 'Designer', course: 'MCA', createdDate: '2022-01-02' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', mobile: '8869074698', designation: 'Project Manager', course: 'MBA', createdDate: '2022-01-03' },
  // Add more employees as needed
];

const ListEmployeeSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter employees based on the search term
  const filteredEmployees = employeesData.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages and slice the filtered employees for current page
  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const indexOfLastEmployee = currentPage * itemsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex-1 p-6 bg-gray-100">
      <div className='flex items-center justify-between'>
        <h1 className="text-xl font-bold mb-6 text-gray-800">
          Employee List
        </h1>

        {/* Search Box */}
        <div className="w-3/4 mb-4">
          <input
            type="text"
            placeholder="Search by name, email, id, date"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded-md w-full"
          />
        </div>
      </div>
      <hr />
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S.No</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Mobile</TableHead>
              <TableHead>Designation</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Created Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentEmployees.map((employee, index) => (
              <TableRow key={employee.id}>
                <TableCell>{index + 1 + indexOfFirstEmployee}</TableCell>
                <TableCell>
                  <img src="https://via.placeholder.com/100" alt="Employee" />
                </TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>harshsolanki9898@gmail.com</TableCell>
                <TableCell>8869074696</TableCell>
                <TableCell>{employee.designation}</TableCell>
                <TableCell>{employee.course}</TableCell>
                <TableCell>05/10/2024</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    ....
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 border rounded-md bg-blue-500 text-white disabled:opacity-50"
        >
          Previous
        </button>
        <span>{`${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 border rounded-md bg-blue-500 text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ListEmployeeSection;
