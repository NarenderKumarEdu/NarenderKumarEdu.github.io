document.addEventListener("DOMContentLoaded", function() {
    
    // 1. PATH LOGIC: Figure out if we are in a subfolder
    const isSubfolder = window.location.pathname.includes("/content/");
    const rootPath = isSubfolder ? "../../" : "";

    // 2. THE NAVBAR HTML (Using your Tailwind classes)
    const navHTML = `
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="${rootPath}index.html" class="text-xl font-bold text-slate-900 tracking-tight">
                Narender<span class="text-sky-600">.Research</span>
            </a>
            
            <nav class="hidden md:flex space-x-8 items-center font-medium">
                <a href="${rootPath}index.html" class="text-slate-600 hover:text-sky-600 transition-colors duration-300">Home</a>
                <a href="${rootPath}research.html" class="text-slate-600 hover:text-sky-600 transition-colors duration-300">Research</a>
                <a href="${rootPath}essays.html" class="text-slate-600 hover:text-sky-600 transition-colors duration-300">Essays</a>
                <a href="${rootPath}about.html" class="text-slate-600 hover:text-sky-600 transition-colors duration-300">About</a>
            </nav>

            <button id="mobile-menu-button" class="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-200 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
        </div>

        <div id="mobile-menu" class="hidden md:hidden px-6 pb-4 bg-white/90 backdrop-blur-md border-t border-slate-100">
            <a href="${rootPath}index.html" class="block py-3 text-slate-600 hover:text-sky-600 font-medium border-b border-slate-50">Home</a>
            <a href="${rootPath}research.html" class="block py-3 text-slate-600 hover:text-sky-600 font-medium border-b border-slate-50">Research</a>
            <a href="${rootPath}essays.html" class="block py-3 text-slate-600 hover:text-sky-600 font-medium border-b border-slate-50">Essays</a>
            <a href="${rootPath}about.html" class="block py-3 text-slate-600 hover:text-sky-600 font-medium">About</a>
        </div>
    `;
    
    // 3. INJECT INTO <HEADER> TAG
    const headerElement = document.getElementById('main-header');
    if (headerElement) {
        headerElement.innerHTML = navHTML;
        // Add specific classes for the Glass Effect
        headerElement.className = "sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300";
    }

    // 4. ACTIVATE MOBILE MENU TOGGLE
    const mobileBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});