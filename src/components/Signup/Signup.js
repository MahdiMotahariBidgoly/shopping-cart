/** @format */
import Input from '../../common/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './signup.css'
import { Link } from 'react-router-dom'
import { signupUser } from '../../services/signupService'
const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  password: '',
  passwordConfirm: ''
}
// const onSubmit = values => {
//   console.log(values)
//   // console.log({ ...values, newData: '6 may 1995' })
//   // axios
//   //   .post('http://localhost:3001/users', values)
//   //   .then(res => console.log(res.data))
//   //   .catch(err => console.log(err))
// }
const validationSchema = Yup.object({
  name: Yup.string()
    .required('name is Required')
    .min(6, 'Name length is not valid'),
  email: Yup.string()
    .email('Invali Email Format')
    .required('email is Required'),
  phoneNumber: Yup.string()
    .required('phoneNumber is Required')
    .matches(/^[0-9]{11}$/, 'Invalid Phone Number')
    .nullable(),
  password: Yup.string().required('password is Required'),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
  // ),
  passwordConfirm: Yup.string()
    .required('password Confirmation is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const SignupForm = () => {
  const onSubmit = async (e, values) => {
    e.preventDefault()
    const { name, email, phoneNumber, password } = values
    const userData = {
      name,
      email,
      phoneNumber,
      password
    }
    try {
      const { data } = await signupUser(userData)
      console.log(data)
    } catch (error) {
      console.log(error.response)
    }
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true
  })
  return (
    <div className='formConatiner'>
      <form>
        <Input formik={formik} name='name' label='Name' />
        <Input formik={formik} name='email' label='Email' type='email' />
        <Input
          formik={formik}
          name='phoneNumber'
          label='Phone Number'
          type='tel'
        />
        <Input
          formik={formik}
          name='password'
          label='Password'
          type='password'
        />
        <Input
          formik={formik}
          name='passwordConfirm'
          label='Password confirm'
          type='password'
        />
        <div className='sub'>
          <button
            formik={formik}
            style={{ width: '100%' }}
            type='submit'
            disabled={!formik.isValid}
            className='btn  primary'
          >
            submit
          </button>
          <Link to='./login'>
            <p className='AlreadyLogin'>Already login?</p>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignupForm
