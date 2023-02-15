import { Layout, ManagementBase, WithRole } from "../../../components/custom";
import routes from "../../../helpers/routes";
import {
  ShiftsDeleteButton,
  ShiftsFilterButton,
  ShiftsPaginationClassic,
  ShiftsSearchForm,
  ShiftsTable,
} from "../../../partials/custom";

const shifts = {
  id: 1,
  name: "Shifts",
  search: () => <ShiftsSearchForm placeholder="Search by shift ID…" />,
  addLink: routes.addShift,
  addTitle: "Create Shift",
  deleteBtn: (selectedItems) => (
    <ShiftsDeleteButton selectedItems={selectedItems} />
  ),
  filterBtn: () => <ShiftsFilterButton align="right" />,
  table: (handleSelectedItems) => (
    <ShiftsTable selectedItems={handleSelectedItems} />
  ),
  pagination: () => <ShiftsPaginationClassic />,
};

const Shifts = () => {
  return (
    <Layout section="Management" obs="Shifts">
      <ManagementBase data={shifts} />
    </Layout>
  );
};

export default WithRole(Shifts, "admin");
