const Random = require("mockjs").Random;


module.exports = [
    {
        url: "/api/userinfo",
        method: "get",
        response() {
            return {
                errno: 0,
                data: {
                    name: Random.name(),
                }
            }
        }
    }
]