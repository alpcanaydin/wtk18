import React, { FormEvent } from 'react';

import styled from '../../theme';

import Label from './Label';

const Select = styled.select`
  width: 100%;
  height: 3.375rem;
  padding: 0.4375rem 0;
  font-size: 1.125rem;
  line-height: 2.375rem;
  background-image: none;
  background-color: transparent;
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
  value: boolean;
  onChange: (value: any) => void;
}

const SettingsToggle = ({ label, value, onChange }: Props) => (
  <div>
    <Label>{label}</Label>
    <Select
      value={value ? 'yes' : 'no'}
      onChange={(event: FormEvent<HTMLSelectElement>) => {
        const inputValue = event.currentTarget.value;
        onChange(inputValue === 'yes');
      }}
    >
      <option value="yes">Evet</option>
      <option value="no">Hayır</option>
    </Select>
  </div>
);

export default SettingsToggle;
