import React from 'react';
import { PrimaryButton } from '../Button/Button.stories';

import { EmailInput, PasswordInput } from '../Input/Input.stories';

export default {
  title: 'Form/Login',
};

export const LoginForm = () => (
  <form>
    <EmailInput />
    <PasswordInput />
    <PrimaryButton />
  </form>
);
