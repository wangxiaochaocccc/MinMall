let baseURL;

switch(process.env.NODE_ENV) {
    case 'development':
        baseURL = 'https://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL = 'https://test-mall-pre.springboot.cn/api';
        break;
    case 'production':
        baseURL = 'https://mall-pre.springboot.cn/api';
        break;
    default:
        baseURL = 'https://mall-pre.springboot.cn/api';
        break;
}

export default {
    baseURL
}