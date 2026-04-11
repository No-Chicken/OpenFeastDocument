// /docs/config/nav.ts

export const navConfig = [
    { text: '首页', link: '/' },
    { text: '购买开发套件', link: 'https://fry-oshw.taobao.com/' },
    {
      text: '项目指南',
      items: [
        {
          text: 'OpenFeast Tech',
          items: [{ text: '介绍', link: '/content/main_intro.md' }],
        },
        {
          text: '便携电流功耗计',
          items: [
            { text: 'Power-Pico', link: '/content/Power-Pico/intro.md' },
          ],
        },
        {
          text: 'RV1106-Linux开发板',
          items: [
            { text: 'Echo-Mate', link: '/content/Echo-Mate/intro.md' },
          ],
        },
        {
          text: 'STM32手表',
          items: [
            { text: 'OV-Watch', link: '/content/OV-Watch/intro.md' },
          ],
        },
        {
          text: 'STM32开发板-超多例程',
          items: [
            { text: 'FryPi', link: '/content/FryPi/intro.md' },
          ],
        },
        {
          text: '万能卡片',
          items: [
            { text: 'OV-Card', link: '/content/OV-Card/intro.md' },
          ],
        },
      ],
    },
    { text: '交流群', link: '/content/discuss_groups.md' },
  ]
