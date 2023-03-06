import React from 'react';
import styled from 'styled-components';

type EditTitleProps = {
  title: string;
};

export default function EditTitle({ title }: EditTitleProps) {
  return <Title>{title}</Title>;
}

const Title = styled.h2`
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
`;
