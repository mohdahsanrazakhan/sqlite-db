const { Service } = require('../models')

// Create Service
exports.createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read all Service
exports.getAllService = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read Service by ID
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if(service) {
      res.json(service);
    } else {
      res.status(404).json({ error: 'Service not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Service
exports.updateService = async (req, res) => {
  try {
    const [updated] = await Service.update(req.body, {
      where: { id: req.params.id }
    });
    if(updated) {
      const updatedService = await Service.findByPk(req.params.id);
      res.json(updatedService);
    } else {
      res.status(404).json({ error: error.message });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Service
exports.deleteService = async (req, res) => {
  try {
    const deleted = await Service.destroy({
      where: { id: req.params.id }
    });
    if(deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Service not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};