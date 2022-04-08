const googleAds = require('./googleAds');
const express = require('express');
const dotenv = require('dotenv');
const { OAuth2Client } = require('google-auth-library');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));

dotenv.config();
const clientId = '357559087367-2fsnvut6uh7rom4go6u6c3ev5epkief3.apps.googleusercontent.com';
const client = new OAuth2Client(clientId);

app.use(express.json());

const users = [];

function addUser(usersArray, newUser) {
  const i = usersArray.findIndex((user) => user.email === newUser.email);
  if (i > -1) usersArray[i] = newUser;
  else usersArray.push(newUser);
}

app.post('/api/google-login', async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: clientId,
  });
  const { name, email, picture } = ticket.getPayload();
  addUser(users, { name, email, picture });
  res.status(201);
  res.json({ name, email, picture });
});

googleAds.getCampaigns();

app.listen(5000, () => {
  console.log(
    `Server is ready at http://localhost:5000`
  );
});