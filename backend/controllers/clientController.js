const Client = require('../models/Client');

exports.getClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};

exports.createClient = async (req, res) => {
  const { name, description, designation } = req.body;
  let imagePath = '';
  if (req.files && req.files.image) {
    const img = req.files.image;
    imagePath = `uploads/${Date.now()}_${img.name}`;
    await img.mv(imagePath);
  }
  const newClient = new Client({ name, description, designation, image: imagePath });
  await newClient.save();
  res.json(newClient);
};
