module.exports = function (app) {
    app.post('/order/crete-order', (req, res) =>{
        // #swagger.tags= ['order']
        /* #swagger.parameters[newOrder] = {
            in: 'body',
            required: true,
            type: 'object',
            schema: {
                    "customerId": "cust2",
                    "restaurentId": "rest2",
                    "itemName": "malvani fish",
                    "qty": "3",
                    "price": 100,
                    "paid": "googlePay"
            }
        } */
        const newOrder = req.body
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })

    app.put('/order/update-order', (req, res) =>{
        // #swagger.tags= ['order']
        /* #swagger.parameters[newOrder] = {
            in: 'body',
            required: true,
            type: 'object',
            schema: {
                    "customerId": "cust2",
                    "restaurentId": "rest2",
                    "qty": 3,
                    "price": 100,
                    "amountToPay": 300,
                    "paid": "googlePay",
                    "createdAt": "2021-08-04T09:53:18.361Z",
                    "updatedAt": "2021-08-04T09:53:18.361Z",
                    "id": "610a638ed1b5311b5cd498eb"
            }
        } */
        const newOrder = req.body
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })

    app.get('/order/find-order-by-customerId', (req, res) =>{
        // #swagger.tags= ['order']
                /* #swagger.parameters['customerId'] = {description: "enter customerId"} */
        const newOrder = req.body
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })

    // app.get('/order/find-order-by-id', (req, res) =>{
    //      // #swagger.tags= ['order']
    //     /* #swagger.parameters['orderId'] = {description: "enter orderID"} */
    //     const newCustomer = req.body
    //     if(false)
    //     return res.status(404).send(false)
    //     else {
    //         return res.status(200).send(data)
    //     }
    //     return res.status(500)
    // })

    app.delete('/order/delete', (req, res) =>{
        // #swagger.tags= ['order']
        /* #swagger.parameters[newOrder] = {
            in: 'body',
            required: true,
            type: 'object',
            schema: {
                    "id": "6108f2a804457a3f14d57c6e"
            }
        } */
        const newOrder = req.body
        if(false)
        return res.status(404).send(false)
        else {
            return res.status(200).send(data)
        }
        return res.status(500)
    })

}