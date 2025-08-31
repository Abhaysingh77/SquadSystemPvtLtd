import { validationResult } from "express-validator";
import Contact from "../models/Contact.js";

// Create new contact submission
export const createContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, phone, subject, message } = req.body;
    const contact = new Contact({ name, email, phone, subject, message });
    await contact.save();
    res.json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get all contacts with pagination
export const getContacts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await Contact.countDocuments();
    const data = await Contact.find().sort({ createdAt: -1 }).skip(skip).limit(limit);

    res.json({
      data,
      pagination: { page, limit, total }
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get single contact by ID
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};