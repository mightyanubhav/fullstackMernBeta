import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidation } from '../helper/validate';


export default function Password() {

  const formik = useFormik({
    initialValues : {
      password : '',
      confirm_pwd : ''
    },
    validate : resetPasswordValidation,
    validateOnBlur : false,
    validateOnChange : false,
    onSubmit : async values =>{
      console.log(values);
    }
  });

  return (
    <div className='container mx-auto'>

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass} style={{width : '50%'}}>
            <div className='title flex flex-col items-center'>
              <h4 className='text-4xl font-bold'>Reset Password</h4>
              <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                Enter new Password !
              </span>
            </div>

            <form className='pt-20' onSubmit={formik.handleSubmit}>
              
              <div className='textbox flex flex-col items-center gap-6'>
                <input {...formik.getFieldProps('password')} className={styles.textbox} type='text' placeholder='New Password'/>
                <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type='text' placeholder='Confirm Password'/>
                <button className={styles.btn} type='submit'>Reset</button>
              </div>
              <div className='text-center py-4'>
                <span className='text-gray-500'>Forgot password ? <Link className='text-red-500' to='/recovery'>Recover Now</Link></span>
              </div>

            </form>
        </div>
      </div>
    </div>
  )
}
  