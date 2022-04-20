export type Tasks = {
  id: number;
  title: string;
  completed: boolean;
};

export type SelectedTaskProps = (
  task: Tasks
) => (callback: React.Dispatch<React.SetStateAction<boolean>>) => void;

export type ReturnTaskProps = (id: number) => () => void;
