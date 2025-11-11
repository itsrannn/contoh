// js/supabase-client.js

// This script assumes the Supabase UMD library has been loaded from a CDN,
// which provides a global `supabase` object containing the `createClient` function.

const supabaseUrl = 'https://thetdckuftpzyubvlbju.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoZXRkY2t1ZnRwenl1YnZsYmp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3Nzk2NzgsImV4cCI6MjA3ODM1NTY3OH0.79TyhVbyQzKa9xFeg9JxVLxcN0NVyYBx-_VniQFfQZg';

// Use the createClient function from the global `supabase` object
// and then overwrite the global `supabase` variable with our
// initialized client instance. This is a common pattern.
const { createClient } = supabase;
window.supabase = createClient(supabaseUrl, supabaseKey);
