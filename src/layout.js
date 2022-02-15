
import { MenuComponent } from './components/menu'
import FloatingWhatsApp from 'react-floating-whatsapp'
import { FooterTitle } from './components/banner';
import Logo from './img/logo.jpg'

function Layout(props) {
    return (
        <div className="w-screen h-screen flex relative flex-col ">
            <div className=" relative z-10 w-full ">
                <div className="">
                    <div className='flex flex-col'>
                        <MenuComponent />
                        <div className='w-full h-screen pb-20'>
                            {props.children}
                            <div className='h-1/2  w-full  flex flex-wrap px-20 bg-gray-200 text-primary-600'>
                                <div className='w-1/3 h-full flex justify-center items-center '>
                                    <img src={Logo} alt="" />
                                </div>
                                <div className='w-1/3 h-full p-10 '>
                                    <FooterTitle
                                        title="About Us"
                                        last={true}
                                        defIcon={<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>}
                                        items={[
                                            {
                                                // icon: <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>,
                                                value: "About Octagon Dynamics",
                                                link: ""
                                            },
                                            {
                                                // icon: <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>,
                                                value: "Our Mission",
                                                link: ""
                                            },
                                            {
                                                // icon: <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd"></path></svg>,
                                                value: "Our Vision",
                                                link: ""
                                            },
                                            // {
                                            //     icon: <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>,
                                            //     value: "13th Floor Ambank House University Way",
                                            //     link: ""
                                            // }
                                        ]}
                                    />

                                </div>
                                <div className='w-1/3 h-full p-10  '>
                                    <FooterTitle
                                        title="Contact Us"
                                        last={true}
                                        items={[
                                            {
                                                icon: <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>,
                                                value: "0716017221",
                                                link: ""
                                            },
                                            {
                                                icon: <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>,
                                                value: "info@octagondynamics.co.ke",
                                                link: ""
                                            },
                                            {
                                                icon: <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd"></path></svg>,
                                                value: "octagondynamics.co.ke",
                                                link: ""
                                            },
                                            {
                                                icon: <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>,
                                                value: "13th Floor Ambank House University Way",
                                                link: ""
                                            }
                                        ]}
                                    />

                                </div>


                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className='absolute bottom-10 right-10 '>
                <FloatingWhatsApp
                    phoneNumber="+254722528123"
                    avatar="/img/logo.jpg"
                    statusMessage="An Octagon Assistant will text back ASAP"
                    accountName="Octagon Dynamics"
                    className=" absolute z-50"
                    chatMessage="Hello can we be of help"
                />
            </div>

        </div>

    );
}

export default Layout;
