export default function Hero({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="mb-10 flex items-center justify-center">
              <p className="mr-2 text-4xl font-semibold">专有知识库聊天机器人</p>
        <p className="text-[27px]">(vantoo)</p>
      </div>
      <p className="mb-3 text-center leading-6 text-black-1000">
        欢迎使用基于专有知识库的聊天机器人!
      </p>
      <p className="mb-3 text-center leading-6 text-black-1000">
        输入基于知识库内容的相关问题，通过gpt的大语言模型能力，为你提供最佳答案
      </p>
      
    </div>
  );
}
