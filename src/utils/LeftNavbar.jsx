import React, { useState } from 'react'

const LeftNavbar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        setCollapsed(!collapsed);
    };
    const handleToggleOpen = () => {
        setCollapsed(false);
    };
    return (
        <>
            {/* Navbar left */}
            <div className={`w-full  sm:w-56 md:w-1/4 lg:w-1/5 xl:w-1/6 h-screen bg-black flex flex-col ${(collapsed === false) ? 'block' : 'hidden'}`}>


                <div className='flex ml-[1.2rem] mt-[1.5rem]'>
                    <button onClick={handleToggleCollapse} className='flex flex-row'>

                        <div className="text-white text-xs sm:text-sm ml-2  -mt-[0.001rem] font-work-sans leading-relaxed tracking-[0.0175rem]">Collapse</div>
                    </button>
                </div>

            </div>
            <div className={`ml-[1rem] mt-[1.5rem] ${(collapsed === true) ? 'block' : 'hidden'}`}>
                {/* ... content for collapsed navbar ... */}
                <div className="w-14 h-screen lg:w-24 origin-top-left bg-blue-500 flex flex-col" >

                    <div onClick={handleToggleOpen} className='flex ml-1 mt-1 items-center'>
                        <p>open</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LeftNavbar