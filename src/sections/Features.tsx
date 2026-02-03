import { Check, Sparkles, Users, BookOpen, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    text: 'AI赋能红色教育',
  },
  {
    icon: BookOpen,
    text: '沉浸式叙事体验',
  },
  {
    icon: Users,
    text: '多模态交互学习',
  },
  {
    icon: Lightbulb,
    text: '政策导向 · 德育创新',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-700">关于我们</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-red-600">"星火延生"</span>是谁？
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Interface Image */}
              <div className="col-span-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-amber-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <img
                  src="/images/智能体界面.png"
                  alt="智能体对话界面"
                  className="relative w-full rounded-2xl shadow-xl border border-red-100"
                />
              </div>
              {/* Character Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-red-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <img
                  src="/images/星火延生角色形象插画-可以只用圆形把人物圈出来.jpg"
                  alt="延生角色形象"
                  className="relative w-full rounded-2xl shadow-xl border border-red-100 object-cover aspect-square"
                />
              </div>
              {/* Stats Card */}
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-xl p-6 flex flex-col justify-center text-white">
                <div className="text-4xl font-bold mb-2">2025</div>
                <div className="text-red-100">抗战胜利80周年</div>
                <div className="mt-4 text-sm text-red-100">
                  特别企划 · 传承红色基因
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <span className="font-semibold text-red-700">"星火延生"</span>是一款专为
                <span className="font-bold text-red-600">6-12岁小学生</span>设计的
                <span className="font-semibold">沉浸式红色教育智能体</span>，
                <span className="bg-gradient-to-r from-red-100 to-amber-100 px-2 py-1 rounded font-medium">
                  以AI技术赋能爱国主义教育，让中华民族璀璨历史的"遗韵"在技术创新中焕发"新生"
                </span>。
              </p>
              <p className="text-lg">
                它寓意着<span className="font-semibold text-amber-600">"星星之火，如人民大学般生于延安，终将燎原"</span>。
              </p>
              <p className="text-lg">
                项目<span className="font-bold text-red-700">由清华、北大、人大等高校跨理、工、文、商专业的5位成员共同打造</span>，
                其创新性体现于<span className="font-semibold text-red-600">三大"叙事引擎"</span>：
              </p>
            </div>

            {/* Three Engines */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-red-50 rounded-xl p-4 border border-red-100 hover:shadow-md transition-shadow">
                <div className="text-red-600 font-bold text-lg mb-1">"智慧说书人"</div>
                <div className="text-sm text-gray-600">实现个性化叙事</div>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 hover:shadow-md transition-shadow">
                <div className="text-amber-600 font-bold text-lg mb-1">"历史抉择时刻"</div>
                <div className="text-sm text-gray-600">打造沉浸式剧本杀互动</div>
              </div>
              <div className="bg-red-50 rounded-xl p-4 border border-red-100 hover:shadow-md transition-shadow">
                <div className="text-red-600 font-bold text-lg mb-1">"精神时空漂流瓶"</div>
                <div className="text-sm text-gray-600">完成古今价值衔接</div>
              </div>
            </div>

            {/* Additional Info */}
            <p className="text-gray-700 leading-relaxed">
              引导儿童<span className="font-bold text-red-600">从"倾听者"转变为"体验者"与"思考者"</span>。
              精准响应德育政策导向，垂直填补低龄段红色教育产品空白，依托多模态知识库与情感化IP切实提升教育的感染力与实效性，
              致力于在少年心中播下红色基因，具备显著的社会价值与落地实用性。
            </p>

            <p className="text-gray-700">
              目前项目已与小荷公益事业发展中心、北京益它中心等多家企业或组织达成初步合作意向，
              <span className="font-semibold text-red-600">期待进一步与更多优秀企业、组织进行合作</span>。
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-amber-50 rounded-full border border-red-100"
                >
                  <Check className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
