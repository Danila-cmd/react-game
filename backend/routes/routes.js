const express = require('express')
const router = express.Router()
const User = require('../model/User')

router.post('/signup', (request, response) => {

    const createUser = new User({
        name: request.body.name,
        email: request.body.email,
    })

    createUser.save().then(data => {
        response.json(data)
    })
        .catch(error => {
            response.json(error)
        })

})

router.post('/addScore', function (req, res, next) {

    const name = {'name': req.body.name};
    const score = req.body.score

    User.findOneAndUpdate(name,
        {score},
        function (err, doc) {
            if (err) return res.send(500, {error: err});
            return res.send('ok')
        })

})

router.get('/getScore:name', function (req, res, next) {

    const name = {'name': req.params.name};

    User.find(name, (error, data) => {
        if (error) {
            return error
        } else {
            return res.send(data)
        }
    })

})

router.get('/getAllGamer', function (req, res) {
    User.find({}, function (err, gamers) {

        const gamerMap = gamers
        res.send(gamerMap)

    })
})

module.exports = router