import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-row justify-center text-center m-20">
            <span className="loading loading-spinner loading-lg"></span>
            <p className="mx-3">Loading.....</p>
        </div>
    );
};

export default Loading;