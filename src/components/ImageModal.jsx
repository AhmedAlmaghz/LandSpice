import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function ImageModal({ src, alt, onClose }) {
  const { t } = useTranslation();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t('gallery.modalLabel', 'Image view')}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-full object-contain"
          onClick={(e) => e.stopPropagation()}
          draggable="false"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
          aria-label={t('gallery.closeModal', 'Close')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
