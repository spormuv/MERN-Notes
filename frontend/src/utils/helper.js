export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function getInitials(name) {
  if (!name) return '';

  const words = name.trim().split(' ');
  const initials = words.map(word => word.charAt(0).toUpperCase());
  return initials.join('');
}
