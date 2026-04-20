import React from 'react';
import { 
  FileText, 
  PenTool, 
  Calendar, 
  ListTodo, 
  Users, 
  Trophy, 
  TrendingUp, 
  UserPlus, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const MERCURY_APP_URL = "https://study-tracker-rzbj.vercel.app";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  badge?: string;
}

const FeatureCard: React.FC<Feature> = ({ icon: Icon, title, description, badge }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="card-future p-8 group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-mercury-blue/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-mercury-blue/10 transition-all"></div>
    <div className="mb-6 inline-flex p-4 bg-slate-50 rounded-2xl text-mercury-blue group-hover:bg-mercury-blue group-hover:text-white transition-all duration-300">
      <Icon size={28} />
    </div>
    {badge && (
      <span className="absolute top-8 right-8 text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-mercury-purple/10 text-mercury-purple rounded-md border border-mercury-purple/20">
        {badge}
      </span>
    )}
    <h3 className="text-xl font-bold mb-4 group-hover:text-mercury-blue transition-colors text-mercury-text">{title}</h3>
    <p className="text-mercury-muted leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const Home = ({ Logo }: { Logo: any }) => {
  const { t, language } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full border border-mercury-blue/10 bg-mercury-blue/5 text-mercury-blue text-sm font-bold mb-8 uppercase tracking-widest">
              {t('hero.badge')}
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tight leading-[1.1] md:leading-[1.05] text-mercury-text">
              {t('hero.title_part1')}<span className="text-gradient">{t('hero.title_accent')}</span><br />
              {t('hero.title_part2')}
            </h1>
            <p className="text-lg md:text-xl text-mercury-muted max-w-2xl mx-auto mb-12 leading-relaxed">
              {t('hero.description')}
            </p>
          </motion.div>

          {/* Prominent Logo in Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mt-32 relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-mercury-blue/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="relative inline-block group mb-16">
              <div className="absolute -inset-8 bg-linear-to-tr from-mercury-blue/20 to-mercury-purple/20 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <Logo className="relative w-48 h-48 md:w-72 md:h-72 rounded-[3.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] bg-white p-6 border border-white/80 group-hover:scale-105 transition-transform duration-1000 ease-out" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-12 pointer-events-none"
              >
                <div className="w-4 h-4 bg-mercury-blue/40 rounded-full absolute top-0 left-1/2 blur-[1px]"></div>
              </motion.div>
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-20 pointer-events-none"
              >
                <div className="w-3 h-3 bg-mercury-purple/40 rounded-full absolute bottom-0 left-1/4 blur-[1px]"></div>
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href={MERCURY_APP_URL} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-mercury-text text-white px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-3 group">
                {t('hero.cta')}
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="py-24 bg-white relative z-10 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-mercury-text">
                {t('abstract.title')}
              </h2>
              <div className="space-y-8">
                {[
                  { icon: CheckCircle2, color: 'text-mercury-blue', title: t('abstract.reason1_title'), desc: t('abstract.reason1_desc') },
                  { icon: CheckCircle2, color: 'text-mercury-cyan', title: t('abstract.reason2_title'), desc: t('abstract.reason2_desc') },
                  { icon: CheckCircle2, color: 'text-mercury-purple', title: t('abstract.reason3_title'), desc: t('abstract.reason3_desc') },
                ].map((reason, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center ${reason.color}`}>
                      <reason.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-mercury-text">{reason.title}</h4>
                      <p className="text-mercury-muted">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-linear-to-br from-mercury-blue/10 to-mercury-purple/10 blur-[80px] -z-10"></div>
              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl text-center">
                <div className="text-sm font-bold text-mercury-blue uppercase tracking-widest mb-2">User Voices</div>
                <p className="text-2xl font-display italic text-mercury-text font-medium mb-8 leading-relaxed">
                  {language === 'ja' 
                    ? '「今まで使った中で一番、勉強がゲームみたいに楽しくなった。」' 
                    : '"The best tool I\'ve used. It turned studying into something as fun as a game."'}
                </p>
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-mercury-blue to-mercury-purple"></div>
                  <div>
                    <div className="font-bold text-mercury-text">慶應義塾大学 / 1年生</div>
                    <div className="text-xs text-mercury-muted text-left">Mercury歴: 3ヶ月</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 text-mercury-text">{t('features.title')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {( [
              { icon: FileText, title: t('features.card1_title') as string, description: t('features.card1_desc') as string },
              { icon: PenTool, title: t('features.card2_title') as string, description: t('features.card2_desc') as string, badge: 'Safe' },
              { icon: Calendar, title: t('features.card3_title') as string, description: t('features.card3_desc') as string },
              { icon: ListTodo, title: "Todoリスト", description: "一日のやるべき事を最小単位に分解。" },
              { icon: Users, title: "ルーム機能", description: "同じ目標の仲間とルームを作成。" },
              { icon: Trophy, title: "スタラン", description: "勉強時間ランキング機能。" },
              { icon: TrendingUp, title: "レベルアップ", description: "学習時間＝経験値システム。" },
              { icon: UserPlus, title: "フォロー・交流", description: "高め合えるSNS体験。" },
            ] as Feature[]).map((f, i) => (
              <FeatureCard key={i} icon={f.icon} title={f.title} description={f.description} badge={f.badge} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & PDF Deep Dive */}
      <section id="trust" className="py-24 overflow-hidden relative bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative inline-block mb-12">
            <div className="absolute inset-0 bg-mercury-blue/20 blur-2xl rounded-full scale-150"></div>
            <div className="relative bg-white w-24 h-24 rounded-3xl shadow-xl flex items-center justify-center border border-slate-100 overflow-hidden">
              <Logo className="w-full h-full p-5" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-mercury-text">{t('trust.title')}</h2>
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] text-left shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-mercury-text">
              <span className="w-1.5 h-6 bg-mercury-blue rounded-full"></span>
              {t('trust.pdf_title')}
            </h3>
            <p className="text-mercury-text leading-loose mb-8 font-medium">
              <span className="text-mercury-blue font-bold">{t('trust.pdf_desc1')}</span><br /><br />
              <span className="text-mercury-muted font-normal">{t('trust.pdf_desc2')}</span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-20 text-center">
            <HelpCircle className="text-mercury-blue" size={32} />
            <h2 className="text-4xl font-bold text-mercury-text">{t('faq.title')}</h2>
          </div>
          
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-future p-8">
                <h4 className="text-xl font-bold mb-4 flex gap-4 text-mercury-text">
                  <span className="text-mercury-blue">Q.</span> {t(`faq.q${i}`)}
                </h4>
                <p className="text-mercury-muted leading-relaxed pl-10">
                  {t(`faq.a${i}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-linear-to-br from-mercury-blue/5 to-mercury-purple/5 blur-[120px] -z-10 rounded-full"></div>
        <div className="max-w-4xl mx-auto text-center bg-mercury-text py-20 px-10 rounded-[4rem] shadow-2xl relative overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 italic text-white leading-tight">さあ、学習を「楽しさ」へ。</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href={MERCURY_APP_URL} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-white text-mercury-text px-12 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 hover:bg-mercury-cyan hover:text-white active:scale-95 shadow-xl flex items-center justify-center gap-3">
              {t('hero.cta')} <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
