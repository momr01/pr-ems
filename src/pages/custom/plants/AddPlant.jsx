import { FormPlant, Layout, WithRole } from "../../../components/custom";

const AddPlant = () => {
  return (
    <Layout section="Add Plant" obs="Management">
      <section>
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
            Create new plant
          </h1>
          <p>Please complete each input to create a new plant</p>
        </header>

        <div>
          <FormPlant />
        </div>
      </section>
    </Layout>
  );
};

export default WithRole(AddPlant, "admin");
