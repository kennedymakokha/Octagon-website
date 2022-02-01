import { Banner, TitleContainer } from '../components/banner';
import Layout from '../layout';
import Vision from './../img/vision.jpg'
import Mision from './../img/mission.jpg'
function Mission() {
    return (
        <Layout>
            <Banner bg="bg-vision"
                active="Misssion & Vision"
                title="Our Mission and Vision"
                desc="Octagon Dynamics  is  ...."
            />
            <TitleContainer title="Our Mission and Vision" />
            <div className='md:px-20 px-10 w-full pb-10 '>
                <div className="flex flex-wrap flex-row w-full">
                    <div className='md:w-1/2 w-full '>
                        <div className='w-full border  border-dotted border-primary-600  pr-4 h-80'>
                            <h3 className='text-2xl text-primary-600 flex items-center justify-center pt-10 underline '>Our  Vison</h3>
                            <div className='py-10 flex'>
                                <img src={Vision} alt="" />
                                <div className='flex justify-center items-center'>
                                    <p className='text-xl text-gray-600'>
                                        To be most reliable, trusted and revered digital solutions provider globally.
                                    </p>
                                </div>

                            </div>


                        </div>
                    </div>
                    <div className='md:w-1/2 w-full '>
                        <div className='w-full   border-dotted border-primary-600 border-r border-t border-b  h-80 pr-4'>
                            <h3 className='text-2xl text-primary-600 flex items-center justify-center pt-10 underline '>Our  Vison</h3>
                            <div className='py-10 flex'>
                                <img src={Mision} alt="" />
                                <div className='flex justify-center items-center'>
                                    <p className='text-xl text-gray-600'>
                                        To empower businesses by providing custom made tech solutions for seamless operations.
                                    </p>
                                </div>

                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
}

export default Mission;
