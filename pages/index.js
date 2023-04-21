import MeetupList from "@/components/meetups/meetupList"
import { connectDatabase, getDataofDB } from "@/helper/db-util"

// const DUMMY_LIST = [
//   {
//     id: 'm1',
//     title: 'A first Meetup',
//     // image: "/images/montain1.jpg",
//     image:"https://images.unsplash.com/photo-1548588627-f978862b85e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udGFpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//     address: "some address 5, 12345 some city",
//     description: "This is a first meetup"
//   },
//   {
//     id: 'm2',
//     title: 'A second Meetup',
//     // image: "/images/montain2.jpg",
//     image:"https://images.unsplash.com/photo-1548588627-f978862b85e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udGFpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//     address: "some address 5, 12345 some city",
//     description: "This is a second meetup"
//   },
//   {
//     id: 'm3',
//     title: 'A third Meetup',
//     // image: "/images/montain3.jpg",
//     image:"https://images.unsplash.com/photo-1548588627-f978862b85e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udGFpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//     address: "some address 5, 12345 some city",
//     description: "This is a third meetup"
//   },
// ]
const HomePage = (props) => {
  if (!props.meetups) {
    return <p className="p-8 text-2xl mx-auto text-center">Loading...</p>
  }
 
  return (
    <>
    {props.meetups.length>0 ?( <MeetupList meetups={props.meetups} />): (<p className='text-center text-indigo-500 mx-auto w-fit text-3xl font-bold p-4 rounded-md bg-gray-300 mt-8 '>Empty Meetup List</p>)}
   
    </>
  )
}
//I Can use getStaticProps with revalidate...
export async function getServerSideProps() {
  //Fetch data from API
  try {
    const client = await connectDatabase();
    if (!client) {
      return { noFound: true }
    }
    const meetups = await getDataofDB(client);
   await client.close();
    return {
      props: {
        meetups: meetups?.map(meetup => ({
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
          description: meetup.description,
          id: meetup._id.toString()
        }))
      }    
    }
  } catch (error) {
    return { notFound: true };

  }
 }



export default HomePage