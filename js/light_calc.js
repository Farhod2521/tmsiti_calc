       // O'zgaruvchilar
        let dimensions = {
            width: 3.0,
            length: 3.0,
            height: 3.0
        };
        
        let currentLk = 0;
        let buildingCategories = [];
        let roomCategories = [];
        let roomDetails = [];
        let allLamps = [];
        let lampGroups = {};
        let selectedLampType = '';
        let calculatedLampsByCategory = {}; // Kategoriya bo'yicha hisoblangan lampochkalar
        let currentCleanlinessCoefficient = 1.5;
        // Light indeks ma'lumotlari
        const lightIndices = [
                {
                    "indeks": 0.40,
                    "koeffitsientlar": [
                    { "rang": "80/80/30", "qiymat": 0.45 },
                    { "rang": "80/50/30", "qiymat": 0.25 },
                    { "rang": "70/50/20", "qiymat": 0.23 },
                    { "rang": "50/50/10", "qiymat": 0.22 },
                    { "rang": "50/30/10", "qiymat": 0.18 },
                    { "rang": "30/30/10", "qiymat": 0.18 },
                    { "rang": "0/0/0", "qiymat": 0.14 }
                    ]
                },
                {
                    "indeks": 0.60,
                    "koeffitsientlar": [
                    { "rang": "80/80/30", "qiymat": 0.55 },
                    { "rang": "80/50/30", "qiymat": 0.33 },
                    { "rang": "70/50/20", "qiymat": 0.32 },
                    { "rang": "50/50/10", "qiymat": 0.30 },
                    { "rang": "50/30/10", "qiymat": 0.26 },
                    { "rang": "30/30/10", "qiymat": 0.26 },
                    { "rang": "0/0/0", "qiymat": 0.19 }
                    ]
                },
                {
                    "indeks": 0.80,
                    "koeffitsientlar": [
                    { "rang": "80/80/30", "qiymat": 0.63 },
                    { "rang": "80/50/30", "qiymat": 0.41 },
                    { "rang": "70/50/20", "qiymat": 0.38 },
                    { "rang": "50/50/10", "qiymat": 0.36 },
                    { "rang": "50/30/10", "qiymat": 0.32 },
                    { "rang": "30/30/10", "qiymat": 0.31 },
                    { "rang": "0/0/0", "qiymat": 0.24 }
                    ]
                },
                {
                    "indeks": 1.00,
                    "koeffitsientlar": [
                    { "rang": "80/80/30", "qiymat": 0.68 },
                    { "rang": "80/50/30", "qiymat": 0.45 },
                    { "rang": "70/50/20", "qiymat": 0.43 },
                    { "rang": "50/50/10", "qiymat": 0.41 },
                    { "rang": "50/30/10", "qiymat": 0.34 },
                    { "rang": "30/30/10", "qiymat": 0.34 },
                    { "rang": "0/0/0", "qiymat": 0.27 }
                    ]
                },
                {
                    "indeks": 1.25,
                    "koeffitsientlar": [
                    { "rang": "80/80/30", "qiymat": 0.72 },
                    { "rang": "80/50/30", "qiymat": 0.50 },
                    { "rang": "70/50/20", "qiymat": 0.46 },
                    { "rang": "50/50/10", "qiymat": 0.43 },
                    { "rang": "50/30/10", "qiymat": 0.37 },
                    { "rang": "30/30/10", "qiymat": 0.37 },
                    { "rang": "0/0/0", "qiymat": 0.30 }
                    ]
                },
                {
                    "indeks": 1.50,
                    "koeffitsientlar": [
                    { "rang": "80/80/30", "qiymat": 0.76 },
                    { "rang": "80/50/30", "qiymat": 0.54 },
                    { "rang": "70/50/20", "qiymat": 0.49 },
                    { "rang": "50/50/10", "qiymat": 0.47 },
                    { "rang": "50/30/10", "qiymat": 0.41 },
                    { "rang": "30/30/10", "qiymat": 0.39 },
                    { "rang": "0/0/0", "qiymat": 0.32 }
                    ]
                },
                {
                    "indeks": 2.00,
                    "koeffitsientlar": [
                    { "rang": "80/80/30", "qiymat": 0.79 },
                    { "rang": "80/50/30", "qiymat": 0.58 },
                    { "rang": "70/50/20", "qiymat": 0.55 },
                    { "rang": "50/50/10", "qiymat": 0.49 },
                    { "rang": "50/30/10", "qiymat": 0.46 },
                    { "rang": "30/30/10", "qiymat": 0.45 },
                    { "rang": "0/0/0", "qiymat": 0.37 }
                    ]
                },
                {
                    "indeks": 2.50,
                    "koeffitsientlar": [
                    { "rang": "80/80/30", "qiymat": 0.85 },
                    { "rang": "80/50/30", "qiymat": 0.63 },
                    { "rang": "70/50/20", "qiymat": 0.58 },
                    { "rang": "50/50/10", "qiymat": 0.56 },
                    { "rang": "50/30/10", "qiymat": 0.50 },
                    { "rang": "30/30/10", "qiymat": 0.49 },
                    { "rang": "0/0/0", "qiymat": 0.40 }
                    ]
                },
                {
                    "indeks": 3.00,
                    "koeffitsientlar": [
                    { "rang": "80/80/30", "qiymat": 0.94 },
                    { "rang": "80/50/30", "qiymat": 0.76 },
                    { "rang": "70/50/20", "qiymat": 0.69 },
                    { "rang": "50/50/10", "qiymat": 0.63 },
                    { "rang": "50/30/10", "qiymat": 0.59 },
                    { "rang": "30/30/10", "qiymat": 0.57 },
                    { "rang": "0/0/0", "qiymat": 0.50 }
                    ]
                },
                {
                    "indeks": 4.00,
                    "koeffitsientlar": [
                    { "rang": "80/80/30", "qiymat": 1.08 },
                    { "rang": "80/50/30", "qiymat": 0.88 },
                    { "rang": "70/50/20", "qiymat": 0.84 },
                    { "rang": "50/50/10", "qiymat": 0.77 },
                    { "rang": "50/30/10", "qiymat": 0.70 },
                    { "rang": "30/30/10", "qiymat": 0.68 },
                    { "rang": "0/0/0", "qiymat": 0.62 }
                    ]
                },
                {
                    "indeks": 5.00,
                    "koeffitsientlar": [
                    { "rang": "80/80/30", "qiymat": 1.08 },
                    { "rang": "80/50/30", "qiymat": 0.97 },
                    { "rang": "70/50/20", "qiymat": 0.88 },
                    { "rang": "50/50/10", "qiymat": 0.82 },
                    { "rang": "50/30/10", "qiymat": 0.75 },
                    { "rang": "30/30/10", "qiymat": 0.74 },
                    { "rang": "0/0/0", "qiymat": 0.68 }
                    ]
                }
        ];
        // AI Maslahatchi uchun alohida hisoblash funksiyasi
        function calculateAIAdvisor() {
            // AI uchun doimiy qiymatlar (rasmdagi kabi)
            const aiMF = 0.80; // Maintenance Factor
            const aiUF = 0.60; // Utilization Factor (taxminiy)
            
            // Xona parametrlari
            const width = dimensions.width;
            const length = dimensions.length;
            const area = width * length;
            const lk = currentLk || 150; // Agar currentLk bo'lmasa, 150 lux
            
            // Ishchi balandlik (rasmdagi kabi)
            const workHeight = 0.8; // Ishchi tekislik
            const ceilingHeight = dimensions.height;
            const hm = ceilingHeight - workHeight; // Hm = 2.2 m (rasmdagi misolda)
            
            // Room Index hisoblash (faqat tekshiruv uchun)
            const k = (length * width) / (hm * (length + width));
            
            // Umumiy yorug'lik oqimini hisoblash (rasmdagi formula)
            const totalLumens = Math.round((lk * area) / (aiUF * aiMF));
            
            return {
                area: area,
                requiredLux: lk,
                roomHeight: hm,
                roomIndex: k,
                totalLumens: totalLumens,
                maintenanceFactor: aiMF,
                utilizationFactor: aiUF
            };
        }
                // 1. Dastur yuklanganda bino toifalarini va lampochkalarni yuklash
        document.addEventListener('DOMContentLoaded', async function() {
            await Promise.all([
                loadBuildingCategories(),
                loadAllLamps()
            ]);
        });
        
        // 2. Bino toifalarini yuklash
        async function loadBuildingCategories() {
            try {
                const response = await fetch('https://calc.tmsiti.uz/api/v1/lightbulb/room_categories/');
                buildingCategories = await response.json();
                
                const buildingSelect = document.getElementById('buildingType');
                
                buildingCategories.forEach(building => {
                    const option = document.createElement('option');
                    option.value = building.id;
                    option.textContent = building.name;
                    buildingSelect.appendChild(option);
                });
            } catch (error) {
                console.error('Bino toifalarini yuklashda xatolik:', error);
            }
        }
        
        // 3. Barcha lampochkalarni yuklash va avtomatik guruhlash
        async function loadAllLamps() {
            try {
                const response = await fetch('https://calc.tmsiti.uz/api/v1/lightbulb/led-panels/');
                allLamps = await response.json();
                
                lampGroups = smartGroupLamps(allLamps);
                populateRecommendedLights(lampGroups);
                
            } catch (error) {
                console.error('Lampochkalarni yuklashda xatolik:', error);
            }
        }
        
        // 4. Smart guruhlash funksiyasi
        function smartGroupLamps(lamps) {
            const groups = {};
            
            const keywords = {
                'панели четырех угольный': 'LED панели четырех угольный',
                'четырехугольный': 'LED панели четырех угольный',
                'четырех угольный': 'LED панели четырех угольный',
                'панель квадрат': 'LED панели четырех угольный',
                'капсулы': 'Led лампы в форме капсулы',
                'capsule': 'Led лампы в форме капсулы',
                'капсульная': 'Led лампы в форме капсулы',
                'панели круглые': 'LED панели круглые',
                'круглая панель': 'LED панели круглые',
                'round panel': 'LED панели круглые',
                'накладные круглые': 'Led панели накладные круглые',
                'накладная круглая': 'Led панели накладные круглые',
                'линейные': 'LED лампы линейные',
                'linear': 'LED лампы линейные',
                'линейная': 'LED лампы линейные',
                'прожектор': 'LED прожекторы',
                'projector': 'LED прожекторы',
                'прожекторы': 'LED прожекторы',
                'потолочные': 'LED светильники потолочные',
                'ceiling': 'LED светильники потолочные',
                'потолочный': 'LED светильniki потолочные',
                'лент': 'LED светодиодные ленты',
                'strip': 'LED светодиодные ленты',
                'лента': 'LED светодиодные ленты'
            };
            
            lamps.forEach(lamp => {
                if (lamp.name) {
                    const nameLower = lamp.name.toLowerCase();
                    let groupFound = false;
                    
                    for (const [keyword, groupName] of Object.entries(keywords)) {
                        if (nameLower.includes(keyword.toLowerCase())) {
                            if (!groups[groupName]) {
                                groups[groupName] = [];
                            }
                            groups[groupName].push(lamp);
                            groupFound = true;
                            break;
                        }
                    }
                    
                    if (!groupFound) {
                        const words = lamp.name.split(' ');
                        if (words.length >= 2) {
                            const mainType = words[0] + ' ' + words[1];
                            if (!groups[mainType]) {
                                groups[mainType] = [];
                            }
                            groups[mainType].push(lamp);
                        } else {
                            if (!groups['Boshqa']) {
                                groups['Boshqa'] = [];
                            }
                            groups['Boshqa'].push(lamp);
                        }
                    }
                }
            });
            
            return groups;
        }
        
        // 5. Tavsiya etilgan chiroqlarni to'ldirish
        function populateRecommendedLights(groups) {
            const recommendedLights = document.getElementById('recommendedLights');
            recommendedLights.innerHTML = '';
            
            const mainGroups = [
                'LED панели четырех угольный',
                'Led лампы в форме капсулы',
                'LED панели круглые',
                'Led панели накладные круглые',
                'LED лампы линейные',
                'LED прожекторы',
                'LED светильniki потолочные',
                'LED светодиодные ленты'
            ];
            
            let displayedGroups = 0;
            
            mainGroups.forEach(type => {
                const lampsInGroup = groups[type] || [];
                const lampCount = lampsInGroup.length;
                
                if (lampCount > 0 && displayedGroups < 8) {
                    const col = document.createElement('div');
                    col.className = 'col-md-3';
                    
                    const firstLamp = lampsInGroup[0];
                    const lampImage = firstLamp.image || 'https://via.placeholder.com/60x60?text=No+Image';
                    
                    col.innerHTML = `
                        <div class="light-card" onclick="showLampsByType('${type}')">
                            <img src="${lampImage}" alt="${type}" class="light-icon">
                            <div class="light-name">${type}</div>
                            <div class="light-desc">${lampCount} xil model</div>
                        </div>
                    `;
                    
                    recommendedLights.appendChild(col);
                    displayedGroups++;
                }
            });
            
            if (displayedGroups < 8) {
                Object.keys(groups).forEach(type => {
                    if (!mainGroups.includes(type) && displayedGroups < 8) {
                        const lampsInGroup = groups[type] || [];
                        const lampCount = lampsInGroup.length;
                        
                        if (lampCount > 0) {
                            const col = document.createElement('div');
                            col.className = 'col-md-3';
                            
                            const firstLamp = lampsInGroup[0];
                            const lampImage = firstLamp.image || 'https://via.placeholder.com/60x60?text=No+Image';
                            
                            col.innerHTML = `
                                <div class="light-card" onclick="showLampsByType('${type}')">
                                    <img src="${lampImage}" alt="${type}" class="light-icon">
                                    <div class="light-name">${type}</div>
                                    <div class="light-desc">${lampCount} xil model</div>
                                </div>
                            `;
                            
                            recommendedLights.appendChild(col);
                            displayedGroups++;
                        }
                    }
                });
            }
            
            if (displayedGroups === 0) {
                recommendedLights.innerHTML = `
                    <div class="col-12 text-center">
                        <div class="text-muted">Lampochkalar topilmadi</div>
                    </div>
                `;
            }
        }
        
        // 6. Bino toifasi tanlanganda
        async function onBuildingTypeChange() {
            const buildingSelect = document.getElementById('buildingType');
            const roomSelect = document.getElementById('roomType');
            const selectedBuildingId = buildingSelect.value;
            
            if (!selectedBuildingId) {
                roomSelect.innerHTML = '<option value="">-- Avval bino turini tanlang --</option>';
                roomSelect.disabled = true;
                clearTechTable();
                resetLumen();
                hideAIandRecommendation();
                return;
            }
            
            const selectedBuilding = buildingCategories.find(b => b.id == selectedBuildingId);
            if (selectedBuilding) {
                document.getElementById('buildingTypeText').textContent = selectedBuilding.name;
            }
            
            try {
                const response = await fetch(`https://calc.tmsiti.uz/api/v1/lightbulb/api/room-categories/${selectedBuildingId}/`);
                const roomData = await response.json();
                roomCategories = roomData.subcategories;
                
                roomSelect.innerHTML = '<option value="">-- Xona turini tanlang --</option>';
                roomCategories.forEach(room => {
                    const option = document.createElement('option');
                    option.value = room.id;
                    option.textContent = room.name;
                    roomSelect.appendChild(option);
                });
                
                roomSelect.disabled = false;
                clearTechTable();
                resetLumen();
                hideAIandRecommendation();
                
            } catch (error) {
                console.error('Xona toifalarini yuklashda xatolik:', error);
            }
        }
        
        // 7. Xona turi tanlanganda
        async function onRoomTypeChange() {
            const roomSelect = document.getElementById('roomType');
            const selectedRoomId = roomSelect.value;
            
            if (!selectedRoomId) {
                clearTechTable();
                resetLumen();
                hideAIandRecommendation();
                return;
            }
            
            const selectedRoom = roomCategories.find(r => r.id == selectedRoomId);
            if (selectedRoom) {
                document.getElementById('roomTypeText').textContent = selectedRoom.name;
            }
            
            try {
                const response = await fetch(`https://calc.tmsiti.uz/api/v1/lightbulb/rooms/${selectedRoomId}/`);
                roomDetails = await response.json();
                
                updateTechTable();
                calculate();
                document.getElementById('lightingInfoAlert').classList.add('show');
                
            } catch (error) {
                console.error('Xona tafsilotlarini yuklashda xatolik:', error);
            }
        }
        
        // 8. Texnik talablar jadvalini yangilash
        function updateTechTable() {
            const tableBody = document.getElementById('techTableBody');
            tableBody.innerHTML = '';
            
            if (roomDetails.length === 0) return;
            
            roomDetails.forEach(room => {
                const row = document.createElement('tr');
                
                const categoryCell = document.createElement('td');
                categoryCell.textContent = room.category_name || room.name;
                
                const lkCell = document.createElement('td');
                lkCell.textContent = room.lk;
                lkCell.id = 'lkValue';
                
                const raCell = document.createElement('td');
                raCell.textContent = room.ra || '85';
                
                const ugrCell = document.createElement('td');
                ugrCell.textContent = room.ugr || '24';
                
                row.appendChild(categoryCell);
                row.appendChild(lkCell);
                row.appendChild(raCell);
                row.appendChild(ugrCell);
                
                tableBody.appendChild(row);
                
                currentLk = room.lk || 0;
                document.getElementById('luxValue').textContent = currentLk;
            });
        }
        
        // 9. O'lchamni o'zgartirish
        function changeDimension(type, delta) {
            dimensions[type] = Math.max(1.0, Math.min(20.0, dimensions[type] + delta));
            dimensions[type] = Math.round(dimensions[type] * 10) / 10;
            
            document.getElementById(type).textContent = dimensions[type].toFixed(1);
            
            document.getElementById('dimTop').textContent = dimensions.height.toFixed(1) + ' m';
            document.getElementById('dimRight').textContent = dimensions.length.toFixed(1) + ' m';
            document.getElementById('dimBottom').textContent = dimensions.width.toFixed(1) + ' m';
            
            calculate();
            
            if (document.getElementById('roomType').value && document.getElementById('colorScheme').value) {
                calculateLamps();
            }
        }
        
        // 10. Asosiy hisoblash funksiyasi
        function calculate() {
            const area = dimensions.width * dimensions.length;
            const lumen = currentLk > 0 ? Math.round(area * currentLk * 1.3) : 0;
            
            document.getElementById('area').textContent = area.toFixed(2);
            document.getElementById('lumen').textContent = lumen.toLocaleString();
            
            if (currentLk > 0) {
                document.querySelector('.result-card.green .result-note').innerHTML = 
                    `<i class="bi bi-check-circle me-1"></i>Norma-min ${Math.round(area * currentLk)} lm`;
            }
        }
        // 11. Lampochkalarni hisoblash - TO'G'RILANGAN FUNKSIYA
        function calculateLamps() {
            // Barcha parametrlar tanlangani tekshirish
            const roomType = document.getElementById('roomType').value;
            const colorScheme = document.getElementById('colorScheme').value;
            const roomCleanliness = document.getElementById('roomCleanliness').value;
            
            if (!roomType || !colorScheme || !roomCleanliness || roomDetails.length === 0) {
                hideAIandRecommendation();
                document.getElementById('lightingInfoAlert').classList.remove('show');
                return;
            }
            
            // AI bo'limini ko'rsatish
            document.getElementById('aiSection').classList.add('show');
            
            // Boshlang'ich AI matnini ko'rsatish
            document.getElementById('aiAdvice').innerHTML = 
                "Xona parametrlari tahlil qilinmoqda. AI maslahatchi sizga eng yaxshi yoritish variantini tavsiya qiladi.";
            
            // Xona parametrlari
            const area = dimensions.width * dimensions.length;
            const lk = currentLk;
            
            // Eng yaqin indeksni topish (xona tozalik koeffitsienti)
            let closestIndex = lightIndices[0];
            const x = parseFloat(roomCleanliness); // xona tozalik koeffitsienti
            
            // Rang kombinatsiyasi uchun koeffitsientni topish
            let coefficient = 0.5;
            for (const indexData of lightIndices) {
                for (const koeff of indexData.koeffitsientlar) {
                    if (koeff.rang === colorScheme) {
                        coefficient = koeff.qiymat;
                        break;
                    }
                }
            }
            
            // HAR BIR KATEGORIYA UCHUN ALohida hisoblash
            calculatedLampsByCategory = {};
            let bestLampOverall = null;
            let minLampsOverall = Infinity;
            
            Object.keys(lampGroups).forEach(category => {
                const lampsInCategory = lampGroups[category];
                let bestLampInCategory = null;
                let minLampsInCategory = Infinity;
                
                lampsInCategory.forEach(lamp => {
                    const F = lamp.luminous_flux_max || 0;
                    if (F === 0) return;
                    
                    // TO'G'RI FORMULA: N = (s × lk) / (ranglar koeffsenti × lampochka lm × X)
                    const n = Math.ceil((lk * area) / (coefficient * F * x));
                    const total_P  = (parseInt(lamp.power) || 0) * n;
                    if (n < minLampsInCategory) {
                        minLampsInCategory = n;
                        bestLampInCategory = {
                            lamp: lamp,
                            count: n,
                            totalPower: (parseInt(lamp.power) || 0) * n,
                            cleanlinessCoefficient: x,
                            colorCoefficient: coefficient
                        };
                    }
                    
                    if (n < minLampsOverall) {
                        // Faqat "Led лампы в форме капли" turidagi lampochkani hisobga olish
                        if (lamp.name && lamp.name.includes("Led лампы в форме капли")) {
                            minLampsOverall = n;
                            bestLampOverall = {
                                lamp: lamp,
                                count: n,
                                totalPower: (parseInt(lamp.power) || 0) * n,
                                category: category,
                                cleanlinessCoefficient: x,
                                colorCoefficient: coefficient
                            };
                        }
                    }
                });
                
                if (bestLampInCategory) {
                    calculatedLampsByCategory[category] = bestLampInCategory;
                }
            });
            
            // Eng yaxshi lampochkani ko'rsatish
            if (bestLampOverall) {
                updateProductCard(bestLampOverall.lamp, bestLampOverall.count, bestLampOverall.cleanlinessCoefficient, bestLampOverall.colorCoefficient);
                
                // AI maslahatini animatsiya bilan ko'rsatish
                updateAIAdvice(bestLampOverall.lamp, bestLampOverall.count, bestLampOverall.cleanlinessCoefficient, bestLampOverall.colorCoefficient);
                
                updateCategoryLampsTable();
            }
        } 

        
        
        // 12. Mahsulot kartasini yangilash (to'g'rilangan)
        function updateProductCard(lamp, count, cleanlinessCoefficient, colorCoefficient) {
            document.getElementById('productImage').src = lamp.image || 'https://via.placeholder.com/110x110?text=No+Image';
            document.getElementById('productImage').alt = lamp.name;
            document.getElementById('productTitle').textContent = lamp.name || 'LED Lampa';
            document.getElementById('lightingInfoAlert').classList.add('show');
            // Koeffitsientlarni hisobga olgan holda tavsiya
            let cleanlinessText = '';
            let colorText = '';
            
            switch(cleanlinessCoefficient) {
                case 1.25:
                    cleanlinessText = 'Juda toza xona';
                    break;
                case 1.5:
                    cleanlinessText = 'Toza xona';
                    break;
                case 1.75:
                    cleanlinessText = 'O\'rtacha toza xona';
                    break;
                case 2:
                    cleanlinessText = 'Toza bo\'lmagan xona';
                    break;
                default:
                    cleanlinessText = 'Xona';
            }
            
            // Rang kombinatsiyasini aniqlash
            const colorScheme = document.getElementById('colorScheme').value;
            switch(colorScheme) {
                case '80/80/30':
                    colorText = 'Juda och ranglar';
                    break;
                case '80/50/30':
                    colorText = 'Och ranglar';
                    break;
                case '70/50/20':
                    colorText = 'O\'rtacha och ranglar';
                    break;
                case '50/50/10':
                    colorText = 'O\'rtacha ranglar';
                    break;
                case '50/30/10':
                    colorText = 'Kulrang / qorong\'i kulrang';
                    break;
                case '30/30/10':
                    colorText = 'Qorong\'i ranglar';
                    break;
                case '0/0/0':
                    colorText = 'Juda qorong\'i';
                    break;
                default:
                    colorText = '';
            }
            
            document.getElementById('productDesc').textContent = 
                `${cleanlinessText}, ${colorText} uchun eng optimal variant.`;
            
            document.getElementById('requiredCount').textContent = `${count} ta`;
            
            const powerPerLamp = parseInt(lamp.power) || 0;
            const totalPower = powerPerLamp;
            document.getElementById('totalPower').textContent = `${totalPower}W`;
        }
        // 13. AI maslahatini yangilash (to'g'rilangan)
        // AI javobini animatsiya bilan chiqarish funksiyasi
        function typeWriter(text, elementId, speed = 30) {
            const element = document.getElementById(elementId);
            element.innerHTML = '';
            let i = 0;
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }
        // AI maslahatchiga so'rov yuborish funksiyasi
        async function getAIAdvice(data) {
            try {
                const response = await fetch('https://cal.tmsiti.uz/api/v1/lightbulb/lighting/chat/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
      
                    body: JSON.stringify(data)
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP xatosi! Status: ${response.status}`);
                }
                
                const result = await response.json();
                return result.recommendation || "Maslahat mavjud emas";
            } catch (error) {
                console.error('AI maslahatchidan javob olishda xatolik:', error);
                return "AI maslahatchi bilan bog'lanishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.";
            }
        }

        // AI tavsiyalarini yangilash (to'g'rilangan va animatsiya qo'shilgan)
        async function updateAIAdvice(lamp, count, cleanlinessCoefficient, colorCoefficient) {
            const powerPerLamp = parseInt(lamp.power) || 0;
            const totalPower = powerPerLamp;
            const flux = lamp.luminous_flux_max || 0;
            
            // AI ga yuboriladigan ma'lumotlar
            const aiData = {
                "width": dimensions.width,
                "length": dimensions.length,
                "height": dimensions.height,
                "reflectance": document.getElementById('colorScheme').value || "70/50/20",
                "required_lux": currentLk || 150,
                "room_type": document.getElementById('roomType').options[document.getElementById('roomType').selectedIndex]?.text || "turar joy xonasi"
            };
            
            // AI javobini so'rash
            const aiMessage = await getAIAdvice(aiData);
            
            // Animatsiya boshlash uchun loading holati
            const aiAdviceElement = document.getElementById('aiAdvice');
            aiAdviceElement.innerHTML = '<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>';
            
            // 1.5 soniya kutib, keyin animatsiya bilan chiqarish
            setTimeout(() => {
                typeWriter(aiMessage, 'aiAdvice', 20);
            }, 1500);
            
            // Tejamkorlikni baholash
            let efficiency = "O'rtacha";
            if (powerPerLamp <= 15) efficiency = "Yuqori tejamkor";
            else if (powerPerLamp <= 30) efficiency = "Tejamkor";
            else if (powerPerLamp <= 50) efficiency = "O'rtacha";
            else efficiency = "Ko'p quvvat";
            
            // Yorug'lik darajasi
            let brightnessLevel = "O'rtacha";
            if (flux >= 3000) brightnessLevel = "Yuqori";
            else if (flux >= 1500) brightnessLevel = "Yaxshi";
            else brightnessLevel = "Past";
            
            document.getElementById('efficiencyTag').textContent = `Tejamkorlik: ${efficiency}`;
            document.getElementById('brightnessTag').textContent = `Yorug'lik: ${brightnessLevel}`;
        }
function updateCategoryLampsTable() {
    const tableBody = document.getElementById('categoryLampsBody');
    tableBody.innerHTML = '';

    let rowCount = 0;

    Object.values(calculatedLampsByCategory).forEach(lampData => {
        const lamp = lampData.lamp;
        const count = lampData.count;

        const powerPerLamp = parseInt(lamp.power) || 0;
        const lumenPerLamp = lamp.luminous_flux_max || 0;
        const totalPower = powerPerLamp * count;

        const row = document.createElement('tr');

        // 🖼 Rasmi
        const imgCell = document.createElement('td');
        if (lamp.image) {
            const img = document.createElement('img');
            img.src = lamp.image;
            img.alt = lamp.name;
            img.className = 'category-image';
            imgCell.appendChild(img);
        } else {
            imgCell.textContent = '-';
        }

        // 📛 Nomi
        const nameCell = document.createElement('td');
        nameCell.textContent = lamp.name || '-';

        // 🔢 Kerakli soni
        const countCell = document.createElement('td');
        countCell.innerHTML = `<strong>${count} ta</strong>`;

        // ⚡ Quvvat (bitta)
        const powerCell = document.createElement('td');
        powerCell.textContent = `${powerPerLamp} W`;

        // 💡 Lumen (bitta)  ← ASOSIY O‘ZGARISH
        const lumenCell = document.createElement('td');
        lumenCell.textContent = `${lumenPerLamp.toLocaleString()} lm`;

        // ⚡⚡ Jami quvvat
        const totalPowerCell = document.createElement('td');
        totalPowerCell.innerHTML = `<strong>${totalPower} W</strong>`;

        row.appendChild(imgCell);
        row.appendChild(nameCell);
        row.appendChild(countCell);
        row.appendChild(powerCell);
        row.appendChild(lumenCell);
        row.appendChild(totalPowerCell);

        tableBody.appendChild(row);
        rowCount++;
    });

    document.getElementById('categoryLampsTitle').textContent =
        `Barcha lampochka turlari (${rowCount} ta)`;

    if (rowCount === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center text-muted">
                    Maʼlumot topilmadi
                </td>
            </tr>
        `;
    }
}

        // 15. Kategoriya lampochkalarini ko'rsatish/yashirish
        function toggleCategoryLamps() {
            const section = document.getElementById('categoryLampsSection');
            const toggleBtn = document.querySelector('.details-toggle span:first-child');
            
            if (section.classList.contains('show')) {
                section.classList.remove('show');
                toggleBtn.textContent = 'Barcha lampochka turlarini ko\'rish';
            } else {
                section.classList.add('show');
                toggleBtn.textContent = 'Lampochka turlarini yashirish';
                
                // Jadvalni yangilash
                updateCategoryLampsTable();
            }
        }
        
        // 16. Lampochka turi bo'yicha jadvallash
        function showLampsByType(type) {
            selectedLampType = type;
            
            document.querySelectorAll('.light-card').forEach(card => {
                card.classList.remove('active');
            });
            
            event.currentTarget.classList.add('active');
            
            const lampsInGroup = lampGroups[type] || [];
            
            const sortedLamps = [...lampsInGroup].sort((a, b) => {
                const powerA = parseInt(a.power) || 0;
                const powerB = parseInt(b.power) || 0;
                return powerA - powerB;
            });
            
            populateLampsTable(sortedLamps, type);
        }
        
        // 17. Lampochkalar jadvalini to'ldirish
        function populateLampsTable(filteredLamps, type) {
            const tableBody = document.getElementById('lampsTableBody');
            tableBody.innerHTML = '';
            
            if (filteredLamps.length === 0) {
                tableBody.innerHTML = `
                    <tr>
                        <td colspan="5" class="text-center text-muted">
                            Ushbu turdagi lampochkalar topilmadi
                        </td>
                    </tr>
                `;
            } else {
                filteredLamps.forEach(lamp => {
                    const row = document.createElement('tr');
                    
                    const imgCell = document.createElement('td');
                    if (lamp.image) {
                        const img = document.createElement('img');
                        img.src = lamp.image;
                        img.alt = lamp.name;
                        img.className = 'lamp-image';
                        imgCell.appendChild(img);
                    } else {
                        imgCell.textContent = '-';
                    }
                    
                    const nameCell = document.createElement('td');
                    nameCell.textContent = lamp.name || '-';
                    
                    const powerCell = document.createElement('td');
                    powerCell.textContent = lamp.power ? `${lamp.power} W` : '-';
                    
                    const fluxCell = document.createElement('td');
                    fluxCell.textContent = lamp.luminous_flux || '-';
                    
                    const dimensionsCell = document.createElement('td');
                    dimensionsCell.textContent = lamp.dimensions || '-';
                    
                    row.appendChild(imgCell);
                    row.appendChild(nameCell);
                    row.appendChild(powerCell);
                    row.appendChild(fluxCell);
                    row.appendChild(dimensionsCell);
                    
                    tableBody.appendChild(row);
                });
            }
            
            document.getElementById('lampsTableTitle').textContent = `${type} lampochkalari (${filteredLamps.length} ta)`;
            document.getElementById('lampsTableContainer').style.display = 'block';
            
            setTimeout(() => {
                document.getElementById('lampsTableContainer').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
        
        // 18. Texnik jadvalni tozalash
        function clearTechTable() {
            const tableBody = document.getElementById('techTableBody');
            tableBody.innerHTML = '<tr><td colspan="4" class="text-center text-muted">Bino va xona turini tanlang</td></tr>';
            currentLk = 0;
            document.getElementById('luxValue').textContent = '---';
        }
        
        // 19. Yorug'lik oqimini nolga qaytarish (o'zgartirilgan)
        function resetLumen() {
            document.getElementById('lumen').textContent = '0';
            document.querySelector('.result-card.green .result-note').innerHTML = 
                '<i class="bi bi-check-circle me-1"></i>Bino va xona turini tanlang';
            
            // Xona tozalik koeffitsientini ham reset qilish
            document.getElementById('roomCleanliness').selectedIndex = 0;
            document.getElementById('colorScheme').selectedIndex = 0;
        }

        // 20. AI va tavsiya bo'limlarini yashirish (o'zgartirilgan)
        function hideAIandRecommendation() {
            toggleAISection(false);
            document.getElementById('lightingInfoAlert').classList.remove('show');
            document.getElementById('categoryLampsSection').classList.remove('show');
            document.getElementById('lampsTableContainer').style.display = 'none';
            
            // Tozalik koeffitsientiga mos ravishda xabarlar
            document.querySelectorAll('.light-card').forEach(card => {
                card.classList.remove('active');
            });
        }

        // 21. Qoshimcha variantlarni ko'rsatish (o'zgartirilgan)
        function showAlternativeVariants() {
            const cleanliness = document.getElementById('roomCleanliness').value;
            const colorScheme = document.getElementById('colorScheme').value;
            
            if (!cleanliness || !colorScheme) {
                alert("Iltimos, avval xona tozaligi va rang kombinatsiyasini tanlang!");
                return;
            }
            
            // Tozalik darajasi bo'yicha qo'shimcha maslahatlar
            let advice = '';
            switch(cleanliness) {
                case '1.25':
                    advice = 'Juda toza xonalar uchun past quvvatli, ammo yuqori samarali lampochkalarni tanlang.';
                    break;
                case '1.5':
                    advice = 'Toza xonalar uchun standart LED lampochkalar yetarli bo\'ladi.';
                    break;
                case '1.75':
                    advice = 'O\'rtacha tozalikdagi xonalar uchun qo\'shimcha yorug\'lik beradigan lampochkalarni tanlang.';
                    break;
                case '2':
                    advice = 'Toza bo\'lmagan xonalar uchun kuchliroq va changga chidamli lampochkalar tavsiya etiladi.';
                    break;
            }
            
            alert(`Boshqa variantlar:\n\n${advice}\n\nTozalik koeffitsienti: ${cleanliness}\nRang kombinatsiyasi: ${colorScheme}`);
        }
        
        // 22. Qadamlar uchun bosish qobiliyati
        document.querySelectorAll('.step-item').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelectorAll('.step-item').forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
        // Boshlang'ich hisoblash
        calculate();