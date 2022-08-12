import css from './LoginForm.module.css';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { myFetch } from '../../utils';
import { useContext } from 'react';
import { AuthContext } from '../../store/authContext';

const initValues = {
  // email: '',
  email: 'eve.holt@reqres.in',
  password: 'asdf',
};
function LoginForm(props) {
  const { login } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Patikrinkite savo email').required(),
      password: Yup.string().min(4, 'Maziausiai 4 simboliai').max(7).required(),
    }),
    onSubmit: async (values) => {
      // fetch or axios https://reqres.in/api/login
      // ir iskonsolinti atsakyma
      const result = await myFetch('https://reqres.in/api/login', 'POST', values);
      if (!result.token) {
        console.log('klaida');
        return;
      }
      //   klaidos nera
      //   login() is kontexto ir paduosim i token
      login(result.token);
      console.log('result ===', result);
      props.onSuccessLogin();
      console.log('submiting values ===', values);
    },
  });
  //   console.log('formik.touched ===', formik.touched);
  //   console.log('formik.errors ===', formik.errors);
  //   console.log('formik.values ===', formik.values);

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
      <button type='submit'>Login</button>
    </form>
  );
}

export default LoginForm;
