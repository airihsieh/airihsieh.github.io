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
    src: "assets/img/gallery/tsuilu-wormhole-poster.jpg",
    title: "《蟲洞》白色恐怖工作坊 主視覺海報",
    tag: "海報設計",
    year: "2026",
    desc: "為淬慮 Tsuilu 公共議題促進協會第六屆「蟲洞．白色恐怖工作坊」繪製的主視覺海報，以島嶼意象串聯白色恐怖歷史場景。"
  },
  {
    src: "assets/img/gallery/zhong-dahu-character.jpg",
    title: "角色設定｜佃農 鐘大虎",
    tag: "角色插畫",
    year: "2026",
    desc: "《蟲洞》工作坊角色卡設定，描繪日殖昭和時期一名佃農的生命史，作為工作坊角色扮演素材之一。"
  }

  // 之後新增作品，往這裡繼續加，例如：
  // ,{
  //   src: "assets/img/gallery/your-new-file.jpg",
  //   title: "作品標題",
  //   tag: "類別",
  //   year: "2026",
  //   desc: "一兩句話說明這件作品。"
  // }
];
