const { MongoClient, ServerApiVersion } = require('mongodb');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { classNum, name } = req.body;
    const uri ="mongodb+srv://sunhwa:Young0612!@cluster0.t4awl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    const client = new MongoClient(uri, {
      serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true,
      }
    });

    try {
      await client.connect();
      const database = client.db('test');
      const reservations = database.collection('reservations');

      const newReservation = { classNum, name };

      await reservations.insertOne(newReservation);
      res.status(200).json({ message: 'Reservation successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not add item to database' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
