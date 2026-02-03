import { Mic, Puzzle, Mail, Sparkles } from 'lucide-react';

const engines = [
  {
    icon: Mic,
    title: '智慧说书人',
    description: '个性化叙事，还原历史场景与人物情感',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    features: ['AI语音合成', '情感化表达', '场景还原'],
  },
  {
    icon: Puzzle,
    title: '历史抉择时刻',
    description: '沉浸式"剧本杀"互动，让孩子亲历历史选择',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    features: ['角色扮演', '分支剧情', '互动决策'],
  },
  {
    icon: Mail,
    title: '精神时空漂流瓶',
    description: '古今对话，引导孩子思考精神传承',
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-50 to-amber-50',
    borderColor: 'border-red-200',
    features: ['跨时空对话', '价值观引导', '精神传承'],
  },
];

export default function Functions() {
  return (
    <section id="functions" className="py-20 lg:py-28 bg-gradient-to-b from-white to-red-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-700">核心功能</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            三大引擎 · 让孩子从<span className="text-red-600">"听故事"</span>
            <br className="hidden sm:block" />
            到<span className="text-gradient-red">"成为故事的一部分"</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            通过创新的AI技术，我们打造了三大叙事引擎，让红色教育变得更加生动有趣
          </p>
        </div>

        {/* Three Engines Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {engines.map((engine, index) => (
            <div
              key={index}
              className={`group relative ${engine.bgColor} rounded-3xl p-8 border-2 ${engine.borderColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${engine.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <engine.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {engine.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {engine.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {engine.features.map((feature, fIndex) => (
                  <div
                    key={fIndex}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${engine.color}`} />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-2xl shadow-lg border border-red-100">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <Mic className="w-5 h-5 text-red-600" />
              </div>
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <Puzzle className="w-5 h-5 text-amber-600" />
              </div>
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <Mail className="w-5 h-5 text-red-600" />
              </div>
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">三大引擎协同工作</div>
              <div className="text-sm text-gray-500">打造沉浸式红色教育体验</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
