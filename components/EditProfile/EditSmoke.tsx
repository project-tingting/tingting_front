import React from 'react';
import styled from 'styled-components';
import { smoke } from './context/providerData';
import SmokeRadioButton from './SmokeRadioButton';
import { InputElementProps } from './types/input';

export default function EditSmoke() {
  return (
    <fieldset>
      <Legend>흡연선호</Legend>
      <RadioGroup>
        {smoke.map((statusItem: InputElementProps) => (
          <SmokeRadioButton key={statusItem.id} {...statusItem} />
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
