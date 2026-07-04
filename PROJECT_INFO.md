# DrawLab — פרטי הפרויקט לניהול שוטף

## פרטי GitHub
- **שם משתמש:** cohenor28-cmd
- **Repository:** drawlab
- **URL של האתר:** https://cohenor28-cmd.github.io/drawlab/
- **URL של ה-Repo:** https://github.com/cohenor28-cmd/drawlab
- **Branch:** main
- **GitHub Pages:** פעיל, מ-branch main, תיקיית root

## Token
- **Token:** [מאוחסן בצורה מאובטחת — לא נשמר בקובץ]
- **פג תוקף:** 2 אוגוסט 2026 (30 יום מ-3 יולי 2026)
- **Scopes:** repo (full control)

## מבנה הפרויקט
```
DrawLab-PWA/
├── index.html       ← האפליקציה הראשית (RTL, עברית)
├── manifest.json    ← PWA manifest
├── sw.js            ← Service Worker (cache: drawlab-v1)
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

## מה האפליקציה עושה
- שם: "מעבדת התיקו" (DrawLab)
- שפה: עברית, RTL
- מטרה: ניתוח סטטיסטיקות תיקו בכדורגל
- נתונים: קבצי CSV מ-football-data.co.uk
- אחסון: localStorage (נשמר במכשיר המשתמש)
- עיצוב: כהה (dark mode), צבע ראשי #082019, accent #f2b705
- גופנים: Rubik + Assistant (Google Fonts)

## סקשנים באפליקציה
1. **01 נתונים** — העלאת CSV, משיכה אוטומטית, נתוני הדגמה
2. **02 בחירה** — ליגה / קבוצה / עונה
3. **03 סטטיסטיקה** — KPIs, לוח שנה, גרפים
4. **04 סימולטור** — שיטת הכפלה, יחסים, תקרה
5. **05 סורק** — sweep על פרמטרים

## איך לעדכן את האתר
```bash
cd /home/ubuntu/DrawLab-PWA

# 1. ערוך את index.html (או החלף אותו)
# 2. אם זה עדכון גדול — עדכן CACHE_NAME ב-sw.js (v1 → v2 → ...)
# 3. העלה ל-GitHub:
git add .
git commit -m "Update: תיאור השינוי"
git push
# האתר יתעדכן תוך ~1 דקה
```

## הגדרת git (כבר מוגדר)
```
user.email = cohenor28@gmail.com
user.name = cohenor28-cmd
remote origin = https://TOKEN@github.com/cohenor28-cmd/drawlab.git
```
