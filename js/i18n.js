/**
 * Chune Beauty Salon — EN / Amharic language toggle
 * Uses data-i18n attributes and localStorage to persist choice.
 */
(function () {
    'use strict';

    // ──────────────────────────────────────────────
    //  Translation dictionary
    // ──────────────────────────────────────────────
    var translations = {
        en: {
            // Topbar
            topbar_address : 'Piazza, Hawassa, Ethiopia',
            topbar_hours   : 'Mon–Sat 8:00 AM – 8:00 PM\u00A0|\u00A0Sun 9:00 AM – 6:00 PM',

            // Navbar
            nav_home     : 'Home',
            nav_about    : 'About',
            nav_services : 'Services',
            nav_price    : 'Price',
            nav_gallery  : 'Gallery',
            nav_contact  : 'Contact',

            // Hero
            hero_amharic  : 'ጩኒ የውበት ሳሎን',
            hero_welcome  : 'Welcome to',
            hero_title    : 'Chune Beauty Salon',
            hero_subtitle : 'Expert braiding, hairstyling & beauty care for women — right here in Hawassa, Piazza.',
            hero_btn_call : 'Call Now',
            hero_btn_wa   : 'Book on WhatsApp',

            // About
            about_tagline   : 'About Us',
            about_heading   : 'Your Beauty, Our Passion',
            about_call_label: 'Call us to book your appointment',
            about_text      : 'Chune Beauty Salon is a women\'s beauty destination located at the heart of Piazza, Hawassa. We specialise in hair braiding and styling — from box braids and knotless braids to cornrows, curls and everything in between — alongside makeup and nail services. Every client walks out feeling confident and beautiful.',
            about_text2     : 'We use quality products and take time to listen to every client, because your hair is unique and your style should be too.',
            about_btn       : 'Read More',
            about_contact_btn: 'Book Appointment',

            stat1 : 'Hawassa, Piazza',
            stat2 : 'Braids & Styling',
            stat3 : 'Open 7 Days',

            // Why
            why_tag        : 'Why Choose Us',
            why_heading    : 'The Chune Difference',
            why1_title : 'Skilled Hands',
            why1_text  : 'Our stylists are experienced in a wide range of braiding and styling techniques.',
            why2_title : 'Quality Products',
            why2_text  : 'We use quality hair products that keep your hair healthy and your style lasting longer.',
            why3_title : 'Client-First',
            why3_text  : 'We listen to what you want and work with you until you\'re happy with the result.',
            why4_title : 'Easy to Find',
            why4_text  : 'Located at Piazza, Hawassa — easy to reach and welcoming to all.',

            // Services
            services_tag      : 'Our Services',
            services_heading  : 'What We Offer',
            services_heading_am: 'የምናቀርባቸው አገልግሎቶች',
            svc1_name : 'Box Braids',
            svc1_desc : 'Classic and protective box braids tailored to your preferred length, thickness and colour.',
            svc1_desc_long: 'Classic, protective box braids tailored to your preferred length, thickness and colour. Neat square or triangle parts, feed-in or traditional. Long-lasting and easy to maintain.',
            svc2_name : 'Knotless Braids',
            svc2_desc : 'Lightweight and scalp-friendly knotless braids that look natural from root to tip.',
            svc2_desc_long: 'Lightweight, scalp-friendly braids that start from your natural hair and gradually add extension hair. No bulky knot at the root.',
            svc3_name : 'Cornrows',
            svc3_desc : 'Neat, precise cornrows in straight, curved or geometric patterns.',
            svc3_desc_long: 'Neat, precise cornrows in straight-backs, curved, geometric or freestyle patterns.',
            svc4_name : 'Curls & Styling',
            svc4_desc : 'From defined curls and twists to elegant updos and blowouts.',
            svc4_desc_long: 'From defined curls and two-strand twists to elegant updos, blowouts and everyday styling.',
            svc5_name : 'Hair Wash & Treatment',
            svc5_desc : 'Deep cleansing shampoo, conditioning treatments and scalp care.',
            svc5_desc_long: 'Deep cleansing shampoo, conditioning treatment and scalp massage to detox your hair before styling.',
            svc6_name : 'Makeup & Nails',
            svc6_desc : 'Professional makeup for events, weddings and everyday glam, plus manicure and pedicure services.',
            svc6_desc_long: 'Professional makeup application for weddings, graduation, events or everyday glam. Manicure and pedicure services also available.',
            svc_more     : 'See Details',
            svc_price_btn: 'See Prices',
            svc_book_btn : 'Book Now',

            // CTA
            cta_tag     : 'Ready for a New Look?',
            cta_heading : 'Book Your Appointment Today',

            // Pricing
            price_tag      : 'Pricing',
            price_heading  : 'Chune Beauty Salon',
            price_sub      : 'Prices',
            price_heading_am: 'የዋጋ ዝርዝር',
            price_currency_note: 'All prices in Ethiopian Birr (ETB)',
            price_btn      : 'View Full Price List',
            price_note_title: '💬 Prices may vary based on hair length, thickness and extension type.',
            price_note2    : 'All prices are in Ethiopian Birr (ETB).',
            price_disclaimer: '* Prices are starting rates and may vary. Contact us for a custom quote.',

            price1_name  : 'Box Braids',
            price1_val   : 'ETB 500',
            price1b_name : 'Box Braids (Small)',
            price1b_val  : 'ETB 700',
            price2_name  : 'Knotless Braids',
            price2_val   : 'ETB 700',
            price2b_name : 'Knotless Braids (Small)',
            price2b_val  : 'ETB 900',
            price3_name  : 'Cornrows',
            price3_val   : 'ETB 300',
            price4_name  : 'Curls & Styling',
            price4_val   : 'ETB 400',
            price5_name  : 'Hair Wash & Treatment',
            price5_val   : 'ETB 250',
            price6_name  : 'Makeup',
            price6_val   : 'Call for price',
            price7_name  : 'Manicure / Pedicure',
            price7_val   : 'ETB 200',

            // Gallery
            gallery_tag     : 'Gallery',
            gallery_heading : 'Our Work',
            gallery_sub     : 'Real results from our salon — braids, styling and beauty transformations in Hawassa.',
            gallery_btn     : 'View Full Gallery',
            gallery_cta_text: 'Love what you see? Come in and let us do the same for you.',

            // TikTok strip
            tiktok_heading : 'Follow Us on TikTok',
            tiktok_text    : 'See our latest braiding styles, transformations and behind-the-scenes moments. New videos every week!',
            tiktok_btn     : 'Follow @FILL_IN_TIKTOK',

            // Contact
            contact_tag        : 'Get in Touch',
            contact_heading    : 'We\'d Love to Hear from You',
            contact_addr_title : 'Our Location',
            contact_addr       : 'Piazza, Hawassa\nSidama Region, Ethiopia',
            contact_phone_title: 'Call Us',
            contact_book_title : 'Book Your Appointment',
            contact_call_btn   : 'Call 0996 780 723',
            contact_wa_btn     : 'WhatsApp Us',
            contact_tg_btn     : 'Telegram Us',

            // Form
            form_title  : 'Send a Booking Request via WhatsApp',
            form_name   : 'Your Name',
            form_phone  : 'Your Phone (optional)',
            form_service: 'Preferred Service',
            form_date   : 'Preferred Date & Time',
            form_note   : 'Additional Notes (optional)',
            form_submit : 'Send via WhatsApp',

            // Footer
            footer_desc        : 'Professional hair braiding and beauty services for women in Hawassa, Ethiopia. Your beauty is our pride.',
            footer_links       : 'Quick Links',
            footer_hours_title : 'Opening Hours',
            hours_monsat       : 'Mon – Sat',
            hours_sun          : 'Sunday',
            hours_monsat_full  : 'Mon – Sat: 8:00 AM – 8:00 PM',
            hours_sun_full     : 'Sunday: 9:00 AM – 6:00 PM',
        },

        am: {
            // Topbar
            topbar_address : 'ፒያዛ፣ ሐዋሳ፣ ኢትዮጵያ',
            topbar_hours   : 'ሰኞ–ቅዳሜ 8:00 – 8:00 |\u00A0እሁድ 9:00 – 6:00',

            // Navbar
            nav_home     : 'ዋና ገጽ',
            nav_about    : 'ስለ እኛ',
            nav_services : 'አገልግሎቶች',
            nav_price    : 'ዋጋ',
            nav_gallery  : 'ጋለሪ',
            nav_contact  : 'ያግኙን',

            // Hero
            hero_amharic  : 'ጩኒ የውበት ሳሎን',
            hero_welcome  : 'እንኳን ደህና መጡ',
            hero_title    : 'ጩኒ የውበት ሳሎን',
            hero_subtitle : 'ለሴቶች ፀጉር ሽምቀት፣ አሠራርና ውበት አገልግሎት — በሐዋሳ ፒያዛ።',
            hero_btn_call : 'አሁን ደውሉ',
            hero_btn_wa   : 'በ WhatsApp ቀጠሮ ያድርጉ',

            // About
            about_tagline   : 'ስለ እኛ',
            about_heading   : 'ውበቶ — የእኛ ኩራት',
            about_call_label: 'ቀጠሮ ለማድረግ ደውሉልን',
            about_text      : 'ጩኒ የውበት ሳሎን በሐዋሳ ፒያዛ ልብ ውስጥ የሚገኝ የሴቶች ውበት ቦታ ነው። ቦክስ ብሬድ፣ ኖትለስ ብሬድ፣ ኮርን ሮው፣ ከርልና ሌሎችን ጨምሮ ፀጉር ሽምቀትና አሠራር፤ ሜካፕና ጥፍር አገልግሎቶችን እናቀርባለን። እያንዳንዱ ደንበኛ ቆንጆና ደስተኛ ሆኖ ይወጣል።',
            about_text2     : 'ጥሩ ምርቶችን እንጠቀማለን። ለእያንዳንዱ ደንበኛ ጊዜ ወስደን እናዳምጣለን።',
            about_btn       : 'ተጨማሪ ያንብቡ',
            about_contact_btn: 'ቀጠሮ ያድርጉ',

            stat1 : 'ሐዋሳ፣ ፒያዛ',
            stat2 : 'ብሬድና አሠራር',
            stat3 : '7 ቀን ክፍት',

            // Why
            why_tag        : 'ለምን ጩኒ?',
            why_heading    : 'የጩኒ ልዩነት',
            why1_title : 'ብቃት ያላቸው እጆች',
            why1_text  : 'ስቲሊስቶቻችን ሰፊ ልምድ አላቸው።',
            why2_title : 'ጥሩ ምርቶች',
            why2_text  : 'ፀጉርዎን ጤናማ የሚያደርጉ ምርቶችን እንጠቀማለን።',
            why3_title : 'ደንበኛ ቅድሚያ',
            why3_text  : 'ምን እንደሚፈልጉ እናዳምጣለን።',
            why4_title : 'ቀላል አቀማመጥ',
            why4_text  : 'ፒያዛ ሐዋሳ — ለሁሉም ቅርብ።',

            // Services
            services_tag      : 'አገልግሎቶቻችን',
            services_heading  : 'የምናቀርበው',
            services_heading_am: 'የምናቀርባቸው አገልግሎቶች',
            svc1_name : 'ቦክስ ብሬድ',
            svc1_desc : 'ክላሲክ እና ጥበቃ ሰጭ ቦክስ ብሬድ — ርዝመት፣ ውፍረትና ቀለም እንደ ምርጫዎ።',
            svc1_desc_long: 'ክላሲክ እና ጥበቃ ሰጭ ቦክስ ብሬድ — ርዝመት፣ ውፍረትና ቀለም እንደ ምርጫዎ። ረጅም ጊዜ ይቆያል።',
            svc2_name : 'ኖትለስ ብሬድ',
            svc2_desc : 'ቀላልና ለፍርግምት ምቹ ኖትለስ ብሬድ — ሥሩ ጀምሮ እስከ ጫፍ ተፈጥሯዊ ይመስላል።',
            svc2_desc_long: 'ቀላልና ለፍርግምት ምቹ — ሥሩ ጀምሮ ቀስ ብሎ ፀጉር ይጨምራል። ምንም ወፍራም ቋጠሮ የለም።',
            svc3_name : 'ኮርን ሮው',
            svc3_desc : 'ቀጥታ፣ ጠምዛዛ ወይም ጂዮሜትሪያዊ ሥርዓ ያለው ኮርን ሮው።',
            svc3_desc_long: 'ቀጥታ ወይም ፈጠራ ዘይቤ ያለው ኮርን ሮው — ለዕለትዩ ወይም ለፓርቲ።',
            svc4_name : 'ከርልና አሠራር',
            svc4_desc : 'ዩፕዶ፣ ብሎውት፣ ከርልና ሌሎች አሠራሮች ለሁሉም አጋጣሚ።',
            svc4_desc_long: 'ዩፕዶ፣ ብሎውት፣ ከርልና ሌሎች አሠራሮች ለሁሉም አጋጣሚ።',
            svc5_name : 'ፀጉር ማጠብና ሕክምና',
            svc5_desc : 'ጥልቅ ሻምፑ፣ ኮንዲሽነርና ጭንቅላት ክብካቤ።',
            svc5_desc_long: 'ጥልቅ ሻምፑ፣ ኮንዲሽነር ሕክምናና ጭንቅላት ማሻሸት — ፀጉርዎ ብሬድ ጥሩ ሁኔታ ላይ ያደርጋል።',
            svc6_name : 'ሜካፕና ጥፍር',
            svc6_desc : 'ሰርግ፣ ፓርቲና ዕለቱ ሜካፕ፤ ማኒኪዩርና ፔዲኪዩር።',
            svc6_desc_long: 'ሰርግ፣ ምረቃ ወይም ዕለቱ ሜካፕ፤ ማኒኪዩርና ፔዲኪዩር — ሙሉ ቆንጆ ሆኑ።',
            svc_more     : 'ዝርዝር ይመልከቱ',
            svc_price_btn: 'ዋጋ ይመልከቱ',
            svc_book_btn : 'ቀጠሮ ያድርጉ',

            // CTA
            cta_tag     : 'አዲስ ለውጥ ዝግጁ?',
            cta_heading : 'ዛሬ ቀጠሮ ያድርጉ',

            // Pricing
            price_tag      : 'ዋጋዎች',
            price_heading  : 'ጩኒ የውበት ሳሎን',
            price_sub      : 'ዋጋ',
            price_heading_am: 'የዋጋ ዝርዝር',
            price_currency_note: 'ሁሉም ዋጋዎች በኢትዮጵያ ብር (ETB) ናቸው',
            price_btn      : 'ሙሉ ዋጋ ዝርዝር',
            price_note_title: '💬 ዋጋዎች በፀጉር ርዝመት፣ ውፍረትና ፀጉር ዓይነት ሊለያዩ ይችላሉ።',
            price_note2    : 'ሁሉም ዋጋዎች በኢትዮጵያ ብር ናቸው።',
            price_disclaimer: '* ዋጋዎች መነሻ ናቸው፤ ሊለያዩ ይችላሉ። ለዝርዝር ያግኙን።',

            price1_name  : 'ቦክስ ብሬድ',
            price1_val   : 'ብር 500',
            price1b_name : 'ቦክስ ብሬድ (ትንሽ)',
            price1b_val  : 'ብር 700',
            price2_name  : 'ኖትለስ ብሬድ',
            price2_val   : 'ብር 700',
            price2b_name : 'ኖትለስ ብሬድ (ትንሽ)',
            price2b_val  : 'ብር 900',
            price3_name  : 'ኮርን ሮው',
            price3_val   : 'ብር 300',
            price4_name  : 'ከርልና አሠራር',
            price4_val   : 'ብር 400',
            price5_name  : 'ፀጉር ማጠብና ሕክምና',
            price5_val   : 'ብር 250',
            price6_name  : 'ሜካፕ',
            price6_val   : 'ዋጋ ለማወቅ ደውሉ',
            price7_name  : 'ማኒኪዩር / ፔዲኪዩር',
            price7_val   : 'ብር 200',

            // Gallery
            gallery_tag     : 'ጋለሪ',
            gallery_heading : 'ሥራዎቻችን',
            gallery_sub     : 'ከሳሎናችን — ብሬድ፣ አሠራርና ውበት ለውጦች።',
            gallery_btn     : 'ሙሉ ጋለሪ ይመልከቱ',
            gallery_cta_text: 'ምርጥ ውጤቶቻችን አዩ? ለእርስዎም ያደርጋናል!',

            // TikTok
            tiktok_heading : 'TikTok ላይ ይከተሉን',
            tiktok_text    : 'አዳዲስ የብሬድ ዘይቤዎችና ለውጦቻችን — ሳምንቱ ቪዲዮዎች!',
            tiktok_btn     : '@FILL_IN_TIKTOK ይከተሉ',

            // Contact
            contact_tag        : 'ያግኙን',
            contact_heading    : 'ደስ ብሎን እናዳምጣለን',
            contact_addr_title : 'አድራሻ',
            contact_addr       : 'ፒያዛ፣ ሐዋሳ\nሲዳማ ክልል፣ ኢትዮጵያ',
            contact_phone_title: 'ደውሉ',
            contact_book_title : 'ቀጠሮ ያድርጉ',
            contact_call_btn   : '0996 780 723 ደውሉ',
            contact_wa_btn     : 'WhatsApp ይላኩ',
            contact_tg_btn     : 'Telegram ይላኩ',

            // Form
            form_title  : 'በ WhatsApp ቀጠሮ ይላኩ',
            form_name   : 'ስምዎ',
            form_phone  : 'ስልክዎ (አማራጭ)',
            form_service: 'የሚፈልጉት አገልግሎት',
            form_date   : 'ቀን እና ሰዓት',
            form_note   : 'ተጨማሪ ማስታወሻ (አማራጭ)',
            form_submit : 'በ WhatsApp ላክ',

            // Footer
            footer_desc        : 'ለሴቶች ፀጉርና ውበት አገልግሎት — ሐዋሳ ፒያዛ።',
            footer_links       : 'ፈጣን ሊንኮች',
            footer_hours_title : 'የሥራ ሰዓት',
            hours_monsat       : 'ሰኞ – ቅዳሜ',
            hours_sun          : 'እሁድ',
            hours_monsat_full  : 'ሰኞ – ቅዳሜ: 8:00 – 8:00',
            hours_sun_full     : 'እሁድ: 9:00 – 6:00',
        }
    };

    // ──────────────────────────────────────────────
    //  Apply translations
    // ──────────────────────────────────────────────
    function applyLang(lang) {
        var dict = translations[lang] || translations.en;
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                // For <option> elements, set value and text together
                if (el.tagName === 'OPTION') {
                    el.textContent = dict[key];
                    el.value = dict[key];
                } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });
        // Update lang attribute on <html>
        document.documentElement.lang = lang === 'am' ? 'am' : 'en';
        // Toggle Ethiopic font on body when Amharic
        if (lang === 'am') {
            document.body.style.fontFamily = '"Noto Sans Ethiopic", "Ethiopic", "Nyala", serif';
        } else {
            document.body.style.fontFamily = '';
        }
        localStorage.setItem('chune_lang', lang);
    }

    // ──────────────────────────────────────────────
    //  Toggle button
    // ──────────────────────────────────────────────
    function initToggle() {
        var btn = document.getElementById('langToggle');
        if (!btn) return;

        var currentLang = localStorage.getItem('chune_lang') || 'en';
        applyLang(currentLang);
        updateBtnLabel(btn, currentLang);

        btn.addEventListener('click', function () {
            var newLang = (localStorage.getItem('chune_lang') || 'en') === 'en' ? 'am' : 'en';
            applyLang(newLang);
            updateBtnLabel(btn, newLang);
        });
    }

    function updateBtnLabel(btn, lang) {
        btn.textContent = lang === 'am' ? 'አማ | EN' : 'EN | አማ';
    }

    // Run after DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initToggle);
    } else {
        initToggle();
    }
})();
