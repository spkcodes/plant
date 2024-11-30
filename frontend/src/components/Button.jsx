export const Button = ({ label, onClick }) => (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
    >
      {label}
    </button>
  );
  