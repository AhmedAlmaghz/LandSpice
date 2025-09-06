import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  ar: {
    translation: {
      hero_name: 'لاند سبايس:',
      hero_title: 'المذاق البلدي اليمني بجودة عالمية',
      hero_desc: 'مكونات يمنية خالصة، جودة تستحق الاختيار.',
      hero_contact_cta: 'تواصل معنا',
      hero_products_cta: 'منتجاتنا',
      nav_home: 'الرئيسية',
      nav_about: 'عنّا',
      toggle_lang: 'English',
      aria: { prev: 'السابق', next: 'التالي' },
      gallery: {
        title: 'معرض الصور',
        subtitle: 'تشكيلة مميزة من المنتجات اليمنية الأصيلة',
        slide1: 'كوفية يمنية تقليدية',
        slide2: 'عائلة تستمتع بوجبة يمنية',
        slide3: 'منظر لصنعاء القديمة',
        slide4: 'مطعم يمني تقليدي',
        modalLabel: 'عرض الصورة',
        closeModal: 'إغلاق'
      },
      products: {
        title: 'منتجاتنا',
        subtitle: 'اكتشف تشكيلتنا الفاخرة من المنتجات اليمنية الأصيلة',
        learnMore: 'المزيد من التفاصيل',
        items: {
          chili: 'شطة حارة',
          ketchup: 'كاتشب',
          tomato_powder: 'مسحوق الطماطم',
          basbas: 'مسحوق البسباس',
        },
        descriptions: {
          chili: 'شطة يمنية تقليدية مصنوعة من أفضل أنواع الفلفل الحار',
          ketchup: 'كاتشب طبيعي بنكهة مميزة',
          tomato_powder: 'مسحوق طماطم مركز بنسبة 100%',
          basbas: 'بهار البسباس اليمني الأصيل',
        },
        features: {
          hot: 'حار ولذيذ',
          authentic: 'أصالة يمنية',
          premium: 'جودة عالية',
          natural: 'مكونات طبيعية',
          rich: 'نكهة غنية',
          versatile: 'متعدد الاستخدامات',
          concentrated: 'مركز',
          pure: 'نقي 100%',
          longShelfLife: 'عمر تخزيني طويل',
          aromatic: 'عطري',
          traditional: 'وصفة تقليدية',
        },
      },
      quality: {
        title: 'لماذا لاند سبايس؟',
        subtitle: 'نهتم بأدق التفاصيل لتقديم طعم أصيل وثابت.',
        cards: {
          a: { title: 'أصالة يمنية', desc: 'مكونات يمنية مختارة بروح أصيلة.' },
          b: { title: 'معايير جودة', desc: 'عمليات إنتاج دقيقة لضمان الجودة.' },
          c: { title: 'ثقة وتميز', desc: 'نكهات مميزة تنافس المنتجات العالمية.' },
        },
      },
      partners: {
        title: 'شركاؤنا',
        subtitle: 'نفخر بثقة شركائنا وعملائنا.',
      },
      about: {
        meta: 'معلومات عن LandSpice ورؤيتنا وجودتنا.',
        body: 'صفحة placeholder للمحتوى القادم.',
      },
      faq: {
        title: 'الأسئلة الشائعة',
        subtitle: 'إجابات سريعة على أكثر الأسئلة تكرارًا.',
        q1: 'ما هي مكونات منتجاتكم؟',
        a1: 'نستخدم مكونات يمنية طبيعية مختارة بعناية لضمان جودة وطعم أصيل.',
        q2: 'هل توفرون كميات جملة للمطاعم؟',
        a2: 'نعم، تتوفر عبوات كبيرة للمطاعم وشركاء الضيافة والتوريد.',
        q3: 'هل تقدمون شحنًا خارج اليمن؟',
        a3: 'نتعاون مع شركاء لوجستيين لتوفير الشحن حسب الكميات والوجهة.',
      },
      contact: {
        title: 'تواصل معنا',
        subtitle: 'لطلب الجملة والتوزيع أو للاستفسارات.',
        whatsapp_title: 'واتساب المبيعات',
        whatsapp_cta: 'تواصل واتساب',
        email_title: 'البريد الإلكتروني',
        email_copy: 'نسخ',
        email_send: 'أرسل رسالة',
      },
      toast: {
        copy_success: 'تم النسخ ✅',
        copy_fail: 'تعذر النسخ',
      },
      footer: {
        rights: 'جميع الحقوق محفوظة.',
      },
    },
  },
  en: {
    translation: {
      hero_name: 'LandSpice:',
      hero_title: 'Yemeni taste with a global quality',
      hero_desc: 'Authentic Yemeni ingredients with dependable quality.',
      hero_contact_cta: 'Contact us',
      hero_products_cta: 'Our products',
      nav_home: 'Home',
      nav_about: 'About',
      toggle_lang: 'العربية',
      aria: { prev: 'Previous', next: 'Next' },
      gallery: {
        title: 'Photo Gallery',
        subtitle: 'A premium selection of authentic Yemeni products',
        slide1: 'Traditional Yemeni Keffiyeh',
        slide2: 'Family enjoying a Yemeni meal',
        slide3: 'View of Old Sana\'a',
        slide4: 'Traditional Yemeni restaurant',
        modalLabel: 'Image Viewer',
        closeModal: 'Close'
      },
      products: {
        title: 'Products',
        subtitle: 'Discover our premium selection of authentic Yemeni products',
        learnMore: 'Learn More',
        items: {
          chili: 'Hot Sauce',
          ketchup: 'Ketchup',
          tomato_powder: 'Tomato Powder',
          basbas: 'Basbas Powder',
        },
        descriptions: {
          chili: 'Traditional Yemeni hot sauce made from the finest chili peppers',
          ketchup: 'Natural ketchup with a unique flavor profile',
          tomato_powder: '100% concentrated tomato powder',
          basbas: 'Authentic Yemeni basbas spice mix',
        },
        features: {
          hot: 'Spicy & Flavorful',
          authentic: 'Yemeni Authenticity',
          premium: 'Premium Quality',
          natural: 'Natural Ingredients',
          rich: 'Rich Flavor',
          versatile: 'Versatile Use',
          concentrated: 'Highly Concentrated',
          pure: '100% Pure',
          longShelfLife: 'Long Shelf Life',
          aromatic: 'Aromatic',
          traditional: 'Traditional Recipe',
        },
      },
      quality: {
        title: 'Why LandSpice?',
        subtitle: 'We care about every detail to deliver authentic, consistent taste.',
        cards: {
          a: { title: 'Yemeni Authenticity', desc: 'Selected Yemeni ingredients and heritage.' },
          b: { title: 'Quality Standards', desc: 'Careful processes to ensure quality.' },
          c: { title: 'Trust & Distinction', desc: 'Distinct flavors that compete globally.' },
        },
      },
      partners: {
        title: 'Partners',
        subtitle: 'We are proud of the trust of our partners and customers.',
      },
      about: {
        meta: 'Information about LandSpice, our vision, and our quality.',
        body: 'Placeholder page for upcoming content.',
      },
      faq: {
        title: 'FAQ',
        subtitle: 'Quick answers to common questions.',
        q1: 'What are your product ingredients?',
        a1: 'We use carefully selected natural Yemeni ingredients for authentic quality and taste.',
        q2: 'Do you supply wholesale for restaurants?',
        a2: 'Yes, bulk packs are available for restaurants and hospitality partners.',
        q3: 'Do you ship outside Yemen?',
        a3: 'We work with logistics partners to arrange shipping based on quantities and destination.',
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'For wholesale, distribution, or general inquiries.',
        whatsapp_title: 'Sales WhatsApp',
        whatsapp_cta: 'Chat on WhatsApp',
        email_title: 'Email',
        email_copy: 'Copy',
        email_send: 'Send email',
      },
      toast: {
        copy_success: 'Copied ✅',
        copy_fail: 'Copy failed',
      },
      footer: {
        rights: 'All rights reserved.',
      },
    },
  },
}

const saved = localStorage.getItem('lang') || 'ar'

i18n.use(initReactI18next).init({
  resources,
  lng: saved,
  fallbackLng: 'ar',
  interpolation: { escapeValue: false },
})

function applyDirAndLang(lng) {
  const html = document.documentElement
  html.lang = lng === 'ar' ? 'ar' : 'en'
  html.dir = lng === 'ar' ? 'rtl' : 'ltr'
  const mtc = document.querySelector('meta[name="theme-color"]')
  if (mtc) mtc.setAttribute('content', '#fffaf8')
}

applyDirAndLang(saved)

i18n.on('languageChanged', applyDirAndLang)

export default i18n
