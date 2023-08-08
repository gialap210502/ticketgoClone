const router = require("express").Router();
const lark = require('@larksuiteoapi/node-sdk');


const client = new lark.Client({
    appId: 'app id',
    appSecret: 'app secret',
});

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

module.exports = router;