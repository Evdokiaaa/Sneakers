import React from "react";
import UiButton from "@/components/UI/Button";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrement, increment } from "@/store/cartSlice";
const ProductDetails = () => {
  const productInfo = [
    {
      id: 1,
      img: "src/assets/images/slider-image-1.jpg",
      company: "Sneaker Company",
      title: " Fall Limited Edition Sneakers",
      desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      discount: 50,
      oldPrice: 250,

      get price() {
        return this.oldPrice * (this.discount / 100);
      },
    },
  ];
  const counter = useSelector((state) => state.cart.totalCount);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addItem([...productInfo]));
  };
  return (
    <div className="product__details">
      <div className=" product__details-container">
        <h4 className="product__details-company">{productInfo[0].company}</h4>
        <h2 className="product__details-title">{productInfo[0].title}</h2>
        <p className="product__details-desc">{productInfo[0].desc}</p>
        <p className="product__details-price">
          ${productInfo[0].price}
          <span className="product__details-discount">
            {productInfo[0].discount}%
          </span>
        </p>
        <p className="product__details-price-old">${productInfo[0].oldPrice}</p>
        <div className="product__details-buttons">
          <div className="product__details-button">
            <svg
              className="minus"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="5"
              viewBox="0 0 12 5"
              fill="none"
              onClick={() => dispatch(decrement())}
            >
              <g clipPath="url(#clip0_228_8)">
                <path
                  d="M11.357 3.832C11.4414 3.83227 11.5251 3.81585 11.6031 3.78369C11.6812 3.75153 11.7522 3.70427 11.8119 3.64461C11.8717 3.58496 11.919 3.51409 11.9513 3.43607C11.9836 3.35806 12.0001 3.27443 12 3.19V1.143C12.0003 1.05849 11.9838 0.974757 11.9516 0.896626C11.9194 0.818494 11.872 0.747505 11.8123 0.687745C11.7525 0.627984 11.6815 0.580631 11.6034 0.548411C11.5252 0.51619 11.4415 0.499739 11.357 0.500003H0.643003C0.558489 0.499739 0.474757 0.51619 0.396626 0.548411C0.318494 0.580631 0.247505 0.627984 0.187745 0.687745C0.127984 0.747505 0.0806309 0.818494 0.0484107 0.896626C0.0161904 0.974757 -0.000260978 1.05849 3.13019e-06 1.143V3.189C3.13019e-06 3.546 0.287003 3.832 0.643003 3.832H11.357Z"
                  fill="#FF7E1B"
                />
              </g>
              <defs>
                <clipPath id="clip0_228_8">
                  <rect
                    width="12"
                    height="4"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="product__details-button-value">{counter}</span>
            <svg
              className="plus"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              //BRUHG
              onClick={() => dispatch(increment())}
            >
              <g clipPath="url(#clip0_228_370)">
                <path
                  d="M12 7.52301V5.47701C12.0003 5.3925 11.9838 5.30877 11.9516 5.23063C11.9194 5.1525 11.872 5.08151 11.8123 5.02175C11.7525 4.96199 11.6815 4.91464 11.6034 4.88242C11.5253 4.8502 11.4415 4.83375 11.357 4.83401H7.66701V1.14301C7.66728 1.05833 7.65076 0.974433 7.61842 0.89617C7.58607 0.817907 7.53854 0.746829 7.47857 0.687041C7.41859 0.627254 7.34737 0.579943 7.269 0.547841C7.19064 0.51574 7.10669 0.499484 7.02201 0.500013H4.97701C4.8925 0.499748 4.80877 0.5162 4.73063 0.54842C4.6525 0.58064 4.58151 0.627993 4.52175 0.687754C4.46199 0.747515 4.41464 0.818503 4.38242 0.896635C4.3502 0.974766 4.33375 1.0585 4.33401 1.14301V4.83301H0.643013C0.558329 4.83275 0.474433 4.84926 0.39617 4.88161C0.317907 4.91395 0.246829 4.96148 0.187041 5.02146C0.127254 5.08143 0.079943 5.15266 0.0478413 5.23102C0.0157396 5.30938 -0.000516362 5.39333 1.25014e-05 5.47801V7.52401C1.25014e-05 7.88001 0.287013 8.16701 0.643013 8.16701H4.33301V11.858C4.33301 12.214 4.62101 12.501 4.97701 12.501H7.02301C7.10753 12.5013 7.19126 12.4848 7.26939 12.4526C7.34752 12.4204 7.41851 12.373 7.47827 12.3133C7.53803 12.2535 7.58538 12.1825 7.6176 12.1044C7.64983 12.0263 7.66628 11.9425 7.66601 11.858V8.16801H11.357C11.4418 8.16828 11.5258 8.15173 11.6041 8.11932C11.6824 8.08692 11.7535 8.03929 11.8133 7.97921C11.8731 7.91914 11.9204 7.84779 11.9525 7.76931C11.9845 7.69083 12.0007 7.60678 12 7.52201V7.52301Z"
                  fill="#FF7E1B"
                />
              </g>
              <defs>
                <clipPath id="clip0_228_370">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <UiButton onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
