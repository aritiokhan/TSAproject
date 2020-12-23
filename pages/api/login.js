server.post('/api/contact', (req, res) => {
    const { email, name } = req.body
    console.log(req.body)
    res.send('success')
  })