import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "./product.css";
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
        

        <div className="filter-controls lg:flex grid grid-cols-2  gap-5 justify-center mt-24 filterbg p-10 bg-transparent space-x-5">
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
      </div>
      <div className="container mx-auto gap-5 mt-16 px-3">
        <div className="">
          <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products?.map((product) => (
              <div
                key={product._id}
                className="h-[420px] card p-5 space-y-3"
              >
                <img
                  className="h-40 w-full items-center rounded-md"
                  src={product.productimage}
                  alt=""
                />
                <h3 className="font-bold text-xl ">Name: {product.productname}</h3>
                <p>
                  Category: {product.category} - {product.brandname}
                </p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.ratings}</p>
                <p>
                  Added Date: {moment(product.productcreationdatetime).format("YYYY-MM-DD")}
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
