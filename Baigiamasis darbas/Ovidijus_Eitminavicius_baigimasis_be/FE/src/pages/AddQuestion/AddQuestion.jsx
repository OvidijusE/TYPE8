import AddForm from '../../components/AddForm/AddForm';

import css from './AddQuestion.module.css';

function AddQuestion() {
  return (
    <div className={css['questions-container']}>
      <AddForm />
    </div>
  );
}

export default AddQuestion;
