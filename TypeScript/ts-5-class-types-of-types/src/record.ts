// Record<Keys, Types>

type States = {
  loading?: boolean;
  error?: string;
  ready?: boolean;
};

type PosibleStateNumbers = 0 | 1 | 2;

// 0 === loading
// 1 === error
// 2 === ready

const result: Record<PosibleStateNumbers, States> = {
  0: { loading: true, ready: false },
  1: { error: 'something went wrong' },
  2: { ready: false },
};
