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
        "Convert iPhone HEIC photos to JPG online in bulk. Files are processed locally in your browser and never uploaded. Free, no limits.",
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
        { t: "Private by design", d: "Conversion happens entirely in your browser. Photos are never uploaded anywhere — verify it yourself in DevTools." },
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
        "Convert iPhone HEIC photos to lossless PNG for design, print and presentations. Processed locally in your browser, never uploaded. Free, no limits.",
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
        { t: "Private by design", d: "Conversion happens entirely in your browser. Photos are never uploaded anywhere." },
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
        "Batch-convert WebP images to the more compatible JPG — fixes files that old software and printers can't open. Local conversion, never uploaded. Free, no limits.",
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
        { t: "Private by design", d: "Conversion happens entirely in your browser. Images are never uploaded anywhere." },
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

// ---------------- Guides (Chinese only for now) ----------------

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

export const guides: Record<string, GuideContent> = {
  "what-is-heic": {
    slug: "what-is-heic",
    title: "HEIC 是什么？一篇文章讲清苹果的照片格式",
    description:
      "HEIC 是 iPhone 的默认照片格式，体积小画质好但兼容性差。本文讲清 HEIC 的来历、优缺点，以及打不开时怎么办。",
    h1: "HEIC 是什么？一篇文章讲清苹果的照片格式",
    intro:
      "把 iPhone 照片传到电脑上打不开，后缀是 .heic 而不是 .jpg——很多人第一次遇到 HEIC 都是这种情形。这篇文章把 HEIC 是什么、为什么苹果要用它、以及它带来的麻烦一次讲清楚。",
    sections: [
      {
        h: "HEIC 的全称和来历",
        p: [
          "HEIC 全称 High Efficiency Image Container（高效图像容器），基于 HEVC（H.265）视频编码技术。从 iOS 11 开始，苹果把它设为 iPhone 相机的默认照片格式，之后的大部分安卓旗舰机也陆续跟进。",
          "它不是一张简单的图片，而是一个「容器」：一张 HEIC 文件里可以装下多张连拍、实况照片（Live Photo）的动静两部分，甚至景深数据。",
        ],
      },
      {
        h: "苹果为什么要用 HEIC？",
        p: [
          "核心原因是省空间。同样的画质下，HEIC 文件只有 JPG 的一半左右大小。手机存储寸土寸金，这个优势非常实在。",
          "此外 HEIC 支持 16 位色深（JPG 只有 8 位），色彩过渡更细腻，也支持透明通道。这些年 iPhone 拍照质量的提升，一部分就来自这个格式。",
        ],
      },
      {
        h: "HEIC 最大的麻烦：兼容性",
        p: [
          "HEIC 的专利和授权比较复杂，Windows、很多安卓机、老版本软件和大量网站都不原生支持。最常见的翻车现场：iPhone 照片传到 Windows 电脑上双击打不开；发给别人的图片对方说看不到；上传到某些网站提示格式不支持。",
          "Windows 10/11 可以通过微软商店安装 HEVC 视频扩展来获得支持，但它是付费的（约 7 元），而且并不是所有场景都好用。",
        ],
      },
      {
        h: "HEIC 打不开怎么办？",
        p: [
          "最省事的办法是转成 JPG：通用性最强，哪里都能打开。用本站的免费工具即可，照片在浏览器本地转换，不上传，批量也行。",
          "如果想一劳永逸，可以在 iPhone「设置 → 相机 → 格式」里改成「最兼容」，之后拍的照片就直接是 JPG 了（已拍好的 HEIC 还是需要转换）。",
        ],
      },
    ],
    faqs: [
      { q: "HEIC 和 JPG 哪个画质更好？", a: "同体积下 HEIC 画质更好，同画质下 HEIC 体积更小。但 JPG 的兼容性是 HEIC 完全比不了的。" },
      { q: "安卓手机支持 HEIC 吗？", a: "部分新款安卓机支持，但很不统一。发给别人之前转成 JPG 是最稳妥的。" },
      { q: "HEIC 能直接改后缀变成 JPG 吗？", a: "不能。改后缀只是改了个名字，文件内容还是 HEIC，必须经过真正的格式转换。" },
    ],
    toolLink: "heic-to-jpg",
    toolLinkText: "免费把 HEIC 转成 JPG →",
  },
  "open-heic-on-windows": {
    slug: "open-heic-on-windows",
    title: "Windows 怎么打开 HEIC 照片？4 种方法",
    description:
      "iPhone 照片在 Windows 电脑上打不开？本文介绍 4 种打开 HEIC 的方法：在线转换、安装 HEVC 扩展、改 iPhone 设置、用第三方看图软件。",
    h1: "Windows 怎么打开 HEIC 照片？4 种方法",
    intro:
      "把 iPhone 照片拷到 Windows 电脑，双击却提示「无法打开」——因为 Windows 默认不支持 HEIC 格式。下面 4 种方法，按推荐程度排序，总有一种适合你。",
    sections: [
      {
        h: "方法一：在线转成 JPG（最推荐）",
        p: [
          "把 HEIC 文件拖进在线转换工具，转成 JPG 后哪里都能打开。不用安装任何软件，Windows、Mac 通用。",
          "注意选不上传的工具：照片在浏览器本地转换，不经过服务器，隐私才有保障。本站工具就是按这个标准做的，还支持批量转换。",
        ],
      },
      {
        h: "方法二：安装微软官方 HEVC 扩展",
        p: [
          "在微软商店搜索「HEVC 视频扩展」，付费安装（约 7 元）后，系统自带的照片应用就能直接打开 HEIC。",
          "缺点：要花钱；而且只是「能看」，发给别人、上传网站时还是会遇到格式问题，治标不治本。",
        ],
      },
      {
        h: "方法三：把 iPhone 改成拍 JPG",
        p: [
          "打开 iPhone「设置 → 相机 → 格式」，选择「最兼容」。之后拍摄的照片会直接存成 JPG，传到 Windows 上畅通无阻。",
          "注意：这个设置只对以后拍的照片生效，已经存在的 HEIC 照片还是得靠方法一转换。",
        ],
      },
      {
        h: "方法四：用第三方看图软件",
        p: [
          "Honeyview、XnView 等免费看图软件原生支持 HEIC，安装一个就能看。",
          "适合只想在自己电脑上查看的人；要分享、打印、上传的话，还是转成 JPG 更彻底。",
        ],
      },
    ],
    faqs: [
      { q: "为什么 Windows 不直接支持 HEIC？", a: "HEIC 基于 HEVC 编码，专利授权复杂，微软没有把它做进系统默认组件，需要单独安装扩展。" },
      { q: "转成 JPG 后画质会变差吗？", a: "用高质量系数转换（本站用 0.8），日常查看和打印看不出差别。" },
      { q: "一次能转很多张吗？", a: "可以。本站工具支持批量拖拽，转完打包成 ZIP 一次下载。" },
    ],
    toolLink: "heic-to-jpg",
    toolLinkText: "免费把 HEIC 转成 JPG →",
  },
  "iphone-compatible-format": {
    slug: "iphone-compatible-format",
    title: "iPhone 怎么设置拍照直接存 JPG？",
    description:
      "不想再被 HEIC 格式困扰？在 iPhone 设置里把相机格式改成「最兼容」，以后拍的照片直接就是 JPG，附注意事项。",
    h1: "iPhone 怎么设置拍照直接存 JPG？",
    intro:
      "如果你受够了 HEIC 的兼容性问题，可以让 iPhone 直接拍 JPG，一劳永逸。设置只要 10 秒，但有几个注意事项先看完再决定。",
    sections: [
      {
        h: "设置步骤",
        p: [
          "打开「设置 → 相机 → 格式」，你会看到两个选项：「高效」和「最兼容」。",
          "选择「最兼容」，之后用相机拍摄的照片会直接保存为 JPG 格式，传到电脑、发给朋友都不会再遇到打不开的问题。",
        ],
      },
      {
        h: "改成 JPG 之前要知道的事",
        p: [
          "第一，照片体积会变大。同样的画质，JPG 比 HEIC 大约一倍，手机存储吃紧的人要掂量一下。",
          "第二，视频也会受影响。「最兼容」下视频用 H.264 编码而不是 HEVC，体积同样更大，4K 视频尤其明显。",
          "第三，实况照片（Live Photo）的效果在 JPG 模式下不变，这点不用担心。",
        ],
      },
      {
        h: "已经拍好的 HEIC 照片怎么办？",
        p: [
          "这个设置只影响以后拍摄的照片，相册里已有的 HEIC 不会自动变成 JPG。",
          "用在线工具批量转一次就行：照片在浏览器本地转换，不上传，转完按时间排序，和原来一样好找。",
        ],
      },
    ],
    faqs: [
      { q: "改成最兼容后还能改回去吗？", a: "随时可以。在「设置 → 相机 → 格式」里切回「高效」即可，两种格式可以混用。" },
      { q: "微信发送照片和这个设置有关吗？", a: "关系不大。微信发送时会自动压缩，和你相册里的原格式无关。" },
      { q: "哪种设置更适合普通人？", a: "经常把照片传到 Windows 电脑、需要打印或投稿的，选「最兼容」；只在苹果生态内流转、存储吃紧的，继续用「高效」。" },
    ],
    toolLink: "heic-to-jpg",
    toolLinkText: "把已有的 HEIC 批量转成 JPG →",
  },
  "heic-vs-jpg": {
    slug: "heic-vs-jpg",
    title: "HEIC 和 JPG 有什么区别？该用哪个？",
    description:
      "HEIC 和 JPG 对比：体积、画质、兼容性全面比较，告诉你日常使用、设计印刷、分享传播分别该选哪个格式。",
    h1: "HEIC 和 JPG 有什么区别？该用哪个？",
    intro:
      "HEIC 体积小，JPG 兼容好——这是两者最核心的区别。但具体差多少、各自适合什么场景，值得细说一次。",
    sections: [
      {
        h: "体积：HEIC 完胜",
        p: [
          "同样的画质下，HEIC 文件大约只有 JPG 的一半。手机拍一年照片，能省出几十 GB 空间，这是苹果力推 HEIC 的根本原因。",
          "不过注意：转成 JPG 后体积变大是正常的，不是转换工具的问题，是格式本身的差异。",
        ],
      },
      {
        h: "画质：HEIC 略胜",
        p: [
          "HEIC 支持 16 位色深，色彩过渡更细腻，还能存景深、连拍等多帧数据。JPG 是 8 位色深的老格式，技术上落后一代。",
          "但在手机屏幕上看，两者的差别绝大多数人分辨不出来。画质差距更多体现在后期编辑的空间上。",
        ],
      },
      {
        h: "兼容性：JPG 碾压",
        p: [
          "JPG 从 1992 年用到今天，是兼容性之王：所有手机、电脑、浏览器、打印机、网站都支持。",
          "HEIC 则处处碰壁：Windows 默认打不开、很多网站上传不支持、老设备直接无视。对需要分享、投稿、打印的照片，JPG 仍然是唯一稳妥的选择。",
        ],
      },
      {
        h: "结论：按场景选",
        p: [
          "只在 iPhone、Mac 之间流转、想省空间 → 继续用 HEIC。",
          "要传到 Windows、发给别人、上传网站、打印 → 转成 JPG。",
          "要反复编辑、做设计 → 可以考虑无损的 PNG（本站也提供 HEIC 转 PNG 工具）。",
        ],
      },
    ],
    faqs: [
      { q: "HEIC 会取代 JPG 吗？", a: "短期内不会。JPG 的生态位太深了，HEIC 的专利问题也限制了它的普及。两者会长期共存。" },
      { q: "把 JPG 再转回 HEIC 有意义吗？", a: "没有。转回去并不会找回画质，体积优势也有限，还多了兼容性麻烦。" },
      { q: "发朋友圈用哪个格式？", a: "都一样。微信、微博上传时都会重新压缩，你传 HEIC 还是 JPG 最终效果差别不大。" },
    ],
    toolLink: "heic-to-jpg",
    toolLinkText: "免费把 HEIC 转成 JPG →",
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
        "Heic2Jpg privacy policy: photos are processed locally in your browser and never uploaded or stored. Analytics is self-hosted, cookieless Umami — no personal data collected.",
      h1: "Privacy Policy",
      intro: "Last updated: September 30, 2026. Heic2Jpg's core principle: your photos belong to you.",
      sections: [
        {
          h: "Where do your photos go?",
          p: [
            "Nowhere. All conversion happens locally in your browser. Photo files are never uploaded to our servers or any third-party server.",
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
