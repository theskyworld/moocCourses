const generateStatList = require('./data/generateStatList');
const Random = require("mockjs").Random;

module.exports = [
    {
        // 根据问卷的id，获取该问卷的所有答卷
        url: "/api/stat/:questionId",
        method: "get",
        response() {
            return {
                errno: 0,
                data: {
                    total: 100,
                    list : generateStatList(15),
                }
            }
        }
    }
]