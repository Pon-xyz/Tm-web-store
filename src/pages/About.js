import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Clock, Heart, Target, Phone } from 'lucide-react';
import factory from "../assets/images/factory.svg";

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-steel-600" />,
      title: 'คุณภาพสูง',
      description: 'เราให้ความสำคัญกับคุณภาพงานเป็นอันดับแรก ทุกชิ้นงานผ่านการตรวจสอบคุณภาพอย่างเข้มงวด'
    },
    {
      icon: <Clock className="w-8 h-8 text-steel-600" />,
      title: 'ตรงเวลา',
      description: 'มอบงานตรงตามกำหนดเวลาเสมอ งานด่วนรับได้ พร้อมให้บริการตลอด 24 ชั่วโมง'
    },
    {
      icon: <Heart className="w-8 h-8 text-steel-600" />,
      title: 'บริการดี',
      description: 'ให้คำปรึกษาและบริการหลังการขายอย่างครบครัน ลูกค้าพึงพอใจ 100%'
    },
    {
      icon: <Target className="w-8 h-8 text-steel-600" />,
      title: 'ความแม่นยำ',
      description: 'ใช้เครื่องมือและเทคโนโลยีที่ทันสมัย งานทุกชิ้นมีความแม่นยำสูง'
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-steel-800 to-steel-900 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            เกี่ยวกับเรา
          </h1>
          <p className="text-xl text-industrial-200 max-w-2xl mx-auto">
            โรงงานโลหะสแตนเลส งานตัดเลเซอร์ CNC งานเชื่อม มากกว่า 8 ปีประสบการณ์
            ให้บริการงานโลหะครบวงจรในจังหวัดปัตตานี
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-steel-800 mb-6">
                ประวัติของเรา
              </h2>
              <div className="space-y-4 text-steel-600 leading-relaxed">
                <p>
                  TM การช่าง ปัตตานี เริ่มต้นจากการเป็นร้านช่างเล็กๆ ในชุมชน
                  ด้วยความมุ่งมั่นและความตั้งใจที่จะให้บริการงานโลหะที่มีคุณภาพ
                  เราได้พัฒนาตัวเองอย่างต่อเนื่อง
                </p>
                <p>
                  เริ่มต้นในปี 2558 ด้วยเครื่องมือพื้นฐาน เราได้เรียนรู้และพัฒนาทักษะ
                  จนสามารถให้บริการงานโลหะที่หลากหลาย ตั้งแต่งานเชื่อมพื้นฐาน
                  ไปจนถึงงานตัดเลเซอร์และ CNC ที่ซับซ้อน
                </p>
                <p>
                  ปัจจุบัน เราเป็นโรงงานโลหะที่ได้รับการยอมรับในจังหวัดปัตตานี
                  ด้วยทีมงานมืออาชีพ เครื่องมือที่ทันสมัย และประสบการณ์มากกว่า 8 ปี
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <img
                src={factory}
                alt="โรงงาน TM การช่าง"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section >

      {/* Values */}
      < section className="bg-industrial-50 py-16" >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-steel-800 mb-4">
              ค่านิยมของเรา
            </h2>
            <p className="text-lg text-steel-600 max-w-2xl mx-auto">
              เรามุ่งมั่นที่จะให้บริการที่ดีที่สุดแก่ลูกค้า ด้วยค่านิยมที่ยึดถือมาตลอด
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-steel-800 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-steel-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Mission & Vision */}
      < section className="bg-steel-700 text-white py-16" >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">พันธกิจ</h2>
              <p className="text-industrial-200 leading-relaxed">
                ให้บริการงานโลหะที่มีคุณภาพสูง ตรงเวลา และราคายุติธรรม
                เพื่อตอบสนองความต้องการของลูกค้าและสร้างความพึงพอใจสูงสุด
                พร้อมพัฒนาตัวเองอย่างต่อเนื่องเพื่อให้บริการที่ดีขึ้น
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">วิสัยทัศน์</h2>
              <p className="text-industrial-200 leading-relaxed">
                เป็นโรงงานโลหะชั้นนำในจังหวัดปัตตานี ที่ได้รับการยอมรับในด้านคุณภาพ
                การบริการ และความน่าเชื่อถือ พร้อมขยายบริการไปยังพื้นที่ใกล้เคียง
                และพัฒนาสู่การเป็นโรงงานโลหะที่ทันสมัยและครบวงจร
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="bg-white py-16" >
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-steel-800 mb-4">
            พร้อมให้บริการงานโลหะทุกประเภท
          </h2>
          <p className="text-xl text-steel-600 mb-8 max-w-2xl mx-auto">
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
            <Link to="/contact" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded text-center flex items-center justify-center space-x-2">
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </section >
    </div >
  );
};

export default About; 