
import { Homeslider, TitleContainer } from '../components/banner';
import Layout from '../layout';
import Trust from './../img/trust.jpg'
import Slider from "react-slick";
import { SlidercomponentArray, clientsArray } from './../data'
import { Settings, SliderSettings } from '../config/sliderSettings';



function ClientCard(props) {
    return (
        <div className='h-48  mb-10' >
            <div className=" bg-white h-full   relative group z-0 shadow-2xl rounded-3xl mx-2   flex justify-center items-center flex-col " >
                <img src={props.avatar} alt="" className='h-5/6 object-contain' />
            </div>
        </div>

    );
}


function Home() {



    return (
        <Layout>
            <Slider {...SliderSettings}>
                {SlidercomponentArray.map((project, i) => (
                    <Homeslider
                        name={project.title}
                        bg={project.avatar}
                        desc={project.desc}
                        key={i} />
                ))}
            </Slider>
            {/* <Homeslider /> */}

            <div className='h-5/6 px-20 py-10  bg-zinc-300'>
                <div className='flex w-full  '>
                    <div className=' md:w-1/2 w-full md:p-20 p-0 flex justify-center items-center flex-col text-center'>
                        <h3 className='text-4xl '>
                            <span className='text-primary-600'>Octagon</span> <span className='text-secondary-600'>Dynamics</span> are trusted across Africa,
                            with over 13 years experience.
                        </h3>
                        <p className='text-xl'> In today’s world, delivering a great customer experience is essential in differentiating your business and building loyalty with your customers.</p>
                    </div>
                    <div className=' md:w-1/2 w-full md:px-4 px-0 hover:scale-105  md:flex hidden'>
                        <img src={Trust} className="md:flex hidden" alt="" />
                    </div>
                </div>
            </div>
            <div className=' '>
                <TitleContainer title="Our Clients" />
                <Slider {...Settings}>
                    {clientsArray.map((project, i) => (
                        <ClientCard name={project.name} avatar={project.avatar} key={i} />
                    ))}
                </Slider>
            </div>
        </Layout>
    );
}

export default Home;
