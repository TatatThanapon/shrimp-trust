const translations = {
    th: {
        "nav-farms": "สินค้าฟาร์ม", "nav-tracking": "เช็คพัสดุ", "nav-scan": "สแกนกุ้ง (Demo)", "nav-contact": "ติดต่อเรา",
        "hero-title": "คุณภาพที่มองเห็นได้... จากบ่อสู่โต๊ะ", "footer-text": "© 2026 SHRIMP TRUST Project | มหาวิทยาลัยศิลปากร"
    },
    en: {
        "nav-farms": "Products", "nav-tracking": "Tracking", "nav-scan": "Scan (Demo)", "nav-contact": "Contact Us",
        "hero-title": "Visible Quality... Pond to Table", "footer-text": "© 2026 SHRIMP TRUST Project | Silpakorn University"
    },
    cn: {
        "nav-farms": "农产品", "nav-tracking": "物流查询", "nav-scan": "扫描 (Demo)", "nav-contact": "联系我们",
        "hero-title": "看得见的品质... 从池塘到餐桌", "footer-text": "© 2026 SHRIMP TRUST Project | 艺术大学"
    },
    jp: {
        "nav-farms": "農産物", "nav-tracking": "追跡", "nav-scan": "スキャン (Demo)", "nav-contact": "連絡先",
        "hero-title": "目に見える品質... 池から食卓まで", "footer-text": "© 2026 SHRIMP TRUST Project | シラパコーン大学"
    },
    kr: {
        "nav-farms": "농산물", "nav-tracking": "배송조회", "nav-scan": "스캔 (Demo)", "nav-contact": "문의하기",
        "hero-title": "보이는 품질... 양식장에서 식탁까지", "footer-text": "© 2026 SHRIMP TRUST Project | 실라빠꼰 대학교"
    }
};

function applyLanguage() {
    const lang = localStorage.getItem('selectedLang') || 'th';
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT') { el.placeholder = translations[lang][key]; }
            else { el.innerText = translations[lang][key]; }
        }
    });
    const langSelect = document.getElementById('lang-select');
    if (langSelect) langSelect.value = lang;
}

function changeLanguage(lang) {
    localStorage.setItem('selectedLang', lang);
    applyLanguage();
}

document.addEventListener('DOMContentLoaded', applyLanguage);