// js/order-history.js
// This script fetches and displays the user's order history.
// It assumes 'supabase' is a global variable.

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Check for active session
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
        // If not logged in, redirect to login page
        window.location.href = 'login page.html';
        return;
    }

    const user = session.user;

    const orderListContainer = document.getElementById('order-list-container');
    const loadingMessage = document.getElementById('loading-message');

    // 2. Fetch orders from Supabase
    try {
        const { data: orders, error } = await supabase
            .from('orders')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false }); // Show newest orders first

        if (error) {
            throw error;
        }

        // 3. Render the orders
        loadingMessage.style.display = 'none'; // Hide loading message

        if (orders.length === 0) {
            orderListContainer.innerHTML = '<p>Anda belum memiliki riwayat pesanan.</p>';
            return;
        }

        orders.forEach(order => {
            const orderCard = document.createElement('div');
            orderCard.classList.add('order-card');

            const statusClass = `status-${order.status.toLowerCase().replace(' ', '-')}`;
            const formattedDate = new Date(order.created_at).toLocaleDateString('id-ID', {
                day: 'numeric', month: 'long', year: 'numeric'
            });
            const formattedTotal = `Rp ${order.total_amount.toLocaleString('id-ID')}`;

            let itemsHtml = '';
            order.order_details.forEach(item => {
                itemsHtml += `
                    <div class="item">
                        <div class="item-info">
                            <div class="item-name">${item.name}</div>
                            <div class="item-qty">Kuantitas: ${item.quantity}</div>
                        </div>
                        <div class="item-total">Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</div>
                    </div>
                `;
            });

            let receiptHtml = '';
            if (order.shipping_receipt) {
                receiptHtml = `<div class="order-receipt"><strong>No. Resi:</strong> ${order.shipping_receipt}</div>`;
            }

            orderCard.innerHTML = `
                <div class="order-header">
                    <div>
                        <div class="order-code">${order.order_code}</div>
                        <div class="order-date">${formattedDate}</div>
                    </div>
                    <div class="order-status ${statusClass}">${order.status}</div>
                </div>
                <div class="order-body">
                    ${itemsHtml}
                </div>
                <div class="order-footer">
                    ${receiptHtml}
                    <div class="order-total">
                        <strong>Total Pesanan:</strong>
                        <span>${formattedTotal}</span>
                    </div>
                </div>
            `;
            orderListContainer.appendChild(orderCard);
        });

    } catch (error) {
        loadingMessage.innerText = 'Gagal memuat riwayat pesanan.';
        console.error('Error fetching orders:', error);
    }

    // Feather icons replacement
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Add logout functionality to the new sidebar link
    const logoutLink = document.getElementById('logout-link');
    if(logoutLink) {
        logoutLink.addEventListener('click', async (e) => {
            e.preventDefault();
            await supabase.auth.signOut();
            window.location.href = 'login page.html';
        });
    }
});
