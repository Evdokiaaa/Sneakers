import ProductDetails from "@/components/ProductDetails";
import ImageSlider from "@/components/ImageSlider";
import "./style.scss";
const Product = () => {
  return (
    <main className="main">
      <div className="main__container container ">
        <ImageSlider />
        <ProductDetails />
      </div>
    </main>
  );
};

export default Product;
