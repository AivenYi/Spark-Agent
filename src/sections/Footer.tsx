import { MessageCircle, ArrowUp, Sparkles, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: '首页', href: '#home' },
  { label: '产品特色', href: '#features' },
  { label: '核心功能', href: '#functions' },
  { label: '团队故事', href: '#team' },
  { label: '合作与荣誉', href: '#partners' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left - Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/生成星火延生组织 logo-纯图标版.png"
                alt="星火延生"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">星火延生</h3>
                <p className="text-sm text-gray-400">让红色历史"活"起来</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              专为6-12岁小学生设计的沉浸式红色教育智能体，以AI技术赋能爱国主义教育，
              让中华民族璀璨历史的"遗韵"在技术创新中焕发"新生"。
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>AI + 红色教育创新项目</span>
            </div>
          </div>

          {/* Center - Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6">快速导航</h4>
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-gray-400 hover:text-red-400 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">联系我们</h4>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-sm text-gray-400 mb-1">微信联系</div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <span className="font-mono text-lg">BaorongLixingWenhe</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button
                  onClick={() => window.open('https://www.coze.cn/store/agent/7575196766925176872?bid=6iqcr91cg100f', '_blank')}
                  className="flex-1 bg-red-600 hover:bg-red-700"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  体验Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>© 2026 星火延生团队</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">保留所有权利</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>用</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>打造 · 传承红色基因</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-sm"
            >
              <span>返回顶部</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
