// js/admin.js

document.addEventListener('DOMContentLoaded', async () => {
    // Elemen utama
    const ordersTableBody = document.getElementById('orders-table-body');
    const loadingMessage = document.getElementById('loading-message');
    const adminMessageContainer = document.getElementById('admin-message-container');

    /**
     * Menampilkan pesan ke admin di container khusus.
     * Jika container tidak ditemukan, fallback ke alert().
     */
    function showAdminMessage(title, message) {
        const container = document.getElementById('admin-message-container');
        if (container) {
            container.innerHTML = `
                <div style="padding: 1rem; background-color: #fff3cd; border: 1px solid #ffeeba; border-radius: 8px;">
                    <h4 style="margin-top: 0; color: #856404;">${title}</h4>
                    <p style="margin-bottom: 0;">${message}</p>
                </div>
            `;
            container.style.display = 'block';
        } else {
            console.error('Admin message container not found. Falling back to alert.');
            alert(`${title}\n\n${message.replace(/<br>/g, '\n').replace(/<strong>/g, '').replace(/<\/strong>/g, '')}`);
        }
    }

    /**
     * Mengambil daftar pesanan dari Supabase.
     */
    async function fetchOrders() {
        try {
            // Ambil semua pesanan + data profil pelanggan (nama & kontak)
            const { data: orders, error } = await supabase
                .from('orders')
                .select(`
                    *,
                    profiles (
                        full_name,
                        phone_number
                    )
                `)
                .order('created_at', { ascending: false });

            if (error) throw error;

            if (loadingMessage) loadingMessage.style.display = 'none';

            // Jika tidak ada pesanan
            if (!orders || orders.length === 0) {
                if (loadingMessage) loadingMessage.textContent = 'Tidak ada pesanan yang ditemukan.';
                showAdminMessage(
                    'Tidak Ada Pesanan Ditemukan',
                    'Ini bisa terjadi karena beberapa alasan:<br>' +
                    '1. <strong>Belum ada pesanan yang masuk.</strong><br>' +
                    '2. <strong>Anda belum dikonfigurasi sebagai admin.</strong> Pastikan ID pengguna Anda telah ditambahkan ke tabel `public.admins` di Supabase.<br>' +
                    '3. <strong>Kebijakan RLS (Row Level Security) salah.</strong> Pastikan kebijakan RLS di tabel `orders` dan `profiles` mengizinkan admin untuk melihat semua data.'
                );
                return;
            }

            renderOrders(orders);

        } catch (error) {
            console.error('Error fetching orders:', error);
            if (loadingMessage) loadingMessage.textContent = 'Gagal memuat pesanan.';
            showAdminMessage(
                'Gagal Memuat Pesanan',
                `Terjadi kesalahan saat mengambil data pesanan: <strong>${error.message}</strong><br>` +
                'Pastikan Anda telah masuk (login) dan memiliki koneksi internet yang stabil. Jika masalah berlanjut, periksa log konsol browser dan kebijakan RLS Anda.'
            );
        }
    }

    /**
     * Render data pesanan ke tabel admin.
     */
    function renderOrders(orders) {
        if (!ordersTableBody) return;
        ordersTableBody.innerHTML = '';

        orders.forEach(order => {
            const tr = document.createElement('tr');

            // Ringkasan item
            let summary = 'Tidak ada item';
            const orderItems = order.order_details || order.items;
            if (orderItems && orderItems.length > 0) {
                summary = orderItems.map(item => `${item.name} (x${item.quantity})`).join(', ');
            }

            // Informasi pelanggan
            const profile = order.profiles;
            const customerInfo = profile
                ? `${profile.full_name || 'Nama tidak ada'}<br><small>${profile.phone_number || 'No HP tidak ada'}</small>`
                : 'Pelanggan tidak ditemukan';

            // Template baris tabel
            tr.innerHTML = `
                <td>${order.order_code || order.id}</td>
                <td>${customerInfo}</td>
                <td>${summary}</td>
                <td><span class="status-${order.status.toLowerCase().replace(/\s+/g, '-')}">${order.status}</span></td>
                <td class="action-buttons"></td>
            `;

            const actionsCell = tr.querySelector('.action-buttons');
            addActions(actionsCell, order);

            ordersTableBody.appendChild(tr);
        });
    }

    /**
     * Menambahkan tombol aksi sesuai status pesanan.
     */
    function addActions(cell, order) {
        if (!cell) return;
        cell.innerHTML = '';

        const statusTransitions = {
            'Menunggu Konfirmasi': ['Diproses', 'Ditolak'],
            'Diproses': ['Dalam Pengiriman'],
            'Dalam Pengiriman': ['Selesai']
        };

        const availableActions = statusTransitions[order.status];

        if (availableActions) {
            availableActions.forEach(action => {
                const actionBtn = createButton(action, () => updateOrderStatus(order.id, action));
                cell.appendChild(actionBtn);
            });
        } else {
            cell.textContent = 'Selesai';
        }
    }

    /**
     * Membuat tombol dinamis.
     */
    function createButton(text, onClick) {
        const button = document.createElement('button');
        button.textContent = text;
        button.onclick = onClick;
        return button;
    }

    /**
     * Update status pesanan di Supabase.
     */
    async function updateOrderStatus(orderId, newStatus) {
        const { error } = await supabase
            .from('orders')
            .update({ status: newStatus })
            .eq('id', orderId);

        if (error) {
            console.error('Error updating status:', error);
            alert('Gagal memperbarui status pesanan.');
        } else {
            alert('Status pesanan berhasil diperbarui.');
            fetchOrders(); // Refresh data
        }
    }

    // Muat data awal
    fetchOrders();
});
