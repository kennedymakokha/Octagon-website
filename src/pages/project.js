import { Banner, TitleContainer } from '../components/banner';

import Layout from '../layout';
import React, { useState } from 'react';



function Project() {

    const ProjectsArray = [

        {
            "name": "Dynamics Human Resources",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius est ante, eu varius augue dignissim eu. Donec ullamcorper a erat cursus mattis. Praesent eget viverra orci. Aliquam at libero a lectus tristique interdum. Suspendisse accumsan eget orci at venenatis. Etiam varius erat diam, imperdiet volutpat urna auctor a. Etiam sodales libero nec risus facilisis volutpat."

        },
        {
            "name": "Dynamics Payroll",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius est ante, eu varius augue dignissim eu. Donec ullamcorper a erat cursus mattis. Praesent eget viverra orci. Aliquam at libero a lectus tristique interdum. Suspendisse accumsan eget orci at venenatis. Etiam varius erat diam, imperdiet volutpat urna auctor a. Etiam sodales libero nec risus facilisis volutpat."

        },
        {
            "name": "Dynamics Procurement",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius est ante, eu varius augue dignissim eu. Donec ullamcorper a erat cursus mattis. Praesent eget viverra orci. Aliquam at libero a lectus tristique interdum. Suspendisse accumsan eget orci at venenatis. Etiam varius erat diam, imperdiet volutpat urna auctor a. Etiam sodales libero nec risus facilisis volutpat."

        },
        {
            "name": " Dynamics BOSA",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius est ante, eu varius augue dignissim eu. Donec ullamcorper a erat cursus mattis. Praesent eget viverra orci. Aliquam at libero a lectus tristique interdum. Suspendisse accumsan eget orci at venenatis. Etiam varius erat diam, imperdiet volutpat urna auctor a. Etiam sodales libero nec risus facilisis volutpat."

        }
        ,
        {
            "name": "Dynamics FOSA",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius est ante, eu varius augue dignissim eu. Donec ullamcorper a erat cursus mattis. Praesent eget viverra orci. Aliquam at libero a lectus tristique interdum. Suspendisse accumsan eget orci at venenatis. Etiam varius erat diam, imperdiet volutpat urna auctor a. Etiam sodales libero nec risus facilisis volutpat."

        }
        ,
        {
            "name": "Dynamics Credit Management",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius est ante, eu varius augue dignissim eu. Donec ullamcorper a erat cursus mattis. Praesent eget viverra orci. Aliquam at libero a lectus tristique interdum. Suspendisse accumsan eget orci at venenatis. Etiam varius erat diam, imperdiet volutpat urna auctor a. Etiam sodales libero nec risus facilisis volutpat."

        }
        ,
        {
            "name": "Dynamics Grants Management ",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius est ante, eu varius augue dignissim eu. Donec ullamcorper a erat cursus mattis. Praesent eget viverra orci. Aliquam at libero a lectus tristique interdum. Suspendisse accumsan eget orci at venenatis. Etiam varius erat diam, imperdiet volutpat urna auctor a. Etiam sodales libero nec risus facilisis volutpat."

        },
        {
            "name": "Dynamics Academic Management",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius est ante, eu varius augue dignissim eu. Donec ullamcorper a erat cursus mattis. Praesent eget viverra orci. Aliquam at libero a lectus tristique interdum. Suspendisse accumsan eget orci at venenatis. Etiam varius erat diam, imperdiet volutpat urna auctor a. Etiam sodales libero nec risus facilisis volutpat."

        },
        {
            "name": "Dynamics Manufacturing",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius est ante, eu varius augue dignissim eu. Donec ullamcorper a erat cursus mattis. Praesent eget viverra orci. Aliquam at libero a lectus tristique interdum. Suspendisse accumsan eget orci at venenatis. Etiam varius erat diam, imperdiet volutpat urna auctor a. Etiam sodales libero nec risus facilisis volutpat."

        },
        {
            "name": "Dynamics Property Management",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius est ante, eu varius augue dignissim eu. Donec ullamcorper a erat cursus mattis. Praesent eget viverra orci. Aliquam at libero a lectus tristique interdum. Suspendisse accumsan eget orci at venenatis. Etiam varius erat diam, imperdiet volutpat urna auctor a. Etiam sodales libero nec risus facilisis volutpat."

        },
        {
            "name": "Dynamics Investment",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius est ante, eu varius augue dignissim eu. Donec ullamcorper a erat cursus mattis. Praesent eget viverra orci. Aliquam at libero a lectus tristique interdum. Suspendisse accumsan eget orci at venenatis. Etiam varius erat diam, imperdiet volutpat urna auctor a. Etiam sodales libero nec risus facilisis volutpat."

        },
        {
            "name": "Dynamics  Logistics",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius est ante, eu varius augue dignissim eu. Donec ullamcorper a erat cursus mattis. Praesent eget viverra orci. Aliquam at libero a lectus tristique interdum. Suspendisse accumsan eget orci at venenatis. Etiam varius erat diam, imperdiet volutpat urna auctor a. Etiam sodales libero nec risus facilisis volutpat."

        },
        {
            "name": " Dynamics Legal Management",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius est ante, eu varius augue dignissim eu. Donec ullamcorper a erat cursus mattis. Praesent eget viverra orci. Aliquam at libero a lectus tristique interdum. Suspendisse accumsan eget orci at venenatis. Etiam varius erat diam, imperdiet volutpat urna auctor a. Etiam sodales libero nec risus facilisis volutpat."

        },
        {
            "name": "Dynamics Security Management",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius est ante, eu varius augue dignissim eu. Donec ullamcorper a erat cursus mattis. Praesent eget viverra orci. Aliquam at libero a lectus tristique interdum. Suspendisse accumsan eget orci at venenatis. Etiam varius erat diam, imperdiet volutpat urna auctor a. Etiam sodales libero nec risus facilisis volutpat."

        },
        {
            "name": " Dynamics  Warehousing",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius est ante, eu varius augue dignissim eu. Donec ullamcorper a erat cursus mattis. Praesent eget viverra orci. Aliquam at libero a lectus tristique interdum. Suspendisse accumsan eget orci at venenatis. Etiam varius erat diam, imperdiet volutpat urna auctor a. Etiam sodales libero nec risus facilisis volutpat."

        },
        {
            "name": "Dynamics Hotel Management",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius est ante, eu varius augue dignissim eu. Donec ullamcorper a erat cursus mattis. Praesent eget viverra orci. Aliquam at libero a lectus tristique interdum. Suspendisse accumsan eget orci at venenatis. Etiam varius erat diam, imperdiet volutpat urna auctor a. Etiam sodales libero nec risus facilisis volutpat."

        },
        {
            "name": " Dynamics Project Management",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius est ante, eu varius augue dignissim eu. Donec ullamcorper a erat cursus mattis. Praesent eget viverra orci. Aliquam at libero a lectus tristique interdum. Suspendisse accumsan eget orci at venenatis. Etiam varius erat diam, imperdiet volutpat urna auctor a. Etiam sodales libero nec risus facilisis volutpat."

        }

    ]

    const [showModal, setShowModal] = useState(false);
    const [project, setProject] = useState({});

    const OpenModal = (data) => {
        setProject(data)
        setShowModal(true)
    }
    function ProjectCard(props) {

        return (
            <div className='md:w-1/3 w-screen ' onClick={() => OpenModal(props)}>
                <div className=" bg-white h-32 relative z-0 border-dotted shadow-2xl rounded-xl m-2  flex justify-center items-center flex-col" >
                    <div className=' bg-slate-500 h-10 w-10 justify-center items-center flex rounded-full'>
                        <svg className=" text-white w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                    </div>
                    <h3 className='text-primary-600 text-xl'>{props.name}</h3>

                </div>
            </div>

        );
    }
    return (
        <Layout>
            <Banner bg="bg-project"
                active="Projects"
                title="Our Projects"
                desc="Octagon Dynamics  has  stuff."
            />
            <TitleContainer title="Our Projects" />

            <div className="flex flex-wrap  md:px-20 px-10 w-screen">
                {ProjectsArray.map((project, i) => (
                    <ProjectCard name={project.name} desc={project.desc} key={i} />
                ))}


            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {project.name}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        {project.name} is {project.desc}
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </Layout>
    );
}

export default Project;
