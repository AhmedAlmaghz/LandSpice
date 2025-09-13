import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Product data with direct image paths
const products = [
  {
    id: 1,
    name: 'الشطة الحارة',
    nameEn: 'Hot Sauce',
    image: '/img/Product/hotSauce10.jpg',
    fallback: '/img/Product/old/chili.svg',
    description: 'شطة يمنية حارة بنكهة فريدة',
    descriptionEn: 'Spicy Yemeni hot sauce with unique flavor',
    category: 'sauces',
    tags: ['spicy', 'bestseller'],
    price: 299,
    

  },
  {
    id: 2,
    name: 'كاتشب',
    nameEn: 'Ketchup',
    image: '/img/Product/Ketchup.png',
    fallback: '/img/Product/old/ketchup.svg',
    description: 'كاتشب طبيعي مصنوع من الطماطم الطازجة',
    descriptionEn: 'Natural ketchup made from fresh tomatoes',
    category: 'sauces',
    tags: ['sweet', 'family'],
    price: 349,
    
  },
  {
    id: 3,
    name: 'بودرة الطماطم',
    nameEn: 'Tomato Powder',
    image: '/img/Product/Tomato1.jpg',
    fallback: '/img/Product/old/tomato-powder.svg',
    description: 'بودرة طماطم مجففة طبيعية 100%',
    descriptionEn: '100% natural tomato powder',
    category: 'spices',
    tags: ['natural', 'versatile'],
    price: 999,
    
  },
  {
    id: 4,
    name: 'بسباس مبهر',
    nameEn: 'Basbas',
    image: '/img/Product/pasbas.jpg',
    fallback: '/img/Product/old/basbas.svg',
    description: 'مسحوق البسباس اليمني العريق مع خلطة التوابل المغذية واللذيذة',
    descriptionEn: 'Traditional Yemeni basbas',
    category: 'spices',
    tags: ['traditional', 'aromatic'],
    price: 649,
    
  }
];

const categories = [
  { id: 'all', name: 'الكل', nameEn: 'All' },
  { id: 'sauces', name: 'الشطة', nameEn: 'Sauces' },
  { id: 'spices', name: 'الصلصة', nameEn: 'Spices' },
  { id: 'herbs', name: 'الأعشاب', nameEn: 'Herbs' }
];

export default function Products() {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const isRTL = i18n.language === 'ar';

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getLocalizedText = (text, textEn) => {
    return isRTL ? text : textEn || text;
  };

  return (
    <section id="products" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('products.title', 'منتجاتنا')}
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('products.subtitle', 'اكتشف منتجاتنا المتميزة المصنوعة من أفضل المكونات اليمنية الأصيلة')}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder={t('products.search_placeholder', 'ابحث عن منتجات...')}
              className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className={`absolute ${isRTL ? 'left-3' : 'right-3'} top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {getLocalizedText(category.name, category.nameEn)}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div 
                key={product.id} 
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="relative h-56 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-6">
                  {product.tags?.includes('bestseller') && (
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
                      {t('products.bestseller', 'الأكثر مبيعاً')}
                    </span>
                  )}
                  <img 
                    src={product.image} 
                    alt={getLocalizedText(product.name, product.nameEn)}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      console.error(`Error loading image: ${product.image}`);
                      if (product.fallback) {
                        e.target.src = product.fallback;
                      } else {
                        e.target.src = '/logo.png';
                      }
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {getLocalizedText(product.name, product.nameEn)}
                    </h3>
                    {product.tags?.includes('new') && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                        {t('products.new', 'جديد')}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {getLocalizedText(product.description, product.descriptionEn)}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors">
                      {t('products.view_details', 'عرض التفاصيل')}
                    </button>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {t('products.price', 'ريال')} {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
              {t('products.no_products', 'لا توجد منتجات')}
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              {t('products.try_another_search', 'حاول البحث باستخدام كلمات أخرى أو تغيير الفلتر')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
