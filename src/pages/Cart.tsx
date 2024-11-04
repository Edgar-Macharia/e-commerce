import { Breadcrumb } from "../components"


const Cart = () => {
  return (
    <div>
      <Breadcrumb pageName="Cart" productName="" />
      <h1 className="mt-6 px-2 text-3xl font-bold text-gray-900">Your Cart</h1>

      <div className="grid md:grid-cols-2 gap-4 mt-6 mx-6">
        <div className="flex flex-col mb-2">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-stretch gap-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
                alt=""
                className="aspect-square w-20 rounded-lg object-cover"
              />

              <div>
                <h3 className="text-lg/tight font-medium text-gray-900">Product Name</h3>

                <p className="mt-0.5 text-gray-700">
                  Lorem ipsum
                </p>
                <h2 className="text-xl mt-0.5">$120</h2>
              </div>
            </div>
          ))}
          <hr />
        </div>
          
        <div className="md:px-6">
          <h2 className="text-xl md:text-2xl font-bold">Order Summary</h2>
          <div className="mt-2">
            <p className="mb-4">Subtotal</p>
            <p className="mb-4">Delivery Fee</p>
            <hr className="mb-4"/>
            <h2 className="text-2xl">Total</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart