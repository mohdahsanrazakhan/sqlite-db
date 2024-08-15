const { Notes } = require('../models');

// Create a new Note
exports.createNote = async (req, res) => {
  try {
    const note = await Notes.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Notes
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.findAll();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Note by ID
exports.getNoteById = async (req, res) => {
  try {
    const note = await Notes.findByPk(req.params.id);
    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ error: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Note
exports.updateNote = async (req, res) => {
  try {
    const [updated] = await Notes.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedNote = await Notes.findByPk(req.params.id);
      res.status(200).json(updatedNote);
    } else {
      res.status(404).json({ error: 'Note not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Note
exports.deleteNote = async (req, res) => {
  try {
    const deleted = await Notes.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
