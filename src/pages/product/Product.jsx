import { Publish } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import "./product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Edit Product</h1>
        <Link to="/newproduct" className="link">
          <button className="productTitleButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Lord Shiva</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">4353</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="lord shiva" />
            <label htmlFor="">In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoi5gn7sDCRKx0ny-t_gnYHvggi6lfyOUK6GTqOcrK2A&usqp=CAU&ec=48600113"
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input
                type="file"
                name=""
                id="file"
                style={{ display: "none" }}
              />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
