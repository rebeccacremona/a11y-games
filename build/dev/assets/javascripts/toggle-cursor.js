// html {
//   pointer-events: none;
//   cursor: none;
// }
document.documentElement.style.pointerEvents = "none";
document.documentElement.style.cursor = "none";

// Toggle the cursor to avoid driving users mad
document.getElementById('toggle-cursor').addEventListener('click', function(){
  document.documentElement.style.pointerEvents = "unset";
  document.documentElement.style.cursor = "unset";
})
