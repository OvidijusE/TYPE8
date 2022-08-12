import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthCtx } from '../../../store/authContext';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import css from './AnswerCard.module.css';

function AnswerCard(props) {
  const userId = useAuthCtx();
  const { isUserLoggedIn } = useAuthCtx();
  const [counterValue, setCounterValue] = useState(0);

  function handleCounterInc() {
    setCounterValue((prevState) => prevState + 1);
  }

  function handleCounterDec() {
    setCounterValue((prevState) => prevState - 1);
  }

  function handleAnswerValue() {
    localStorage.setItem('content', props.content);
  }

  return (
    <div>
      <div className={css['card']}>
        <p className={css['content']}>{props.content}</p>
        <div className={css['like-dislike']}>
          <div className={css['like-container']}>
            <span className={css['arrow-up']}>
              <button className={css['like-button']} onClick={handleCounterInc}>
                <Icon icon='fa-arrow-circle-o-up' />
              </button>
              <p>Like</p>
            </span>
          </div>

          <p className={css['counter-value']}>{counterValue}</p>

          <div className={css['dislike-container']}>
            <span className={css['arrow-down']}>
              <button className={css['dislike-button']} onClick={handleCounterDec}>
                <Icon icon='fa-arrow-circle-o-down' />
              </button>
              <p>Dislike</p>
            </span>
          </div>
        </div>

        <article className={css['created-edited-deleted']}>
          <div>
            <p className={css['created']}>
              <i>Created at:</i>
              {props.created_at.split('T').join(' ').split('.000Z')}
            </p>

            <p className={css['edited']}>
              {props.edited_at && (
                <i>Edited at:{props.edited_at?.split('T').join(' ').split('.000Z')}</i>
              )}
            </p>
          </div>

          <div className={css['delete-edit']}>
            {+userId.userId === props.user_id && isUserLoggedIn && (
              <Button button secondary onClick={() => props.onDelete(props.id)}>
                Delete
              </Button>
            )}

            <NavLink to={`/editAnswer/${props.id}`}>
              {+userId.userId === props.user_id && isUserLoggedIn && (
                <Button button primary onClick={handleAnswerValue}>
                  Edit
                </Button>
              )}
            </NavLink>
          </div>
        </article>
      </div>
    </div>
  );
}

export default AnswerCard;
