module.exports = function (app) {
    app.post('/customer/create-customer', (req, res) =>{
        // #swagger.tags= ['Customer']
        /* #swagger.parameters[newCustomer] = {
            in: 'body',
            required: true,
            type: 'object',
            schema: {
                "name": "john",
                "gender": "F",
                "city":"mumbai",
                "phone": "7889788960",
                "email": "john@gmail.com",
                "address": "mumbai",
                "password": "Test@3"
            }
        } */
        const newCustomer = req.body
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })

    app.put('/customer/update-customer', (req, res) =>{
        // #swagger.tags= ['Customer']
        /* #swagger.parameters[newCustomer] = {
            in: 'body',
            required: true,
            type: 'object',
            schema: {
                "id": "1",
                "name": "john",
                "gender": "F",
                "city":"mumbai",
                "phone": "7889788960",
                "email": "john@gmail.com",
                "address": "mumbai"
            }
        } */
        const newCustomer = req.body
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })

    app.get('/customer/find-customer', (req, res) =>{
        // #swagger.tags= ['Customer']
        /* #swagger.parameters['customerId'] = {description: "enter customerID"} */
        const newCustomer = req.body
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })

    app.delete('/customer/delete-cutomer', (req, res) =>{
        // #swagger.tags= ['Customer']
        /* #swagger.parameters['newCustomer'] = {
            in: 'body',
            required: true,
            type: 'object',
            schema: {
                "customerId": "1"
            }
        } */
        const newCustomer = req.body
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })

    app.post('/customer/login', (req, res) =>{
        // #swagger.tags= ['Customer']
        /* #swagger.parameters[newCustomer] = {
            in: 'body',
            required: true,
            type: 'object',
            schema: {
                email: "admin@gmail.com",
                password: "test@12"
            }
        } */
        const newCustomer = req.body
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })

    app.post('/token/create-token', (req, res) =>{
        // #swagger.tags= ['token']
        /* #swagger.parameters['newToken'] = {
            in: 'body',
            required: true,
            type: 'object',
            schema: {
                email: "admin@gmail.com",
                password: "test@12"
            }
        } */
        const newToken = req.body
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })

}