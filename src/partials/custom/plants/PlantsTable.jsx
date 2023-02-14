import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectAllPlants,
  selectPlantById,
  selectPlantsIds,
  useGetPlantsQuery,
} from "../../../features/plants/plantsSlice";
import { PlantsTableItem } from "../index";

function PlantsTable({ selectedItems }) {
  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  const { isLoading, isSuccess, isError, error } = useGetPlantsQuery();

  const plantsIds = useSelector(selectPlantsIds);
  const plants = useSelector(selectAllPlants);

  let content;
  if (isLoading) {
    content = <p>Cargando...</p>;
  } else if (isSuccess) {
    content = plantsIds.map((plantId, index) => (
      <TrTable
        key={index}
        plantId={plantId}
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        setSelectAll={setSelectAll}
      />
    ));
  } else if (isError || !isSuccess) {
    content = <p>{error}</p>;
  }

  useEffect(() => {
    setList(plants);
  }, []);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(plants.map((li) => li.id));
    if (selectAll) {
      setIsCheck([]);
    }
  };

  useEffect(() => {
    selectedItems(isCheck);
  }, [isCheck]);

  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">
          Plants{" "}
          <span className="text-slate-400 font-medium">{list?.length}</span>
        </h2>
      </header>
      <div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span className="sr-only">Select all</span>
                      <input
                        className="form-checkbox"
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </label>
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Country</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">State</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">City</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">District</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Street</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Number</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Zip Code</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Actions</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200">
              {content}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlantsTable;

const TrTable = ({ plantId, isCheck, setIsCheck, setSelectAll }) => {
  const plant = useSelector((state) => selectPlantById(state, plantId));

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setSelectAll(false);
    setIsCheck([...isCheck, Number(id)]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== Number(id)));
    }
  };

  console.log(plant);

  return (
    <PlantsTableItem
      key={plant.id}
      id={plant.id}
      name={plant.name}
      country={plant.address.address_country}
      state={plant.address.address_state}
      city={plant.address.address_city}
      district={plant.address.address_district}
      street={plant.address.address_street}
      number={plant.address.address_number}
      zipCode={plant.address.address_zip_code}
      handleClick={handleClick}
      isChecked={isCheck.includes(plant.id)}
    />
  );
};
