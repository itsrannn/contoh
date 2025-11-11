// js/database.js

/**
 * Creates a public profile for a new user.
 * This function assumes 'supabase' is a global variable.
 *
 * @param {object} user The user object from Supabase auth.
 */
const createProfileForNewUser = async (user) => {
  const { data, error } = await supabase
    .from('profiles')
    .insert([
      { id: user.id, full_name: user.user_metadata.full_name, updated_at: new Date() },
    ]);

  if (error) {
    console.error('Error creating profile:', error);
    throw error;
  }

  return data;
};
