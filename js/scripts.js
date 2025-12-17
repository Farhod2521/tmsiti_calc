        function toggleTheme() {
            const body = document.body;
            const themeIcon = document.getElementById('themeIcon');
            
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            } else {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }

        window.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme');
            const themeIcon = document.getElementById('themeIcon');
            
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-mode');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });


// Active nav item boshqaruvi
function setActiveNavItem() {
    // Hozirgi sahifa nomini olish
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    console.log("Current page:", currentPage); // Debug uchun
    
    // Barcha nav-item elementlari
    const navItems = document.querySelectorAll('.nav-item');
    
    // Har bir nav-item uchun tekshirish
    navItems.forEach(item => {
        // href atributini olish
        const href = item.getAttribute('href');
        
        console.log("Checking href:", href); // Debug uchun
        
        // Agar href currentPage bilan mos kelsa yoki index.html bo'lsa
        if (href === currentPage || 
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === '' && href === 'index.html')) {
            item.classList.add('active');
            console.log("Active set for:", href); // Debug uchun
        } else {
            item.classList.remove('active');
        }
    });
}

// Active kalkulyator elementini belgilash
function setActiveCalcItem() {
    const currentPage = window.location.pathname.split('/').pop();
    console.log("Setting active calc for page:", currentPage); // Debug uchun
    
    // Kalkulyator sahifalari va ularning mos keladigan matnlari
    const calcPages = {
        'light_calc.html': 'Yorug\'lik kalkulyatori',
        'heating_calc.html': 'Isitish tizimi',
        'roof_calc.html': 'Tom yopish',
        'green_calc.html': 'Yashil Qurilish'
    };
    
    // Agar bu kalkulyator sahifasi bo'lsa
    if (calcPages[currentPage]) {
        const targetText = calcPages[currentPage];
        
        // Barcha calc-item elementlari
        const calcItems = document.querySelectorAll('.calc-item');
        
        calcItems.forEach(item => {
            // span elementini olish
            const span = item.querySelector('span');
            if (span && span.textContent.trim() === targetText) {
                // Aktiv holat uchun class qo'shish
                item.classList.add('calc-item-active');
                
                // Agar dark mode bo'lsa
                if (document.body.classList.contains('dark-mode')) {
                    item.style.backgroundColor = '#1e3a8a';
                } else {
                    item.style.backgroundColor = '#eff6ff';
                }
                
                console.log("Calc item activated:", targetText); // Debug uchun
            } else {
                item.classList.remove('calc-item-active');
                item.style.backgroundColor = '';
            }
        });
    }
}

// Tema o'zgartirish
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    
    body.classList.toggle('dark-mode');
    
    // Active calc-itemlarni yangilash
    const activeCalcItems = document.querySelectorAll('.calc-item-active');
    activeCalcItems.forEach(item => {
        if (body.classList.contains('dark-mode')) {
            item.style.backgroundColor = '#1e3a8a';
        } else {
            item.style.backgroundColor = '#eff6ff';
        }
    });
    
    // Iconni yangilash
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    }
}

// Sahifa yuklanganda
window.addEventListener('DOMContentLoaded', () => {
    // Tema sozlamalari
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('themeIcon');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    
    // Navigatsiya aktivligini sozlash
    setActiveNavItem();
    setActiveCalcItem();
    
    // Nav-item click hodisasi
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            // Oldingi activelarni olib tashlash
            document.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
            });
            // Yangisini qo'shish
            this.classList.add('active');
        });
    });
    
    // Calc-item click hodisasi
    document.querySelectorAll('.calc-item').forEach(item => {
        item.addEventListener('click', function() {
            // Oldingi calc-item activelarini olib tashlash
            document.querySelectorAll('.calc-item').forEach(calc => {
                calc.classList.remove('calc-item-active');
                calc.style.backgroundColor = '';
            });
            
            // Yangisini belgilash
            this.classList.add('calc-item-active');
            
            // Tema bo'yicha rang berish
            if (document.body.classList.contains('dark-mode')) {
                this.style.backgroundColor = '#1e3a8a';
            } else {
                this.style.backgroundColor = '#eff6ff';
            }
        });
    });
});
      // Theme Toggle
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            const icon = document.getElementById('themeIcon');
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'light');
            }
        }

        // Sidebar Toggle
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const toggleIcon = document.getElementById('toggleIcon');
            sidebar.classList.toggle('collapsed');
            
            if (sidebar.classList.contains('collapsed')) {
                toggleIcon.classList.remove('fa-chevron-left');
                toggleIcon.classList.add('fa-chevron-right');
                localStorage.setItem('sidebarState', 'collapsed');
            } else {
                toggleIcon.classList.remove('fa-chevron-right');
                toggleIcon.classList.add('fa-chevron-left');
                localStorage.setItem('sidebarState', 'expanded');
            }
        }

        // Mobile Sidebar Toggle
        function toggleMobileSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('show');
        }

        window.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme');
            const icon = document.getElementById('themeIcon');
            
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-mode');
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
            
            // YANGI QO'SHIMCHA: Sidebar'ni default holatda collapsed qilish
            const sidebar = document.getElementById('sidebar');
            const toggleIcon = document.getElementById('toggleIcon');
            
            // Avval localStorage'dan holatni tekshirish
            const sidebarState = localStorage.getItem('sidebarState');
            
            if (sidebarState === 'collapsed' || sidebarState === null) {
                // Agar saved state 'collapsed' bo'lsa yoki hech narsa saqlanmagan bo'lsa (default collapsed)
                sidebar.classList.add('collapsed');
                toggleIcon.classList.remove('fa-chevron-left');
                toggleIcon.classList.add('fa-chevron-right');
            }
        });
        // Close mobile sidebar when clicking outside
        document.addEventListener('click', (e) => {
            const sidebar = document.getElementById('sidebar');
            const mobileToggle = document.querySelector('.mobile-toggle');
            
            if (window.innerWidth <= 768 && 
                !sidebar.contains(e.target) && 
                !mobileToggle.contains(e.target) &&
                sidebar.classList.contains('show')) {
                sidebar.classList.remove('show');
            }
        });