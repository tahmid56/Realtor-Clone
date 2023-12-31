import React, { useState } from 'react';

export default function CreateListing() {
    const [formData, setFormData] = useState({
        type: 'rent',
        name: '',
        bedrooms: 1,
        baths: 1,
        parking: false,
        furnished: false,
        address: '',
        description: '',
        offer: true,
        regularPrice: 0,
        discountedPrice: 0,
    });
    const handleImageSelect = () => {};
    return (
        <main className="max-w-md px-2 mx-auto">
            <h1 className="text-3xl text-center mt-6 font-bold ">Create a Listing</h1>
            <form>
                <p className=" text-lg mt-6 font-semibold">Sell / Rent</p>
                <div className="flex">
                    <button
                        type="button"
                        id="type"
                        value="sell"
                        onClick={(e) => setFormData({ ...formData, type: e.target.value })}
                        className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadoe-lg active:shadow-lg transition duration-150 ease-out w-full ${
                            formData.type === 'rent' ? 'bg-white text-black' : 'bg-slate-600 text-white'
                        }`}
                    >
                        Sell
                    </button>
                    <button
                        type="button"
                        id="type"
                        value="rent"
                        onClick={(e) => setFormData({ ...formData, type: e.target.value })}
                        className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadoe-lg active:shadow-lg transition duration-150 ease-out w-full ${
                            formData.type === 'sell' ? 'bg-white text-black' : 'bg-slate-600 text-white'
                        }`}
                    >
                        Rent
                    </button>
                </div>
                <p className="text-lg mt-6 font-semibold">Name</p>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    placeholder="Name"
                    maxLength="32"
                    minLength="10"
                    required
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded trannsition duration-150 ease-in-out focus:text-gray-700 focus:bg-white"
                />
                <div className="flex mt-6">
                    <div className="mr-3">
                        <p className="text-lg font-semibold">Bedroom</p>
                        <input
                            type="number"
                            id="bedrooms"
                            min="1"
                            max="50"
                            required
                            value={formData.bedrooms}
                            onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center rounded"
                        />
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Bathrooms</p>
                        <input
                            type="number"
                            id="bedrooms"
                            min="1"
                            max="50"
                            required
                            value={formData.baths}
                            onChange={(e) => setFormData({ ...formData, baths: e.target.value })}
                            className="px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center rounded"
                        />
                    </div>
                </div>
                <p className=" text-lg mt-6 font-semibold">Parking</p>
                <div className="flex">
                    <button
                        type="button"
                        id="parking"
                        value={true}
                        onClick={(e) => setFormData({ ...formData, parking: true })}
                        className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadoe-lg active:shadow-lg transition duration-150 ease-out w-full ${
                            formData.parking ? 'bg-white text-black' : 'bg-slate-600 text-white'
                        }`}
                    >
                        Yes
                    </button>
                    <button
                        type="button"
                        id="parking"
                        value={false}
                        onClick={(e) => setFormData({ ...formData, parking: false })}
                        className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadoe-lg active:shadow-lg transition duration-150 ease-out w-full ${
                            !formData.parking ? 'bg-white text-black' : 'bg-slate-600 text-white'
                        }`}
                    >
                        No
                    </button>
                </div>
                <p className=" text-lg mt-6 font-semibold">Furnished</p>
                <div className="flex">
                    <button
                        type="button"
                        id="furnished"
                        onClick={(e) => setFormData({ ...formData, furnished: true })}
                        className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadoe-lg active:shadow-lg transition duration-150 ease-out w-full ${
                            formData.furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'
                        }`}
                    >
                        Yes
                    </button>
                    <button
                        type="button"
                        id="furnished"
                        onClick={(e) => setFormData({ ...formData, furnished: false })}
                        className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadoe-lg active:shadow-lg transition duration-150 ease-out w-full ${
                            !formData.furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'
                        }`}
                    >
                        No
                    </button>
                </div>
                <p className="text-lg mt-6 font-semibold">Address</p>
                <textarea
                    type="text"
                    id="address"
                    value={formData.address}
                    placeholder="Address"
                    required
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded trannsition duration-150 ease-in-out focus:text-gray-700 focus:bg-white "
                />
                <p className="text-lg mt-6 font-semibold">Description</p>
                <textarea
                    type="text"
                    id="address"
                    value={formData.description}
                    placeholder="Description"
                    required
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded trannsition duration-150 ease-in-out focus:text-gray-700 focus:bg-white"
                />
                <p className=" text-lg mt-6 font-semibold">Offer</p>
                <div className="flex mb-6">
                    <button
                        type="button"
                        id="offer"
                        value={true}
                        onClick={(e) => setFormData({ ...formData, offer: true })}
                        className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadoe-lg active:shadow-lg transition duration-150 ease-out w-full ${
                            formData.offer ? 'bg-white text-black' : 'bg-slate-600 text-white'
                        }`}
                    >
                        Yes
                    </button>
                    <button
                        type="button"
                        id="parking"
                        value={false}
                        onClick={(e) => setFormData({ ...formData, offer: false })}
                        className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadoe-lg active:shadow-lg transition duration-150 ease-out w-full ${
                            !formData.offer ? 'bg-white text-black' : 'bg-slate-600 text-white'
                        }`}
                    >
                        No
                    </button>
                </div>
                <div className="flex items-center mb-6">
                    <div className="">
                        <p className="text-xl font-semibold">Regular Price</p>
                        <div className="flex w-full justify-center items-center space-x-6">
                            <input
                                type="number"
                                id="regularPrice"
                                value={formData.regularPrice}
                                onChange={(e) => setFormData({ ...formData, regularPrice: e.target.price })}
                                min={50}
                                max={5000000}
                                required
                                className="w-full py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                            />
                            {formData.type === 'rent' && (
                                <div className="">
                                    <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {formData.offer && (
                    <div className="flex items-center mb-6">
                        <div className="">
                            <p className="text-xl font-semibold">Discounted Price</p>
                            <div className="flex w-full justify-center items-center space-x-6">
                                <input
                                    type="number"
                                    id="regularPrice"
                                    value={formData.regularPrice}
                                    onChange={(e) => setFormData({ ...formData, regularPrice: e.target.price })}
                                    min={50}
                                    max={5000000}
                                    required
                                    className="w-full py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                                />
                                {formData.type === 'rent' && (
                                    <div className="">
                                        <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                <div className="mb-6">
                    <p className="text-lg font-semibold">Images</p>
                    <p className="text-gray-600">The First image will be the cover(max 6)</p>
                    <input
                        type="file"
                        id="images"
                        onChange={handleImageSelect}
                        accept=".jpg,.png,.jpeg"
                        multiple
                        required
                        className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
                    />
                </div>
                <button
                    type="submit"
                    className="mb-6 w-full py-3 px-6 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:sharow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                    Create Listing
                </button>
            </form>
        </main>
    );
}
