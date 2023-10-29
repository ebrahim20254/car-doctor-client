import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[700px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.] flex items-center  bottom-0 left-0 top-0">
                        <div className=' w-1/2 ml-12 space-y-4'>
                            <h2 className=' text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                            <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='my-4'>
                                <button className="btn btn-warning mr-6">Warning</button>
                                <button className="btn btn-outline btn-primary">Primary</button>
                            </div>
                        </div>
                        <div className=''>
                            <a href="#slide3" className="btn btn-circle m-6">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.] flex items-center  bottom-0 left-0 top-0">
                        <div className=' w-1/2 ml-12 space-y-4'>
                            <h2 className=' text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                            <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='my-4'>
                                <button className="btn btn-warning mr-6">Warning</button>
                                <button className="btn btn-outline btn-primary">Primary</button>
                            </div>
                        </div>
                        <div className=''>
                            <a href="#slide1" className="btn btn-circle m-6">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.] flex items-center  bottom-0 left-0 top-0">
                        <div className=' w-1/2 ml-12 space-y-4'>
                            <h2 className=' text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                            <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='my-4'>
                                <button className="btn btn-warning mr-6">Warning</button>
                                <button className="btn btn-outline btn-primary">Primary</button>
                            </div>
                        </div>
                        <div className=''>
                            <a href="#slide2" className="btn btn-circle m-6">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;