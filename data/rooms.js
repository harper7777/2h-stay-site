const rooms = [
  {
    id: "pink",
    name: "少女心",
    capacity: "2人房",
    summary: "柔和色調與溫暖採光",
    description: "適合雙人旅行、情侶入住或安靜休息。",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
    bookingUrl: "booking.html?room=pink"
  },
  {
    id: "green",
    name: "綠意軒",
    capacity: "4人房",
    summary: "自然綠意與親子友善",
    description: "適合家庭、小團體入住，空間舒適安定。",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop",
    bookingUrl: "booking.html?room=green"
  },
  {
    id: "blue",
    name: "蔚藍海",
    capacity: "4人房",
    summary: "清爽明亮的旅行空間",
    description: "清爽藍色調搭配寬敞配置，適合朋友同行或家庭輕旅行。",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop",
    bookingUrl: "booking.html?room=blue"
  },
  {
    id: "wood",
    name: "木の屋",
    capacity: "4人房",
    summary: "沉穩木質與安靜氛圍",
    description: "以木質調為核心，帶有沉穩溫度，適合想要安靜休息的旅人。",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop",
    bookingUrl: "booking.html?room=wood"
  },
  {
    id: "forest-light",
    name: "林の屋",
    capacity: "4人房",
    summary: "自然光與林間感受",
    description: "房間氛圍接近自然林景，適合家庭或朋友一起慢下來。",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1000&auto=format&fit=crop",
    bookingUrl: "booking.html?room=forest-light"
  },
  {
    id: "forest",
    name: "森の屋",
    capacity: "6人房",
    summary: "多人入住與團體旅行",
    description: "適合多人入住，空間感更完整，適合家庭聚會或朋友旅行。",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop",
    bookingUrl: "booking.html?room=forest"
  }
];

const roomPackages = [
  {
    id: "group-10",
    name: "10人房",
    composition: "少女心 + 綠意軒 + 蔚藍海",
    bookingUrl: "booking.html?room=group-10"
  },
  {
    id: "group-14",
    name: "14人房",
    composition: "木の屋 + 林の屋 + 森の屋",
    bookingUrl: "booking.html?room=group-14"
  },
  {
    id: "group-24",
    name: "24人房",
    composition: "少女心 + 綠意軒 + 蔚藍海 + 木の屋 + 林の屋 + 森の屋",
    bookingUrl: "booking.html?room=group-24"
  }
];
