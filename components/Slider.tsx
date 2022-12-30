type Slide = {
    href?: string
    image: string
}
type Props = {
    slides: Slide[]
}
const Slider = (props: Props) => {

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-3 relative">
                {/* style="scroll-snap-type: x mandatory;"*/}
                <div className="w-96 mx-auto">
                    <div>
                        <input className="sr-only peer" type="radio" name="carousel" id="carousel-1" checked/>
                        {/*content #1*/}
                        <div
                            className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                            <img className="rounded-t-lg w-96 h-64"
                                 src="https://images.unsplash.com/photo-1628788835388-415ee2fa9576?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80"
                                 alt=""/>
                            <div className="py-4 px-8">
                                <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">Lorem
                                    ipsum dolor sit amet consectetur adipisicing.
                                </h1>
                                <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">Lorem ipsum dolor, sit
                                    amet
                                    consectetur adipisicing elit.
                                </p>
                            </div>
                            {/*controls*/}
                            <div className="absolute top-1/2 w-full flex justify-between z-20">
                                <label htmlFor="carousel-3"
                                       className="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </label>
                                <label htmlFor="carousel-2"
                                       className="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/*second*/}
                    <div className="">
                        <input className="sr-only peer" type="radio" name="carousel" id="carousel-2"/>
                        {/*content #2*/}
                        <div
                            className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                            <img className="rounded-t-lg w-96 h-64"
                                 src="https://images.unsplash.com/photo-1628191139360-4083564d03fd?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80"
                                 alt=""/>
                            <div className="py-4 px-8">
                                <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                                    Scelerisque eleifend donec pretium vulputate sapien.
                                </h1>
                                <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">Egestas diam in arcu
                                    cursus euismod
                                    quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod
                                    quis.
                                </p>
                            </div>
                            {/*controls*/}
                            <div className="absolute top-1/2 w-full flex justify-between z-20">
                                <label htmlFor="carousel-1"
                                       className="inline-block text-blue-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </label>
                                <label htmlFor="carousel-3"
                                       className="inline-block text-blue-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/*three*/}
                    <div className="">
                        <input className="sr-only peer" type="radio" name="carousel" id="carousel-3"/>
                        {/*content #3*/}
                        <div
                            className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                            <img className="rounded-t-lg w-96 h-64"
                                 src="https://images.unsplash.com/photo-1628718120482-07e03fe361dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80"
                                 alt=""/>
                            <div className="py-4 px-8">
                                <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                                    Consectetur purus ut faucibus pulvinar elementum.
                                </h1>
                                <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">Aliquam ultrices
                                    sagittis orci a
                                    scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis
                                    magna etiam
                                    tempor orci eu lobortis elementum.
                                </p>
                            </div>
                            {/*controls*/}
                            <div className="absolute top-1/2 w-full flex justify-between z-20">
                                <label htmlFor="carousel-2"
                                       className="inline-block text-yellow-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </label>
                                <label htmlFor="carousel-1"
                                       className="inline-block text-yellow-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Slider;