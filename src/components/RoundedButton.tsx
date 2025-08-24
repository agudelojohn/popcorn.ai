interface IRoundedButtonProps {
  text: string;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}
const RoundedButton = ({
  text,
  selected = false,
  onClick,
  disabled = false,
}: IRoundedButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`text-white rounded-full px-4 py-2 transition duration-200 hover:${
        disabled ? null : "scale-105"
      } ${selected ? "bg-blue-600" : "bg-gray-600"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default RoundedButton;
