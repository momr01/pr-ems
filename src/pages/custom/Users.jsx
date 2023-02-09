import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/custom";
import routes from "../../helpers/routes";
import {
  UsersDateSelect,
  UsersDeleteButton,
  UsersFilterButton,
  UsersPaginationClassic,
  UsersSearchForm,
  UsersTable,
} from "../../partials/custom";

const Users = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  return (
    <Layout section="Management" obs="Users">
      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          {/* Page header */}
          <div className="sm:flex sm:justify-between sm:items-center mb-5">
            {/* Left: Title */}
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                Users
              </h1>
            </div>

            {/* Right: Actions */}
            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              {/* Search form */}
              <UsersSearchForm placeholder="Search by user ID…" />
              {/* Create invoice button */}
              <Link to={routes.addUser}>
                <button className="btn bg-primary hover:bg-indigo-600 text-white">
                  <svg
                    className="w-4 h-4 fill-current opacity-50 shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Create User</span>
                </button>
              </Link>
            </div>
          </div>

          {/* More actions */}
          <div className="sm:flex sm:justify-between sm:items-center mb-5">
            {/* Left side */}
            <div className="mb-4 sm:mb-0">
              <ul className="flex flex-wrap -m-1">
                <li className="m-1">
                  <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-primary text-white duration-150 ease-in-out">
                    All <span className="ml-1 text-indigo-200">67</span>
                  </button>
                </li>
                <li className="m-1">
                  <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">
                    Active <span className="ml-1 text-slate-400">14</span>
                  </button>
                </li>
                <li className="m-1">
                  <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">
                    Disabled <span className="ml-1 text-slate-400">34</span>
                  </button>
                </li>
                <li className="m-1">
                  <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">
                    Administrador{" "}
                    <span className="ml-1 text-slate-400">19</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Right side */}
            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              {/* Delete button */}
              <UsersDeleteButton selectedItems={selectedItems} />
              {/* Dropdown */}
              {/* <UsersDateSelect /> */}
              {/* Filter button */}
              <UsersFilterButton align="right" />
            </div>
          </div>

          {/* Table */}
          <UsersTable selectedItems={handleSelectedItems} />

          {/* Pagination */}
          <div className="mt-8">
            <UsersPaginationClassic />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Users;
