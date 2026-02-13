/* SS Sports – single-page products: categories → subcategories → items */
(function () {
  var DATA = window.PRODUCTS_DATA;
  var CONTAINER = document.getElementById('products-container');
  var CATEGORY_IDS = ['footwear', 'apparel', 'equipment', 'accessories'];
  var ICONS = { footwear: '⚽', apparel: '👕', equipment: '🏏', accessories: '🎒' };

  function getRoute() {
    var hash = (window.location.hash || '#').replace(/^#\/?/, '');
    var parts = hash ? hash.split('/') : [];
    return {
      category: parts[0] && DATA[parts[0]] ? parts[0] : null,
      sub: parts[1] && parts[0] && DATA[parts[0]] && DATA[parts[0]].subs[parts[1]] ? parts[1] : null
    };
  }

  function renderCategories() {
    var html = '<a href="index.html#products" class="category-items-back">← Back to categories</a>';
    html += '<h1>What We Offer</h1>';
    html += '<p class="products-intro">Click a category to see subcategories. Visit the store for prices.</p>';
    html += '<div class="product-grid">';
    CATEGORY_IDS.forEach(function (id) {
      var cat = DATA[id];
      html += '<a href="products.html#' + id + '" class="product-card product-card-link">';
      html += '<span class="product-icon">' + ICONS[id] + '</span>';
      html += '<h3>' + cat.name + '</h3>';
      html += '<p>View subcategories</p>';
      html += '<span class="product-card-cta">View →</span></a>';
    });
    html += '</div>';
    CONTAINER.innerHTML = html;
    document.title = 'Products | SS Sports Indore';
  }

  function renderSubcategories(catId) {
    var cat = DATA[catId];
    if (!cat) { renderCategories(); return; }
    var html = '<a href="products.html#" class="category-items-back">← Back to categories</a>';
    html += '<h1>' + cat.name + '</h1>';
    html += '<div class="items-grid">';
    Object.keys(cat.subs).forEach(function (slug) {
      var sub = cat.subs[slug];
      html += '<a href="products.html#' + catId + '/' + slug + '" class="item-card item-card-link">';
      html += '<span class="item-name">' + sub.name + '</span>';
      html += '<span class="item-hint">View 10 items →</span></a>';
    });
    html += '</div>';
    html += '<p class="category-items-note">Visit store or <a href="https://wa.me/917869188088">WhatsApp</a> for sizes & prices.</p>';
    CONTAINER.innerHTML = html;
    document.title = cat.name + ' | SS Sports Indore';
  }

  function renderItems(catId, subId) {
    var cat = DATA[catId];
    var sub = cat && cat.subs[subId];
    if (!sub) {
      if (cat) renderSubcategories(catId);
      else renderCategories();
      return;
    }
    var html = '<a href="products.html#' + catId + '" class="category-items-back">← Back to ' + cat.name + '</a>';
    html += '<h1>' + sub.name + '</h1>';
    html += '<div class="items-grid">';
    sub.items.forEach(function (name) {
      html += '<div class="item-card"><span class="item-name">' + name + '</span><span class="item-hint">Ask for price</span></div>';
    });
    html += '</div>';
    html += '<p class="category-items-note">Visit store or <a href="https://wa.me/917869188088">WhatsApp</a> for sizes & prices.</p>';
    CONTAINER.innerHTML = html;
    document.title = sub.name + ' | SS Sports Indore';
  }

  function render() {
    var route = getRoute();
    if (route.sub) renderItems(route.category, route.sub);
    else if (route.category) renderSubcategories(route.category);
    else renderCategories();
  }

  if (CONTAINER) {
    render();
    window.addEventListener('hashchange', render);
  }
})();
