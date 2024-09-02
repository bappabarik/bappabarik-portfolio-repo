import React from 'react';

const SkillsComp = ({name, className = ""}) => {
    return (
        <div className={`p-[3px] bg-gradient-to-r from-[#DBA6F4] to-[#A981FE] rounded-full flex items-center justify-center ${className}`}>
            <div className="bg-black p-1 rounded-full w-full">
                <h1 className="md:text-xl text-lg font-bold bg-gradient-to-r from-[#AAFF82] to-[#FFE597] bg-clip-text text-transparent">{name}</h1>
            </div>
        </div>
    );
}

export default SkillsComp;
