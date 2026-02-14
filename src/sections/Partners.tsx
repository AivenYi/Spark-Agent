import { Sparkles, Trophy, MapPin, Calendar, ExternalLink, ArrowRight } from 'lucide-react';

const honors = [
  {
    title: '2025年中国人民大学"AI火种"大赛',
    award: '二等奖',
    icon: Trophy,
  },
  {
    title: '入选《人大AI智能体应用白皮书》',
    award: '收录',
    icon: Trophy,
  },
  {
    title: '北京市大学生"人工智能+"创新大赛',
    award: '三等奖',
    icon: Trophy,
  },
];

const partners = [
  { name: '小荷公益事业发展中心', logo: '/images/小荷公益logo.jpg' },
  { name: '中国人民大学文学院青年志愿者协会', logo: '/images/人大文院青协logo.png' },
  { name: '爱烛轩科技', logo: '/images/爱烛轩科技logo.jpg' },
  { name: 'Way to AGI', logo: '/images/画板 1WaytoAGI无文字Logo.png' },
  { name: '中国石油大学（北京）校青协', logo: '/images/中石油校青协logo.png' },
  { name: '江西省贵溪市文坊中小学', logo: '/images/江西省贵溪市文坊中小学logo.jpg' },
];

const footprints = [
  {
    title: '"星火延生"团队走进江西省贵溪市文坊中小学',
    link: 'https://mp.weixin.qq.com/s/DsvBlGerktVVPhFMO2XJKg',
    date: '已完成',
    icon: MapPin,
  },
  {
    title: '"星火延生"团队亮相第21期AI切磋大会（南昌）',
    link: null,
    date: '已完成',
    icon: MapPin,
  },
  {
    title: '走进北京市海淀区潘庄居委会、上地西里社区',
    link: null,
    date: '2026年3月',
    icon: Calendar,
  },
  {
    title: '山东省泰安市北实小学合作',
    link: null,
    date: '2026年3月',
    icon: Calendar,
  },
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 lg:py-28 bg-gradient-to-b from-red-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-700">合作与荣誉</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            荣誉奖项与<span className="text-red-600">合作伙伴</span>
          </h2>
        </div>

        {/* Honors & Partners Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Honors */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-amber-500" />
              荣誉奖项
            </h3>
            <div className="space-y-4">
              {honors.map((honor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex items-center gap-4"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center flex-shrink-0">
                    <honor.icon className="w-7 h-7 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{honor.title}</h4>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full text-sm font-bold">
                    {honor.award}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Partners */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-red-500" />
              合作墙
            </h3>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-red-50 transition-colors border border-gray-100 hover:border-red-200"
                  >
                    {partner.logo ? (
                      <div className="w-16 h-16 rounded-lg bg-gray-50 p-2 flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-red-100 to-amber-100 flex items-center justify-center">
                        <span className="text-2xl font-bold text-red-600">W</span>
                      </div>
                    )}
                    <span className="text-xs text-gray-600 text-center line-clamp-2">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-100 to-amber-100 rounded-full text-red-700 font-medium">
                  <Sparkles className="w-4 h-4" />
                  未完待续......
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Spark Footprints */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <MapPin className="w-6 h-6 text-red-500" />
            星火足迹
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {footprints.map((footprint, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all ${
                  footprint.link ? 'cursor-pointer' : ''
                }`}
                onClick={() => footprint.link && window.open(footprint.link, '_blank')}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    footprint.date === '已完成'
                      ? 'bg-red-100'
                      : 'bg-amber-100'
                  }`}>
                    <footprint.icon className={`w-5 h-5 ${
                      footprint.date === '已完成'
                        ? 'text-red-600'
                        : 'text-amber-600'
                    }`} />
                  </div>
                  <div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      footprint.date === '已完成'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {footprint.date}
                    </span>
                  </div>
                </div>
                <h4 className="font-medium text-gray-900 text-sm leading-relaxed">
                  {footprint.title}
                </h4>
                {footprint.link && (
                  <div className="mt-3 flex items-center gap-1 text-red-600 text-sm">
                    <span>查看详情</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Future Plan */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                "星火X100英雄"公益计划
              </h3>
              <p className="text-red-100 leading-relaxed mb-6">
                2026年3月，我们将走进北京市海淀区潘庄居委会、上地西里社区，以及山东省泰安市北实小学等展开合作。
                我们将与全国各大高校的青年志愿者协会、全国各公益组织等携手，以"志愿者+延生"分享英雄故事，
                促进科技与童心的融合、历史与体验的共鸣。
              </p>
              <div className="flex items-center gap-2 text-amber-300">
                <Sparkles className="w-5 h-5" />
                <span className="font-medium">期待与您携手同行</span>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-sm">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">100+</div>
                  <div className="text-red-100">计划合作单位</div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-red-100">已达成合作意向</span>
                    <span className="font-bold">6+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-6">
            我们期待与更多企业、组织携手，让红色教育走进更多课堂，让历史<span className="text-red-600 font-bold">"活起来"</span>！
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-red-200"
          >
            联系我们
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
