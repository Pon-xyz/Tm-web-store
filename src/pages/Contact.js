import React from "react";
import {
  Phone,
  MapPin,
  ExternalLink,
  Clock,
} from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="card">
              <h3 className="text-2xl font-bold text-steel-800 mb-6">
                ติดต่อเรา
              </h3>
              <div className="p-6 bg-industrial-50 rounded-lg">
                <h4 className="text-lg font-semibold text-steel-800 mb-4">
                  สามารถติดต่อเราได้ผ่านช่องทางต่างๆ ด้านล่าง:
                </h4>
                <div className="space-y-6">
                  <a
                    href="tel:073-414443"
                    className="flex items-center text-steel-600 hover:text-steel-800 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    <span>073-414443</span>
                  </a>

                  <a
                    href="https://maps.app.goo.gl/B2UDdBfNzL3bizkD8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-steel-600 hover:text-steel-800 transition-colors group"
                  >
                    <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span>
                      122/79 ถนนนาเกลือ ซอย 24, ตำบลบานา, อำเภอเมืองปัตตานี 94000
                    </span>
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <div className="flex items-center text-steel-600">
                    <Clock className="w-5 h-5 mr-3" />
                    <span>เวลาทำการ: จันทร์-เสาร์ 8:00-17:00 น.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* LINE Button */}
            <div className="card">
              <h3 className="text-2xl font-bold text-steel-800 mb-6">
                ติดต่อผ่าน LINE
              </h3>
              <div className="p-6 bg-industrial-50 rounded-lg">
                <p className="text-steel-600 mb-4">
                  แอดไลน์เพื่อสอบถามรายละเอียดหรือสั่งซื้อสินค้า
                </p>
                <a
                  href="https://line.me/R/ti/p/@035dgcwz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-8 py-5 bg-green-500 hover:bg-green-600 text-white text-2xl rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 w-full sm:w-auto"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg"
                    alt="LINE"
                    className="w-6 h-6 mr-2"
                  />
                  แชทผ่าน LINE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section (Button Only) */}
      <section className="py-16 bg-industrial-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-steel-800 mb-4">
            ที่ตั้งโรงงาน
          </h2>
          <p className="text-steel-600 mb-8">
            122/79 ถนนนาเกลือ ซอย 24, ตำบลบานา, อำเภอเมืองปัตตานี 94000
          </p>
          <a
            href="https://maps.app.goo.gl/B2UDdBfNzL3bizkD8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-steel-800 text-white hover:bg-steel-900 transition-colors shadow-md mx-auto"
          >
            <MapPin className="w-5 h-5" />
            <span>เปิดใน Google Maps</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-steel-700 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            พร้อมให้บริการงานโลหะทุกประเภท
          </h2>
          <p className="text-xl text-industrial-200 mb-8 max-w-2xl mx-auto">
            ติดต่อเราเพื่อรับคำปรึกษาและขอใบเสนอราคา ฟรี!
            พร้อมให้บริการในพื้นที่จังหวัดปัตตานีและใกล้เคียง
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:073-414443"
              className="btn-secondary flex items-center justify-center space-x-2 bg-gray-500 hover:bg-red-600 text-white"
            >
              <Phone size={20} />
              <span>โทรหาเรา</span>
            </a>
            <a
              href="https://line.me/R/ti/p/@035dgcwz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white"
            >
              <span>LINE</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
