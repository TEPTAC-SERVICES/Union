import { useTranslations } from "next-intl";
export const flags = [
  {
    id: 1,
    flag: "/flags/svg/eg.svg",
    name: "Egypt",
  },
  {
    id: 2,
    flag: "/flags/svg/jo.svg",
    name: "Jordan",
  },
  {
    id: 3,
    flag: "/flags/svg/tn.svg",
    name: "Tunisia",
  },
  {
    id: 4,
    flag: "/flags/svg/sy.svg",
    name: "Syria",
  },
  {
    id: 5,
    flag: "/flags/svg/kw.svg",
    name: "Kuwait",
  },
  {
    id: 6,
    flag: "/flags/svg/ye.svg",
    name: "Yemen",
  },
  {
    id: 7,
    flag: "/flags/svg/sa.svg",
    name: "Saudi Arabia",
  },
  {
    id: 8,
    flag: "/flags/svg/ae.svg",
    name: "United Arab Emirates",
  },
  {
    id: 9,
    flag: "/flags/svg/sd.svg",
    name: "Sudan",
  },
];


export const news = [
  {
    id: 1,
    image: "/news/1.svg",
    title: "الاتفاق حول تسعيرة المنتدى ",
    content:
      "وقع أمين عام الاتحاد العربي للكهرباء سعادة المهندس ناصر علي المهندي وسعادة المهندس خلدون الخشمان أمين عام الجمعية العربية لمرافق المياة ( أكوا)  في مقر ا",
  },
  {
    id: 2,
    image: "/news/2.svg",
    title: "الاتفاق حول تسعيرة المنتدى ",
    content:
      "وقع أمين عام الاتحاد العربي للكهرباء سعادة المهندس ناصر علي المهندي وسعادة المهندس خلدون الخشمان أمين عام الجمعية العربية لمرافق المياة ( أكوا)  في مقر ا",
  },
];

export const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "ar", name: "العربية" },
];

export const StepsConfig = (stepnumber: number) => {
  const t = useTranslations("RegisterPage");

  if (stepnumber === 1) {
    return [
      {
        label: t("step1.title"),
        status: "in-progress",
        description: t("stepsstatus.inprogress"),
      },
      {
        label: t("step2.title"),
        status: "pending",
        description: t("stepsstatus.pending"),
      },
      {
        label: t("step3.title"),
        status: "pending",
        description: t("stepsstatus.pending"),
      },
    ];
  } else if (stepnumber === 2) {
    return [
      {
        label: t("step1.title"),
        status: "completed",
        description: t("stepsstatus.completed"),
      },
      {
        label: t("step2.title"),
        status: "in-progress",
        description: t("stepsstatus.inprogress"),
      },
      {
        label: t("step3.title"),
        status: "pending",
        description: t("stepsstatus.pending"),
      },
    ];
  } else if (stepnumber === 3) {
    return [
      {
        label: t("step1.title"),
        status: "completed",
        description: t("stepsstatus.completed"),
      },
      {
        label: t("step2.title"),
        status: "completed",
        description: t("stepsstatus.completed"),
      },
      {
        label: t("step3.title"),
        status: "in-progress",
        description: t("stepsstatus.inprogress"),
      },
    ];
  } else if (stepnumber === 4) {
    return [
      {
        label: t("step1.title"),
        status: "completed",
        description: t("stepsstatus.completed"),
      },
      {
        label: t("step2.title"),
        status: "completed",
        description: t("stepsstatus.completed"),
      },
      {
        label: t("step3.title"),
        status: "completed",
        description: t("stepsstatus.completed"),
      },
    ];
  }
};

export const countryList = [
  { value: 'DZ', dialCode: '+213', flag: '🇩🇿' },
  { value: 'BH', dialCode: '+973', flag: '🇧🇭' },
  { value: 'KM', dialCode: '+269', flag: '🇰🇲' },
  { value: 'DJ', dialCode: '+253', flag: '🇩🇯' },
  { value: 'EG', dialCode: '+20', flag: '🇪🇬' },
  { value: 'IQ', dialCode: '+964', flag: '🇮🇶' },
  { value: 'JO', dialCode: '+962', flag: '🇯🇴' },
  { value: 'KW', dialCode: '+965', flag: '🇰🇼' },
  { value: 'LB', dialCode: '+961', flag: '🇱🇧' },
  { value: 'LY', dialCode: '+218', flag: '🇱🇾' },
  { value: 'MR', dialCode: '+222', flag: '🇲🇷' },
  { value: 'MA', dialCode: '+212', flag: '🇲🇦' },
  { value: 'OM', dialCode: '+968', flag: '🇴🇲' },
  { value: 'PS', dialCode: '+970', flag: '🇵🇸' },
  { value: 'QA', dialCode: '+974', flag: '🇶🇦' },
  { value: 'SA', dialCode: '+966', flag: '🇸🇦' },
  { value: 'SO', dialCode: '+252', flag: '🇸🇴' },
  { value: 'SD', dialCode: '+249', flag: '🇸🇩' },
  { value: 'SY', dialCode: '+963', flag: '🇸🇾' },
  { value: 'TN', dialCode: '+216', flag: '🇹🇳' },
  { value: 'AE', dialCode: '+971', flag: '🇦🇪' },
  { value: 'YE', dialCode: '+967', flag: '🇾🇪' },
];


export const Arab_contries = () => {
  const t = useTranslations()
  const countriesTranslated = countryList.map((country) => ({
    value: country.value,
    label: t(`countries.${country.value}`),
    dialCode: country.dialCode,
    flag : `/flags/svg/${country.value.toLowerCase()}.svg`
  }))
  return countriesTranslated
}