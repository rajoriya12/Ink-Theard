'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Grid() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  
  // Filters States
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(10000);
  const [highestProductPrice, setHighestProductPrice] = useState(10000);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products", { cache: "no-store" });
      const data = await res.json();
      if (data.success) {
        setProducts(data.products);
        
        if (data.products.length > 0) {
          const prices = data.products.map(p => Number(p.price || 0));
          const maxInUnder = Math.max(...prices);
          setHighestProductPrice(maxInUnder);
          setMaxPrice(maxInUnder);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.category).filter(Boolean))];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice = Number(product.price) <= maxPrice;
    return matchesCategory && matchesPrice;
  });

  return (
    <section style={{ background: "#0a0a0a", color: "#fff", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Top Header Section */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "40px", marginBottom: "10px", fontWeight: "bold" }}>Our Collection</h2>
          <p style={{ color: "#666", fontSize: "15px" }}>
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* --- MAIN LAYOUT CONTAINER (Amazon/Flipkart Style) --- */}
        <div className="ecommerce-layout" style={{ display: "flex", gap: "30px", alignItems: "flex-start" }}>
          
          {/* 1. LEFT SIDEBAR: Filters (Stays on left in desktop) */}
          <aside style={{
            width: "280px",
            background: "#111",
            padding: "25px",
            borderRadius: "16px",
            border: "1px solid #222",
            position: "sticky",
            top: "20px",
            flexShrink: 0,
          }} className="filter-sidebar">
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid #222", paddingBottom: "15px" }}>
              <h3 style={{ fontSize: "18px", margin: 0, fontWeight: "600" }}>Filters</h3>
              {(selectedCategory !== "All" || maxPrice < highestProductPrice) && (
                <button
                  onClick={() => { setSelectedCategory("All"); setMaxPrice(highestProductPrice); }}
                  style={{ background: "transparent", border: "none", color: "#ff4d4d", cursor: "pointer", fontSize: "13px" }}
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div style={{ marginBottom: "30px" }}>
              <h4 style={{ fontSize: "14px", color: "#999", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>Categories</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => { setSelectedCategory(category); setVisibleProducts(8); }}
                    style={{
                      textAlign: "left",
                      padding: "10px 15px",
                      borderRadius: "8px",
                      border: "1px solid " + (selectedCategory === category ? "#b08d57" : "#222"),
                      background: selectedCategory === category ? "rgba(176, 141, 87, 0.1)" : "transparent",
                      color: selectedCategory === category ? "#b08d57" : "#ccc",
                      cursor: "pointer",
                      textTransform: "capitalize",
                      transition: "all 0.2s"
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter (Slider Line) */}
            <div>
              <h4 style={{ fontSize: "14px", color: "#999", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>Price Range</h4>
              <div style={{ marginBottom: "10px", fontSize: "15px" }}>
                Max: <span style={{ color: "#b08d57", fontWeight: "bold" }}>₹{maxPrice}</span>
              </div>
              <input
                type="range"
                min="0"
                max={highestProductPrice}
                value={maxPrice}
                onChange={(e) => { setMaxPrice(Number(e.target.value)); setVisibleProducts(8); }}
                style={{ width: "100%", accentColor: "#b08d57", cursor: "pointer", background: "#333", height: "4px" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", color: "#555", fontSize: "12px", marginTop: "5px" }}>
                <span>₹0</span>
                <span>₹{highestProductPrice}</span>
              </div>
            </div>
          </aside>

          {/* 2. RIGHT SIDE: Product Grid */}
          <div style={{ flexGrow: 1 }}>
            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: "center", color: "#666", padding: "80px 0", background: "#111", borderRadius: "16px", border: "1px solid #222" }}>
                No products found matching your criteria.
              </div>
            ) : (
              <div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "25px",
                }}>
                  {filteredProducts.slice(0, visibleProducts).map((product) => (
                    <Link
                      href={`/products/${product._id}`}
                      key={product._id}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div
                        style={{
                          background: "#111",
                          borderRadius: "12px",
                          overflow: "hidden",
                          border: "1px solid #222",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          cursor: "pointer",
                          transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "#b08d57";
                          e.currentTarget.style.transform = "translateY(-6px)";
                          e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.5)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "#222";
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div style={{ position: "relative", width: "100%", height: "300px", overflow: "hidden" }}>
                          <img
                            src={product.image || "/no-image.jpeg"}
                            alt={product.title}
                            onError={(e) => { e.currentTarget.src = "/no-image.jpeg"; }}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </div>

                        <div style={{ padding: "18px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                          <span style={{ color: "#b08d57", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "5px", display: "block" }}>
                            {product.category}
                          </span>

                          <h3 style={{ fontSize: "18px", marginBottom: "8px", fontWeight: "500", color: "#fff", lineHeight: "1.4" }}>
                            {product.title}
                          </h3>

                          <div style={{ marginTop: "auto", paddingTop: "15px" }}>
                            <h4 style={{ fontSize: "19px", color: "#fff", margin: "0 0 12px 0", fontWeight: "600" }}>
                              ₹{product.price}
                            </h4>
                            
                            <button className="retro-btn" style={{
                              width: "100%",
                              padding: "10px",
                              border: "none",
                              borderRadius: "6px",
                              color: "#fff",
                              fontWeight: "bold",
                              cursor: "pointer",
                              fontSize: "14px"
                            }}>
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Load More Button */}
                {visibleProducts < filteredProducts.length && (
                  <div style={{ textAlign: "center", marginTop: "40px" }}>
                    <button
                      className="retro-btn"
                      onClick={() => setVisibleProducts(visibleProducts + 8)}
                      style={{ padding: "12px 35px", borderRadius: "8px" }}
                    >
                      Load More
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* --- CSS FOR MOBILE RESPONSIVENESS --- */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .ecommerce-layout {
            flex-direction: column !map;
          }
          .filter-sidebar {
            width: 100% !important;
            position: relative !important;
            top: 0 !important;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
}