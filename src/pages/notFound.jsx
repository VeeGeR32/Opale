import React, {useEffect} from 'react';

const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className='flex w-full justify-center items-center h-[calc(100vh-535px)]'>
            <h1>404 Error</h1>
        </div>
    );
};

export default NotFound;