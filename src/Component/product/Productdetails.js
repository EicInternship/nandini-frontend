import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./produactdetailsstayle.css";
import CartContext from "../../context/CartContex";
import { FaMinus, FaPlus } from "react-icons/fa";
import { UserService } from "../../service/UserService";

function Productdetails() {
  const params = useParams();
  const [productDetails, setproductDetails] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [amount, setAmount] = useState(1);
  const stock = 10;
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  // console.log(params.id);
  useEffect(() => {
    UserService.getdetailsofProduct(params.id).then((res) => {
      setproductDetails(res.data);
      console.log(res.data);
      console.log(productDetails.pname);
    });
  }, []);
  return (
    <div>
      <div class="main-wrapper">
        <div class="container">
          <div class="product-div">
            <div class="product-div-left">
              <div class="img-container">
                <img
                  src={`http://localhost:9020/image/${productDetails.pimagename}`}
                  alt="Card image"
                />
              </div>
            </div>
            <div class="product-div-right">
              <span class="product-name">{productDetails.pname}</span>
              <span class="product-price">Rs {productDetails.price}</span>
              <div class="product-rating">
                <span>
                  <i class="fas fa-star"></i>
                </span>
                <span>
                  <i class="fas fa-star"></i>
                </span>
                <span>
                  <i class="fas fa-star"></i>
                </span>
                <span>
                  <i class="fas fa-star"></i>
                </span>
                <span>
                  <i class="fas fa-star-half-alt"></i>
                </span>
                <span>(350 ratings)</span>
              </div>
              <p class="product-description">{productDetails.description}</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button
                  onClick={() => setDecrease()}
                  style={{ marginRight: "8px" }}
                >
                  <FaMinus style={{ margin: "5px", alignItems: "center" }} />
                </button>

                <div className="amount-style">{amount}</div>

                <button
                  onClick={() => setIncrease()}
                  style={{ marginLeft: "8px" }}
                >
                  <FaPlus
                    style={{
                      margin: "5px",
                      alignItems: "center",
                    }}
                  />
                </button>
              </div>
              <div class="btn-groups">
                <button
                  type="button"
                  class="add-cart-btn"
                  onClick={() => {
                    addToCart(productDetails, amount);
                  }}
                  style={{ backgroundColor: "#9C27B0" }}
                >
                  <i class="fas fa-shopping-cart"></i>
                  <b>Add to cart</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Productdetails;
