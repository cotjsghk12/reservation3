const { MongoClient } = require('mongodb');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { grade, class: classNum, number, name } = req.body;
    const uri = "mongodb+srv://sunhwa:Young0612!@cluster0.t4awl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri, {
      serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true,
      }
    });

    try {
      // Connect the client to the server
      await client.connect();

      // Specify the database and collection
      const database = client.db('test');
      const reservations = database.collection('reservations');

      // Create a new reservation document
      const newReservation = { classNum, name };

      // Insert the document into the collection
      await reservations.insertOne(newReservation);

      // Respond to the client
      res.status(200).json({ message: 'Reservation successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not add item to database' });
    } finally {
      // Close the connection to the MongoDB server
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
