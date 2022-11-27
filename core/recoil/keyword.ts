import { atom, selector } from 'recoil';

interface keyword {
  clicked: boolean;
}

export const keyword = atom<keyword[]>({
  key: 'keyword',
  default: [],
});

export const onKeywordSelector = selector({
  key: 'onKeywordSelector',
  get: ({ get }) => {
    const keywordList = get(keyword);
    const onKeyword = keywordList.filter((v) => v.clicked);
    return onKeyword;
  },
});
