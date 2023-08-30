// 使用craco来覆盖原create-react-app构建工具中对项目的配置
// https://craco.js.org/
// 实现对了例如ESlint、Babel等配置的自定义修改



// 覆盖webpack中的配置
// 实现跨域代理

module.exports = {
    devServer: {
        proxy: {
            // 对于前端所有的/api请求都转发到http://localhost:5002
            "/api" : "http://localhost:5002"
        }
    }
}