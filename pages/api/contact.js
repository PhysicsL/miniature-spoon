import axios from "axios";

export default async function handler(req, res) {
  const { name, email } = req.body;

  const data = JSON.stringify({
    fields: {
      Name: name,
      Email: email,
    },
  });

  const config = {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
  };

  const airTableRes = await axios.post(
    " https://api.airtable.com/v0/appFNjjlBIdg9n5Fj/Table%201",
    data,
    config
  );

  res.status(200).json({ status: "success" });
}
