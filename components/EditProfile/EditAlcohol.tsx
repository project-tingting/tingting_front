import React from 'react';
import styled from 'styled-components';
import AlcoholRadioButton from './AlcoholRadioButton';
import { AlcoholData } from './context/providerData';
import { InputElementProps } from './types/input';

export default function EditAlcohol() {
  return (
    <fieldset>
      <Legend>음주여부</Legend>
      <RadioGroup>
        {AlcoholData.map((statusItem: InputElementProps) => (
          <AlcoholRadioButton key={statusItem.id} {...statusItem} />
        ))}
      </RadioGroup>
    </fieldset>
  );
}

const Legend = styled.legend`
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
`;

const RadioGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0.8rem;
`;
