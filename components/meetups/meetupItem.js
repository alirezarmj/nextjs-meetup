import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'


const MeetupItem = ({ title, id, image, address }) => {
    const router = useRouter()

    const handleDeleteMeetup = async (id) => {
        try {
            const response = await axios.delete(`/api/${id}`)
           
            router.push("/")
            toast.success('Meetup Deleted Successfully', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

        } catch (error) {
            toast.error('Oops,something went wrong, Please try again later', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            // console.log(error.request.status)
        }

    }


    return (
        <div className='lg:w-[400px] md:w-[300px] w-[220px] mx-auto flex flex-col justify-center items-center gap-4 shadow-xl'>
            <Image priority={false} src={image} className="object-cover w-full" width={200} height={200} alt={title} />
            <h1 className='text-lg font-bold' >{title}</h1>
            <p className='italic text-sm'>{address}</p>
            <div className='flex justify-between items-center gap-4 p-2 w-fit'>
                <Link href={`/${id}`} className='px-2 text-xs md:text-sm py-1 border border-rose-500 rounded-md text-rose-700 whitespace-nowrap'>Show Details</Link>
                <button onClick={() => handleDeleteMeetup(id)} className='px-2 text-xs md:text-sm py-1  border border-rose-500 rounded-md text-rose-700 whitespace-nowrap'>Delete Meetup</button>
            </div>
        </div>
    )
}

export default MeetupItem