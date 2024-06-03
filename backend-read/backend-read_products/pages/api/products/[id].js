import dbConnect from "../../../db/dbConnect.js";
import Product from "../../../db/models/product.js";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  if (request.method === "GET") {
    const product = await Product.findById(id);
    return response.status(200).json(product);
  }
}
