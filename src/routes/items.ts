import { Router, type Request, type Response } from 'express';
import pool from '../db';

const router = Router();

// Get all items
router.get('/', async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query('SELECT * FROM items');
    res.json(rows);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Add a new item
router.post('/', async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const { rows } = await pool.query('INSERT INTO items (name) VALUES ($1) RETURNING *', [name]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Database insertion error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update an item
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const { rows } = await pool.query('UPDATE items SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
    res.json(rows[0]);
  } catch (error) {
    console.error('Database update error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete an item
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM items WHERE id = $1', [id]);
    res.status(204).send();
  } catch (error) {
    console.error('Database deletion error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
