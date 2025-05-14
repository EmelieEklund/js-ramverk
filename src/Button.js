

const Button = ({ text, onClick }) => {
  return (
    <button className="btn btn-outline-primary" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;