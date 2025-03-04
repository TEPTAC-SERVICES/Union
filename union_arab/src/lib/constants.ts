import { useTranslations } from "next-intl";

export const flags = [
    {
      id: 1,
      flag: "/flags/Egypt.png",
      name: "Egypt",
    }
    ,
    {
      id: 2,
      flag: "/flags/Jordan.png",
      name: "Jordan",
    }
    ,
    {
      id: 3,
      flag: "/flags/Tunisia.png",
      name: "Tunisia",
    },
    {
      id: 4,
      flag: "/flags/Syrian_revolution.png",
      name: "Syria",
    },{
      id: 5,
      flag: "/flags/Kuwait.png",
      name: "Kuwait",
    },{
      id: 6,
      flag: "/flags/Yemen.png",
      name: "Yemen",
    },{
      id: 7,
      flag : "/flags/Saudi_Arabia.png",
      name: "Saudi Arabia",
    },{
      id: 8,
      flag : "/flags/United_Arab_Emirates.png",
  
      name: "United Arab Emirates",
    },{
      id: 9,
      flag : "/flags/Sudan.png",
      name: "Sudan",
    }]

export const news = [
    {
      id: 1,
      image: "/news/1.svg",
      title: "الاتفاق حول تسعيرة المنتدى ",
      content: "وقع أمين عام الاتحاد العربي للكهرباء سعادة المهندس ناصر علي المهندي وسعادة المهندس خلدون الخشمان أمين عام الجمعية العربية لمرافق المياة ( أكوا)  في مقر ا",

    },
    {
      id: 2,
      image: "/news/2.svg",
      title: "الاتفاق حول تسعيرة المنتدى ",
      content: "وقع أمين عام الاتحاد العربي للكهرباء سعادة المهندس ناصر علي المهندي وسعادة المهندس خلدون الخشمان أمين عام الجمعية العربية لمرافق المياة ( أكوا)  في مقر ا",

    }
  ]

  
export  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'العربية' }
  ];


export  const StepsConfig = (stepnumber: number) => {
    const t = useTranslations("RegisterPage");

    
    if (stepnumber === 1) {
      return [
        { label: t('step1.title'), status: "in-progress", description: t('stepsstatus.inprogress')},
        { label: t('step2.title'), status: "pending", description: t('stepsstatus.pending') },
        { label: t('step3.title'), status: "pending", description: t('stepsstatus.pending') },
      ];
    } else if (stepnumber === 2) {
      return [
        { label: t('step1.title'), status: "completed", description: t('stepsstatus.completed') },
        { label: t('step2.title'), status: "in-progress", description: t('stepsstatus.inprogress')},
        { label: t('step3.title'), status: "pending", description: t('stepsstatus.pending') },
      ];
    }
    else if (stepnumber === 3) {
      return [
        { label: t('step1.title'), status: "completed", description: t('stepsstatus.completed') },
        { label: t('step2.title'), status: "completed", description: t('stepsstatus.completed') },
        { label: t('step3.title'), status: "in-progress", description: t('stepsstatus.inprogress')},
      ];
    }
    else if (stepnumber === 4) {
      return [
        { label: t('step1.title'), status: "completed", description: t('stepsstatus.completed') },
        { label: t('step2.title'), status: "completed", description: t('stepsstatus.completed') },
        { label: t('step3.title'), status: "completed", description: t('stepsstatus.completed') },
      ];
    }
  }

 export  const testimonials = [
    {
      name: "أحمد الليالي",
      job: "صاحب مشروع ناشئ",
      comment: "ساعدتني المنصة في توسيع شبكة علاقاتي المهنية، وتبادل الخبرات مع رواد أعمال من مختلف الدول العربية."
    },
    {
      name: "ليلا الحسين",
      job: "مديرة شركة صغيرة",
      comment: "قدمت لي المنصة فرصة التعاون مع مؤسسات صديقة مشابهة، مما ساعدني في الحصول على التمويل اللازم لتوسيع نشاطي."
    },
    {
      name: "سامي الجببر",
      job: "رائد أعمال",
      comment: "بفضل الروبوت الذكي المدمج، حصلت على استشارات مخصصة ساعدتني في تحسين أداء شركتي."
    },
    {
      name: "أحمد الليالي",
      job: "صاحب مشروع ناشئ",
      comment: "ساعدتني المنصة في توسيع شبكة علاقاتي المهنية، وتبادل الخبرات مع رواد أعمال من مختلف الدول العربية."
    },
    {
      name: "ليلا الحسين",
      job: "مديرة شركة صغيرة",
      comment: "قدمت لي المنصة فرصة التعاون مع مؤسسات صديقة مشابهة، مما ساعدني في الحصول على التمويل اللازم لتوسيع نشاطي."
    },
    {
      name: "سامي الجببر",
      job: "رائد أعمال",
      comment: "بفضل الروبوت الذكي المدمج، حصلت على استشارات مخصصة ساعدتني في تحسين أداء شركتي."
    }
  ];
  