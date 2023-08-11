const router = require("express").Router();
const lark = require('@larksuiteoapi/node-sdk');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const url = 'https://open.larksuite.com/open-apis/authen/v1/index?redirect_uri=https://open.larksuite.com/&app_id=cli_a45b055171f8d02f&state=1';
const urlAppToken = 'https://open.larksuite.com/open-apis/auth/v3/app_access_token/internal';
const client = new lark.Client({
    appId: 'cli_slkdjalasdkjasd',
    appSecret: 'dskLLdkasdjlasdKK',
});
const data = {
    "app_id": process.env.app_id,
    "app_secret": process.env.app_secret
};
router.get('/listTableRecords', async (req, res) => {
    try {
        const response = await client.bitable.appTableRecord.list({
            path: {
                app_token: 'G0cxbn4u8aGSfospSw6lj0y6gOd',
                table_id: 'tblXXQBT0cHJCnpq',
            },
            params: {
                page_size: 20,
            },
        }, lark.withUserAccessToken("u-fL.96jl4Z7nbDXPnN0YpPUlhjjku15xbog0wlgw020jc"));

        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.post('/auth', async (req, res) => {
    try {
        axios.post(urlAppToken, data)
            .then(response => {
                res.send(response.data.app_access_token);
            })
            .catch(error => {
                res.send('Lỗi: ' + error);
            });

    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});






module.exports = router;