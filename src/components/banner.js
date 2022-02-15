import classNames from "classnames";


export function Banner(props) {
    const classStr = classNames(
        "w-screen md:w-full md:h-3/4 h-1/2 relative -z-10   bg-no-repeat object-cover  ",
        props.bg,

    );
    return (
        <div className={classStr}>
            <div className="absolute inset-0 flex justify-center items-center  t-0 l-0 bg-black h-full w-full opacity-75">
            </div>
            <div className='flex flex-col  justify-between h-full'>
                <div className="md:pt-28 pt-20 md:px-20 px-10   ">
                    <div className="flex ">
                        <h3 className=" capitalize md:text-5xl text-3xl text-secondary-600  z-50">{props.title}</h3>
                        <div className="flex  flex-col items-center justify-center pt-4 "><hr className=" h-1  md:w-52 w-36 " /></div>
                    </div>

                    <p className="md:p-10 p-2 text-white text-2xl absolute z-50">{props.desc}</p>
                </div>

                <div className='bg-gradient-to-r from-indigo-500 w-screen py-4 md:flex hidden absolute z-50 bottom-0'>
                    <div className='px-20 text-white font-bold'>
                        <span className='text-white font-bold '>Home</span> <span className='text-white font-bold'>Campany</span><span className='px-1 text-secondary-600'>|</span><span className='text-gray-400 font-medium italic '>{props.active}</span>
                    </div>
                </div>
            </div>

        </div>

    );
}

export function Homeslider(props) {
    console.log(props)
    const classStr = classNames(
        "w-screen md:w-full md:h-screen h-screen relative -z-10   bg-no-repeat object-cover ",
        props.bg,

    );
    return (
        <div className={classStr}>
            <div className="absolute inset-0 flex justify-center items-center z-50 t-0 l-0 bg-black h-full w-full opacity-20">
            </div>
            <div className='flex flex-col  justify-between h-full'>
                <div className="md:pt-20 pt-14 md:px-20 px-10 flex  h-4/5 inset-0  ">
                    <div className="md:w-1/2 w-5/6 md:h-5/6 h-1/2  relative -z-10 flex items-center justify-center rounded-full ">
                        <div className="absolute inset-0 flex justify-center items-center z-20 t-0 l-0 bg-white h-full w-full opacity-90">
                        </div>
                        <div className=" absolute   z-50">
                            <h3 className="text-center  md:text-5xl text-3xl md:pl-10 text-secondary-600">{props ? props.name : null}</h3>
                            <h2 className="text-center">{props ? props.desc : "keb=nne"}</h2>
                        </div>

                    </div>

                    {/* <div className="w-1/2  ">
                        <h3 className=" capitalize md:text-5xl text-3xl md:pl-10 text-secondary-600  z-50">{props ? props.name : null}</h3>
                    </div> */}

                </div>


            </div>


        </div>


    );
}

export function TitleContainer(props) {

    return (
        <div className="flex items-center justify-center p-4  ">
            <div className="text-3xl text-secondary-600   font-bold">
                {props.title}
            </div>
        </div>

    );
}

export function FooterTitle(props) {

    return (
        <div className=" border-r border-red-900 border-dotted h-full flex flex-col  ">
            <h2 className="text-2xl text-secondary-50 font-bold">{props.title}</h2>
            {props.items.map((item, i) => (
                <div className="flex pt-2">
                    <span className="pr-2 text-secondary-50">{item.icon ? item.icon : props.defIcon}</span>
                    <span>{item.value}</span>
                </div>
            ))}
        </div>
    );
}




