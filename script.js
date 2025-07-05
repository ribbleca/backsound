// Global Variables
let currentTheme = 'light';
let currentColor = '#ff6b6b';
let currentSongIndex = 0;
let currentPhotoIndex = 0;
let petStats = { love: 80, hunger: 60 };
let userPoints = 0;
let achievements = [];

// Data Arrays
const photos = [
    'https://i.imgur.com/fxMzzTs_d.webp?maxwidth=1520&fidelity=grand',
    'https://i.imgur.com/AewMw3p_d.webp?maxwidth=1520&fidelity=grand',
    'https://i.imgur.com/52ORsL1_d.webp?maxwidth=760&fidelity=grand',
    'https://i.imgur.com/PthsY6i_d.webp?maxwidth=760&fidelity=grand',
    'https://i.imgur.com/cwUj3HS_d.webp?maxwidth=760&fidelity=grand',
    'https://i.imgur.com/JHQdejX_d.webp?maxwidth=760&fidelity=grand',
    'https://i.imgur.com/ptwpmBi.jpeg',
    'https://i.imgur.com/T7TYTkH.jpeg',
    'https://i.imgur.com/IydAwOH.jpeg',
    'https://i.imgur.com/UUqMkiX.jpeg',
    'https://i.imgur.com/SOYUoBH.jpeg',
    'https://i.imgur.com/1UdEE9y.jpeg',
    'https://i.imgur.com/FW3dLze.jpeg',
    'https://i.imgur.com/zVlncAO.jpeg',
    'https://i.imgur.com/y5gRxIm.jpeg',
    'https://i.imgur.com/dseYmqI.jpeg',
    'https://i.imgur.com/PXvIF50.jpeg',
    'https://i.imgur.com/yFjxa47.jpeg',
    'https://i.imgur.com/mazoFdC.jpeg',
    'https://i.imgur.com/ZowcXa7.jpeg',
    'https://i.imgur.com/MO1EN19.jpeg',
    'https://i.imgur.com/wq9JbNn.jpeg',
    'https://i.imgur.com/cRAtqH3.jpeg',
    'https://i.imgur.com/7CvxWeq.jpeg',
    'https://i.imgur.com/Ecra6uu.jpeg',
    'https://i.imgur.com/EJcOrm6.jpeg',
    'https://i.imgur.com/aIxwEaT.jpeg'
];

const songs = [
    {
        title: 'Threesixty - Sampai Nanti',
        url: 'https://raw.githubusercontent.com/ribbleca/backsound/refs/heads/main/Sampai%20Nanti.mp3',
        lyrics: 'Sampai nanti kita bertemu lagi\nDi suatu hari yang indah\nAku akan menunggu\nSampai nanti...'
    },
    {
        title: 'Nadhif Basalamah - Penjaga Hati',
        url: 'https://raw.githubusercontent.com/ribbleca/backsound/refs/heads/main/nadhif%20basalamah%20-%20penjaga%20hati%20(Official%20Lyric%20Video).mp3',
        lyrics: 'Kau adalah penjaga hati\nYang selalu menjaga\nSetiap detik waktu\nYang kita lalui bersama...'
    },
    {
        title: 'Denny Caknan - Cundamani',
        url: 'https://raw.githubusercontent.com/ribbleca/backsound/refs/heads/main/Denny%20Caknan%20-%20Cundamani%20(Official%20Music%20Video).mp3',
        lyrics: 'Cundamani, permata hati\nYang selalu bersinar\nDi dalam hatiku\nSelamanya...'
    }
];

const timelineEvents = [
    {
        date: '8 Juli 2023',
        title: 'Awal Perjalanan Cinta',
        description: 'Hari pertama kita resmi bersama. Saat itu hatiku berbunga-bunga mendengar kamu bilang "iya".',
        image: photos[0]
    },
    {
        date: '15 Agustus 2023',
        title: 'Kencan Pertama',
        description: 'Kencan pertama kita yang canggung tapi manis. Kita masih malu-malu tapi sudah saling jatuh cinta.',
        image: photos[1]
    },
    {
        date: '31 Desember 2023',
        title: 'Tahun Baru Bersama',
        description: 'Merayakan pergantian tahun untuk pertama kalinya sebagai pasangan. Kita berjanji akan selalu bersama.',
        image: photos[2]
    },
    {
        date: '14 Februari 2024',
        title: 'Valentine Pertama',
        description: 'Valentine pertama kita sebagai pasangan. Kamu memberiku bunga dan aku memberkanmu hatiku sepenuhnya.',
        image: photos[3]
    },
    {
        date: '8 Juli 2024',
        title: 'Anniversary Pertama',
        description: 'Satu tahun sudah kita bersama. Rasanya baru kemarin tapi sudah begitu banyak kenangan indah.',
        image: photos[4]
    }
];

const quizQuestions = [
    {
        question: 'Kapan anniversary kita?',
        options: ['8 Juli', '9 Juli', '10 Juli', '11 Juli'],
        correct: 0
    },
    {
        question: 'Apa lagu favorit kita?',
        options: ['Sampai Nanti', 'Penjaga Hati', 'Cundamani', 'Semua lagu'],
        correct: 3
    },
    {
        question: 'Siapa yang lebih romantis?',
        options: ['Adna', 'Lyra', 'Sama-sama', 'Rahasia'],
        correct: 2
    },
    {
        question: 'Apa yang paling kamu suka dari pasanganmu?',
        options: ['Senyumnya', 'Sifatnya', 'Semuanya', 'Cintanya'],
        correct: 2
    },
    {
        question: 'Berapa tahun kita sudah bersama?',
        options: ['1 tahun', '2 tahun', '3 tahun', '4 tahun'],
        correct: 1
    }
];

const chatbotResponses = [
    'Halo sayang! Aku sangat mencintaimu ❤️',
    'Kamu adalah yang terbaik yang pernah terjadi padaku!',
    'Aku tidak bisa membayangkan hidup tanpamu',
    'Setiap hari bersamamu adalah berkah',
    'Kamu membuatku menjadi orang yang lebih baik',
    'Aku beruntung memilikimu sebagai pasangan',
    'Cinta kita akan bertahan selamanya',
    'Kamu adalah rumah bagiku',
    'Terima kasih sudah menjadi bagian dari hidupku',
    'Aku mencintaimu lebih dari apapun di dunia ini'
];

const poemTemplates = [
    {
        theme: 'cinta',
        template: 'Cinta yang indah\nMembuat hati berbunga\nSelamanya bersamamu\nAku bahagia'
    },
    {
        theme: 'rindu',
        template: 'Rindu yang mendalam\nMembuat hati gelisah\nIngin selalu bersamamu\nSetiap waktu'
    },
    {
        theme: 'bahagia',
        template: 'Bahagia yang tulus\nMembuat hidup bermakna\nBersamamu adalah surga\nDi dunia ini'
    }
];

// DOM Elements
const elements = {
    progressBar: document.getElementById('progressBar'),
    themeToggle: document.getElementById('themeToggle'),
    colorPickerBtn: document.getElementById('colorPickerBtn'),
    colorPickerModal: document.getElementById('colorPickerModal'),
    closeColorPicker: document.getElementById('closeColorPicker'),
    countdown: document.getElementById('countdown'),
    galleryGrid: document.getElementById('galleryGrid'),
    lightboxModal: document.getElementById('lightboxModal'),
    lightboxImage: document.getElementById('lightboxImage'),
    lightboxClose: document.getElementById('lightboxClose'),
    lightboxPrev: document.getElementById('lightboxPrev'),
    lightboxNext: document.getElementById('lightboxNext'),
    timeline: document.getElementById('timeline'),
    audioPlayer: document.getElementById('audioPlayer'),
    songSelector: document.getElementById('songSelector'),
    playPauseBtn: document.getElementById('playPauseBtn'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    progressFill: document.getElementById('progressFill'),
    currentTime: document.getElementById('currentTime'),
    duration: document.getElementById('duration'),
    lyricsText: document.getElementById('lyricsText'),
    virtualPet: document.getElementById('virtualPet'),
    petLove: document.getElementById('petLove'),
    petHunger: document.getElementById('petHunger'),
    feedPet: document.getElementById('feedPet'),
    playPet: document.getElementById('playPet'),
    mainFab: document.getElementById('mainFab'),
    fabMenu: document.getElementById('fabMenu'),
    openLetter: document.getElementById('openLetter'),
    voiceMessage: document.getElementById('voiceMessage'),
    surpriseMe: document.getElementById('surpriseMe'),
    confetti: document.getElementById('confetti'),
    loveLetterModal: document.getElementById('loveLetterModal'),
    letterEnvelope: document.getElementById('letterEnvelope'),
    closeLetter: document.getElementById('closeLetter'),
    voiceModal: document.getElementById('voiceModal'),
    closeVoice: document.getElementById('closeVoice'),
    guestName: document.getElementById('guestName'),
    guestMessage: document.getElementById('guestMessage'),
    submitMessage: document.getElementById('submitMessage'),
    messagesContainer: document.getElementById('messagesContainer'),
    toast: document.getElementById('toast')
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    startCountdown();
    loadGallery();
    loadTimeline();
    loadGuestbook();
    initializePet();
    createBackgroundAnimations();
    updateProgressBar();
    updateRelationshipStats();
});

function initializeApp() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedColor = localStorage.getItem('color') || '#ff6b6b';
    const savedPoints = localStorage.getItem('points') || '0';
    
    currentTheme = savedTheme;
    currentColor = savedColor;
    userPoints = parseInt(savedPoints);
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.documentElement.style.setProperty('--primary-color', currentColor);
    
    // Initialize song
    if (elements.audioPlayer) {
        elements.audioPlayer.src = songs[0].url;
        elements.lyricsText.textContent = songs[0].lyrics;
    }
    
    showToast('Selamat datang di anniversary website Adna & Lyra! ❤️');
}

function setupEventListeners() {
    // Theme Toggle
    elements.themeToggle?.addEventListener('click', toggleTheme);
    
    // Color Picker
    elements.colorPickerBtn?.addEventListener('click', () => {
        elements.colorPickerModal.classList.add('active');
    });
    
    elements.closeColorPicker?.addEventListener('click', () => {
        elements.colorPickerModal.classList.remove('active');
    });
    
    // Color Options
    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const color = e.target.dataset.color;
            changeColor(color);
        });
    });
    
    // Music Player
    elements.songSelector?.addEventListener('change', changeSong);
    elements.playPauseBtn?.addEventListener('click', togglePlay);
    elements.prevBtn?.addEventListener('click', previousSong);
    elements.nextBtn?.addEventListener('click', nextSong);
    
    // Audio Events
    elements.audioPlayer?.addEventListener('timeupdate', updateProgress);
    elements.audioPlayer?.addEventListener('ended', nextSong);
    
    // Gallery
    elements.lightboxClose?.addEventListener('click', closeLightbox);
    elements.lightboxPrev?.addEventListener('click', previousImage);
    elements.lightboxNext?.addEventListener('click', nextImage);
    
    // Virtual Pet
    elements.feedPet?.addEventListener('click', feedPet);
    elements.playPet?.addEventListener('click', playWithPet);
    
    // FAB Menu
    elements.mainFab?.addEventListener('click', toggleFabMenu);
    elements.openLetter?.addEventListener('click', openLoveLetter);
    elements.voiceMessage?.addEventListener('click', playVoiceMessage);
    elements.surpriseMe?.addEventListener('click', surpriseMe);
    elements.confetti?.addEventListener('click', triggerConfetti);
    
    // Modals
    elements.closeLetter?.addEventListener('click', () => {
        elements.loveLetterModal.classList.remove('active');
    });
    
    elements.closeVoice?.addEventListener('click', () => {
        elements.voiceModal.classList.remove('active');
    });
    
    // Guestbook
    elements.submitMessage?.addEventListener('click', submitGuestMessage);
    
    // Games
    setupGameListeners();
    
    // Scroll Events
    window.addEventListener('scroll', () => {
        updateProgressBar();
        animateTimelineItems();
    });
    
    // Resize Events
    window.addEventListener('resize', handleResize);
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    
    const icon = elements.themeToggle.querySelector('i');
    icon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    
    showToast(`Switched to ${currentTheme} theme!`);
}

function changeColor(color) {
    currentColor = color;
    document.documentElement.style.setProperty('--primary-color', color);
    localStorage.setItem('color', color);
    elements.colorPickerModal.classList.remove('active');
    showToast('Color theme changed!');
}

function startCountdown() {
    const targetDate = new Date('2025-07-08T00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            elements.countdown.innerHTML = '<div class="celebration">🎉 Happy Anniversary! 🎉</div>';
            triggerConfetti();
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateRelationshipStats() {
    const startDate = new Date('2023-07-08');
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.ceil(diffDays / 7);
    const diffMonths = Math.ceil(diffDays / 30.44);
    const diffYears = Math.ceil(diffDays / 365.25);
    
    document.getElementById('daysTogether').textContent = diffDays;
    document.getElementById('weeksTogether').textContent = diffWeeks;
    document.getElementById('monthsTogether').textContent = diffMonths;
    document.getElementById('yearsTogether').textContent = diffYears;
}

function loadGallery() {
    const gallery = elements.galleryGrid;
    if (!gallery) return;
    
    photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${photo}" alt="Memory ${index + 1}" loading="lazy">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        `;
        
        item.addEventListener('click', () => openLightbox(index));
        gallery.appendChild(item);
    });
}

function openLightbox(index) {
    currentPhotoIndex = index;
    elements.lightboxImage.src = photos[index];
    elements.lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    elements.lightboxModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function previousImage() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    elements.lightboxImage.src = photos[currentPhotoIndex];
}

function nextImage() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    elements.lightboxImage.src = photos[currentPhotoIndex];
}

function loadTimeline() {
    const timeline = elements.timeline;
    if (!timeline) return;
    
    timelineEvents.forEach((event, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${event.date}</div>
                <h3 class="timeline-title">${event.title}</h3>
                <p class="timeline-description">${event.description}</p>
                <img src="${event.image}" alt="${event.title}" class="timeline-image">
            </div>
        `;
        
        timeline.appendChild(item);
    });
}

function animateTimelineItems() {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            item.classList.add('visible');
        }
    });
}

function changeSong() {
    const index = parseInt(elements.songSelector.value);
    currentSongIndex = index;
    elements.audioPlayer.src = songs[index].url;
    elements.lyricsText.textContent = songs[index].lyrics;
    elements.audioPlayer.load();
}

function togglePlay() {
    if (elements.audioPlayer.paused) {
        elements.audioPlayer.play();
        elements.playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        elements.audioPlayer.pause();
        elements.playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    elements.songSelector.value = currentSongIndex;
    changeSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    elements.songSelector.value = currentSongIndex;
    changeSong();
}

function updateProgress() {
    const audio = elements.audioPlayer;
    const progress = (audio.currentTime / audio.duration) * 100;
    elements.progressFill.style.width = progress + '%';
    
    elements.currentTime.textContent = formatTime(audio.currentTime);
    elements.duration.textContent = formatTime(audio.duration);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

function initializePet() {
    updatePetStats();
    
    // Pet interaction timer
    setInterval(() => {
        if (petStats.hunger > 0) petStats.hunger -= 1;
        if (petStats.love > 0) petStats.love -= 0.5;
        updatePetStats();
    }, 30000);
}

function updatePetStats() {
    elements.petLove.style.width = petStats.love + '%';
    elements.petHunger.style.width = petStats.hunger + '%';
}

function feedPet() {
    petStats.hunger = Math.min(100, petStats.hunger + 20);
    petStats.love = Math.min(100, petStats.love + 5);
    updatePetStats();
    showToast('Pet fed! 🍎');
    addPoints(10);
}

function playWithPet() {
    petStats.love = Math.min(100, petStats.love + 15);
    petStats.hunger = Math.max(0, petStats.hunger - 5);
    updatePetStats();
    showToast('Pet is happy! 😸');
    addPoints(15);
}

function toggleFabMenu() {
    elements.fabMenu.classList.toggle('active');
}

function openLoveLetter() {
    elements.loveLetterModal.classList.add('active');
    setTimeout(() => {
        elements.letterEnvelope.classList.add('opened');
    }, 1000);
    addPoints(25);
    showToast('Love letter opened! 💕');
}

function playVoiceMessage() {
    elements.voiceModal.classList.add('active');
    showToast('Voice message from Adna! 🎤');
    addPoints(20);
}

function surpriseMe() {
    const surprises = [
        () => triggerConfetti(),
        () => showToast('Surprise! You are amazing! ✨'),
        () => showToast('Random love fact: You make me smile every day! 😊'),
        () => showToast('Surprise message: I love you more than words can say! ❤️')
    ];
    
    const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
    randomSurprise();
    addPoints(15);
}

function triggerConfetti() {
    createConfetti();
    showToast('Confetti celebration! 🎉');
}

function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f39c12', '#e74c3c'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.zIndex = '10000';
        confetti.style.pointerEvents = 'none';
        confetti.style.borderRadius = '50%';
        
        document.body.appendChild(confetti);
        
        const fall = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 100}px) rotate(360deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'ease-out'
        });
        
        fall.onfinish = () => confetti.remove();
    }
}

function submitGuestMessage() {
    const name = elements.guestName.value.trim();
    const message = elements.guestMessage.value.trim();
    
    if (!name || !message) {
        showToast('Please fill in all fields!');
        return;
    }
    
    const messageData = {
        name: name,
        message: message,
        date: new Date().toLocaleDateString()
    };
    
    addGuestMessage(messageData);
    elements.guestName.value = '';
    elements.guestMessage.value = '';
    showToast('Message sent! ❤️');
    addPoints(30);
}

function addGuestMessage(messageData) {
    const messageCard = document.createElement('div');
    messageCard.className = 'message-card';
    messageCard.innerHTML = `
        <div class="message-author">${messageData.name}</div>
        <div class="message-text">${messageData.message}</div>
        <div class="message-date">${messageData.date}</div>
    `;
    
    elements.messagesContainer.insertBefore(messageCard, elements.messagesContainer.firstChild);
    
    // Save to localStorage
    const messages = JSON.parse(localStorage.getItem('guestMessages') || '[]');
    messages.unshift(messageData);
    localStorage.setItem('guestMessages', JSON.stringify(messages));
}

function loadGuestbook() {
    const messages = JSON.parse(localStorage.getItem('guestMessages') || '[]');
    messages.forEach(messageData => {
        const messageCard = document.createElement('div');
        messageCard.className = 'message-card';
        messageCard.innerHTML = `
            <div class="message-author">${messageData.name}</div>
            <div class="message-text">${messageData.message}</div>
            <div class="message-date">${messageData.date}</div>
        `;
        elements.messagesContainer.appendChild(messageCard);
    });
}

function setupGameListeners() {
    // Quiz Game
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const game = e.currentTarget.dataset.game;
            openGame(game);
        });
    });
    
    // Close modals
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.dataset.modal;
            document.getElementById(modal).classList.remove('active');
        });
    });
    
    // Wheel game
    document.getElementById('spinBtn')?.addEventListener('click', spinWheel);
    
    // AI Poem Generator
    document.getElementById('generatePoem')?.addEventListener('click', generatePoem);
    
    // Chatbot
    document.getElementById('sendChat')?.addEventListener('click', sendChatMessage);
    document.getElementById('chatInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendChatMessage();
    });
}

function openGame(gameType) {
    const modal = document.getElementById(gameType + 'Modal');
    if (modal) {
        modal.classList.add('active');
        
        if (gameType === 'quiz') {
            loadQuiz();
        } else if (gameType === 'chatbot') {
            initializeChatbot();
        }
    }
}

function loadQuiz() {
    const container = document.getElementById('quizContainer');
    let currentQuestion = 0;
    let score = 0;
    
    function showQuestion() {
        const question = quizQuestions[currentQuestion];
        container.innerHTML = `
            <div class="quiz-question">
                <h4>Question ${currentQuestion + 1}/${quizQuestions.length}</h4>
                <p>${question.question}</p>
                <div class="quiz-options">
                    ${question.options.map((option, index) => `
                        <button class="quiz-option" data-index="${index}">${option}</button>
                    `).join('')}
                </div>
            </div>
        `;
        
        container.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const selectedIndex = parseInt(e.target.dataset.index);
                const isCorrect = selectedIndex === question.correct;
                
                if (isCorrect) {
                    score++;
                    e.target.classList.add('correct');
                } else {
                    e.target.classList.add('incorrect');
                }
                
                setTimeout(() => {
                    currentQuestion++;
                    if (currentQuestion < quizQuestions.length) {
                        showQuestion();
                    } else {
                        showQuizResult();
                    }
                }, 1000);
            });
        });
    }
    
    function showQuizResult() {
        const percentage = (score / quizQuestions.length) * 100;
        container.innerHTML = `
            <div class="quiz-result">
                <h4>Quiz Complete!</h4>
                <p>Score: ${score}/${quizQuestions.length} (${percentage}%)</p>
                <p>${getQuizMessage(percentage)}</p>
                <button onclick="loadQuiz()">Try Again</button>
            </div>
        `;
        addPoints(score * 10);
    }
    
    function getQuizMessage(percentage) {
        if (percentage >= 80) return 'Perfect! You know your partner well! ❤️';
        if (percentage >= 60) return 'Good job! You have a strong connection! 💕';
        if (percentage >= 40) return 'Not bad! Keep getting to know each other! 😊';
        return 'Practice makes perfect! Love grows with time! 💪';
    }
    
    showQuestion();
}

function spinWheel() {
    const wheel = document.getElementById('wheel');
    const result = document.getElementById('wheelResult');
    const sections = document.querySelectorAll('.wheel-section');
    
    const randomRotation = Math.random() * 360 + 720; // At least 2 full rotations
    wheel.style.transform = `rotate(${randomRotation}deg)`;
    
    setTimeout(() => {
        const sectionIndex = Math.floor(((randomRotation % 360) / 45));
        const selectedSection = sections[sectionIndex];
        const challenge = selectedSection.dataset.challenge;
        
        result.innerHTML = `
            <h4>Your Challenge:</h4>
            <p>${challenge}</p>
            <p>Have fun! ❤️</p>
        `;
        result.classList.add('show');
        addPoints(20);
    }, 3000);
}

function generatePoem() {
    const theme = document.getElementById('poemTheme').value.toLowerCase() || 'cinta';
    const result = document.getElementById('poemResult');
    
    // Find matching template or use default
    const template = poemTemplates.find(t => t.theme === theme) || poemTemplates[0];
    
    // Generate variations
    const variations = [
        template.template,
        template.template.replace('indah', 'cantik').replace('berbunga', 'berseri'),
        template.template.replace('Cinta', 'Kasih').replace('hati', 'jiwa')
    ];
    
    const randomPoem = variations[Math.floor(Math.random() * variations.length)];
    
    result.innerHTML = `
        <div class="poem-output">
            <h4>Puisi untuk ${theme}:</h4>
            <div class="poem-text">${randomPoem}</div>
            <p><em>Generated with love ❤️</em></p>
        </div>
    `;
    
    addPoints(15);
}

function initializeChatbot() {
    const messages = document.getElementById('chatMessages');
    messages.innerHTML = `
        <div class="chat-message bot">
            <div class="message-content">
                <p>Halo! Aku adalah AI assistant untuk Adna & Lyra. Mau ngobrol? 😊</p>
            </div>
        </div>
    `;
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.innerHTML = `
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    messages.appendChild(userMessage);
    
    // Clear input
    input.value = '';
    
    // Generate bot response
    setTimeout(() => {
        const botResponse = chatbotResponses[Math.floor(Math.random() * chatbotResponses.length)];
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot';
        botMessage.innerHTML = `
            <div class="message-content">
                <p>${botResponse}</p>
            </div>
        `;
        messages.appendChild(botMessage);
        messages.scrollTop = messages.scrollHeight;
    }, 1000);
    
    messages.scrollTop = messages.scrollHeight;
    addPoints(5);
}

function addPoints(points) {
    userPoints += points;
    localStorage.setItem('points', userPoints.toString());
    
    // Check for achievements
    checkAchievements();
}

function checkAchievements() {
    const newAchievements = [];
    
    if (userPoints >= 100 && !achievements.includes('first_100')) {
        newAchievements.push({
            id: 'first_100',
            title: 'First 100 Points!',
            description: 'You earned your first 100 points!'
        });
    }
    
    if (userPoints >= 500 && !achievements.includes('love_expert')) {
        newAchievements.push({
            id: 'love_expert',
            title: 'Love Expert!',
            description: 'You are a true love expert!'
        });
    }
    
    newAchievements.forEach(achievement => {
        achievements.push(achievement.id);
        showAchievement(achievement);
    });
}

function showAchievement(achievement) {
    const modal = document.getElementById('achievementModal');
    document.getElementById('achievementTitle').textContent = achievement.title;
    document.getElementById('achievementDesc').textContent = achievement.description;
    modal.classList.add('active');
    
    document.getElementById('closeAchievement').onclick = () => {
        modal.classList.remove('active');
    };
}

function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add('show');
    
    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, 3000);
}

function updateProgressBar() {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    elements.progressBar.style.width = scrolled + '%';
}

function createBackgroundAnimations() {
    // Create floating hearts
    setInterval(() => {
        createFloatingHeart();
    }, 3000);
    
    // Create bokeh effects
    setInterval(() => {
        createBokehLight();
    }, 5000);
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.style.position = 'fixed';
    heart.style.fontSize = '20px';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '100vh';
    heart.style.zIndex = '-1';
    heart.style.pointerEvents = 'none';
    heart.style.opacity = '0.3';
    
    document.body.appendChild(heart);
    
    const animation = heart.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 0.3 },
        { transform: 'translateY(-100vh) rotate(360deg)', opacity: 0 }
    ], {
        duration: 10000,
        easing: 'ease-out'
    });
    
    animation.onfinish = () => heart.remove();
}

function createBokehLight() {
    const light = document.createElement('div');
    light.style.position = 'fixed';
    light.style.width = '100px';
    light.style.height = '100px';
    light.style.borderRadius = '50%';
    light.style.background = `radial-gradient(circle, ${currentColor} 0%, transparent 70%)`;
    light.style.opacity = '0.1';
    light.style.left = Math.random() * 100 + '%';
    light.style.top = Math.random() * 100 + '%';
    light.style.zIndex = '-1';
    light.style.pointerEvents = 'none';
    
    document.body.appendChild(light);
    
    const animation = light.animate([
        { transform: 'scale(0.5)', opacity: 0.1 },
        { transform: 'scale(1.5)', opacity: 0 }
    ], {
        duration: 8000,
        easing: 'ease-out'
    });
    
    animation.onfinish = () => light.remove();
}

function handleResize() {
    // Handle responsive adjustments
    if (window.innerWidth < 768) {
        // Mobile adjustments
        elements.musicPlayer.style.width = '90%';
        elements.musicPlayer.style.right = '5%';
    } else {
        // Desktop adjustments
        elements.musicPlayer.style.width = '300px';
        elements.musicPlayer.style.right = '20px';
    }
}

// Add CSS for quiz and chat styles
const additionalStyles = `
    .quiz-question {
        text-align: center;
        padding: 20px;
    }
    
    .quiz-options {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        margin-top: 20px;
    }
    
    .quiz-option {
        background: var(--primary-color);
        color: white;
        border: none;
        padding: 15px;
        border-radius: var(--border-radius);
        cursor: pointer;
        transition: var(--transition);
        font-size: 1rem;
    }
    
    .quiz-option:hover {
        background: var(--secondary-color);
    }
    
    .quiz-option.correct {
        background: #2ecc71;
    }
    
    .quiz-option.incorrect {
        background: #e74c3c;
    }
    
    .quiz-result {
        text-align: center;
        padding: 20px;
    }
    
    .chat-messages {
        height: 300px;
        overflow-y: auto;
        padding: 20px;
        background: #f8f9fa;
        border-radius: var(--border-radius);
        margin-bottom: 15px;
    }
    
    .chat-message {
        margin-bottom: 15px;
        display: flex;
    }
    
    .chat-message.user {
        justify-content: flex-end;
    }
    
    .chat-message.bot {
        justify-content: flex-start;
    }
    
    .message-content {
        max-width: 70%;
        padding: 10px 15px;
        border-radius: var(--border-radius);
        background: white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .chat-message.user .message-content {
        background: var(--primary-color);
        color: white;
    }
    
    .chat-input {
        display: flex;
        gap: 10px;
    }
    
    .chat-input input {
        flex: 1;
        padding: 10px;
        border: 2px solid var(--primary-color);
        border-radius: var(--border-radius);
        font-size: 1rem;
    }
    
    .chat-input button {
        background: var(--primary-color);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: var(--border-radius);
        cursor: pointer;
        font-size: 1rem;
    }
    
    .poem-output {
        text-align: center;
        padding: 20px;
    }
    
    .poem-text {
        background: #f8f9fa;
        padding: 20px;
        border-radius: var(--border-radius);
        font-style: italic;
        line-height: 1.6;
        white-space: pre-line;
        margin: 15px 0;
    }
    
    .achievement-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        visibility: hidden;
        transition: var(--transition);
    }
    
    .achievement-modal.active {
        opacity: 1;
        visibility: visible;
    }
    
    .achievement-content {
        background: white;
        padding: 40px;
        border-radius: var(--border-radius);
        text-align: center;
        max-width: 400px;
        width: 90%;
    }
    
    .achievement-icon {
        font-size: 3rem;
        margin-bottom: 20px;
    }
    
    .close-achievement {
        background: var(--primary-color);
        color: white;
        border: none;
        padding: 10px 30px;
        border-radius: var(--border-radius);
        cursor: pointer;
        font-size: 1rem;
        margin-top: 20px;
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize typing effect
function initializeTypingEffect() {
    const typingElements = document.querySelectorAll('.typing-text');
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(typeInterval);
                element.style.borderRight = 'none';
            }
        }, 100);
    });
}

// Initialize typing effect after page load
setTimeout(initializeTypingEffect, 1000);