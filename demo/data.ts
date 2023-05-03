export const header_menus: { title: string, path: string, target: string }[] = [
  { title: 'home', path: '/', target: '_self' },
  { title: 'ecosystem', path: '/ecosystem', target: '_self' },
  { title: 'growth', path: '/growth', target: '_self' },
  { title: 'news', path: '/news', target: '_self' },
  { title: 'develope', path: '/develope', target: '_self' },
  { title: 'tools', path: 'https://brs.tools/', target: '_blank' },
];

export const footer_menus: { title: string, tree: any }[] = [
  {
    title: 'ecosystem',
    tree: [
      { title: 'BRS ecosystem', path: '/ecosystem', target: '_self', },
      { title: 'Growth', path: '/growth', target: '_self', },
      { title: 'News', path: '/news', target: '_self', },
    ]
  },
  {
    title: 'developers',
    tree: [
      { title: 'Developer portal', path: '/develope', target: '_self', },
      { title: 'GitHub', path: 'https://github.com/', target: '_blank', },
      { title: 'BRS whitepaper', path: '/', target: '_blank', },
    ]
  },
  {
    title: 'communities',
    tree: [
      { title: 'Telegram announcement', path: 'https://telegram.com/', target: '_blank', },
      { title: 'Telegram community', path: 'https://telegram.com/', target: '_blank', },
      { title: 'Twitter', path: 'https://twitter.com/', target: '_blank', },
      { title: 'Medium', path: 'https://medium.com/', target: '_blank', },
    ]
  },
  {
    title: 'general',
    tree: [
      { title: 'Media Kit', path: '/', target: '_blank', },
      { title: 'Transparency', path: 'https://brs.tools', target: '_blank', },
    ]
  },  
];

export const brew: {image: string, title: string, desc: string}[] = [
  {
    image: 'suzume.png',
    title: 'NEW Security Token Offerring!',
    desc: '스즈메의 문단속'
  },
  {
    image: 'brs_sto.png',
    title: 'STO로 송강호 영화 투자한다',
    desc: '이데일리'
  },
  {
    image: 'icon.png',
    title: '파트너 스왑 체결',
    desc: 'ICON'
  },    
];

export const partners: {image: string, title: string, path: string}[] = [
  {
    image: 'logo-certik.png',
    title: 'certik',
    path: 'https://www.certik.com/',
  },
  {
    image: 'logo-icon.png',
    title: 'icon',
    path: 'https://www.icon.foundation/',
  },
  {
    image: 'logo-new.png',
    title: 'new',
    path: 'https://www.its-new.co.kr/',
  },
  {
    image: 'logo-myung.png',
    title: 'myung',
    path: 'https://myungfilm.modoo.at/',
  },
  {
    image: 'logo-megabox.png',
    title: 'megabox',
    path: 'https://www.megabox.co.kr/',
  },
  {
    image: 'logo-coinplug.png',
    title: 'coinplug',
    path: 'https://coinplug.com/',
  },
  {
    image: 'logo-bpmg.png',
    title: 'bpmg',
    path: 'https://www.bpmg.io/',
  },
  {
    image: 'logo-movist.png',
    title: 'movist',
    path: 'https://movist.com/',
  },
  {
    image: 'logo-barunson.png',
    title: 'barunson',
    path: 'http://www.barunson.co.kr/',
  },
];

export const header_stats: {icon: string, amount: number, caption: string}[] = [
  {
    icon: 'Lightbulb',
    amount: 48131,
    caption: 'Content issued and growing through the BRS ecosystem'
  },
  {
    icon: 'CurrencyDollar',
    amount: 10324456,
    caption: 'Total digital assets in the BRS ecosystem'
  },
];

export const center_stats: {icon: string, amount: number, caption: string}[] = [
  {
    icon: 'EmojiLaughing',
    amount: 3233,
    caption: 'Worldwide BRS ecosystem users'
  },
  {
    icon: 'Display',
    amount: 37,
    caption: 'Applications in BRS network'
  },  
  {
    icon: 'CurrencyDollar',
    amount: 121234,
    caption: 'Value exchanged through BRS'
  },
];
