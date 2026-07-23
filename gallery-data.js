/*
  ARTWORK LIST
  ============
  之後要新增作品時，只要在下面的陣列裡「複製一組 { }、貼上、改內容」即可。

  你「不需要」自己做縮圖或壓縮圖片，直接把手機拍的原圖 / 設計軟體匯出的原圖
  上傳到 assets/img/gallery/ 就好。網頁會自動用免費的線上服務 (wsrv.nl)
  即時把圖片縮小、壓縮成適合網頁的大小，第一次載入後還會全球快取，
  之後訪客看到的都是已經處理過的快速版本。

  欄位說明：
  - src:   原圖路徑（放在 assets/img/gallery/ 資料夾，檔名不要有空格）
  - title: 作品標題
  - tag:   作品類別，例如「海報設計」「角色插畫」「品牌視覺」
  - year:  年份
  - desc:  一兩句話的簡短說明（會顯示在全部作品頁的圖說）

  新增作品的步驟（只有兩步）：
  1. 把新圖片原檔上傳到 assets/img/gallery/ 資料夾
  2. 在下面陣列最後面，新增一組物件（記得前一組結尾要加逗號 ,），Commit
*/

const artworks = [
  {
    src: "assets/img/gallery/tsuilu_wormhole_6th_poster.JPG",
    title: "“Wormhole” 6th White Terror Workshop Main Visual Poster",
    tag: "Poster",
    year: "2025",
    desc: "Created the main visual poster for the 6th “Wormhole: White Terror Workshop” organized by the Tsuilu – Association for Public Issue Promotion, using island imagery to connect historical scenes of the White Terror."
  },
  {
    src: "assets/img/gallery/tsuilu_wormhole_5th_poster.JPG",
    title: "“Wormhole” 5th White Terror Workshop Main Visual Poster",
    tag: "Poster",
    year: "2024",
    desc: "Designed the key visual poster for the 5th “Wormhole: White Terror Workshop” organized by Tsuilu – Association for Public Issue Promotion, drawing inspiration from the imagery of Taiwan's farmers' movements."
  },
  {
    src: "assets/img/gallery/farmer.JPG",
    title: "Character Profile | Tenant Farmer Zhong Dahu 鐘大虎",
    tag: "Prop",
    year: "2022",
    desc: "Character card design for the Memory in a Second Hue workshop, featuring a tenant farmer during Taiwan's Japanese colonial Shōwa era."
  },
  {
    src: "assets/img/gallery/police.JPG",
    title: "Character Profile | Police Officer Junryo Oyama 大山順良",
    tag: "Prop",
    year: "2022",
    desc: "Character card design for the Memory in a Second Hue workshop, featuring a police officer during Taiwan's Japanese colonial Shōwa era."
  },
  {
    src: "assets/img/gallery/landlord.JPG",
    title: "Character Profile | Landlord Liao Wenrong 廖文榮",
    tag: "Prop",
    year: "2022",
    desc: "Character card design for the Memory in a Second Hue workshop, featuring a landlord during Taiwan's Japanese colonial Shōwa era."
  },
  {
    src: "assets/img/gallery/draw_1.PNG",
    title: "貪．嗔．痴   Greed · Hatred · Delusion",
    tag: "Illustration",
    year: "2025",
    desc: ""
  },  
  {
    src: "assets/img/gallery/draw_2.PNG",
    title: "(•_•)",
    tag: "Illustration",
    year: "2025",
    desc: ""
  },  
  {
    src: "assets/img/gallery/draw_3.PNG",
    title: "天乾物燥．即刻引爆",
    tag: "Illustration",
    year: "2025",
    desc: ""
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

/*
  自動縮圖工具函式 — 不用改這裡
  ------------------------------
  把 artworks 裡的原圖路徑，轉成 wsrv.nl 即時縮圖服務的網址。
  width / quality 可以依照要顯示的地方調整（格狀預覽用小尺寸，放大看用大尺寸）。
*/
function resizedImg(path, width, quality) {
  var absoluteUrl = window.location.origin + "/" + path.replace(/^\//, "");
  var noProtocol = absoluteUrl.replace(/^https?:\/\//, "");
  return (
    "https://wsrv.nl/?url=" +
    encodeURIComponent(noProtocol) +
    "&w=" + width +
    "&q=" + (quality || 75) +
    "&output=webp"
  );
}
