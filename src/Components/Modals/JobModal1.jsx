// JobModal1.jsx
import React, { useState } from 'react';
import cancel from '../../assets/cancel.png';
import form from '../../assets/form.png';
import AddJob from './AddJob';
import JobDesModal from './JobDesModal';
import { Modal } from '@mui/material';

const JobModal1 = ({ open, onClose }) => {
    const [isAddJobModalOpen, setAddJobModalOpen] = useState(false);

    const openModal = () => {
        setAddJobModalOpen(true);
        console.log("2nd modal open");
    };

    const closeModal = () => {
        onClose(); // Close the JobModal1
    };

    const handleInnerDivClick = () => {
        //closeModal(); // Close the JobModal1 first
        openModal(); // Then open the AddJob modal
    };

    return (
        <>
            <Modal open={open} className='flex items-center justify-center'>
                <div className="w-[44rem] h-[21rem] bg-white rounded-[1.875rem] shadow-md relative">
                    <div className="text-black text-3xl font-Poppins mt-[2.88rem] flex justify-center">Create a Job</div>
                    <img src={cancel} className="w-7 h-7 absolute -mt-12 mb-14 ml-[41rem]" onClick={closeModal} alt="cancel" />
                    <div className="w-[42rem] h-[12rem] bg-slate-50 rounded-3xl mt-[1.81rem] flex justify-center ml-4">
                        <div id='inner-div' onClick={handleInnerDivClick} className="w-44 h-[9.5rem] bg-white rounded-xl border border-indigo-600 flex flex-col items-center justify-center mt-[1.3rem]">
                            <img src={form} className="w-14 h-14 relative mb-[1.06rem]" alt="form" />
                            <p className="text-indigo-600 text-md font-Poppins">Post Job With AI</p>
                        </div>
                    </div>
                </div>
            </Modal>

            {isAddJobModalOpen && <AddJob open={isAddJobModalOpen} Close={() => setAddJobModalOpen(false)} />}
        </>
    );
}

export default JobModal1;
