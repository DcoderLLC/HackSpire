import {} from "react";
import { Box } from "@mui/material";

const FAQList = () => {
  return (
    <Box>
      <section className="bg-white dark:bg-gray-900">
        <div className="container max-w-4xl px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
            Frequently asked questions
          </h1>

          <div className="mt-12 space-y-8">
            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button className="flex items-center justify-between w-full p-8">
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  How i can play for my appoinment ?
                </h1>
              </button>

              <hr className="border-gray-200 dark:border-gray-700" />

              <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab
                maxime cum laboriosam recusandae facere dolorum veniam quia
                pariatur obcaecati illo ducimus?
              </p>
            </div>

            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button className="flex items-center justify-between w-full p-8">
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  Is the cost of the appoinment covered by private health
                  insurance?
                </h1>
              </button>
            </div>

            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button className="flex items-center justify-between w-full p-8">
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  Do i need a referral?
                </h1>
              </button>
            </div>

            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button className="flex items-center justify-between w-full p-8">
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  What are your opening house?
                </h1>
              </button>
            </div>

            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button className="flex items-center justify-between w-full p-8">
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  What can i expect at my first consultation?
                </h1>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default FAQList;
