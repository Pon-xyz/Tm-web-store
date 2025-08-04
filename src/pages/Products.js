import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Settings, Wrench, Shield, Phone, Award, Clock, Users, Package, Truck, Scissors, Ruler, ChevronLeft, ChevronRight } from 'lucide-react';
import Blackmetal from "../assets/images/Blackmetal.svg";
import Brass from "../assets/images/Brass.svg";
import CNC from "../assets/images/CNC.svg";
import Consultation from "../assets/images/Consultation.svg";
import Crassirion from "../assets/images/Crassiron.svg";
import Delivery from "../assets/images/Delivery.svg";
import Foldingmachine from "../assets/images/Foldingmachine.svg";
import Lasercutting from "../assets/images/Lasercutting.svg";
import PE from "../assets/images/PE.svg";
import Sawmachine from "../assets/images/Sawmachine.svg";
import STL from "../assets/images/STL.svg";
import Welder from "../assets/images/Welder.svg";
import Weldingwire from "../assets/images/Weldingwire.svg";

const Products = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const products = [
    {
      icon: <Package className="w-12 h-12 text-steel-600" />,
      title: 'เหล็กดำ (Black Steel)',
      description: 'เหล็กดำคุณภาพสูง เหมาะสำหรับงานก่อสร้างและงานอุตสาหกรรม',
      features: [
        'ความแข็งแรงสูง',
        'ทนทานต่อการกัดกร่อน',
        'เหมาะสำหรับงานก่อสร้าง',
        'ราคาแข่งขันได้'
      ],
      image: Blackmetal
    },
    {
      icon: <Package className="w-12 h-12 text-steel-600" />,
      title: 'สแตนเลส (STL)',
      description: 'สแตนเลสคุณภาพสูง ท่อ แผ่น เพลา ฉาก ครบทุกประเภท',
      features: [
        'ท่อสแตนเลส',
        'แผ่นสแตนเลส',
        'เพลาสแตนเลส',
        'ฉากสแตนเลส'
      ],
      image: STL

    },
    {
      icon: <Package className="w-12 h-12 text-steel-600" />,
      title: 'เหล็กหล่อ',
      description: 'เหล็กหล่อคุณภาพสูง เหมาะสำหรับงานที่ต้องการความแข็งแรงพิเศษ',
      features: [
        'ความแข็งแรงสูง',
        'ทนทานต่อแรงกระแทก',
        'เหมาะสำหรับเครื่องจักร',
        'คุณภาพมาตรฐาน'
      ],
      image: Crassirion
    },
    {
      icon: <Package className="w-12 h-12 text-steel-600" />,
      title: 'ทองเหลือง',
      description: 'ทองเหลืองคุณภาพสูง เหมาะสำหรับงานตกแต่งและอุปกรณ์ไฟฟ้า',
      features: [
        'ผิวสวยงาม',
        'นำไฟฟ้าดี',
        'เหมาะสำหรับงานตกแต่ง',
        'ทนทานต่อการกัดกร่อน'
      ],
      image: Brass
    },
    {
      icon: <Package className="w-12 h-12 text-steel-600" />,
      title: 'เพลา PE',
      description: 'เพลา PE สีดำและสีขาว คุณภาพสูง เหมาะสำหรับงานอุตสาหกรรม',
      features: [
        'เพลา PE สีดำ',
        'เพลา PE สีขาว',
        'ความแม่นยำสูง',
        'เหมาะสำหรับงานอุตสาหกรรม'
      ],
      image: PE
    },
    {
      icon: <Package className="w-12 h-12 text-steel-600" />,
      title: "ลวดเชื่อม (Welding Wire)",
      description: "ลวดเชื่อมคุณภาพสูง เหมาะสำหรับงานเหล็กทั่วไปและงานเชื่อมสแตนเลส",
      price: "สอบถามราคา",
      features: [
        "ลวดเชื่อมเหล็กดำ",
        "ลวดเชื่อมสแตนเลส",
        "คุณภาพสูง",
        "เหมาะสำหรับงานเชื่อมทั่วไป"
      ],
      image: Weldingwire
    }
  ];

  const services = [
    {
      icon: <Zap className="w-12 h-12 text-steel-600" />,
      title: 'เครื่องตัดเลเซอร์',
      description: 'ตัดโลหะด้วยเลเซอร์ความแม่นยำสูง งานสวยงาม เรียบร้อย เหมาะสำหรับงานที่ต้องการความละเอียดและความแม่นยำ',
      features: [
        'ตัดสแตนเลส สังกะสี เหล็ก',
        'ความแม่นยำสูง ±0.1mm',
        'งานสวยงาม ไม่มีรอยไหม้',
        'รับงานขนาดเล็ก-ใหญ่'
      ],
      image: Lasercutting
    },
    {
      icon: <Settings className="w-12 h-12 text-steel-600" />,
      title: 'เครื่อง CNC',
      description: 'เครื่องจักร CNC ควบคุมด้วยคอมพิวเตอร์ งานละเอียดแม่นยำ เหมาะสำหรับงานผลิตชิ้นส่วนที่มีความซับซ้อน',
      features: [
        'เจาะ ตัด คว้าน เกลียว',
        'ควบคุมด้วยคอมพิวเตอร์',
        'งานละเอียดแม่นยำ',
        'ผลิตชิ้นส่วนซับซ้อน'
      ],
      image: CNC
    },
    {
      icon: <Wrench className="w-12 h-12 text-steel-600" />,
      title: 'งานเชื่อม',
      description: 'ช่างเชื่อมมืออาชีพ งานเชื่อมสวยงาม แข็งแรงทนทาน ใช้เทคนิคการเชื่อมที่หลากหลาย',
      features: [
        'เชื่อม TIG, MIG, ARC',
        'ลวดเชื่อม',
        'ช่างเชื่อมมืออาชีพ',
        'งานเชื่อมสวยงาม แข็งแรงทนทาน'
      ],
      image: Welder
    },
    {
      icon: <Scissors className="w-12 h-12 text-steel-600" />,
      title: 'ตัดด้วยเครื่องเลื่อยความเร็วสูง',
      description: 'ตัดเหล็กและโลหะด้วยเครื่องเลื่อยความเร็วสูง งานรวดเร็ว แม่นยำ',
      features: [
        'ตัดเหล็กดำ สแตนเลส',
        'ความเร็วสูง ประหยัดเวลา',
        'งานแม่นยำ เรียบร้อย',
        'รับงานทุกขนาด'
      ],
      image: Sawmachine
    },
    {
      icon: <Ruler className="w-12 h-12 text-steel-600" />,
      title: 'บริการพับเหล็ก',
      description: 'พับเหล็กและโลหะตามแบบที่ต้องการ ด้วยเครื่องมือที่ทันสมัย',
      features: [
        'พับเหล็กดำ สแตนเลส',
        'ตามแบบที่ลูกค้าต้องการ',
        'เครื่องมือทันสมัย',
        'งานสวยงาม แม่นยำ'
      ],
      image: Foldingmachine
    },
    {
      icon: <Shield className="w-12 h-12 text-steel-600" />,
      title: 'สั่งผลิตตามแบบลูกค้า',
      description: 'รับผลิตงานโลหะตามแบบที่ลูกค้าต้องการ ตั้งแต่การออกแบบจนถึงการผลิต',
      features: [
        'ออกแบบตามความต้องการ',
        'ผลิตตามแบบที่กำหนด',
        'ควบคุมคุณภาพทุกขั้นตอน',
        'บริการครบวงจร'
      ],
      image: Consultation
    },
    {
      icon: <Truck className="w-12 h-12 text-steel-600" />,
      title: 'บริการจัดส่งสินค้า',
      description: 'บริการจัดส่งสินค้าและงานที่เสร็จสิ้น ไปยังสถานที่ที่ลูกค้าต้องการ',
      features: [
        'จัดส่งทั่วจังหวัดปัตตานี',
        'บริการจัดส่งพื้นที่ใกล้เคียง',
        'ขนส่งอย่างระมัดระวัง',
        'ติดตามสถานะการจัดส่ง'
      ],
      image: Delivery
    }
  ];

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-steel-800 to-steel-900 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            สินค้าและบริการ
          </h1>
          <p className="text-xl text-industrial-200 max-w-2xl mx-auto">
            จำหน่ายเหล็กและวัสดุคุณภาพสูง พร้อมให้บริการงานโลหะครบวงจร
            ด้วยเครื่องมือและเทคโนโลยีที่ทันสมัย ทีมงานมืออาชีพมากกว่า 8 ปี
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-steel-800 mb-4">
              สินค้า
            </h2>
            <p className="text-lg text-steel-600 max-w-2xl mx-auto">
              จำหน่ายเหล็กและวัสดุคุณภาพสูง ครบทุกประเภทที่ใช้ในงานโลหะ
            </p>
          </div>

          {/* Product Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProductIndex * 100}%)` }}
              >
                {products.map((product, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="card group hover:scale-105 transition-all duration-300 border-2 border-blue-200 mx-4">
                      <div className="text-center">
                        <div className="flex justify-center mb-4">
                          {product.icon}
                        </div>
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-steel-800 mb-2">
                            {product.title}
                          </h3>
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            สินค้า
                          </span>
                        </div>
                        <p className="text-steel-600 mb-4 leading-relaxed text-sm">
                          {product.description}
                        </p>
                        <ul className="space-y-2 mb-6 text-left">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                              <span className="text-steel-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="bg-blue-50 rounded-lg p-4">
                          <div className="aspect-video rounded-lg overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevProduct}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-steel-600" />
            </button>
            <button
              onClick={nextProduct}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-steel-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProductIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentProductIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-industrial-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-steel-800 mb-4">
              บริการ
            </h2>
            <p className="text-lg text-steel-600 max-w-2xl mx-auto">
              ให้บริการงานโลหะครบวงจร ด้วยเครื่องมือและเทคโนโลยีที่ทันสมัย
            </p>
          </div>

          {/* Services Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentServiceIndex * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="card group hover:scale-105 transition-all duration-300 border-2 border-green-200 mx-4">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h3 className="text-2xl font-bold text-steel-800">
                              {service.title}
                            </h3>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                              บริการ
                            </span>
                          </div>
                          <p className="text-steel-600 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <ul className="space-y-2 mb-6">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                <span className="text-steel-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="aspect-video rounded-lg overflow-hidden">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevService}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-steel-600" />
            </button>
            <button
              onClick={nextService}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-steel-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentServiceIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentServiceIndex ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Why Choose Us */}
      <section className="bg-industrial-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-steel-800 mb-4">
              ทำไมต้องเลือกเรา
            </h2>
            <p className="text-lg text-steel-600 max-w-2xl mx-auto">
              เราให้ความสำคัญกับคุณภาพงานและความพึงพอใจของลูกค้าเป็นอันดับแรก
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-steel-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-steel-800 mb-2">
                คุณภาพสูง
              </h3>
              <p className="text-steel-600">
                ใช้เครื่องมือและวัสดุคุณภาพสูง งานทุกชิ้นผ่านการตรวจสอบคุณภาพ
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-steel-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-steel-800 mb-2">
                ตรงเวลา
              </h3>
              <p className="text-steel-600">
                มอบงานตรงตามกำหนดเวลา งานด่วนรับได้ พร้อมให้บริการตลอด
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-steel-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-steel-800 mb-2">
                ประสบการณ์
              </h3>
              <p className="text-steel-600">
                ทีมงานมืออาชีพ มากกว่า 8 ปีประสบการณ์ งานทุกประเภท
              </p>
            </div>
          </div>
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
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded text-center flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>โทรหาเรา</span>
            </a>
            <Link to="/contact" className="btn-secondary flex items-center justify-center">
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products; 