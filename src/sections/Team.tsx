import { Sparkles, GraduationCap, Code, Heart, Briefcase } from 'lucide-react';

const universities = [
  { name: '中国人民大学', logo: '/images/人大logo.png' },
  { name: '清华大学', logo: '/images/清华logo.png' },
  { name: '中国石油大学', logo: '/images/中石油logo.png' },
  { name: '江西软件职业技术大学', logo: '/images/江软logo.png' },
];

const teamMembers = [
  {
    title: '星火创生者',
    name: '董丁毓',
    image: '/images/董.png',
    color: 'from-red-500 to-red-600',
  },
  {
    title: '源焰守护人',
    name: '周伊江',
    image: '/images/周.png',
    color: 'from-amber-500 to-amber-600',
  },
  {
    title: '淬焰精工师',
    name: '易海',
    image: '/images/易.png',
    color: 'from-red-500 to-amber-500',
  },
  {
    title: '心光引燃人',
    name: '卢昊禹',
    image: '/images/卢.png',
    color: 'from-amber-500 to-red-500',
  },
  {
    title: '智炬擎光者',
    name: '胡承鑫',
    image: '/images/胡.png',
    color: 'from-red-600 to-red-500',
  },
  {
    title: '渡焰引川人',
    name: '赵博轩',
    image: '/images/赵.png',
    color: 'from-amber-600 to-amber-500',
  },
];

const expertise = [
  { icon: GraduationCap, label: '文科', desc: '历史叙事' },
  { icon: Code, label: '工科', desc: '技术开发' },
  { icon: Briefcase, label: '商科', desc: '商业运营' },
  { icon: Heart, label: '公益', desc: '社会价值' },
];

export default function Team() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-700">团队介绍</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            来自<span className="text-red-600">清华、北大、人大</span>等高校的
            <br className="hidden sm:block" />
            <span className="text-gradient-red">跨学科团队</span>
          </h2>
        </div>

        {/* University Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-24 h-24 rounded-xl bg-gray-50 p-3 flex items-center justify-center group-hover:bg-red-50 transition-colors border border-gray-100 group-hover:border-red-200">
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-xs text-gray-500 text-center">{uni.name}</span>
            </div>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Title Header */}
              <div className={`bg-gradient-to-r ${member.color} p-4 text-center`}>
                <h3 className="text-white font-bold text-lg">{member.title}</h3>
              </div>

              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Name Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg text-center">
                  <span className="font-bold text-gray-900 text-lg">{member.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Section */}
        <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">团队专业背景</h3>
            <p className="text-gray-600">涵盖理、工、文、商专业，兼具技术、公益与丰富的商业经验</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="font-bold text-gray-900 mb-1">{item.label}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
