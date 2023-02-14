import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectAllUsers,
  selectUserById,
  selectUsersIds,
  useGetUsersQuery,
} from "../../../features/users/usersSlice";
import { ShiftsTableItem } from "../index";

function ShiftsTable({ selectedItems }) {
  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  const { isLoading, isSuccess, isError, error } = useGetUsersQuery();

  const usersIds = useSelector(selectUsersIds);
  const users = useSelector(selectAllUsers);

  let content;
  if (isLoading) {
    content = <p>Cargando...</p>;
  } else if (isSuccess) {
    content = usersIds.map((userId, index) => (
      <TrTable
        key={index}
        userId={userId}
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        setSelectAll={setSelectAll}
      />
    ));
  } else if (isError || !isSuccess) {
    content = <p>{error}</p>;
  }

  useEffect(() => {
    setList(users);
  }, []);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(users.map((li) => li.id));
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
          Users{" "}
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

const TrTable = ({ userId, isCheck, setIsCheck, setSelectAll }) => {
  const user = useSelector((state) => selectUserById(state, userId));

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
      key={user.id}
      id={user.id}
      username={user.username}
      firstName={user.first_name}
      lastName={user.last_name}
      email={user.email}
      role={user.role.role_name}
      isActive={user.is_active}
      dataEntry={user.data_entry}
      handleClick={handleClick}
      isChecked={isCheck.includes(user.id)}
    />
  );
};
