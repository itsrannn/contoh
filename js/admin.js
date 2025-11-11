// js/admin.js

document.addEventListener('alpine:init', () => {
    Alpine.data('adminDashboard', () => ({
        orders: [],
        loading: true,
        error: null,

        init() {
            this.fetchOrders();
        },

        async fetchOrders() {
            this.loading = true;
            this.error = null;
            try {
                // Fetch orders and the full_name from the related profile
                const { data, error } = await supabase
                    .from('orders')
                    .select(`
                        id,
                        created_at,
                        status,
                        items,
                        profiles ( full_name )
                    `)
                    .order('created_at', { ascending: false });

                if (error) throw error;

                this.orders = data;

            } catch (err) {
                this.error = 'Gagal mengambil data pesanan. Pastikan Anda masuk sebagai admin dan kebijakan RLS sudah benar.';
                console.error('Error fetching orders:', err);
            } finally {
                this.loading = false;
            }
        },

        // Helper to format currency
        formatCurrency(amount) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
        },

        // Helper to format date
        formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            return new Date(dateString).toLocaleDateString('id-ID', options);
        },

        // Calculate total for an order
        calculateOrderTotal(items) {
            if (!items) return 0;
            return items.reduce((total, item) => total + (item.price * item.quantity), 0);
        }
    }));
});
