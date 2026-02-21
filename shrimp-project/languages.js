const translations = {
    th: {
        "nav-farms": "สินค้าฟาร์ม",
        "nav-tracking": "เช็คพัสดุ",
        "hero-title": "คุณภาพที่มองเห็นได้... จากบ่อสู่โต๊ะ",
        "stat-temp": "อุณหภูมิ",
        "footer-text": "© 2026 SHRIMP TRUST Project | มหาวิทยาลัยศิลปากร",
        // เพิ่มคำแปลหน้าอื่นๆ ตรงนี้
        "product-detail-title": "รายละเอียดข้อมูลกุ้ง",
        "back-btn": "กลับหน้าหลัก"
    },
    en: {
        "nav-farms": "Farms",
        "nav-tracking": "Tracking",
        "hero-title": "Visible Quality... Pond to Table",
        "stat-temp": "Temperature",
        "footer-text": "© 2026 SHRIMP TRUST Project | Silpakorn University",
        "product-detail-title": "Shrimp Information",
        "back-btn": "Back to Home"
    }
    // เพิ่มภาษาอื่น (cn, jp, kr) ต่อจากนี้ได้เลย...
};

// ฟังก์ชันหลักที่ใช้แปลคำ
function applyLanguage() {
    // 1. ดึงภาษาที่บันทึกไว้ (ถ้าไม่มีให้เป็น 'th')
    const lang = localStorage.getItem('selectedLang') || 'th';

    // 2. วิ่งไล่เปลี่ยนข้อความทุกตัวที่มี data-key
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // 3. ถ้าหน้านี้มี Select Box ให้เปลี่ยนค่าให้ตรงกับภาษาปัจจุบันด้วย
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.value = lang;
    }
}

// สั่งให้ทำงานทันทีที่โหลดหน้าเว็บ (ทำงานทุกหน้าที่มีไฟล์นี้)
document.addEventListener('DOMContentLoaded', applyLanguage);

// ฟังก์ชันสำหรับหน้าที่มี nav (เอาไว้กดเปลี่ยนภาษา)
function changeLanguage(lang) {
    localStorage.setItem('selectedLang', lang); // เซฟภาษาลงเครื่อง
    applyLanguage(); // สั่งแปลทันที
}