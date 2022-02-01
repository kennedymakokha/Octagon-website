
import { MenuComponent } from './components/menu'
import FloatingWhatsApp from 'react-floating-whatsapp'
function Layout(props) {
    return (
        <div className="w-screen h-screen flex relative flex-col ">
            <div className=" relative z-0 w-full ">
                <div className="absolute inset-0 flex w-full  z-10">
                    <div className='flex flex-col'>
                        <MenuComponent />
                        <div className='w-full h-screen pb-20'>
                            {props.children}
                        </div>
                    </div>

                </div>
            </div>
            <div className='absolute bottom-10 right-10 '>
                <FloatingWhatsApp
                    phoneNumber="+254707717455"
                    accountName="Octagon Dynamics"
                    className="z-5"
                    chatMessage="Hello can we be of help"
                />
            </div>
        </div>

    );
}

export default Layout;
