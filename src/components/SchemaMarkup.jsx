import React from 'react';

export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "KidGrowth AI - Child Growth Predictor & BMI Analyzer",
    "url": "https://kidgrowth-ai.com",
    "description": "คำนวณส่วนสูงลูกในอนาคตจากส่วนสูงพ่อแม่ วิเคราะห์ BMI เด็ก เทียบเกณฑ์มาตรฐาน WHO พร้อม AI แนะนำการดูแลสุขภาพ",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "THB"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
