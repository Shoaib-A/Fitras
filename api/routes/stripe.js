const express = require("express");
const Stripe = require("stripe");

require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body.cartItems.map((product) => {
    return {
     
      price_data: {
        currency: 'pkr',
        product_data: {
          name: product.title,
          images: [product.img],
          metadata:{
            id: product._id
          }
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    }
  })
  
  const session = await stripe.checkout.sessions.create({
   line_items,
   payment_method_types: ['card'],
   shipping_address_collection: {
    allowed_countries: ['US', 'CA','PK','GB'],
  },  
   shipping_options: [
     { shipping_rate: 'shr_1MnVv8LDF0R8zeLTTm6JgJun' },
     { shipping_rate: 'shr_1MnVwtLDF0R8zeLT4bLJAZgI' },
   ],
   customer_email: req.body.email,
   phone_number_collection:{
    enabled: true,
   },
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}carts`,
  });

  
  res.send({ url: session.url });
});

module.exports = router;