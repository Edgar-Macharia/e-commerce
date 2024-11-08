import { Breadcrumb, Quantity } from "../components"


const Cart = () => {
  return (
    <div>
      <Breadcrumb pageName="Cart" productName="" />
      <h1 className="mt-6 px-2 text-3xl font-bold text-gray-900">Your Cart</h1>

      <div className="grid md:grid-cols-2 gap-4 mt-6 mx-6">
        <div className="flex flex-col p-4 mb-2 md:border-r shadow">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-stretch gap-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
                alt=""
                className="aspect-square w-20 rounded-lg object-cover"
              />

              <div className="flex-1 pr-2">
                <div className="flex justify-between">
                  <h3 className="text-lg/tight font-medium text-gray-900">Product Name</h3>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                      <path fill="red" d="M8 9h8v10H8z" opacity="0.3" />
                      <path fill="red" d="m15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8z" />
                    </svg>
                  </button>
                </div>

                <p className="mt-0.5 text-gray-700">Lorem ipsum</p>

                <div className="flex justify-between items-center mt-2">
                  <h2 className="text-xl">$20</h2>
                  <Quantity />
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="md:px-6">
          <h2 className="text-xl md:text-2xl font-bold">Order Summary</h2>
          <div className="mt-2">
            <p className="mb-4 flex justify-between">Subtotal<span className="pr-6 font-semibold">$60</span></p>
            <p className="mb-4 flex justify-between">Delivery Fee<span className="pr-6 font-semibold">Free</span></p>
            <hr className="mb-4" />
            <h2 className="text-2xl flex justify-between">Total<span className="pr-6 font-extrabold">$60</span></h2>
            <button className="bg-primary w-full my-8 rounded-full h-11 md:h-[52px] text-xl sm:text-base text-white hover:bg-yellow transition-all inline-flex justify-center items-center">
              Checkout <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" fill-rule="evenodd" d="M18.5 12.214a1 1 0 0 0-1-1H5a1 1 0 1 0 0 2h12.5a1 1 0 0 0 1-1" clip-rule="evenodd" />
                <path fill="currentColor" fill-rule="evenodd" d="M20 12.214a1 1 0 0 0-.293-.707l-4.5-4.5a1 1 0 1 0-1.414 1.414l3.793 3.793l-3.793 3.793a1 1 0 0 0 1.414 1.415l4.5-4.5a1 1 0 0 0 .293-.708" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart