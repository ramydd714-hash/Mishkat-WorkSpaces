
import React from 'react';

// --- Navbar ---
interface NavbarProps { scrolled: boolean; }

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect py-3 shadow-sm border-b' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">M</div>
          <span className={`text-xl font-extrabold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            Mishkat <span className="text-amber-500">WorkSpaces</span>
          </span>
        </div>
        
        {/* تم حذف روابط التنقل من هنا */}

        <a 
          href="https://wa.me/201034700041" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-amber-500/30 transition-all hover:scale-105"
        >
          احجز الآن
        </a>
      </div>
    </nav>
  );
};

// --- Hero Section ---
export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Coworking Space" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-white text-right md:text-center max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
          حيث يلتقي <span className="text-amber-500">الإلهام</span> <br className="hidden md:block"/> بمساحة العمل
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 mb-10 leading-relaxed font-light">
          مشكاة وورك سبيس توفر لك بيئة عمل احترافية وهادئة في قلب مدينة نصر، مصممة خصيصاً لتمكين المبدعين والشركات الناشئة من تحقيق أهدافهم.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#contact-details" className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-xl transition-all hover:scale-105 text-center flex items-center justify-center gap-2">
            <i className="fas fa-calendar-check"></i>
            احجز جولة الآن
          </a>
          <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all text-center">
            استكشف الخدمات
          </a>
        </div>
        
        <div className="mt-16 flex items-center justify-center gap-3">
          <div className="flex text-amber-400 text-xl">
            {[1, 2, 3, 4, 5].map(i => <i key={i} className="fas fa-star"></i>)}
          </div>
          <p className="text-slate-400 text-sm">تقييم 5.0 بناءً على 39 مراجعة حقيقية</p>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <i className="fas fa-chevron-down text-white/50 text-2xl"></i>
      </div>
    </section>
  );
};

// --- About Section ---
export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
              alt="Co-working collaboration" 
              className="relative z-10 rounded-3xl shadow-2xl"
            />
          </div>
          <div className="text-right">
            <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">نبذة عنا</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
              نحن لا نقدم مجرد مكتب، بل مجتمعاً للإبداع والنمو
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              تأسست <strong>مشكاة وورك سبيس</strong> لتكون الحاضنة المثالية لأفكارك. نؤمن بأن بيئة العمل تؤثر بشكل مباشر على الإنتاجية، لذا قمنا بتجهيز مساحة تجمع بين الهدوء، العصرية، والاحترافية الكاملة لدعم المستقلين والشركات الناشئة في رحلتهم.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-500 flex-shrink-0">
                  <i className="fas fa-rocket"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">دعم الإبداع</h4>
                  <p className="text-slate-500 text-sm">بيئة محفزة للأفكار الجديدة</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 flex-shrink-0">
                  <i className="fas fa-users"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">مجتمع تعاوني</h4>
                  <p className="text-slate-500 text-sm">تواصل مع رواد أعمال مثلك</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Services Section ---
const services = [
  { 
    icon: 'fa-desktop', 
    title: 'مكاتب مشتركة ومرنة', 
    desc: 'مساحات عمل مريحة بنظام اليوم أو الساعة، مصممة لتوفير أقصى درجات التركيز مع إمكانية التفاعل مع مجتمع مهني مبدع.' 
  },
  { 
    icon: 'fa-building-user', 
    title: 'مكاتب خاصة للفرق', 
    desc: 'مكاتب مغلقة توفر الخصوصية التامة لشركتك الناشئة أو فريق عملك، مجهزة بكافة الأدوات المكتبية التي تحتاجها.' 
  },
  { 
    icon: 'fa-bolt', 
    title: 'إنترنت فايبر لا ينقطع', 
    desc: 'استمتع بأعلى سرعات الإنترنت المتاحة في مصر مع أنظمة نسخ احتياطي لضمان استمرار أعمالك واجتماعاتك بدون توقف.' 
  },
  { 
    icon: 'fa-handshake-simple', 
    title: 'قاعات اجتماعات ذكية', 
    desc: 'قاعات مكيفة ومجهزة بشاشات عرض عالية الجودة وأنظمة صوتية متطورة لاستضافة اجتماعاتك أو ورش عملك باحترافية.' 
  },
  { 
    icon: 'fa-mug-hot', 
    title: 'ضيافة وبوفيه مفتوح', 
    desc: 'ركن مشروبات مجاني يضم القهوة، الشاي، والمشروبات العشبية لتنشيط ذهنك، مع مساحة مخصصة لتناول الوجبات.' 
  },
  { 
    icon: 'fa-print', 
    title: 'خدمات لوجستية متكاملة', 
    desc: 'نوفر لك خدمات الطباعة، التصوير، السكرتارية، واستقبال البريد لتركز فقط على تنمية عملك وترك الأمور الإدارية لنا.' 
  },
  { 
    icon: 'fa-battery-full', 
    title: 'طاقة كهربائية مستمرة', 
    desc: 'لا تقلق من انقطاع الكهرباء، نوفر مولدات وأنظمة طاقة بديلة تضمن استمرار العمل في كافة الظروف.' 
  },
  { 
    icon: 'fa-couch', 
    title: 'مناطق هادئة للاسترخاء', 
    desc: 'زوايا مريحة ومصممة بعناية لأخذ قسط من الراحة أو القراءة بعيداً عن ضغوط المهام اليومية.' 
  },
  { 
    icon: 'fa-briefcase', 
    title: 'دعم تأسيس الشركات', 
    desc: 'نقدم استشارات إدارية وقانونية للمستقلين والشركات الناشئة لمساعدتهم في اتخاذ خطواتهم الأولى بثبات.' 
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">ماذا نقدم في مشكاة؟</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">باقة خدماتنا المتكاملة لبيئة عمل مثالية</h3>
          <p className="text-slate-500 text-lg leading-relaxed">نحن نوفر لك كافة الأدوات والمرافق التي تضمن لك أعلى مستويات الإنتاجية والراحة، لتتمكن من التركيز على ما تفعله ببراعة.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group text-right">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 text-2xl mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                <i className={`fas ${s.icon}`}></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Why Us Section ---
export const WhyUs: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
         <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" alt="Work community" className="object-cover w-full h-full" />
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-right">
            <h2 className="text-amber-500 font-bold mb-4">لماذا مشكاة وورك سبيس؟</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-10 leading-tight">اختر المكان الذي <br/>يقدر طموحك</h3>
            <ul className="space-y-6">
              {[
                { title: 'موقع استراتيجي', desc: 'في قلب مدينة نصر، بالقرب من الحديقة الدولية ومحاور الحركة.' },
                { title: 'سمعة موثوقة', desc: 'تقييم مثالي 5.0 من عملائنا يؤكد التزامنا بأعلى المعايير.' },
                { title: 'مرونة فائقة', desc: 'باقات يومية وشهرية تناسب ميزانيتك واحتياجاتك المتغيرة.' },
                { title: 'مجتمع نشط', desc: 'بيئة مهنية تسمح لك بتوسيع شبكة علاقاتك المهنية.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex justify-center">
             <div className="bg-amber-500/10 p-12 rounded-full border border-amber-500/20 backdrop-blur-sm animate-pulse">
                <div className="text-center">
                   <div className="text-7xl font-black text-amber-500 mb-2">5.0</div>
                   <div className="flex text-amber-500 text-2xl justify-center mb-4">
                      {[1, 2, 3, 4, 5].map(i => <i key={i} className="fas fa-star"></i>)}
                   </div>
                   <div className="text-slate-300 font-bold">ثقة عملائنا هي سر نجاحنا</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Testimonials Section ---
const reviews = [
  { name: 'أحمد محمود', role: 'مطور واجهات', text: 'أفضل مكان عمل جربته في مدينة نصر، الهدوء والإنترنت هناك ممتازين جداً والناس ودودين للغاية.' },
  { name: 'سارة إبراهيم', role: 'مصممة جرافيك', text: 'المكان مريح نفسياً جداً، الإضاءة وتقسيمة المكاتب بتخليني أخلص شغلي بتركيز عالي. شكراً مشكاة.' },
  { name: 'كريم خالد', role: 'رائد أعمال ناشئ', text: 'قاعات الاجتماعات مجهزة باحترافية وتساعدنا جداً في مقابلة عملائنا وإبهارهم. تجربة رائعة.' }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-bold mb-4">آراء العملاء</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900">قصص نجاح بدأت من هنا</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 relative">
              <i className="fas fa-quote-right text-amber-500/10 text-6xl absolute top-6 right-6"></i>
              <div className="flex text-amber-400 mb-4">
                 {[1, 2, 3, 4, 5].map(j => <i key={j} className="fas fa-star text-sm"></i>)}
              </div>
              <p className="text-slate-600 mb-8 italic leading-relaxed">"{r.text}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{r.name}</h4>
                <p className="text-amber-600 text-sm">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Location & Contact Section ---
export const LocationContact: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-slate-50 border-t">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div id="contact-details">
            <h2 className="text-slate-900 text-3xl font-black mb-8">زورونا اليوم</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber-500 text-xl flex-shrink-0">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-lg">العنوان</h4>
                  <p className="text-slate-600">29 محمد فريد أبو حديد، الحديقة الدولية، مدينة نصر، القاهرة</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber-500 text-xl flex-shrink-0">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-lg">ساعات العمل</h4>
                  <p className="text-slate-600">مفتوح يومياً لخدمتكم</p>
                  <p className="text-slate-600 font-bold uppercase">حتى 11:30 مساءً</p>
                </div>
              </div>

              <div className="flex gap-6 items-start" id="contact">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber-500 text-xl flex-shrink-0">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-lg">تواصل معنا</h4>
                  <p className="text-slate-600 mb-4">اتصل بنا أو تواصل عبر واتساب</p>
                  <a href="tel:01034700041" className="text-amber-600 font-black text-2xl block mb-2">01034700041</a>
                  <div className="flex gap-4">
                     <a href="https://www.instagram.com/" target="_blank" className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl">
                        <i className="fab fa-instagram"></i>
                     </a>
                     <a href="https://wa.me/201034700041" target="_blank" className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white text-xl">
                        <i className="fab fa-whatsapp"></i>
                     </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.2201657640478!2d31.332308769537482!3d30.043086898436534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f007b400bab%3A0x8676d4e584b273fa!2sMishkat%20WorkSpaces!5e0!3m2!1sar!2seg!4v1736423000000!5m2!1sar!2seg" 
              className="w-full h-full border-0" 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer Section ---
export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center text-white font-bold">M</div>
            <span className="text-xl font-extrabold tracking-tight">Mishkat <span className="text-amber-500 text-sm">WorkSpaces</span></span>
          </div>
          <div className="text-slate-400 text-sm text-center md:text-right">
            © {new Date().getFullYear()} مشكاة وورك سبيس - جميع الحقوق محفوظة. 
            <p className="mt-1">صُمم بشغف لدعم المبدعين في مصر.</p>
          </div>
          <div className="flex gap-6 text-xl">
            <a href="#" className="hover:text-amber-500 transition-colors"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
