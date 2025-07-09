document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="/"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      // 排除新标签页或外部链接
      if (e.ctrlKey || e.metaKey || link.target === "_blank") return;
      e.preventDefault();

      // 调用 Loader.jsx 中暴露的函数
      if (typeof window.__showLoader === "function") {
        window.__showLoader();
      }

      // 延迟跳转以展示动画
      setTimeout(() => {
        window.location.href = link.href;
      }, 300);
    });
  });
});
