import css from './RegisterForm.module.css';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { myFetch } from '../../utils';
import { useContext } from 'react';
import { AuthContext } from '../../store/authContext';

const initValues = {
  email: '',
  password: '',
  repeatPassword: '',
};
function RegisterForm() {
  const { register } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Patikrinkite savo email').required(),
      password: Yup.string().min(4, 'Maziausiai 4 simboliai').max(7).required(),
      //   repeatPassword: Yup.string().min(4, 'Maziausiai 4 simboliai').max(7).required(),
      // oneOf
    }),
    onSubmit: async (values) => {
      const result = await myFetch('https://reqres.in/api/register', 'POST', values);
      if (!result.token) {
        console.log('cannot register');
        return;
      }

      register(result.token);
      console.log('result ===', result);

      console.log('submiting values ===', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        className={formik.touched.email && formik.errors.email ? css.errorInput : ''}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        name='email'
        type='text'
        placeholder='Your email'
      />
      {formik.touched.email && formik.errors.email && (
        <p className={css.errorMsg}>{formik.errors.email}</p>
      )}
      <input
        className={formik.touched.password && formik.errors.password ? css.errorInput : ''}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        name='password'
        type='password'
        placeholder='Your password'
      />
      {formik.touched.password && formik.errors.password && (
        <p className={css.errorMsg}>{formik.errors.password}</p>
      )}
      <input
        className={
          formik.touched.repeatPassword && formik.errors.repeatPassword ? css.errorInput : ''
        }
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.repeatPassword}
        name='repeatPassword'
        type='password'
        placeholder='Repeat password'
      />
      {formik.touched.repeatPassword && formik.errors.repeatPassword && (
        <p className={css.errorMsg}>{formik.errors.repeatPassword}</p>
      )}
      <button type='submit'>Register</button>
    </form>
  );
}

export default RegisterForm;
