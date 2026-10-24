// Per-page SEO copy. UI strings live in ./translations.ts.

export type ContentLocale = "zh" | "en";
export type PageId = "heic-to-jpg" | "heic-to-png" | "webp-to-jpg";

export interface Faq {
  q: string;
  a: string;
}

export interface ToolPageContent {
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  from: ("heic" | "webp")[];
  to: "jpg" | "png";
  dropzoneSub: string;
  howtoTitle: string;
  steps: { t: string; d: string }[];
  featuresTitle: string;
  features: { t: string; d: string }[];
  verifyTitle: string;
  verifyIntro: string;
  verifySteps: string[];
  faqTitle: string;
  faqs: Faq[];
  aboutTitle: string;
  about: string[];
  relatedTitle: string;
}

export const toolPages: Record<ContentLocale, Record<PageId, ToolPageContent>> = {
  zh: {
    "heic-to-jpg": {
      title: "HEIC 转 JPG 在线转换 - 免费·批量·不上传",
      description:
        "在线把 iPhone 的 HEIC 照片转成 JPG，支持批量转换。文件只在浏览器本地处理，不上传服务器，免费不限次数。",
      h1: "免费 HEIC 转 JPG 在线转换",
      subtitle: "iPhone 照片一键转 JPG，支持批量，照片不出设备",
      from: ["heic"],
      to: "jpg",
      dropzoneSub: "支持批量上传 HEIC 图片",
      howtoTitle: "三步完成转换",
      steps: [
        { t: "上传图片", d: "把 HEIC 图片拖进上方虚线框，或点击选择文件，支持一次添加多张。" },
        { t: "自动转换", d: "文件在你的浏览器里本地转换成 JPG，不经过任何服务器，无需等待上传。" },
        { t: "下载保存", d: "预览转换效果，逐张下载，或一键打包成 ZIP 下载全部。" },
      ],
      featuresTitle: "为什么用 Heic2Jpg？",
      features: [
        { t: "安全私密", d: "转换全程在浏览器本地完成，照片不会上传到任何服务器。你可以打开开发者工具亲自验证。" },
        { t: "批量快速", d: "一次拖入多张照片，自动并行转换，完成后打包成 ZIP 一键下载。" },
        { t: "免费无限制", d: "没有文件大小限制，没有每日次数限制，不用注册，不收费。" },
      ],
      verifyTitle: "如何验证照片没有被上传？",
      verifyIntro: "不用信我们的话，30 秒自己验证：",
      verifySteps: [
        "按 F12（Mac 按 Cmd+Option+I）打开浏览器的开发者工具，切换到「网络 / Network」面板。",
        "上传一张 HEIC 图片并完成转换，留意网络面板里出现的请求。",
        "你会发现没有任何上传请求——照片从头到尾只待在你的设备上。",
      ],
      faqTitle: "常见问题",
      faqs: [
        { q: "转换后的 JPG 画质怎么样？", a: "我们使用 0.8 的高质量系数进行转换，日常查看、打印和分享完全够用，文件体积也更小，方便发微信和邮件。" },
        { q: "我的照片会被上传到服务器吗？", a: "不会。所有转换都在你的浏览器里完成，照片不会离开你的设备。你可以用上面的方法打开开发者工具亲自验证。" },
        { q: "可以一次转换很多张照片吗？", a: "可以。支持批量拖拽上传，多张照片自动排队转换，完成后能打包成一个 ZIP 一起下载。" },
        { q: "iPhone 能不能直接拍成 JPG？", a: "可以。打开 iPhone「设置 → 相机 → 格式」，选择「最兼容」，之后拍摄的照片就是 JPG 了。已经拍好的 HEIC 照片，用本工具转换即可。" },
        { q: "需要注册账号或付费吗？", a: "不需要。打开即用，全部功能免费，没有次数和大小限制。" },
        { q: "转换失败怎么办？", a: "先确认文件是有效的 HEIC 照片（后缀为 .heic），再换 Chrome 或 Edge 浏览器试一次。如果问题持续，可能是文件本身已损坏。" },
      ],
      aboutTitle: "关于 HEIC 格式",
      about: [
        "HEIC（High Efficiency Image Container，高效图像容器）是苹果从 iOS 11 开始采用的默认照片格式。同样的画质下，HEIC 文件只有 JPG 的一半大小，能帮 iPhone 省下不少存储空间。",
        "麻烦的是兼容性：Windows 电脑、安卓手机和很多网站都不直接支持 HEIC，传过去打不开、发不出去。把它转成通用性最强的 JPG，就哪里都能用了。",
        "Heic2Jpg 把转换这件事放在你的浏览器里做完：照片不上传、不存储、不经过第三方服务器。转完即走，不留痕迹。",
      ],
      relatedTitle: "相关工具",
    },
    "heic-to-png": {
      title: "HEIC 转 PNG 在线转换 - 无损画质·免费批量",
      description:
        "把 iPhone 的 HEIC 照片转成无损 PNG，适合设计、印刷和演示场景。文件只在浏览器本地处理，不上传服务器，免费不限次数。",
      h1: "免费 HEIC 转 PNG 在线转换",
      subtitle: "无损画质，适合设计、印刷与演示场景",
      from: ["heic"],
      to: "png",
      dropzoneSub: "支持批量上传 HEIC 图片",
      howtoTitle: "三步完成转换",
      steps: [
        { t: "上传图片", d: "把 HEIC 图片拖进上方虚线框，或点击选择文件，支持一次添加多张。" },
        { t: "自动转换", d: "文件在你的浏览器里本地转换成无损 PNG，不经过任何服务器。" },
        { t: "下载保存", d: "预览转换效果，逐张下载，或一键打包成 ZIP 下载全部。" },
      ],
      featuresTitle: "为什么转成 PNG？",
      features: [
        { t: "无损画质", d: "PNG 采用无损压缩，每一次保存都不会损失细节，适合反复编辑的设计稿。" },
        { t: "安全私密", d: "转换全程在浏览器本地完成，照片不会上传到任何服务器。" },
        { t: "免费无限制", d: "没有文件大小限制，没有每日次数限制，不用注册，不收费。" },
      ],
      verifyTitle: "如何验证照片没有被上传？",
      verifyIntro: "不用信我们的话，30 秒自己验证：",
      verifySteps: [
        "按 F12（Mac 按 Cmd+Option+I）打开浏览器的开发者工具，切换到「网络 / Network」面板。",
        "上传一张 HEIC 图片并完成转换，留意网络面板里出现的请求。",
        "你会发现没有任何上传请求——照片从头到尾只待在你的设备上。",
      ],
      faqTitle: "常见问题",
      faqs: [
        { q: "PNG 和 JPG 该选哪个？", a: "要反复编辑、做设计或印刷，选 PNG（无损）；只是查看分享、发朋友圈，选 JPG（体积小）。本站两个工具都有。" },
        { q: "PNG 文件会不会很大？", a: "会比 JPG 大，这是无损的代价。如果文件太大影响传输，可以用 YuliusBox 的图片压缩工具再压一下。" },
        { q: "转换后的 PNG 有透明背景吗？", a: "HEIC 照片本身没有透明通道，转出的 PNG 同样是不透明的。透明背景只适用于本身带 Alpha 通道的原图。" },
        { q: "我的照片会被上传到服务器吗？", a: "不会。所有转换都在你的浏览器里完成，照片不会离开你的设备。" },
        { q: "需要注册账号或付费吗？", a: "不需要。打开即用，全部功能免费，没有次数和大小限制。" },
      ],
      aboutTitle: "关于 PNG 格式",
      about: [
        "PNG 是一种无损压缩的图片格式：无论打开保存多少次，画质都不会衰减。这让它成为设计稿、截图、印刷和演示文稿的常用选择。",
        "代价是体积：同样的照片，PNG 通常比 JPG 大几倍。所以日常分享用 JPG，需要保真和编辑时用 PNG——按需选择即可。",
        "Heic2Jpg 的 HEIC 转 PNG 全程在浏览器本地完成，照片不上传、不存储，转完即走。",
      ],
      relatedTitle: "相关工具",
    },
    "webp-to-jpg": {
      title: "WebP 转 JPG 在线转换 - 免费·批量",
      description:
        "把 WebP 图片批量转成兼容性更好的 JPG，解决老软件、打印机打不开的问题。本地转换不上传，免费不限次数。",
      h1: "免费 WebP 转 JPG 在线转换",
      subtitle: "解决老软件、打印机打不开 WebP 的问题",
      from: ["webp"],
      to: "jpg",
      dropzoneSub: "支持批量上传 WebP 图片",
      howtoTitle: "三步完成转换",
      steps: [
        { t: "上传图片", d: "把 WebP 图片拖进上方虚线框，或点击选择文件，支持一次添加多张。" },
        { t: "自动转换", d: "文件在你的浏览器里本地转换成 JPG，不经过任何服务器。" },
        { t: "下载保存", d: "预览转换效果，逐张下载，或一键打包成 ZIP 下载全部。" },
      ],
      featuresTitle: "为什么把 WebP 转成 JPG？",
      features: [
        { t: "兼容性更好", d: "JPG 是兼容性最广的图片格式，老版本软件、打印机和各类网站都认它，WebP 则经常碰壁。" },
        { t: "安全私密", d: "转换全程在浏览器本地完成，图片不会上传到任何服务器。" },
        { t: "免费无限制", d: "没有文件大小限制，没有每日次数限制，不用注册，不收费。" },
      ],
      verifyTitle: "如何验证图片没有被上传？",
      verifyIntro: "不用信我们的话，30 秒自己验证：",
      verifySteps: [
        "按 F12（Mac 按 Cmd+Option+I）打开浏览器的开发者工具，切换到「网络 / Network」面板。",
        "上传一张 WebP 图片并完成转换，留意网络面板里出现的请求。",
        "你会发现没有任何上传请求——图片从头到尾只待在你的设备上。",
      ],
      faqTitle: "常见问题",
      faqs: [
        { q: "什么是 WebP 格式？", a: "WebP 是 Google 推出的图片格式，体积比 JPG 小，网页加载更快。但很多桌面软件、打印机和老系统还不支持，经常打不开。" },
        { q: "从网站上保存的图片是 WebP，怎么转成 JPG？", a: "把 .webp 文件拖进本工具，一键转成 JPG，哪里都能打开。" },
        { q: "转换后画质会下降吗？", a: "我们使用 0.8 的高质量系数，日常使用几乎看不出差别，文件也更方便分享。" },
        { q: "我的图片会被上传到服务器吗？", a: "不会。所有转换都在你的浏览器里完成，图片不会离开你的设备。" },
        { q: "需要注册账号或付费吗？", a: "不需要。打开即用，全部功能免费，没有次数和大小限制。" },
      ],
      aboutTitle: "关于 WebP 格式",
      about: [
        "WebP 是 Google 在 2010 年推出的图片格式，主打小体积：同样的画质，文件比 JPG 小 25% 以上，所以很多网站用它来加速加载。",
        "问题出在生态：不少桌面看图软件、打印机、老系统和部分 App 仍然打不开 WebP。从网上保存的图片是 WebP、本地却打不开时，转成 JPG 是最省事的办法。",
        "Heic2Jpg 的 WebP 转 JPG 全程在浏览器本地完成，图片不上传、不存储，转完即走。",
      ],
      relatedTitle: "相关工具",
    },
  },
  en: {
    "heic-to-jpg": {
      title: "HEIC to JPG Converter Online - Free, Batch, Private",
      description:
        "Convert iPhone HEIC photos to JPG online in bulk. Files are processed locally in your browser and not uploaded to any server. Free, no limits.",
      h1: "Free HEIC to JPG Converter",
      subtitle: "Batch-convert iPhone photos to JPG. Your photos never leave your device.",
      from: ["heic"],
      to: "jpg",
      dropzoneSub: "Bulk HEIC upload supported",
      howtoTitle: "Convert in 3 Steps",
      steps: [
        { t: "Upload", d: "Drag HEIC images into the dashed area above, or click to select files. Add many at once." },
        { t: "Convert", d: "Files are converted to JPG locally in your browser. Nothing is sent to any server." },
        { t: "Download", d: "Preview the results, download one by one, or grab everything as a ZIP." },
      ],
      featuresTitle: "Why Heic2Jpg?",
      features: [
        { t: "Private by design", d: "Conversion happens entirely in your browser. Photos are not uploaded to any server — verify it yourself in DevTools." },
        { t: "Fast batch mode", d: "Drop in many photos at once. They convert in parallel and download as a single ZIP." },
        { t: "Free, no limits", d: "No file-size caps, no daily quotas, no sign-up, no paywall." },
      ],
      verifyTitle: "How to verify nothing is uploaded",
      verifyIntro: "Don't take our word for it — check in 30 seconds:",
      verifySteps: [
        "Press F12 (Cmd+Option+I on Mac) to open DevTools and switch to the Network tab.",
        "Upload a HEIC photo and convert it, while watching the requests.",
        "You'll see zero upload requests — your photos never leave your device.",
      ],
      faqTitle: "FAQ",
      faqs: [
        { q: "How is the JPG quality?", a: "We convert at 0.8 quality — plenty for viewing, printing and sharing, with much smaller files that are easy to send." },
        { q: "Are my photos uploaded to a server?", a: "No. Everything runs in your browser. Open DevTools and verify it yourself with the steps above." },
        { q: "Can I convert many photos at once?", a: "Yes. Drag in a batch, they convert automatically, and you can download them all as one ZIP." },
        { q: "Can my iPhone shoot JPG directly?", a: "Yes. Go to Settings → Camera → Formats and choose “Most Compatible”. Photos you've already taken as HEIC can be converted here." },
        { q: "Do I need an account or payment?", a: "No. Just open the page and use it — free, unlimited." },
      ],
      aboutTitle: "About the HEIC Format",
      about: [
        "HEIC (High Efficiency Image Container) has been the iPhone's default photo format since iOS 11. At the same quality, HEIC files are about half the size of JPG, saving precious phone storage.",
        "The catch is compatibility: Windows PCs, Android phones and many websites can't open HEIC. Converting to JPG — the most universal format — makes your photos work everywhere.",
        "Heic2Jpg does the whole conversion inside your browser: no uploads, no storage, no third-party servers. Convert and go, leaving no trace.",
      ],
      relatedTitle: "Related tools",
    },
    "heic-to-png": {
      title: "HEIC to PNG Converter Online - Lossless, Free, Batch",
      description:
        "Convert iPhone HEIC photos to lossless PNG for design, print and presentations. Processed locally in your browser and not uploaded to any server. Free, no limits.",
      h1: "Free HEIC to PNG Converter",
      subtitle: "Lossless quality for design, print and presentations",
      from: ["heic"],
      to: "png",
      dropzoneSub: "Bulk HEIC upload supported",
      howtoTitle: "Convert in 3 Steps",
      steps: [
        { t: "Upload", d: "Drag HEIC images into the dashed area above, or click to select files." },
        { t: "Convert", d: "Files are converted to lossless PNG locally in your browser." },
        { t: "Download", d: "Preview the results, download one by one, or grab everything as a ZIP." },
      ],
      featuresTitle: "Why convert to PNG?",
      features: [
        { t: "Lossless quality", d: "PNG uses lossless compression — no detail is lost no matter how many times you edit and save." },
        { t: "Private by design", d: "Conversion happens entirely in your browser. Photos are not uploaded to any server." },
        { t: "Free, no limits", d: "No file-size caps, no daily quotas, no sign-up, no paywall." },
      ],
      verifyTitle: "How to verify nothing is uploaded",
      verifyIntro: "Don't take our word for it — check in 30 seconds:",
      verifySteps: [
        "Press F12 (Cmd+Option+I on Mac) to open DevTools and switch to the Network tab.",
        "Upload a HEIC photo and convert it, while watching the requests.",
        "You'll see zero upload requests — your photos never leave your device.",
      ],
      faqTitle: "FAQ",
      faqs: [
        { q: "PNG or JPG — which should I choose?", a: "Choose PNG for editing, design and print (lossless). Choose JPG for viewing and sharing (smaller). We offer both converters." },
        { q: "Are PNG files bigger?", a: "Yes, that's the price of lossless. If size becomes a problem, compress them with YuliusBox's image compressor." },
        { q: "Will the PNG have a transparent background?", a: "No — HEIC photos have no transparency channel, so the converted PNG is opaque too." },
        { q: "Are my photos uploaded to a server?", a: "No. Everything runs in your browser and your photos never leave your device." },
        { q: "Do I need an account or payment?", a: "No. Just open the page and use it — free, unlimited." },
      ],
      aboutTitle: "About the PNG Format",
      about: [
        "PNG is a lossless image format: quality never degrades no matter how many times you open and save. That makes it the go-to choice for design drafts, screenshots, print and slide decks.",
        "The trade-off is size — the same photo is usually several times larger as PNG than as JPG. Use JPG for everyday sharing, PNG when fidelity and editing matter.",
        "Heic2Jpg's HEIC-to-PNG conversion runs entirely in your browser: no uploads, no storage, no trace.",
      ],
      relatedTitle: "Related tools",
    },
    "webp-to-jpg": {
      title: "WebP to JPG Converter Online - Free, Batch",
      description:
        "Batch-convert WebP images to the more compatible JPG — fixes files that old software and printers can't open. Local conversion, not uploaded to any server. Free, no limits.",
      h1: "Free WebP to JPG Converter",
      subtitle: "Fix WebP files that old software and printers can't open",
      from: ["webp"],
      to: "jpg",
      dropzoneSub: "Bulk WebP upload supported",
      howtoTitle: "Convert in 3 Steps",
      steps: [
        { t: "Upload", d: "Drag WebP images into the dashed area above, or click to select files." },
        { t: "Convert", d: "Files are converted to JPG locally in your browser." },
        { t: "Download", d: "Preview the results, download one by one, or grab everything as a ZIP." },
      ],
      featuresTitle: "Why convert WebP to JPG?",
      features: [
        { t: "Better compatibility", d: "JPG is the most widely supported image format — old software, printers and websites all accept it. WebP often doesn't." },
        { t: "Private by design", d: "Conversion happens entirely in your browser. Images are not uploaded to any server." },
        { t: "Free, no limits", d: "No file-size caps, no daily quotas, no sign-up, no paywall." },
      ],
      verifyTitle: "How to verify nothing is uploaded",
      verifyIntro: "Don't take our word for it — check in 30 seconds:",
      verifySteps: [
        "Press F12 (Cmd+Option+I on Mac) to open DevTools and switch to the Network tab.",
        "Upload a WebP image and convert it, while watching the requests.",
        "You'll see zero upload requests — your images never leave your device.",
      ],
      faqTitle: "FAQ",
      faqs: [
        { q: "What is WebP?", a: "WebP is Google's image format — smaller than JPG at the same quality, so websites use it to load faster. But many desktop apps, printers and older systems still can't open it." },
        { q: "An image I saved from a website is WebP. How do I convert it?", a: "Drag the .webp file into this tool and get a JPG that opens anywhere." },
        { q: "Will quality drop?", a: "We convert at 0.8 quality — virtually indistinguishable for everyday use, and easier to share." },
        { q: "Are my images uploaded to a server?", a: "No. Everything runs in your browser and your images never leave your device." },
        { q: "Do I need an account or payment?", a: "No. Just open the page and use it — free, unlimited." },
      ],
      aboutTitle: "About the WebP Format",
      about: [
        "WebP is Google's image format from 2010, built for small files: at the same quality it's 25%+ smaller than JPG, which is why so many websites use it for faster loading.",
        "The problem is ecosystem support — plenty of desktop viewers, printers, older systems and some apps still can't open WebP. When a saved image won't open locally, converting to JPG is the quickest fix.",
        "Heic2Jpg's WebP-to-JPG conversion runs entirely in your browser: no uploads, no storage, no trace.",
      ],
      relatedTitle: "Related tools",
    },
  },
};

// ---------------- Guides (Bilingual: zh + en) ----------------

export interface GuideSection {
  h: string;
  p: string[];
}

export interface GuideContent {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: GuideSection[];
  faqs: Faq[];
  toolLink: PageId;
  toolLinkText: string;
}

export const guides: Record<ContentLocale, Record<string, GuideContent>> = {
  zh: {
    "what-is-heic": {
      "slug": "what-is-heic",
      "title": "HEIC 是什么？一篇文章讲清苹果照片格式与打开方法",
      "description": "HEIC 是 iPhone 的默认照片格式，体积小画质好但兼容性差。本文深度解析 HEIC 格式的来历、技术原理、相较 JPG 的优缺点，以及打不开时的完整解决思路。",
      "h1": "HEIC 是什么？一篇文章讲清苹果照片格式与打开方法",
      "intro": "把 iPhone 照片拷到 Windows 电脑或发送给朋友时，发现文件图标无法预览，后缀名是陌生的 .heic 而不是传统的 .jpg——这是几乎每个 iPhone 用户都遇到过的困扰。这篇文章为你系统梳理 HEIC 是什么、苹果为什么要坚持采用它、它在日常使用中带来的兼容性壁垒，以及遇到打不开时该如何高效率解决。",
      "sections": [
        {
          "h": "HEIC 的全称、诞生背景与容器特性",
          "p": [
            "HEIC 全称为 High Efficiency Image Container（高效图像容器），是 MPEG 委员会制定的 HEIF 图像标准在苹果生态中的具体实现。从 2017 年的 iOS 11 与 macOS High Sierra 开始，苹果正式将其设为 iPhone 与 iPad 相机的默认拍照存储格式。",
            "需要特别理解的是，HEIC 并不是一张传统意义上的单一静态位图，而是一个功能强大的「数字容器」。它基于先进的 HEVC（H.265）视频编码体系。这意味着单个 .heic 文件不仅能封装单张静态图片，还可以同时容纳多帧连拍序列、实况照片（Live Photo）的音频与微动态视频片段，甚至是相机传感器记录的深度信息（Depth Map）与 HDR 高动态范围元数据。"
          ]
        },
        {
          "h": "苹果为什么要在 iPhone 上用 HEIC 替代 JPG？",
          "p": [
            "核心驱动力是大幅节省手机存储空间。在肉眼难以分辨的同等视觉画质下，HEIC 文件的体积通常只有传统 JPG 的 40% 到 50%。以 iPhone 用户每年平均拍摄 2000 到 3000 张照片计算，HEIC 格式能为手机直接省出 10GB 以上的宝贵本地与 iCloud 云备份空间。",
            "除了极致的体积优势，HEIC 在技术特性上全面超越了 1992 年诞生的老旧 JPEG 规范：它原生支持高达 16 位的色彩深度（JPEG 仅支持 8 位 256 色阶），色彩过渡更加平滑自然，极大减少了天空等渐变区域容易出现的色彩断层（Banding）；同时支持 Alpha 透明通道，为照片的智能抠图与后期编辑提供了更大的宽容度。"
          ]
        },
        {
          "h": "为什么 HEIC 在苹果生态外处处碰壁？",
          "p": [
            "尽管技术指标亮眼，HEIC 在跨平台流转时却面临严重的兼容性壁垒。最根本的制约因素是专利授权与商业成本：HEVC 编码背后涉及极为复杂的商业专利池，微软 Windows、主流 Linux 发行版以及众多开源 Web 后端为了规避高昂的授权诉讼风险，并未在操作系统和基础软件中免费内置 HEVC 硬解码能力。",
            "日常生活中最常见的翻车场景包括：iPhone 照片通过数据线或微信文件传输到 Windows 电脑后双击报错「无法打开此文件」；在政务服务网站、招聘投递页面或银行开户系统上传附件时被系统直接拦截拒绝；发给使用旧款安卓手机的朋友时对方反馈无法显示。这些不便都源于外部生态对 HEVC 授权的缺失。"
          ]
        },
        {
          "h": "遇到 HEIC 打不开怎么办？3 种实用应对方案",
          "p": [
            "方案一：使用纯浏览器在线转换（最推荐）。如果你手头有几张或几十张 HEIC 照片急需在电脑上查看或发送，最省事的方案是直接使用本站的转换工具。转换过程直接在你的浏览器中完成，照片不会上传到服务器，瞬间转成兼容性最好的标准 JPG，随转随走还保护隐私。",
            "方案二：为电脑安装官方或第三方看图工具。Windows 10/11 用户可以前往微软应用商店付费 7 元购买「HEVC 视频扩展」；如果你不想付费，安装 Honeyview（蜂蜜浏览器）或 XnView MP 等免费开源看图软件也能在本地正常预览 HEIC 图片。",
            "方案三：将 iPhone 相机直接设为拍摄 JPG。如果你日常绝大部分照片都需要频繁传给电脑或客户，可以在 iPhone「设置 → 相机 → 格式」中切换为「最兼容」。这样新拍的照片就会直接存为通用 JPG，彻底免去后续转换的麻烦（但注意相册已有的旧 HEIC 仍需转换）。"
          ]
        }
      ],
      "faqs": [
        {
          "q": "HEIC 和 JPG 哪个画质更好？",
          "a": "在同等文件体积下，HEIC 的细节保留和色彩表现明显优于 JPG；而在同等视觉画质下，HEIC 能够节省约一半空间。不过在绝大多数手机和显示器上查看，普通人肉眼难以察觉画质差异，JPG 胜在无可比拟的通用性。"
        },
        {
          "q": "可以直接把文件后缀名 .heic 改成 .jpg 吗？",
          "a": "不能。直接修改文件后缀名只是更改了文件名显示，文件内部的二进制数据结构依然是 HEVC 编码。改完后 Windows 照片查看器和网站后台依然无法识别，甚至会导致文件关联混乱，必须使用真正的转换工具重新编码。"
        },
        {
          "q": "安卓手机能直接打开 HEIC 照片吗？",
          "a": "运行 Android 9 及以上系统的较新安卓旗舰手机（如三星、华为、小米等）大部分已支持原生查看 HEIC；但在一些老旧千元机或第三方社交软件内置的看图组件中仍可能出现白屏或黑屏。在跨平台分享前转为 JPG 是最稳妥的习惯。"
        },
        {
          "q": "转换工具会降低照片的原图画质吗？",
          "a": "合理设置压缩参数的转换不会带来肉眼可见的画质劣化。本站工具采用 0.8 的高质量因子进行解码重建，在保证高保真画质的同时优化文件体积，兼顾了清晰度与传输便捷性。"
        }
      ],
      "toolLink": "heic-to-jpg",
      "toolLinkText": "免费把 HEIC 转成 JPG →"
    },
    "open-heic-on-windows": {
      "slug": "open-heic-on-windows",
      "title": "Windows 怎么打开 HEIC 照片？4 种实测有效的方法",
      "description": "iPhone 照片传到 Windows 10/11 电脑上打不开？本文详细介绍 4 种打开与查看 HEIC 照片的方法：免安装纯浏览器转换、安装官方扩展、修改 iPhone 拍摄设置与免费看图工具。",
      "h1": "Windows 怎么打开 HEIC 照片？4 种实测有效的方法",
      "intro": "把 iPhone 里的精彩照片或者工作截图拷到 Windows 电脑，满心欢喜准备整理，双击却弹出一个冷冰冰的窗口提示「无法打开此文件」或「需要安装特定编码器」——因为微软 Windows 操作系统默认没有内置 HEIC 解码组件。不用慌张，本文为你梳理了 4 种经过实际验证的解决途径，按推荐程度从高到低排列，助你快速搞定。",
      "sections": [
        {
          "h": "为什么 Windows 默认无法直接查看 HEIC 照片？",
          "p": [
            "很多用户误以为这是 Windows 系统的缺陷，其实核心原因是商业版权与专利授权壁垒。苹果采用的 HEIC 格式底层依赖于 HEVC（H.265）视频编码技术，而 HEVC 受到多个专利联盟的严格专利约束，硬件厂商与操作系统若要内置解码支持，必须按设备台数支付可观的授权费。",
            "微软为了控制操作系统成本，选择在 Windows 10 和 Windows 11 中移除了免费的 HEVC 原生编解码模块，仅在系统中保留了对基础容器的识别，具体解码显示则留给用户按需选配。这就导致了用户双击 HEIC 图片时常常只能看到空白占位符或报错提示。"
          ]
        },
        {
          "h": "方法一：在线直接转成 JPG（最推荐，免安装即开即用）",
          "p": [
            "这是最快速、最通用的解决方案。无论你使用的是 Windows 10、Windows 11 还是公司的受限办公电脑，只要能上网，打开浏览器即可搞定。",
            "使用本站的转换工具，将需要查看的 HEIC 文件拖入虚线框，即可瞬间生成通用 JPG 格式。尤为关键的是：在浏览器中转换，照片不会上传到服务器，所有像素计算均由你的本地浏览器引擎完成，即便涉及私密合影或财务票据也无需担心泄露；转换完成后还支持一键打包 ZIP 下载，非常适合应急与批量处理。"
          ]
        },
        {
          "h": "方法二：在微软应用商店安装官方 HEVC 扩展",
          "p": [
            "如果你希望像查看普通 JPG 一样，在 Windows 自带的「照片」应用中直接双击预览 HEIC，可以安装微软官方扩展。",
            "具体步骤：打开 Microsoft Store（微软应用商店），在搜索框输入「HEVC 视频扩展」（HEVC Video Extensions）。需要注意的是，微软商店目前对该扩展收费约 7 元人民币。付费安装后，Windows 照片应用即可原生双击解码 HEIC 图片与视频。该方法的优点是一劳永逸本地看图，但缺点是需要花钱，且转发给其他同事或上传到老旧网站时，格式不兼容的问题依然没有从根本上消除。"
          ]
        },
        {
          "h": "方法三：调整 iPhone 设置，以后拍照直接存为 JPG",
          "p": [
            "如果你长期习惯在 Windows 电脑上处理手机照片，最省心的预防措施是在源头改变拍摄格式。",
            "拿出你的 iPhone，进入「设置 → 相机 → 格式」，将默认的「高效」勾选改为「最兼容」。完成设置后，iPhone 相机后续拍摄的所有照片都将自动以标准的 .jpg 格式存储，之后用数据线或微信导入 Windows 电脑都能畅通无阻。需要说明的是：此选项只对未来拍摄的照片生效，手机相册里已经拍摄好的历史 HEIC 照片依然需要通过方法一进行批量格式转换。"
          ]
        },
        {
          "h": "方法四：安装免费的第三方看图软件",
          "p": [
            "如果你不想花钱购买微软商店扩展，也不想每次都进行格式转换，安装一款原生支持 HEIC 的优质免费看图软件是个不错的平衡选择。",
            "业内口碑极佳的开源/免费工具包括 Honeyview（蜂蜜浏览器）、XnView MP 以及 ImageGlass。这些软件内部自带了独立的解码器，安装后将其设为 .heic 文件的默认打开方式，即可在 Windows 电脑上流畅双击看图、缩放并查看 EXIF 拍摄参数。适合需要在大屏幕上频繁校对照片细节的摄影爱好者或电商卖家。"
          ]
        }
      ],
      "faqs": [
        {
          "q": "转换成 JPG 之后，照片画质会下降吗？",
          "a": "只要使用专业的转换引擎，画质损耗几乎可以忽略不计。本站转换器采用标准的 0.8 高画质采样率，在严格控制噪点的同时完整还原色彩与边缘清晰度，日常办公、打印输出或上传网络完全感受不到画质差异。"
        },
        {
          "q": "为什么不建议在网上随便找第三方转换网站？",
          "a": "传统云端转换网站需要把你的照片上传到其远端服务器，不仅上传大文件耗费漫长等待时间，还存在照片被长期缓存、用于模型训练或遭遇黑客窃取的隐私风险。选择像本站这样在浏览器本地运算、不会把照片上传到服务器的工具，才是保障个人隐私的底线。"
        },
        {
          "q": "一次可以批量转换几十张甚至上百张照片吗？",
          "a": "完全可以。本站工具支持多选拖拽上传，内置了并发队列控制技术，照片会在浏览器内高效并行排队转码，全部完成后支持点击「下载全部」打包为 ZIP 文件保存到本地，极大节省重复操作时间。"
        },
        {
          "q": "Windows 11 未来会免费自带 HEIC 支持吗？",
          "a": "目前看来短期内不太可能。由于 HEVC 复杂的专利联盟许可政策，只要微软免费预装，就必须为全球数以亿计的激活设备支付巨额版权费，因此微软大概率会继续维持当前「系统剥离核心解码、用户在商店自费按需增购」的商业策略。"
        }
      ],
      "toolLink": "heic-to-jpg",
      "toolLinkText": "免费把 HEIC 转成 JPG →"
    },
    "iphone-compatible-format": {
      "slug": "iphone-compatible-format",
      "title": "iPhone 怎么设置拍照直接存 JPG？最兼容模式详解与注意事项",
      "description": "受够了 HEIC 格式不兼容？教你 10 秒将 iPhone 相机设置为「最兼容」直接保存 JPG 照片，并全面解析存储占用翻倍、4K 录像格式改变等注意事项。",
      "h1": "iPhone 怎么设置拍照直接存 JPG？最兼容模式详解与注意事项",
      "intro": "每当你满心欢喜地把 iPhone 里拍好的照片传到办公电脑、提交到考试网站或分享给安卓好友时，频繁跳出的「格式不支持」提示往往让人崩溃。如果你不想再每次四处寻找转换器，可以让 iPhone 相机直接拍摄并保存为最通用的 JPG 格式。设置步骤仅需 10 秒钟，但在切换前，有几个非常关键的技术权衡你务必提前了解。",
      "sections": [
        {
          "h": "图文步骤：10 秒开启 iPhone 相机「最兼容」模式",
          "p": [
            "第一步：在 iPhone 主屏幕上找到并打开灰色的「设置」应用。",
            "第二步：向下滑动屏幕找到「相机」选项（通常位于照片、音乐等系统应用分组中），点击进入。",
            "第三步：在相机设置菜单的最顶部，点击「格式」选项。此时屏幕上会呈现两个选项：系统默认勾选的「高效」（即 HEIC 格式）与下方的「最兼容」。",
            "第四步：轻点勾选「最兼容」。勾选后无需保存，直接返回退出即可。从这一刻开始，你的 iPhone 相机拍摄的每一张新照片都会直接以国际通用的 JPEG（.jpg）格式存储，跨设备分享畅通无阻。"
          ]
        },
        {
          "h": "切换到「最兼容」模式前，必须清楚的 3 大影响",
          "p": [
            "影响一：照片占用的机身存储空间几乎翻倍。在保持相同肉眼画质的前提下，JPG 格式的压缩效率远低于 HEIC。平时拍一张 HEIC 照片约占 1.5MB 至 2.5MB，而在 JPG 模式下会激增到 3.5MB 至 5MB。对于使用 64GB 或 128GB 小容量 iPhone 且没有开通大容量 iCloud 的用户，存储空间告急的速度会显著加快。",
            "影响二：高规格视频录制格式会受到限制。苹果规定，部分高规格视频模式（例如 4K 60fps 录制、1080p 240fps 慢动作视频以及部分机型的 HDR 视频）强制依赖 HEVC 编码。如果你开启了最兼容模式，系统拍摄高帧率视频时可能会提示受限或被迫转为占用巨大的 H.264 编码。",
            "影响三：实况照片（Live Photo）的运作机制。不必担心实况照片失效，在最兼容模式下拍摄实况照片依然能动，但苹果在底层会生成一张单独的 JPG 图片加一段 MOV 视频流，体积膨胀尤为明显。"
          ]
        },
        {
          "h": "手机相册里已经拍摄好的大量 HEIC 旧照片怎么办？",
          "p": [
            "务必注意：修改相机格式设置属于「未来生效型」操作，它绝不会自动把你相册里过去几年拍摄的数千张 HEIC 老照片转成 JPG。",
            "对于这些存量老照片，无需花钱购买专业管理软件。当你需要批量整理或拷贝到电脑时，只需打开浏览器访问本站工具，直接多选拖入需要转换的照片即可。在浏览器中转换，照片不会上传到服务器，瞬间生成排版规整的 JPG 副本，既高效又避免了隐私顾虑。"
          ]
        },
        {
          "h": "不改相机设置的折中技巧：利用传输自动转换",
          "p": [
            "如果你既想在手机上保留 HEIC 节省一半存储的巨大优势，又希望传到 Windows 电脑时自动变成 JPG，苹果其实提供了一个隐蔽的折中开关。",
            "打开 iPhone「设置 → 照片」，滑动到页面最底部的「传输到 Mac 或 PC」设置项，将默认的「保留原片」改为「自动」。这样设置后，当你用 Lightning 或 USB-C 数据线将 iPhone 连接到 Windows 电脑并拷贝照片时，手机硬件会在传输过程中动态将 HEIC 实时转码为 JPG 发给电脑，完美兼顾省空间与好兼容。"
          ]
        }
      ],
      "faqs": [
        {
          "q": "改成最兼容后，以后还能随时切回高效模式吗？",
          "a": "随时可以自由切换。进入「设置 → 相机 → 格式」随时都能改回「高效」。两种格式在同一台 iPhone 相册中可以和谐共存，相互之间互不冲突。"
        },
        {
          "q": "普通用户到底应该选择「高效」还是「最兼容」？",
          "a": "如果你的 iPhone 存储空间充足（256GB 及以上），或者平时频繁需要将照片传到 Windows 办公电脑、打印文档或上传各类政务系统，强烈建议选择「最兼容」省去周折；如果你的手机容量较小、日常几乎只在苹果设备（Mac/iPad）之间空投流转，建议继续保持「高效」。"
        },
        {
          "q": "微信发照片和这个设置有关系吗？",
          "a": "关系很小。在微信聊天窗口发送照片时，微信客户端都会在发送前自动对图片进行压缩重编码；只有当你通过微信发送「原图」且对方需要在电脑端下载存档时，才可能遇到对方电脑无法解码 HEIC 的情形。"
        },
        {
          "q": "通过 AirDrop（隔空投送）传给 Mac 会变成什么格式？",
          "a": "隔空投送属于苹果生态内的高速直连传输，无论哪种设置，默认都会以相册原始格式传输。如果是 HEIC 照片投送到 Mac，macOS 原生完全支持 HEIC 预览与编辑，因此不会造成任何困扰。"
        }
      ],
      "toolLink": "heic-to-jpg",
      "toolLinkText": "把已有的 HEIC 批量转成 JPG →"
    },
    "heic-vs-jpg": {
      "slug": "heic-vs-jpg",
      "title": "HEIC 和 JPG 有什么区别？画质、体积与兼容性深度对比",
      "description": "HEIC 和 JPG 哪个好？本文从压缩算法、文件体积、色彩深度、系统兼容性等多维度深度对比，并为你提供不同场景下的专业选型建议。",
      "h1": "HEIC 和 JPG 有什么区别？画质、体积与兼容性深度对比",
      "intro": "HEIC 体积小巧省空间，JPG 兼容性极强走遍天下——这是很多用户对这两种格式的最直观印象。但在现实工作和生活中，许多人常常在「到底该用哪一个」上犹豫不决。本文从底层技术原理、真实文件体积、色彩动态范围以及跨平台兼容生态四个维度进行透彻对比，帮你弄清两者各自的优劣势与最佳使用场景。",
      "sections": [
        {
          "h": "核心参数全景对比：一张表看清代际差异",
          "p": [
            "JPG（或 JPEG）发布于 1992 年，基于离散余弦变换（DCT）的有损压缩，迄今已服役超过三十年；而 HEIC 由 MPEG 制定于 2015 年，采用与 4K/8K 视频相同的 HEVC（H.265）帧内高级压缩预测算法。",
            "在色深方面，JPG 仅支持 8 位（每通道 256 色阶，共 1670 万色），而 HEIC 原生支持 16 位高色深，能够细腻呈现超过十亿种颜色；在功能扩展上，JPG 仅能存储单一平面位图，不支持透明通道；而 HEIC 作为一个多功能容器，不仅支持透明图层，还能在单个文件中同步封装景深数据、HDR 增益图、连拍序列以及实况照片音视频流。"
          ]
        },
        {
          "h": "体积与压缩效率对比：HEIC 为何能轻松省下一半空间？",
          "p": [
            "在同等视觉观感下，HEIC 的文件体积通常只有标准 JPG 的 40% 到 55%。举例来说，用 iPhone 主摄拍摄一张细节丰富的风景照片，保存为高质量 JPG 通常需要 3.8MB 左右，而采用 HEIC 格式仅需 1.8MB 甚至更小。",
            "这种巨大的差距来自算法代际演进：传统 JPG 将图像切割为固定大小的 8x8 像素方块，容易在纯色或平滑区域产生明显的马赛克块状伪影（Blocking Artifacts）；HEIC 则引入了从 4x4 到 64x64 像素的动态自适应编码单元树，配合多达 35 种方向性像素预测模式，能在极大抹平数据冗余的同时精准锁定边缘锐度。"
          ]
        },
        {
          "h": "画质与色彩表现对比：普通人看得出差别吗？",
          "p": [
            "在普通手机屏幕或常规电脑显示器上浏览日常生活照时，坦白说，绝大多数人很难肉眼分辨出同一场景下 HEIC 和高质量 JPG 的差别，两者的主观清晰度几乎旗鼓相当。",
            "但两者的实质差距体现在极限光影与后期编辑中：当拍摄日出日落等高反差大光比场景时，HEIC 凭借其 10 位至 16 位色深以及 HDR 高动态元数据，能够在高光天空和深暗阴影处保留丰富的层次，后期在 Lightroom 等专业工具中提亮暗部时噪点更少、色彩过渡更柔和；而 8 位的 JPG 如果进行大副度拉伸曝光，容易过早出现断层或严重的色块噪斑。"
          ]
        },
        {
          "h": "兼容性生态对比：JPG 为何依然是不可替代的基石？",
          "p": [
            "如果单看技术指标，HEIC 几乎在每个技术参数上都完胜 JPG，但现实中 JPG 的生态统治力依然无可撼动。从 1992 年至今，全世界所有的操作系统（包括旧版 Windows XP/7/10、各个版本的 Linux 与 Android）、每一款网页浏览器、老旧数码相框、冲印店打印设备以及各大企业内网系统，都把 JPEG 编解码作为无条件标配。",
            "相比之下，HEIC 因为背后专利联盟的商业授权费争议，许多非苹果设备和中小型 Web 网站至今依然拒绝提供原生支持。只要涉及到跨系统文件传递、网页附件提交或公开打印出版，JPG 依然是不会被拒的通用基石。"
          ]
        },
        {
          "h": "终极选型建议：不同场景该怎么选？",
          "p": [
            "场景一：日常家庭记录、旅游打卡、且全家人主要使用 iPhone、iPad 和 Mac 流转 → 坚定不移选择 HEIC。充分享受节省一半存储空间的红利，长期使用能省下不少换机或云盘订阅费用。",
            "场景二：政务申报、求职投递、考试报名、发给客户或在 Windows 电脑上办公 → 坚决转为 JPG。用本站的免费浏览器转换工具，在浏览器中转换，照片不会上传到服务器，10 秒内生成规范的通用 JPG，有效避免对方打不开或上传系统报错的尴尬。",
            "场景三：需要透明通道、反复图层编辑的设计师或插画师 → 考虑无损 PNG（本站也提供免费的 HEIC 转 PNG 工具），避免有损二次压缩带来的画质劣化。"
          ]
        }
      ],
      "faqs": [
        {
          "q": "把已经压缩好的 JPG 再转成 HEIC，能把文件缩小吗？",
          "a": "理论上再次有损编码会稍微降低体积，但实际上毫无意义。已经生成的 JPG 已经损失了原始细节，再次转成 HEIC 不仅不可能找回丢失的色深与信息，反倒引入了二次压缩损耗，还增添了兼容性麻烦。"
        },
        {
          "q": "为什么微信发照片不论发什么格式看起来都差不多？",
          "a": "因为国内主流社交软件（微信、QQ、微博、小红书等）在用户发送照片时，服务器端或移动端都会强制启动统一的图片压缩转码流程，将原图转为适合移动网络分发的规格，因此发朋友圈时不必纠结原始格式。"
        },
        {
          "q": "未来会有其他格式取代 HEIC 和 JPG 吗？",
          "a": "开源免费的 AVIF（基于 AV1 视频编码）正在快速崛起，Chrome 和现代浏览器已全面原生支持，压缩率甚至略优于 HEIC 且无专利费困扰。不过考虑到数十亿老旧设备的庞大存量，JPG 在未来十年内依然会是全球兼容性基准。"
        },
        {
          "q": "转换工具导出的 JPG 文件能在老电脑上打开吗？",
          "a": "完全可以。本站导出的 JPG 严格遵循标准 JFIF/JPEG 标准规范，不仅在 Windows 10/11 上畅行无阻，在十几年前的 Windows 7、XP 甚至老旧车载导航屏幕上都能正常显示。"
        }
      ],
      "toolLink": "heic-to-jpg",
      "toolLinkText": "免费把 HEIC 转成 JPG →"
    },
    "heic-rejected-by-website": {
      "slug": "heic-rejected-by-website",
      "title": "网站/报名表单传不上去：HEIC 被上传框拒绝怎么办？",
      "description": "上传照片提示「格式不支持」或灰色不可选？本文分析网站、政务系统、招聘平台拒绝 iPhone HEIC 的原因，提供 4 种快速转换与上传方案，并在转换中剥离 GPS 隐私。",
      "h1": "网站/报名表单传不上去：HEIC 被上传框拒绝怎么办？",
      "intro": "用 iPhone 精心拍好的证件照、社保申报材料、公积金凭据或求职简历附件，满怀信心地点击网页上传按钮，结果屏幕猛然弹出一个刺眼的提示：「文件格式不合规，仅支持 JPG、JPEG 或 PNG 格式」；更有甚者，在打开的文件选择框里，所有刚拍好的照片直接呈现灰色，点都点不动——这是无数 iPhone 用户在关键时刻都曾遭遇过的崩溃场景。本文为你全面剖析为什么这么多网站死死拒绝 HEIC、如何在数十秒内化解危机，以及为什么在浏览器本地转换还能顺手保护你的真实家庭住址与 GPS 定位隐私。",
      "sections": [
        {
          "h": "为什么大量网站、政务系统和招聘平台拒绝接收 HEIC？",
          "p": [
            "很多人纳闷：iPhone 都普及这么多年了，为什么很多大型网站的上传组件依然像老古董一样不支持 HEIC？原因主要集中在三个技术痛点：",
            "第一，高昂的商业专利与技术成本。HEIC 底层依托于 HEVC（H.265）视频编码体系，其商业授权池结构极其复杂且价格高昂。绝大多数企事业单位的 Web 后台使用的是基于 Linux 的开源图片处理组件（如经典版 ImageMagick、PHP GD 库、Python Pillow 标准发行版等），出于避免法律合规风险和开发维护成本的考量，服务器环境并未编译昂贵的 libheif 解码模块，根本无法在服务端解析 HEIC 文件。",
            "第二，前端表单的死板文件过滤器。许多表单在 HTML 源码中写入了类似 accept=\"image/jpeg,image/png\" 的限制条件，或者通过 JavaScript 正则比对文件后缀。一旦检测到 .heic，浏览器在操作系统底层弹出的文件选择器就会直接将这些照片标记为灰色禁止选中，哪怕你想强行上传也点不进去。",
            "第三，高发场景集中在刚需领域。拒绝 HEIC 的重灾区恰恰是容错率极低的重要场合：各省市政务服务网（个税申报、签证申请、社保认证）、各大企业的人才招聘管理系统（ATS，如校招网申、简历附件上传）、高校教务系统与专业资格考试报名网（教师资格证、计算机等级考试、考研信息采集），以及传统的二手交易与论坛系统。这些系统一旦报错，往往令人心急如焚。"
          ]
        },
        {
          "h": "隐秘的重大安全隐患：直接上传 iPhone 原图可能泄露你的真实家庭住址",
          "p": [
            "在急着把照片传上去的同时，绝大多数人忽视了一个极其关键的安全隐患：iPhone 拍摄的照片中隐藏着极其详尽的 EXIF 元数据。",
            "只要你的 iPhone 在拍照时开启了定位权限（绝大多数用户的相机默认都开启），每一张照片的文件头中都会被永久烙印上拍摄瞬间的精确 GPS 经纬度（精确到米）、海拔高度、拍摄时间甚至镜头序列号。如果将包含完整 EXIF 信息的原图直接上传到房屋租赁论坛、公开求职平台或各类第三方社区，任何下载到你图片的人都可以借助极其简单的小工具逆向反查出你拍照时的具体地理位置——很可能就是你的私人卧室、家庭住址或办公工位。",
            "而纯浏览器本地转换工具带来了一个意想不到的核心安全优势：当转换器在你的本地设备上将 HEIC 重新渲染并转码为通用 JPG 时，会自动剥离掉包含敏感 GPS 坐标的 EXIF 标签，仅保留纯粹的图像色彩信息。这既完美满足了目标网站对 JPG 格式的要求，又在无形之中构筑了一道严密的个人隐私防火墙。"
          ]
        },
        {
          "h": "4 种实操化解方案对比与操作指南",
          "p": [
            "方案一：纯浏览器本地一键转换（最推荐，耗时 5 秒）。这是目前公认最省心、最安全的解决途径。无需下载任何 App，无需安装电脑软件，直接在电脑或手机浏览器中打开本站工具，将灰色的或被拒的 HEIC 照片拖拽到转换框内。在浏览器中转换，照片不会上传到服务器，瞬间生成符合所有网站严格校验的标准 JPG，下载后立刻就能顺利传上表单，敏感证件照也毫无后顾之忧。",
            "方案二：利用 iPhone 备忘录或自带功能迂回转换。如果你手头只有一台手机且无法使用外部工具，可以尝试在 iPhone 相册中打开该照片，点击左下角「分享」按钮选择「拷贝照片」；然后新建一条备忘录并长按粘贴进去；最后在备忘录中长按图片点击分享，选择「存储到文件」或发送给自己。此时 iOS 系统有时会自动将其封装为 JPEG。不过此方法步骤繁琐，且处理多张照片时容易忙中出错。",
            "方案三：电脑端系统工具另存为 JPG。如果你使用的是 Mac 电脑，直接在访达（Finder）中右键点击该 HEIC 文件，在弹出的菜单中选择「快速操作 → 转换图像」，格式选择 JPEG 即可快速生成副本；如果是在 Windows 电脑上且已经购买了 HEVC 扩展，也可以用系统自带画图工具打开后点击「文件 → 另存为 → JPEG 图片」。",
            "方案四：调整 iPhone 相机拍摄格式为「最兼容」（防患于未然）。如果你经常需要填报各类系统，可以提前杜绝问题：打开 iPhone「设置 → 相机 → 格式」，将默认的「高效」勾选为「最兼容」。从此之后新拍摄的照片就会直接存为标准通用 JPG，彻底根除后续上传被拒的烦恼。"
          ]
        },
        {
          "h": "避坑指南：切勿轻信这两种常见误区",
          "p": [
            "避坑一：切记不可通过「重命名」把 .heic 直接改成 .jpg。这是很多人急病乱投医的常见错误操作。操作系统改后缀只是改掉了展示给用户看的文件标签，文件内部的二进制编码依然是 HEVC 压缩流。现代网站后端几乎都会通过检查文件头魔数（Magic Number，JPG 文件头为 FFD8FF，HEIC 文件头包含 ftypheic）来校验真实格式。伪装成 .jpg 的文件一旦被后端检测拦截，不仅依然报错，还可能被系统判定为损坏文件而导致提交失败甚至封禁表单。",
            "避坑二：切忌将身份证、护照、户口簿等私密证件照随手上传到未知的第三方云端转换网站。很多打着「免费在线转换」旗号的不知名站点，会将用户的原图上传至其远端云服务器存储，个人身份信息与家庭住址面临潜在风险。坚持使用在浏览器中转换、照片不会上传到服务器的合规工具，是数字时代保护个人数据安全的基本常识。"
          ]
        }
      ],
      "faqs": [
        {
          "q": "为什么有些表单在电脑上点上传，HEIC 照片直接变成灰色点不动？",
          "a": "因为该网页的上传代码限定了文件类型（如 accept=\".jpg,.png\"），Windows 或 Mac 系统的文件选择窗口接收到底层指令后，会自动将所有不符合后缀规则的文件置灰禁止选中。使用本站工具快速将其转为 .jpg 后，文件就会恢复为正常的黑色可选状态。"
        },
        {
          "q": "转换成 JPG 之后，上传到系统里会影响原图清晰度吗？",
          "a": "完全不会。本站工具采用 0.8 的高保真系数进行转换，导出的 JPG 画面细腻锐利，没有任何明显的噪点或边缘模糊，无论是用于证件照人脸识别对比、文字发票验真还是大幅面打印，清晰度都绰绰有余。"
        },
        {
          "q": "如何亲自验证转换后的 JPG 是否真的去除了我的 GPS 定位？",
          "a": "非常简单：将转换后的 JPG 文件下载到电脑上，右键点击文件选择「属性」（Mac 上点击「显示简介」），切换到「详细信息」面板。你会发现原本在 iPhone 原图里存在的「GPS / 纬度 / 经度」栏目已经彻底消失，证明隐私脱敏已完全生效。"
        },
        {
          "q": "为什么有时候在手机浏览器能直接上传 HEIC，换到电脑上却不行？",
          "a": "部分现代移动端浏览器（特别是 iOS Safari）在用户从相册选取 HEIC 照片并提交表单时，会在操作系统底层悄悄进行静默转码，自动帮用户伪装或转成 JPEG 发送；但到了没有这一机制的桌面端浏览器（如 Chrome、Edge 或老旧 IE 内核），上传框就会严格按原文件格式拦截，从而暴露出不兼容问题。"
        },
        {
          "q": "用微信把照片发给自己传到电脑上，能解决这个问题吗？",
          "a": "如果你在微信发图时不勾选「原图」，微信确实会对图片进行压缩并转为标准 JPG 格式发送，可以用作应急；但缺点是微信的压缩比率极大，照片分辨率和画质会被大幅削减，如果是用于证件照审核或报销凭单，很可能因为分辨率不足或字迹模糊被审核人员驳回，因此更推荐使用专业的高保真本地转换工具。"
        }
      ],
      "toolLink": "heic-to-jpg",
      "toolLinkText": "免费把 HEIC 转成 JPG →"
    }
  },
  en: {
    "what-is-heic": {
      "slug": "what-is-heic",
      "title": "What Is a HEIC File? Everything You Need to Know About Apple's Image Format",
      "description": "HEIC is the default photo format on iPhones. It offers smaller file sizes and rich colors, but lacks native Windows and web support. Learn how HEIC works and how to convert it easily.",
      "h1": "What Is a HEIC File? Everything You Need to Know About Apple's Image Format",
      "intro": "If you have ever transferred photos from an iPhone to a Windows PC or tried attaching an image to a website form, you have probably run into a file ending in .heic instead of the familiar .jpg. Double-clicking it often leads to a frustrating error message saying the file format is unsupported. This comprehensive guide covers what HEIC is, why Apple adopted it as the default camera format, the compatibility challenges it presents outside the Apple ecosystem, and the most practical ways to handle it.",
      "sections": [
        {
          "h": "What Does HEIC Stand For and Where Did It Originate?",
          "p": [
            "HEIC stands for High Efficiency Image Container. It is Apple's implementation of the HEIF (High Efficiency Image File Format) standard, which was established by the Moving Picture Experts Group (MPEG) in 2015. Starting with iOS 11 and macOS High Sierra in 2017, Apple made HEIC the default format for all photos captured with iPhone and iPad cameras.",
            "Crucially, HEIC is not just a single static picture; it is a versatile multimedia container built upon the HEVC (H.265) video compression codec. Because of this container architecture, a single .heic file can package not only a high-resolution still image, but also photo bursts, image sequences, auxiliary depth maps used for Portrait mode, HDR luminance gain maps, and the audio-video elements of Apple Live Photos."
          ]
        },
        {
          "h": "Why Did Apple Choose HEIC Over JPEG?",
          "p": [
            "The primary motivation behind Apple's adoption of HEIC was significant storage savings. Under identical visual quality, a HEIC image occupies roughly 40% to 50% less file size compared to an equivalent JPEG. For an average smartphone user snapping thousands of photos each year, this compression efficiency saves dozens of gigabytes of precious local device storage and iCloud backup capacity.",
            "Beyond file size, HEIC introduces advanced imaging capabilities that far surpass the aging JPEG specification from 1992. HEIC supports up to 16-bit color depth (compared to JPEG's 8-bit limitation, which provides only 256 color gradations per channel). This higher dynamic range produces smoother gradients, prevents color banding in skies, supports wide P3 color gamuts, and includes native alpha channel transparency for flexible graphic editing."
          ]
        },
        {
          "h": "The Major Drawback: Cross-Platform Compatibility",
          "p": [
            "Despite its technical superiority, HEIC creates frequent friction when files move beyond Apple hardware. The fundamental obstacle is licensing and royalties: HEVC is governed by complex commercial patent licensing pools, which means operating systems and third-party software developers must pay licensing fees to include native hardware decoding capabilities.",
            "As a consequence, Windows 10 and 11 do not include native HEVC playback out of the box without purchasing an add-on codec from the Microsoft Store. Many legacy Android handsets, third-party desktop utilities, printing kiosks, and web applications reject HEIC uploads outright. Common symptoms include photos failing to open on Windows PCs, blank thumbnail previews, and upload forms rejecting images with unsupported format errors."
          ]
        },
        {
          "h": "Practical Solutions: How to Open and Handle HEIC Files",
          "p": [
            "Method 1: Convert HEIC to JPG in your browser (Recommended). If you have HEIC photos on your PC that need to be viewed, shared, or uploaded right away, using an in-browser converter is the fastest route. In our converter, files are converted directly in your browser and are not uploaded to any server. Your photos remain on your device, and you receive universal JPG files in seconds.",
            "Method 2: Install official codecs or free desktop viewers. Windows users can purchase the HEVC Video Extensions from the Microsoft Store, or install reputable free viewing tools like Honeyview or XnView MP to view HEIC files natively without converting them first.",
            "Method 3: Configure your iPhone to shoot in standard JPG format. If you regularly transfer images to Windows computers or submit files to web portals, you can adjust your iPhone camera settings under Settings > Camera > Formats and select 'Most Compatible'. New captures will automatically save as standard JPEG."
          ]
        }
      ],
      "faqs": [
        {
          "q": "Which format has better image quality, HEIC or JPG?",
          "a": "At the same file size, HEIC provides noticeably superior detail, sharper edges, and richer color depth. At the same visual quality, HEIC is roughly half the size of a JPG. On standard mobile displays, both look crisp, but HEIC retains more data for editing."
        },
        {
          "q": "Can I simply rename a .heic file extension to .jpg?",
          "a": "No. Renaming the extension does not alter the underlying binary encoding of the file. Image viewers and web servers inspect the file header bytes (magic numbers); an incorrectly renamed HEIC file will remain unreadable or trigger corrupt file errors."
        },
        {
          "q": "Do modern Android phones support HEIC?",
          "a": "Most smartphones running Android 9 or newer can view HEIC files, and flagship models from Samsung and Xiaomi even offer HEIF camera capture. However, third-party messaging apps and older budget devices may still struggle with playback."
        },
        {
          "q": "Does converting HEIC to JPG cause visible quality degradation?",
          "a": "When converted using a high-quality factor (such as our tool's 0.8 setting), the visual difference is imperceptible to the human eye. The output retains clarity and sharp detail while delivering universal compatibility across all systems."
        }
      ],
      "toolLink": "heic-to-jpg",
      "toolLinkText": "Convert HEIC to JPG Free →"
    },
    "open-heic-on-windows": {
      "slug": "open-heic-on-windows",
      "title": "How to Open HEIC Files on Windows 10 & 11 (4 Working Methods)",
      "description": "Can't view iPhone HEIC photos on Windows? Here are 4 tested ways to open, view, and convert HEIC images on Windows 10 and 11, from free browser conversion to official codecs.",
      "h1": "How to Open HEIC Files on Windows 10 & 11 (4 Working Methods)",
      "intro": "You transfer photos from your iPhone to your Windows 10 or 11 computer, double-click an image to view it, and are met with an unexpected error message: 'The HEVC Video Extension is required to display this file' or 'We can't open this file.' Because Windows does not license HEVC codecs by default, viewing HEIC pictures requires a quick workaround. Here are 4 reliable methods to open and convert your HEIC photos, ranked by speed and ease of use.",
      "sections": [
        {
          "h": "Why Doesn't Windows Support HEIC Out of the Box?",
          "p": [
            "Many PC owners assume this is a Windows bug, but the issue is rooted in patent licensing. HEIC uses compression derived from the HEVC (H.265) video standard. Companies that license HEVC require royalties for every device distributed with decoding capabilities. To reduce manufacturing and licensing costs across hundreds of millions of licenses, Microsoft excluded the HEVC codec from base Windows installations.",
            "Windows Photos can detect the HEIC container, but without the underlying decoding library, it displays an empty box with a prompt to visit the Microsoft Store. Fortunately, you do not need to feel stranded; multiple practical workarounds exist."
          ]
        },
        {
          "h": "Method 1: Convert Online in Your Browser (Recommended — Fast & Private)",
          "p": [
            "For most users, converting your HEIC images to universal JPG format is the fastest and most convenient choice. It requires no installation, works on any Windows PC (including restricted work machines where you lack administrative permissions), and produces files you can immediately send to colleagues, clients, or printing services.",
            "With our in-browser tool, all processing happens locally using your computer's own browser engine: photos are converted directly in your browser and are not uploaded to any server. You can drag and drop multiple files at once, preview the converted results, and download them individually or as a single ZIP archive."
          ]
        },
        {
          "h": "Method 2: Install Microsoft's Official HEVC Video Extensions",
          "p": [
            "If you prefer double-clicking HEIC files directly within the default Windows Photos app, you can purchase the official extension from the Microsoft Store for $0.99 (or local currency equivalent).",
            "To install it, open the Microsoft Store application on your PC, search for 'HEVC Video Extensions', and complete the purchase. Once installed, Windows Photos, File Explorer thumbnail previews, and Paint will be able to display HEIC files naturally. Keep in mind that while this solves the problem on your personal desktop, any HEIC files you email or upload to third-party web forms may still be rejected by recipients who lack the codec."
          ]
        },
        {
          "h": "Method 3: Configure Your iPhone to Shoot in JPG Format",
          "p": [
            "If you frequently transfer camera captures to a Windows laptop, you can eliminate future format conflicts directly at the source.",
            "On your iPhone, navigate to Settings > Camera > Formats and select 'Most Compatible'. This tells iOS to save all future camera snapshots in standard JPEG format. When you plug your iPhone into your PC via USB cable or transfer images through cloud storage, they will already be in universal JPG format. Note that this change applies only to future captures; existing HEIC files in your camera roll must still be converted using Method 1."
          ]
        },
        {
          "h": "Method 4: Install a Free Third-Party Image Viewer",
          "p": [
            "If you do not want to purchase the Microsoft Store extension and want to keep your images in HEIC format on your hard drive, you can install a free third-party desktop viewer with built-in decoding libraries.",
            "Popular, reputable options include Honeyview, XnView MP, and ImageGlass. These utilities come packaged with their own open-source decoding libraries and do not rely on Windows codecs. After installing your preferred viewer, right-click any .heic file, choose 'Open with', and set the application as your default photo viewer."
          ]
        }
      ],
      "faqs": [
        {
          "q": "Will converting HEIC to JPG degrade visual quality?",
          "a": "High-quality conversion maintains sharp focus and true colors. Our converter applies an optimized 0.8 quality setting that preserves high visual fidelity while preventing excessive file bloat, making it suitable for printing, sharing, and archiving."
        },
        {
          "q": "Why avoid typical cloud converter websites?",
          "a": "Traditional online converters require uploading your personal images to remote servers. This introduces waiting times for large files and creates privacy concerns regarding how long your photos are stored remotely. Client-side tools that process files locally in your browser eliminate these privacy hazards."
        },
        {
          "q": "Can I convert dozens of iPhone photos at the same time?",
          "a": "Yes. You can drag and drop dozens of HEIC files into our tool simultaneously. The converter processes images in a parallel queue and allows you to download everything in one organized ZIP file."
        },
        {
          "q": "Will Windows 11 ever include native HEIC support for free?",
          "a": "Due to ongoing patent royalties tied to the HEVC licensing structure, Microsoft is unlikely to include free built-in decoding in standard consumer editions. Converting files or using standalone software remains the standard approach."
        }
      ],
      "toolLink": "heic-to-jpg",
      "toolLinkText": "Convert HEIC to JPG Free →"
    },
    "iphone-compatible-format": {
      "slug": "iphone-compatible-format",
      "title": "How to Make iPhone Take JPG Photos Instead of HEIC (Step-by-Step)",
      "description": "Tired of HEIC compatibility headaches? Learn how to set your iPhone camera to shoot standard JPG photos automatically, plus the trade-offs in storage and video recording.",
      "h1": "How to Make iPhone Take JPG Photos Instead of HEIC (Step-by-Step)",
      "intro": "If you are weary of copying photos from your iPhone to your office PC or school website only to see 'Unsupported File Format' errors, you can instruct your iPhone to shoot in universal JPEG format permanently. Changing the camera setting takes less than ten seconds, but before making the switch, it is important to weigh the real-world trade-offs regarding storage capacity and video features.",
      "sections": [
        {
          "h": "How to Switch Your iPhone Camera to JPG (10-Second Guide)",
          "p": [
            "Step 1: Open the Settings app on your iPhone.",
            "Step 2: Scroll down through the list of system applications and tap 'Camera'.",
            "Step 3: At the top of the Camera settings screen, select 'Formats'.",
            "Step 4: You will see two options: 'High Efficiency' (Apple's default, which uses HEIC and HEVC) and 'Most Compatible'. Tap 'Most Compatible' to select it.",
            "Once selected, your camera will immediately begin saving new still photos in standard JPEG (.jpg) format. You do not need to restart your device; future snapshots will be fully compatible with any computer, operating system, and web portal."
          ]
        },
        {
          "h": "3 Important Trade-offs to Consider Before Switching",
          "p": [
            "Trade-off 1: Photos will consume nearly twice as much storage space. Because JPEG is an older compression standard, a photo that takes up 1.8MB in HEIC will often require 3.5MB to 5MB in JPG at comparable visual quality. If you own an iPhone with 64GB or 128GB of internal memory, your storage bar will fill up much more quickly.",
            "Trade-off 2: Video recording modes become restricted. Advanced video modes—such as 4K at 60 frames per second, 1080p at 240 fps slow-motion, and cinematic HDR video—require the high throughput of the HEVC codec. When 'Most Compatible' is selected, iOS may restrict these high-frame-rate options or fall back to H.264, which consumes massive amounts of storage.",
            "Trade-off 3: Live Photos still work, but with larger files. Live Photos remain operational in 'Most Compatible' mode, but iOS stores them as a pairing of a full JPEG image and an associated MOV video clip, resulting in noticeably larger storage footprints for every capture."
          ]
        },
        {
          "h": "What About Your Existing HEIC Photos?",
          "p": [
            "It is crucial to understand that toggling your camera setting to 'Most Compatible' is not retroactive. It only applies to photos taken after the setting is changed; the hundreds or thousands of HEIC photos already stored in your Apple Photos library will remain in HEIC format.",
            "When you need to export or upload those historical photos, you can easily batch convert them using our in-browser tool. Because files are converted directly in your browser and are not uploaded to any server, you can process entire albums quickly without bandwidth delays or privacy risks."
          ]
        },
        {
          "h": "Smart Alternative: Automatic Conversion During PC Transfer",
          "p": [
            "If you want to keep the storage-saving advantages of HEIC on your iPhone while ensuring effortless file transfers to a Windows desktop, Apple provides a helpful automated transfer setting.",
            "Open iPhone Settings, navigate to 'Photos', scroll to the very bottom, and look for 'Transfer to Mac or PC'. Change this setting from 'Keep Originals' to 'Automatic'. With this enabled, whenever you connect your iPhone to a Windows PC via a Lightning or USB-C cable, iOS automatically converts your HEIC photos to standard JPG format during the file transfer, giving you the best of both worlds."
          ]
        }
      ],
      "faqs": [
        {
          "q": "Can I switch back to High Efficiency later?",
          "a": "Yes. You can return to Settings > Camera > Formats and switch back to 'High Efficiency' at any time. Your iPhone camera roll handles a mix of HEIC and JPG files without any issues."
        },
        {
          "q": "Who should switch to 'Most Compatible'?",
          "a": "Switching to 'Most Compatible' is ideal for professionals who frequently transfer photos to corporate Windows PCs, real estate agents, educators, and anyone who submits photo attachments to governmental or academic forms on a daily basis. If your storage is abundant and you work mainly within the Apple ecosystem, staying on 'High Efficiency' is generally preferable."
        },
        {
          "q": "Does this setting affect photos sent through messaging apps?",
          "a": "Generally no. Apps like WhatsApp, Telegram, and iMessage re-encode or compress photos automatically prior to transmission, ensuring recipients can view them regardless of your camera settings."
        },
        {
          "q": "What happens when I AirDrop a photo to a Mac?",
          "a": "AirDrop transfers original files directly without alteration. Because macOS includes comprehensive native HEIC support across all applications, receiving HEIC files on a Mac causes no inconvenience."
        }
      ],
      "toolLink": "heic-to-jpg",
      "toolLinkText": "Convert HEIC to JPG Free →"
    },
    "heic-vs-jpg": {
      "slug": "heic-vs-jpg",
      "title": "HEIC vs JPG: Full Comparison of Image Quality, File Size, and Compatibility",
      "description": "Comparing HEIC vs JPG: Which format is better for your photos? Explore detailed differences in compression, 16-bit color, file sizes, and universal device support.",
      "h1": "HEIC vs JPG: Full Comparison of Image Quality, File Size, and Compatibility",
      "intro": "HEIC offers compact file sizes, while JPG offers universal compatibility across the entire computing world. This fundamental trade-off is at the center of modern digital photography. Whether you are managing your personal iPhone storage or trying to streamline image uploads for work, understanding the technical and practical differences between HEIC and JPG helps you make the right choice for every situation.",
      "sections": [
        {
          "h": "Key Technical Differences at a Glance",
          "p": [
            "JPEG was introduced in 1992 by the Joint Photographic Experts Group and relies on discrete cosine transform (DCT) compression. It has served as the backbone of digital imagery on the web for over thirty years. HEIC was standardized in 2015 by MPEG and utilizes the advanced intra-frame prediction algorithms of the HEVC (H.265) video standard.",
            "In terms of color fidelity, JPEG is strictly limited to 8-bit color depth, offering 256 tonal steps per color channel (16.7 million colors total). HEIC natively supports up to 16-bit color depth (billions of distinct colors), resulting in significantly smoother tonal transitions. Furthermore, JPEG only encodes flat, single-layer bitmaps, whereas HEIC operates as a multi-item container capable of holding burst sequences, transparency layers, depth maps, and audio data within a single file."
          ]
        },
        {
          "h": "File Size and Compression Efficiency",
          "p": [
            "Under identical visual conditions, HEIC images consistently consume approximately 40% to 50% less storage space than equivalent JPEG files. For instance, a detailed 12-megapixel landscape photo taken with a smartphone camera typically occupies around 3.8MB as a high-quality JPEG, but requires only 1.8MB to 2.0MB when encoded as HEIC.",
            "This dramatic reduction is achieved through sophisticated compression mechanisms. JPEG breaks an image into rigid 8x8 pixel blocks, which frequently introduces visible blocky artifacts in smooth skies or uniform backgrounds. HEIC employs variable-sized coding tree units ranging from 4x4 up to 64x64 pixels, alongside 35 directional prediction modes, preserving sharp high-frequency edges while discarding invisible data redundancies."
          ]
        },
        {
          "h": "Image Quality and Dynamic Range: Can You See the Difference?",
          "p": [
            "When browsing vacation snapshots on a smartphone display or laptop screen, the vast majority of viewers cannot distinguish between a HEIC file and a top-tier JPEG. Both appear sharp, vivid, and rich in detail under standard viewing conditions.",
            "The tangible advantage of HEIC emerges in high-contrast lighting and post-processing workflows. When capturing sunrises, sunsets, or backlit subjects, HEIC's 10-bit to 16-bit color precision preserves highlight and shadow details that are permanently clipped in an 8-bit JPEG. Photographers adjusting exposure, lifting shadows, or grading colors in editing suites will experience far less digital noise and virtually zero banding with HEIC."
          ]
        },
        {
          "h": "Compatibility Reality: Why JPG Remains the Indispensable Standard",
          "p": [
            "While HEIC wins decisively on technical benchmarks, JPEG remains the undisputed king of real-world compatibility. Every web browser created in the last twenty-five years, every version of Windows, Linux, and Android, every photo lab kiosk, office printer, and content management system natively reads and writes JPEG files without hesitation.",
            "HEIC, hindered by complex patent licensing fees, is still not natively decoded by base Windows installations or older operating systems. Whenever you must submit attachments to web portals, email photos to clients, or distribute images across diverse platforms, converting your files to JPG remains the single most reliable course of action."
          ]
        },
        {
          "h": "Which Format Should You Choose?",
          "p": [
            "Use HEIC if: You primarily capture memories on an iPhone, iPad, or Mac; you want to maximize your device storage without paying for extra iCloud tiers; and your sharing stays within the Apple ecosystem via AirDrop and Shared Albums.",
            "Use JPG if: You regularly transfer photos to Windows PCs, share images with Android users, upload documents to governmental portals or job boards, or need your files to open instantly anywhere on Earth. Our in-browser converter allows you to convert HEIC to JPG instantly whenever compatibility is required — directly in your browser, without uploading to any server.",
            "Use PNG if: You require lossless compression for graphics, digital illustrations, or logos containing transparent backgrounds."
          ]
        }
      ],
      "faqs": [
        {
          "q": "Does converting a JPG back to HEIC restore quality?",
          "a": "No. When a file is converted to JPG, data discarded during initial lossy compression is lost permanently. Re-encoding it into HEIC will not restore color depth or dynamic range; in fact, it introduces a second layer of compression loss."
        },
        {
          "q": "Why do social media platforms compress both formats?",
          "a": "Networks like Instagram, Facebook, and X (formerly Twitter) re-encode all uploaded images to optimized resolutions and standardized web codecs to conserve bandwidth and guarantee instant playback on mobile feeds."
        },
        {
          "q": "What about newer formats like AVIF?",
          "a": "AVIF (based on the royalty-free AV1 codec) is a modern competitor offering compression comparable to or slightly exceeding HEIC without licensing fees. While modern desktop browsers support AVIF, JPEG remains vastly more widespread across hardware decoders and legacy software."
        },
        {
          "q": "Can converted JPG files be opened on old Windows 7 computers?",
          "a": "Yes. Our tool exports standardized JFIF/JPEG files that are fully readable on all operating systems, including Windows 7, Windows XP, Linux, and legacy photo viewing appliances."
        }
      ],
      "toolLink": "heic-to-jpg",
      "toolLinkText": "Convert HEIC to JPG Free →"
    },
    "heic-rejected-by-website": {
      "slug": "heic-rejected-by-website",
      "title": "HEIC Photo Rejected by Website Upload? 4 Proven Ways to Fix It",
      "description": "Getting 'Invalid file format' or 'Only JPEG/PNG accepted' when uploading iPhone photos to job applications or portals? Learn why websites reject HEIC, how to fix it instantly, and how in-browser conversion protects your GPS privacy.",
      "h1": "HEIC Photo Rejected by Website Upload? 4 Proven Ways to Fix It",
      "intro": "You snap a clear photo of your passport, driver's license, or receipt with your iPhone, click 'Upload' on an official portal or job application, and get stopped in your tracks by a frustrating error message: 'File format not supported — only JPEG or PNG allowed.' Or worse, the file picker simply greys out your photos so you cannot even select them. This guide explains why modern websites still reject Apple's HEIC format, provides 4 actionable methods to convert and upload your photos within seconds, and details why converting directly in your browser safeguards your personal location privacy.",
      "sections": [
        {
          "h": "Why Do So Many Websites, Portals, and Applications Reject HEIC?",
          "p": [
            "Given that iPhones have used HEIC as their default format for many years, why do so many major web portals still fail to accept it? The explanation comes down to three main technical barriers:",
            "First, high patent licensing fees and server-side complexity. HEIC is built on HEVC (H.265), a video standard governed by several separate commercial patent pools. Most web application backends run on Linux servers using open-source image libraries (such as GD, standard ImageMagick, or Python Pillow). Unless developers specifically compile and maintain libheif with appropriate commercial licenses, the server cannot decode HEIC bytes without risking licensing disputes or high CPU spikes.",
            "Second, strict frontend file validation. Web developers often configure file input fields with strict HTML accept attributes, such as accept=\"image/jpeg,image/png\", or JavaScript MIME checks. When your operating system opens the file selection dialog, it automatically disables any file that does not match these exact extensions, rendering your .heic photos grey and unclickable.",
            "Third, these rejections are concentrated in high-stakes workflows: government portals (tax filings, passport renewals, visa submissions), Applicant Tracking Systems (ATS job portals, corporate hiring boards), university application portals, professional certification boards, and traditional rental or banking platforms. When you are racing against a submission deadline, an upload rejection is especially stressful."
          ]
        },
        {
          "h": "The Hidden Privacy Hazard: Why Uploading Raw iPhone Photos Leaks Location",
          "p": [
            "While struggling with an upload error, most people do not realize that raw iPhone photos carry significant privacy implications: embedded EXIF metadata.",
            "Whenever your iPhone takes a photo outdoors with location services enabled, it embeds precise GPS latitude, longitude, elevation, timestamp, and device identifiers directly into the file header. If you were to upload an unprocessed raw photo to a public job board, apartment rental forum, or community portal, anyone who downloads that image could inspect its EXIF tags and extract your exact home address, workplace, or personal habits.",
            "Here lies a key advantage of in-browser client-side conversion: when an image is decoded and drawn onto an HTML5 canvas inside your browser, the process strips away geolocation EXIF tags while preserving the visual content. You receive a clean, standard JPG that satisfies the website's format requirement without exposing your personal coordinates to third-party database servers."
          ]
        },
        {
          "h": "4 Tested Ways to Fix HEIC Upload Rejections",
          "p": [
            "Method 1: Instant in-browser conversion (Recommended — 5 seconds). This is the fastest, simplest, and most secure solution. You do not need to download software or install browser extensions. Simply open our tool, drag your HEIC files into the converter, and let it process them locally. Photos are converted directly in your browser and are not uploaded to any server. You receive clean, compliant JPGs ready for immediate submission, with full peace of mind for sensitive identification documents.",
            "Method 2: Use the iPhone Share Sheet and Notes workaround. If you are on an iPhone without access to a desktop browser, you can open the photo in the iOS Photos app, tap the Share icon, and select 'Copy Photo'. Next, open Apple Notes, paste the image into a note, tap the photo again, tap Share, and choose 'Save to Files' or send it to yourself via email. iOS often packages the shared file as a JPEG, though this method is tedious for multiple files.",
            "Method 3: Convert on macOS or Windows using desktop tools. If you are using a Mac, right-click the HEIC file in Finder, choose 'Quick Actions > Convert Image', select JPEG, and click Convert. On Windows, if you have the HEVC extension installed, you can open the file in the Paint app and select 'File > Save As > JPEG picture'.",
            "Method 4: Change iPhone camera settings to prevent future rejections. If you regularly submit photo forms, you can permanently eliminate this headache by opening iPhone Settings > Camera > Formats and changing 'High Efficiency' to 'Most Compatible'. All subsequent photos will be captured directly as standard JPG files."
          ]
        },
        {
          "h": "Two Critical Mistakes to Avoid",
          "p": [
            "Mistake 1: Never simply rename .heic to .jpg. Changing the filename extension in File Explorer or Finder does not convert the internal image data. The file remains an HEVC-encoded stream. Server upload handlers inspect the file header's magic bytes (JPEG starts with FFD8FF, whereas HEIC contains ftypheic). Renaming the file will still trigger a backend validation failure or corrupt your application form.",
            "Mistake 2: Avoid uploading sensitive ID documents to unknown cloud conversion sites. Many generic file converter websites upload your files to remote servers where they may sit in temporary folders for days or weeks. For sensitive documents like passports, driver's licenses, and tax forms, always ensure the conversion runs entirely client-side on your device without server transmission."
          ]
        }
      ],
      "faqs": [
        {
          "q": "Why are my HEIC photos greyed out in the browser file picker?",
          "a": "The website's file input field has a filter restricting uploads to specific file types like .jpg or .png. Your operating system's file browser honors this restriction by disabling unapproved formats. Converting your file to .jpg makes it immediately selectable."
        },
        {
          "q": "Does converting to JPG reduce photo clarity for identity verification?",
          "a": "No. When converted using an optimized 0.8 quality factor, the exported JPG preserves sharp facial contours, crisp text on documents, and authentic colors. It easily satisfies the resolution requirements for biometric face matching and document verification."
        },
        {
          "q": "How can I verify that GPS location was removed from my converted photo?",
          "a": "Download the converted JPG to your computer, right-click it, select 'Properties' (or 'Get Info' on macOS), and switch to the Details tab. You will see that the GPS latitude and longitude fields present in the original iPhone photo have been stripped away."
        },
        {
          "q": "Why did my mobile browser accept the upload while my desktop browser rejected it?",
          "a": "Mobile Safari on iOS sometimes transparently transcodes HEIC images into JPEG behind the scenes when passing them to web form uploaders. Desktop browsers (like Chrome or Edge on Windows) do not perform this silent translation, exposing the format incompatibility."
        },
        {
          "q": "Can I email the photo to myself to get a JPG?",
          "a": "Yes, using the iOS Mail app to email a photo to yourself can convert it to JPEG if you choose a downscaled size like 'Large'. However, this reduces resolution and image dimensions, which may cause document validation systems to reject the image for being too small. Using a dedicated high-fidelity converter avoids downscaling."
        }
      ],
      "toolLink": "heic-to-jpg",
      "toolLinkText": "Convert HEIC to JPG Free →"
    }
  },
};

// ---------------- Legal pages ----------------

export interface LegalContent {
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { h: string; p: string[] }[];
}

export const legal: Record<"privacy" | "about" | "contact", Record<ContentLocale, LegalContent>> = {
  privacy: {
    zh: {
      title: "隐私政策",
      description: "Heic2Jpg 隐私政策：照片只在浏览器本地处理，不上传、不存储；统计使用自建、无 Cookie 的 Umami，不收集个人身份信息。",
      h1: "隐私政策",
      intro: "更新日期：2026 年 9 月 30 日。Heic2Jpg 的核心原则是：你的照片只属于你。",
      sections: [
        {
          h: "你的照片去哪了？",
          p: [
            "哪也没去。所有格式转换都在你的浏览器里本地完成，照片文件不会上传到我们的服务器，也不会经过任何第三方服务器。",
            "我们不存储你的照片，不查看你的照片，也没有这个能力——因为照片从未离开你的设备。",
          ],
        },
        {
          h: "我们收集什么统计数据？",
          p: [
            "我们使用自建的 Umami 统计（而不是 Google Analytics），它不使用 Cookie，不记录 IP 地址，不关联任何个人身份。",
            "记录的只有聚合信息：比如某个页面被访问了多少次、访客来自哪个国家、用什么浏览器。这些数据只用来了解工具好不好用，不会出售、不会共享给广告商。",
            "页面上没有任何广告追踪器、社交分享追踪器或会话录屏脚本。",
          ],
        },
        {
          h: "Cookie",
          p: ["本站不使用 Cookie。关闭浏览器再回来，你的偏好不会被记住——这是故意的。"],
        },
        {
          h: "联系我们",
          p: ["如果你对这份隐私政策有疑问，欢迎通过联系页面找到我们。"],
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      description:
        "Heic2Jpg privacy policy: photos are processed locally in your browser and are not uploaded to any server or stored. Analytics is self-hosted, cookieless Umami — no personal data collected.",
      h1: "Privacy Policy",
      intro: "Last updated: September 30, 2026. Heic2Jpg's core principle: your photos belong to you.",
      sections: [
        {
          h: "Where do your photos go?",
          p: [
            "Nowhere. All conversion happens locally in your browser. Photo files are not uploaded to our servers or any third-party server.",
            "We don't store your photos, we don't view them — we couldn't even if we wanted to, because they never leave your device.",
          ],
        },
        {
          h: "What analytics do we collect?",
          p: [
            "We use self-hosted Umami (not Google Analytics). It uses no cookies, records no IP addresses, and ties nothing to your identity.",
            "Only aggregate data is recorded: page views, visitor countries, browser types. It's used solely to understand whether the tool works well — never sold, never shared with advertisers.",
            "There are no ad trackers, social widgets trackers, or session-recording scripts on this site.",
          ],
        },
        {
          h: "Cookies",
          p: ["This site uses no cookies. Close the browser and come back — nothing about you is remembered. That's intentional."],
        },
        {
          h: "Contact",
          p: ["If you have questions about this policy, reach us via the contact page."],
        },
      ],
    },
  },
  about: {
    zh: {
      title: "关于我们",
      description: "关于 Heic2Jpg：一个免费、无需注册、在浏览器本地完成转换的图片格式工具。照片不上传，批量不限次数。",
      h1: "关于 Heic2Jpg",
      intro: "Heic2Jpg 是一个免费的图片格式转换工具，诞生于一个简单的想法：转个格式而已，为什么要把照片上传到别人的服务器？",
      sections: [
        {
          h: "我们做什么",
          p: [
            "提供 HEIC 转 JPG、HEIC 转 PNG、WebP 转 JPG 三个在线工具，外加几篇讲清图片格式的使用指南。",
            "所有转换都在你的浏览器里完成，不上传、不存储、不收费、不限次数，也不用注册账号。",
          ],
        },
        {
          h: "为什么免费",
          p: [
            "因为成本真的很低：转换用的是你自己设备的算力，服务器只负责提供网页本身。如果觉得好用，页脚有个请喝咖啡的链接，随意就好。",
          ],
        },
      ],
    },
    en: {
      title: "About Us",
      description:
        "About Heic2Jpg: a free image-format converter that runs entirely in your browser. No uploads, no sign-up, no limits.",
      h1: "About Heic2Jpg",
      intro:
        "Heic2Jpg is a free image-format converter born from a simple idea: converting a format shouldn't require uploading your photos to someone else's server.",
      sections: [
        {
          h: "What we do",
          p: [
            "We offer three online tools — HEIC to JPG, HEIC to PNG, WebP to JPG — plus guides that explain image formats in plain language.",
            "All conversion happens in your browser: no uploads, no storage, no fees, no limits, no sign-up.",
          ],
        },
        {
          h: "Why free",
          p: [
            "Because it genuinely costs little: the conversion uses your own device's computing power; our server only serves the web page. If you find it useful, there's a buy-me-a-coffee link in the footer — entirely optional.",
          ],
        },
      ],
    },
  },
  contact: {
    zh: {
      title: "联系我们",
      description: "联系 Heic2Jpg：遇到转换问题、有功能建议或商务合作，欢迎留言。",
      h1: "联系我们",
      intro: "遇到转换问题、有功能建议，或想聊聊合作，欢迎通过下面的方式找到我们。",
      sections: [
        {
          h: "留言",
          p: [
            "最快的方式是在 Ko-fi 页面留言（顺手还能请喝杯咖啡）。",
            "我们会看每一条留言，但回复可能不及时——毕竟这是个用爱发电的小工具。",
          ],
        },
      ],
    },
    en: {
      title: "Contact",
      description: "Contact Heic2Jpg: conversion issues, feature suggestions, or business inquiries — we'd love to hear from you.",
      h1: "Contact Us",
      intro: "Ran into a conversion issue, have a feature idea, or want to talk business? Here's how to reach us.",
      sections: [
        {
          h: "Leave a message",
          p: [
            "The fastest way is to leave a message on our Ko-fi page (you can buy us a coffee while you're there).",
            "We read every message, though replies may take a while — this is a labor-of-love side project, after all.",
          ],
        },
      ],
    },
  },
};
