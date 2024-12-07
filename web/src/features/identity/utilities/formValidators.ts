export function emailValidator(email: string, errorMessage: string) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email && !pattern.test(email)) return errorMessage;
}

export function confirmPasswordValidator(
  password: string,
  confirmPassword: string,
  errorMessage: string
) {
  if (password !== confirmPassword) return errorMessage;
}

export function passwordValidator(password: string, errorMessage: string) {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,}$/;
  if (password && !pattern.test(password)) return errorMessage;
}
