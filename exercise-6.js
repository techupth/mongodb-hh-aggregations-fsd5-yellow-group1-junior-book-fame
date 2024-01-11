// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $match: {
      created_at: {
        $gte: ISODate("2021-07-01T00:00:00.000Z"),
        $lt: ISODate("2021-08-01T00:00:00.000Z"),
      },
    },
  },
  {
    $group: {
      _id: "month:7",
      total_sales: { $sum: "$total_price" },
    },
  },
]);
