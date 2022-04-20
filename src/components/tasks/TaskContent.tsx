interface TaskContentProps {
  styles: string;
  title: string;
  isCompleted?: boolean;
}

export function TaskContent({ title, styles, isCompleted }: TaskContentProps) {
  return (
    <div>
      <div
        className={styles}
        style={{ textDecoration: isCompleted ? 'line-through' : '' }}>
        {title}
      </div>
    </div>
  );
}
