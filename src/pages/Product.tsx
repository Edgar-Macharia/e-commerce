import { Breadcrumb } from "../components"


// interface ProductType {
//   id: number;
//   name: string;
//   description: string;
//   price: string;
// }


const Product = () => {
  return (
    <div>
      <Breadcrumb pageName="product" productName={`Product Name`} />

      <div className="grid md:grid-cols-2 mt-6 gap-4 px-4 md:px-0">
        <div className="grid grid-cols-3 space-x-2">
          <div className="col-span-1 w-40 flex flex-col-reverse">
            {[...Array(3)].map((_, index) => (
              <img key={index}
              src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
              alt=""
              className={`h-24 object-cover sm:rounded-2xl sm:h-40 ${index < 2 ? 'my-2' : ''}`}
            />
            ))}
          </div>
          
          <div className="col-span-2">
            <img
              src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
              alt=""
              className="h-full w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105 sm:h-120"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="mx-2 md:mx-10 pb-10 px-2">
          <h1 className="text-2xl font-bold">PRODUCT NAME</h1>
          <h2 className="text-2xl mt-2">$120</h2>
          <p className="my-6 font-light">This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description This is the product description</p>
          <hr className="mb-6"/>
          <div className="fixed md:relative w-full bg-snow md:bg-transparent border-t md:border-none border-black/5 bottom-0 left-0 p-4 md:p-0 z-10 flex items-center justify-between sm:justify-start md:justify-center">
            <div>
              <label htmlFor="Quantity" className="sr-only"> Quantity </label>

              <div className="flex items-center rounded-full border border-gray-200">
                <button type="button" className="size-10 leading-10 text-gray-600 hover:text-primary transition">
                  &minus;
                </button>

                <input
                  type="number"
                  id="Quantity"
                  value="1"
                  disabled
                  className="h-10 w-16  border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none outline-none"
                />

                <button type="button" className="size-10 leading-10 text-gray-600 hover:text-primary transition">
                  +
                </button>
              </div>
            </div>
            <button className="bg-primary w-full ml-3 sm:ml-5 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-yellow transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product