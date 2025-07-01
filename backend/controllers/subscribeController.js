const Subscriber = require('../models/Subscriber');

exports.subscribe = async (req, res) => {
  const { email } = req.body;
  const sub = new Subscriber({ email });
  await sub.save();
  res.json(sub);
};

exports.getSubscribers = async (req, res) => {
  const subs = await Subscriber.find();
  res.json(subs);
};