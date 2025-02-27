
const Footer = () => {
  return (
    <footer className="bg-[#0E4815] text-white py-12 px-16 lg:px-36">
        <div className="  mx-auto  grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">المكتب الرئيسي</h3>
            <p className="text-sm">
              المقر: القاهرة - جمهورية مصر العربية<br />
              البريد الإلكتروني: info@seu-eg.org<br />
              الهاتف: +20 123 456 7890
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">معلومات عامة</h3>
            <ul className="space-y-2 text-sm">
              <li>نبذة المجتمع</li>

              
              <li>الشروط والأحكام</li>
              <li>حلول الخدمات</li>
              <li>مركز الأمان</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">دعم العملاء 24/7</h3>
            <p className="text-sm">
              من الاثنين إلى السبت<br />
              9:00 صباحاً - 9:00 مساءً
            </p>
          </div>
        </div>

        <div className=" mt-8 pt-8 border-t border-gray-50">
          <p className="text-sm text-center">
            حقوق النشر © 2025 الاتحاد العربي للمنشآت الصغيرة
          </p>
        </div>
      </footer>
  )
}

export default Footer
