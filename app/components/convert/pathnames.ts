// utils/i18n/pathnames.ts
export const getVietnamesePathname = (segment: string): string => {
  const map: Record<string, string> = {
    'login': 'Đăng nhập',
    'register': 'Đăng ký',
    'forget-password': 'Quên mật khẩu',
  };
  return map[segment] ?? segment;
};