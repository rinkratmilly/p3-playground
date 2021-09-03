const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));



// controllers go here
const nftsController = require('./controllers/nfts')
const usersController = require('./controllers/users')
app.use('/api', nftsController)
app.use('/api', usersController)
/* END CONTROLLERS HERE */

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});