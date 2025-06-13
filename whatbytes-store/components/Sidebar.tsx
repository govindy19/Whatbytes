"use client";

interface PriceRange {
  label: string;
  min: number;
  max: number;
}

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedPriceRange: PriceRange | null;
  setSelectedPriceRange: (value: PriceRange) => void;
}

const categories = ["electronics", "wearables"];
const priceRanges: PriceRange[] = [
  { label: "Under ₹1000", min: 0, max: 1000 },
  { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
  { label: "Above ₹2000", min: 2000, max: Infinity },
];

export default function Sidebar({
  selectedCategory,
  setSelectedCategory,
  selectedPriceRange,
  setSelectedPriceRange,
}: SidebarProps) {
  return (
    <div className="w-full md:w-1/4 p-4 border-r">
      
      {/* Categories Section with Blue Background */}
      <div className="bg-blue-500 text-white p-4 rounded">
        <h3 className="font-bold mb-2">Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategory === cat}
                  onChange={() =>
                    setSelectedCategory(selectedCategory === cat ? "" : cat)
                  }
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Section (default background) */}
      <div className="mt-6">
        <h3 className="font-bold mb-2">Price</h3>
        <ul className="space-y-2">
          {priceRanges.map((range) => (
            <li key={range.label}>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="price"
                  checked={selectedPriceRange?.label === range.label}
                  onChange={() => setSelectedPriceRange(range)}
                />
                {range.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
