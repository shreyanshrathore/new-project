import React, { useState } from 'react';
import JobModal1 from './Modals/JobModal1';
import AddJob from './Modals/AddJob';
import JobDesModal from './Modals/JobDesModal';
import IntProcesModal from './Modals/IntProcesModal';
import LeftNavbar from '../utils/LeftNavbar';
import search from '../assets/search 1.png';
import bell from '../assets/bell.png'
import dot from '../assets/redDot.png'
import dp from '../assets/Rectangle 40860.png'
import { Switch } from '@mui/material';

const Landing = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className='flex bg-slate-100 h-full w-full'>
                <LeftNavbar className='flex-nowrap' />
                <div className='h-screen'>
                    {/* top bar 1 (visible only on lg, xl, and 2xl) */}
                    <div className="hidden sm:flex md:flex lg:flex xl:flex 2xl:flex sm:w-[28rem] md:w-[35rem] lg:w-[48rem] xl:w-[63rem] 2xl:w-[80rem] h-14 bg-white rounded-xl  justify-center items-center ml-2 mt-2 relative">
                        <div className='flex items-center absolute left-2 ' >
                            <div className="w-28 h-12 bg-slate-50 rounded-lg pl-2">
                                <div className="text-neutral-400 text-[0.5rem] mt-2 font-medium font-['Poppins']">Your Organization</div>
                                <div className="text-black text-xs mt-1 font-semibold font-['Poppins']">Skill genic</div>
                            </div>
                            <div className="w-52 h-9 bg-slate-50 rounded-xl  flex items-center ml-4 pl-2 gap-4">
                                <img src={search} className='w-6 h-6 relative'></img>
                                <div className="text-gray-400 text-sm font-normal font-['Poppins']">Search</div>
                            </div>
                        </div>
                        <div className='flex gap-3 absolute right-2'>
                            <div className="w-12 h-12 bg-orange-50 rounded-lg flex justify-center items-center">
                                <img src={dot} className='absolute top-[0.7rem] ml-7'></img>
                                <img src={bell} className="w-6 h-6 relative " ></img>
                            </div>
                            <img src={dp} className="w-12 h-12 rounded-xl" ></img>
                        </div>
                    </div>

                    {/* top bar part 2 (visible only on sm, md, and before sm) */}
                    <div className='sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden flex gap-x-[10rem] h-14 bg-white rounded-xl justify-center items-center ml-2 mt-2 pr-2 relative'>
                        <div className=" w-28 h-12 bg-slate-50 rounded-lg pl-2 ">
                            <div className="text-neutral-400 text-[0.5rem] mt-2 font-medium font-['Poppins']">Your Organization</div>
                            <div className="text-black text-xs mt-1 font-semibold font-['Poppins']">Skill genic</div>
                        </div>
                        <div className="sm:flex md:flex lg:hidden xl:hidden 2xl:hidden flex gap-3 ">
                            <div className="w-12 h-12 bg-orange-50 rounded-lg flex justify-center items-center">
                                <img src={dot} className='absolute top-[0.7rem] ml-7'></img>
                                <img src={bell} className="w-6 h-6 relative " ></img>
                            </div>
                            <img src={dp} className="w-12 h-12 rounded-xl" ></img>
                        </div>
                    </div>

                    <div className='flex w-full justify-between'>
                        <div className="text-black text-2xl font-medium font-Poppins ml-4 mt-4 ">Active Jobs</div>
                        <div className='flex gap-4 mt-2'>
                            <div className="md:w-36 md:h-12 w-24 h-10 bg-white rounded-lg border border-black flex items-center justify-center gap-1">
                                <div className="text-black md:text-base text-xs pl-4 font-medium font-['Poppins']">Active</div>
                                <Switch  />
                            </div>
                            <div className="md:w-40 w-24 md:h-12 h-10 pl-3 bg-black rounded-lg flex items-center justify-center cursor-pointer">
                                <div className="w-24 h-5 text-white md:text-base text-xs font-medium font-['Poppins'] " onClick={openModal}>Create Job </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <JobModal1 closeModal={closeModal} open={isModalOpen} />}
        </>
    )
}

export default Landing;
