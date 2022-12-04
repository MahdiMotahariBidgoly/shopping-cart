/** @format */
import './input.css'
const Input = ({ name, label, formik, type = 'text' }) => {
  return (
    <div className='formControl'>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        {...formik.getFieldProps(name)}
        name={name}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className='error'>{formik.errors[name]}</div>
      )}
    </div>
  )
}

export default Input
