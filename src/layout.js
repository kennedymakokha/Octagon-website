


import { MenuComponent } from './components/menu'

function Layout(props) {
    return (
        <div class="w-screen h-screen  flex ">
            <div class=" relative z-0">
                <div class="absolute inset-0 flex  z-10">
                    <div className='flex flex-col'>
                        <MenuComponent />
                        <div className='w-full h-screen  pt-4'>
                            {props.children}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Layout;
