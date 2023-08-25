const managerToken = require ("../managerToken/managerToken");

const midlewareAuth = {
    verifyTokenLarkSuite: async (req,res,next) => {
        let now =  Date.now();
        let dataLarkSuite =  managerToken.getUserAccessToken();
        let timeOut = (now - dataLarkSuite.timeGetToken) / 1000;
        if (timeOut >= 6) {
            await managerToken.handleGetNewAccessToken()
            .then(() => {
                next();
            })
            .catch(error => {
                console.error('Không thể lấy mới AccessToken:', error);
                res.status(500).json({ error: 'Internal server error' });
            });
        }
        else {
            next();
        }
    },
}
module.exports = midlewareAuth