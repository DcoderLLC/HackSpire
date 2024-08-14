import { Box } from "@mui/material";
import {} from "react";

const ClinicHeader = () => {
  return (
    <Box className="bg-gray-800">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            Get Your Diagnosis Results with Ease
          </h1>
          <p className="mt-6 text-gray-500 dark:text-gray-300">
            Our platform allows patients to access their diagnosis results
            securely online. Medical staff can upload results, ensuring timely
            and accurate information delivery.
          </p>
        </div>
      </div>
    </Box>
  );
};

export default ClinicHeader;
