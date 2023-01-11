// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { v4 as uuid } from "uuid";
import fs from "fs";

export default async function handler(req, res) {
  const id = uuid();
  const file = await fs.promises.readFile("tmp/users.json");
  let jsData = JSON.parse(file);
  let newData = [...jsData, id];
  let unique = new Set(newData);
  let data = [...unique];
  await fs.promises.writeFile("tmp/users.json", JSON.stringify(data));

  res.status(200).json({ id });
}
