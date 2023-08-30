/**
 * @author tsw
 * @description 生成任意长度的随机问卷数据列表
 */

const Random = require("mockjs").Random


function getRandomQuestionList(length = 10, isDeleted = false) {
    const list = []
    for (let i = 0; i < length; i++) {
        list.push({
            id: Random.id(),
            title: Random.title(),
            isPublished: Random.boolean(),
            isStar: Random.boolean(),
            answerCount: Random.integer(50, 100),
            createTime: Random.datetime(),
            isDeleted, // 假删除，问卷列表问卷中的删除按钮控制该值的真假
        })
    }
    return list
}

module.exports = getRandomQuestionList;