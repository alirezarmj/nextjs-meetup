
import Image from 'next/image'

const MeetupDetail = (props) => {

  return (
    <section className='mx-auto p-4 '>
      <div className='max-w-[600px] mx-auto bg-white/60 rounded-md'>
        <div className='flex  flex-col items-center mt-8 gap-4  shadow-sm'>
          <Image className='object-cover w-full' src={props.image} width={300} height={200} alt={props.title} />
          <div className='p-2 text-center flex flex-col gap-4'>
            <h1 className='font-bold'>{props.title}</h1>
            <address>{props.address}</address>
            <p className='text-sm'>{props.description}</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default MeetupDetail