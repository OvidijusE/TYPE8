import AddButtonStyled from '../../UI/ButtonStyled/Button';
import { AddContainer, AddForm, FormInput } from './Styled';

const AddPageStyled = () => {
  return (
    <AddContainer>
      <h1>Add</h1>
      <AddForm>
        <label>Enter Number of People:</label>
        <FormInput type='number' placeholder='Number of People' />
        <label>Enter price</label>
        <FormInput type='number' placeholder='Price' step='0.01' />
        <AddButtonStyled />
      </AddForm>
    </AddContainer>
  );
};

export default AddPageStyled;
