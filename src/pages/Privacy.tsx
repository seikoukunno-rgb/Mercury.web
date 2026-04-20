import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRIVACY_POLICY, PRIVACY_POLICY_EN } from '../legal';
import { motion } from 'motion/react';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  const { language } = useLanguage();
  const content = language === 'ja' ? PRIVACY_POLICY : PRIVACY_POLICY_EN;

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-slate-100"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-mercury-blue font-bold mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-mercury-blue/10 rounded-2xl flex items-center justify-center text-mercury-blue">
              <FileText size={32} />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-mercury-text tracking-tight">
              {language === 'ja' ? 'プライバシーポリシー' : 'Privacy Policy'}
            </h1>
          </div>

          <div className="prose prose-slate max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-mercury-muted leading-relaxed text-sm md:text-base">
              {content}
            </pre>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
