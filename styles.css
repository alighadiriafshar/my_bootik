/* styles.css - ساده، مدرن و واکنش‌گرا */
/* فونت سیستم، راست‌چین */
:root{
  --bg:#f7f7f8;
  --card:#ffffff;
  --accent:#1f8ef1;
  --muted:#6b7280;
  --maxw:1100px;
  --gap:16px;
  --radius:12px;
  --shadow: 0 6px 18px rgba(16,24,40,0.06);
}

/* پایه */
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  background:var(--bg);
  color:#111827;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  line-height:1.45;
  direction:rtl;
}

/* ظرف‌بندی */
.container{
  width:calc(100% - 32px);
  max-width:var(--maxw);
  margin:0 auto;
  padding:24px 0;
}

/* هدر */
.site-header{
  background:linear-gradient(90deg,#fff 0%, #fbfdff 100%);
  border-bottom:1px solid #e6e9ee;
  position:sticky;
  top:0;
  z-index:50;
}
.header-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
}
.brand{
  margin:0;
  font-size:20px;
  letter-spacing:0.6px;
}
.search-cart{display:flex;gap:12px;align-items:center}
.search-cart input{
  padding:8px 12px;
  border-radius:10px;
  border:1px solid #e5e7eb;
  min-width:220px;
}
.cart-btn{
  border:0;
  background:transparent;
  font-size:16px;
  cursor:pointer;
  position:relative;
}
.cart-btn span{background:var(--accent);color:white;padding:2px 7px;border-radius:8px;margin-left:6px;font-size:12px}

/* Hero */
.hero{
  background:linear-gradient(180deg, rgba(31,142,241,0.08), transparent);
  border-radius:var(--radius);
  padding:20px;
  margin-bottom:18px;
  box-shadow:var(--shadow);
}

/* محصولات */
.section-title{margin:6px 0 12px;font-size:18px}
.products-grid{
  display:grid;
  grid-template-columns:repeat(1,1fr);
  gap:var(--gap);
}
.product-card{
  background:var(--card);
  border-radius:12px;
  padding:12px;
  box-shadow:var(--shadow);
  display:flex;
  gap:12px;
  align-items:center;
}
.product-thumb{
  width:120px;
  height:120px;
  border-radius:10px;
  background:#f1f5f9;
  flex:0 0 120px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:600;
  color:var(--muted);
}
.product-info{flex:1}
.product-title{margin:0 0 6px;font-size:16px}
.product-price{color:var(--accent);font-weight:700}
.product-actions{display:flex;flex-direction:column;gap:8px}
.btn{
  border:0;
  padding:9px 12px;
  border-radius:10px;
  cursor:pointer;
  background:#eef2ff;
}
.btn-primary{
  background:var(--accent);
  color:white;
}

/* Cart drawer */
.cart-drawer{
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  width:320px;
  max-width:90%;
  background:white;
  box-shadow:-12px 0 30px rgba(2,6,23,0.12);
  transform:translateX(110%);
  transition:transform .28s ease;
  z-index:60;
  display:flex;
  flex-direction:column;
  padding:12px;
  gap:12px;
}
.cart-drawer.open{transform:translateX(0)}
.cart-header{display:flex;align-items:center;justify-content:space-between}
.cart-items{flex:1;overflow:auto;padding:8px}
.cart-item{display:flex;gap:10px;align-items:center;padding:8px;border-radius:10px}
.cart-item .thumb{width:56px;height:56px;background:#f3f4f6;border-radius:8px;display:flex;align-items:center;justify-content:center}
.cart-footer{border-top:1px solid #eef2f6;padding-top:10px;display:flex;flex-direction:column;gap:10px}

/* Overlay */
.overlay{
  position:fixed;inset:0;background:rgba(2,6,23,0.4);z-index:55;
}

/* Footer */
.site-footer{padding:20px 0;text-align:center;color:var(--muted);font-size:14px;border-top:1px solid #eef2f6;margin-top:24px}

/* پاسخگو */
@media(min-width:700px){
  .products-grid{grid-template-columns:repeat(2,1fr)}
}
@media(min-width:1000px){
  .products-grid{grid-template-columns:repeat(3,1fr)}
  .product-card{flex-direction:column;align-items:flex-start}
  .product-thumb{width:100%;height:180px;flex:unset}
  .product-actions{flex-direction:row;width:100%;justify-content:space-between;align-items:center}
}
