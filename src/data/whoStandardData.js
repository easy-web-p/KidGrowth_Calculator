// WHO Standard Height and Weight percentiles for Boys and Girls (Ages 2 to 18)
// Percentiles: P5 (Low / 5th), P50 (Average / Median), P95 (High / 95th)

export const WHO_BOYS_DATA = [
  { age: 2, p5_height: 82.0, p50_height: 87.0, p95_height: 92.5, p5_weight: 10.5, p50_weight: 12.2, p95_weight: 14.5 },
  { age: 3, p5_height: 90.0, p50_height: 96.0, p95_height: 102.5, p5_weight: 12.2, p50_weight: 14.3, p95_weight: 17.2 },
  { age: 4, p5_height: 96.5, p50_height: 103.0, p95_height: 110.0, p5_weight: 14.0, p50_weight: 16.3, p95_weight: 20.0 },
  { age: 5, p5_height: 102.5, p50_height: 110.0, p95_height: 117.5, p5_weight: 15.5, p50_weight: 18.3, p95_weight: 23.0 },
  { age: 6, p5_height: 108.0, p50_height: 116.0, p95_height: 124.0, p5_weight: 17.2, p50_weight: 20.5, p95_weight: 26.5 },
  { age: 7, p5_height: 113.5, p50_height: 122.0, p95_height: 130.5, p5_weight: 19.0, p50_weight: 23.0, p95_weight: 30.5 },
  { age: 8, p5_height: 119.0, p50_height: 128.0, p95_height: 137.0, p5_weight: 21.0, p50_weight: 25.6, p95_weight: 35.0 },
  { age: 9, p5_height: 124.0, p50_height: 133.5, p95_height: 143.0, p5_weight: 23.2, p50_weight: 28.5, p95_weight: 40.5 },
  { age: 10, p5_height: 129.0, p50_height: 138.5, p95_height: 149.0, p5_weight: 25.8, p50_weight: 32.0, p95_weight: 46.5 },
  { age: 11, p5_height: 133.5, p50_height: 143.5, p95_height: 155.0, p5_weight: 28.8, p50_weight: 36.0, p95_weight: 53.0 },
  { age: 12, p5_height: 138.5, p50_height: 150.0, p95_height: 162.0, p5_weight: 32.5, p50_weight: 41.0, p95_weight: 60.5 },
  { age: 13, p5_height: 144.5, p50_height: 157.0, p95_height: 170.0, p5_weight: 36.8, p50_weight: 46.5, p95_weight: 68.0 },
  { age: 14, p5_height: 151.0, p50_height: 164.0, p95_height: 177.0, p5_weight: 42.0, p50_weight: 53.0, p95_weight: 75.0 },
  { age: 15, p5_height: 157.0, p50_height: 170.0, p95_height: 182.5, p5_weight: 47.0, p50_weight: 59.0, p95_weight: 81.0 },
  { age: 16, p5_height: 161.0, p50_height: 173.5, p95_height: 186.0, p5_weight: 51.5, p50_weight: 64.0, p95_weight: 86.0 },
  { age: 17, p5_height: 163.5, p50_height: 175.5, p95_height: 188.0, p5_weight: 54.5, p50_weight: 67.5, p95_weight: 90.0 },
  { age: 18, p5_height: 164.5, p50_height: 176.5, p95_height: 189.0, p5_weight: 56.5, p50_weight: 70.0, p95_weight: 93.0 }
];

export const WHO_GIRLS_DATA = [
  { age: 2, p5_height: 80.5, p50_height: 86.0, p95_height: 91.5, p5_weight: 10.0, p50_weight: 11.5, p95_weight: 13.8 },
  { age: 3, p5_height: 89.0, p50_height: 95.0, p95_height: 101.5, p5_weight: 11.8, p50_weight: 13.9, p95_weight: 16.8 },
  { age: 4, p5_height: 95.5, p50_height: 102.5, p95_height: 109.5, p5_weight: 13.5, p50_weight: 16.0, p95_weight: 19.8 },
  { age: 5, p5_height: 101.5, p50_height: 109.0, p95_height: 116.5, p5_weight: 15.0, p50_weight: 18.0, p95_weight: 22.8 },
  { age: 6, p5_height: 107.0, p50_height: 115.0, p95_height: 123.0, p5_weight: 16.8, p50_weight: 20.0, p95_weight: 26.0 },
  { age: 7, p5_height: 112.0, p50_height: 121.0, p95_height: 129.5, p5_weight: 18.5, p50_weight: 22.4, p95_weight: 30.0 },
  { age: 8, p5_height: 117.5, p50_height: 127.0, p95_height: 136.0, p5_weight: 20.5, p50_weight: 25.0, p95_weight: 34.5 },
  { age: 9, p5_height: 122.5, p50_height: 132.5, p95_height: 142.5, p5_weight: 22.8, p50_weight: 28.2, p95_weight: 40.0 },
  { age: 10, p5_height: 128.0, p50_height: 138.5, p95_height: 149.0, p5_weight: 25.5, p50_weight: 32.0, p95_weight: 46.0 },
  { age: 11, p5_height: 133.5, p50_height: 144.5, p95_height: 155.5, p5_weight: 28.5, p50_weight: 36.5, p95_weight: 53.0 },
  { age: 12, p5_height: 140.0, p50_height: 151.0, p95_height: 161.5, p5_weight: 32.5, p50_weight: 42.0, p95_weight: 59.5 },
  { age: 13, p5_height: 146.0, p50_height: 156.0, p95_height: 166.0, p5_weight: 36.5, p50_weight: 47.0, p95_weight: 65.0 },
  { age: 14, p5_height: 150.0, p50_height: 159.5, p95_height: 169.0, p5_weight: 40.5, p50_weight: 51.0, p95_weight: 70.0 },
  { age: 15, p5_height: 152.5, p50_height: 161.5, p95_height: 171.0, p5_weight: 43.5, p50_weight: 54.0, p95_weight: 74.0 },
  { age: 16, p5_height: 153.5, p50_height: 162.5, p95_height: 172.0, p5_weight: 45.5, p50_weight: 56.0, p95_weight: 76.5 },
  { age: 17, p5_height: 154.0, p50_height: 163.0, p95_height: 172.5, p5_weight: 46.5, p50_weight: 57.0, p95_weight: 78.0 },
  { age: 18, p5_height: 154.5, p50_height: 163.5, p95_height: 173.0, p5_weight: 47.0, p50_weight: 57.5, p95_weight: 79.0 }
];

export const BMI_CATEGORIES = [
  { min: 0, max: 18.49, category: 'น้ำหนักน้อย (Underweight)', color: 'text-amber-500 bg-amber-50 border-amber-200', status: 'low' },
  { min: 18.5, max: 22.99, category: 'สมส่วน / ปกติ (Normal)', color: 'text-emerald-600 bg-emerald-50 border-emerald-200', status: 'normal' },
  { min: 23, max: 24.99, category: 'น้ำหนักเกิน (Overweight)', color: 'text-orange-500 bg-orange-50 border-orange-200', status: 'warning' },
  { min: 25, max: 29.99, category: 'อ้วนระดับ 1 (Obesity Level 1)', color: 'text-rose-500 bg-rose-50 border-rose-200', status: 'danger' },
  { min: 30, max: 99, category: 'อ้วนระดับ 2 (Obesity Level 2)', color: 'text-red-700 bg-red-100 border-red-300', status: 'extreme' }
];
