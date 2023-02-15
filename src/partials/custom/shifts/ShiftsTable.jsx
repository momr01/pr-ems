import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectAllShifts,
  selectShiftById,
  selectShiftsIds,
  useGetShiftsQuery,
} from "../../../features/plants/shiftsSlice";
import { ShiftsTableItem } from "../index";

function ShiftsTable({ selectedItems }) {
  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  const { isLoading, isSuccess, isError, error } = useGetShiftsQuery();

  const shiftsIds = useSelector(selectShiftsIds);
  const shifts = useSelector(selectAllShifts);

  let content;
  if (isLoading) {
    content = <p>Cargando...</p>;
  } else if (isSuccess) {
    content = shiftsIds.map((shiftId, index) => (
      <TrTable
        key={index}
        shiftId={shiftId}
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        setSelectAll={setSelectAll}
      />
    ));
  } else if (isError || !isSuccess) {
    content = <p>{error}</p>;
  }

  useEffect(() => {
    setList(shifts);
  }, []);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(shifts.map((li) => li.id));
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
          Shifts{" "}
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
                  <div className="font-semibold text-left">Schedule</div>
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

export default ShiftsTable;

const TrTable = ({ shiftId, isCheck, setIsCheck, setSelectAll }) => {
  const shift = useSelector((state) => selectShiftById(state, shiftId));

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setSelectAll(false);
    setIsCheck([...isCheck, Number(id)]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== Number(id)));
    }
  };

  return (
    <ShiftsTableItem
      key={shift.id}
      id={shift.id}
      name={shift.name}
      schedule={shift.schedule}
      handleClick={handleClick}
      isChecked={isCheck.includes(shift.id)}
    />
  );
};
