import React from "react";
import { Layout } from "../../components/custom";

const AddWorkShift = () => {
  return (
    <Layout section="Add Work Shifts" obs="Management">
      <section>
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
            Create new work shifts
          </h1>
          <p>Please complete each input to create a new work shift</p>
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
                    Name <span className="text-rose-500">*</span>
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
                    Schedule <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="card-surname"
                    className="form-input w-full h-12"
                    type="text"
                  />
                </div>
              </div>
              <div className="text-right">
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

export default AddWorkShift;
