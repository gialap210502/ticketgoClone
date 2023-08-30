const router = require("express").Router();
const lark = require('@larksuiteoapi/node-sdk');
const axios = require('axios');
const midleware = require('../midleware/midleware');
const managerToken = require('../managerToken/managerToken')
const urlAppToken = 'https://open.larksuite.com/open-apis/auth/v3/app_access_token/internal';
const client = new lark.Client({
    appId: 'cli_a45b055171f8d02f',
    appSecret: 'GMLRgj2WVLmDp3uXHAXw2ujqQ554Pmjd',
});
const data = {
    "app_id": 'cli_a45b055171f8d02f',
    "app_secret": 'GMLRgj2WVLmDp3uXHAXw2ujqQ554Pmjd'
};
var tenant = '';
var appToken = '';
var codeGetUserToken = 'R8qjb9S2ualuZCs8E66l1JCUgYc';
var refresh_token = '';

router.get('/listTableRecords',midleware.verifyTokenLarkSuite, async (req, res) => {
    (async () => {
        const tenantToken = managerToken.getUserAccessToken();
        for await (const item of await client.bitable.appTableRecord.listWithIterator({
            path: {
                app_token: 'G0cxbn4u8aGSfospSw6lj0y6gOd',
                table_id: 'tblXXQBT0cHJCnpq',
            },
            params: {
                view_id: 'vewgLHHRFG',
            },
        },
            lark.withUserAccessToken(tenantToken.token)
        )) {
            //res.send(item);
            res.status(200).json(item);
        }
    })();
});
router.get('/listRecords', async (req, res) => {
    (async () => {
        for await (const item of await client.bitable.appTableRecord.listWithIterator({
            path: {
                app_token: 'G0cxbn4u8aGSfospSw6lj0y6gOd',
                table_id: 'tbllmMHjhoaJ5Ve8',
            },
            params: {
                view_id: 'vewrCTduB5',
            },
        },
            lark.withTenantToken(tenant)
        )) {
            //res.send(item);
            res.status(200).json(item);
        }
    })();
});


router.get('/auth', async (req, res) => {
    try {
        axios.post(urlAppToken, data)
            .then(response => {
                tenant = response.data.tenant_access_token;
                appToken = response.data.app_access_token;
                //res.status(200).json(tenant);
                res.status(200).json(response.data);
            })
            .catch(error => {
                res.status(400).json('Lỗi: ' + error);
            });

    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.post('/getUserToken', async (req, res) => {
    try {
        // Using 'await' with a promise-based function for better error handling.
        const response = await client.authen.accessToken.create({
            data: {
                grant_type: 'authorization_code',
                code: codeGetUserToken,
            },
        }, lark.withTenantToken(appToken));
        refresh_token = response.data.response.refresh_token;
        res.status(200).json(response); // Send the response as JSON.

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.post('/order', midleware.verifyTokenLarkSuite, async(req, res)=>{
    const userToken = managerToken.getUserAccessToken();
    client.bitable.appTableRecord.create({
        path: {
            app_token: 'G0cxbn4u8aGSfospSw6lj0y6gOd',
            table_id: 'tbllmMHjhoaJ5Ve8',
        },
        data: {
            "fields": {
                "Total": req.body.Total,
                "Customer": req.body.Customer,
                "Date": req.body.Date,
                "Email": req.body.Email,
                "Items": req.body.Items,
                "Orders": req.body.Orders,
                "Phone": req.body.Phone,
                "Qty": req.body.Qty
            }
        },
    },
        lark.withUserAccessToken(userToken.token)
    ).then(response => {
        console.log(response);
        res.json('Create Successful')
    }).catch(error => {
        console.error('Error creating table record:', error);
    });
})



module.exports = router;


