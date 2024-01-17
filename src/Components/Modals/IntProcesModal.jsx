import React, { useState } from 'react';
import { Modal } from '@mui/material';
import cancel from '../../assets/cancel.png';
import GreenTick from '../../assets/Vector.png';
import arrow from '../../assets/downArrow.png'

const IntProcesModal = ({ open, onClose }) => {
    const closeModal = () => {
        onClose(); // Close the JobModal1
    };

    const [rounds, setRounds] = useState([
        { id: 1, name: 'Round 1', description: 'Skill Assessment' },
        { id: 2, name: 'Round 2', description: 'Technical Interview' },
        { id: 3, name: 'Round 3', description: 'AI Based Video' },
        { id: 4, name: 'Final Round', description: 'Off - Online Interview' },
    ]);

    const handleCancelRound = (id) => {
        // Remove the round with the specified id
        setRounds((prevRounds) => prevRounds.filter((round) => round.id !== id));
    };

    const handleAddRound = () => {
        // Add a new round with default values
        const newRound = {
            id: rounds.length + 1,
            name: `Round ${rounds.length + 1}`,
            description: 'Default Description',
        };
        setRounds((prevRounds) => [...prevRounds, newRound]);
    };

    return (
        <div>
            <Modal open={open} className='flex items-center justify-center pt-12 pb-12 '>
                <div className="w-[44rem] bg-white rounded-[1.875rem]  relative">
                    {/* heading */}
                    <div>
                        <div className="text-black text-[1.15rem] font-600 font-Poppins mt-[1.5rem] flex justify-center">Create a Job</div>
                        <img src={cancel} className="w-5 h-5 absolute right-5 -mt-7" onClick={closeModal} alt="cancel" />
                    </div>
                    {/* bullets */}
                    <div className='flex flex-row gap-4 mt-3 justify-center'>
                        <span className='flex flex-row gap-2'>
                            <div className="w-4 h-4 bg-green-600 rounded-full flex justify-center">
                                <img src={GreenTick} className='w-2 h-1.5 mt-[0.2rem]'></img>
                            </div>
                            <p className="text-black text-xs font-400 mt-[0.1rem] font-Poppins">Job Application </p>
                        </span>
                        <span className='flex flex-row gap-2 ml-2'>
                            <div className="w-4 h-4 bg-green-600 rounded-full flex justify-center ">
                                <img src={GreenTick} className='w-2 h-1.5 mt-[0.2rem]'></img>
                            </div>
                            <p className="text-black text-xs font-400 mt-[0.1rem] font-Poppins">Job Description </p>
                        </span>
                        <span className='flex flex-row gap-2 ml-2'>
                            <span className='text-black text-[0.6rem] font-semibold font-Outfit border-2 border-dotted border-black border-opacity-50 w-4 h-4 flex justify-center rounded-full'>3</span>
                            <p className="text-black text-xs font-400 mt-[0.1rem] font-Poppins">Interview Process </p>
                        </span>
                    </div>

                    {/* grey div1 */}
                    <div className="w-[34rem] h-[4rem] ml-[5rem]  flex justify-center items-center mt-3 bg-slate-50 rounded-[1.875rem]" >
                        <p className="w-[30.5rem] h-[3rem]  text-center text-zinc-500 text-[0.73rem] font-medium font-Poppins">A job represents a new opening, an open position, or a vacancy listing. Creating a job will allow you to add candidates to that job and advertise it on your career page and job boards.</p>
                    </div>

                    {/* interview Rounds list */}
                    <div className='grid gap-y-[0.15rem] justify-center mt-[1.5rem] ml-6'>
                        {/* rounds  */}
                        {rounds.map((round) => (
                            <div key={round.id} className='flex gap-2 relative'>
                                <div className="w-24 h-7 bg-white rounded-lg border border-black">
                                    <p className="text-neutral-400 text-[0.7rem] ml-[0.35rem] mt-[0.25rem] font-500 font-Poppins">{round.name}</p>
                                </div>
                                <div className="w-32 h-7 bg-white rounded-lg border border-indigo-600 flex relative" >
                                    <p className="text-indigo-600 text-[0.6rem]  ml-[0.4rem] flex items-center font-500 font-['Poppins']">{round.description}</p>
                                    <img src={arrow} className='w-2 h-1.5 absolute mt-[0.65rem]  right-2 '></img>
                                    <img
                                        src={cancel}
                                        className='w-4 h-4 absolute mt-[0.3rem] -right-2'
                                        onClick={() => handleCancelRound(round.id)}
                                        alt="cancel"
                                    ></img>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* add button */}
                    <button className="w-20 h-6 ml-[15.5rem] mt-[0.25rem] bg-black rounded-lg" onClick={handleAddRound}>
                        <p className="text-white text-[0.59rem] font-medium font-Inter">Add Round</p>
                    </button>

                    {/* Last Part */}
                    <div className='grid grid-cols-2 mt-[0.75rem] ml-[5rem] gap-x-6 justify-center'>
                        <div>
                            <div className="text-black text-[0.75rem] font-semibold font-['Poppins'] mb-[0.4rem]">Kindly Check the Skills</div>
                            <div className="w-28 h-7 bg-gray-100 rounded-lg">
                                <div className="text-neutral-400 text-[0.6rem] ml-[0.35rem] pt-[0.35rem] font-medium font-['Poppins']">SEO & SEM</div>
                            </div>
                        </div>
                        <div>
                            <div className="text-black text-[0.75rem] font-semibold font-['Poppins'] mb-[0.4rem]">Any Platform or Qualification</div>
                            <div className="w-28 h-7 bg-gray-100 rounded-lg">
                                <div className="text-neutral-400 text-[0.6rem] ml-[0.35rem] pt-[0.35rem] font-medium font-['Poppins']">Yes</div>
                            </div>
                        </div>
                        
                        <div>
                            <span className='flex flex-row justify-start mt-[0.5rem]'>
                                <p className="text-black text-[0.75rem] font-semibold font-Poppins mt-[0.2rem]">Finalize Questioner</p>
                                <button className='w-20 h-5 bg-indigo-600 rounded ml-[1rem] '>
                                    <p className='text-white text-[0.5rem] font-normal font-Poppins cursor-pointer'>Edit with AI</p>
                                </button>
                            </span>
                            <div className="w-[15.5rem] h-[4.5rem]  bg-gray-100 rounded-lg cursor-text" >
                                <p className=" mt-[0.5rem] ml-[0.35rem] pt-[0.5rem] text-neutral-400 text-[0.5rem] font-medium font-['Poppins']">Selected Intern’s day-to-day responsibilities include. </p>
                                <div contentEditable="true" className="text-black text-[0.5rem] mt-[0.75rem] ml-[0.35rem] font-500 font-Poppins focus:outline-none">1.<br />2.<br />3.</div>
                            </div>
                        </div>
                        
                        <div>
                            <span className='flex flex-row justify-start mt-[0.5rem]'>
                                <p className="text-black text-[0.75rem] font-semibold font-Poppins mt-[0.2rem]">Share Availability</p>
                                <button className='w-20 h-5 bg-indigo-600 rounded ml-[1rem] '>
                                    <p className='text-white text-[0.5rem] font-normal font-Poppins cursor-pointer'>Edit with AI</p>
                                </button>
                            </span>
                            <div className="w-[15.5rem] h-[4.5rem]  bg-gray-100 rounded-lg cursor-text" >
                                <p className=" mt-[0.5rem] ml-[0.35rem] pt-[0.5rem] text-neutral-400 text-[0.5rem] font-medium font-['Poppins']">Selected Intern’s day-to-day responsibilities include. </p>
                                <div contentEditable="true" className="text-black text-[0.5rem] mt-[0.75rem] ml-[0.35rem] font-500 font-Poppins focus:outline-none">1.<br />2.<br />3.</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* save button */}
                    <button className="w-32 h-7 bg-black rounded-lg mt-[1rem] ml-[17rem]  ">
                        <p className="text-white text-[0.875rem] font-medium font-Poppins" >Submit</p>
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default IntProcesModal;
