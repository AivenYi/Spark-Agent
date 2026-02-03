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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100/80 backdrop-blur-sm rounded-full border border-red-200">
              <Sparkles className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-700">
                AI + 红色教育创新项目
              </span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-red-700">星火延生</span>
                <span className="text-gray-800"> · 让红色历史</span>
                <br />
                <span className="text-gradient-red">"活"起来</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 font-medium">
                沉浸式AI+公益教育智能体
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
              专为6-12岁小学生设计的红色教育智能体，以AI技术赋能爱国主义教育，
              让中华民族璀璨历史的"遗韵"在技术创新中焕发"新生"。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => window.open('https://www.coze.cn/store/agent/7575196766925176872?bid=6iqcr91cg100f', '_blank')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-200 transition-all duration-300 group"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                立即体验
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#features')}
                className="border-2 border-red-300 text-red-700 hover:bg-red-50 px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                了解更多
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">6-12岁</div>
                <div className="text-sm text-gray-500">目标年龄段</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">3大</div>
                <div className="text-sm text-gray-500">叙事引擎</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">多校</div>
                <div className="text-sm text-gray-500">合作意向</div>
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
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
