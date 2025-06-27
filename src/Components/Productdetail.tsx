import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'

interface Product {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string
    rating: number
    ratingCount: number
}

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>()
    const [product, setProduct] = useState<Product | null>(null)
    const [quantity, setQuantity] = useState(1)
    const [purchaseOption, setPurchaseOption] = useState('one-time')

    useEffect(() => {
        axios
            .get(`http://localhost:3000/product/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error('Failed to load product:', err))
    }, [id])

    if (!product)
        return <div className="text-center mt-20 text-lg">Loading...</div>

    return (
        <div className="max-w-5xl mx-auto py-12">
            <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row gap-10 overflow-hidden">
                {/* Left: Image */}
                <div className="md:w-[46%] w-full flex items-center justify-center bg-white">
                    <div className="w-full h-[370px] flex items-center justify-center">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>
                </div>

                {/* Right: Details */}
                <div className="md:w-[54%] w-full px-8 py-8 flex flex-col justify-between">
                    <div>
                        <h1 className="font-bold text-2xl md:text-3xl mb-3">
                            {product.name}
                        </h1>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={
                                            i < Math.round(product.rating)
                                                ? ''
                                                : 'text-gray-300'
                                        }
                                    />
                                ))}
                            </div>
                            <span className="text-gray-700 font-medium ml-2">
                                {product.rating}{' '}
                                <span className="text-base text-gray-500">
                                    ({product.ratingCount} reviews)
                                </span>
                            </span>
                        </div>
                        <div className="text-2xl font-extrabold text-[#B12704] mb-3">
                            ₹{product.price.toLocaleString()}
                        </div>
                        <p className="text-gray-700 mb-6">
                            {product.description}
                        </p>
                    </div>

                    {/* Purchase Options */}
                    <div className="mb-6">
                        <p className="font-semibold mb-1">
                            SUBSCRIBE NOW & SAVE!
                        </p>
                        <div className="flex flex-col gap-1 mb-3 ml-2">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="purchase"
                                    value="one-time"
                                    checked={purchaseOption === 'one-time'}
                                    onChange={() =>
                                        setPurchaseOption('one-time')
                                    }
                                    className="accent-green-600"
                                />
                                One-Time Purchase - ₹
                                {product.price.toLocaleString()}
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="purchase"
                                    value="subscribe"
                                    checked={purchaseOption === 'subscribe'}
                                    onChange={() =>
                                        setPurchaseOption('subscribe')
                                    }
                                    className="accent-green-600"
                                />
                                Subscribe & Save + FREE SHIPPING
                                (Non-Refundable) 20%
                            </label>
                        </div>

                        {/* Quantity Selector */}
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold">QTY</span>
                            <div className="flex items-center rounded border border-gray-300 overflow-hidden">
                                <button
                                    onClick={() =>
                                        setQuantity(Math.max(1, quantity - 1))
                                    }
                                    className="px-3 py-1 bg-gray-100 text-lg hover:bg-gray-200"
                                >
                                    -
                                </button>
                                <span className="w-12 text-center">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-3 py-1 bg-gray-100 text-lg hover:bg-gray-200"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Add to Bag */}
                    <div className="mt-2">
                        <button className="w-full py-3 bg-green-600 text-white text-lg font-bold rounded-xl hover:bg-green-700 transition mb-2 shadow">
                            ADD TO BAG
                        </button>
                        <div className="text-xs text-gray-600 text-center">
                            Get 10% OFF your order! • Free SHIPPING • 30 days
                            return
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
