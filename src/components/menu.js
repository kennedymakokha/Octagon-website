
import MenuItem from './menuitem'
import Logo from './../img/logo.jpg'

export function MenuComponent() {
    return (
        <div className='w-full fixed bg-white'>
            <div className='flex  md:hidden py-4 px-10   justify-between '>
                <img src={Logo} className='w-28  pl-4  object-contain' alt='' />
                {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg> */}
                <MenuItem title=""
                    icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>}

                    subelements={[
                        {
                            "name": 'Home',
                            "path": "",
                            "icon": <svg className="w-5 h-5" fill="none" className='text-secondary-600' stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        },
                        {
                            "name": 'Company',
                            "path": "",
                            "icon": <svg className="w-5 h-5" fill="none" className='text-secondary-600' stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        },
                        {
                            "name": 'Consultancy',
                            "icon": <svg className="w-5 h-6" fill="none" className='text-secondary-600 hover:text-primary-600 ' stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        },
                        {
                            "name": 'Solutions',
                            "icon": <svg className="w-5 h-6" fill="none" className='text-secondary-600 hover:text-primary-600 ' stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        },
                        {
                            "name": 'Contact us',
                            "icon": <svg className="w-5 h-6" fill="none" className='text-secondary-600 hover:text-primary-600 ' stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        },
                    ]} />
            </div>
            <div className='flex-row w-screen hidden md:flex px-20 border-b-2 shadow-gray-600 border-secondary-600  '>
                <img src={Logo} className='w-36  pl-4 object-contain' alt='' />
                <div className='py-2  w-full flex-row flex '>
                    <MenuItem title="Home" rootpath="/" />
                    <MenuItem title="Company"
                        subelements={[
                            {
                                "name": 'About Us',
                                "path": "/about-us",
                                "icon": <svg className="w-5 h-5" fill="none" className='text-secondary-600' stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            },
                            {
                                "name": 'Our Team',
                                "path": "/our-team",
                                "icon": <svg className="w-5 h-5" fill="none" className='text-secondary-600' stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            },
                            {
                                "name": 'Our Mission',
                                "path": "/our-mission-vision",
                                "icon": <svg className="w-5 h-6" fill="none" className='text-secondary-600 hover:text-primary-600 ' stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            },
                        ]}
                    />
                    <MenuItem title="Consultancy"
                        subelements={[
                            {
                                "name": 'Project ',
                                "path": "/our-projects",
                                "icon": <svg className="w-5 h-5" fill="none" className='text-secondary-600' stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            },
                            {
                                "name": 'Audits',
                                "path": "",
                                "icon": <svg className="w-5 h-5" fill="none" className='text-secondary-600' stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            },
                            {
                                "name": 'Design ',
                                "icon": <svg className="w-5 h-6" fill="none" className='text-secondary-600 hover:text-primary-600 ' stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            },
                            {
                                "name": 'Implementaton ',
                                "icon": <svg className="w-5 h-6" fill="none" className='text-secondary-600 hover:text-primary-600 ' stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            },
                        ]}
                    />
                    <MenuItem title="Solutions"
                        childr={true}
                        subelements={[
                            { "name": 'Dynamic Grants Management', "icon": "" },
                            { "name": 'Digital Platforms for SACCOs ', "icon": "" },
                            { "name": 'Dynamic CRM', "icon": "" },
                            { "name": 'SACCO core Banking Solutions', "icon": "" }
                        ]}
                    />
                    <MenuItem title="Contact Us" rootpath="/contact-us" />
                </div>
            </div>
        </div>


    )
}