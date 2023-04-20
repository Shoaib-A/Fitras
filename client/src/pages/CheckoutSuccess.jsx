import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    // Simulate order creation
    const timer = setTimeout(() => {
      const newOrderId = Math.floor(Math.random() * 100000);
      setOrderId(newOrderId);
    }, 2000);

    // Clear timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E2E8F0",
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#1A202C",
        textAlign: "center"
      }}
    >
      {orderId ? (
        <div>
          <h1 style={{ fontSize: "3rem", marginBottom: "2rem" }}>
            Order Confirmed!
          </h1>
          <p style={{ marginBottom: "1rem" }}>
            Your order number is <strong>{orderId}</strong>.
          </p>
          <p>Thank you for your purchase.</p>
        </div>
      ) : (
        <div>
          <h1 style={{ fontSize: "3rem", marginBottom: "2rem" }}>
            Order Processing...
          </h1>
          <p>Please wait while we prepare your order.</p>
        </div>
      )}
      <Link to="/" style={{ textDecoration: "none" }}>
        <button
          style={{
            backgroundColor: "#1A202C",
            color: "#F9FAFB",
            padding: "1rem",
            border: "none",
            borderRadius: "0.25rem",
            marginTop: "2rem",
            cursor: "pointer"
          }}
        >
          Return to Homepage
        </button>
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
