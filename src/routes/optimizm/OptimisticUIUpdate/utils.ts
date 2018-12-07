export interface CardState {
  avatar: string;
  username: string;
  fullName: string;
  body: string;
  isLiked: boolean;
  likeCount: number;
}

export const createOptimisticResponse = (state: CardState): CardState => {
  const nextIsLiked = !state.isLiked;
  const nextLikeCount = nextIsLiked
    ? parseInt((state as any).likeCount, 10) + 1
    : parseInt((state as any).likeCount, 10) - 1;

  return { ...state, isLiked: nextIsLiked, likeCount: nextLikeCount };
};

export const createResponse = (state: CardState, updated: Partial<CardState>): CardState => {
  return { ...state, ...updated };
};
