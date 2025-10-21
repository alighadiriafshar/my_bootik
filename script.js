// script.js - منطق ساده برای اضافه کردن به سبد خرید و جستجو
const PRODUCTS = [
  {id:1,name:'تی‌شرت سفید مینیمال',price:290000,sku:'TSH001',color:'سفید',size:['S','M','L']},
  {id:2,name:'هودی کِش بافت خاکی',price:540000,sku:'HOD002',color:'خاکی',size:['M','L']},
  {id:3,name:'شلوار جین کلاسیک',price:620000,sku:'JIN003',color:'آبی',size:['M','L','XL']},
  {id:4,name:'کاپشن بارانی سبک',price:810000,sku:'CAP004',color:'مشکی',size:['M','L']},
  {id:5,name:'پیراهن چهارخانه',price:410000,sku:'SHI005',color:'قرمز',size:['S','M','L']}
];

const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

// -- Utilities
function formatPrice(n){ return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

// -- Render products
function renderProducts(list){
  const container = $('#products');
  container.innerHTML = '';
  list.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-thumb" aria-hidden="true">${p.sku}</div>
      <div class="product-info">
        <h4 class="product-title">${p.name}</h4>
        <div class="product-price">${formatPrice(p.price)} تومان</div>
        <div class="product-meta" style="color: #6b7280; font-size:13px; margin-top:6px">رنگ: ${p.color} • کد کالا: ${p.sku}</div>
      </div>
      <div class="product-actions">
        <button class="btn add" data-id="${p.id}">افزودن به سبد</button>
        <button class="btn" data-id="${p.id}" aria-label="جزئیات">جزئیات</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// -- Cart logic (in-memory)
let cart = [];
function addToCart(id){
  const prod = PRODUCTS.find(p=>p.id===id);
  if(!prod) return;
  const item = cart.find(i=>i.id===id);
  if(item) item.qty++;
  else cart.push({id:prod.id,name:prod.name,price:prod.price,qty:1});
  updateCartUI();
}
function removeFromCart(id){
  cart = cart.filter(i=>i.id!==id);
  updateCartUI();
}
function changeQty(id, delta){
  const it = cart.find(i=>i.id===id);
  if(!it) return;
  it.qty += delta;
  if(it.qty < 1) removeFromCart(id);
  updateCartUI();
}
function cartTotal(){ return cart.reduce((s,i)=>s + i.price*i.qty, 0); }

// -- UI updates
function updateCartUI(){
  $('#cart-count').textContent = cart.reduce((s,i)=>s+i.qty,0);
  $('#cart-total').textContent = formatPrice(cartTotal());
  const items = $('#cart-items');
  items.innerHTML = '';
  if(cart.length===0){
    items.innerHTML = '<p style="color:#6b7280;padding:8px">سبد خرید خالی است.</p>';
    return;
  }
  cart.forEach(i=>{
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <div class="thumb">${i.name.split(' ')[0]}</div>
      <div style="flex:1">
        <div style="font-weight:600">${i.name}</div>
        <div style="color:#6b7280;font-size:13px">${formatPrice(i.price)} تومان</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;align-items:center">
        <div style="display:flex;gap:6px">
          <button class="btn qty" data-op="dec" data-id="${i.id}">−</button>
          <div style="min-width:28px;text-align:center">${i.qty}</div>
          <button class="btn qty" data-op="inc" data-id="${i.id}">+</button>
        </div>
        <button class="btn" style="margin-top:6px" data-id="${i.id}" aria-label="حذف">حذف</button>
      </div>
    `;
    items.appendChild(el);
  });
}

// -- Events
function setupEvents(){
  // delegate add buttons
  document.addEventListener('click', e=>{
    const add = e.target.closest('.add');
    if(add){ addToCart(Number(add.dataset.id)); return; }
    const cartBtn = e.target.closest('#cart-btn');
    if(cartBtn){ openCart(); return; }
    const close = e.target.closest('#close-cart');
    if(close){ closeCart(); return; }
    const overlay = e.target.closest('#overlay');
    if(overlay){ closeCart(); return; }
    const qtyBtn = e.target.closest('.qty');
    if(qtyBtn){
      const id = Number(qtyBtn.dataset.id);
      const op = qtyBtn.dataset.op;
      changeQty(id, op==='inc'?1:-1);
      return;
    }
    const del = e.target.closest('.cart-item button[aria-label="حذف"]');
    if(del){ removeFromCart(Number(del.dataset.id)); return; }
  });

  // search
  $('#search').addEventListener('input', e=>{
    const q = e.target.value.trim().toLowerCase();
    if(!q) return renderProducts(PRODUCTS);
    renderProducts(PRODUCTS.filter(p=>p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)));
  });

  // checkout
  $('#checkout').addEventListener('click', ()=>{
    if(cart.length===0){ alert('سبد خرید خالی است'); return; }
    // For demo: clear cart and show thank you
    alert('سفارشت ثبت شد — این مثال در حالت دموی محلی است.');
    cart = [];
    updateCartUI();
    closeCart();
  });
}

// -- Drawer
function openCart(){
  $('#cart-drawer').classList.add('open');
  $('#cart-drawer').setAttribute('aria-hidden','false');
  $('#overlay').hidden = false;
}
function closeCart(){
  $('#cart-drawer').classList.remove('open');
  $('#cart-drawer').setAttribute('aria-hidden','true');
  $('#overlay').hidden = true;
}

// -- Init
renderProducts(PRODUCTS);
setupEvents();
updateCartUI();
