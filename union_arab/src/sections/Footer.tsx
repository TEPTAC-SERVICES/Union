import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0E4815] text-white py-10 px-4">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Flex Container */}
        <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-between py-5">
          
          {/* Column 1 */}
          <div className="flex-1 min-w-[250px] md:max-w-[30%] lg:max-w-[25%]">
            <h3 className="text-lg font-semibold mb-4">المكتب الرئيسي</h3>
            <div className="text-sm space-y-2">
              <p>القاهرة - جمهورية مصر العربية</p>
              <p>info@seu-eg.org</p>
              <p>20+ 123 456 7890</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex-1 min-w-[250px] md:max-w-[30%] lg:max-w-[25%]">
            <h3 className="text-lg font-semibold mb-4">معلومات عامة</h3>
            <nav>
              <ul className="space-y-2 text-sm">
                <li>نبذة المجتمع</li>
                <li>الشروط والأحكام</li>
                <li>حلول الخدمات</li>
                <li>مركز الأمان</li>
              </ul>
            </nav>
          </div>

          {/* Column 3 */}
          <div className="flex-1 min-w-[250px] md:max-w-[30%] lg:max-w-[25%]">
            <h3 className="text-lg font-semibold mb-4">دعم العملاء 24/7</h3>
            <div className="text-sm space-y-2">
              <p>الاثنين إلى السبت</p>
              <p>9:00 ص - 9:00 م</p>
             
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 py-5 border-t border-white/20 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              حقوق النشر © 2025 الاتحاد العربي للمنشآت الصغيرة
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#AF9113]">
                <Facebook className="text-white text-2xl" />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#AF9113]">
                <Linkedin className="text-white text-2xl" />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#AF9113]">
                <Instagram className="text-white text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
