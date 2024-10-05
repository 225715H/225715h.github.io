document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("pre code").forEach(function (codeBlock) {
    const button = document.createElement("button");
    button.className = "copy-button";
    button.innerHTML = "Copy";

    const pre = codeBlock.parentNode;
    pre.parentNode.insertBefore(button, pre);

    button.addEventListener("click", function () {
      const text = codeBlock.innerText;
      navigator.clipboard.writeText(text).then(
        function () {
          button.innerHTML = "Copied!";
          setTimeout(function () {
            button.innerHTML = "Copy";
          }, 2000);
        },
        function (err) {
          console.error("Failed to copy text: ", err);
        }
      );
    });
  });
});
