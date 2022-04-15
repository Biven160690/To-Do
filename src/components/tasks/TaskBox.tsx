interface TaskBoxProps {
  styles: string;
  children: React.ReactNode;
}

export function TaskBox({ children, styles }: TaskBoxProps) {
  return <div className={styles}> {children} </div>;
}
