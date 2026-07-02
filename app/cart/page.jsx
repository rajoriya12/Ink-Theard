"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const GOLD = "#b08d57";
const GOLD_LIGHT = "#c9a876";

export default function CartPage() {
  const router = useRouter();

  const [cart, setCart] = useState([]);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");

    if (!email) {
      router.push("/login");
      return;
    }

    const cartKey = `cart_${email}`;
    const items = JSON.parse(localStorage.getItem(cartKey)) || [];

    setCart(items);
    setCheckingAuth(false);
  }, [router]);

  if (checkingAuth) return null;

  const updateCart = (updatedCart) => {
    const email = localStorage.getItem("userEmail");
    const cartKey = `cart_${email}`;

    setCart(updatedCart);
    localStorage.setItem(cartKey, JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    updateCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    updateCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price || 0) * (item.quantity || 1),
    0
  );

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  // ---------- styles ----------
  const styles = {
    page: {
      minHeight: "100vh",
      background:
        "radial-gradient(circle at 20% 0%, #1a1a1a 0%, #000000 55%)",
      color: "#fff",
      paddingTop: "8rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "3rem",
      fontFamily: "inherit",
    },
    container: {
      maxWidth: "1280px",
      margin: "0 auto",
    },
    heading: {
      fontSize: "clamp(2.2rem, 4vw, 3rem)",
      fontWeight: 800,
      marginBottom: "2.5rem",
      background: `linear-gradient(90deg, #ffffff 0%, ${GOLD_LIGHT} 100%)`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "-0.02em",
    },
    emptyBox: {
      background: "linear-gradient(145deg, #141414, #0a0a0a)",
      border: "1px solid #262626",
      borderRadius: "1.75rem",
      padding: "3.5rem 2rem",
      textAlign: "center",
      boxShadow: "0 0 40px rgba(176,141,87,0.06)",
    },
    emptyTitle: {
      fontSize: "1.6rem",
      fontWeight: 700,
      marginBottom: "0.75rem",
    },
    emptyText: {
      color: "#a1a1aa",
      marginBottom: "1.5rem",
    },
    exploreBtn: (hovered) => ({
      background: hovered
        ? `linear-gradient(90deg, ${GOLD_LIGHT}, ${GOLD})`
        : `linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT})`,
      color: "#000",
      padding: "0.85rem 1.75rem",
      borderRadius: "0.9rem",
      fontWeight: 700,
      border: "none",
      cursor: "pointer",
      transform: hovered ? "scale(1.05)" : "scale(1)",
      transition: "all 0.25s ease",
      boxShadow: hovered ? `0 6px 20px rgba(176,141,87,0.35)` : "none",
    }),
    layoutWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      flex: 1,
    },
    card: (hovered) => ({
      background: "linear-gradient(145deg, #141414, #0c0c0c)",
      border: `1px solid ${hovered ? GOLD : "#262626"}`,
      borderRadius: "1.75rem",
      padding: "1.5rem",
      display: "flex",
      gap: "1.5rem",
      transition: "all 0.3s ease",
      boxShadow: hovered
        ? "0 8px 30px rgba(176,141,87,0.15)"
        : "0 4px 15px rgba(0,0,0,0.3)",
    }),
    img: {
      width: "12rem",
      height: "12rem",
      objectFit: "contain",
      borderRadius: "1.25rem",
      border: "1px solid #262626",
      background: "#fff",
      padding: "0.5rem",
      flexShrink: 0,
    },
    itemBody: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    itemTitle: {
      fontSize: "1.4rem",
      fontWeight: 700,
      marginBottom: "0.4rem",
    },
    itemPrice: {
      color: GOLD_LIGHT,
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    qtyRow: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginTop: "0.75rem",
    },
    qtyBtn: (hovered) => ({
      width: "2.2rem",
      height: "2.2rem",
      borderRadius: "9999px",
      border: "none",
      background: hovered ? "#4b4b4b" : "#2e2e2e",
      color: "#fff",
      fontSize: "1.1rem",
      fontWeight: 700,
      cursor: "pointer",
      transition: "background 0.2s ease",
    }),
    qtyValue: {
      fontSize: "1.1rem",
      fontWeight: 600,
      minWidth: "1.5rem",
      textAlign: "center",
    },
    itemTotal: {
      color: "#4ade80",
      marginTop: "0.75rem",
      fontWeight: 600,
    },
    actionCol: {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      justifyContent: "center",
      minWidth: "160px",
    },
    buyBtn: (hovered) => ({
      background: hovered
        ? `linear-gradient(90deg, ${GOLD_LIGHT}, ${GOLD})`
        : `linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT})`,
      color: "#000",
      padding: "0.85rem 1.5rem",
      borderRadius: "0.9rem",
      fontWeight: 700,
      border: "none",
      width: "100%",
      cursor: "pointer",
      transform: hovered ? "scale(1.04)" : "scale(1)",
      transition: "all 0.25s ease",
    }),
    removeBtn: (hovered) => ({
      background: hovered ? "#dc2626" : "#b91c1c",
      color: "#fff",
      padding: "0.85rem 1.5rem",
      borderRadius: "0.9rem",
      fontWeight: 700,
      border: "none",
      width: "100%",
      cursor: "pointer",
      transition: "background 0.2s ease",
    }),
    sidebar: {
      width: "100%",
    },
    summaryBar: {
      background: "linear-gradient(145deg, #161616, #0a0a0a)",
      border: `1px solid #2a2a2a`,
      borderRadius: "1.75rem",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    },
    summaryTitle: {
      fontSize: "1.4rem",
      fontWeight: 700,
      borderBottom: "1px solid #262626",
      paddingBottom: "0.75rem",
      color: "#fff",
    },
    summaryRow: {
      display: "flex",
      justifyContent: "space-between",
      color: "#a1a1aa",
      fontSize: "1.05rem",
    },
    grandLabel: {
      fontWeight: 700,
      color: "#fff",
      fontSize: "1.2rem",
    },
    grandTotal: {
      fontSize: "2rem",
      fontWeight: 800,
      color: GOLD_LIGHT,
    },
    checkoutBtn: (hovered) => ({
      background: hovered
        ? `linear-gradient(90deg, ${GOLD_LIGHT}, ${GOLD})`
        : `linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT})`,
      color: "#000",
      padding: "1rem 2rem",
      borderRadius: "1.1rem",
      fontWeight: 800,
      fontSize: "1.1rem",
      border: "none",
      cursor: "pointer",
      width: "100%",
      transform: hovered ? "scale(1.02)" : "scale(1)",
      transition: "all 0.25s ease",
      boxShadow: hovered ? `0 8px 24px rgba(176,141,87,0.35)` : "none",
    }),
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Shopping Cart</h1>

        {cart.length === 0 ? (
          <div style={styles.emptyBox}>
            <h2 style={styles.emptyTitle}>Your Cart is Empty</h2>
            <p style={styles.emptyText}>Add some products and come back.</p>

            <Link href="/collections" style={{ textDecoration: "none" }}>
              <button
                style={styles.exploreBtn(hoveredBtn === "explore")}
                onMouseEnter={() => setHoveredBtn("explore")}
                onMouseLeave={() => setHoveredBtn(null)}
              >
                Explore Collections
              </button>
            </Link>
          </div>
        ) : (
          <div style={styles.layoutWrapper} className="cart-layout-container">
            {/* Left Side: Items List */}
            <div style={styles.list}>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={styles.card(hoveredCard === item.id)}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="cart-item-row"
                >
                  <img src={item.image} alt={item.title} style={styles.img} />

                  <div style={styles.itemBody}>
                    <div>
                      <h2 style={styles.itemTitle}>{item.title}</h2>
                      <p style={styles.itemPrice}>₹{item.price}</p>
                    </div>

                    <div>
                      <div style={styles.qtyRow}>
                        <button
                          onClick={() => decreaseQty(item.id)}
                          style={styles.qtyBtn(hoveredBtn === `dec-${item.id}`)}
                          onMouseEnter={() => setHoveredBtn(`dec-${item.id}`)}
                          onMouseLeave={() => setHoveredBtn(null)}
                        >
                          -
                        </button>

                        <span style={styles.qtyValue}>{item.quantity || 1}</span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          style={styles.qtyBtn(hoveredBtn === `inc-${item.id}`)}
                          onMouseEnter={() => setHoveredBtn(`inc-${item.id}`)}
                          onMouseLeave={() => setHoveredBtn(null)}
                        >
                          +
                        </button>
                      </div>

                      <p style={styles.itemTotal}>
                        Item Total: ₹{item.price * (item.quantity || 1)}
                      </p>
                    </div>
                  </div>

                  <div style={styles.actionCol} className="cart-action-col">
                    <Link
                      href={`/chakeout?id=${item.id}`}
                      style={{ width: "100%", textDecoration: "none" }}
                    >
                      <button
                        style={styles.buyBtn(hoveredBtn === `buy-${item.id}`)}
                        onMouseEnter={() => setHoveredBtn(`buy-${item.id}`)}
                        onMouseLeave={() => setHoveredBtn(null)}
                      >
                        Buy Now
                      </button>
                    </Link>

                    <button
                      onClick={() => removeItem(item.id)}
                      style={styles.removeBtn(
                        hoveredBtn === `remove-${item.id}`
                      )}
                      onMouseEnter={() => setHoveredBtn(`remove-${item.id}`)}
                      onMouseLeave={() => setHoveredBtn(null)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Sticky Checkout Sidebar */}
            <div style={styles.sidebar} className="cart-sidebar-container">
              <div style={styles.summaryBar}>
                <h2 style={styles.summaryTitle}>Price Details</h2>
                
                <div style={styles.summaryRow}>
                  <span>Price ({totalItems} items)</span>
                  <span>₹{total}</span>
                </div>
                
                <div style={styles.summaryRow}>
                  <span>Delivery Charges</span>
                  <span style={{ color: "#4ade80" }}>FREE</span>
                </div>

                <div style={{ ...styles.summaryRow, borderTop: "1px dashed #2a2a2a", paddingTop: "1rem", marginTop: "0.5rem" }}>
                  <span style={styles.grandLabel}>Total Amount</span>
                  <span style={styles.grandTotal}>₹{total}</span>
                </div>

                <button
                  style={styles.checkoutBtn(hoveredBtn === "checkout")}
                  onMouseEnter={() => setHoveredBtn("checkout")}
                  onMouseLeave={() => setHoveredBtn(null)}
                >
                  Checkout All
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Responsive adjustments for desktop vs mobile side-by-side split */}
      <style jsx>{`
        .cart-item-row {
          flex-direction: column;
        }
        @media (min-width: 768px) {
          .cart-item-row {
            flex-direction: row !important;
          }
        }
        @media (max-width: 991px) {
          .cart-action-col {
            flex-direction: row !important;
            width: 100%;
          }
        }
        @media (min-width: 992px) {
          .cart-layout-container {
            flex-direction: row !important;
            align-items: flex-start;
          }
          .cart-sidebar-container {
            width: 380px !important;
            position: sticky !important;
            top: 9.5rem;
          }
        }
      `}</style>
    </div>
  );
}