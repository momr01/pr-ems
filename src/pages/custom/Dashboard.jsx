import { useState } from "react";
import { Kpis, Layout } from "../../components/custom";
import DateSelect from "../../components/DateSelect";
import DashboardCard08 from "../../partials/dashboard/DashboardCard08";

const Home = () => {
  const [companySetting, setCompanySetting] = useState(true);

  return (
    <Layout section="Dashboard" obs="Overview">
      <section className="mb-5 flex justify-between">
        <div className="flex">
          <div className="mr-5">
            <label
              className="block text-base font-medium mb-1 text-black"
              htmlFor="card-country"
            >
              Plant
            </label>
            <select
              id="card-country"
              className="form-select h-10 bg-slate-300 text-black"
            >
              <option>TicTac</option>
              <option>CSV</option>
              <option>Excel</option>
            </select>
          </div>
          <div className="mr-5">
            <p className="mb-1 font-medium text-base text-black">Period</p>
            <DateSelect />
          </div>
          <div className="relative">
            <button className="bg-primary absolute bottom-0 h-10 text-white px-5 text-base flex items-center">
              <span className="mr-1">Update</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-rotate-clockwise"
                width="14"
                height="14"
                viewBox="0 0 20 20"
                strokeWidth="2"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative">
          <select
            id="card-country"
            className="form-select absolute right-0 bottom-0 h-10 bg-slate-300 text-black"
          >
            <option>Export</option>
            <option>CSV</option>
            <option>Excel</option>
          </select>
        </div>
      </section>
      <Kpis />

      <div className="grid grid-cols-12 gap-6">
        <DashboardCard08 />
        <div className="flex flex-col col-span-full sm:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 p-5">
          <h2 className="text-black text-lg font-bold mb-2">Consume Filters</h2>
          <section>
            <h3 className="mb-2">Sensors</h3>
            <div className="flex items-center mb-2">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle"
                  className="sr-only"
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                />
                <label className="bg-slate-400" htmlFor="company-toggle">
                  <span
                    className="bg-white shadow-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2">
                {companySetting ? "Sensor M11" : "Sensor M11"}
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle"
                  className="sr-only"
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                />
                <label className="bg-slate-400" htmlFor="company-toggle">
                  <span
                    className="bg-white shadow-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2">
                {companySetting ? "Sensor M12" : "Sensor M12"}
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle"
                  className="sr-only"
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                />
                <label className="bg-slate-400" htmlFor="company-toggle">
                  <span
                    className="bg-white shadow-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2">
                {/* {companySetting ? "On" : "Off"} */}
                {companySetting ? "Sensor M13" : "Sensor M13"}
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle"
                  className="sr-only"
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                />
                <label className="bg-slate-400" htmlFor="company-toggle">
                  <span
                    className="bg-white shadow-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2">
                {companySetting ? "Sensor M13" : "Sensor M13"}
              </div>
            </div>
          </section>
          <section>
            <h3 className="mb-2">Shifts</h3>
            <div className="flex items-center mb-2">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle"
                  className="sr-only"
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                />
                <label className="bg-slate-400" htmlFor="company-toggle">
                  <span
                    className="bg-white shadow-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2">
                {companySetting ? "06:00 / 14:00" : "06:00 / 14:00"}
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle"
                  className="sr-only"
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                />
                <label className="bg-slate-400" htmlFor="company-toggle">
                  <span
                    className="bg-white shadow-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2">
                {companySetting ? "14:00 / 20:00" : "14:00 / 20:00"}
              </div>
            </div>
            <div className="flex items-center">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle"
                  className="sr-only"
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                />
                <label className="bg-slate-400" htmlFor="company-toggle">
                  <span
                    className="bg-white shadow-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2">
                {companySetting ? "20:00 / 06:00" : "20:00 / 06:00"}
              </div>
            </div>
          </section>
          <button className="bg-primary mt-3 h-10 text-white font-medium rounded-md">
            Apply
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
