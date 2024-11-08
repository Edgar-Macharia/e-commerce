

const Quantity = () => {
    return (
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
    )
}

export default Quantity