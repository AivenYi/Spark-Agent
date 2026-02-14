import { ArrowRight, Sparkles, MessageSquare, Play, ShieldCheck, Zap } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: '初始化对话',
    titleEn: 'Initialize Dialog',
    description: '通过智能体门户进入，唤醒您的AI导学伙伴“延生”。',
    descriptionEn: 'Enter through the agent portal and wake up your AI learning partner "Yansheng".',
    icon: MessageSquare,
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: '02',
    title: '选择叙事引擎',
    titleEn: 'Choose Engine',
    description: '从“智慧说书人”、“历史抉择”或“红色讲解员”中选择学习模式。',
    descriptionEn: 'Select a mode from "Smart Storyteller", "Historical Choice", or "Red Guide".',
    icon: Zap,
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    id: '03',
    title: '沉浸式互动',
    titleEn: 'Immersive Interaction',
    description: 'AI根据孩子年龄生成个性化内容，通过互动问答和多轮对话深入学习。',
    descriptionEn: 'AI generates personalized content and facilitates learning through interactive Q&A.',
    icon: Play,
    color: 'bg-red-50',
    iconColor: 'text-red-800',
  },
  {
    id: '04',
    title: '知识内化与反馈',
    titleEn: 'Feedback & Learning',
    description: '完成任务挑战，获得红色勋章，将历史感悟转化为成长的力量。',
    descriptionEn: 'Complete challenges, earn medals, and turn historical insights into personal growth.',
    icon: ShieldCheck,
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-red-800" />
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Workflow</span>
            <span className="text-sm font-semibold text-gray-800 ml-1">应用过程</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            开启您的 <span className="text-red-800 italic">"延生"</span> 探索之旅
          </h2>
          <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto uppercase tracking-widest text-xs">
            Start Your Journey with Yansheng · Experience the Future of Red Education
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-12 z-0" />
          {steps.map((step, index) => (
            <div key={step.id} className="relative z-10 group">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                  </div>
                  <span className="text-4xl font-black text-gray-100 group-hover:text-red-50 transition-colors duration-300">
                    {step.id}
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{step.titleEn}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                    <p className="text-gray-400 text-xs italic leading-snug">
                      {step.descriptionEn}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-12 items-center justify-center text-gray-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-block p-1 bg-white rounded-full border border-gray-100 shadow-sm">
             <div className="px-6 py-2 rounded-full bg-gray-50 text-sm text-gray-500 font-medium">
               基于最新大模型技术架构实现全流程智能交互
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
