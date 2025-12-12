import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";


const FILTERS = [
    {
        title: "Room Amenities",
        key: "amenities",
        options: [
            "AC", "Balcony", "Free Wi-Fi", "Television", "Fridge",
            "Room Service", "Heater", "Bathtub", "Attached Bathroom",
        ],
    },
    {
        title: "Property Facilities",
        key: "facilities",
        options: [
            "CCTV Security", "Parking Available", "Lift/Elevator",
            "Laundry Service", "Garden/Outdoor Area", "Gym Access", "Swimming Pool",
        ],
    },
    {
        title: "Guest Preferences",
        key: "preferences",
        options: [
            "Bachelors Allowed", "Girls Allowed", "Couples Allowed",
            "Non-Smoking", "Pet Friendly",
        ],
    },
    {
        title: "Property Type",
        key: "type",
        options: [
            "Apartment", "Villa", "Hostel", "Studio", "Farmhouse", "Shared Room",
        ],
    },
];

const FilterPanel = ({ selectedFilters, setSelectedFilters }) => {
    const [openSections, setOpenSections] = useState({
        amenities: true,
        facilities: false,
        preferences: false,
        type: false,
        price: true,
    });

    const [priceRange, setPriceRange] = useState({
        min: selectedFilters?.priceMin || 0,
        max: selectedFilters?.priceMax || 500000,
    });

    const toggleSection = (key) => {
        setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleToggle = (key, value) => {
        setSelectedFilters((prev) => {
            const values = new Set(prev[key] || []);
            if (values.has(value)) {
                values.delete(value);
            } else {
                values.add(value);
            }
            return { ...prev, [key]: Array.from(values) };
        });
    };

    const handlePriceChange = (type, value) => {
        const newPrice = { ...priceRange, [type]: Number(value) };
        setPriceRange(newPrice);
        setSelectedFilters((prev) => ({
            ...prev,
            priceMin: newPrice.min,
            priceMax: newPrice.max,
        }));
    };

    const handleClear = () => {
        setSelectedFilters({});
        setPriceRange({ min: 0, max: 500000 });
    };

    return (
        <div className="bg-white shadow rounded-lg p-4 w-full max-w-md space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                <button
                    className="text-sm text-blue-600 hover:underline"
                    onClick={handleClear}
                >
                    Clear All
                </button>
            </div>

            {/* Price Range */}
            <div className="border-t pt-3">
                <div
                    className="flex justify-between items-center cursor-pointer mb-2"
                    onClick={() => toggleSection("price")}
                >
                    <h3 className="text-sm font-medium text-gray-700">Price Range</h3>
                    {openSections.price ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>

                {openSections.price && (
                    <div className="space-y-3">
                        {/* Slider */}
                        <Slider
                            range
                            min={0}
                            max={500000}
                            step={500}
                            value={[priceRange.min, priceRange.max]}
                            onChange={([min, max]) => {
                                handlePriceChange("min", min);
                                handlePriceChange("max", max);
                            }}
                            trackStyle={{ backgroundColor: "#facc15", height: 4 }}
                            handleStyle={[
                                { backgroundColor: "#facc15", borderColor: "#facc15" },
                                { backgroundColor: "#facc15", borderColor: "#facc15" },
                            ]}
                            railStyle={{ backgroundColor: "#e5e7eb", height: 4 }}
                        />

                        {/* Min / Max Inputs */}
                        <div className="flex items-center gap-3 text-sm">
                            <input
                                type="number"
                                value={priceRange.min}
                                onChange={(e) => handlePriceChange("min", e.target.value)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="Min"
                            />
                            <span className="text-gray-500">–</span>
                            <input
                                type="number"
                                value={priceRange.max}
                                onChange={(e) => handlePriceChange("max", e.target.value)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="Max"
                            />
                        </div>
                    </div>
                )}
            </div>


            {FILTERS.map(({ title, key, options }) => {
                const isOpen = openSections[key];

                return (
                    <div key={key} className="border-t pt-3">
                        {/* Section Header */}
                        <div
                            className="flex justify-between items-center cursor-pointer mb-2"
                            onClick={() => toggleSection(key)}
                        >
                            <h3 className="text-sm font-medium text-gray-700">{title}</h3>
                            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>

                        {/* Filter Options - Always Fully Visible When Section is Open */}
                        {isOpen && (
                            <div className="flex flex-wrap gap-2">
                                {options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleToggle(key, option)}
                                        className={`px-3 py-1 rounded-full text-sm border transition ${selectedFilters[key]?.includes(option)
                                                ? "bg-yellow-300 text-black border-yellow-500"
                                                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}

        </div>
    );
};

export default FilterPanel;
