(async function() {
    // Wait for supabase client to be available
    while (typeof window.supabase === 'undefined') {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    const { data: { user } } = await window.supabase.auth.getUser();

    if (!user) {
        console.log("No user logged in. Redirecting to homepage.");
        window.location.href = 'index.html';
        return;
    }

    const { data, error } = await window.supabase.rpc('is_admin');

    if (error || !data) {
        console.log("User is not an admin or an error occurred. Redirecting to homepage.");
        window.location.href = 'index.html';
    } else {
        console.log("Admin user verified. Access granted.");
    }
})();
