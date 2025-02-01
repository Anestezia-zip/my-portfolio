const Button = ({ name, isBeam = false, containerClass }) => {
    return (
      <button className={`btn ${containerClass}`}>
        {isBeam && (
          <span className="relative flex h-3 w-3">
            <span className="btn-ping bg-green-400"></span>
            <span className="btn-ping_dot bg-green-300"></span>
          </span>
        )}
        {name}
      </button>
    );
  };
  
  export default Button;