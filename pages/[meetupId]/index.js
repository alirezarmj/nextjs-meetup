import MeetupDetail from '@/components/meetups/meetupDetail'
// import { connectDatabase } from '@/helper/db-util'
import axios from 'axios'
// import { ObjectId } from 'mongodb'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const MeetupDetails = () => {
  const router = useRouter()
  const { meetupId } = router.query;
  const [meetup, setMeetup] = useState(null)

  useEffect(() => {
    if (meetupId != null) {
      axios.get(`/api/${meetupId}`)
        .then(response => {
          setMeetup(response?.data?.meetup);
        })
        .catch(error => {
          toast.error(`${error.message}`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.error(error.message);
        });
    }

  }, [meetupId]);



  if (!meetup) {
    return <p className="min-h-screen text-center flex justify-center pt-10 text-2xl">Loading...</p>
  }


  return (
    <>
      {meetup && <MeetupDetail image={meetup.image} title={meetup.title} address={meetup.address}
        description={meetup.description} />}
    </>
    // <MeetupDetails/>
  )
}


// export async function getStaticPaths() {

//   const client = await connectDatabase();
//   const db = client.db();

//   const meetupsCollection = db.collection('meetups');
//   const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
//   client.close();
//   return {
//     paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } })),
//     fallback: true
//   }
// }

// export async function getStaticProps(context) {
//   const meetupId = context.params.meetupId;

//   const client = await connectDatabase();

//   const db = client.db();
//   const meetupsCollection = db.collection("meetups");
//   const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });
//   // if (!selectedMeetup) {
//   //   return {
//   //     redirect: {
//   //       destination: '/',
//   //       permanent: false,
//   //       // statusCode: 301
//   //     },
//   //   }
//   // }

//   // if(!selectedMeetup){
//   //   return { noFound: true } 
//   // }
//   await client.close();
//   return {
//     props: {
//       meetupData: {
//         id: selectedMeetup._id.toString(),
//         title: selectedMeetup.title,
//         image: selectedMeetup.image,
//         address: selectedMeetup.address,
//         description: selectedMeetup.description
//       }
//     },
//     revalidate: 60
//   }
// }


export default MeetupDetails