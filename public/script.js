const scroller = scrollama();
const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");

let currentDirection = "down";

scroller
  .setup({
    step: ".step",
    offset: 0.5,
    progress: true,
    debug: false
  })

  .onStepEnter(({ element }) => {
    const bgIndex = element.getAttribute("data-bg");

    if (bgIndex === "1") {
      bg1.style.opacity = 1;
      bg2.style.opacity = 0;
    } else if (bgIndex === "2") {
      bg1.style.opacity = 0;
      bg2.style.opacity = 1;
    }
  })

  .onStepProgress(({ element, progress }) => {
    const bgIndex = element.getAttribute("data-bg");
    const bg = document.querySelector(`.bg${bgIndex}`);

    // Definir escala basada en dirección
    let scale;
    if (currentDirection === "down") {
      scale = 1 + progress * 0.2; // zoom in
    } else {
      scale = 1.1 - progress * 0.2; // zoom out
    }

    bg.style.transform = `scale(${scale})`;
  });
