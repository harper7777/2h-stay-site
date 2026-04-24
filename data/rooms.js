const commonPriceRules = [
  "定價：農曆春節期間、日月潭泳渡。",
  "假日：星期六、12/31、國定假日、連續假日及7、8月星期五。",
  "平日：星期日至星期五。"
];

const commonBenefits = [
  "附贈早餐",
  "免費停車",
  "免費 Wi-Fi",
  "迎賓紅茶與小茶點"
];

const commonFacilities = [
  "日立頂級變頻冷暖氣機",
  "Panasonic 49吋 4K 聯網電視",
  "中華電信 MOD",
  "冰箱",
  "吹風機",
  "#304 保溫壺",
  "梳妝台",
  "掛衣置物架",
  "行李架",
  "飯店級門鎖",
  "全區隔音氣密窗",
  "大面觀景窗",
  "TOTO 免治溫水洗淨馬桶",
  "全戶淨水軟水",
  "Panasonic 四合一浴室換氣暖風機",
  "浴室乾溼分離",
  "自動感應式垃圾桶",
  "恆溫花灑蓮蓬頭",
  "盥洗用品：毛巾、浴巾、洗髮乳、沐浴乳、洗手乳",
  "嬰兒澡盆",
  "洗澡椅",
  "紫外線殺菌",
  "酒精消毒"
];

const commonPublicFacilities = [
  "公共區域：義式全自動咖啡機",
  "冰溫熱飲水機",
  "電梯",
  "公共空間監視器維護安全",
  "瑜珈球",
  "滑板車",
  "數獨",
  "拼圖",
  "撲克牌",
  "小玩具",
  "雜誌",
  "書籍和繪本"
];

const rooms = [
  {
    id: "pink",
    name: "少女心",
    capacity: "2人房",
    summary: "柔和色調與溫暖採光",
    floor: "三樓",
    bed: "1張加大床，可加1張單人床",
    prices: {
      regular: "NT$4,500",
      holiday: "NT$3,500",
      weekday: "NT$2,800"
    },
    priceRules: commonPriceRules,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    detailUrl: "room-detail.html?id=pink",
    bookingUrl: "booking.html",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616594039964-3a5d8f0d1f91?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1600&auto=format&fit=crop"
    ],
    storyTitle: "柔和的光，留給慢下來的人",
    storySubtitle: "A quiet room for two",
    story: [
      "少女心適合兩個人的輕旅行，也適合一段想要安靜整理自己的時間。",
      "柔和色調、溫暖採光與簡潔配置，讓房間保留乾淨而安定的氣息。",
      "如果你的旅程不需要太多喧鬧，只需要一個能好好睡覺、好好說話、好好醒來的地方，這裡會是很合適的選擇。"
    ],
    roomDetails: [
      "1張加大床。",
      "可加1張單人床。",
      "加床為單人床，每床 NT$700。",
      "過年期間每加一床 NT$1,000。",
      ...commonBenefits
    ],
    facilities: [
      "加大床 6.2 × 6.2 冷凝膠床墊",
      ...commonFacilities,
      ...commonPublicFacilities
    ]
  },

  {
    id: "green",
    name: "綠意軒",
    capacity: "4人房",
    summary: "自然綠意與親子友善",
    floor: "三樓",
    bed: "2張標準雙人床",
    prices: {
      regular: "NT$6,000",
      holiday: "NT$4,600",
      weekday: "NT$3,600"
    },
    priceRules: commonPriceRules,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
    detailUrl: "room-detail.html?id=green",
    bookingUrl: "booking.html",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1600&auto=format&fit=crop"
    ],
    storyTitle: "讓自然靠近一點",
    storySubtitle: "A room with gentle green",
    story: [
      "綠意軒以自然感作為主要氛圍，適合家庭、小團體或朋友同行。",
      "房間保留明亮與舒適的基調，讓入住者不只是短暫停留，而是能在旅行中獲得穩定而放鬆的休息。",
      "它適合需要較大空間的人，也適合希望在民宿裡保留一點生活感的旅人。"
    ],
    roomDetails: [
      "2張標準雙人床。",
      ...commonBenefits
    ],
    facilities: [
      "2張標準雙人床",
      ...commonFacilities,
      ...commonPublicFacilities
    ]
  },

  {
    id: "blue",
    name: "蔚藍海",
    capacity: "4人房",
    summary: "清爽明亮的旅行空間",
    floor: "三樓",
    bed: "2張標準雙人床，可加1張單人床",
    prices: {
      regular: "NT$6,500",
      holiday: "NT$5,000",
      weekday: "NT$3,950"
    },
    priceRules: commonPriceRules,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
    detailUrl: "room-detail.html?id=blue",
    bookingUrl: "booking.html",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
    ],
    storyTitle: "清澈、明亮、適合一起出發",
    storySubtitle: "A bright stay for family and friends",
    story: [
      "蔚藍海適合朋友同行，也適合家庭安排短旅行。",
      "清爽色調讓房間有更明亮的視覺感，空間不顯沉重，適合白天外出、晚上回來好好休息的行程。",
      "旅行中真正重要的，不只是目的地，也包含一個能讓彼此舒服相處的房間。"
    ],
    roomDetails: [
      "2張標準雙人床。",
      "可加1張單人床，每床 NT$700。",
      "過年期間每加一床 NT$1,000。",
      ...commonBenefits
    ],
    facilities: [
      "2張標準雙人床",
      ...commonFacilities,
      ...commonPublicFacilities
    ]
  },

  {
    id: "wood",
    name: "木の屋",
    capacity: "4人房",
    summary: "沉穩木質與安靜氛圍",
    floor: "獨棟木屋",
    bed: "2張標準雙人床，可加1張單人床",
    prices: {
      regular: "NT$7,000",
      holiday: "NT$5,500",
      weekday: "NT$4,500"
    },
    priceRules: commonPriceRules,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    detailUrl: "room-detail.html?id=wood",
    bookingUrl: "booking.html",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop"
    ],
    storyTitle: "木質的溫度，讓身體先放鬆",
    storySubtitle: "Warm wood, calm stay",
    story: [
      "木の屋以木質調作為主要印象，適合想要安靜休息的旅人。",
      "房間氛圍較為沉穩，不追求強烈視覺，而是讓人慢慢感覺到安定。",
      "對於家庭或朋友同行來說，這是一個能夠容納談話、休息與重新整理步調的空間。"
    ],
    roomDetails: [
      "2張標準雙人床。",
      "可加1張單人床，每床 NT$700。",
      "過年期間每加一床 NT$1,000。",
      ...commonBenefits
    ],
    facilities: [
      "2張標準雙人床",
      ...commonFacilities,
      ...commonPublicFacilities
    ]
  },

  {
    id: "forest",
    name: "林の屋",
    capacity: "4人房",
    summary: "自然光與林間感受",
    floor: "獨棟木屋",
    bed: "2張標準雙人床，可加1張單人床",
    prices: {
      regular: "NT$7,000",
      holiday: "NT$5,500",
      weekday: "NT$4,500"
    },
    priceRules: commonPriceRules,
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop",
    detailUrl: "room-detail.html?id=forest",
    bookingUrl: "booking.html",
    gallery: [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop"
    ],
    storyTitle: "在房間裡留下森林的餘韻",
    storySubtitle: "A gentle forest-like atmosphere",
    story: [
      "林の屋適合想要靠近自然感的旅人。",
      "自然光、柔和色調與安靜配置，讓房間不只是住宿功能，而是一個能在旅途中沉澱的地方。",
      "如果你想讓旅行少一點奔波，多一點停留，這個房型會很適合。"
    ],
    roomDetails: [
      "2張標準雙人床。",
      "可加1張單人床，每床 NT$700。",
      "過年期間每加一床 NT$1,000。",
      ...commonBenefits
    ],
    facilities: [
      "2張標準雙人床",
      ...commonFacilities,
      ...commonPublicFacilities
    ]
  },

  {
    id: "woods",
    name: "森の屋",
    capacity: "6人房",
    summary: "多人入住與團體旅行",
    floor: "獨棟木屋",
    bed: "2張雙人床 + 2張單人床",
    prices: {
      regular: "NT$8,500",
      holiday: "NT$6,500",
      weekday: "NT$5,500"
    },
    priceRules: commonPriceRules,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    detailUrl: "room-detail.html?id=woods",
    bookingUrl: "booking.html",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1600&auto=format&fit=crop"
    ],
    storyTitle: "多人同行，也能保有舒服的距離",
    storySubtitle: "A larger room for shared travel",
    story: [
      "森の屋適合多人旅行、家庭聚會或朋友共同入住。",
      "空間感更完整，能容納更多行李、談話與共同活動，也保留休息時需要的安靜感。",
      "旅行有時不是一個人的移動，而是一群人共同留下的記憶。"
    ],
    roomDetails: [
      "2張雙人床 + 2張單人床。",
      ...commonBenefits
    ],
    facilities: [
      "2張標準雙人床",
      "2張單人床",
      ...commonFacilities,
      ...commonPublicFacilities
    ]
  }
];

const roomPackages = [
  {
    id: "group10",
    name: "10人包層",
    capacity: "10人房",
    summary: "少女心 + 綠意軒 + 蔚藍海",
    composition: "蔚藍海4人房 + 綠意軒4人房 + 少女心2人房",
    floor: "三樓，電梯直上，單獨出入口",
    bed: "依組合房型配置",
    prices: {
      regular: "NT$16,000",
      holiday: "NT$12,500",
      weekday: "NT$9,500"
    },
    priceRules: commonPriceRules,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    detailUrl: "room-detail.html?id=group10",
    bookingUrl: "booking.html",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop"
    ],
    storyTitle: "小型團體的剛好距離",
    storySubtitle: "For ten guests",
    story: [
      "10人包層由少女心、綠意軒與蔚藍海組合而成，適合小型家庭旅行或朋友同行。",
      "房間位於三樓，電梯直上，具有單獨出入口，不必經過主人居住空間。",
      "如果有聚會需求，可以提前告知，可提供餐廳作為聚會空間。"
    ],
    roomDetails: [
      "蔚藍海4人房可加1床。",
      "綠意軒4人房。",
      "少女心2人房為加大床，可加1床。",
      "標準住房人數10位，最多可住12位。",
      "加床為單人床，每床 NT$700。",
      "過年期間每加一床 NT$1,000。",
      "餐廳沒有廚具及排煙設備，因此不能煮食。",
      ...commonBenefits
    ],
    facilities: [
      ...commonFacilities,
      ...commonPublicFacilities
    ]
  },

  {
    id: "group14",
    name: "14人房",
    capacity: "14人房",
    summary: "木の屋 + 林の屋 + 森の屋",
    composition: "木の屋4人房 + 林の屋4人房 + 森の屋6人房",
    floor: "獨棟鋼構木屋",
    bed: "依組合房型配置",
    prices: {
      regular: "請洽詢",
      holiday: "請洽詢",
      weekday: "請洽詢"
    },
    priceRules: commonPriceRules,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    detailUrl: "room-detail.html?id=group14",
    bookingUrl: "booking.html",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop"
    ],
    storyTitle: "一樓空間的完整包容",
    storySubtitle: "For fourteen guests",
    story: [
      "14人房由木の屋、林の屋與森の屋三棟組成，適合家庭聚會與多人入住。",
      "標準入住14人，4人房各可加1張單人床，最多共16人。",
      "如果有聚會需求，可以提前告知，可提供獨棟木屋餐廳作為聚會空間。"
    ],
    roomDetails: [
      "木の屋4人房。",
      "林の屋4人房。",
      "森の屋6人房。",
      "標準入住14人，最多可住16人。",
      "4人房各可加1張單人床。",
      "餐廳沒有廚具及排煙設備，因此不能煮食。",
      "依房型人數入住。",
      "謝絕寵物、烤肉與煮食。",
      "22:30 後請緊閉門窗、降低音量，以免被投訴。",
      "為維護住客安全與安寧，園區大門有管控。",
      "訪客限公共區域，22:30 前離開。"
    ],
    facilities: [
      ...commonFacilities,
      ...commonPublicFacilities
    ]
  },

  {
    id: "group24",
    name: "24人房",
    capacity: "24人房",
    summary: "少女心 + 綠意軒 + 蔚藍海 + 木の屋 + 林の屋 + 森の屋",
    composition: "主棟 + 獨棟木屋全房型組合",
    floor: "全棟組合",
    bed: "依全棟房型配置",
    prices: {
      regular: "請洽詢",
      holiday: "請洽詢",
      weekday: "請洽詢"
    },
    priceRules: commonPriceRules,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop",
    detailUrl: "room-detail.html?id=group24",
    bookingUrl: "booking.html",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop"
    ],
    storyTitle: "把整段旅程留給同一群人",
    storySubtitle: "For twenty-four guests",
    story: [
      "24人房由主棟與獨棟木屋共同組成，適合大家庭旅行、朋友聚會或團體住宿。",
      "主棟包含蔚藍海、綠意軒與少女心；木屋包含木の屋、林の屋與森の屋。",
      "適合需要完整住宿空間，也希望保有聚會與休息品質的團體旅人。"
    ],
    roomDetails: [
      "木屋：木の屋4人房 + 林の屋4人房 + 森の屋6人房，標準入住14人，最多可住16人。",
      "主棟：蔚藍海4人房 + 綠意軒4人房 + 少女心2人房，標準入住10人，最多可住12人。",
      "如果有聚會需求，可以提前告知，可提供獨棟木屋餐廳作為聚會空間。",
      "餐廳沒有廚具及排煙設備，因此不能煮食。",
      "依房型人數入住。",
      "謝絕寵物、烤肉與煮食。",
      "22:30 後請緊閉門窗、降低音量，以免被投訴。",
      "為維護住客安全與安寧，園區大門有管控。",
      "訪客限公共區域，22:30 前離開。"
    ],
    facilities: [
      ...commonFacilities,
      ...commonPublicFacilities
    ]
  }
];