const photosCtrl = {}

const conn = require('../db');

photosCtrl.createPhoto = async (req, res) => {
    try {
        await conn.query('INSERT INTO photo SET ?', [req.body], (err) => {
            if (!err) {
                res.status(200).json({message: 'Foto guardada'});
            } else {
                res.status(401).json({ message: err })
            }
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

photosCtrl.getPhotos = async (req, res) => {
  try {
    await conn.query('SELECT * FROM photo', (err, rows) => {
      if (!err) {
        res.status(200).json(rows);
      }
      else {
        res.status(401).json({ message: 'Nota not found' })
      }
    });
}
catch (error) {
    res.status(500).json({ message: 'Server error' });
}
}

photosCtrl.getPhoto = async (req, res) => {
    try {
        const { id } = req.params;
        await conn.query('SELECT * FROM photo WHERE id = ?', [id], (err, rows) => {
          if (!err) {
            res.status(200).json(rows[0]);
          }
          else {
            res.status(401).json({ message: 'Foto not found' })
          }
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

photosCtrl.updatePhoto = async (req, res) => {
    try {
      let { title, description, image, created_at} = req.body;
      const { id } = req.params;
      await conn.query('UPDATE photo SET title = ?, description = ?, image = ?, created_at = ? WHERE id = ?', [title, description, image, created_at, id], (err) => {
        if (!err) {
          res.status(200).json({ message: 'Foto actualizada' })
        }
        else {
          res.status(401).json({ message: 'Error al actualizar' })
        }
      });
  }
  catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

photosCtrl.deletePhoto = async (req, res) => {
    try {
      const { id } = req.params;
      await conn.query('DELETE FROM photo WHERE id = ?', [id], (err) => {
        if (!err) {
          res.status(200).json({ message: 'Foto borrada' });
        }
        else {
          res.status(401).json({ message: 'Error al borrar nota' })
        }
      });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = photosCtrl;