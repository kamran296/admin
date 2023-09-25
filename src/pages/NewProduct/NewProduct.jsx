import "./newProduct.css";
import { useState } from "react";
import axios from "axios";
export default function NewProduct() {
  const host = "http://localhost:5000";
  // const [file, setFile] = useState();
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const [content, setContent] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    price: "",
  });
  // const handleUpload = (e) => {
  //   e.preventDefault();
  //   console.log(file);
  // };
  const onChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${host}/api/v1/product/addProduct`, {
        method: "POST",
        // crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: content.title,
          description: content.description,
          image: image,
          category: content.category,
          price: content.price,
        }),
      });
      const json = await response.json();
      console.log(json, "hi");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(content, 124);
  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    console.log([...formData]);
    setUploading(true);
    try {
      const { data } = await axios.post(
        `${host}/api/v1/product/upload-image`,
        formData
      );
      setUploading(false);
      setImage({
        url: data.url,
        // public_id: public_id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(image);
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={handleImage}
            accept="images/*"
          />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input
            type="text"
            placeholder="Apple Airpods"
            name="title"
            value={content.title}
            onChange={onChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="Apple Airpods"
            name="description"
            value={content.description}
            onChange={onChange}
          />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <input
            type="text"
            placeholder="Apple Airpods"
            name="category"
            value={content.category}
            onChange={onChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            type="text"
            placeholder="123"
            name="price"
            value={content.price}
            onChange={onChange}
          />
        </div>

        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
