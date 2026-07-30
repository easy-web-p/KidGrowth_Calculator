import { WHO_BOYS_DATA, WHO_GIRLS_DATA, BMI_CATEGORIES } from '../data/whoStandardData';

/**
 * Calculate predicted future adult height based on mid-parental height
 * Boy: (Father + Mother + 13) / 2
 * Girl: (Father + Mother - 13) / 2
 */
export function calculatePredictedHeight(fatherHeight, motherHeight, gender) {
  const f = parseFloat(fatherHeight) || 0;
  const m = parseFloat(motherHeight) || 0;

  if (!f || !m) return null;

  let target = 0;
  if (gender === 'male' || gender === 'boy') {
    target = (f + m + 13) / 2;
  } else {
    target = (f + m - 13) / 2;
  }

  return {
    target: Math.round(target * 10) / 10,
    min: Math.round((target - 5) * 10) / 10,
    max: Math.round((target + 5) * 10) / 10
  };
}

/**
 * Calculate BMI
 * BMI = Weight / (Height / 100)^2
 */
export function calculateBMI(weight, height) {
  const w = parseFloat(weight) || 0;
  const h = parseFloat(height) || 0;

  if (!w || !h) return null;

  const heightInMeters = h / 100;
  const bmi = w / (heightInMeters * heightInMeters);
  const roundedBmi = Math.round(bmi * 100) / 100;

  // Find category
  const categoryObj = BMI_CATEGORIES.find(c => roundedBmi >= c.min && roundedBmi <= c.max) || BMI_CATEGORIES[1];

  return {
    bmi: roundedBmi,
    category: categoryObj.category,
    color: categoryObj.color,
    status: categoryObj.status
  };
}

/**
 * Compare child's current height with WHO standard by age & gender
 */
export function getWhoComparison(age, height, weight, gender) {
  const dataset = (gender === 'female' || gender === 'girl') ? WHO_GIRLS_DATA : WHO_BOYS_DATA;
  const ageInt = Math.min(Math.max(Math.round(parseFloat(age) || 5), 2), 18);
  const matched = dataset.find(d => d.age === ageInt) || dataset[3];

  const currentH = parseFloat(height) || 0;
  const currentW = parseFloat(weight) || 0;

  let heightStatus = 'ปกติ';
  let heightColor = 'text-emerald-600 bg-emerald-50';

  if (currentH < matched.p5_height) {
    heightStatus = 'เตี้ยกว่าเกณฑ์';
    heightColor = 'text-amber-600 bg-amber-50';
  } else if (currentH > matched.p95_height) {
    heightStatus = 'สูงกว่าเกณฑ์';
    heightColor = 'text-blue-600 bg-blue-50';
  }

  let weightStatus = 'ปกติ';
  if (currentW < matched.p5_weight) {
    weightStatus = 'น้อยกว่าเกณฑ์';
  } else if (currentW > matched.p95_weight) {
    weightStatus = 'มากกว่าเกณฑ์';
  }

  return {
    whoAverageHeight: matched.p50_height,
    whoMinHeight: matched.p5_height,
    whoMaxHeight: matched.p95_height,
    whoAverageWeight: matched.p50_weight,
    heightStatus,
    heightColor,
    weightStatus,
    matchedAge: matched.age
  };
}

/**
 * Calculate Growth Score (0 to 100)
 */
export function calculateGrowthScore({ height, weight, age, gender, fatherHeight, motherHeight, sleepHours, activeMinutes }) {
  let score = 70; // Base score

  const bmiResult = calculateBMI(weight, height);
  if (bmiResult) {
    if (bmiResult.status === 'normal') score += 15;
    else if (bmiResult.status === 'low' || bmiResult.status === 'warning') score += 5;
    else score -= 5;
  }

  const who = getWhoComparison(age, height, weight, gender);
  if (who.heightStatus === 'ปกติ' || who.heightStatus === 'สูงกว่าเกณฑ์') {
    score += 10;
  } else {
    score -= 5;
  }

  const sleep = parseFloat(sleepHours) || 9;
  if (sleep >= 9 && sleep <= 11) score += 5;

  return Math.min(Math.max(score, 40), 99);
}

/**
 * Generate AI Healthcare & Growth Optimization Advice
 */
export function generateAiAdvice({ name, age, gender, height, weight, bmi, whoStatus, sleepHours, activityLevel }) {
  const childName = name || 'น้อง';
  const isGirl = gender === 'female' || gender === 'girl';

  const nutritionAdvice = [
    'นมสดรสจืดหรือนมถั่วเหลืองเสริมแคลเซียม วันละ 2-3 แก้ว (ประมาณ 400-600 มล.)',
    'ไข่ไก่ต้มหรือเมนูไข่ วันละ 1-2 ฟอง เพื่อเสริมโปรตีนอัลบูมิน',
    'ปลาแซลมอน ปลาเล็กปลาน้อย หรือตับสัตว์ 3-4 มื้อต่อสัปดาห์ เสริมสังกะสี (Zinc)',
    'ผักใบเขียวเข้ม เช่น บรอกโคลี ผักโขม แหล่งวิตามิน K2 ช่วยยึดแคลเซียมเข้ากระดูก'
  ];

  const exerciseAdvice = [
    'วิ่งเล่นกลางแจ้ง ได้รับวิตามิน D จากแสงแดดยามเช้า (15-20 นาที)',
    'กระโดดเชือก วันละ 200-500 ครั้ง ช่วยกระตุ้นแผ่นการเจริญเติบโตในข้อต่อ',
    'ว่ายน้ำ หรือ บาสเกตบอล 3-4 วัน/สัปดาห์ (กิจกรรมยืดขยายร่างกาย)',
    'หลีกเลี่ยงการยกของหนักเกินตัวเพื่อป้องกันการกดทับกระดูกข้อต่อ'
  ];

  const sleepAdvice = [
    `เด็กวัย ${age} ขวบ ควรนอนหลับให้ได้ 9-11 ชั่วโมงต่อวัน`,
    'เข้านอนไม่เกิน 21.30 น. เพื่อให้หลับสนิทช่วง 22.00 - 02.00 น. ซึ่งเป็นเวลาหลั่ง Growth Hormone สูงสุด',
    'งดเล่นโทรศัพท์มือถือหรือดูหน้าจอก่อนนอนอย่างน้อย 1 ชั่วโมง'
  ];

  let overallSummary = '';
  if (whoStatus === 'เตี้ยกว่าเกณฑ์' || bmi?.status === 'low') {
    overallSummary = `${childName} มีแนวโน้มส่วนสูงหรือน้ำหนักต่ำกว่าเกณฑ์มาตรฐาน แนะนำให้เน้นเพิ่มโปรตีน แคลเซียม สังกะสี และพักผ่อนให้เพียงพอเพื่อเร่งการยืดตัว`;
  } else if (bmi?.status === 'warning' || bmi?.status === 'danger' || bmi?.status === 'extreme') {
    overallSummary = `${childName} มีภาวะน้ำหนักเกินเกณฑ์มาตรฐาน ควรปรับลดอาหารหวาน มัน ทอด และเพิ่มการเคลื่อนไหวร่างกายอย่างน้อย 60 นาทีทุกวัน`;
  } else {
    overallSummary = `การเจริญเติบโตของ ${childName} อยู่ในเกณฑ์ที่ดีเยี่ยม! ควรรักษาพฤติกรรมสุขภาพ โภชนาการ และการนอนหลับที่สมดุลอย่างต่อเนื่อง`;
  }

  return {
    overallSummary,
    nutritionAdvice,
    exerciseAdvice,
    sleepAdvice
  };
}
