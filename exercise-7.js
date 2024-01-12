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
      "_id.year": 2021,
    },
  },
  {
    $sort: { total_price_per_year: 1 },
  },
  {
    $limit: 1,
  },
]);
