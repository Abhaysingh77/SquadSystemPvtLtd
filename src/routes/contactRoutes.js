import express from "express";
import { body } from "express-validator";
import { createContact, getContacts, getContactById } from "../controllers/contactController.js";

const router = express.Router();

// POST /api/contact
router.post("/contact", [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("subject").notEmpty().withMessage("Subject is required"),
  body("message").notEmpty().withMessage("Message is required")
], createContact);

// GET /api/contacts
router.get("/contacts", getContacts);

// GET /api/contacts/:id
router.get("/contacts/:id", getContactById);

export default router;