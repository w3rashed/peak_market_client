import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "./product.css";
import { MdOutlineComputer } from "react-icons/md";
import { GiAmpleDress, GiWoodenChair } from "react-icons/gi";
import { FaShoePrints, FaTools } from "react-icons/fa";
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    minPrice: "",
    maxPrice: "",
    search: "",
    page: 1,
    limit: 10,
    sort: "",
  });
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = new URLSearchParams(filters).toString();
      const { data } = await axios.get(
        `http://localhost:5000/products?${query}`
      );
      setProducts(data.products);
      setTotalPages(data.totalPages);
    };

    fetchProducts();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
      page: 1, // Reset to first page when filter or sort changes
    });
  };

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      page: newPage,
    });
  };

  return (
    <>
      <div className="container mx-auto px-3">
        <div>
          <div className="text-center mt-10">
            <h2 className="text-4xl font-bold">Featured Product Categories</h2>
            <p>Explore Our Top Categories.</p>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-6">
            {/* card-1 */}
            <div className="card bg-base-100  shadow-xl mt-10">
              <div className="grid justify-center   p-10 ">
                <div className="flex flex-col justify-center items-center">
                <MdOutlineComputer className="text-[60px] "></MdOutlineComputer>
                  <h2 className="  font-bold text-2xl">Electronics</h2>
                  <p>95 Products</p>
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div className="card bg-base-100  shadow-xl mt-10">
              <div className="grid justify-center   p-10 ">
                <div className="flex flex-col justify-center items-center">
                <GiAmpleDress className="text-[60px] "></GiAmpleDress>
                  <h2 className="  font-bold text-2xl">Clothing</h2>
                  <p>123 Products</p>
                </div>
              </div>
            </div>
            {/* card-3 */}
            <div className="card bg-base-100  shadow-xl mt-10">
              <div className="grid justify-center   p-10 ">
                <div className="flex flex-col justify-center items-center">
                <FaTools className="text-[60px] "></FaTools>
                  <h2 className="  font-bold text-2xl">Accessories</h2>
                  <p>500 Products</p>
                </div>
              </div>
            </div>
            {/* card-4 */}
            <div className="card bg-base-100  shadow-xl mt-10">
              <div className="grid justify-center   p-10 ">
                <div className="flex flex-col justify-center items-center">
                <FaShoePrints className="text-[60px] "></FaShoePrints>
                  <h2 className="  font-bold text-2xl">Footwear</h2>
                  <p>130 Products</p>
                </div>
              </div>
            </div>
            {/* card-5 */}
            <div className="card bg-base-100  shadow-xl mt-10">
              <div className="grid justify-center   p-10 ">
                <div className="flex flex-col justify-center items-center">
                <GiWoodenChair className="text-[60px] "></GiWoodenChair>
                  <h2 className="  font-bold text-2xl">Furniture</h2>
                  <p>40 Products</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="text-center mt-10">
          <h2 className="text-4xl font-bold">Our Products</h2>
          <p>Explore our top picks, curated just for you.</p>
        </div>
        <div className="flex mt-10 justify-center">
          <input
            className="px-8 py-3 bg-slate-200 rounded-full"
            type="text"
            name="search"
            placeholder="Search products..."
            value={filters.search}
            onChange={handleFilterChange}
          />
        </div>

        <div className="filter-controls lg:flex grid grid-cols-2  gap-5 justify-center  p-10 bg-transparent space-x-5">
          <select
            name="category"
            className="px-5 py-3 bg-slate-200 rounded-xl "
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="">All Categories</option>
            {/* Add category options */}
          </select>
          <select
            name="brand"
            className="px-5 py-3 bg-slate-200 rounded-xl "
            value={filters.brand}
            onChange={handleFilterChange}
          >
            <option value="">All Brands</option>
            <option value="NetSpeed">NetSpeed</option>
            <option value="ShavePro">ShavePro</option>
            <option value="ProjectorPlus">ProjectorPlus</option>
            <option value="BoilMaster">BoilMaster</option>
            <option value="CleanBot">CleanBot</option>
            <option value="DoorGuard">DoorGuard</option>
            <option value="BlendGo">BlendGo</option>
            <option value="SecureHome">SecureHome</option>
            <option value="QuietSound">QuietSound</option>
            <option value="BrightHome">BrightHome</option>
            <option value="FitLife">FitLife</option>
            <option value="BassBoom">BassBoom</option>
            {/* Add brand options */}
          </select>
          <input
            className="px-5 py-3 bg-slate-200 rounded-xl "
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleFilterChange}
          />
          <input
            className="px-5 py-3 bg-slate-200 rounded-xl "
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
          <select
            name="sort"
            className="px-5 py-3 bg-slate-200 rounded-xl "
            value={filters.sort}
            onChange={handleFilterChange}
          >
            <option value="">Sort by</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      <div className="container mx-auto gap-5  px-3">
        <div className="">
          <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products?.map((product) => (
              <div key={product._id} className="h-[420px]  p-5 space-y-3">
                <img
                  className="h-40 w-full items-center rounded-md"
                  src={product.productimage}
                  alt=""
                />
                <h3 className="font-bold text-xl ">
                  Name: {product.productName}
                </h3>
                <h4>Brand:{product.brand}</h4>
                <p>
                  Category: {product.category} - {product.brandname}
                </p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.ratings}</p>
                <p>
                  Added Date:{" "}
                  {moment(product.productcreationdatetime).format("YYYY-MM-DD")}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  className="btn bg-blue-600 text-white font-bold p-5 m-2"
                  key={index}
                  disabled={filters.page === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
