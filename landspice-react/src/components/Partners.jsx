import React from 'react';
import { useTranslation } from 'react-i18next';

const partners = [
  { 
    id: 1, 
    name: 'ملوك تاج الحبوب اليمنية', 
    description: 'صنعاء -الصياح - سوق الحبوب الحصبة',
    // address: 'رائدة في تجارة وتوزيع البهارات اليمنية الأصيلة',
    logo: '/img/partners/yemen-spices-logo.png' // Example path, replace with actual paths
  },
  { 
    id: 2, 
    name: 'سوبر ماركت السلام', 
    description: 'صنعاء - شارع التلفزيون',
    // address:'صنعاء -الصياح - سوق الحبوب الحصبة',
    logo: '/img/partners/sanaa-restaurant-logo.png'
  },
  { 
    id: 3, 
    name: 'طيبة هيبر', 
    description: 'صنعاء - الستين أمام جامعة الإيمان - الفرع شارع التلفزيون',
    logo: '' // No logo, will use fallback
  },
  { 
    id: 4, 
    name: 'ظمران سنتر', 
    description: 'صنعاء - سعون شارع الاربعين',
    logo: '/img/partners/yemen-herbs-logo.png'
  },
  { 
    id: 5, 
    name: 'سوبر ماركت دبي', 
    description: 'صنعاء - شارع مازدا',
    logo: '/img/partners/green-yemen-logo.png'
  },
  { 
    id: 6, 
    name: ' مجمع الشرق الأوسط ', 
    description: 'صنعاء - جولة آية',
    logo: '/landSpiceLogo-B.png' // No logo, will use fallback
  },
  { 
    id: 7, 
    name: 'بهارات الرجوي', 
    description: 'صنعاء - جولة عمران',
    logo: '/landSpiceLogo-B.png' // No logo, will use fallback
  },
  { 
    id: 8, 
    name: 'سوبر ماركت المنتاب', 
    description: 'صنعاء - شارع مازدا',
    logo: '/landSpiceLogo-B.png' // No logo, will use fallback
  },
  { 
    id: 9, 
    name: 'الثور للتجارة', 
    description: 'صنعاء - شارع مازدا',
    logo: '/landSpiceLogo-B.png' // No logo, will use fallback
  },
  // { 
  //   id: 10, 
  //   name: '', 
  //   description: 'صنعاء -',
  //   logo: '/landSpiceLogo-B.png' // No logo, will use fallback
  // },
];

export default function Partners() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <section id="partners" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('partners.title', 'شركاؤنا')}
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('partners.subtitle', 'نفخر بشراكتنا مع أبرز الأسماء في مجال الصناعة لنقدم لكم الأفضل')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className={`group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-center mb-6 h-32">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <img
                      src={partner.logo || '/logo.png'}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain p-2"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/logo.png';
                      }}
                    />
                    {!partner.logo && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full">
                        <span className="text-gray-400 text-sm">
                          {partner.name.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {partner.description}
                </p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-red-600 bg-red-100 dark:bg-red-900/30 rounded-full">
                    {t('partners.partner', 'شريك')}
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 px-6 py-3 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {t('partners.since', 'شريك منذ')} {2020 + partner.id}
                  </span>
                  <button 
                    className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium"
                    aria-label={`${t('partners.view', 'عرض')} ${partner.name}`}
                  >
                    {t('partners.visit', 'زيارة الموقع')} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
