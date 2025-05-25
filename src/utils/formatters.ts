import { format, parseISO } from 'date-fns';
import { DATE_FORMATS } from '@/constants';

export const formatters = {
  date: (dateString: string): string => {
    try {
      return format(parseISO(dateString), DATE_FORMATS.DISPLAY);
    } catch {
      return dateString;
    }
  },

  dateTime: (dateString: string): string => {
    try {
      return format(parseISO(dateString), DATE_FORMATS.DATETIME_DISPLAY);
    } catch {
      return dateString;
    }
  },

  currency: (amount: number): string => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  },

  phone: (phone: string): string => {
    // Format phone number for display
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  },

  capitalize: (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
};