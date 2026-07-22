export const siteConfig = {
  // 多语言名称（站点名 / 当地名）
  name: {
    th: 'ท้าวมหาพรหมเอราวัณ',
    en: 'Thao Maha Brahma (Erawan Shrine)',
    zh: '四面佛（爱侣湾神坛）',
  },
  nameLocal: 'ศาลท้าวมหาพรหมเอราวัณ', // 当地（泰文）名称
  domain: process.env.CURRENT_SITE_DOMAIN ? `https://${process.env.CURRENT_SITE_DOMAIN}` : 'https://erawanshrine.org',

  phone: '+6622528750',
  phoneDisplay: '+66 2 252 8750',

  rating: 4.7,
  reviewCount: '6,888',

  // 实际坐标（用于天气 / 日落 API 与地图嵌入）—— 四面佛（Erawan Shrine，曼谷叻猜南蒂路）
  coords: { lat: 13.7443, lng: 100.5397 },

  // 统一 Google Maps 链接（首屏 / 照片 / 评价 / 页脚 共 4 处 + JSON-LD sameAs）
  mapsUrl: 'https://maps.app.goo.gl/ECtrKVPgRqdk2fdM9',

  // 地图嵌入（MapSection iframe，使用用户提供的四面佛 Google Maps 嵌入代码）
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968585.7137442343!2d95.66252571250001!3d13.744343700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed00cedd871%3A0x30fa1bb9eee21654!2z5Zub6Z2i5L2b!5e0!3m2!1szh-CN!2sus!4v1784686045200!5m2!1szh-CN!2sus',

  // 结构化数据 sameAs（权威资料页）
  sameAs: [
    'https://maps.app.goo.gl/ECtrKVPgRqdk2fdM9',
    'https://en.wikipedia.org/wiki/Erawan_Shrine',
  ],

  address: '494 Ratchadamri Rd, Lumphini, Pathum Wan, Bangkok 10330, Thailand',
  plusCode: 'PGVR+P5',

  // 画廊图片前缀（配合 public/gallery/thao-maha-brahma-1..N.jpg）
  galleryPrefix: 'thao-maha-brahma-',

  // 画廊实际图片数量（public/gallery 下真实存在的 1..N.jpg 张数）。
  // 删除带水印照片后请同步更新此值，避免上线出现空图。
  galleryCount: 17,

  // OG / favicon 图片
  ogImage: '/gallery/thao-maha-brahma-1.jpg',

  // 营业时间（用于 JSON-LD）
  openingHours: { opens: '06:00', closes: '22:00' },

  // 社交 / 资料链接（科普站占位，上线前请替换为官方或可运营账号）
  socialLinks: [
    {
      name: 'Tourism Thailand',
      href: 'https://www.tourismthailand.org/',
      icon: 'globe',
    },
    {
      name: 'Wikipedia — Erawan Shrine',
      href: 'https://en.wikipedia.org/wiki/Erawan_Shrine',
      icon: 'tree',
    },
    {
      name: 'Google Maps',
      href: 'https://maps.app.goo.gl/ECtrKVPgRqdk2fdM9',
      icon: 'map',
    },
  ],

  // 资料来源（页脚引用，需与页脚 per-language name 结构一致）
  sources: [
    {
      name: { th: 'การท่องเที่ยวแห่งประเทศไทย', en: 'Tourism Authority of Thailand', zh: '泰国国家旅游局' },
      url: 'https://www.tourismthailand.org/',
    },
    {
      name: { th: 'วิกิพีเดีย – ศาลท้าวมหาพรหมเอราวัณ', en: 'Wikipedia — Erawan Shrine', zh: '维基百科 – 四面佛' },
      url: 'https://en.wikipedia.org/wiki/Erawan_Shrine',
    },
    {
      name: { th: 'สำนักงานเขตปทุมวัน', en: 'Pathum Wan District Office', zh: '巴吞旺县公所' },
      url: 'https://www.bangkok.go.th/pathumwan',
    },
  ],
};
