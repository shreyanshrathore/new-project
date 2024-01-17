import React, { useState } from "react";
import { Modal } from "@mui/material";
import cancel from "../../assets/cancel.png";
import { useForm } from "react-hook-form";
import JobDesModal from "./JobDesModal";

const AddJob = ({ open, Close, datas, setData }) => {

  const [isModalOpen,SetModelOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const closeModal = () => {
    Close(); // Close the JobModal1
  };

  const onSubmit = (data) => {
    //   console.log(data);
    setData({ ...datas }, { stepII: data });
  };

  const handleNextClick = () => {
   SetModelOpen(true)
  }

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
      <div className="mb-4 sm:mb-2 w-full">
        <p className="text-black text-xs md:text-[0.75rem] font-semibold font-Poppins mb-2 cursor-default">
          {label}
        </p>
        <input
          className="w-full  h-9 bg-gray-100 rounded-lg text-gray-500 p-2"
          {...register(value)}
        />
      </div>
    );
  };

  return (
    <div>
      <Modal open={open} className="flex items-center justify-center">
        <div className="w-[90%] sm:w-[85%] md:w-[60%] xl:w-[50%] 2xl:w-[45%]   bg-white rounded-[1.875rem] shadow-md relative justify-center">
          {/* heading */}
          <div>
            <div className="text-black text-[1.15rem] font-600 font-Poppins mt-[1.95rem] flex justify-center cursor-default">Create a Job</div>
            <img src={cancel} className="w-5 h-5 absolute right-5 -mt-7 cursor-pointer" onClick={closeModal} alt="cancel" />
          </div>

          {/* bullets */}
          <div className="flex justify-center sm:flex-row gap-6 mt-[1.95rem] ">
            <div className="flex flex-row gap-2 mb-2 sm:mb-0">
              <span className="text-black text-xs font-semibold font-Outfit border-2 border-dotted border-black border-opacity-50 w-5 h-5 flex justify-center rounded-full">
                1
              </span>
              <p className="text-black text-xs font-400 mt-[0.15rem] font-Poppins cursor-default">Job Application</p>
            </div>
            <div className="flex flex-row gap-2 mb-2 sm:mb-0">
              <span className="text-black text-xs font-semibold font-Outfit border-2 border-dotted border-black border-opacity-50 w-5 h-5 flex justify-center rounded-full">
                2
              </span>
              <p className="text-black text-xs font-400 mt-[0.15rem] font-Poppins cursor-default">Job Description</p>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-black text-xs font-semibold font-Outfit border-2 border-dotted border-black border-opacity-50 w-5 h-5 flex justify-center rounded-full">
                3
              </span>
              <p className="text-black text-xs font-400 mt-[0.15rem] font-Poppins cursor-default">Interview Process</p>
            </div>
          </div>

          {/* grey div1 */}
          
          <div className="w-[90%] h-[4rem] ml-6 flex items-center justify-center mt-3 bg-slate-50 rounded-[1.875rem]" >
            <p className="w-[90%] h-[3rem]  text-center text-zinc-500 text-[0.73rem] font-medium font-Poppins cursor-default">A job represents a new opening, an open position, or a vacancy listing. Creating a job will allow you to add candidates to that job and advertise it on your career page and job boards.</p>
          </div>

          {/* form */}
          <form className="  mt-4 sm:mt-9 w-4/4 ml-12 mr-12" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 ml-14 gap-x-11 w-[80%]">
              {feilds.map((item) => (
                <FormFeild key={item.label} label={item.label} value={item.value} />
              ))}
            </div>

            <div className="flex justify-center">
              <button onClick={handleNextClick} className="w-[35%] md:w-[28%] xl:w-[25%] 2xl:w-[22%] h-12 bg-black rounded-lg mt-4 sm:mt-[2rem] ml-0 sm:ml-[2rem] mb-4 cursor-pointer">
                <p className="text-white text-lg font-medium font-Poppins">Save & Next</p>
              </button>
            </div>

          </form>
        </div>
      </Modal>

      {isModalOpen && <JobDesModal open={isModalOpen} Close={closeModal}/>}
    </div>

  );
};

export default AddJob;