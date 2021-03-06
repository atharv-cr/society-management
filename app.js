const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./config/database')
const societyRegistrationRoutes = require('./routes/newsociety-route')
const userRegistrationRoutes = require('./routes/userRegistration-route')
const userRoutes = require('./routes/user-route')
const alertRoutes = require('./routes/alert-route')
const visitorsRoutes = require('./routes/visitor-routes')
const discussionRoutes = require('./routes/discussion-route')
require('dotenv').config()



app.use(bodyParser.json())
app.use('/api/society-registration',societyRegistrationRoutes)
app.use('/api/users-registration',userRegistrationRoutes)
app.use("/api/user",userRoutes);
app.use('/api/user/emergency',alertRoutes)
app.use('/api/user/discussions',discussionRoutes)
app.use('/api/user/visitors',visitorsRoutes)





database.connect().then(
    app.listen(process.env.PORT || 8000)
).catch((error) => {
    console.log(error)
})




