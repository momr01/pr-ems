import { Link } from "react-router-dom";
import routes from "../../../helpers/routes";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const FormShift = ({ id }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    let defaultValues = {};
    defaultValues.name = id ? shift?.name : "";
    //defaultValues.schedule = id ? shift?.schedule : "";
    reset({ ...defaultValues });
  }, [reset]);

  const submitForm = (data) => {
    console.log(data);

    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("schedule", `${data.schedule_from} - ${data.schedule_to}`);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="space-y-4">
        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="name"
              className="form-input w-full h-12"
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          {/* <div className="flex-1">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="schedule"
            >
              Schedule <span className="text-rose-500">*</span>
            </label>
            <input
              id="schedule"
              className="form-input w-full h-12"
              type="text"
              {...register("schedule", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.schedule && (
              <span className="text-red-500 text-sm">
                {errors.schedule.message}
              </span>
            )}
          </div> */}
        </div>
        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="schedule_from"
            >
              Schedule <span className="text-rose-500">*</span>
            </label>
            <div className="flex">
              <div className="flex-1">
                <input
                  id="schedule_from"
                  className="form-input w-full h-12"
                  type="time"
                  {...register("schedule_from", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    pattern: {
                      value: /[0-9]{2}:[0-9]{2}/,
                      message: "The format is not correct",
                    },
                  })}
                />
                {errors.schedule_from && (
                  <span className="text-red-500 text-sm">
                    {errors.schedule_from.message}
                  </span>
                )}
              </div>

              <div className="flex-1">
                <input
                  id="schedule_to"
                  className="form-input w-full h-12"
                  type="time"
                  {...register("schedule_to", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
                {errors.schedule_to && (
                  <span className="text-red-500 text-sm">
                    {errors.schedule_to.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[3rem] flex justify-end">
          <Link to={routes.shifts}>
            <button
              type="button"
              className="btn bg-gray-500 border-slate-200 hover:border-slate-300 text-white mr-5 h-[100%]"
            >
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="btn bg-primary border-slate-200 hover:border-slate-300 text-white h-[100%]"
          >
            Create
          </button>
        </div>

        {/* <div className="h-[3rem] flex justify-end">
          <Link to={routes.users}>
            <button
              type="button"
              className="btn bg-gray-500 border-slate-200 hover:border-slate-300 text-white mr-5 h-[100%]"
            >
              Cancel
            </button>
          </Link>

          <button className="btn bg-primary border-slate-200 hover:border-slate-300 text-white h-[100%]">
            {isLoading || isLoadingUpdate ? (
              <section className="justify-center items-center flex">
                <div className="loader"></div>
                <span className="ml-3 text-white font-semibold">Cargando</span>
              </section>
            ) : (
              <span>{id ? "Update" : "Create"}</span>
            )}
          </button>
        </div> */}
      </div>
    </form>
  );
};

export default FormShift;
