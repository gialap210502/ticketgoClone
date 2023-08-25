const lark = require('@larksuiteoapi/node-sdk');
const axios = require('axios');
const client = new lark.Client({
    appId: process.env.APPID_LARKSUITE,
    appSecret: process.env.APPSECRECT_LARKSUITE,
    disableTokenCache: true
});
//AppAccessToken
const urlAppToken = 'https://open.larksuite.com/open-apis/auth/v3/app_access_token/internal';
const data = {
    "app_id": 'cli_a45b055171f8d02f',
    "app_secret": 'GMLRgj2WVLmDp3uXHAXw2ujqQ554Pmjd'
};
//set get Token
let userAccessToken = '';

function setUserAccessToken(token) {
    userAccessToken = token;
}
function getUserAccessToken() {
    return userAccessToken;
}

//BEGIN hanlde get token || handle refresh token
const getAppAccessToken = async () => {
    try {
        const response = await axios.post(urlAppToken, data);
        return response.data.app_access_token;
    } catch (error) {
        throw new Error('Lỗi: ' + error);
    }
}
async function handleGetAccessToken() {
    const appToken = await getAppAccessToken();
    console.log(appToken);
    const now = Date.now();
    return await client.authen.accessToken.create({
        data: {
            grant_type: 'authorization_code',
            code: '0d9oc0daff014aa0ad1de4bd7bm53ape',
        },
    },
        lark.withTenantToken(appToken)
    ).then(res => {
        const timeGetToken = now;
        setUserAccessToken({
            token: res.data.access_token,
            refresh_token: res.data.refresh_token,
            expires_in: res.data.expires_in,
            timeGetToken: timeGetToken
        });
    })
}

async function handleGetNewAccessToken() {
    const appToken = await getAppAccessToken();
    const now = Date.now();
    const refreshToken =  getUserAccessToken();
    client.authen.refreshAccessToken.create({
        data: {
            grant_type: "refresh_token",
            refresh_token: refreshToken.refresh_token
        },
    },
        lark.withTenantToken(appToken)
    ).then(res => {
        const timeGetToken = now;
        setUserAccessToken({
            token: res.data.access_token,
            refresh_token: res.data.refresh_token,
            expires_in: res.data.expires_in,
            timeGetToken: timeGetToken
        });
    });
};
//END hanlde get token || handle refresh token


//BEGIN handle Data From Larksuite
async function fetchTableData(tableId) {
    const tenantToken =  getUserAccessToken();
    return client.bitable.appTableRecord.list({
        path: {
            app_token: 'R8qjb9S2ualuZCs8E66l1JCUgYc',
            table_id: tableId,
        }
    }, lark.withUserAccessToken(tenantToken.token));
}

module.exports = {
    getUserAccessToken,
    handleGetAccessToken,
    handleGetNewAccessToken,
    fetchTableData,
};