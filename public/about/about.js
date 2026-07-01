let sections = document.querySelectorAll("section");

const timeline = document.querySelector(".timeline"); // the full timeline wrapper
let timelineItems = document.querySelectorAll(".timeline .container");

let line = document.querySelector(".timeline-line");

let isLineComplete = false;

window.onscroll = () => {
  let scrollDistance = window.scrollY;
  //   sections.forEach((sec) => {
  //     let secDistance = sec.offsetTop;
  //     console.log("secDistance" + secDistance);
  //     console.log("scrollDistance" + scrollDistance);

  //     if (scrollDistance > secDistance) {
  //       sec.classList.add("show-animate");
  //     }
  //   });

  let workHistory = document.querySelector(".work-history");
  let whPostion = workHistory.offsetTop;

  timelineItems.forEach((div) => {
    let divDistance = div.offsetTop + whPostion / 2;
    if (scrollDistance > divDistance) {
      div.classList.add("show-animate");
    }
  });
};

function updateTimeline() {
  const rect = timeline.getBoundingClientRect();

  const viewport = window.innerHeight;
  let progress;
  if (!isLineComplete) {
    progress = (viewport * 0.8 - rect.top) / rect.height;

    progress = Math.max(0, Math.min(progress, 1));
  } else {
    return;
  }

  if (progress > 0.97) {
    isLineComplete = true;
  } else {
    isLineComplete = false;
  }

  //line is not full
  line.style.height = `${progress * 100}%`;
}

window.addEventListener("scroll", updateTimeline);
updateTimeline();
