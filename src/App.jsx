import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeightPredictorForm from './components/HeightPredictorForm';
import BmiAnalyzerForm from './components/BmiAnalyzerForm';
import WhoGrowthChart from './components/WhoGrowthChart';
import AiAdvisor from './components/AiAdvisor';
import GrowthHistoryTracker from './components/GrowthHistoryTracker';
import SchemaMarkup from './components/SchemaMarkup';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('calculator');
  const [computedResult, setComputedResult] = useState(null);

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(`${id}-section`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* Schema Markup */}
      <SchemaMarkup />

      {/* Main Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={scrollToSection} />

      <main className="grow pb-12 space-y-6">
        
        {/* Hero Section */}
        <HeroSection onStartCalculation={() => scrollToSection('calculator')} />

        {/* Main Height Predictor & Child Form */}
        <HeightPredictorForm onResultComputed={setComputedResult} />

        {/* BMI Analyzer & WHO Classification Table */}
        <BmiAnalyzerForm />

        {/* WHO Interactive Growth Line Chart */}
        <WhoGrowthChart childResult={computedResult} />

        {/* Automated Diagnostic Message & AI Recommendations */}
        <AiAdvisor childResult={computedResult} />

        {/* Monthly History Tracker & PDF Export */}
        <GrowthHistoryTracker childResult={computedResult} />

      </main>

      {/* Clean Footer */}
      <Footer />

    </div>
  );
}
