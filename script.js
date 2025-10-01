// Tailwind Theme Configuration
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#6d28d9',    // DeepPurple-700
                    dark: '#0ea5e9'      // Aqua-500
                },
                accent: {
                    light: '#d946ef',    // Magenta-400
                    dark: '#f0abfc'      // SoftMagenta-300
                },
                background: {
                    light: '#f3f4f6',    // slate-100
                    dark: '#1f2937'      // slate-900
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.7s ease-in-out',
                'slide-up': 'slideUp 0.7s ease-in'
            },
            keyframes: {
                fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
                slideUp: { '0%': { transform: 'translateY(30px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } }
            }
        }
    }
};

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});



