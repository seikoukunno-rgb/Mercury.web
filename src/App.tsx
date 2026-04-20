/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  FileText, 
  PenTool, 
  Calendar, 
  ListTodo, 
  Users, 
  Trophy, 
  TrendingUp, 
  UserPlus, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { PRIVACY_POLICY, TERMS_OF_SERVICE } from './legal';

const MERCURY_APP_URL = "https://study-tracker-rzbj.vercel.app";

const LegalModal = ({ isOpen, title, content, onClose }: { isOpen: boolean, title: string, content: string, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-mercury-text/40 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-4xl max-h-[80vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-slate-100"
        >
          <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h2 className="text-2xl font-display font-bold text-mercury-text">{title}</h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>
          <div className="p-8 overflow-y-auto text-mercury-muted text-sm leading-relaxed whitespace-pre-wrap font-sans">
            {content}
          </div>
          <div className="p-6 border-t border-slate-100 bg-slate-50/50 text-center">
            <button 
              onClick={onClose}
              className="bg-mercury-text text-white px-8 py-3 rounded-xl font-bold hover:bg-mercury-blue transition-all"
            >
              閉じる
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-mercury-blue/20 blur-lg rounded-full group-hover:bg-mercury-blue/40 transition-all"></div>
            <img 
              src="/logo.png" 
              alt="Mercury Logo" 
              className="relative w-12 h-12 rounded-2xl shadow-xl border border-white/50 bg-white/80 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-2xl font-display font-black tracking-tighter text-mercury-text leading-none">Mercury</span>
            <span className="text-[10px] font-bold text-mercury-blue uppercase tracking-[0.2em] opacity-60">Study Ecosystem</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-mercury-muted">
          <a href="#features" className="hover:text-mercury-blue transition-colors">機能紹介</a>
          <a href="#trust" className="hover:text-mercury-blue transition-colors">安全性</a>
          <a href="#faq" className="hover:text-mercury-blue transition-colors">よくある質問</a>
          <a href={MERCURY_APP_URL} target="_blank" rel="noopener noreferrer" className="bg-mercury-text text-white px-6 py-2 rounded-full font-bold hover:bg-mercury-blue transition-all hover:scale-105 active:scale-95 shadow-md">
            今すぐはじめる
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-mercury-text" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 glass border-t border-black/5 py-8 px-6 flex flex-col gap-6 items-center text-center"
          >
            <a href="#features" className="text-lg text-mercury-text" onClick={() => setIsMobileMenuOpen(false)}>機能紹介</a>
            <a href="#trust" className="text-lg text-mercury-text" onClick={() => setIsMobileMenuOpen(false)}>安全性</a>
            <a href="#faq" className="text-lg text-mercury-text" onClick={() => setIsMobileMenuOpen(false)}>よくある質問</a>
            <a href={MERCURY_APP_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-linear-to-r from-mercury-blue to-mercury-cyan text-white py-4 rounded-xl font-bold">
              Mercuryをはじめる
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FeatureCard = ({ icon: Icon, title, description, badge }: { icon: any, title: string, description: string, badge?: string }) => (
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

export default function App() {
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean, title: string, content: string }>({
    isOpen: false,
    title: '',
    content: ''
  });

  const openLegal = (title: string, content: string) => {
    setLegalModal({ isOpen: true, title, content });
  };

  return (
    <div className="bg-mercury-light overflow-x-hidden min-h-screen text-mercury-text">
      <Nav />
      
      <LegalModal 
        isOpen={legalModal.isOpen}
        title={legalModal.title}
        content={legalModal.content}
        onClose={() => setLegalModal(prev => ({ ...prev, isOpen: false }))}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full border border-mercury-blue/10 bg-mercury-blue/5 text-mercury-blue text-sm font-bold mb-8 uppercase tracking-widest">
              Study Next Generation
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tight leading-[1.1] md:leading-[1.05] text-mercury-text">
              学習を、<span className="text-gradient">もっと見える化。</span><br />
              もっと続けやすく。
            </h1>
            <p className="text-lg md:text-xl text-mercury-muted max-w-2xl mx-auto mb-12 leading-relaxed">
              PDF教材、予定、仲間との競争。学習に必要なすべてをひとつに集約。<br className="hidden md:block" />
              Mercuryは「続けられない自分」を卒業するための、デジタル学習基地です。
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
              <img 
                src="/logo.png" 
                alt="Mercury Hero Logo" 
                className="relative w-48 h-48 md:w-72 md:h-72 rounded-[3.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] bg-white p-6 border border-white/80 group-hover:scale-105 transition-transform duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Decorative floating orbits */}
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

            {/* Button Moved Below Logo */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href={MERCURY_APP_URL} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-mercury-text text-white px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-3 group">
                Mercuryをはじめる 
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
                なぜ、Mercuryなのか？
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-mercury-blue">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-mercury-text">すべてを一箇所に集約</h4>
                    <p className="text-mercury-muted">教材のPDF閲覧から、書き込み、予定管理まで。アプリを切り替えるストレスをゼロにします。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-mercury-cyan">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-mercury-text">「頑張り」をリアルタイムに実感</h4>
                    <p className="text-mercury-muted">学習時間が経験値となり、レベルアップ。スタラン（勉強時間ランキング）で仲間と競い合いながら、成長を可視化します。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-mercury-purple">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-mercury-text">安全性を第一に設計</h4>
                    <p className="text-mercury-muted">Google Driveとのスムーズな連携。大事な教材ファイルを書き換えることなく、その上に学びを重ねられます。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-linear-to-br from-mercury-blue/10 to-mercury-purple/10 blur-[80px] -z-10"></div>
              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl">
                <div className="text-center mb-8">
                  <div className="text-sm font-bold text-mercury-blue uppercase tracking-widest mb-2">User Voices</div>
                  <p className="text-2xl font-display italic text-mercury-text font-medium">「今まで使った中で一番、<br />勉強がゲームみたいに楽しくなった。」</p>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-mercury-blue to-mercury-purple"></div>
                  <div>
                    <div className="font-bold text-mercury-text">慶應義塾大学 / 1年生</div>
                    <div className="text-xs text-mercury-muted">Mercury歴: 3ヶ月</div>
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
            <h2 className="text-3xl md:text-6xl font-bold mb-6 text-mercury-text">圧倒的な機能で、<br />最高の学習体験を。</h2>
            <p className="text-mercury-muted max-w-2xl mx-auto">
              Mercuryは学習者の「ほしい」を凝縮しました。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={FileText}
              title="PDF表示機能"
              description="Google Drive等の教材を最高のスピードと視認性で。一つの画面で全ての資料を即座に開けます。"
            />
            <FeatureCard 
              icon={PenTool}
              title="PDF書き込み機能"
              badge="Safe"
              description="元のファイルを改変せず、レイアウトの上に直接メモや注釈を書き込めます。自分だけの参考書が完成します。"
            />
            <FeatureCard 
              icon={Calendar}
              title="カレンダー連携"
              description="課題の締め切りや学習予定をカレンダー形式で可視化。Googleカレンダーとの相性も抜群です。"
            />
            <FeatureCard 
              icon={ListTodo}
              title="Todoリスト"
              description="一日のやるべき事を最小単位に分解。チェックを入れる瞬間の達成感が、次のモチベーションを生みます。"
            />
            <FeatureCard 
              icon={Users}
              title="ルーム機能"
              description="同じ目標の仲間と「ルーム」を作成。つながることで、孤独な勉強時間は刺激的な切磋琢磨の時間へ。"
            />
            <FeatureCard 
              icon={Trophy}
              title="スタラン"
              description="「スタラン」は勉強時間ランキングの略称。ルーム内の仲間と順位を競い、継続率を飛躍的に高めます。"
            />
            <FeatureCard 
              icon={TrendingUp}
              title="レベルアップ"
              description="学習時間＝経験値。RPGのように成長を感じられる仕組みで、毎日のログインが楽しみになります。"
            />
            <FeatureCard 
              icon={UserPlus}
              title="フォロー・交流"
              description="友人の頑張りが見えるから、自分も頑張れる。お互いの軌跡を追い合い、高め合えるSNS体験。"
            />
          </div>
        </div>
      </section>

      {/* Trust & PDF Deep Dive */}
      <section id="trust" className="py-24 overflow-hidden relative bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative inline-block mb-12">
            <div className="absolute inset-0 bg-mercury-blue/20 blur-2xl rounded-full scale-150"></div>
            <div className="relative bg-white w-24 h-24 rounded-3xl shadow-xl flex items-center justify-center p-5 border border-slate-100">
              <img 
                src="/logo.png" 
                alt="Mercury trust icon" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-mercury-text">信頼と透明性のための、<br />Mercuryの約束。</h2>
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] text-left shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-mercury-text">
              <span className="w-1.5 h-6 bg-mercury-blue rounded-full"></span>
              PDF書き込みの仕組みについて
            </h3>
            <p className="text-mercury-text leading-loose mb-8 font-medium">
              MercuryのPDF書き込み機能は、<span className="text-mercury-blue font-bold">「元のPDFファイル自体を編集・改変することはない」</span>という設計思想のもとに作られています。<br /><br />
              <span className="text-mercury-muted font-normal">あなたが書き込んだメモや注釈は、アプリ独自のレイヤーとして保存されるオーバーレイ方式です。これにより、元の教材ファイルはそのままの状態を保ちつつ、学習を効率化するための「補助資料としてのカスタマイズ」が可能です。安心して既存の教材資産を活用してください。</span>
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="text-xs font-bold text-mercury-blue uppercase mb-2">Security</div>
                <div className="font-bold mb-2 text-mercury-text">必要な範囲でのみ連携</div>
                <p className="text-xs text-mercury-muted leading-relaxed">Google APIの使用は学習体験の向上のために厳選され、不要なデータ取得は行いません。</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="text-xs font-bold text-mercury-purple uppercase mb-2">Privacy</div>
                <div className="font-bold mb-2 text-mercury-text">データの透明性</div>
                <p className="text-xs text-mercury-muted leading-relaxed">ユーザーの学習データは、個人のモチベーション維持と、許可されたルーム内での共有にのみ使用されます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-20 text-center">
            <HelpCircle className="text-mercury-blue" size={32} />
            <h2 className="text-4xl font-bold text-mercury-text">よくある質問</h2>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "Mercuryでは何ができますか？", a: "PDF教材の閲覧・書き込み、学習スケジュールの管理(カレンダー/Todo)、そして仲間との学習時間共有を通じたモチベーション向上機能が集約されています。" },
              { q: "PDFは直接編集されますか？", a: "いいえ。元のファイルは一切変更されません。書き込み内容はMercury上の透過レイヤーとして安全に保存・表示されます。" },
              { q: "カレンダーにはどんな予定を登録できますか？", a: "課題の締め切り、試験日程、毎日の学習開始予定など、自由な項目を登録して視覚的に管理できます。" },
              { q: "スタランとは何ですか？", a: "「勉強時間ランキング」の略称です。同じルームに入っているメンバーと総学習時間をリアルタイムで競うことができる機能です。" },
              { q: "友達とどのようにつながれますか？", a: "ユーザー検索やルーム共有機能を通じてつながることができます。フォローし合うことでお互いの頑張りがタイムラインで見えるようになります。" }
            ].map((item, i) => (
              <div key={i} className="card-future p-8">
                <h4 className="text-xl font-bold mb-4 flex gap-4 text-mercury-text">
                  <span className="text-mercury-blue">Q.</span> {item.q}
                </h4>
                <p className="text-mercury-muted leading-relaxed pl-10">
                  {item.a}
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
          {/* Decorative floating dots */}
          <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-mercury-cyan animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-2 h-2 rounded-full bg-mercury-purple animate-pulse delay-700"></div>

          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 italic text-white leading-tight">さあ、学習を「楽しさ」へ。</h2>
          <p className="text-lg text-slate-400 mb-12 max-w-lg mx-auto">
            Mercuryはあなたの学習のパートナーとして、<br />毎日の「頑張り」に翼を授けます。
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href={MERCURY_APP_URL} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-white text-mercury-text px-12 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 hover:bg-mercury-cyan hover:text-white active:scale-95 shadow-xl flex items-center justify-center gap-3">
              Mercuryをはじめる <ArrowRight size={24} />
            </a>
          </div>
          <p className="mt-8 text-slate-600 text-sm">
            Googleアカウントで今すぐ無料登録
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-100 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/logo.png" 
                  alt="Mercury Logo" 
                  className="w-8 h-8 rounded-lg bg-white border border-slate-100"
                  referrerPolicy="no-referrer"
                />
                <span className="text-2xl font-display font-bold tracking-tight text-mercury-text">Mercury</span>
              </div>
              <p className="text-mercury-muted max-w-sm mb-8 leading-relaxed">
                次世代の学習支援プラットフォーム。PDF、タスク、仲間。すべてを統合し、学びの継続をデザインします。
              </p>
              <div className="flex gap-4">
                {['twitter', 'github', 'discord'].map(social => (
                  <div key={social} className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-mercury-blue hover:bg-white hover:border-mercury-blue/20 transition-all cursor-pointer">
                    <span className="capitalize text-[10px] font-bold">{social[0]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-mercury-text">サービス</h5>
              <ul className="space-y-4 text-sm text-mercury-muted">
                <li><a href="#features" className="hover:text-mercury-blue transition-colors">機能紹介</a></li>
                <li><a href="#trust" className="hover:text-mercury-blue transition-colors">安全性</a></li>
                <li><a href="#faq" className="hover:text-mercury-blue transition-colors">よくある質問</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-mercury-text">規約とサポート</h5>
              <ul className="space-y-4 text-sm text-mercury-muted">
                <li>
                  <button 
                    onClick={() => openLegal('利用規約', TERMS_OF_SERVICE)}
                    className="hover:text-mercury-blue transition-colors"
                  >
                    利用規約
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openLegal('プライバシーポリシー', PRIVACY_POLICY)}
                    className="hover:text-mercury-blue transition-colors"
                  >
                    プライバシーポリシー
                  </button>
                </li>
                <li><a href="mailto:support@mercury-study.io" className="hover:text-mercury-blue transition-colors">お問い合わせ</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-100 text-xs text-slate-400 gap-4">
            <p>© 2026 Mercury Project. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="flex items-center gap-1"><ShieldCheck size={12}/> Verified for Google Drive</span>
              <span>Made with ❤️ for Learners</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

