import { UserType } from '@/constants';

export const helpers = {
  getUserTypeLabel: (userType: UserType): string => {
    const labels = {
      [UserType.PATIENT]: 'Bệnh nhân',
      [UserType.DOCTOR]: 'Bác sĩ',
      [UserType.NURSE]: 'Y tá',
      [UserType.PHARMACIST]: 'Dược sĩ',
      [UserType.LAB_TECHNICIAN]: 'Kỹ thuật viên xét nghiệm',
      [UserType.ADMINISTRATOR]: 'Quản trị viên'
    };
    return labels[userType] || userType;
  },

  getInitials: (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  },

  debounce: <T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void => {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  },

  generateId: (): string => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  },

  truncateText: (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }
};