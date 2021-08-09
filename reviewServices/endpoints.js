module.exports = function (app) {
    app.post('/review/crete-review', (req, res) =>{
        // #swagger.tags= ['Review']
        /* #swagger.parameters[newReview] = {
            in: 'body',
            required: true,
            type: 'object',
            schema: {
                     "custId": "12A",
                    "datetime": "2021-02-02",
                    "restaurentId": "PPPP",
                    "orderId": "123",
                    "rating": "5",
                    "review": "good"
            }
        } */
        const newReview = req.body
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })

    app.put('/review/update-review', (req, res) =>{
        // #swagger.tags= ['Review']
        /* #swagger.parameters[newReview] = {
            in: 'body',
            required: true,
            type: 'object',
            schema: {
                    "custId": "123456789",
                    "datetime": "2021-02-02T00:00:00.000Z",
                    "restaurentId": "PPPP",
                    "orderId": "123",
                    "rating": 3,
                    "review": "good",
                    "createdAt": "2021-08-03T07:39:20.794Z",
                    "updatedAt": "2021-08-03T07:39:20.794Z",
                    "id": "6108f2a804457a3f14d57c6e"
            }
        } */
        const newReview = req.body
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })

    app.get('/review/find-all-review', (req, res) =>{
        // #swagger.tags= ['Review']
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })

    // app.get('/review/find-review-by-id', (req, res) =>{
    //      // #swagger.tags= ['Review']
    //     /* #swagger.parameters['id'] = {description: "enter orderID"} */
    //     const newReview = req.body
    //     if(false)
    //     return res.status(404).send(false)
    //     else {
    //         return res.status(200).send(data)
    //     }
    //     return res.status(500)
    // })

    app.delete('/review/delete', (req, res) =>{
        // #swagger.tags= ['Review']
        /* #swagger.parameters[newReview] = {
            in: 'body',
            required: true,
            type: 'object',
            schema: {
                    "id": "6108f2a804457a3f14d57c6e"
            }
        } */
        const newReview = req.body
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })


}