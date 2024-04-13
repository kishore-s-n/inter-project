import { Link } from 'react-router-dom';

const Button = ({ to, children }) => {
  return (
    <Link to={to} className="bg-gradient-to-r from-blue-500 to-slate-300  text-white px-4 py-2 rounded-md min-w-[300px] text-center">
      {children}
    </Link>
  );
};

export default Button;
