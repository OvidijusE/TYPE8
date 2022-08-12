import MyButton from '../MyButton/MyButton';
import styled from 'styled-components';
import { ActiveBtn, Btn, Card, CardInfo, CheckBox, Image, MyDate, Text, Title } from './styled';
import { useState } from 'react';

const StyledMyBtn = styled(MyButton)`
  text-transform: uppercase;
  display: block;
`;

function CardStyled() {
  const [isLoggedIn, setIsLoogedIn] = useState(false);
  function changeLogState() {
    setIsLoogedIn((prevState) => !prevState);
  }

  return (
    <Card>
      <Image src='./assets/newyork.jpg' alt='card header' />
      <CardInfo>
        <CheckBox />
        <Title>New York {isLoggedIn.toString()}</Title>
        <Title dark={isLoggedIn}>New York</Title>
        <MyDate>Fri 27 Nov 2016</MyDate>
        <h2 className='subtitle'>I am h2</h2>
        <Text>
          Lorem ipsum dolor sit amet <span>consectetur adipisicing</span> elit. Reprehenderit,
          suscipit.
        </Text>
        <Text color='coral'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, suscipit.
        </Text>
        <Btn onClick={changeLogState}>Buy tickets</Btn>
        <ActiveBtn onClick={changeLogState}>Active btn</ActiveBtn>
        <StyledMyBtn onClick={changeLogState}>More tickets</StyledMyBtn>
      </CardInfo>
    </Card>
  );
}

export default CardStyled;
