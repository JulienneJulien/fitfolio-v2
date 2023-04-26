import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import ProductItem from "../components/ProductItem";
// need to import getProducts query - call query to get all products and map each product object through the product item component.
const FitShop = () => {
  const Products=[
    {name: "Bike", description: "Shiny bike"}
  ]
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
      {/* {Products.map((product) =>{
        return (
          <div>
            <ProductItem name = {product.name} description = {product.description} />
          </div>
        )
      }} */}

      <section className="py-20 bg-orange-200">
  <div className="container mx-auto px-4">
    <h2 className="mb-16 md:mb-24 text-4xl md:text-5xl text-gray-700 font-bold font-heading">Discover our products!</h2>
    <div className="flex flex-wrap -mx-3 mb-24">
      <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 lg:mb-0">
        <div className="p-6 bg-orange-50">
          <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-15%</span>
          <a className="block px-6 mt-6 mb-2" href="#">

            <img className="mb-5 mx-auto h-56 w-full object-contain" src="/logoHat.png" alt=""/>
            <h3 className="mb-2 text-xl text-gray-700 font-bold font-heading">FitFolio Logo Hat</h3>
            <p className="text-lg font-bold font-heading text-red-500">
              <span>$29.89</span>
              <span className="text-xs text-gray-500 font-semibold font-heading line-through">$33.69</span>
            </p>
          </a>
          <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 lg:mb-0">
        <div className="p-6 bg-gray-50">
          <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-15%</span>
          <a className="block px-6 mt-6 mb-2" href="#">
            <img className="mb-5 mx-auto h-56 w-full object-contain" src="/CanyonAeroadBike.png" alt=""/>
            <h3 className="mb-2 text-xl text-gray-700 font-bold font-heading">2020 Canyon AeroRoad SL Bicycle</h3>
            <p className="text-lg font-bold font-heading text-red-500">
              <span>$6,034.91</span>
              <span className="text-xs text-gray-500 font-semibold font-heading line-through">$7,099.90</span>
            </p>
          </a>
          <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 md:mb-0">
        <div className="p-6 bg-gray-50">
          <span className="px-2 py-1"></span>
          <a className="block px-6 mt-6 mb-2" href="#">
            <img className="mb-5 mx-auto h-56 w-full object-contain" src="/StephCurryBall.png" alt=""/>
            <h3 className="mb-2 text-xl text-gray-700 font-bold font-heading">Steph Curry special edition basketball</h3>
            <p className="text-lg font-bold font-heading text-red-500">
              <span>$34.89</span>
              <span className="text-xs text-gray-500 font-semibold font-heading line-through">$33.69</span>
            </p>
          </a>
          <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 px-3">
        <div className="p-6 bg-gray-50">
          <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-500 rounded-full text-blue-500 bg-white">NEW</span>
          <a className="block px-6 mt-6 mb-2" href="#">
            <img className="mb-5 mx-auto h-56 w-full object-contain" src="/SMbottle.png" alt=""/>
            <h3 className="mb-2 text-xl text-gray-700 font-bold font-heading">Simple Modern 24oz bottle</h3>
            <p className="text-lg font-bold font-heading text-red-500">
              <span>$29.99</span>
              <span className="text-xs text-gray-500 font-semibold font-heading line-through">$33.69</span>
            </p>
          </a>
          <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg>
          </a>
        </div>
      </div>
    </div>
    <div className="text-center">
      <a className="inline-block bg-orange-300 hover:bg-orange-400 hover:text-gray-700 text-white font-bold font-heading py-6 px-8 rounded-md uppercase" href="#">Show More</a>
    </div>
  </div>
</section>

<section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="mb-8 text-sm font-bold font-heading text-gray-400">TRUSTED BY BRANDS ALL OVER THE WORLD</h2>
    <div className="flex flex-wrap -mx-4 justify-between">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 lg:mb-0">
        <div className="py-12 px-2 rounded-md shadow-2xl">
          <img className="mx-auto h-6" src="UnderArmourLogo.png" alt=""/>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 lg:mb-0">
        <div className="py-12 px-2 rounded-md shadow-2xl">
          <img className="mx-auto h-6" src="AdidasLogo.png" alt=""/>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 lg:mb-0">
        <div className="py-12 px-2 rounded-md shadow-2xl">
          <img className="mx-auto h-6" src="PumaLogo.png" alt=""/>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 md:mb-0">
        <div className="py-12 px-2 rounded-md shadow-2xl">
          <img className="mx-auto h-6" src="NikeLogo.png" alt=""/>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 md:mb-0">
        <div className="py-12 px-2 rounded-md shadow-2xl">
          <img className="mx-auto h-6" src="NorthFaceLogo.png" alt=""/>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4">
        <div className="py-12 px-2 rounded-md shadow-2xl">
          <img className="mx-auto h-6" src="EAlogo.jpg" alt=""/>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>



  );
};

export default FitShop;

