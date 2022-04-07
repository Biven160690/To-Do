interface TaskBoxProps {
  children: React.ReactNode;
}
export function TaskBox({ children }: TaskBoxProps) {
  return <div>{children}</div>;
}
