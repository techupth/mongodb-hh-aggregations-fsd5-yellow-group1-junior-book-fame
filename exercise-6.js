// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { month: { $month: "$created_at" }, year: { $year: "$created_at" } },
      total_price_per_year: { $sum: "$total_price" },
    },
  },
  {
    $match: {
      _id: { month: 7, year: 2021 },
    },
  },
]);
