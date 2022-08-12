/* eslint-disable react-hooks/exhaustive-deps */
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { useAuthCtx } from '../../store/authContext';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import css from './AnswersPage.module.css';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import Button from '../../components/UI/Button/Button';
import { baseUrl, myDeleteAuth, myFetchAnswerAuth, myFetchAuth } from '../../utils';
import AnswerCard from '../../components/UI/AnswerCard/AnswerCard';

function AnswersPage() {
  const title = localStorage.getItem('title');
  const content = localStorage.getItem('content');
  const initValues = {
    title: title,
    content: content,
  };

  const [input, setIinput] = useState('');
  const [updatedTitleAndContent, setUpdatedTitleAndContent] = useState({ title, content });
  localStorage.removeItem('content');

  const { isUserLoggedIn } = useAuthCtx();
  const [answers, setAnswers] = useState('');
  const history = useHistory();
  const { token } = useAuthCtx();
  const { id } = useParams();

  async function getAnswers() {
    const fetchResult = await myFetchAnswerAuth(`${baseUrl}/api/questions/${id}/answers`);
    if (Array.isArray(fetchResult)) {
      setAnswers(fetchResult);
    }
  }

  async function deleteAnswer(id) {
    const fetchResult = await myDeleteAuth(`${baseUrl}/api/answers/${id}`, 'DELETE', token);
    if (fetchResult === 'Answer successfully deleted') {
      toast.success('Answer succesfully deleted!');
      getAnswers();
    }
    if (fetchResult === 'Answer delete fail') {
      toast.error('Failed to detele answer');
    }
    if (!token) {
      toast.error('This feature is only for registered users');
    }
  }

  function clearTextArea(event) {
    setIinput(event.target.value);
  }

  function handleClear() {
    setIinput('');
  }

  useEffect(() => {
    getAnswers(id);
  }, [id]);

  useEffect(() => {
    setUpdatedTitleAndContent({ title: localStorage.getItem('title', 'content') });
  }, [title, content]);

  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      content: Yup.string().min(5, 'At least 5 characters').max(500).required().nullable(),
    }),

    onSubmit: async (values, actions) => {
      const valuesCopy = { ...values };
      delete valuesCopy['title'];
      const insertResult = await myFetchAuth(
        `${baseUrl}/api/questions/${id}/answers`,
        'POST',
        token,
        valuesCopy
      );
      console.log('insertResult ===', insertResult);

      if (insertResult === 'Answer succesfully added!') {
        toast.success('Answer added!');
        getAnswers();
        actions.resetForm();
      }
      if (insertResult === 'Answer was not added!') {
        toast.error('Answer was not added!');
        return;
      }
    },
  });

  return (
    <div className={css['form-container']}>
      <h3 className={css['form-title']}>Get your answers</h3>
      <h2 className={css['dynamic-title']}>Question: {updatedTitleAndContent.title}</h2>

      <div className={css['answers-container']}>
        {!Array.isArray(answers) ? (
          <h2 className={css['loading']}>Loading...</h2>
        ) : answers.length === 0 ? (
          <div className={css['add-answer-error']}>
            <h2 className={css['answers-error']}>No answers found. Please add a new answer.</h2>
          </div>
        ) : (
          answers.length > 0 &&
          answers.map((aObj) => (
            <AnswerCard key={aObj.id} {...aObj} uId={id} onDelete={() => deleteAnswer(aObj.id)} />
          ))
        )}
      </div>

      <form
        onSubmit={(e) => {
          formik.handleSubmit(), handleClear(e);
        }}
        className={css['answer-form']}
      >
        <div className='form-group'>
          <label htmlFor='content'>Answer</label>
          <textarea
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.content}
            type='text'
            className={formik.touched.content && formik.errors.content ? css['invalid'] : ''}
            id='content'
            name='content'
            placeholder='Type your answer here...'
            value={undefined}
          />
          {formik.touched.content && formik.errors.content && (
            <p className={css['error-msg']}>{formik.errors.content}</p>
          )}
        </div>
        {isUserLoggedIn && (
          <Button className={css['add-answer-button']} submit primary>
            Add
          </Button>
        )}

        <NavLink to={'/questions'} className={css['nav-link']}>
          Back to questions
        </NavLink>
      </form>
    </div>
  );
}

export default AnswersPage;
