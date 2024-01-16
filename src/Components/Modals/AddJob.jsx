import React, { useState } from "react";
import { Modal } from "@mui/material";
import cancel from "../../assets/cancel.png";
import { useForm } from "react-hook-form";

const AddJob = ({ open, onClose, datas, setData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const closeModal = () => {
    onClose(); // Close the JobModal1
  };

  const onSubmit = (data) => {
    //   console.log(data);
      setData({...datas}, {stepII: data});
  };

  const feilds = [
    {
      label: "Position Name",
      value: "position_name",
    },
    {
      label: "Company Name",
      value: "company_name",
    },
    {
      label: "Job Pipeline",
      value: "position_name3",
    },
    {
      label: "Add Location",
      value: "position_name4",
    },
    {
      label: "Contract Details",
      value: "position_name4",
    },
    {
      label: "Minimum Salary",
      value: "position_name4",
    },
    {
      label: "Maximum Salary",
      value: "position_name4",
    },
    {
      label: "Currency",
      value: "position_name4",
    },
    {
      label: "Select Frequency",
      value: "position_name4",
    },
  ];

  const FormFeild = ({ label, value }) => {
    return (
      <span>
        <p className="text-black text-base font-semibold font-Poppins mb-2">
          {label}
        </p>
        <input
          className="w-80 h-12 bg-gray-100 rounded-lg text-gray-500 p-2"
          {...register(value)}
        ></input>
      </span>
    );
  };

  return (
    <div>
      <Modal open={open} className="flex items-center justify-center">
        <div className="w-[59rem] h-[60rem] bg-white rounded-[1.875rem] shadow-md relative">
          {/* heading */}
          <div>
            <div className="text-black text-[2rem] font-600 font-Poppins mt-[2.88rem] flex justify-center">
              Create a Job
            </div>
            <img
              src={cancel}
              className="w-10 h-10 absolute -mt-12 mb-14 ml-[54rem]"
              onClick={closeModal}
              alt="cancel"
            />
          </div>
          {/* bullets */}
          <div className="flex flex-row gap-6 mt-8">
            <span className="flex flex-row gap-2">
              <span className="text-black text-xs font-semibold font-Outfit ml-64 border-2 border-dotted border-black border-opacity-50 w-5 h-5 flex justify-center rounded-full">
                1
              </span>
              <p className="text-black text-xs font-400 mt-[0.15rem]  font-Poppins">
                Job Application{" "}
              </p>
            </span>
            <span className="flex flex-row gap-2">
              <span className="text-black text-xs font-semibold font-Outfit  border-2 border-dotted border-black border-opacity-50 w-5 h-5 flex justify-center rounded-full">
                2
              </span>
              <p className="text-black text-xs font-400 mt-[0.15rem]  font-Poppins">
                Job Description{" "}
              </p>
            </span>
            <span className="flex flex-row gap-2">
              <span className="text-black text-xs font-semibold font-Outfit  border-2 border-dotted border-black border-opacity-50 w-5 h-5 flex justify-center rounded-full">
                3
              </span>
              <p className="text-black text-xs font-400 mt-[0.15rem]  font-Poppins">
                Interview Process{" "}
              </p>
            </span>
          </div>
          {/* grey div1 */}
          <div className="w-[49rem] h-[6rem] flex justify-center ml-[6rem] mt-[2.63rem] bg-slate-50 rounded-[1.875rem]">
            <p className="w-[41rem] h-[4.5rem] mt-[1.02rem] text-center text-zinc-500 text-base font-medium font-Poppins">
              A job represents a new opening, an open position or a vacancy
              listing. Creating a job will allow you to add candidates to that
              job and advertise it on your career page and job boards.
            </p>
          </div>
          {/* form */}
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="px-20 mt-9 flex flex-wrap gap-14 ml-8 p-2 gap-y-4">
              {feilds.map((item) => {
                return <FormFeild label={item.label} value={item.value} />;
              })}
            </div>
            <div className=" flex justify-center">
              <button className="w-56 h-12 bg-black rounded-lg mt-[3.19rem] ml-[2rem] ">
                <p className="text-white text-lg font-medium font-Poppins">
                  Save & Next
                </p>
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddJob;
