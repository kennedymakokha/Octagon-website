import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Banner, TitleContainer } from '../components/banner';
import Layout from '../layout';

function ErpElement(props) {

    const { state } = useLocation();

    useEffect(() => (
        console.log(state)
    ))
    return (
        <Layout>
            <Banner
                level1="Products & Services"
                level2="ERP"
                bg="bg-vision"
                active={state.replace(/\s/g, "")}
                title={`${state}`}
           
            />
            <TitleContainer title={state} />
            <div className='md:px-20 px-10 w-full pb-10 '>
                <div className="flex flex-wrap flex-row w-full">

                </div>
            </div>
        </Layout>

    );
}

export default ErpElement;