import ImageConverter from "./components/ImageConverter";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-20 px-4">
      <div className="w-full max-w-5xl space-y-24">
        <ImageConverter />

        {/* SEO Text Content */}
        <section className="prose prose-zinc dark:prose-invert max-w-none">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent inline-block">
              为什么选择我们的 HEIC 转 JPG 工具？
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 text-2xl">
                🔒
              </div>
              <h3 className="text-xl font-semibold mb-3">数据安全第一</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                我们非常重视您的隐私。所有的图片转换过程完全在您的浏览器本地进行，您的照片永远不会被上传到我们的服务器。您可以放心处理个人照片或敏感文档，以此杜绝隐私泄露的风险。
              </p>
            </div>

            <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-3">闪电般的转换速度</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                得益于先进的 WebAssembly 和浏览器原生技术，转换过程无需网络传输，直接利用您的设备性能。这意味着即使是几百兆的大文件也能在瞬间完成处理，告别漫长的上传和下载等待。
              </p>
            </div>

            <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4 text-2xl">
                🚀
              </div>
              <h3 className="text-xl font-semibold mb-3">永久免费且无限制</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                我们承诺为您提供完全免费的服务。没有文件大小限制，没有每日转换数量限制，更没有隐藏的付费墙。无论您是需要转换一张照片还是批量处理整个相册，Heic2Jpg Free 都是您得力的助手。
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">如何使用（3步搞定）</h3>
            <ol className="list-decimal list-inside space-y-4 text-zinc-600 dark:text-zinc-400 text-lg">
              <li className="pl-2"><span className="font-semibold text-zinc-900 dark:text-white">上传：</span> 将您的 HEIC/WebP 图片拖入上方虚线框。</li>
              <li className="pl-2"><span className="font-semibold text-zinc-900 dark:text-white">转换：</span> 系统会自动在本地处理，无需等待上传。</li>
              <li className="pl-2"><span className="font-semibold text-zinc-900 dark:text-white">下载：</span> 预览满意后，点击“下载全部”保存 JPG 图片。</li>
            </ol>
          </div>

          <div className="mt-16 p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-2xl font-bold mb-6">关于 HEIC 和 WebP 格式</h3>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
              <p>
                <strong className="text-zinc-900 dark:text-white">HEIC (High Efficiency Image Container)</strong>{" "}
                是 Apple 设备广泛使用的高效图片格式，虽然它能以更小的体积提供更好的画质，但在 Windows 和 Android
                设备上的兼容性尚待提高。
              </p>
              <p>
                <strong className="text-zinc-900 dark:text-white">WebP</strong> 是 Google
                推出的现代图片格式，专为 Web 优化。尽管它在网页加载速度上表现优异，但在某些旧版软件中编辑或查看仍有困难。
              </p>
              <p>
                我们的工具帮您轻松将这些现代格式一键转换为通用的{" "}
                <strong className="text-zinc-900 dark:text-white">JPEG (JPG)</strong>{" "}
                格式，确保您的图片可以在任何设备、任何软件上完美显示和分享。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
