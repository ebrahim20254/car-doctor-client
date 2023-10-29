import person1 from '../../../assets/images/about_us/person.jpg'
import person2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 my-12">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className=' lg:w-1/2 relative'>
                    <img src={person1} className="max-w-xl rounded-lg shadow-2xl" />
                    <img src={person2} className="max-w-sm shadow-2xl absolute right-5 top-1/2 rounded-lg border-8 border-white" alt="" />
                    </div>
                    <div className=' w-1/2 space-y-6'>
                        <h3 className=' text-orange-600 font-bold text-xl'>About Us</h3>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn bg-[#FF3811]">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;