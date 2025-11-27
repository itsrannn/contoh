// js/checkout.js
// This script will handle the checkout process.
// It assumes 'supabase' is a global variable.

/**
 * Shows or hides the 'Profile Incomplete' modal.
 * @param {boolean} show True to show, false to hide.
 */
window.toggleProfileModal = (show) => {
  const modal = document.getElementById('profile-incomplete-modal');
  if (modal) {
    if (show) {
      modal.style.display = 'flex';
      setTimeout(() => modal.classList.add('show'), 10);
    } else {
      modal.classList.remove('show');
      setTimeout(() => (modal.style.display = 'none'), 300);
    }
  }
};

/**
 * Shows or hides the 'Login Required' modal.
 * @param {boolean} show True to show, false to hide.
 */
window.toggleLoginModal = (show) => {
  const modal = document.getElementById('login-required-modal');
  if (modal) {
    if (show) {
      modal.style.display = 'flex';
      setTimeout(() => modal.classList.add('show'), 10);
    } else {
      modal.classList.remove('show');
      setTimeout(() => (modal.style.display = 'none'), 300);
    }
  }
};

/**
 * Shows or hides the order confirmation modal and populates it with cart data.
 * @param {boolean} show True to show, false to hide.
 */
window.toggleConfirmationModal = (show) => {
  const modal = document.getElementById('confirmation-modal');
  const summaryElement = document.getElementById('confirmation-summary');

  if (modal && summaryElement) {
    if (show) {
      const cartStore = Alpine.store('cart');
      if (!cartStore || cartStore.items.length === 0) {
        window.showNotification('Keranjang belanja Anda kosong.', true);
        return;
      }

      let summaryHTML = '';
      cartStore.details.forEach(item => {
        summaryHTML += `
          <div class="summary-product-item">
            <span class="summary-product-name">${item.name} (x${item.quantity})</span>
            <span class="summary-product-total">Rp ${item.subtotal.toLocaleString('id-ID')}</span>
          </div>
        `;
      });
      summaryHTML += `
        <div class="summary-grand-total">
          <span>Total: Rp ${cartStore.total.toLocaleString('id-ID')}</span>
        </div>
      `;
      summaryElement.innerHTML = summaryHTML;

      modal.style.display = 'flex';
      setTimeout(() => modal.classList.add('show'), 10);
    } else {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
        summaryElement.innerHTML = '';
      }, 300);
    }
  }
};

/**
 * Generates a unique order code.
 * Example: CH-20231115-A1B2
 */
function generateOrderCode() {
  const date = new Date();
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `CH-${y}${m}${d}-${random}`;
}

/**
 * Checks if the user's profile is complete enough for checkout.
 */
async function isProfileComplete() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return { complete: false, reason: 'Not logged in', profile: null };

  const { data, error } = await supabase
    .from('profiles')
    .select('full_name, phone_number, address, postal_code, province, regency, district, village, latitude, longitude')
    .eq('id', session.user.id)
    .single();

  if (error) return { complete: false, reason: 'Profile does not exist', profile: null };

  const requiredFields = ['full_name', 'phone_number', 'address', 'postal_code', 'province', 'regency', 'district', 'village'];

  for (const f of requiredFields) {
    if (!data[f] || String(data[f]).trim() === '') {
      return { complete: false, reason: `Missing field: ${f}`, profile: data };
    }
  }

  if (data.latitude == null || data.longitude == null || (data.latitude === 0 && data.longitude === 0)) {
    return { complete: false, reason: 'Missing map coordinates', profile: data };
  }

  return { complete: true, reason: 'Profile is complete', profile: data };
}

/**
 * Processes the checkout: creates an order in Supabase and clears the cart.
 */
async function processCheckout(profile) {
  const cartStore = Alpine.store('cart');

  if (!cartStore || cartStore.items.length === 0) {
    window.showNotification('Keranjang belanja Anda kosong.', true);
    return;
  }

  const cartDetails = cartStore.details;
  const total = cartStore.total;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    alert('Sesi tidak ditemukan. Silakan login kembali.');
    return window.location.href = 'login page.html';
  }

  const orderCode = generateOrderCode();

  const orderDetails = cartDetails.map(item => ({
    product_id: item.id,
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    subtotal: item.subtotal
  }));

  const shippingAddress = { ...profile };

  const { error } = await supabase.from('orders').insert({
    user_id: user.id,
    order_code: orderCode,
    order_details: orderDetails,
    shipping_address: shippingAddress,
    total_amount: total,
    status: 'Menunggu Konfirmasi'
  });

  if (error) {
    return window.showNotification(`Terjadi kesalahan: ${error.message}`, true);
  }

  localStorage.removeItem('cartItems');
  if (window.Alpine && Alpine.store('cart')) Alpine.store('cart').clear();

  window.showNotification(`Pesanan Anda dengan kode ${orderCode} berhasil dibuat!`);

  setTimeout(() => {
    window.location.href = 'order-history.html';
  }, 1500);
}

// --- Main Checkout Logic ---
document.addEventListener('DOMContentLoaded', () => {
  const checkoutBtn = document.getElementById('checkout-btn');
  const closeProfileModalBtn = document.getElementById('close-modal-btn');
  const profileModalOverlay = document.getElementById('profile-incomplete-modal');

  const closeLoginModalBtn = document.getElementById('close-login-modal-btn');
  const loginModalOverlay = document.getElementById('login-required-modal');

  const confirmOrderBtn = document.getElementById('confirm-order-btn');
  const cancelOrderBtn = document.getElementById('cancel-order-btn');
  const confirmationModalOverlay = document.getElementById('confirmation-modal');

  // Checkout button click
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        return window.toggleLoginModal(true);
      }

      const { complete, profile } = await isProfileComplete();

      if (!complete) {
        return window.toggleProfileModal(true);
      }

      window.toggleConfirmationModal(true);
    });
  }

  // Confirmation modal logic
  if (confirmOrderBtn) {
    confirmOrderBtn.addEventListener('click', async () => {
      const { complete, profile } = await isProfileComplete();
      if (complete) {
        await processCheckout(profile);
      } else {
        window.toggleConfirmationModal(false);
        window.toggleProfileModal(true);
      }
    });
  }

  if (cancelOrderBtn) {
    cancelOrderBtn.addEventListener('click', () => {
      window.toggleConfirmationModal(false);
    });
  }

  if (confirmationModalOverlay) {
    confirmationModalOverlay.addEventListener('click', (e) => {
      if (e.target === confirmationModalOverlay) {
        window.toggleConfirmationModal(false);
      }
    });
  }

  // Profile modal close
  if (closeProfileModalBtn) {
    closeProfileModalBtn.addEventListener('click', () => {
      window.toggleProfileModal(false);
    });
  }

  if (profileModalOverlay) {
    profileModalOverlay.addEventListener('click', (e) => {
      if (e.target === profileModalOverlay) window.toggleProfileModal(false);
    });
  }

  // Login modal close
  if (closeLoginModalBtn) {
    closeLoginModalBtn.addEventListener('click', () => {
      window.toggleLoginModal(false);
    });
  }

  if (loginModalOverlay) {
    loginModalOverlay.addEventListener('click', (e) => {
      if (e.target === loginModalOverlay) window.toggleLoginModal(false);
    });
  }
});
