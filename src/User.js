import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";

function User() {
  const [activeCategory, setActiveCategory] = useState("Mobiles");
  const navigate = useNavigate();

  const data = {
    Mobiles: [
      { name: "iPhone 14", price: "79,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zQq5A13ymgMeBYnfzGH3XuNCyH2Nj2LJLg&s" },
      { name: "iPhone 13", price: "69,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxcn70VSjWqmw74pzx4pGa89qSHQbD1tbcA&s" },
      { name: "iphone", price: "45,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSk2qCk3z8hthLTEfAXnI4m7TKLgadZp3ILg&s" },
      { name: "Samsung 45", price: "32,999", img: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a546ezkcins/gallery/in-galaxy-a54-5g-sm-a546-sm-a546ezkcins-537239792?$624_624_PNG$" },
      { name: "Galaxy S21", price: "49,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZrPgjddPMuHP_Z-wFX6d5RnZrH7qTVUCKg&s" },
      { name: "Vivo S1 Pro", price: "19,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdmxt5RA1yeCynmMJuIWgbNp9AsBQm550PA&s" },
      { name: "Oppo A54", price: "17,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oChBhUuZmyzPt-PclzRkThtslIFBxU1Dvg&s" },
      { name: "OnePlus 11", price: "56,999", img: "https://m.media-amazon.com/images/I/61amb0CfMGL.jpg" },
      { name: "Mi 11X", price: "24,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOBbUtjoI-BgfCG9WWomD-qrAdXxppCwpKw&s" },
      { name: "Realme C25", price: "11,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIfDm5A2ShxQXamSTb_J58UBGvRjV4OfIZw&s" },
      { name: "Galaxy A14", price: "14,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqLe7Cd3BupS6_AdJTn6fu9aZzzHmL9kT-w&s" },
      { name: "Vivo Y20", price: "10,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaea4DC-gjJrVSyjEg0GmkLfqet20RMHEdQ&s" },
    ],

    Electronics: [
      { name: "Laptop", price: "55,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLqMkvqduNgoKh5VFLq8UjbHsuIGWcKcwC3w&s" },
      { name: "Headphones", price: "2,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7Nehq8aR5GxTGE2ddGNay_R12VbfEtivWw&s" },
      { name: "Camera", price: "44,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgKrl4IkE0EMyCxzbMbpeGWbH-p9CncrUTuQ&s" },
      { name: "Smart Watch", price: "3,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qOM-SBTS5VpoDLCAqtcDoLTEmFmAehwt5Q&s" },
      { name: "Tablet", price: "21,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-BiXvqfQ8e1AAuhLpGkoFRpayuiMlwU_Ukw&s" },
      { name: "Desktop Computer", price: "45,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVzwTOtdDvhoHIuggnt6WMy_8q11IsJ8Bzg&s" },
      { name: "Smart TV", price: "38,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6hgQa0NDO3C0zrKx0C0oDjmfYBzO8KhZTBg&s" },
      { name: "Printer", price: "8,999", img: "https://vsprod.vijaysales.com/media/catalog/product/1/4/145354-image1_5.jpg" },
      { name: "Bluetooth Speaker", price: "1,999", img: "https://www.thevaluestore.in/image/cache/catalog/2024/Portronics/Speaker/pixel-3-1-1000x1000.jpg" },
      { name: "Gaming Console", price: "34,999", img: "https://5.imimg.com/data5/HC/HK/MY-11391592/gaming-console-500x500.jpg" },
      { name: "Microwave Oven", price: "12,999", img: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/221296_0_lawyut.png" },
      { name: "Washing Machine", price: "24,999", img: "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/9/AmazonStores/A21TJRUUN4KGV/2ecdf16e26d31e502c023986902c4246.w1500.h1500._CR0%2C0%2C1500%2C1500_SX750_SY750_.jpg" },
    ],

    Fashion: [
      { name: "Shirt", price: "999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahI7YhiozlQMWaNUzw0aYPm_zLH1TU4Rqow&s" },
      { name: "Jeans", price: "1,799", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ10XN7c7RPhV6zR5syuk5w4UPsG28vuNOf3Q&s" },
      { name: "Shoes", price: "2,499", img: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/23976344/2023/7/11/cf6d6b67-186a-444a-a2a7-49afebad8a0c1689091586156HRXbyHrithikRoshanWomenOffWhiteMeshRunningNon-MarkingShoes1.jpg" },
      { name: "Jacket", price: "2,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNQkxCdamaupbiyTDRrtYU0SOpZW8XYY4OA&s" },
      { name: "T-Shirt", price: "799", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwfosUVpAHlLdtOlh3nt9v5DXxj7mP7zrLfw&s" },
      { name: "Purse", price: "1,499", img: "https://rukminim2.flixcart.com/image/480/640/xif0q/hand-messenger-bag/f/r/g/ext-hb-178-11-2-hb-178-handbag-exotic-8-5-original-imahc7m4g866veyy.jpeg?q=90" },
      { name: "Sunglass", price: "999", img: "https://rukminim2.flixcart.com/image/480/640/xif0q/sunglass/p/h/q/medium-pathan-sunglass-17rrg-15-shade-house-original-imah3zydf5ac68gp.jpeg?q=90" },
      { name: "Hoodie", price: "1,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5E1wrB1j87iBm9skLgWBLvb678M-2nkoLAw&s" },
      { name: "Dress", price: "2,499", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9Xk9OpSfesyDbuJp0aAYb2EWc4I3Abcx1w&s" },
      { name: "Heels", price: "2,199", img: "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019435254_437Wx649H_202309270611371.jpeg" },
      { name: "Suits", price: "4,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNAVmCEJtTm6gGi-h0S5b0T0hkXuKcoiCLJQ&s" },
    ],

    Home: [
      { name: "Sofa", price: "25,999", img: "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/8af1411a-676f-42f9-802f-4098241f19be/b6bfaffb241a4dcfb9604794baf44011.webp" },
      { name: "Study Table", price: "5,999", img: "https://i.pinimg.com/236x/f8/f4/1a/f8f41a082acc8a3c3612e3864e3796e8.jpg" },
      { name: "Lamp", price: "1,499", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2u_n16eR40ilz8u29v0KAchaQ1nh_47-zOQ&s" },
      { name: "Chair", price: "2,499", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHt1JoczXuePsSE-KUQVPO2mOAYf5OGbvucQ&s" },
      { name: "Bed", price: "18,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQau4eKEQURh_RN5UTGcUlCmlI0jX6CDWkxEQ&s" },
      { name: "Curtains", price: "1,299", img: "https://image.cdn.shpy.in/350850/panipat-textile-hub-polyester-eyelet-brown-printed-1707464651451_SKU-0212_0.jpeg?width=600&format=webp" },
      { name: "Carpet", price: "3,999", img: "https://princecarpets.in/cdn/shop/files/91tyRSkmjEL_efc029f2-7824-4435-9fd9-dcf0281e8a85.jpg" },
      { name: "Wall Clock", price: "1,999", img: "https://ikiru.in/cdn/shop/files/buy-wall-clock-sullivan-the-wall-clock-for-living-room-or-home-showpiece-by-de-maison-decor-on-ikiru-online-store-1.jpg" },
      { name: "Mirror", price: "3,499", img: "https://mirrorwalla.com/cdn/shop/files/IMG-7497.png" },
      { name: "Shoe Rack", price: "2,999", img: "https://m.media-amazon.com/images/I/711xF9EkDhL._AC_UF894,1000_QL80_.jpg" },
      { name: "Table", price: "4,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcXisMcJqYF1g7R93RBKvhiaNzuaHARRmnQw&s" },
      { name: "Wardrobe", price: "15,999", img: "https://www.nilkamalfurniture.com/cdn/shop/files/MWILLY3DWBWOMNWG_06.webp" },
    ],
  };

  const addToCart = (item) => {
    alert(`${item.name} added to cart`);
  };

  return (
    <>
      <div className="category-bar">
        {Object.keys(data).map((cat) => (
          <span
            key={cat}
            className={`category-item ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="products-section">
        <h3>{activeCategory} Products</h3>

        <div className="product-grid">
          {data[activeCategory].map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.img} alt={item.name} />
              <p className="product-name">{item.name}</p>
              <p className="product-price">₹{item.price}</p>
              <button className="add-cart-btn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default User;
