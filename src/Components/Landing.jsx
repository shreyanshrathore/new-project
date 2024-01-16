import React, { useState } from 'react';
import JobModal1 from './Modals/JobModal1';
import AddJob from './Modals/AddJob';
import JobDesModal from './Modals/JobDesModal';
import IntProcesModal from './Modals/IntProcesModal';
import LeftNavbar from '../utils/LeftNavbar';

const Landing = () => {
    const [isModalOpen, setModalOpen] = useState(true);


    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const [datas, setData] = useState({});

    return (
        <>
            <div className='flex bg-yellow-100'>
                <LeftNavbar className='flex-nowrap' />
                <h1>Skillgenic</h1>
                <div className='flex justify-end'>
                    <button className='bg-yellow-500 text-green-950 p-1 mr-7 ' onClick={openModal}>Post job</button>
                </div>
            </div>
            {/* //{isModalOpen && <JobModal1  onClose={closeModal} open={isModalOpen}/>} */}
            {/* {isModalOpen && <AddJob datas = {datas} setData = {setData} onClose={closeModal} open={isModalOpen} />} */}
            {isModalOpen && <JobDesModal datas = {datas} setData = {setData} onClose={closeModal} open={isModalOpen}/>}
            {/* {isModalOpen && <IntProcesModal data = {datas} setData = {setData} onClose={closeModal} open={isModalOpen} />} */}
        </>
    )
}

export default Landing