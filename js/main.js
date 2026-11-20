(function () {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');

  // 移动端菜单开关
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // 点击导航项后自动收起
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 页脚年份
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 滚动出现动画
  var revealEls = document.querySelectorAll(
    '.about-card, .appoint-card, .focus-card'
  );
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('reveal-in');
    });
  }
})();
