import {} from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box>
      <footer className="bg-gray-800">
        <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
          <Link
            to=""
            className="text-lg font-semibold  transition-colors duration-300 text-gray-200 hover:text-blue-500 dark:"
          >
            Innovative MedTech
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <a
              href="#"
              className="text-sm  transition-colors duration-300 text-gray-200 hover:text-blue-500 "
            >
              Overview
            </a>

            <a
              href="#"
              className="text-sm  transition-colors duration-300 text-gray-200 hover:text-blue-500 "
            >
              Features
            </a>

            <a
              href="#"
              className="text-sm  transition-colors duration-300 text-gray-200 hover:text-blue-500 "
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm  transition-colors duration-300 text-gray-200 hover:text-blue-500 dark:"
            >
              Careers
            </a>

            <a
              href="#"
              className="text-sm  transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:"
            >
              Help
            </a>

            <a
              href="#"
              className="text-sm  transition-colors duration-300 text-gray-200 hover:text-blue-500 "
            >
              Privacy
            </a>
          </div>

          <p className="mt-6 text-sm  lg:mt-0 text-gray-400">
            © Copyright 2023 Meraki UI.{" "}
          </p>
        </div>
      </footer>
    </Box>
  );
};

export default Footer;
