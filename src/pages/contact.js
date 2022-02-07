import React, { useState } from 'react'
import Layout from '../layout';
import { useDispatch } from 'react-redux'
import { post, clear } from './../features/Contacts'
import { useSelector } from 'react-redux'
import { Banner } from '../components/banner';

function Contact() {
    const contact = useSelector((state) => state.contact.value);
    // const { email, name, phone, type, msg } = contact/
    const [name, changeName] = useState(contact.name)
    const [email, changeEmail] = useState(contact.email)
    const [phone, changePhone] = useState(contact.phone)
    const [type, changeType] = useState(contact.type)
    const [msg, changeMsg] = useState(contact.msg)
    const dispatch = useDispatch()
    const data = { name, phone, email, type, msg }

    const submit = () => {
        try {
            // dispatch(post(data))
            dispatch(clear())
        } catch (error) {

        }
    }
    return (
        <Layout>
            <Banner bg="bg-contact"
                active="Contact-us"
                title="Contact Us"
                desc="Octagon Dynamics  is a 24hr support and open centre  ...."
            />

            <div className='md:px-20 px-10 pb-52 md:pb-10 pt-10 w-full   '>
                <div className="flex flex-wrap flex-row">
                    <div className='md:w-2/6 w-full bg-violet-100 py-4 px-10  flex justify-center items-center'>
                        <div >
                            <div className='flex justify-center items-center mb-10'>
                                <h1 className='md:text-4xl text-2xl font-bold '><span className='text-primary-600 '>Lets</span> <span>work</span> <span className='text-secondary-600 '>together</span></h1>

                            </div>

                            <div>
                                <p>We embrace the principle of developing an in-depth understanding of our client’s needs by keenly listening to their stories, needs and requirements. We listen to you and blend your needs, concerns and requirements.</p>
                            </div>
                            <div className='flex pt-4'>
                                <svg className="w-6 h-6 pr-2 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <span>+254722528123</span>
                            </div>
                            <div className='flex  pt-2'>
                                <svg className="w-6 h-6 pr-2 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>13th Floor Ambank House University Way</span>
                            </div>
                            <div className='flex pt-2'>
                                <svg className="w-6 h-6 pr-2 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span>info@octagondynamics.co.ke</span>
                            </div>
                            <div className='flex pt-2'>
                                <svg className="w-6 h-6 pr-2 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
                                <span>octagondynamics.co.ke</span>
                            </div>
                        </div>

                    </div>
                    <div className='md:w-4/6 w-full md:p-4 p-2'>
                        <div className='flex justify-center items-center md:text-3xl text-xl text-primary-600   py-10 '>We’d like to hear from you</div>
                        <div className="w-full px-10 ">
                            <div className="flex flex-wrap -mx-3  mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Name
                                    </label>
                                    <input name="name" value={name} onChange={(e) => changeName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane Doe" />

                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Email
                                    </label>
                                    <input name="email" value={email} onChange={(e) => changeEmail(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="example@gmail.com" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3  mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                        Phone
                                    </label>
                                    <input name="phone" onChange={(e) => changePhone(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="070000000000000" />

                                </div>

                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                        Type
                                    </label>
                                    <select name="type" onChange={(e) => changeType(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option value="General Enquiries">General Enquiries</option>
                                        <option value="Support">Support</option>

                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea name="msg" onChange={(e) => changeMsg(e.target.value)} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Type your message here ..." />
                                </div>

                            </div>
                            {contact.email}
                            <button onClick={submit} className="capitalize float-right hover:text-secondary-600 text-primary-600 focus:outline-none px-10 py-1 border-t border-l border-b border-primary-600 hover:border-secondary-600 order-l rounded-l-full border-r rounded-r-full flex flex-row">
                                submit
                            </button>
                        </div>
                    </div>

                </div>
                <div className='w-full '>
                    <iframe className='  border-0  w-full  mt-10' title="tua" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819948066695!2d36.81400351423287!3d-1.2817885359815337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d2596ebbd3%3A0x240069d06d95b6f9!2sAmbank%20House%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1643629746814!5m2!1sen!2ske" width="1000" height="450" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>

        </Layout>
    );
}

export default Contact;
