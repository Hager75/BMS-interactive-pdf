// show loader and hide it
function toggleLoader(show) {
  show ? BODY.classList.remove("loaded") : BODY.classList.add("loaded");
}

function gotoNextPage() {
  if (currentPage < 6) {
    currentPage++;
    goToSelectedSection(SECTIONS_INFO[pageMapper[currentPage]]);
  }
}

function gotoPrevPage() {
  if (currentPage > 1) {
    currentPage--;
    goToSelectedSection(SECTIONS_INFO[pageMapper[currentPage]]);
  } else if (currentPage === 1) {
    goHome();
  }
}

function startPdf() {
  LANDING_PAGE.style.display = "none";
  HOME_PAGE.style.display = "flex";
}

function goHome() {
  HOME_PAGE.style.display = "flex";
  LAYOUT_PAGE.style.display = "none";
  INFO_LAYER.style.display = "none";
  currentPage = 0;
}

function showAdminSubSection(subSection, showIndex, hideIndex) {
  LAYOUT_HEADER_CONTAINER.style.display = "none";
  if (subSection[showIndex].headerImg.includes("p2")) {
    LAYOUT_HEADER_ADMIN_2_CONTAINER.style.display = "block";
    LAYOUT_HEADER_ADMIN_1_CONTAINER.style.display = "none";
  } else {
    LAYOUT_HEADER_ADMIN_2_CONTAINER.style.display = "none";
    LAYOUT_HEADER_ADMIN_1_CONTAINER.style.display = "block";
  }
  subSection[showIndex].section.style.display = "flex";
  subSection[hideIndex].section.style.display = "none";
}

function showStorageSubSection(subSection, selectedIndex) {
  STORAGE_MAIN_IMG.src = subSection[selectedIndex].imgSrc;
}

function closeVideo() {
  VIDEO_PAGE.style.display = "none";
  VIDEO_WRAPPER.pause();
  VIDEO_WRAPPER.currentTime = 0;
}

function goToSelectedSection(sectionInfo) {
  LAYOUT_CHOICE_IMG.src = sectionInfo.headerImg;
  LAYOUT_NAV.src = sectionInfo.navImg;
  closeVideo();
  INFO_LAYER.style.display = "none";
  WATCH_VIDEO_BTN.style.display = sectionInfo.isShowWatchVideoBtn
    ? "block"
    : "none";
  LAYOUT_HEADER_ADMIN_2_CONTAINER.style.display = "none";
  LAYOUT_HEADER_ADMIN_1_CONTAINER.style.display = "none";
  LAYOUT_HEADER_CONTAINER.style.display = "block";  
  VIDEO_HEADER.classList.remove('header__logo--admin');

  if (sectionInfo.subSections && !sectionInfo.subSections[0].imgSrc) {
    if (currentPage === 4) {
      showAdminSubSection(sectionInfo.subSections, 1, 0);
    } else {
      showAdminSubSection(sectionInfo.subSections, 0, 1);
    }
  } else if (sectionInfo.subSections && sectionInfo.subSections[0].imgSrc) {
    if (currentPage === 6) {
      showStorageSubSection(sectionInfo.subSections, 1);
    } else {
      showStorageSubSection(sectionInfo.subSections, 0);
    }
  }
  sectionInfo.section.style.display = "flex";
  sectionInfo.hiddenSections.map((section) => {
    section.style.display = "none";
  });
}

function showHidePage(hiddenPage = HOME_PAGE, shownPage = LAYOUT_PAGE) {
  hiddenPage.style.display = "none";
  shownPage.style.display = "flex";
  INFO_LAYER.style.display = "none";
}

function showInfoSection(shownSection, hiddenSection) {
  INFO_LAYER.style.display = "flex";
  PAGES.forEach((page) => {
    page.style.display = "none";
  });
  shownSection.style.display = "block";
  hiddenSection.style.display = "none";
}

START_BTN.addEventListener("click", startPdf);
NEXT_BTN.addEventListener("click", gotoNextPage);
PREV_BTN.addEventListener("click", gotoPrevPage);
DOSE_BTNS.forEach((btn) => {
  btn.addEventListener("click", () => {
    LAYOUT_PAGE.style.display = "flex";
    goToSelectedSection(SECTIONS_INFO.dose);
    currentPage = 1;
  });
});

PREPARATION_BTNS.forEach((btn) => {
  btn.addEventListener("click", () => {
    LAYOUT_PAGE.style.display = "flex";
    goToSelectedSection(SECTIONS_INFO.preparation);
    currentPage = 2;
  });
});

ADMIN_BTNS.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentPage !== 4) {
      LAYOUT_PAGE.style.display = "flex";
      goToSelectedSection(SECTIONS_INFO.admin);
      currentPage = 3;
    }
  });
});

STORAGE_BTNS.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentPage !== 6) {
      LAYOUT_PAGE.style.display = "flex";
      goToSelectedSection(SECTIONS_INFO.storgae);
      currentPage = 5;
    }
  });
});

function showVideoPage() {
  VIDEO_SRC.src = VIDEO_MAPPER[currentPage].videoSrc;
  VIDEO_WRAPPER.load();
  VIDEO_WRAPPER.play();
  if (VIDEO_MAPPER[currentPage].additionalClass) {
    VIDEO_HEADER.classList.add(VIDEO_MAPPER[currentPage].additionalClass);
  }
  VIDEO_HEADER_IMG.src = VIDEO_MAPPER[currentPage].imgSrc;
  LAYOUT_PAGE.style.display = "none";
  VIDEO_PAGE.style.display = "flex";
}

CLOSE_BTN.addEventListener("click", () => {
  LAYOUT_PAGE.style.display = "flex";
  closeVideo();
});

WATCH_VIDEO_BTN.addEventListener("click", showVideoPage);

INFO_BTNS.forEach((btn) => {
  btn.addEventListener("click", () => {
    showInfoSection(INFO_CONTENT_CONTAINER, API_CONTENT_CONTAINER);
  });
});

API_BTNS.forEach((btn) => {
  btn.addEventListener("click", () => {
    showInfoSection(API_CONTENT_CONTAINER, INFO_CONTENT_CONTAINER);
  });
});

HOME_BTNS.forEach((btn) => {
  btn.addEventListener("click", goHome);
});

HOME_DOSE_BTN.addEventListener("click", () => {
  showHidePage();
  goToSelectedSection(SECTIONS_INFO.dose);
  currentPage = 1;
});

HOME_PREPARATION_BTN.addEventListener("click", () => {
  showHidePage();
  goToSelectedSection(SECTIONS_INFO.preparation);
  currentPage = 2;
});

HOME_ADMIN_BTN.addEventListener("click", () => {
  showHidePage();
  goToSelectedSection(SECTIONS_INFO.admin);
  currentPage = 3;
});

HOME_STORAGE_BTN.addEventListener("click", () => {
  showHidePage();
  goToSelectedSection(SECTIONS_INFO.storgae);
  currentPage = 5;
});

HOME_PREV_BTN.addEventListener("click", () => {
  showHidePage(HOME_PAGE, LANDING_PAGE);
});

HOME_NEXT_BTN.addEventListener("click", () => {
  showHidePage();
  goToSelectedSection(SECTIONS_INFO.dose);
  currentPage = 1;
});

document.addEventListener("DOMContentLoaded", () => {
  toggleLoader(true);
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
    img.onload = img.onerror = () => {
      loadedCount++;
      if (loadedCount === imageUrls.length) {
        toggleLoader(false);
      }
    };
  });
});
