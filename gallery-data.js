/*
  ARTWORK LIST
  ============
  之後要新增作品時，只要在下面的陣列裡「複製一組 { }、貼上、改內容」即可。
  首頁的預覽區塊和 gallery.html 全部作品頁，都是讀這份清單自動產生的，
  所以只要改這裡一個地方，兩邊會同時更新。

  欄位說明：
  - src:   圖片檔案路徑（建議放在 assets/img/gallery/ 資料夾裡）
  - title: 作品標題
  - tag:   作品類別，例如「海報設計」「角色插畫」「品牌視覺」
  - year:  年份
  - desc:  一兩句話的簡短說明（會顯示在全部作品頁的圖說）

  新增作品的步驟：
  1. 把新圖片上傳到 assets/img/gallery/ 資料夾
  2. 在下面陣列最後面，新增一組物件（記得前一組結尾要加逗號 ,）
  3. Commit，等 1-2 分鐘，網站就會自動更新
*/

const artworks = [
  {
    src: "assets/img/gallery/tsuilu_wormhole_6th_poster.jpg",
    title: "《蟲洞》6th 白色恐怖工作坊 主視覺海報",
    tag: "Poster",
    year: "2025",
    desc: "為淬慮 Tsuilu 公共議題促進協會第六屆「蟲洞．白色恐怖工作坊」繪製的主視覺海報，以島嶼意象串聯白色恐怖歷史場景。"
  },
  {
    src: "assets/img/gallery/tsuilu_wormhole_5th_poster.jpg",
    title: "《蟲洞》5th 白色恐怖工作坊 主視覺海報",
    tag: "Poster",
    year: "2024",
    desc: "為淬慮 Tsuilu 公共議題促進協會第五屆「蟲洞．白色恐怖工作坊」繪製的主視覺海報，以農民運動過程的意象。"
  },
  {
    src: "assets/img/gallery/farmer.jpg",
    title: "角色設定｜佃農 鐘大虎",
    tag: "Prop",
    year: "2022",
    desc: "《記憶二度色》體驗工作坊角色卡設定，日殖昭和時期一名佃農。"
  },
  {
    src: "assets/img/gallery/police.jpg",
    title: "角色設定｜警察 大山順良",
    tag: "Prop",
    year: "2022",
    desc: "《記憶二度色》體驗工作坊角色卡設定，日殖昭和時期一名警察。"
  },
  {
    src: "assets/img/gallery/landlord.jpg",
    title: "角色設定｜地主 廖文榮",
    tag: "Prop",
    year: "2022",
    desc: "《記憶二度色》體驗工作坊角色卡設定，日殖昭和時期一名地主。"
  },
  
  // 之後新增作品，往這裡繼續加，例如：
  // ,{
  //   src: "assets/img/gallery/your-new-file.jpg",
  //   title: "作品標題",
  //   tag: "類別",
  //   year: "2026",
  //   desc: "一兩句話說明這件作品。"
  // }
];
