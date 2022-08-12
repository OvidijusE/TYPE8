import Button from '../../UI/Button';
import css from './MedCard.module.css';

const MedCard = (props) => {
  return (
    <div className={css['med-card']}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <Button secondary onClick={() => props.onDelete(props.id)}>
        DELETE
      </Button>
    </div>
  );
};

export default MedCard;
