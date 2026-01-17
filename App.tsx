
import React, { useState, useEffect } from 'react';

const MishkatLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'F' | 'G'>('F');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const spacesF = [
    {
      id: "F1",
      title: "مساحة عمل F1 (إدارية)",
      desc: "غرفة 5×5م، مكتب مدير فخم، سكرتارية، وطاولة اجتماعات دائرية. مثالية للشركات الناشئة.",
      capacity: "5 أفراد",
      prices: { hour: "199", day: "1,599", month: "26,999" },
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "F2",
      title: "مساحة عمل F2 (مشتركة)",
      desc: "14 مكتباً مشتركاً في بيئة مكيفة وهادئة مع بلكونة. مثالية للمستقلين والطلاب.",
      capacity: "14 فرد",
      prices: { hour: "30", day: "130", month: "2,000" },
      image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "F3",
      title: "مساحة عمل F3 (مكتب فردي)",
      desc: "غرفة 3×3م خاصة، مكتبين وخزانة. خصوصية تامة لاستقبال العملاء أو الموظفين.",
      capacity: "2 أفراد",
      prices: { hour: "130", day: "950", month: "9,000" },
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "F4",
      title: "مساحة عمل F4 (قاعة اجتماعات)",
      desc: "غرفة اجتماعات ومحاضرات 5×5م، 20 كرسي، بروجكتر وبورد. للورش والدروس الخصوصية.",
      capacity: "20 فرد",
      prices: { hour: "200", day: "1,600", month: "25,000" },
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const spacesG = [
    {
      id: "G1",
      title: "مساحة G1 (الورك شوب)",
      desc: "قاعة واسعة للمناسبات والفعاليات الكبيرة وورش العمل التفاعلية.",
      capacity: "50 فرد",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "G2",
      title: "مساحة G2 (محاضرات)",
      desc: "قاعة محاضرات مشتركة مجهزة بالكامل للتدريب التفاعلي.",
      capacity: "10 أفراد",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "G3",
      title: "مساحة G3 (دروس تعليمية)",
      desc: "قاعة متخصصة للدروس والمحاضرات التعليمية والتدريبية مجهزة بسبورة ووسائل عرض.",
      capacity: "16 فرد",
      image: "https://images.unsplash.com/photo-1524178232363-1fb28f74b671?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "G4",
      title: "مساحة G4 (مكتب خاص)",
      desc: "مكتب فردي خاص بخصوصية عالية جداً للعمل المركز.",
      capacity: "2 أفراد",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201034700041', '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-blue-100 bg-[#f8f9fc] text-slate-900 font-sans leading-normal overflow-x-hidden rtl">
      {/* Lightbox for Images */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md cursor-pointer" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl border-2 border-white/20 animate-fade-in" alt="Preview" />
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-white/90 backdrop-blur-md shadow-sm border-b' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center text-white shadow-md">
              <i className="fa fa-building text-sm"></i>
            </div>
            <div className="flex flex-col leading-none text-right">
              <span className="text-xl font-black text-blue-900 tracking-tight">MISHKAT</span>
              <span className="text-[8px] uppercase tracking-widest text-blue-500 font-bold">Company</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500">
            <a href="#about" className="hover:text-blue-700 transition-colors">عن مشكاة</a>
            <a href="#features" className="hover:text-blue-700 transition-colors">المزايا</a>
            <a href="#spaces" className="hover:text-blue-700 transition-colors">المساحات</a>
            <a href="#services" className="hover:text-blue-700 transition-colors">الخدمات</a>
          </div>
          <button onClick={handleWhatsAppClick} className="bg-blue-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg hover:bg-blue-800 transition-all active:scale-95">
            احجز الآن
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center text-right">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black border border-blue-100 uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                مساحتك المثالية في قلب مدينة نصر
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.15]">
                أسّس عملك في <br />
                بيئة <span className="text-blue-700">مُشكاة</span> الإبداعية
              </h1>
              <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
                لا نمنحك مجرد مكتب، بل نوفر لك نظاماً متكاملاً يدعم نمو مشروعك؛ من تأسيس الشركات قانونياً إلى توفير مساحات عمل ذكية مجهزة بأحدث التقنيات.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button onClick={handleWhatsAppClick} className="bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-100 hover:translate-y-[-2px] transition-all flex items-center gap-3">
                  <i className="fab fa-whatsapp text-xl"></i>
                  ابدأ اليوم: 01034700041
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-slate-50 p-2 bg-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" className="w-full h-[450px] object-cover rounded-[3rem]" alt="Hero" />
              </div>
              <div className="absolute -bottom-10 -right-4 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 hidden md:flex items-center gap-4 animate-fade-in">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <i className="fa fa-check-circle text-2xl"></i>
                </div>
                <div>
                  <div className="text-slate-900 text-xl font-black">أكثر من 500</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">عميل سعيد</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "fa-wifi", title: "إنترنت فائق", desc: "سرعات ألياف ضوئية" },
              { icon: "fa-bolt", title: "كهرباء دائمة", desc: "مولدات للطوارئ" },
              { icon: "fa-coffee", title: "منطقة بوفيه", desc: "مشروبات مجانية" },
              { icon: "fa-shield-alt", title: "أمن 24/7", desc: "كاميرات وحراسة" }
            ].map((feature, i) => (
              <div key={i} className="text-center space-y-3 group">
                <div className="w-16 h-16 mx-auto bg-slate-50 rounded-3xl flex items-center justify-center text-blue-700 text-2xl border border-slate-100 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                  <i className={`fa ${feature.icon}`}></i>
                </div>
                <h4 className="font-bold text-slate-900">{feature.title}</h4>
                <p className="text-xs text-slate-400 font-bold">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Spaces Section */}
      <section id="spaces" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-right">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">مساحات مصممة للنجاح</h2>
              <p className="text-slate-500">اختر البيئة التي تناسب طبيعة عملك، من الهدوء التام إلى التفاعل الجماعي</p>
            </div>
            <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200">
              <button onClick={() => setActiveTab('G')} className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all ${activeTab === 'G' ? 'bg-blue-700 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}>مساحات (G)</button>
              <button onClick={() => setActiveTab('F')} className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all ${activeTab === 'F' ? 'bg-blue-700 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}>مساحات (F)</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(activeTab === 'F' ? spacesF : spacesG).map((space) => (
              <div key={space.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all card-hover group cursor-pointer" onClick={() => setSelectedImage(space.image)}>
                <div className="h-52 relative overflow-hidden">
                  <img src={space.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={space.title} />
                  <div className="absolute top-4 right-4 bg-blue-700 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg">{space.id}</div>
                </div>
                <div className="p-7 space-y-5">
                  <h3 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-blue-700 transition-colors">{space.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed h-12 overflow-hidden">{space.desc}</p>
                  
                  {activeTab === 'F' && 'prices' in space && space.prices && (
                    <div className="bg-slate-50 rounded-2xl p-4 space-y-2.5 text-[11px] font-black">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-700">ج.م {(space.prices as any).hour}</span>
                        <span className="text-slate-400">للساعة</span>
                      </div>
                      <div className="flex justify-between items-center border-t border-slate-200 pt-2.5">
                        <span className="text-blue-700">ج.م {(space.prices as any).day}</span>
                        <span className="text-slate-400">لليوم</span>
                      </div>
                      <div className="flex justify-between items-center border-t border-slate-200 pt-2.5">
                        <span className="text-blue-700 text-sm">ج.م {(space.prices as any).month}</span>
                        <span className="text-slate-400">للشهر</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-[10px] font-black text-slate-400 pt-2 border-t border-slate-50">
                    <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full tracking-wide">{space.capacity}</span>
                    <i className="fa fa-expand-arrows-alt text-blue-100 text-sm"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-16">ماذا يقول شركاء نجاحنا؟</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "أحمد علي", role: "مدير شركة تقنية", text: "مشكاة ليست مجرد مكان للعمل، بل هي شريك في التأسيس. خدماتهم القانونية وفرت علينا شهوراً من الإجراءات." },
              { name: "سارة محمود", role: "مترجمة مستقلة", text: "أفضل مكان للتركيز في مدينة نصر. الإنترنت مستقر جداً والجو العام هادئ ومريح للأعصاب." },
              { name: "محمد فاروق", role: "مدرب تنمية بشرية", text: "القاعات مجهزة بكل ما نحتاجه من وسائل عرض وصوت. التنظيم دائماً يفوق التوقعات." }
            ].map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-[2rem] text-right relative group hover:bg-blue-50 transition-colors">
                <i className="fa fa-quote-right absolute top-8 left-8 text-blue-100 text-4xl"></i>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-black">
                    {t.name[0]}
                  </div>
                  <div className="text-right leading-tight">
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">{t.role}</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Services */}
      <section id="services" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center text-right relative z-10">
          <div className="space-y-8 order-2 md:order-1">
            <h2 className="text-4xl font-black leading-[1.2]">خبراء التأسيس <br /> <span className="text-blue-500 text-3xl">داخل وخارج مصر</span></h2>
            <div className="space-y-8">
              {[
                { t: "تأسيس الشركات محلياً", d: "استخراج السجل التجاري والبطاقة الضريبية وتأسيس شركات الأشخاص والأموال.", i: "fa-stamp" },
                { t: "التأسيس الدولي", d: "تأسيس فروعك في (USA, UK, Canada) مع توفير عناوين تجارية موثقة.", i: "fa-globe-americas" },
                { t: "التنظيم والفعاليات", d: "إدارة كاملة للمؤتمرات، ورش العمل، واجتماعات مجلس الإدارة.", i: "fa-users-cog" }
              ].map((s, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-grow">
                    <h4 className="font-bold text-xl text-white mb-2 group-hover:text-blue-400 transition-colors">{s.t}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{s.d}</p>
                  </div>
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 text-xl border border-white/10 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <i className={`fa ${s.i}`}></i>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleWhatsAppClick} className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black shadow-2xl hover:bg-blue-700 transition-all active:scale-95">استشارة مجانية الآن</button>
          </div>
          <div className="relative order-1 md:order-2">
             <div className="aspect-square bg-blue-900/50 rounded-[4rem] p-4 shadow-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover rounded-[3.5rem] opacity-70" alt="Services" />
             </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center text-right">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-black">تفضل بزيارتنا</div>
            <h2 className="text-4xl font-black text-slate-900 leading-tight tracking-tight">موقع استراتيجي <br /> لنمو أعمالك</h2>
            <p className="text-slate-500 leading-relaxed">نتواجد في أكثر المناطق حيوية بمدينة نصر، محاطين بكافة الخدمات التي قد تحتاجها شركتك أو فريق عملك.</p>
            <div className="space-y-8 pt-4">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-700 text-xl border border-slate-100 shrink-0"><i className="fa fa-map-marker-alt"></i></div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg mb-1 text-right">العنوان</h4>
                  <p className="text-sm text-slate-500 text-right">37 شارع محمد فريد أبو حديد، الحديقة الدولية، مدينة نصر، القاهرة</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-green-600 text-xl border border-slate-100 shrink-0"><i className="fab fa-whatsapp"></i></div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg mb-1 text-right">التواصل السريع</h4>
                  <p className="text-sm text-slate-500 text-right" dir="ltr">01034700041</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-slate-50">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6!2d31.332!3d30.044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzQwLjAiTiAzMcKwMTknNTYuMyJF!5e0!3m2!1sen!2seg!4v1634567890"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              title="Mishkat Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 text-right mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <i className="fa fa-building text-sm"></i>
                </div>
                <span className="text-2xl font-black text-blue-900 tracking-tight">MISHKAT</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                شركة مشكاة للتأسيس والتأجير، نقدم حلولاً ذكية لرواد الأعمال والشركات الناشئة لتمكينهم من التركيز على الإبداع بينما نتولى نحن إدارة المكان والإجراءات.
              </p>
              <div className="flex gap-4">
                {['instagram', 'facebook', 'linkedin', 'whatsapp'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-700 hover:border-blue-200 transition-all">
                    <i className={`fab fa-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h5 className="font-black text-slate-900">روابط سريعة</h5>
              <ul className="space-y-4 text-sm text-slate-400 font-bold">
                <li><a href="#about" className="hover:text-blue-700">عن مشكاة</a></li>
                <li><a href="#spaces" className="hover:text-blue-700">مساحات العمل</a></li>
                <li><a href="#services" className="hover:text-blue-700">خدمات التأسيس</a></li>
                <li><a href="#location" className="hover:text-blue-700">الموقع</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-black text-slate-900">ساعات العمل</h5>
              <ul className="space-y-4 text-sm text-slate-400 font-bold">
                <li>نحن نعمل طوال أيام الأسبوع</li>
                <li>09:00 ص - 10:00 م</li>
                <li className="text-blue-600 italic">مفتوح يوم الجمعة كالمعتاد</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-200 text-center text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] space-y-2">
            <div>© 2024 Mishkat Company. All Rights Reserved.</div>
            <div className="text-blue-200">صُنع بكل حب لدعم رواد الأعمال في مصر</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MishkatLanding;
