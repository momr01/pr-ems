import { Layout, ManagementBase } from "../../../components/custom";
import routes from "../../../helpers/routes";
import {
  PlantsDeleteButton,
  PlantsFilterButton,
  PlantsPaginationClassic,
  PlantsSearchForm,
  PlantsTable,
} from "../../../partials/custom";

const plants = {
  id: 1,
  name: "Plants",
  search: () => <PlantsSearchForm placeholder="Search by user ID…" />,
  addLink: routes.addPlant,
  addTitle: "Create Plant",
  deleteBtn: (selectedItems) => (
    <PlantsDeleteButton selectedItems={selectedItems} />
  ),
  filterBtn: () => <PlantsFilterButton align="right" />,
  table: (handleSelectedItems) => (
    <PlantsTable selectedItems={handleSelectedItems} />
  ),
  pagination: () => <PlantsPaginationClassic />,
};

const Plants = () => {
  return (
    <Layout section="Management" obs="Users">
      <ManagementBase data={plants} />
    </Layout>
  );
};

export default Plants;
