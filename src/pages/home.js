
import { TitleContainer } from '../components/banner';
import Layout from '../layout';
import Kengen from './../img/products/kengen.jpg'
import Slider from "react-slick";
import AutoPlay from './slider';


function ClientCard(props) {

    return (
        <div className='md:w-1/3 w-screen ' >
            <div className=" bg-white h-5/6 min-h-5/6 relative group z-0 border-dotted shadow-2xl rounded-3xl mx-2  flex justify-center items-center flex-col " >
                <img src={Kengen} alt="" className='h-full flex group-hover:hidden' />
                <div class="absolute inset-0 flex  justify-center items-center flex-col   rounded-3xl bg-black group-hover:rounded-3xl  h-full w-full opacity-30 ">
                    <h3 className='text-red-600 text-xl text-center group-hover:flex  absolute -z-20 hidden'>{props.name}</h3>
                   
                </div>
            </div>
        </div>

    );
}

function Home() {
    const clientsArray = [
        { "avatar": "", "name": "Retta Solutions" },
        { "avatar": "", "name": "Uganda Acumen Sacco" },
        { "avatar": "", "name": "Mzedu Mzima Sacco" },
        { "avatar": "", "name": "Utafiti National Council For Population & Development(NCPD)" },
        { "avatar": "", "name": "Kuccps" },
        { "avatar": { Kengen }, "name": "KenGenSRBS" }
    ]

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <Layout>
            <div className='h-screen bg-home  relative  -z-20'>
                <div class="absolute inset-0 flex  justify-center items-center flex-col  z-50  rounded-3xl bg-black   h-full w-full opacity-30 ">
                    <div className='w-1/2 h-full bg-slate-700'>
                        kennedy
                    </div>
                </div>

            </div>
            <div className='mt-10'>
                <TitleContainer title="Our Clients" />
                <div className="flex flex-wrap  md:px-20 px-10 w-screen ">
                    {clientsArray.map((project, i) => (
                        <ClientCard name={project.name} desc={project.desc} key={i} />
                    ))}


                </div>
            </div>
            <div>
                {/* <AutoPlay /> */}
            </div>
        </Layout>
    );
}

export default Home;
