import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/星火延生问答的背景-备用.png"
          alt="背景"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 backdrop-blur-sm rounded-full border border-red-100/50">
              <Sparkles className="w-4 h-4 text-red-800" />
              <span className="text-xs font-bold tracking-wider text-red-900/40 uppercase mr-1">Innovation</span>
              <span className="text-sm font-semibold text-red-800">
                AI + 红色教育创新项目
              </span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900">
                <span className="text-red-800">星火延生</span>
                <span className="text-gray-400 font-light mx-2">|</span>
                <span className="text-gray-800 italic font-serif">Spark of Yan'an</span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl mt-2 block font-medium text-gray-700">
                  让红色历史 <span className="text-gradient-red">"活"起来</span>
                </span>
              </h1>
              <div className="flex items-center gap-3 py-2">
                <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                  沉浸式AI+公益教育智能体
                </p>
                <span className="h-px w-12 bg-gray-300"></span>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">
                  Immersive AI Agent
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <p className="text-gray-600 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                专为6-12岁小学生设计的红色教育智能体，以AI技术赋能爱国主义教育，
                让中华民族璀璨历史的"遗韵"在技术创新中焕发"新生"。
              </p>
              <p className="text-gray-400 text-sm italic max-w-xl mx-auto lg:mx-0">
                Red education AI agent for primary students, empowering patriotism through 
                technological innovation and historical heritage.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#process')}
                className="border-2 border-gray-200 text-gray-800 hover:bg-white px-10 py-7 text-lg rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base font-bold">了解过程</span>
                  <span className="text-[10px] opacity-70 uppercase tracking-widest text-gray-400">View Process</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 justify-center lg:justify-start pt-6">
              <div className="group">
                <div className="text-3xl font-bold text-red-800 flex items-baseline gap-1">
                  6-12
                  <span className="text-sm font-medium text-gray-400">Age</span>
                </div>
                <div className="text-sm text-gray-500 font-medium">目标年龄段</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-red-800 flex items-baseline gap-1">
                  3
                  <span className="text-sm font-medium text-gray-400">Engines</span>
                </div>
                <div className="text-sm text-gray-500 font-medium">叙事引擎</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-red-800 flex items-baseline gap-1">
                  Global
                  <span className="text-sm font-medium text-gray-400">Vision</span>
                </div>
                <div className="text-sm text-gray-500 font-medium">国际视野</div>
              </div>
            </div>
          </div>

          {/* Right Content - Character Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/30 to-amber-400/30 rounded-full blur-3xl scale-110" />
              
              {/* Character Image */}
              <img
                src="/images/延生个人ip-无背景版.png"
                alt="延生角色"
                className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-2xl animate-float"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-400/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-400/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
          <button
            onClick={() => scrollToSection('#features')}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
          >
            <ChevronDown className="w-6 h-6 text-red-600" />
          </button>
        </div>
      </div>

      {/* Add float animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
