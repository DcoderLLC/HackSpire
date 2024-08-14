import {} from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";


const ClinicList = () => {
  return (
    <Box className="bg-gray-800">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            List and Data of Patent
          </h1>
          <p className="mt-6 text-gray-500 dark:text-gray-300">
            No patient available
          </p>
          <Link to="/">
            <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
              Add a patient
            </button>
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default ClinicList;
