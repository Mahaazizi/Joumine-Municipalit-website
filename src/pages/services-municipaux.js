import React from 'react'
import Hero from "../components/Hero"
import Banner from '../components/Banner'
import defaultImg from "../images/organigramme.png";
import {Link} from "react-router-dom"
import Footer from "../components/Footer"
export default function ServicesMunicipaux ()  {
    return (
        <>
    <Hero hero="defaultHero" >
        <Banner title="luxurious room" subtitle="deluxe ...">
            <Link to="/rooms" className="btn-primary">
                آخر المستجدات
            </Link>
        </Banner>
    </Hero>
    <div className="services">
   <h1>المصالح البلدية</h1>
   <div className="info-box">
        <h4>الفصل الاول : ترتيب التنظيم الهيكلي لبلدية جومين على النحو التالي</h4>
        <p>1-رئيس البلدية 
2-الكتابة العامة 
3-ادارة الشؤون الادارية و تلتحق بها :
* الادارة الفرعية للشؤون الادارية 
4-ادارة الشؤون المالية و تلتحق بها :
* الادارة الفرعية للشؤون المالية 
5-الادارة الفنية و تلتحق بها :
* الادارة الفرعية للتهيئة العمرانية 
* الادارة الفرعية للاشغال و الصيانة 
* الادارة الفرعية للصحة و النظافة و المحيط
.</p>
    </div>
    <div className="info-box">
        <h4>الفصل الثاني : تلحق بالسيد رئيس البلدية مباشرة المصالح و الأقسام التالية :</h4>
        <p>1-مكتب الضبط المركزي
2-الادارة الفرعية للتوثيق والاعلام
* مصلحة التوثيق والارشيف و الاعلام
قسم التوثيق و الارشيف
قسم الاعلام
قسم العلاقات الخارجية 
* مصلحة العلاقات مع المواطن
3-مصلحة شؤون المجلس البلدي
قسم تنسيق عمل الدوائر 
قسم شؤون المجلس

الفصل الثالث : الكاتب العام للبلدية
وتلحق بالكتابة العامة مباشرة المصالح التالية 
1-وحدة الاعلامية 
* قسم الدراسات و البرمجة 
* قسم الصيانة 
2-مصلحة التراتيب و الشؤون الاقتصادية 
* قسم التراتيب 
* قسم الشؤون الاقتصادية 
3-مصلحة العمل الاجتماعي و الثقافي و الشبابي 
* قسم الشؤون الاجتماعية 
* قسم الشباب و الثقافة </p>
    </div>
    <div className="info-box">
        <h4>الفصل الرابع : ادارة الشؤون الادارية و تلحق بها 
        </h4>
        <p>* مصلحة الحالة المدنية 
* الادارة الفرعية للشؤون الادارية 
1-مصلحة التصرف في الموارد البشرية 
2-مصلحة النزاعات و الشؤون العقارية 
* قسم النزاعات 
* قسم الشؤون العقارية
.</p>
    </div>
    <div className="info-box">
        <h4>الفصل الخامس : ادارة الشؤون الماليه و تلحق بها :
        </h4>
        <p>* الادارة الفرعية للشؤون المالية اللتي تشتمل على :
1-المصلحة المالية
* قسم المحاسبة 
* قسم الاجور 
* قسم الميزانية 
* قسم التزود و الفوترة 
2-مصلحة الاستخلاصات و الاداءات 
* قسم الاستخلاصات 

.</p>
    </div>
    <div className="info-box">
        <h4>الفصل السادس : الادارة الفنية و تلحق بها
        </h4>
        <p>1-الادارة اللفرعية للتهيئة العمرانية 
* مصلحة التهيئة العمرانية
* مصلحة التقاسيم و التراخيص العمرانية 
2-الادارة الفرعية للاشغال و الصيانة
* مصلحة الاشغال 
* مصلحة المعدات و الصيانة 
3-الادارة الفرعية للصحة و النظافة و المحيط
* مصلحة الصحة و النظافة و المحيط : تشتمل على قسمين هما : 
-قسم الصحة 
-قسم النظافة و المحيط 
* مصلحة البستنة و المساحات الخضراء 

.</p>
    </div>


<div className="polaro">
  <img className="spolaroid" src={ defaultImg }alt="Norway" />
 
    <p>المجلس البلدي</p>
</div>
</div>
<Footer />
    </>
    );
  

}
