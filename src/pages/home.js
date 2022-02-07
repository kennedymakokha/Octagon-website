
import { TitleContainer } from '../components/banner';
import Layout from '../layout';
import Kengen from './../img/products/kengen.jpg'
import Kccup from './../img/products/Kuccps.png'
import Mzendu from './../img/products/mzedu.jpg'
import Ncpb from './../img/products/ncpd.jpg'
import Acuman from './../img/products/acumen.png'
import Rata from './../img/products/rettajpg.jpg'
import Utafiti from './../img/products/utafiti.png'
import Slider1 from './../img/sliderimages/slider1.png'
import Trust from './../img/trust.jpg'
import Slider from "react-slick";
import { ResponseSettings, Settings } from '../config/sliderSettings';



function ClientCard(props) {
    return (
        <div className='h-48  mb-10' >
            <div className=" bg-white h-full   relative group z-0 shadow-2xl rounded-3xl mx-2   flex justify-center items-center flex-col " >
                <img src={props.avatar} alt="" className='h-5/6 object-contain' />
            </div>
        </div>

    );
}
function ServiceCard(props) {
    return (
        <div className='  h-screen w-full my-10  flex justify-center items-center flex-row'>
            <div className="flex flex-wrap  md:px-20 px-10 w-full ">
                <div className='md:w-1/3 w-full h-5/6' >
                    <div className="  h-screen relative z-0 border-dotted rounded-xl flex justify-center items-center flex-col" >
                        <h3 className='text-primary-600 text-5xl font-bold'>{props.title}</h3>

                    </div>
                </div>
                <div className='md:w-2/3 w-full h-screen ' >
                    <div className="  h-full flex   rounded-tl-3xl" >
                        <img src={props.avatar} className='h-full w-full object-contain rounded-full ' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
const Services = [
    {
        title: 'Dynamic CRM',
        desc: 'Open Endless opportunities with Dynamics 365 CRM',
        avatar: Kengen,
    },
    {
        title: 'SACCO CORE banking solution ',
        desc: 'Grow your SACCO today with simpler solutions',
        avatar: Acuman,
    },
    {
        title: 'Dynamic grands Management',
        desc: '',
        avrata: ''
    },
    {
        title: 'Digital platforms fro SACCOs',
        desc: 'Taje control of your SACCO operations today',
        avrata: ''
    }

]

function Home() {

    const clientsArray = [
        { "avatar": Rata, "name": "Retta Solutions" },
        { "avatar": Acuman, "name": "Uganda Acumen Sacco" },
        { "avatar": Mzendu, "name": "Mzedu Mzima Sacco" },
        { "avatar": Utafiti, "name": "Utafiti National Council For Population & Development(NCPD)" },
        { "avatar": Kccup, "name": "Kuccps" },
        { "avatar": Ncpb, "name": "NCPB" },
        { "avatar": Kengen, "name": "KenGenSRBS" }
    ]

    return (
        <Layout>
            <div className='h-screen  relative min-w-screen  z-90  '>
                <Slider {...ResponseSettings}>
                    {Services.map((project, i) => (
                        <ServiceCard title={project.title} avatar={project.avatar} key={i} />
                    ))}


                </Slider>
            </div>
            <div className='h-5/6 px-20 py-10  bg-zinc-300'>
                <div className='flex w-full  '>
                    <div className=' w-1/2 p-20 flex justify-center items-center flex-col text-center'>
                        <h3 className='text-4xl '>
                            <span className='text-primary-600'>Octagon</span> <span className='text-secondary-600'>Dynamics</span> are trusted across Africa,
                            with over 13 years experience.
                        </h3>
                        <p className='text-xl'> In today’s world, delivering a great customer experience is essential in differentiating your business and building loyalty with your customers.</p>
                    </div>
                    <div className=' w-1/2 px-4 hover:scale-105 '>
                        <img src={Trust} alt="" />
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
