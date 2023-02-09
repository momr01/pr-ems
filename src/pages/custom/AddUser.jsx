import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/custom";
import routes from "../../helpers/routes";

const AddUser = () => {
  // "email",
  // "id_role"
  // "profile_image"

  return (
    <Layout section="Add User" obs="Management">
      <section>
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
            Create new user
          </h1>
          <p>Please complete each input to create a new user</p>
        </header>

        <div>
          <form>
            <div className="space-y-4">
              <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="card-country"
                  >
                    Username <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="card-name"
                    className="form-input w-full h-12"
                    type="text"
                  />
                </div>
                <div className="flex-1">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="card-country"
                  >
                    Password <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="card-surname"
                    className="form-input w-full h-12"
                    type="password"
                  />
                </div>
              </div>
              {/* 2nd row */}
              <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="card-country"
                  >
                    First name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="card-address"
                    className="form-input w-full h-12"
                    type="text"
                  />
                </div>
                <div className="flex-1">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="card-country"
                  >
                    Last name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="card-city"
                    className="form-input w-full h-12"
                    type="text"
                  />
                </div>
              </div>
              {/* 3rd row */}
              <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="card-country"
                  >
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="card-state"
                    className="form-input w-full h-12"
                    type="text"
                  />
                </div>
                <div className="flex-1">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="card-country"
                  >
                    ID role <span className="text-rose-500">*</span>
                  </label>
                  <select id="card-country" className="form-select w-full h-12">
                    <option>Administrador</option>
                    <option>Empleado de mantenimiento</option>
                    <option>Líder de mantenimiento</option>
                  </select>
                </div>
              </div>

              <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-2">
                  <label
                    //className="block text-sm font-medium mb-1"
                    className="text-sm font-medium mb-1 flex items-center cursor-pointer hover:text-primary"
                    htmlFor="file"
                  >
                    Profile image{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-upload"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#06184a"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                      <polyline points="7 9 12 4 17 9" />
                      <line x1="12" y1="4" x2="12" y2="16" />
                    </svg>
                  </label>
                  <input
                    id="file"
                    className="form-input w-[640pxs] h-12"
                    type="file"
                    accept="image/*"
                    //accept="image/png, image/gif, image/jpeg"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
              <div className="text-right">
                <Link to={routes.users}>
                  <button
                    type="button"
                    className="btn bg-gray-500 border-slate-200 hover:border-slate-300 text-white mr-5"
                  >
                    Cancel
                  </button>
                </Link>

                <button
                  type="submit"
                  className="btn bg-primary border-slate-200 hover:border-slate-300 text-white"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default AddUser;
