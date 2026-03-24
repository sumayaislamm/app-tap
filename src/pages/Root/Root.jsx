import React, { Suspense } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loading/Loading';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
            <Footer></Footer>
        </div>
    );
};

export default Root;