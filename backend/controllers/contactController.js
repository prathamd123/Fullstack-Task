const ContactForm = require('../models/ContactForm');

exports.submitContact = async (req, res) => {
  const { name, email, mobile, city } = req.body;
  const contact = new ContactForm({ name, email, mobile, city });
  await contact.save();
  res.json(contact);
};

exports.getContacts = async (req, res) => {
  const contacts = await ContactForm.find();
  res.json(contacts);
};