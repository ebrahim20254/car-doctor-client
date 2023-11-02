import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const BookService = () => {
    const service = useLoaderData();
    // console.log(service);
    const { title, _id, price, img} = service;
    const {user} = useContext(AuthContext)

    const handleBookService = event =>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email.value;
        const booking ={
            customerName : name,
            email,
            img,
            date,
            service: title,
            service_id : _id,
            price: price

        }
        console.log(booking);

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('booking successfully')
            }
        })
    }
    return (
        <div>
        <h3 className=" text-4xl text-center">Book Services:{title}</h3>
            <form onSubmit={handleBookService} >
               <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" defaultValue={user?.DisplayName} name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">date</span>
                    </label>
                    <input type="date" name="date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} name="email"className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due amount</span>
                    </label>
                    <input type="text"  defaultValue={'$' +  price} className="input input-bordered" required />
                </div>
               </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Order Conform" />
                </div>
            </form>
    </div>
    );
};

export default BookService;