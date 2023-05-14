interface AccountCircleIconProps {
  size?: number;
  className?: string;
}
export const AccountCircleIcon = ({
  size,
  className,
}: AccountCircleIconProps) => {
  const fontSize = `${size || 24}px`;
  return (
    <div
      className={`items-center justify-center flex h-fit ${className || ''}`}
    >
      <i
        className="material-icons-outlined cursor-pointer"
        style={{ fontSize: fontSize }}
      >
        account_circle
      </i>
    </div>
  );
};
