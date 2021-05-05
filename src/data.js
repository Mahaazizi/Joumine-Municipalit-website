import room1 from "./images/details-1.jpeg";
import room2 from "./images/details-2.jpeg";
import img3 from "./images/sign.jpg";
import img2 from "./images/civilStatut.jpg";
import img1 from "./images/build.jpg";
import pdf from "./images/d_book_edebiyyat_23490.pdf"
/*import img2 from "./images/room-2
.jpeg";
import img3 from "./images/room-3.jpeg";
import img4 from "./images/room-4.jpeg";
import img5 from "./images/room-5.jpeg";
import img6 from "./images/room-6.jpeg";
import img7 from "./images/room-7.jpeg";
import img8 from "./images/room-8.jpeg";
import img9 from "./images/room-9.jpeg";
import img10 from "./images/room-10.jpeg";
import img11 from "./images/room-11.jpeg";
import img12 from "./images/room-12.jpeg";*/

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "رخص-البناء",
      slug: "رخص-البناء",
      type: "documents",
      t1:
      "الوثائق المكونة لملف رخصة بناء ",
      description1: ["كل مواطن يرغب في إقامة بناء أو القيام بترميم بناء قديم , أو إجراء إصلاحات عليه مطالب باستخراج رخصة بناء.لأجل ذلك عليه الإستظهار بالوثائق التالية :",
      
     " مطلب على ورق عادي ممضى من قبل طالب الرخصة أو من ينوبه.(2 نظائر)",
      
      "شهادة ملكية أو حكم استحقاقي أو وثيقة أخرى تثبت أن قطعة الأرض المزمع إقامة البناء عليها ملك له. (2 نظائر)",
      "بطاقة إرشادات فنية تسلم من قبل الإدارة ممضاة من طرف المهندس المعماري مصمم المشروع.(2 نظائر)",
      
      "مشروع بناء في خمسة نظائر . (5 نظائر)",
      
      "وصل إيداع التصريح بالضريبة على دخل الأشخاص الطبيعيين أو الضريبة على الشركات . (5 نظائر)",
      
     " وصل خلاص المعاليم الموظفة على العقار موضوع مطلب رخصة البناء .(2 نظائر)",
      
      "دراسة فنية للنجاعة الحرارية للمباني المعدة للسكن الجماعي و للمباني المعدة للمكاتب و التي تفوق مساحتها المغطاة 500م² (معدة من طرف مهندس معماري أو مكتب دراسات و مصادق عليها من طرف مكتب مراقبة مرخص من وزارة التجهيز و الإسكان) (2 نظائر)",
      
      "مذكرة تقديمية (2 نظائر)",
      
     " نسخة من بطاقة التعريف الوطنية (2 نظائر)"],
     t2:"قرار المصادقة على عمليات التقاسيم",
     description2:[
     "للحصول على قرار مصادقة على التقسيم قطعة أرض، يرجى الإستظهار بالوثائق التالية :",
     "ما يثبت عقد الملكية : عقد الملكية (رسم عقاري – عقد شراء- حكم استحقاقي)",
     
     "كراس الشروط المحددة حقوق و واجبات القائم بالتقسيم وكذلك المشترين أو المتسوغين به وبرنامج التهيئة والتطهير في 07 نظائر.",
     
    " شهادة في خلاص الأداء البلدي"],
    t3: [],
    description3: [],
     
      extras: [
        "في حالة تقديم مطلب من طرف مالكين على الشياع فزيادة على الوثائق المنصوص عليها يجب أن يحتوي الملف على التزام كتابي من طرف المالكين المشار إليهم ينص على عدم التراجع في مطلبهم لمدة خمس سنوات على الأقل."
        ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        }
      ],
      pdf: {
        url: []
      } 
  
    }},
    {
      sys: {
        id: "2"
      },
      fields: {
        name: "الحالة-المدنية",
        slug: "الحالة-المدنية",
        type: "documents",
        t1:
        "الولادة ",
        description1: ["نظرا للأهمية التي يكتسيها هذا الحدث تمت إحاطته بمجموعة من الإجراءات التي تتعلق بالتصريح وآجال التصريح وكيفية تحرير رسوم الولادة.",

       " من يقوم بالتصريح ؟",
       " الأب",
        "المستشفى",
        "التصريح بالولادة واجب متأكد والإخلال به يعرض صاحبه للتتبعات العدلية تصل إلى السجن لمدة 6 أشهر.",
        
        "أجل القيام بالتصريح ؟",
        "يتم الإعلام بالولادة خلال العشرة أيام التي تلي الوضع.",
        
      "  من يتلقى التصريح بالولادة ؟",
       " أعوان مصلحة الحالة المدنية بالبلدية."
        ],
      
      t2:"الزواج",
      description2:["منذ اصدار مجلة الاحوال الشخصية لايتم ابــــرام عـــقد الــــزواج إلا أمــام عدلين او امام ضابط الحالة المدنية بمحضر شاهدين من اهل الثقة وموافقة الوالدين بالنسبة للقصر (دون 18 سنة).",
     " الشروط المطلوب توفرها لابرام عقد زواج",
      
     " يجب ان يكون الزوجين من جنسين مختلفين.",
     " رضا الزوجين-مهما كان سنهما- امام ضابط الحالة المدنية او امام عدلين.",
     " توفر السن القانوني للزواج.",
      "موافقة الولي بالنسبة للزوجة التي سنها اقل من 18 سنة.,يجب ان يكون الولي من اقارب الزوجة (الاب.العم, الاخ...).ويكون بالغا عاقلا والاولية تكون للاب او من يوكله.",
      "ان يكون كلا الزوجين في خلو من الموانع الشرعية للزواج.",
      
    "  ما هي الوثائق المكونة لملف الزواج ؟",
      
      "نسخة من بطاقة التعريف لكل من الزوجين.",
     " مضمون ولادة لكل من الزوجين.",
     " اذن من المحكمة اذا كان السن اقل من 18 سنة بالنسبة للزوج و18 سنة بالنسبة للزوجة.",
     " موافقة الولي الكتابية بحجة عادلة اذا كان متغيبا عن عملية ابرام عقد الزواج بالنسبة للرجل أو المراة أو الإثنين ان كان احدهما دون سن الرشد.",
     " مضمون وفاة الزوج او الزوجة بالنسبة للارامل.",
     " نسخة من حكم الطلاق بالنسبة للمطلقين.",
     " الاستظهار ببطاقة التعريف الوطنية بالنسبة للشاهدين (مع وجوب توفر الشروط القانونية لكلا الشاهدين)",
     " ترخيص من الادارة بالنسبة للخاضعين لترخيص مسبق لعقد الزواج (مثل اعوان السلك النشيط-القمارق-الجيش الوطني...)",
     " مطبوعة تسلم من البلدية حول نظام الاملاك الزوجية."
     ],
     t3:"الوفاة",
     description3:["مضمون الوفاة والتصريح بالدفن",
    " أين يقع التصريح بالوفاة؟",
   "  لدى ضابط الحالة المدنية بمكان الوفاة مرجع النظر أو مكان اكتشاف الجثة إن كان مكان الوفاة مجهولا.",
     "ماهو اجل التصريح بالوفاة ؟",
    " خلال ثلاثة أيام",
    " من يقوم بالتصريح ؟",
     "قريب الهالك أو من لديه ارشادات صحيحة وتامة قدر الإمكان.",
     "مدير المستشفى أو المستوصف أو صاحب مكان الوفاة وذلك في ظرف 24 ساعة من الوفاة.",
     "آمر السجن (الإعلام فورا)",
    " الأمن الوطني إذا كان الموت ناتجا عن حادث مرور أو حكم إعدام أو عنف (الإعلام فورا)",
     
    " مضمون وفاة والإذن بالدفن",
    " لإستخراج الإذن بالدفن يجب الإدلاء بـ : شهادة طبية تفيد أن الموت طبيعي.",
     "إذن من وكيل الجمهورية اذا كانت أسباب الوفاة غير طبيعية."
    ],
     
       
        extras: [
          
        "  المولود الميت لا يقع تسجيله في دفتر الولادات وإنما في دفتر الوفيات",
        "بالنسبة لزواج الاجانب , يجب الاستظهار بشهادة موافقة من السفارة او القنصلية الراجع لها الزوج بالنظر تشهد بامكانية الزواج. شهادة عزوبية او طلاق او وفاة وذلك لتفادي ارجاع التونسية الى وضعية تعدد الزوجات."
        
        ],
        images: [
          {
            fields: {
              file: {
                url: img2
              }
            }
          }
        ],
        pdf: {
          url: []
        }
      }},
      {
        sys: {
          id: "3"
        },
        fields: {
          name: "التعريف-بالامضاء",
          slug: "التعريف-بالامضاء",
          type: "documents",
          intro : "الاجراءات الضرورية يجب تقديم الوثيقة من الممضي نفسه الى أعوان مصلحة الحالة المدنية.",
          t1:
          "يتم التعريف بالإمضاء بمجرد الاستظهار بإحدى الوثائق الرسمية التالية: ",
          description1: ["بطاقة التعريف الوطنية.",
         " بطاقة التعريف الخاصة بالأجانب والمسلمة من طرف إدارة الأمن الوطني.",
         " جواز السفر.",
          
         " الإمضاء شخصي",
         " الإمضاء شخصي وأمام عون مصلحة الحالة المدنية." 
          ],
          description2:[],
          description3:[],
        
  
          extras: [
            "يحجر التعريف بالإمضاء على الوثائق المنافية للأخلاق الحميدة و المخلة بالنظام العام تعفى الوثائق الإدارية المقدمة من طرف مصالح الدولة , الجماعات المحلية أو المؤسسات العمومية ذات الصبغة الإدارية من الآداء."
       
          ],
          images: [
            {
              fields: {
                file: {
                  url: img3
                }
              }
            }
          ],
          pdf: {
            url: []
          }
        }},
        {
          sys: {
            id: "4"
          },
          fields: {
            name: "الجباية-المحلية",
            slug: "الجباية-المحلية",
            type: "documents",
            intro : "",
            description1: [],
            description2:[],
            description3:[],
          
    
            extras: [
            ],
            images: [
              {
                fields: {
                  file: {
                    url: img3
                  }
                }
              }
            ], 
            pdf: {
              url: pdf
            }
          }}
  ];