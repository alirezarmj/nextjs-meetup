import { useRef } from "react"
import { useFormik } from 'formik';
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    image: Yup.string().url('Please enter a valid URL').required("Required"),
    address: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
});
const initialValues = {
    title: "",
    image: "",
    address: "",
    description: "",
}

const NewMeetupForm = (props) => {
    const onSubmit = values => {
        props.onAddMeetup(values)
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })


    // const titleRef = useRef();
    // const imageRef = useRef();
    // const addressRef = useRef();
    // const descriptionRef = useRef();

    // const formHandler = (e) => {
    //     e.preventDefault();
    //     const enteredTitle = titleRef.current.value;
    //     const enteredImage = imageRef.current.value;
    //     const enteredAddress = addressRef.current.value;
    //     const enteredDescription = descriptionRef.current.value;
    //     const formData = {
    //         title: enteredTitle,
    //         image: enteredImage,
    //         address: enteredAddress,
    //         description: enteredDescription
    //     }
    //     props.onAddMeetup(formData)
    // }

    const submitDisabled = Object.keys(formik.errors).length > 0 || !formik.dirty;

    return (
        <section className="max-w-[600px] bg-slate-700 mx-auto mt-10  rounded-md">
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4  px-4 py-4 shadow-sm rounded-md  bg-white/30 ">
                <div className="flex flex-col">
                    <label htmlFor="title" className="font-bold">Meetup Title</label>
                    <input {...formik.getFieldProps("title")} name="title"  className="rounded-md py-1 px-2 outline-none " type="text" id="title" />
                    {formik.errors.title && formik.touched.title && <p className="text-red-500 text-sm pt-1">{formik.errors.title}</p>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="image" className="font-bold">Meetup Image Link</label>
                    <input {...formik.getFieldProps("image")} name="image"  className="rounded-md py-1 px-2 outline-none " type="text" id="imageUrl" />
                    {formik.errors.image && formik.touched.image && <p className="text-red-500 text-sm pt-1">{formik.errors.image}</p>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="address" className="font-bold">Address</label>
                    <input {...formik.getFieldProps("address")} name="address"  className="rounded-md py-1 px-2 outline-none " type="text" id="address" />
                    {formik.errors.address && formik.touched.address && <p className="text-red-500 text-sm pt-1">{formik.errors.address}</p>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description" className="font-bold">Description</label>
                    <textarea {...formik.getFieldProps("description")} name="description"  className="rounded-md resize-none py-1 px-2 outline-none  " rows={5} type="text" id="description" />
                    {formik.errors.description && formik.touched.description && <p className="text-red-500 text-sm pt-1">{formik.errors.description}</p>}
                </div>
                <button disabled={submitDisabled} type="submit" className={submitDisabled ? "px-4 py-1 bg-red-800/30 text-white ml-auto rounded-md" : "px-4 py-1 bg-red-800 text-white ml-auto rounded-md"}>Add Meetup</button>
            </form>
        </section>
    )
}

export default NewMeetupForm