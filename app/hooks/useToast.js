import { toast } from 'react-hot-toast';

export default function useToast() {
  const showSuccess = (message) => {
    toast.success(message, {
      icon: '✅', 
      duration: 5000, 
    });
  };

  const showError = (message) => {
    toast.error(message, {
      icon: '❌', 
      duration: 5000, 
    });
  };

  const showGeneral = (message) => {
    toast.error(message, {
      icon: '⏳',
      duration: 5000, 
    });
  };

  return { showSuccess, showError, showGeneral };
}
