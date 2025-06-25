import { FaStar, FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export type ProductProps = {
    id: number
    name: string
    description: string
    price: number
    categoryId: number
    imageUrl: string
}

export default function Product({
    id,
    name,
    description,
    price,
    imageUrl,
}: ProductProps) {
    const [added, setadded] = useState(false)
    const [wishlisted, setWishlisted] = useState(false)

    return (
        <Link to={`/product/${id}`} className="no-underline text-inherit">
            <div className="w-40 min-h-[100px] bg-white border border-gray-200 shadow-sm flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition m-2 rounded shrink-0">
                <div className="w-full h-32 flex justify-center items-center overflow-hidden rounded-t-xl">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="max-h-28 max-w-[90%] object-contain"
                    />
                </div>

                <h1 className="text-sm font-semibold mt-2 mb-1 text-center line-clamp-2 min-h-[40px] px-2">
                    {name}
                </h1>

                <div className="text-xs text-gray-500 text-center px-3 mb-1 min-h-[30px] line-clamp-2">
                    {description}
                </div>

                <div className="text-sm font-bold text-[#B12704] mt-auto mb-2 text-center">
                    ₹{price.toLocaleString()}
                </div>

                <div className="flex flex-row mb-1 text-sm text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                <div className="flex items-center justify-center gap-2 mb-2">
                    <button
                        onClick={e => {
                            e.preventDefault()
                            setadded(!added)
                        }}
                        className={`flex items-center gap-1 px-2 py-[5px] rounded text-white text-xs
              ${added ? 'bg-red-600' : 'bg-gray-500'}
              hover:opacity-90 transition`}
                    >
                        <FaShoppingCart className="text-xs" />
                        {added ? 'Added' : 'Add'}
                    </button>

                    <button
                        onClick={e => {
                            e.preventDefault()
                            setWishlisted(!wishlisted)
                        }}
                        className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-blue-600 hover:scale-110 transition"
                        title={
                            wishlisted
                                ? 'Remove from wishlist'
                                : 'Add to wishlist'
                        }
                    >
                        {wishlisted ? (
                            <FaHeart size={12} />
                        ) : (
                            <FaRegHeart size={12} />
                        )}
                    </button>
                </div>
            </div>
        </Link>
    )
}
