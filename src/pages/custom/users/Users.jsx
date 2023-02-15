import { Layout, ManagementBase, WithRole } from "../../../components/custom";
import routes from "../../../helpers/routes";
import {
  UsersDeleteButton,
  UsersFilterButton,
  UsersPaginationClassic,
  UsersSearchForm,
  UsersTable,
} from "../../../partials/custom";

const users = {
  id: 1,
  name: "Users",
  search: () => <UsersSearchForm placeholder="Search by user ID…" />,
  addLink: routes.addUser,
  addTitle: "Create User",
  deleteBtn: (selectedItems) => (
    <UsersDeleteButton selectedItems={selectedItems} />
  ),
  filterBtn: () => <UsersFilterButton align="right" />,
  table: (handleSelectedItems) => (
    <UsersTable selectedItems={handleSelectedItems} />
  ),
  pagination: () => <UsersPaginationClassic />,
};

const Users = () => {
  return (
    <Layout section="Management" obs="Users">
      <ManagementBase data={users} />
    </Layout>
  );
};

export default WithRole(Users, "admin");
