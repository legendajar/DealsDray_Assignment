import logo from "../../assets/logo.png";
import { ChevronDown, ChevronUp, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      // Logic to open dropdown if closed
      if (!open) {
        setOpen(true);
      }
    } else if (event.key === "ArrowUp") {
      // Logic to close dropdown if open
      if (open) {
        setOpen(false);
      }
    }
  };
  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-[#A1AFAF] mx-auto flex justify-between items-center shadow-md px-4 sm:px-8">
      <div>
        <img
          className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto"
          src={logo}
          alt="Company Logo"
        />
      </div>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          className="text-black font-bold flex items-center gap-2 cursor-pointer focus:outline-none"
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown} // Add keydown handler
          tabIndex={0} // Make it focusable
          aria-haspopup="true"
          aria-expanded={open}
        >
          HarshSolanki{" "}
          {open ? (
            <ChevronUp />
          ) : (
            <ChevronDown className="transition-transform duration-200" />
          )}
        </DropdownMenuTrigger>

        {/* Dropdown Content */}
        {open && (
          <DropdownMenuContent
            className="bg-white border border-gray-300 shadow-lg rounded-md mt-2 w-48 py-2 focus:outline-none"
            style={{ transition: "opacity 0.2s ease, transform 0.2s ease" }}
          >
            {/* Logout Item */}
            <DropdownMenuItem
              className="flex items-center justify-between px-4 py-2 text-gray-700 transition-colors duration-200 group hover:text-red-500 cursor-pointer"
            >
              Logout <LogOut className="text-red-500" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
