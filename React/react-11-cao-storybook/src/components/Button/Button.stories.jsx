import React from 'react';
import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
};

export const PrimaryButton = () => <Button>Login</Button>;
export const PrimaryButtonLongText = () => (
  <Button>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, reiciendis?</Button>
);
export const SecondaryButton = () => <Button variant='secondary'>Click me</Button>;

const Template = (args) => <Button {...args} />;

// funkcijos kopija
export const SecondaryButtonArgs = Template.bind({});
SecondaryButtonArgs.args = {
  variant: 'secondary',
  children: 'click me',
};
export const PrimaryButtonArgs = Template.bind({});
PrimaryButtonArgs.args = {
  variant: 'primary',
  children: 'click me',
};
