import { Banner, TitleContainer } from '../components/banner';
import Layout from '../layout';
import Vision from './../img/vision.jpg'
import Mision from './../img/about.jpg'
function Origin() {
    return (
        <Layout>

            <Banner bg="bg-about"
                level1="Company"
                active="About-us"
                title="About Us"
                desc="Octagon Dynamics  is  ...."
            />

            <div className='md:px-20 px-10 w-full pb-10 '>
                <div className="flex flex-wrap flex-row w-full">
                    <div className=' w-full '>
                        <div className='w-full border  border-dotted mt-10 border-primary-600  pr-4 h-80'>
                            <div className='py-10 px-10 flex'>
                                <div className=' text-xl text-gray-600'>
                                    <div className='flex flex-wrap'>
                                        <div className='w-1/5'>
                                            <img src={Mision} alt="" height={20} />
                                        </div>
                                        <p className='w-4/5 '>
                                            Octagon is a home of excellence
                                            comprising of highly skilled and motivated technology experts who help design, customize and deliver
                                            the relevant value and results to the client.


                                        </p>

                                    </div>
                                    <p className='pt-2 '> The results are meant to ensure sustainable business growth and continuity. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Origin;
