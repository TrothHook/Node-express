const Product = require("../models/products");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ price: { $lt: 50 } })
    .sort("price")
    .select("name price")
    .limit(10)
    .skip(1);

  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, name, company, sort, fields, numericFilters } = req.query;

  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === `true` ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };

    const regEx = /\b(<|>|=|>=|<=)\b/g;

    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );

    const options = [`price`, `rating`];

    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if(options.includes(field)) {
        queryObject[field] = {[operator]:Number(value)}
      }
    });
  }

  console.log(queryObject);

  // const products = await Product.find(queryObject);

  // res.status(200).json({ products, nbHits: products.length });

  let results = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(",").join(" ");
    results = results.sort(sortList);
  }

  // if the user didn't pass in the sort key, so default sort based on the times, when those items were created.
  else {
    results = results.sort("createdAt");
  }

  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    results = results.select(fieldsList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  results = results.skip(skip).limit(limit);

  // 23 total items in the database
  // if the limit is 4, then  7+7+7+2 = 23 ==> 4 pages intotal

  const products = await results;

  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
