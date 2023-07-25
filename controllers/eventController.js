const Event = require('../models/eventModel');

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events from the server' });
  }
};

// Create a new event
const createEvent = async (req, res) => {
  try {
    const { title, description, date, time, location } = req.body;
    const event = new Event({ title, description, date, time, location });
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a new event' });
  }
};

// Get event by ID
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the event from the server' });
  }
};



// Delete event by ID
const deleteEventById = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the event' });
  }
};

module.exports = {
  getAllEvents,
  createEvent,
  getEventById,
  deleteEventById
};
