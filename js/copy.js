document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll("pre");

  blocks.forEach(function (block) {
    const button = document.createElement("button");
    button.innerText = "copy";
    button.className = "copy-button";

    // コピー機能の追加
    button.addEventListener("click", function () {
      const code = block.textContent.trim();
      navigator.clipboard.writeText(code).then(
        function () {
          button.innerText = "copied!";
          setTimeout(() => {
            button.innerText = "copy";
          }, 3000); // 3秒後に "copy" に戻す
        },
        function (err) {
          console.error("コピーに失敗しました: ", err);
        }
      );
    });

    // ラッパー要素を作成
    const wrapper = document.createElement("div");
    wrapper.className = "code-wrapper"; // 外側のラッパー
    const preWrapper = document.createElement("div");
    preWrapper.className = "pre-wrapper"; // pre を包むラッパー

    // DOMの入れ替え
    block.parentNode.replaceChild(wrapper, block);
    wrapper.appendChild(button);
    wrapper.appendChild(preWrapper);
    preWrapper.appendChild(block);
  });
});
