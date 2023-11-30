const express = require('express');
const router = express.Router();
const Fighter = require('../models/fighter.model');

// Get all fighters
router.get('/fighters', async (req, res) => {
  try {
    const fighters = await Fighter.find();
    res.json(fighters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific fighter
router.get('/fighters/:id', async (req, res) => {
  try {
    const fighter = await Fighter.findById(req.params.id);
    res.json(fighter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new fighter
router.post('/fighters/create', async (req, res) => {
  const fighter = new Fighter(req.body);

  try {
    const newFighter = await fighter.save();
    res.status(201).json(newFighter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a fighter
router.patch('/fighters/edit/:id', async (req, res) => {
  try {
      const updatedFighter = await Fighter.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
      );
      res.json(updatedFighter);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

// Delete a fighter
router.delete('/fighters/:id', async (req, res) => {
  try {
    await Fighter.findByIdAndDelete(req.params.id);
    res.json({ message: 'Fighter deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
