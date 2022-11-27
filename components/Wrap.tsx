import styled from 'styled-components';

export const Wrap = styled.div`
  max-width: 140rem;
  padding: 0 2em;
  @media ${({ theme }) => theme.size.mobile} {
    padding: 0 1.6rem;
  }
`;
