document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        // Toggle icon
        if (document.body.classList.contains('dark-theme')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // Smooth scroll for "Start Calculating" button
    const startCalculatingBtn = document.getElementById('startCalculating');
    const studyTypesSection = document.getElementById('studyTypes');
    
    startCalculatingBtn.addEventListener('click', function() {
        studyTypesSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Calculator group toggle functionality
    const groupHeaders = document.querySelectorAll('.group-header');
    
    groupHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const groupName = this.getAttribute('data-group');
            const content = document.getElementById(`${groupName}Content`);
            
            // Toggle active class on header
            this.classList.toggle('active');
            
            // Toggle content visibility
            if (content.classList.contains('show')) {
                content.classList.remove('show');
                setTimeout(() => {
                    content.style.display = 'none';
                }, 300); // Match this with CSS animation duration
            } else {
                content.style.display = 'grid';
                // Force a reflow before adding the 'show' class for the animation to work
                content.offsetHeight;
                content.classList.add('show');
            }
        });
    });

    // Initially open the first group
    const firstGroupHeader = document.querySelector('.group-header');
    if (firstGroupHeader) {
        firstGroupHeader.click();
    }

    // Calculator card functionality
    const calculatorCards = document.querySelectorAll('.calculator-card');
    
    calculatorCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const calculatorType = this.getAttribute('data-calculator');
            
            // For now, just show an alert with the calculator type
            // In a real implementation, this would load the appropriate calculator
            alert(`Loading ${calculatorType} calculator...`);
            
            // In a real implementation, you might do something like:
            // window.location.href = `/calculators/${calculatorType}.html`;
        });
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.calculator-card, .resource-card, .step');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--hover-shadow)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--card-shadow)';
        });
    });

    // Form validation for calculator inputs (to be implemented when real calculators are added)
    /*
    const sampleForm = document.getElementById('sampleCalculatorForm');
    if (sampleForm) {
        sampleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate inputs
            const
