import './Button.scss';

const Button = (props) => {
  return (
    <button className='btn-main' type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
