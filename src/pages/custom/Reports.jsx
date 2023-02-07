import { useState } from "react";
import {
  DateSelect,
  FilterButton,
  Layout,
  OrdersTable,
} from "../../components/custom";

const Reports = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  return (
    <Layout section="Reports" obs="Overview">
      <main>
        <div className="w-full max-w-9xl mx-auto">
          {/* Page header */}
          <div className="sm:flex sm:justify-between sm:items-center mb-8">
            {/* Left: Title */}
            {/* <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                Orders ✨
              </h1>
            </div> */}

            {/* Right: Actions */}
            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              {/* Delete button */}
              {/* <DeleteButton selectedItems={selectedItems} /> */}
              {/* Dropdown */}
              <DateSelect />
              {/* Filter button */}
              <FilterButton align="right" />
              {/* Add customer button */}
              <button className="btn bg-primary hover:bg-indigo-600 text-white">
                <svg
                  className="w-4 h-4 fill-current opacity-50 shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden xs:block ml-2">Add Report</span>
              </button>
            </div>
          </div>

          <OrdersTable selectedItems={handleSelectedItems} />
        </div>
      </main>
    </Layout>
  );
};

export default Reports;
