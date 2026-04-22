<div align="center">

<img src="https://raw.githubusercontent.com/mahmoud-kosti/hoota_social/main/assets/logo.png" alt="HOota Social Logo" width="120"/>

# 🔥 HOota Social

### منصة تواصل اجتماعي سودانية عصرية بتصميم Glassmorphism 2026

[Live Demo](https://mahmoud-kosti.github.io/hoota_social/)
[Documentation](https://github.com/mahmoud-kosti/hoota_social/wiki)
[Report Bug](https://github.com/mahmoud-kosti/hoota_social/issues)
[Request Feature](https://github.com/mahmoud-kosti/hoota_social/issues)

[[HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[[CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()
[[JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[[Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)]()
[[AI Assisted](https://img.shields.io/badge/AI_Powered-8B5CF6?style=for-the-badge&logo=openai&logoColor=white)]()
[[License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)]()

</div>

---

## 📑 جدول المحتويات

- [نبذة عن المشروع](#-نبذة-عن-المشروع)
- [المميزات الرئيسية](#-المميزات-الرئيسية)
- [التقنيات المستخدمة](#-التقنيات-المستخدمة)
- [دور الذكاء الاصطناعي](#-دور-الذكاء-الاصطناعي-في-التطوير)
- [التشغيل محلياً](#-التشغيل-محليا)
- [هيكلية المشروع](#-هيكلية-المشروع)
- [خارطة الطريق](#-خارطة-الطريق-المستقبلية)
- [المساهمة](#-المساهمة)
- [الرخصة](#-الرخصة)
- [عن المطور](#-عن-المطور)

---

## 📖 نبذة عن المشروع

**HOota Social** هو تطبيق ويب تفاعلي أحادي الصفحة SPA للتواصل الاجتماعي، مبني بالكامل باستخدام تقنيات الواجهة الأمامية الصرفة **Vanilla JavaScript** مع **Supabase** كخلفية سحابية متكاملة BaaS.

تم تطوير المشروع بهدف تقديم تجربة تواصل اجتماعي خفيفة وسريعة وآمنة، مصممة خصيصاً للمستخدم العربي والسوداني. الواجهة تعتمد على مفهوم **Glassmorphism** مع تدرجات لونية عصرية وتأثيرات ضبابية تواكب ترندات التصميم لعام 2026.

### 🎯 الأهداف الرئيسية
1. **السرعة**: تحميل فوري بدون سيرفرات تقليدية
2. **الأمان**: حماية البيانات باستخدام RLS من PostgreSQL
3. **البساطة**: كود نظيف وسهل الصيانة بدون أطر عمل معقدة
4. **التجاوب**: يعمل بكفاءة 100% على الجوال والتابلت والديسكتوب

---

## ✨ المميزات الرئيسية

| الميزة | الوصف التقني |
| :--- | :--- |
| **🔐 نظام مصادقة متكامل** | تسجيل حساب، تسجيل دخول، تأكيد البريد الإلكتروني، استعادة كلمة المرور، إدارة الجلسات عبر Supabase Auth |
| **📝 إدارة المنشورات CRUD** | إنشاء، قراءة، تعديل، وحذف المنشورات مع ربط كل منشور بمعرف المستخدم وإيميله |
| **🛡️ أمان على مستوى الصف RLS** | سياسات PostgreSQL تضمن أن المستخدم يعدل ويحذف منشوراته فقط، والقراءة متاحة للجميع |
| **⚡ واجهة تفاعلية لحظية** | تحديث المحتوى وجلب المنشورات الجديدة بدون إعادة تحميل الصفحة باستخدام JavaScript |
| **📱 تصميم Mobile-First** | واجهة مصممة للجوال أولاً ثم تتوسع للشاشات الأكبر، مع دعم كامل للمس |
| **🎨 تجربة مستخدم حديثة** | تأثيرات حركية، نظام إشعارات Toast، الوضع الداكن، تحميل هيكلي Skeleton Loading |
| **🔄 معالجة الأخطاء** | رسائل خطأ واضحة بالعربية، التحقق من صحة المدخلات، حماية من الإرسال المتكرر |

---

## 🛠️ التقنيات المستخدمة

### الواجهة الأمامية
- **HTML5**: هيكلة دلالية حديثة مع ARIA للوصول
- **CSS3**: متغيرات CSS، Flexbox، Grid، Animations، Glassmorphism Effects
- **JavaScript ES6+**: Async/Await، Modules، Fetch API، DOM Manipulation
- **الخطوط**: [Cairo](https://fonts.google.com/specimen/Cairo) من Google Fonts لدعم العربية

### الخلفية والخدمات السحابية
- **[Supabase](https://supabase.com)**: منصة مفتوحة المصدر بديلة لـ Firebase
    - **Supabase Auth**: إدارة كاملة للمستخدمين والجلسات والصلاحيات
    - **Supabase Database**: قاعدة بيانات PostgreSQL مع واجهة API تلقائية
    - **Row Level Security**: حماية البيانات على مستوى قاعدة البيانات

### أدوات التطوير والاستضافة
- **Git & GitHub**: للتحكم في الإصدارات وإدارة الكود
- **GitHub Pages**: استضافة مجانية وسريعة للمواقع الثابتة
- **VS Code**: محرر الكود الرئيسي مع إضافات ESLint و Prettier

---

## 🤖 دور الذكاء الاصطناعي في التطوير

تم الاستعانة بأدوات الذكاء الاصطناعي كـ **مساعد برمجي Pair Programmer** خلال جميع مراحل تطوير المشروع، وذلك للأغراض التالية:

1. **تسريع كتابة الكود**: توليد الأجزاء المتكررة من الكود مثل دوال CRUD وهيكلة HTML
2. **حل المشاكل التقنية**: تصحيح الأخطاء Bugs واقتراح حلول لمشاكل التوافق
3. **تحسين الأداء**: مراجعة الكود واقتراح تحسينات للأداء والأمان
4. **تعلم أفضل الممارسات**: فهم كيفية تطبيق RLS في Supabase وكتابة JavaScript نظيف
5. **كتابة التوثيق**: المساعدة في صياغة ملف README هذا وتعليقات الكود

**ملاحظة مهمة**: الذكاء الاصطناعي كان أداة مساعدة، وجميع القرارات المعمارية والتصميمية النهائية تمت بمراجعة واعتماد بشري كامل لضمان الجودة والأمان.

---

## 🚀 التشغيل محلياً

### المتطلبات الأساسية
- حساب مجاني على [Supabase](https://app.supabase.com)
- متصفح حديث: Chrome، Firefox، Edge، Safari
- محرر نصوص

### خطوات التثبيت

1. **استنساخ المستودع**
   ```sh
   git clone https://github.com/mahmoud-kosti/hoota_social.git
   cd hoota_social
