interface TaskContentProps {
  text: string;
}
export function TaskContent({ text }: TaskContentProps) {
  return <div>{text}</div>;
}
