"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SiNike } from "react-icons/si";
import { SiJordan } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { client } from "@/sanity/lib/client";
import { toast } from "react-toastify";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isLogin, setIsLogin] = useState(false)


  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  useEffect(() => {
    // Check login status from session storage
    const loginStatus = sessionStorage.getItem('isLogin') === 'true'
    setIsLogin(loginStatus)
  }, [])

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      // Update session storage
      sessionStorage.setItem('isLogin', 'false')
      setIsLogin(false)

      // Show a success toast
      toast.success('You have successfully signed out!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
      setTimeout(() => {
        window.location.href = "/"; // Redirect to home page
      }, 3000);
    }
  }


  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(`*[_type == "product"]{
          _id,
          productName,
          category,
          price,
          image,
          description,
          }`);
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.productName.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <header className="bg-gray-100 px-4 md:px-8 py-2 shadow-md">
      {/* top bar */}
      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <div className="flex items-center space-x-6">
          <SiJordan className="w-8 h-8" />
        </div>

        <div className="flex space-x-4">
          <Link href="/all-Products">
            <span className="hover:text-black">Find a Store</span>
          </Link>
          <span>|</span>

          <Link href="/contact-us">
            <span className="hover:text-black">Help</span>
          </Link>
          <span>|</span>

          <Link href="/join-us">
            <span className="hover:text-black">Join Us</span>
          </Link>
          <span>|</span>

          <span className="items-center hover:text-black cursor-pointer font-semibold">
                {isLogin ? (
                  <button onClick={handleLogout}>Sign Out</button>
                ) : (
                  <a href="/login">Sign In</a>
                )}
              </span>
        </div>
      </div>

      {/* main navigation bar */}
      <div className="flex justify-between items-center">
        {/* logo and links */}
        <div className="flex items-center space-x-4 md:space-x-8 text-sm">
          <SiNike className="w-12 h-12" />
        </div>

        {/* menu hidden on mobile */}
        <div>
          <nav className="hidden md:flex space-x-4 lg:space-x-8 text-sm">
            <Link href="/" className="hover:underline">
              {" "}
              New & Featured{" "}
            </Link>
            <Link href="#" className="hover:underline">
              {" "}
              Men{" "}
            </Link>
            <Link href="#" className="hover:underline">
              {" "}
              Women{" "}
            </Link>
            <Link href="#" className="hover:underline">
              {" "}
              Kids{" "}
            </Link>
            <Link href="/checkout" className="hover:underline">
              {" "}
              Sale{" "}
            </Link>
            <Link href="#" className="hover:underline">
              {" "}
              SNKRS{" "}
            </Link>
          </nav>
        </div>

        {/* right side */}
        <div className="hidden md:flex items-center space-x-4 md:space-x-6">
          {/* searchbar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
              className="bg-gray-200 rounded-full pl-10 pr-4 text-sm focus:outline-none"
            />
            <CiSearch className="absolute left-3 top-1.5 text-gray-500" />

            {searchQuery && filteredProducts.length > 0 && (
              <div className="absolute bg-white w-full border border-gray-300 rounded-md shadow-lg mt-2 z-10">
                <ul>
                  {filteredProducts.map((product: any) => (
                    <li
                      key={product.id}
                      className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"
                    >
                      <Link href={`/all-Products/${product._id}`}>
                        {product.productName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* wishlist & shop */}
          <div className="flex items-center">
            <Link href={"/wishlist"}>
              <GoHeart />
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/addToCart">
              <RiShoppingBagLine />
            </Link>
          </div>

          {/* mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            {isMenuOpen ? <IoIosCloseCircleOutline /> : <IoMdMenu />}
          </button>
        </div>
      </div>

      {/* mobile navigation functionality */}
      <div
        className={`fixed inset-0  z-50 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform md:hidden`}
      >
        <div className="p-4">
          <button onClick={toggleMenu} className="text-2xl mb-4">
            <IoIosCloseCircleOutline />
          </button>

          <nav className="flex gap-2 space-x-4 text-sm">
            <Link href="/" className="block">
              {" "}
              New & Featured{" "}
            </Link>
            <Link href="#" className="block">
              {" "}
              Men{" "}
            </Link>
            <Link href="#" className="block">
              {" "}
              Women{" "}
            </Link>
            <Link href="#" className="block">
              {" "}
              Kids{" "}
            </Link>
            <Link href="/checkout" className="block">
              {" "}
              Sale{" "}
            </Link>
            <Link href="#" className="block">
              {" "}
              SNKRS{" "}
            </Link>
          </nav>
        </div>
      </div>

      {/* for mobile screen */}
      <div className="md:hidden flex flex-col items-center space-x-4 md:space-x-6">
        {/* searchbar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="bg-gray-200 rounded-full pl-10 pr-4 text-sm focus:outline-none"
          />
          <CiSearch className="absolute left-3 top-1.5 text-gray-500" />

          {searchQuery && filteredProducts.length > 0 && (
            <div className="absolute bg-white w-full border border-gray-300 rounded-md shadow-lg mt-2 z-10">
              <ul>
                {filteredProducts.map((product: any) => (
                  <li
                    key={product.id}
                    className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"
                  >
                    <Link href={`/all-Products/${product._id}`}>
                      {product.productName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* wishlist & shop */}
        <div className="flex items-center">
          <Link href={"/wishlist"}>
            <GoHeart />
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/addToCart">
            <RiShoppingBagLine />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
