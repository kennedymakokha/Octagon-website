
import { MenuComponent } from './components/menu'
import FloatingWhatsApp from 'react-floating-whatsapp'

function Layout(props) {
    return (
        <div className="w-screen h-screen flex relative flex-col ">
            <div className=" relative z-10 w-full ">
                <div className="">
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
