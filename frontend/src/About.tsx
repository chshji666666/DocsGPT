//TODO - Add hyperlinks to text
//TODO - Styling

export default function About() {
  return (
    <div className="mx-5 grid min-h-screen md:mx-36">
      <article className=" place-items-left mx-auto my-auto flex w-full max-w-6xl flex-col gap-6 rounded-lg bg-gray-100 p-6 pt-14 pb-14 text-jet lg:p-10 xl:p-16">
        <div className="flex items-center">
          <p className="mr-2 text-3xl">关于专有知识库聊天机器人</p>
          <p className="text-[21px]">(vantoo)</p>
        </div>
        <p className="mt-4">
                  基于GPT大模型对话能力，再附加专有知识库内容，实现定制基于
                  专有知识库的聊天机器人平台
        </p>

        <div>
          <p>
                      如果想实践你自己的知识库，上传你自己的知识库文档，
                      选中你上传的文档，然后就可以实现基于知识库内容的对话
                      (这是测试链接，文档会定期清理)。
          </p>
        </div>

        <p>
                  如果需要保证数据安全，进行私有化部署，或者定制开发可以联系
                  QQ:250508212
                  微信:vantoo2014
        </p>
      </article>
    </div>
  );
}
