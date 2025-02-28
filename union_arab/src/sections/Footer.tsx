const Footer = () => {
  return (
    <div className="py-36 mx-36 bg-[#0E4815] text-white flex flex-col">
      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
        {/* Office Information */}
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-4">المكتب الرئيسي</h3>
          <p className="text-sm">
            المقر: القاهرة - جمهورية مصر العربية<br />
            البريد الإلكتروني: info@seu-eg.org<br />
            الهاتف: +20 123 456 7890
          </p>
        </div>

        {/* General Information */}
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-4">معلومات عامة</h3>
          <ul className="space-y-2 text-sm">
            <li>نبذة المجتمع</li>
            <li>الشروط والأحكام</li>
            <li>حلول الخدمات</li>
            <li>مركز الأمان</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-4">دعم العملاء 24/7</h3>
          <p className="text-sm">
            من الاثنين إلى السبت<br />
            9:00 صباحاً - 9:00 مساءً
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 pt-8 border-t border-gray-50">
        <p className="text-sm text-center">
          حقوق النشر © 2025 الاتحاد العربي للمنشآت الصغيرة
        </p>
      </div>
    </div>
  );
};

export default Footer;