document.querySelectorAll(".doctor-card, .patient-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 5;
    const rotateX = ((midY - y) / midY) * 5;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(800px) translateY(0) rotateX(0) rotateY(0) scale(1)";
  });
});

const title = document.querySelector(".section-title");
title.addEventListener("mousemove", (e) => {
  const rect = title.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const midX = rect.width / 2;
  const rotateY = ((x - midX) / midX) * 3;
  title.style.transform = `perspective(600px) rotateY(${rotateY}deg)`;
});
title.addEventListener("mouseleave", () => {
  title.style.transform = "";
});
