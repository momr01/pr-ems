import { useState } from "react";
import { Layout } from "../../components/custom";

const Maintenance = () => {
  const [companySetting, setCompanySetting] = useState(true);

  return (
    <Layout section="Maintenance" obs="All Plants">
      <div className="grid grid-cols-12 gap-6">
        <section className="flex flex-col col-span-full sm:col-span-5">
          <div className="bg-white shadow-lg rounded-sm border border-slate-200 px-5 pt-5 pb-8 mb-5">
            <h2 className="text-black font-bold text-lg">
              Plant and Equipment Maintenance
            </h2>
            <p className="text-black mb-5">HVAC System</p>

            <div className="flex justify-around">
              <button className="border border-slate-400 w-24 h-24">
                Icon 2
              </button>
              <button className="border border-slate-400 w-24 h-24">
                Icon 1
              </button>
              <button className="border border-slate-400 w-24 h-24">
                Icon 3
              </button>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-sm border border-slate-200 px-5 pt-5 pb-7 mb-5">
            <h2 className="text-black font-bold text-lg mb-5">
              HVAC Suystems Operational Overview
            </h2>

            <div className="overflow-x-auto">
              <table className="table-auto w-full border border-slate-300">
                {/* Table header */}
                <thead className="text-base text-black font-bold rounded-sm">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Brand</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Indoor</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Outdoor</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Status</div>
                    </th>
                  </tr>
                </thead>

                <tbody className="text-sm divide-y divide-slate-100">
                  <tr className="bg-slate-200">
                    <td className="p-2 whitespace-nowrap text-black text-center text-base">
                      York
                    </td>
                    <td className="p-2 whitespace-nowrap text-black text-center text-base">
                      <div>10</div>
                    </td>
                    <td className="p-2 whitespace-nowrap text-black text-center text-base">
                      <div>3</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check"
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="#ffffff"
                          fill="green"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="12" r="9" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-2 whitespace-nowrap text-black text-center text-base">
                      <div>Lennox</div>
                    </td>
                    <td className="p-2 whitespace-nowrap text-black text-center text-base">
                      <div>4</div>
                    </td>
                    <td className="p-2 whitespace-nowrap text-black text-center text-base">
                      <div>3</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check"
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="#ffffff"
                          fill="green"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="12" r="9" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-sm border border-slate-200 px-5 pt-5 pb-7">
            <h2 className="text-black font-bold text-lg mb-5">
              {" "}
              Last Maintenance Orders Created
            </h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border border-slate-300">
                {/* Table header */}
                <thead className="text-base text-black rounded-sm">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center text-base">
                        No. Order
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center text-base">
                        Created
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center text-base">
                        Status
                      </div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-slate-100">
                  {/* Row */}
                  <tr className="bg-slate-200">
                    <td className="p-2 whitespace-nowrap text-base text-center">
                      <div className="text-primary">3204506</div>
                    </td>
                    <td className="p-2 whitespace-nowrap text-base text-black text-center">
                      <div>21/09/21 17:26</div>
                    </td>
                    <td className="p-2 whitespace-nowrap text-base text-black text-center">
                      <div>Attended</div>
                    </td>
                  </tr>

                  {/* Row */}
                  <tr>
                    <td className="p-2 whitespace-nowrap text-base text-center">
                      <div className="text-primary">3204507</div>
                    </td>
                    <td className="p-2 whitespace-nowrap text-black text-base text-center">
                      <div>20/09/21 13:26</div>
                    </td>
                    <td className="p-2 whitespace-nowrap text-black text-base text-center">
                      <div>Waiting</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="flex flex-col col-span-full sm:col-span-7 bg-white shadow-lg rounded-sm border border-slate-200 p-5">
          <div className="flex mb-5">
            <div className="w-1/3 flex border-r-2 border-slate-500 justify-between px-2 relative">
              <p className="text-red-500 text-4xl font-medium">03</p>
              <p className="text-black text-base absolute right-2 bottom-1">
                System Error
              </p>
            </div>
            <div className="w-1/3 flex border-r-2 border-slate-500 justify-between px-2 relative">
              <p className="text-yellow-500 text-4xl font-medium">02</p>
              <p className="text-black text-base absolute right-2 bottom-1">
                Maintenance
              </p>
            </div>
            <div className="w-1/3 flex justify-between px-2 relative">
              <p className="text-slate-800 text-4xl font-medium mr-5">11</p>
              <p className="text-black text-base absolute right-2 bottom-1">
                Not Connected
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="table-base w-full border border-slate-300">
              {/* Table header */}
              <thead className="text-base text-black rounded-sm">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Error Code</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Datetime</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Plant</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Description</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Action</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm divide-y divide-slate-100">
                {/* Row */}
                {[
                  "002",
                  "002",
                  "002",
                  "002",
                  "002",
                  "002",
                  "002",
                  "002",
                  "002",
                  "002",
                  "002",
                  "002",
                  "002",
                  "002",
                ].map((item, i) => (
                  <tr key={i} className="text-black odd:bg-slate-200">
                    <td className="p-2 whitespace-nowrap">{item}</td>
                    <td className="p-2 whitespace-nowrap text-center">
                      <div>26/09/21 16:30</div>
                    </td>
                    <td className="p-2 whitespace-nowrap text-center">
                      <div>1</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="font-medium text-center">
                        HVAC System Error
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex justify-center">
                        <div className="w-6 border-2 border-primary bg-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-tool"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="#ffffff"
                            fill="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Maintenance;
