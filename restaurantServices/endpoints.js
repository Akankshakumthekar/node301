module.exports = function (app) {
    app.post('/restaurant/crete-restaurant', (req, res) =>{
        // #swagger.tags= ['restaurant']
        /* #swagger.parameters[newRestaurant] = {
            in: 'body',
            required: true,
            type: 'object',
            schema: {
                        "name": "new- wood",
                        "phone": 7889897889,
                        "location": {
                            "lat": "224342",
                            "long": "432323"
                        },
                        "address": " pune",
                        "cuisine": [
                            "veg"
                        ],
                        "menu": [
                            {
                                "id": "111",
                                "name": "malvani fish",
                                "price": "500"
                            }
                        ],
                        "rating": 4
                    }
        } */
        const newRestaurant = req.body
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })

    app.put('/restaurant/update-restaurant', (req, res) =>{
        // #swagger.tags= ['restaurant']
        /* #swagger.parameters[newRestaurant] = {
            in: 'body',
            required: true,
            type: 'object',
            schema: {
                        "cuisine": [
                            "veg"
                        ],
                        "name": "new- wood",
                        "phone": 7889897889,
                        "location": {
                            "lat": "224342",
                            "long": "432323"
                        },
                        "address": " pune",
                        "rating": 4,
                        "createdAt": "2021-08-04T07:58:38.903Z",
                        "updatedAt": "2021-08-04T07:58:38.903Z",
                        "id": "610a48ae5bb80d1128cd9aed"
            }
        } */
        const newRestaurant = req.body
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })

    app.get('/restaurant/find-all-restaurant', (req, res) =>{
        // #swagger.tags= ['restaurant']
   
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })

    app.post('/restaurant/search', (req, res) =>{
        // #swagger.tags= ['restaurant']
        /* #swagger.parameters[newRestaurant] = {
            in: 'body',
            required: true,
            type: 'object',
            schema: {
                "name": "new- wood"
            }
        } */
        const newRestaurant = req.body
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })

    app.delete('/restaurant/delete', (req, res) =>{
        // #swagger.tags= ['restaurant']
        /* #swagger.parameters[newRestaurant] = {
            in: 'body',
            required: true,
            type: 'object',
            schema: {
                    "id": "6108f2a804457a3f14d57c6e"
            }
        } */
        const newRestaurant = req.body
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })


}