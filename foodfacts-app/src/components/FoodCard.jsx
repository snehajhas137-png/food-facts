export default function FoodCard({ product }) {
  return (
    <div className="card">
      <img
        src={product.image_small_url || "https://via.placeholder.com/100"}
        alt={product.product_name}
      />

      <h3>{product.product_name || "No Name"}</h3>
      <p>{product.brands || "Unknown Brand"}</p>

      <div className="nutrition">
        <p>Calories: {product.nutriments?.["energy-kcal_100g"] || "N/A"}</p>
        <p>Protein: {product.nutriments?.proteins_100g || "N/A"}g</p>
        <p>Carbs: {product.nutriments?.carbohydrates_100g || "N/A"}g</p>
        <p>Fat: {product.nutriments?.fat_100g || "N/A"}g</p>
      </div>
    </div>
  );
}