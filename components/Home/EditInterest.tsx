import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from './EditMbti';
import Keyword, { interestData } from '../Keyword';
import { SelectedKeyword, Hr } from './EditMbti';
import SaveButton from './SaveButton';

export default function EditInterest() {
  const [count, setCount] = useState(0);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (count > 3) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  });

  const handleOnClicked = (onclick: boolean, text: string) => {
    if (onclick) {
      setCount(count - 1);
      setKeywords(keywords.filter((keyword) => keyword !== text));
    } else {
      setCount(count + 1);
      setKeywords([...keywords, text]);
    }
  };
  return (
    <Container>
      <div>
        {keywords.length !== 0 && (
          <>
            <SelectedKeywords>
              {keywords.map((keyword) => (
                <SelectedKeyword key={keyword}>{keyword}</SelectedKeyword>
              ))}
            </SelectedKeywords>
            <Hr />
          </>
        )}
        <Keywords>
          {interestData.map((text) => (
            <Keyword key={text} text={text} onClicked={handleOnClicked} />
          ))}
        </Keywords>
      </div>
      <SaveButton disabled={disabled} />
    </Container>
  );
}

const SelectedKeywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const Keywords = styled.div`
  margin-top: 2rem;
`;
