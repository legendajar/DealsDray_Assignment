import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User2, PlusCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

const AddEmployeeSection = () => {
  const [selectedCourses, setSelectedCourses] = useState({
    bca: false,
    mca: false,
    bsc: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedCourses((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  return (
    <div className="flex-1 p-6 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-6">
        <div className="flex items-center mb-4">
          <User2 className="text-4xl text-gray-600 mr-2" />
          <h2 className="text-lg font-semibold">Add Employee</h2>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="w-full my-2">
              <Label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </Label>
              <Input
                type="text"
                placeholder="Enter employee name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full my-2">
              <Label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </Label>
              <Input
                type="email"
                placeholder="Enter employee email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full my-2">
              <Label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile
              </Label>
              <Input
                type="text"
                placeholder="Enter employee name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full my-2">
              <Label className="block text-sm font-medium text-gray-700 mb-1">
                Designation
              </Label>
              <Select className="w-full">
                <SelectTrigger className="flex items-center justify-between w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
                  <SelectValue placeholder="Select Designation" />
                </SelectTrigger>
                <SelectContent className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <SelectItem
                    value="light"
                    className="hover:bg-gray-100 transition duration-200 px-4 py-2 rounded-md"
                  >
                    HR
                  </SelectItem>
                  <SelectItem
                    value="dark"
                    className="hover:bg-gray-100 transition duration-200 px-4 py-2 rounded-md"
                  >
                    Manager
                  </SelectItem>
                  <SelectItem
                    value="system"
                    className="hover:bg-gray-100 transition duration-200 px-4 py-2 rounded-md"
                  >
                    Sales
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full my-2">
              <Label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </Label>
              <RadioGroup className="flex space-x-4" defaultValue="option-one">
                <div className="flex items-center">
                  <RadioGroupItem
                    value="option-one"
                    id="option-one"
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <Label
                    htmlFor="option-one"
                    className="ml-2 text-gray-700 cursor-pointer"
                  >
                    Male
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem
                    value="option-two"
                    id="option-two"
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <Label
                    htmlFor="option-two"
                    className="ml-2 text-gray-700 cursor-pointer"
                  >
                    Female
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="w-full my-2">
              <Label className="block text-sm font-medium text-gray-700 mb-1">
                Course
              </Label>
              <div className="flex flex-row gap-4">
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="bca"
                    name="bca"
                    checked={selectedCourses.bca}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <Label
                    htmlFor="bca"
                    className="ml-2 text-gray-700 cursor-pointer"
                  >
                    BCA
                  </Label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="mca"
                    name="mca"
                    checked={selectedCourses.mca}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <Label
                    htmlFor="mca"
                    className="ml-2 text-gray-700 cursor-pointer"
                  >
                    MCA
                  </Label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="bsc"
                    name="bsc"
                    checked={selectedCourses.bsc}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <Label
                    htmlFor="bsc"
                    className="ml-2 text-gray-700 cursor-pointer"
                  >
                    BSC
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full my-2">
            <Label>Profile</Label>
            <Input type="file" />
          </div>
          <Button
            type="submit"
            className="flex items-center justify-center mt-4 px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200"
          >
            <PlusCircle className="mr-2" /> Add Employee
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeSection;
