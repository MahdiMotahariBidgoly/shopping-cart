/** @format */

import Input from '../../common/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './login.css'
import { Link } from 'react-router-dom'
const initialValues = {
  email: '',
  password: ''
}
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invali Email Format')
    .required('email is Required'),
  password: Yup.string().required('password is Required')
})
const LoginAuthentication = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true
  })
  return (
    <div className='loginConatiner'>
      <form>
        <Input formik={formik} name='email' label='Email' type='email' />
        <Input
          formik={formik}
          name='password'
          label='Password'
          type='password'
        />
        <div className='sub'>
          <button
            style={{ width: '100%' }}
            type='submit'
            disabled={!formik.isValid}
            className='btn primary'
          >
            Login
          </button>
          <Link to='/signup'>
            <p className='Notsignup'>Not signup yet?</p>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginAuthentication
