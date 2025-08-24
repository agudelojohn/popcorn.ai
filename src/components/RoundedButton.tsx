interface IRoundedButtonProps {
  text: string;
  selected?: boolean;
  onClick?: () => void;
}
const RoundedButton = ({ text, selected = false, onClick }: IRoundedButtonProps) => {
  return (
    <button
      className={`rounded-full text-white px-4 py-2 transition duration-200 hover:scale-105 ${
        selected ? "bg-blue-600" : "bg-gray-600"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default RoundedButton;
