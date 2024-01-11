const toggleButton = document.querySelector(".Main-Button");
const notifications = document.querySelectorAll(".Notification");
const dots = document.querySelectorAll(".Dot");

toggleButton.addEventListener("click", () => {
  notifications.forEach((notification) => {
    const isVisible = notification.getAttribute("data-visible");
    if (isVisible === "true") {
      notification.setAttribute("data-visible", false);
      toggleButton.setAttribute("data-control",false)
    } else {
        notification.setAttribute("data-visible", true);
        toggleButton.setAttribute("data-control",true)     }
  });

  dots.forEach((dot)=>{
    const isDotVisible = dot.getAttribute("data-state");
    if(isDotVisible === 'true'){
        dot.setAttribute('data-state', false)
    }else {
        dot.setAttribute('data-state', true)
    }
  })
});
