# VIP Add‑to‑Cart Restriction

This feature prevents guest users from adding VIP‑restricted products to the cart.  
If a product is marked as `vipOnly = true` in the Stencil context, the Add‑to‑Cart action is blocked and a modal prompts the user to log in or register.

---

## ✨ Overview

- Blocks Add‑to‑Cart for guest users on VIP products  
- Displays a modal with Login / Register options  
- Allows normal cart behavior for logged‑in customers  
- Integrates directly into the existing Stencil `product-details.js` submit handler  
- Requires `vipOnly` to be injected into the Stencil context (e.g., via Custom Fields)

---

## 📌 Code Snippet

Place this block inside the Add‑to‑Cart form submit handler in `product-details.js`:


