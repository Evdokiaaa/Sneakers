import buttonIco from "@/assets/images/button-ico.svg";
import "./style.scss";
const UiButton = ({ onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      <img className="btn-img" src={buttonIco} alt="cart" />
      Add to cart
    </button>
  );
};

export default UiButton;
