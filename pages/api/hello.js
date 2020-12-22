// Example firebase connect stuff
let admin = require('firebase-admin');




export default (req, res) => {


  admin
  .auth()
  .getUserByEmail("zeng@zeng.com")
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    res.json(userRecord.toJSON());
  })
  .catch(() => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })

  })


}
