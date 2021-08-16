import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja valido.', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={EMAIL_USER} />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument()
})

test('Testando um componente, caso o email seja vazio.', () => {
  const EMAIL_USER = '';
  render(<ValidEmail email={EMAIL_USER} />);
  const isValid = screen.getByText('Valor:');
  expect(isValid).toBeInTheDocument()
})

test('Testando um componente, Caso valor seja invalido muda cor pra Red.', () => {
  const EMAIL_USER = '';
  render(<ValidEmail email={EMAIL_USER} />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toHaveStyle({color: 'red'});
})

test('Testando um componente, Caso valor seja valido muda cor pra green.', () => {
  const EMAIL_USER = 'dfasdfa@dfasdfa.com';
  render(<ValidEmail email={EMAIL_USER} />);
  const isValid = screen.getByText('Email Valido');
  expect(isValid).toHaveStyle({color: 'green'});
})
