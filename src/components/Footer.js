import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-steel-800 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logos/tm-logo-main.png" // ← update this path
                alt="TM Logo"
                className="w-10 h-10 object-contain rounded-lg"
              />
              <h3 className="text-xl font-bold">TM การช่างปัตตานี</h3>
            </div>
            <p className="text-industrial-200 mb-4">
              โรงงานโลหะสแตนเลส งานตัดเลเซอร์ CNC งานเชื่อม มากกว่า 8 ปีประสบการณ์
              ให้บริการงานโลหะครบวงจรในจังหวัดปัตตานี
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-industrial-200">
                <MapPin size={16} />
                <span className="text-sm">
                  122/79 ถนนนาเกลือ ซอย 24, ตำบลบานา, อำเภอเมืองปัตตานี 94000
                </span>
              </div>
              <div className="flex items-center space-x-2 text-industrial-200">
                <Phone size={16} />
                <a
                  href="tel:073-414443"
                  className="text-sm hover:text-white transition-colors"
                >
                  073-414443
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">เมนู</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-industrial-200 hover:text-white transition-colors">
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-industrial-200 hover:text-white transition-colors">
                  สินค้าและบริการ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-industrial-200 hover:text-white transition-colors">
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-industrial-200 hover:text-white transition-colors">
                  ติดต่อ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">บริการของเรา</h4>
            <ul className="space-y-2">
              <li className="text-industrial-200 text-sm">งานตัดเลเซอร์</li>
              <li className="text-industrial-200 text-sm">งาน CNC</li>
              <li className="text-industrial-200 text-sm">งานเชื่อม</li>
              <li className="text-industrial-200 text-sm">งานสแตนเลส</li>

            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-steel-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-4">
              <a
                href="https://line.me/R/ti/p/@035dgcwz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <span className="text-sm font-medium">LINE</span>
                <ExternalLink size={16} />
              </a>
              <a
                href="https://web.facebook.com/line035dgcwz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Facebook size={16} />
                <span className="text-sm font-medium">Facebook</span>
              </a>
            </div>
            <p className="text-industrial-300 text-sm">
              © {currentYear} TM การช่างปัตตานี. สงวนลิขสิทธิ์
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 