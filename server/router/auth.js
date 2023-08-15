const router = require("express").Router();
const lark = require('@larksuiteoapi/node-sdk');
const axios = require('axios');


const urlAppToken = 'https://open.larksuite.com/open-apis/auth/v3/app_access_token/internal';
const client = new lark.Client({
    appId: 'cli_slkdjalasdkjasd',
    appSecret: 'dskLLdkasdjlasdKK',
});
const data = {
    "app_id": 'cli_a45b055171f8d02f',
    "app_secret": 'GMLRgj2WVLmDp3uXHAXw2ujqQ554Pmjd'
};
var tenant = '';


router.get('/listTableRecords', async (req, res) => {
    (async () => {
        for await (const item of await client.bitable.appTableRecord.listWithIterator({
            path: {
                app_token: 'G0cxbn4u8aGSfospSw6lj0y6gOd',
                table_id: 'tblXXQBT0cHJCnpq',
            },
            params: {
                view_id: 'vewgLHHRFG',
                page_size: 20,
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
                res.status(200).json(tenant);
            })
            .catch(error => {
                res.status(400).json('Lỗi: ' + error);
            });

    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;


