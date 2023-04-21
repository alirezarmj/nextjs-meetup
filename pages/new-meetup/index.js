import NewMeetupForm from '@/components/newMeetup.js/newMeetup-form'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'react-toastify'

const NewMeetup = () => {
  const router=useRouter()

  const addMeetupHandler = async (enteredMeetupData) => {

    try {
      const response = await axios.post('/api/new-meetup', enteredMeetupData)
      // console.log(response.data)
      router.push("/")
      toast.success('Meetup Added Successfully', {
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
    }
  }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  )
}

export default NewMeetup