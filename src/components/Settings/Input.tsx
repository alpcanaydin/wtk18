import React, { FormEvent } from 'react';

import styled from '../../theme';

import Label from './Label';

const Input = styled.input`
  width: 100%;
  height: 3.375rem;
  padding: 0.4375rem 0;
  font-size: 1.125rem;
  line-height: 2.375rem;
  background-image: none;
  border-style: solid;
  color: ${props => props.theme.titleColor};
  border-color: #eaeaea;
  border-width: 0 0 2px;
  font-family: ${props => props.theme.secondaryFontFamily};
  outline: none;

  &:focus {
    border-color: #afb6be;
  }
`;

interface Props {
  label: string;
  value: string | number;
  onChange: (value: any) => void;
}

const SettingsInput = ({ label, value, onChange }: Props) => (
  <div>
    <Label>{label}</Label>
    <Input
      type="text"
      value={value}
      onChange={(event: FormEvent<HTMLInputElement>) => {
        const inputValue = (event as any).target.value;
        onChange(inputValue);
      }}
    />
  </div>
);

export default SettingsInput;
