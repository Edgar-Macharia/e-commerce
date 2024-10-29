

const Search = () => {
    return (
        <div className="relative">
            <input type="search" placeholder="Search for products..." className='p-2 pl-8 rounded-2xl outline-primary' />
            <div className="absolute flex items-center inset-y-3 left-2 text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6" />
                </svg>
            </div>
        </div>
    )
}

export default Search