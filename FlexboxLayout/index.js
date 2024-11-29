document.addEventListener("DOMContentLoaded", function () {
   const footer = document.querySelector("#footer");

   if (!footer)
   {
       return;
   }

   window.addEventListener("resize", function () {
       footer.innerHTML = `Height: ${window.innerHeight}; Width: ${window.innerWidth};`;
   });
});