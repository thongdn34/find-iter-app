const categories = [
  {
    id: "1",
    name: "Sửa máy in",
    type: "printer",
    tags: ["phần mềm", "phần cứng"],
    count: 147,
    image: require("../assets/icons/word.png")
  },
  {
    id: "2",
    name: "Sửa máy tính",
    type: "laptop",
    tags: ["phần mềm", "phần cứng"],
    count: 16,
    image: require("../assets/icons/excel.png")
  },
  {
    id: "3",
    name: "Sửa chữa mạng",
    type: "network",
    tags: ["phần mềm", "phần cứng"],
    count: 68,
    image: require("../assets/icons/photoshop.png")
  },
  {
    id: "4",
    name: "Thiết lập camera",
    type: "camera",
    tags: ["phần mềm", "full service"],
    count: 17,
    image: require("../assets/icons/browser.png")
  },
  {
    id: "5",
    name: "Kaspersky",
    type: "security",
    tags: ["phần mềm", "full service"],
    count: 47,
    image: require("../assets/icons/cloud.png")
  },
  {
    id: "6",
    name: "Adobe Lightroom",
    type: "editor",
    tags: ["phần mềm", "full service"],
    count: 47,
    image: require("../assets/icons/lightroom.png")
  }
];

const trips = [
  {
    id: 1,
    date: 'Hôm qua',
    score: 4.3,
    distance: '4.6 km',
    clientName: 'Pham Thanh Phuong',
    price: 500000,
  },
  {
    id: 2,
    date: '12-5-2019',
    score: 4.8,
    distance: '8.9 km',
    clientName: 'Nguyen Huu Nhan',
    price: 250000,
  },
];

const products = [
  {
    id: 1,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png")
];

const profile = {
  username: "react-ui-kit",
  location: "Europe",
  email: "contact@react-ui-kit.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

const historyRequest = [
  {
    name: "Đàm Nhất Thống",
    avatar: require("../assets/images/avatar.png"),
    start: 4.5,
    amount: "$1,500",
    date: Date.now(),
    isDone: true,
    comment: "This is a good ITer",
    items: [
      {
        name: "Monitor",
        amount: "$85"
      },
      {
        name: "Main CPU",
        amount: "$358.00"
      },
      {
        name: "RAM",
        amount: "$450.5"
      }
    ]
  },
  {
    name: "Đàm Nhất Thống",
    avatar: require("../assets/images/avatar.png"),
    start: 4.5,
    amount: "$1,500",
    date: Date.now(),
    isDone: true,
    comment: "This is a good ITer",
    items: [
      {
        name: "Monitor",
        amount: "$85"
      },
      {
        name: "Main CPU",
        amount: "$358.00"
      },
      {
        name: "RAM",
        amount: "$450.5"
      }
    ]
  },
  {
    name: "Đàm Nhất Thống",
    avatar: require("../assets/images/avatar.png"),
    start: 4.5,
    amount: "$1,500",
    date: Date.now(),
    isDone: true,
    comment: "This is a good ITer",
    items: [
      {
        name: "Monitor",
        amount: "$85"
      },
      {
        name: "Main CPU",
        amount: "$358.00"
      },
      {
        name: "RAM",
        amount: "$450.5"
      }
    ]
  },
  {
    name: "Đàm Nhất Thống",
    avatar: require("../assets/images/avatar.png"),
    start: 4.5,
    amount: "$1,500",
    date: Date.now(),
    isDone: true,
    comment: "This is a good ITer",
    items: [
      {
        name: "Monitor",
        amount: "$85"
      },
      {
        name: "Main CPU",
        amount: "$358.00"
      },
      {
        name: "RAM",
        amount: "$450.5"
      }
    ]
  },
  {
    name: "Đàm Nhất Thống",
    avatar: require("../assets/images/avatar.png"),
    start: 4.5,
    amount: "$1,500",
    date: Date.now(),
    isDone: true,
    comment: "This is a good ITer",
    items: [
      {
        name: "Monitor",
        amount: "$85"
      },
      {
        name: "Main CPU",
        amount: "$358.00"
      },
      {
        name: "RAM",
        amount: "$450.5"
      }
    ]
  },
  {
    name: "Đàm Nhất Thống",
    avatar: require("../assets/images/avatar.png"),
    start: 4.5,
    amount: "$1,500",
    date: Date.now(),
    isDone: true,
    comment: "This is a good ITer",
    items: [
      {
        name: "Monitor",
        amount: "$85"
      },
      {
        name: "Main CPU",
        amount: "$358.00"
      },
      {
        name: "RAM",
        amount: "$450.5"
      }
    ]
  },
  
];

export { categories, explore, products, profile, historyRequest, trips };
