export type Tasks = {
  id: number;
  title: string;
  completed: boolean;
};

export type CurrencyTaskProps = (
  callback: React.Dispatch<React.SetStateAction<boolean>>,
  task: Tasks
) => () => void;

export type ReturnTaskProps = (
  callback: React.Dispatch<React.SetStateAction<boolean>>,
  id: number
) => () => void;
