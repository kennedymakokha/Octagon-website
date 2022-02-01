import { Banner, TitleContainer } from '../components/banner';
import Image from "./../img/noimage.jpg"
import Layout from '../layout';



function Team() {

    function MemberCard(props) {

        return (
            <div className='md:w-1/4 w-screen '>
                <div className=" bg-white h-96 relative z-0 border-dotted shadow-2xl rounded-xl m-2 " >
                    <div className='h-3/4'>
                       <img src={Image} alt="" className=' h-full w-full  object-contain  rounded-b-xl ' />  
                    </div>
                   
                    <div className="absolute bg-white bottom-0 w-full h-1/4 z-10 rounded-t-xl  border-r border-l border-r-dotted border-t border-t-primary-600" >
                        <div className='flex justify-center items-center flex-col bg-white'>
                            <h3 className='text-2xl text-secondary-600'>{props.name}</h3>
                            <h3 className=' text-black-600'>{props.designation} </h3>
                            <button className="capitalize  hover:text-secondary-600 text-primary-600 focus:outline-none px-10 py-1 border-t border-l border-b border-primary-600 order-l rounded-l-full border-r rounded-r-full flex flex-row">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    return (
        <Layout>
            <Banner bg="bg-team"
                active="Team"
                title="Our Team"
                desc="Octagon Dynamics is made up of competent and self driven stuff."
            />
            <TitleContainer title="Our Team Members" />
            
            <div className="flex flex-wrap  md:px-20 px-10 w-screen">
                <MemberCard name="Devis" designation="Senior Manager" />
                <MemberCard name="John Kevin" designation="Marketing Manager" />
                <MemberCard name="Kennedy Makokha" designation="Developer" />
                <MemberCard name="Kenneth Rono " designation="Head Of ICT" />
            </div>

        </Layout>
    );
}

export default Team;
