interface TaskContentProps {
  styles: string;
  text: string;
}

export function TaskContent({ text, styles }: TaskContentProps) {
  return <div className={styles}> {text} </div>;
}
