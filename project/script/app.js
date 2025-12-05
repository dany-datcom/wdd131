// ==============================================
// DAMA SHOP - VERSIÓN 100% FUNCIONAL
// ==============================================

// ==============================================
// 1. DATOS DE PRODUCTOS
// ==============================================

const productsData = [
    {
        id: 1,
        name: "Red Blouse",
        price: 25.99,
        category: "blouses",
        image: "images/products/blouse1.webp",
        description: "Fresh red blouse",
        featured: true,
        color: "Red"
    },
    {
        id: 2,
        name: "Black and White Blouse",
        price: 30.99,
        category: "blouses",
        image: "images/products/blouse2.webp",
        description: "Elegant natural blouse",
        featured: true,
        color: "White"
    },
    {
        id: 3,
        name: "Gray Comfort Blouse",
        price: 25.99,
        category: "blouses",
        image: "images/products/blouse3.webp",
        description: "Warm Blouse",
        featured: true,
        color: "Gray"
    },
    {
        id: 4,
        name: "Pink Blouse",
        price: 30.99,
        category: "blouses",
        image: "images/products/blouse4.webp",
        description: "Fresh blouse",
        featured: true,
        color: "Pink"
    },
    {
        id: 5,
        name: "Elegant Blouse",
        price: 28.99,
        category: "blouses",
        image: "images/products/blouse5.webp",
        description: "Elegant blouse",
        featured: true,
        color: "White"
    },
    {
        id: 6,
        name: "Blue Blouse",
        price: 27.99,
        category: "blouses",
        image: "images/products/blouse6.webp",
        description: "Blue Fresh Blouse",
        featured: true,
        color: "Blue"
    },
    {
        id: 7,
        name: "Green Pijama",
        price: 19.99,
        category: "pijamas",
        image: "images/products/pijama1.webp",
        description: "Comfortable pijama set",
        featured: true,
        color: "Green"
    },
    {
        id: 8,
        name: "Brown Pijama",
        price: 19.99,
        category: "pijamas",
        image: "images/products/pijama2.webp",
        description: "Comfortable pijama set",
        featured: true,
        color: "Brown"
    },
    {
        id: 9,
        name: "Light Blue Pijama",
        price: 19.99,
        category: "pijamas",
        image: "images/products/pijama3.webp",
        description: "Comfortable pijama set",
        featured: true,
        color: "Blue"
    },
    {
        id: 10,
        name: "White Pants",
        price: 45.99,
        category: "pants",
        image: "images/products/pant.webp",
        description: "Elegant white pants",
        featured: false,
        color: "White"
    },
    {
        id: 11,
        name: "Beige Coat",
        price: 28.99,
        category: "coat",
        image: "images/products/coat1.webp",
        description: "Warm Coat",
        featured: false,
        color: "Beige"
    },
    {
        id: 12,
        name: "Sport Set",
        price: 35.99,
        category: "sport",
        image: "images/products/sportset.webp",
        description: "Fresh set to gym",
        featured: false,
        color: "White"
    },
    {
        id: 13,
        name: "Black Shoes",
        price: 45.99,
        category: "shoes",
        image: "images/products/shoes1.webp",
        description: "Elegant Shoes",
        featured: false,
        color: "Black"
    },
    {
        id: 14,
        name: "Golden Shoes",
        price: 35.99,
        category: "shoes",
        image: "images/products/shoes2.webp",
        description: "Elegant night shoes",
        featured: false,
        color: "Golden"
    },
    {
        id: 15,
        name: "Beige Sandals",
        price: 35.99,
        category: "shoes",
        image: "images/products/sandals1.webp",
        description: "Fresh sandals",
        featured: false,
        color: "Beige"
    },
    {
        id: 16,
        name: "Silver Ring",
        price: 35.99,
        category: "accessories",
        image: "images/products/ring2.webp",
        description: "Elegant Ring",
        featured: false,
        color: "Silver"
    },
    {
        id: 17,
        name: "Silver Ring",
        price: 35.99,
        category: "accessories",
        image: "images/products/ring3.webp",
        description: "Elegant Ring",
        featured: false,
        color: "Silver"
    },
    {
        id: 18,
        name: "Silver Ring",
        price: 35.99,
        category: "accessories",
        image: "images/products/ring4.webp",
        description: "Elegant Ring",
        featured: false,
        color: "Silver"
    },
    {
        id: 19,
        name: "Silver Ring",
        price: 35.99,
        category: "accessories",
        image: "images/products/ring5.webp",
        description: "Elegant Ring",
        featured: false,
        color: "Silver"
    },
    {
        id: 20,
        name: "Silver Ring",
        price: 35.99,
        category: "accessories",
        image: "images/products/ring6.webp",
        description: "Elegant Ring",
        featured: false,
        color: "Silver"
    },
    {
        id: 21,
        name: "Silver Ring",
        price: 35.99,
        category: "accessories",
        image: "images/products/ring7.webp",
        description: "Elegant Ring",
        featured: false,
        color: "Silver"
    },
    {
        id: 22,
        name: "Silver Ring",
        price: 35.99,
        category: "accessories",
        image: "images/products/ring8.webp",
        description: "Elegant Ring",
        featured: false,
        color: "Silver"
    },
    {
        id: 23,
        name: "Silver Ring",
        price: 35.99,
        category: "accessories",
        image: "images/products/ring9.webp",
        description: "Elegant Ring",
        featured: false,
        color: "Silver"
    },
    {
        id: 24,
        name: "Silver Jewelry Set",
        price: 35.99,
        category: "accessories",
        image: "images/products/ring-earring2.webp",
        description: "Elegant set of jewelry",
        featured: false,
        color: "Silver"
    },
    {
        id: 25,
        name: "Silver Jewelry Set",
        price: 35.99,
        category: "accessories",
        image: "images/products/ring-earring3.webp",
        description: "Elegant set of jewelry",
        featured: false,
        color: "Silver"
    },
    {
        id: 26,
        name: "Silver Jewelry Set",
        price: 35.99,
        category: "accessories",
        image: "images/products/ring-earring4.webp",
        description: "Elegant set of jewelry",
        featured: false,
        color: "Silver"
    },
    {
        id: 27,
        name: "Silver Jewelry Set",
        price: 35.99,
        category: "accessories",
        image: "images/products/ring-earring5.webp",
        description: "Elegant set of jewelry",
        featured: false,
        color: "Silver"
    },
    {
        id: 28,
        name: "Silver Jewelry Set",
        price: 35.99,
        category: "accessories",
        image: "images/products/ring-earring6.webp",
        description: "Elegant set of jewelry",
        featured: false,
        color: "Silver"
    }
];

// ==============================================
// 2. SISTEMA DE CARRITO - SIMPLE Y FUNCIONAL
// ==============================================

class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('damaCart')) || [];
        this.init();
        this.updateCartCount();
    }

    init() {
        // Botón abrir carrito
        document.addEventListener('click', (e) => {
            if (e.target.closest('.cart-btn')) {
                e.preventDefault();
                this.openCart();
            }

            if (e.target.closest('.close-cart')) {
                this.closeCart();
            }

            if (e.target.id === 'checkout-btn') {
                this.checkout();
            }

            if (e.target.closest('.continue-shopping')) {
                this.closeCart();
            }
        });

        // Cerrar al hacer clic fuera
        document.addEventListener('click', (e) => {
            const cartModal = document.querySelector('.cart-modal');
            if (cartModal && e.target === cartModal) {
                this.closeCart();
            }
        });

        // Cerrar con Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeCart();
                this.closeFavorites();
            }
        });
    }

    openCart() {
        const modal = document.querySelector('.cart-modal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            this.renderCart();

            // Forzar reflow para animación
            modal.offsetHeight;
            modal.classList.add('active');
        }
    }

    closeCart() {
        const modal = document.querySelector('.cart-modal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300); // Esperar a que termine la animación
            document.body.style.overflow = 'auto';
        }
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...product,
                quantity: 1
            });
        }

        this.save();
        this.updateCartCount();
        this.showNotification(`"${product.name}" added to cart`);

        // Actualizar carrito si está abierto
        if (this.isCartOpen()) {
            this.renderCart();
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.save();
        this.updateCartCount();
        this.renderCart();
        this.showNotification('Item removed from cart');
    }

    updateQuantity(productId, newQuantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (newQuantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = newQuantity;
                this.save();
                this.renderCart();
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) =>
            total + (item.price * item.quantity), 0);
    }

    save() {
        localStorage.setItem('damaCart', JSON.stringify(this.items));
    }

    updateCartCount() {
        const count = this.items.reduce((sum, item) => sum + item.quantity, 0);
        const cartCounts = document.querySelectorAll('.cart-count');

        cartCounts.forEach(element => {
            element.textContent = count;
            element.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    renderCart() {
        const container = document.getElementById('cart-items');
        const totalElement = document.getElementById('cart-total');

        if (!container) return;

        if (this.items.length === 0) {
            container.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            if (totalElement) totalElement.textContent = '$0.00';
            return;
        }

        container.innerHTML = this.items.map(item => {
            const placeholder = `https://via.placeholder.com/60x60/E8D7FF/9C89B8?text=${item.name.substring(0, 2)}`;

            return `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" 
                         alt="${item.name}"
                         class="cart-item-image"
                         onerror="this.src='${placeholder}'">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toFixed(2)}</p>
                        <div class="cart-item-controls">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <button class="remove-btn" data-id="${item.id}">×</button>
                </div>
            `;
        }).join('');

        if (totalElement) {
            totalElement.textContent = `$${this.getTotal().toFixed(2)}`;
        }

        // Agregar event listeners a los botones del carrito
        this.attachCartEvents();
    }

    attachCartEvents() {
        // Botones de cantidad
        document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                const item = this.items.find(item => item.id === id);
                if (item) {
                    this.updateQuantity(id, item.quantity - 1);
                }
            });
        });

        document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                const item = this.items.find(item => item.id === id);
                if (item) {
                    this.updateQuantity(id, item.quantity + 1);
                }
            });
        });

        // Botones de eliminar
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                this.removeItem(id);
            });
        });
    }

    isCartOpen() {
        const modal = document.querySelector('.cart-modal');
        return modal && modal.style.display === 'flex';
    }

    checkout() {
        if (this.items.length === 0) {
            this.showNotification('Your cart is empty');
            return;
        }

        const total = this.getTotal();
        const orderNumber = 'ORD-' + Date.now().toString().slice(-6);

        this.showNotification(
            `✅ Order #${orderNumber} confirmed!\n` +
            `Total: $${total.toFixed(2)}\n` +
            `Thank you for your purchase!`
        );

        // Limpiar carrito
        this.items = [];
        this.save();
        this.updateCartCount();
        this.renderCart();
        this.closeCart();
    }

    closeFavorites() {
        const modal = document.querySelector('.favorites-modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    showNotification(message) {
        // Crear notificación
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #B47AE2;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            font-family: 'Poppins', sans-serif;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            max-width: 300px;
            white-space: pre-line;
        `;

        document.body.appendChild(notification);

        // Remover después de 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// ==============================================
// 3. SISTEMA DE FAVORITOS - SIMPLE Y FUNCIONAL
// ==============================================

class Favorites {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('damaFavorites')) || [];
        this.init();
    }

    init() {
        // Botón abrir favoritos
        document.addEventListener('click', (e) => {
            if (e.target.closest('.favorites-btn')) {
                e.preventDefault();
                this.openFavorites();
            }

            if (e.target.closest('.close-favorites')) {
                this.closeFavorites();
            }
        });

        // Cerrar al hacer clic fuera
        document.addEventListener('click', (e) => {
            const modal = document.querySelector('.favorites-modal');
            if (modal && e.target === modal) {
                this.closeFavorites();
            }
        });
    }

    openFavorites() {
        const modal = document.querySelector('.favorites-modal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            this.renderFavorites();

            // Forzar reflow para animación
            modal.offsetHeight;
            modal.classList.add('active');
        }
    }

    closeFavorites() {
        const modal = document.querySelector('.favorites-modal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
            document.body.style.overflow = 'auto';
        }
    }

    toggleFavorite(product) {
        const index = this.items.findIndex(item => item.id === product.id);

        if (index === -1) {
            // Añadir a favoritos
            this.items.push(product);
            this.save();
            if (window.cart) {
                window.cart.showNotification(`"${product.name}" added to favorites`);
            }
            return true;
        } else {
            // Remover de favoritos
            this.items.splice(index, 1);
            this.save();
            if (window.cart) {
                window.cart.showNotification(`"${product.name}" removed from favorites`);
            }
            return false;
        }
    }

    isFavorite(productId) {
        return this.items.some(item => item.id === productId);
    }

    save() {
        localStorage.setItem('damaFavorites', JSON.stringify(this.items));
    }

    renderFavorites() {
        const container = document.getElementById('favorites-list');
        if (!container) return;

        if (this.items.length === 0) {
            container.innerHTML = '<p class="empty-favorites">You have no favorite products</p>';
            return;
        }

        container.innerHTML = this.items.map(product => {
            const placeholder = `https://via.placeholder.com/80x80/E8D7FF/9C89B8?text=${product.name.substring(0, 2)}`;

            return `
                <div class="favorite-item" data-id="${product.id}">
                    <img src="${product.image}" 
                         alt="${product.name}"
                         class="favorite-image"
                         onerror="this.src='${placeholder}'">
                    <div class="favorite-info">
                        <h4>${product.name}</h4>
                        <p>$${product.price.toFixed(2)}</p>
                        <button class="btn btn-secondary remove-favorite" data-id="${product.id}">
                            Remove
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        // Event listeners para botones de eliminar
        document.querySelectorAll('.remove-favorite').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.id);
                const product = productsData.find(p => p.id === productId);
                if (product) {
                    this.toggleFavorite(product);
                    this.renderFavorites();
                }
            });
        });
    }
}

// ==============================================
// 4. SISTEMA DE PRODUCTOS - FUNCIONAL
// ==============================================

function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    const featured = productsData.filter(p => p.featured);

    if (featured.length === 0) {
        container.innerHTML = '<p class="no-products">No featured products</p>';
        return;
    }

    container.innerHTML = featured.map(product => createProductCard(product)).join('');
    attachProductEvents();
}

function loadAllProducts(filter = 'all', search = '') {
    const container = document.getElementById('all-products');
    if (!container) return;

    // Mostrar loading
    container.innerHTML = '<div class="loading">Loading products...</div>';

    setTimeout(() => {
        let filtered = [...productsData];

        // Aplicar filtro
        if (filter !== 'all') {
            filtered = filtered.filter(p =>
                p.category.toLowerCase() === filter.toLowerCase()
            );
        }

        // Aplicar búsqueda
        if (search) {
            const term = search.toLowerCase();
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(term) ||
                p.description.toLowerCase().includes(term)
            );
        }

        if (filtered.length === 0) {
            container.innerHTML = '<p class="no-products">No products found</p>';
            return;
        }

        container.innerHTML = filtered.map(product => createProductCard(product)).join('');
        attachProductEvents();

        // Mostrar contador
        const countElement = document.getElementById('products-count');
        if (countElement) {
            countElement.textContent = `Showing ${filtered.length} products`;
        }
    }, 300);
}

function createProductCard(product) {
    const isFavorite = window.favorites ? window.favorites.isFavorite(product.id) : false;
    const placeholder = `https://via.placeholder.com/300x400/E8D7FF/9C89B8?text=${product.name.substring(0, 15)}`;

    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" 
                     alt="${product.name}"
                     class="product-image"
                     loading="lazy"
                     onerror="this.src='${placeholder}'">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <span class="product-category">${product.category}</span>
                <p class="product-description">${product.description}</p>
                <div class="product-actions">
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">
                        Add to Cart
                    </button>
                    <button class="btn btn-secondary toggle-favorite ${isFavorite ? 'active' : ''}" 
                            data-id="${product.id}">
                        ${isFavorite ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function attachProductEvents() {
    // Botones "Add to Cart"
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const productId = parseInt(this.dataset.id);
            const product = productsData.find(p => p.id === productId);

            if (product && window.cart) {
                window.cart.addItem(product);

                // Feedback visual
                const originalText = this.innerHTML;
                this.innerHTML = '✓ Added!';
                this.classList.add('added');

                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.classList.remove('added');
                }, 1500);
            }
        });
    });

    // Botones "Favorite"
    document.querySelectorAll('.toggle-favorite').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const productId = parseInt(this.dataset.id);
            const product = productsData.find(p => p.id === productId);

            if (product && window.favorites) {
                const added = window.favorites.toggleFavorite(product);
                this.innerHTML = added ? '❤️' : '🤍';
                this.classList.toggle('active', added);
            }
        });
    });
}

// ==============================================
// 5. FILTROS Y ORDENAMIENTO
// ==============================================

function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    if (buttons.length === 0) return;

    const urlParams = new URLSearchParams(window.location.search);
    const activeCategory = urlParams.get('category') || 'all';

    buttons.forEach(btn => {
        if (btn.dataset.filter === activeCategory) {
            btn.classList.add('active');
        }

        btn.addEventListener('click', function () {
            const filter = this.dataset.filter;

            // Actualizar URL
            const params = new URLSearchParams(window.location.search);
            params.set('category', filter);
            window.history.replaceState({}, '', `?${params}`);

            // Actualizar botones
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Recargar productos
            const sortSelect = document.getElementById('sort-select');
            const sort = sortSelect ? sortSelect.value : 'default';
            loadAllProducts(filter, '', sort);
        });
    });
}

function initSorting() {
    const select = document.getElementById('sort-select');
    if (!select) return;

    select.addEventListener('change', function () {
        const sort = this.value;

        // Actualizar URL
        const params = new URLSearchParams(window.location.search);
        params.set('sort', sort);
        window.history.replaceState({}, '', `?${params}`);

        // Obtener filtro activo
        const activeBtn = document.querySelector('.filter-btn.active');
        const filter = activeBtn ? activeBtn.dataset.filter : 'all';

        // Recargar productos
        loadAllProducts(filter, '', sort);
    });
}

// ==============================================
// 6. MENÚ MÓVIL Y BÚSQUEDA
// ==============================================

function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-list');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            toggle.setAttribute('aria-expanded',
                nav.classList.contains('active')
            );
        });

        // Cerrar al hacer clic en enlace
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

function initSearch() {
    const searchBtn = document.querySelector('.search-btn');
    const overlay = document.querySelector('.search-overlay');
    const closeBtn = document.querySelector('.close-search');
    const input = document.getElementById('search-input');

    if (searchBtn && overlay) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            overlay.style.display = 'flex';
            if (input) input.focus();
        });
    }

    if (closeBtn && overlay) {
        closeBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
            if (input) input.value = '';
        });
    }

    if (input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const term = input.value.trim();
                if (term) {
                    window.location.href = `products.html?search=${encodeURIComponent(term)}`;
                }
            }
        });
    }
}

// ==============================================
// 7. NEWSLETTER
// ==============================================

function initNewsletter() {
    const forms = document.querySelectorAll('#newsletter-form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;

            if (email && window.cart) {
                // Guardar en localStorage
                const subscriptions = JSON.parse(localStorage.getItem('newsletterSubs')) || [];
                if (!subscriptions.includes(email)) {
                    subscriptions.push(email);
                    localStorage.setItem('newsletterSubs', JSON.stringify(subscriptions));
                }

                window.cart.showNotification('Thank you for subscribing!');
                form.reset();
            }
        });
    });
}

// ==============================================
// 8. INICIALIZACIÓN PRINCIPAL
// ==============================================

function initApp() {
    console.log('🚀 Iniciando Dama Shop...');

    // Inicializar sistemas principales
    window.cart = new ShoppingCart();
    window.favorites = new Favorites();

    // Cargar contenido según la página
    if (document.getElementById('featured-products')) {
        loadFeaturedProducts();
    }

    if (document.getElementById('all-products')) {
        const urlParams = new URLSearchParams(window.location.search);
        const filter = urlParams.get('category') || 'all';
        const search = urlParams.get('search') || '';
        const sort = urlParams.get('sort') || 'default';

        loadAllProducts(filter, search, sort);
        initFilters();
        initSorting();
    }

    // Funciones generales
    initMobileMenu();
    initSearch();
    initNewsletter();

    // Agregar estilos CSS dinámicos
    addDynamicStyles();

    console.log('✅ Dama Shop listo');
}

// ==============================================
// 9. ESTILOS DINÁMICOS
// ==============================================

function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #B47AE2;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            font-family: 'Poppins', sans-serif;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            max-width: 300px;
            word-wrap: break-word;
        }
        
        .cart-item, .favorite-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px;
            border-bottom: 1px solid #E8D7FF;
        }
        
        .cart-item-image, .favorite-image {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 8px;
        }
        
        .cart-item-controls {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 5px;
        }
        
        .quantity-btn {
            width: 25px;
            height: 25px;
            border: 1px solid #9C89B8;
            background: white;
            border-radius: 50%;
            cursor: pointer;
            font-weight: bold;
        }
        
        .remove-btn {
            background: none;
            border: none;
            color: #ff4444;
            font-size: 20px;
            cursor: pointer;
            margin-left: auto;
        }
        
        .add-to-cart.added {
            background-color: #4CAF50 !important;
        }
        
        .toggle-favorite.active {
            background-color: #ff4444 !important;
            color: white;
        }
        
        .loading {
            text-align: center;
            padding: 40px;
            color: #9C89B8;
            font-size: 18px;
        }
    `;
    document.head.appendChild(style);
}

// ==============================================
// 10. EJECUCIÓN
// ==============================================

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

console.log('📦 app.js cargado correctamente');