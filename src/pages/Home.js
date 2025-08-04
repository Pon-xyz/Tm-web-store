import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Award, Users, Zap } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-steel-600" />,
      title: 'งานตัดเลเซอร์',
      description: 'ตัดโลหะด้วยเลเซอร์ความแม่นยำสูง งานสวยงาม เรียบร้อย'
    },
    {
      icon: <Award className="w-8 h-8 text-steel-600" />,
      title: 'งาน CNC',
      description: 'เครื่องจักร CNC ควบคุมด้วยคอมพิวเตอร์ งานละเอียดแม่นยำ'
    },
    {
      icon: <Users className="w-8 h-8 text-steel-600" />,
      title: 'งานเชื่อม',
      description: 'ช่างเชื่อมมืออาชีพ งานเชื่อมสวยงาม แข็งแรงทนทาน'
    }
  ];

  const stats = [
    { number: '8+', label: 'ปีประสบการณ์' },
    { number: '500+', label: 'งานที่เสร็จสิ้น' },
    { number: '100%', label: 'ความพึงพอใจ' },
    { number: '24/7', label: 'บริการหลังการขาย' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-steel-800 to-steel-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                TM การช่างปัตตานี
              </h1>
              <p className="text-xl text-industrial-200 leading-relaxed">
                โรงงานโลหะสแตนเลส งานตัดเลเซอร์ CNC งานเชื่อม มากกว่า 8 ปีประสบการณ์
                ให้บริการงานโลหะครบวงจรในจังหวัดปัตตานี
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-center">
                  ติดต่อเรา
                </Link>
                <a
                  href="tel:073-414443"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded text-center flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>073-414443</span>
                </a>

              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-steel-700 rounded-2xl p-8 backdrop-blur-custom">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-industrial-300" />
                    <span className="text-industrial-200">122/79 ถนนนาเกลือ ซอย 24, ตำบลบานา, อำเภอเมืองปัตตานี 94000</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-industrial-300" />
                    <span className="text-industrial-200">073-414443</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-industrial-300" />
                    <span className="text-industrial-200">จันทร์-เสาร์ 8:00-17:00 น.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-steel-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-steel-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-industrial-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-steel-800 mb-4">
              บริการของเรา
            </h2>
            <p className="text-lg text-steel-600 max-w-2xl mx-auto">
              ให้บริการงานโลหะครบวงจร ด้วยเครื่องมือและเทคโนโลยีที่ทันสมัย
              พร้อมทีมงานมืออาชีพที่มีประสบการณ์
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-steel-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-steel-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              ดูบริการทั้งหมด
            </Link>
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


export default Home; 