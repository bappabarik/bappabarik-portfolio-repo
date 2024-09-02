import React, { useState, useEffect } from 'react';

const Commits = ({commits}) => {
    const [timeStamp, setTimeStamp] = useState('')

    function formatDateTime(dateTime){
        const created = new Date(dateTime);

        const options = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true 
        };

        const formattedDate = created.toLocaleDateString('en-US', options);
        setTimeStamp(formattedDate)
    }

    useEffect(() => {
        formatDateTime(commits.commit.committer.date)
    }, [commits]);
    
    return (
        <div>
            <p className=' text-purple-400'>{commits.commit.message}</p>
            {" "}
            <span className='text-sm text-slate-500'>{timeStamp}</span>
        </div>
    );
}

export default Commits;
