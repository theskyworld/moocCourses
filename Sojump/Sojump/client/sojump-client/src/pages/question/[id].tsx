// 动态路由文件
// 访问该文件时,输入的url中要包含id参数
// 例如"/question/1"
import Head from 'next/head'

type PropsType = {
    id: string
}

export default function Question(props: PropsType) {
    return <>
        <Head>
            <title>Next.js About</title>
            <meta name="description" content="question page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <h1>Question page</h1>
            <p>{props.id}</p>
        </main>
    </>
}


export async function getServerSideProps(context: any) {
    // 读取传入的id路由参数
    const { id = "" } = context.params;

    // 将获取的id值传入props中
    return {
        props: {
            id,
        }
    }
}