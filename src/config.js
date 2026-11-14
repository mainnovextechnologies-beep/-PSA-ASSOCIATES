// Keep all demonstration behavior controlled from this setting.
export const DEMO_MODE = true;

export const BUSINESS = {
  name: 'PSA & Associates',
  category: 'Certified Public Accountant',
  address: '24-7 33, Beside S.R.K School, Magunta Layout, Nellore, Andhra Pradesh 524003, India',
  phoneDisplay: '089197 19813',
  phoneLink: '+918919719813',
  rating: '4.9',
  reviewCount: 10
};

// Add the verified Google Business Profile reviews URL/Place ID before launch.
// Do not replace this with a generic Google search URL.
export const GOOGLE_REVIEWS_URL = '';
export const DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(BUSINESS.address);
export const MAP_EMBED_URL = 'https://maps.google.com/maps?q=' + encodeURIComponent(BUSINESS.address) + '&z=16&output=embed';
