// variableds
const BODY = document.getElementById("main-body");
const LANDING_PAGE = document.querySelector(".landing-page");
const START_BTN = document.querySelector(".start-btn");
const LAYOUT_PAGE = document.querySelector(".layout");
const LAYOUT_CHOICE_IMG = document.querySelector(".layout__headerImg");
const INFO_BTNS = document.querySelectorAll(".info-btn");
const API_BTNS = document.querySelectorAll(".api-btn");
const HOME_BTNS = document.querySelectorAll(".home-btn");
const NEXT_BTN = document.querySelector(".layout__next");
const PREV_BTN = document.querySelector(".layout__prev");
const DOSE_BTNS = document.querySelectorAll(".nav__dose");
const PREPARATION_BTNS = document.querySelectorAll(".nav__preparation");
const ADMIN_BTNS = document.querySelectorAll(".nav__administration");
const STORAGE_BTNS = document.querySelectorAll(".nav__storage");
const WATCH_VIDEO_BTN = document.querySelector(".watch-btn__active");
const LAYOUT_NAV = document.querySelector(".layout__main-nav");
const IMG_PATH = "./images/";
const VIDEO_PATH = "./videos/"
const DOSE_PAGE = document.querySelector(".dose-page");
const PREPARATION_PAGE = document.querySelector(".preparation");
const ADMIN_PAGE = document.querySelector(".adminstration");
const ADMIN_PART1_PAGE = document.querySelector(".admin-p1");
const ADMIN_PART2_PAGE = document.querySelector(".admin__p2");
const STORAGE_PAGE = document.querySelector(".storage");
const STORAGE_MAIN_IMG = document.querySelector(".storage__mainImg");
const LAYOUT_HEADER_CONTAINER = document.querySelector(".layout__header--logo");
const HOME_DOSE_BTN = document.querySelector(".home__action--dose");
const HOME_PREPARATION_BTN = document.querySelector(
  ".home__action--preparation"
);
const HOME_ADMIN_BTN = document.querySelector(".home__action--adminstration");
const HOME_STORAGE_BTN = document.querySelector(".home__action--storage");
const HOME_PAGE = document.querySelector(".home");
const HOME_PREV_BTN = document.querySelector(".home__prev");
const HOME_NEXT_BTN = document.querySelector(".home__next");
const INFO_LAYER = document.querySelector(".api");
const API_CONTENT_CONTAINER = document.querySelector(".api__content");
const INFO_CONTENT_CONTAINER = document.querySelector(".info__content");
const VIDEO_PAGE = document.querySelector(".shared-popup");
const VIDEO_HEADER = document.querySelector(".video-header");
const VIDEO_HEADER_IMG = document.querySelector(".video-header__img");
const VIDEO_WRAPPER = document.getElementById("video");
const VIDEO_SRC = video.querySelector("source");
const PAGES = [LANDING_PAGE, LAYOUT_PAGE, HOME_PAGE];
const CLOSE_BTN = document.querySelector(".close-btn");
const SECTIONS_INFO = {
  dose: {
    headerImg: `${IMG_PATH}dose-header.svg`,
    isShowWatchVideoBtn: false,
    navImg: `${IMG_PATH}nav-dose-selected.svg`,
    section: DOSE_PAGE,
    hiddenSections: [PREPARATION_PAGE, ADMIN_PAGE, STORAGE_PAGE],
  },
  preparation: {
    headerImg: `${IMG_PATH}pre-header-blue.svg`,
    isShowWatchVideoBtn: true,
    navImg: `${IMG_PATH}nav-pre.svg`,
    section: PREPARATION_PAGE,
    hiddenSections: [DOSE_PAGE, ADMIN_PAGE, STORAGE_PAGE],
  },
  admin: {
    headerImg: `${IMG_PATH}admin-h1.svg`,
    isShowWatchVideoBtn: true,
    navImg: `${IMG_PATH}nav-admin.svg`,
    section: ADMIN_PAGE,
    hiddenSections: [DOSE_PAGE, PREPARATION_PAGE, STORAGE_PAGE],
    subSections: [
      {
        id: "part1",
        section: ADMIN_PART1_PAGE,
        headerImgClass: "header__logo--admin-p1",
        headerImg: `${IMG_PATH}admin-h1.svg`,
      },
      {
        id: "part2",
        section: ADMIN_PART2_PAGE,
        headerImgClass: "header__logo--admin-p2",
        headerImg: `${IMG_PATH}admin-p2-h.svg`,
      },
    ],
  },
  storgae: {
    headerImg: `${IMG_PATH}storage-blue-h.svg`,
    isShowWatchVideoBtn: true,
    navImg: `${IMG_PATH}nav-storage.svg`,
    section: STORAGE_PAGE,
    hiddenSections: [DOSE_PAGE, ADMIN_PAGE, PREPARATION_PAGE],
    subSections: [
      {
        id: "part1",
        imgSrc: `${IMG_PATH}storage-img1.svg`,
      },
      {
        id: "part2",
        imgSrc: `${IMG_PATH}storage-img2.svg`,
      },
    ],
  },
};

const pageMapper = {
  1: "dose",
  2: "preparation",
  3: "admin",
  4: "admin",
  5: "storgae",
  6: "storgae",
};

const VIDEO_MAPPER = {
  2: {
    videoSrc: `${VIDEO_PATH}chapter%202.mp4`,
    imgSrc: `${IMG_PATH}pre-header-white.svg`,
  },

  3: {
    videoSrc: `${VIDEO_PATH}chapter%203.mp4`,
    imgSrc: `${IMG_PATH}admin-white-header.svg`,
    additionalClass: "header__logo--admin",
  },

  4: {
    videoSrc: `${VIDEO_PATH}chapter%203.mp4`,
    imgSrc: `${IMG_PATH}admin-white-header.svg`,
    additionalClass: "header__logo--admin",
  },

  5: {
    videoSrc: `${VIDEO_PATH}chapter%201.mp4`,
    imgSrc: `${IMG_PATH}storage-white-h.svg`,
  },

  6: {
    videoSrc: `${VIDEO_PATH}chapter%201.mp4`,
    imgSrc: `${IMG_PATH}storage-white-h.svg`,
  },
};
let currentPage = 0;
let loadedCount = 0;
const imageUrls = [
  `${IMG_PATH}storage-img2.svg`,
  `${IMG_PATH}nav-storage.svg`,
  `${IMG_PATH}storage-blue-h.svg`,
  `${IMG_PATH}admin-p2-h.svg`,
  `${IMG_PATH}admin-h1.svg`,
  `${IMG_PATH}landing-top-logo.svg`,
  `${IMG_PATH}landing-header.svg`,
  `${IMG_PATH}landing-img-3.png`,
  `${IMG_PATH}landing-img-2.svg`,
  `${IMG_PATH}bottom-logo.svg`,
  `${IMG_PATH}start-btn.svg`,
  `${IMG_PATH}top-logo.svg`,
  `${IMG_PATH}info-btn.svg`,
  `${IMG_PATH}api-btn.svg`,
  `${IMG_PATH}home-btn.svg`,
  `${IMG_PATH}full.svg`,
  `${IMG_PATH}prev-white-btn.svg`,
  `${IMG_PATH}next-white-btn.svg`,
  `${IMG_PATH}dose-header.svg`,
  `${IMG_PATH}dose-img-fulll.svg`,
  `${IMG_PATH}pre-img-1.svg`,
  `${IMG_PATH}pre-img-2.svg`,
  `${IMG_PATH}admin-p1-img.svg`,
  `${IMG_PATH}admin-p2-img2.svg`,
  `${IMG_PATH}storge-header.svg`,
  `${IMG_PATH}storage-img1.svg`,
  `${IMG_PATH}prev-blue-btn.svg`,
  `${IMG_PATH}nav-dose-selected.svg`,
  `${IMG_PATH}next-blue-btn.svg`,
  `${IMG_PATH}watch-btn.svg`,
  `${IMG_PATH}pre-header-white.svg`,
  `${IMG_PATH}storage-white-h.svg`, // commented out in HTML
  `${IMG_PATH}admin-white-header.svg`, // commented out in HTML
  `${IMG_PATH}close-btn.svg`,
  `${IMG_PATH}home-top-logo.svg`,
  `${IMG_PATH}prev-disable-btn.svg`,
  `${IMG_PATH}nav-disable.svg`,
  `${IMG_PATH}watch-disable.svg`,
  `${IMG_PATH}top-logo-pop.svg`,
  `${IMG_PATH}pre-header-blue.svg`,
  `${IMG_PATH}landing-bg-01.png`,
  `${IMG_PATH}shared-bg-06.png`,
  `${IMG_PATH}blue-img-bg-15.png`,
];
