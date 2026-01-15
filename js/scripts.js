document.addEventListener("DOMContentLoaded", function() {
    
    // --------------------------------------------------------------------------
    // 1. PATH LOGIC
    // --------------------------------------------------------------------------
    const pathname = window.location.pathname;
    const isSubfolder = pathname.includes("/content/");
    const rootPath = isSubfolder ? "../../" : "";

    // Helper: Active Link Highlighter
    const getActiveClass = (linkName) => {
        if (linkName === 'index') {
            return (pathname.endsWith("index.html") || pathname === "/" || pathname.endsWith("/")) 
                ? "text-sky-600 font-bold" 
                : "text-slate-600 hover:text-sky-600";
        }
        return pathname.includes(linkName) 
            ? "text-sky-600 font-bold" 
            : "text-slate-600 hover:text-sky-600";
    };

    const getUnderlineClass = (linkName) => {
        if (linkName === 'index') {
             return (pathname.endsWith("index.html") || pathname === "/" || pathname.endsWith("/")) ? "w-full" : "w-0 group-hover:w-full";
        }
        return pathname.includes(linkName) ? "w-full" : "w-0 group-hover:w-full";
    };

    // --------------------------------------------------------------------------
    // 2. HEADER INJECTION
    // --------------------------------------------------------------------------
    const navHTML = `
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            
            <a href="${rootPath}index.html" class="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 group z-50 relative">
                <span class="text-xl md:text-2xl font-bold text-slate-900 tracking-tight" style="font-family: 'Merriweather', serif;">
                    Narender Kumar
                </span>
                <span class="hidden md:block text-slate-300 font-light text-2xl">|</span>
                <span class="text-xs md:text-sm font-bold text-sky-600 uppercase tracking-widest">
                    Education Research
                </span>
            </a>
            
            <nav class="hidden lg:flex space-x-8 items-center font-medium">
                <a href="${rootPath}index.html" class="group relative py-2 transition-colors duration-300 ${getActiveClass('index')}">
                    Home <span class="absolute bottom-0 left-0 h-0.5 bg-sky-600 transition-all duration-300 ${getUnderlineClass('index')}"></span>
                </a>
                <a href="${rootPath}research.html" class="group relative py-2 transition-colors duration-300 ${getActiveClass('research')}">
                    Research <span class="absolute bottom-0 left-0 h-0.5 bg-sky-600 transition-all duration-300 ${getUnderlineClass('research')}"></span>
                </a>
                <a href="${rootPath}essays.html" class="group relative py-2 transition-colors duration-300 ${getActiveClass('essays')}">
                    Essays <span class="absolute bottom-0 left-0 h-0.5 bg-sky-600 transition-all duration-300 ${getUnderlineClass('essays')}"></span>
                </a>
                <a href="${rootPath}about.html" class="group relative py-2 transition-colors duration-300 ${getActiveClass('about')}">
                    About <span class="absolute bottom-0 left-0 h-0.5 bg-sky-600 transition-all duration-300 ${getUnderlineClass('about')}"></span>
                </a>
            </nav>

            <button id="mobile-menu-button" class="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 focus:outline-none z-50 relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
        </div>

        <div id="mobile-menu" class="hidden lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xl py-4 px-6 z-40">
            <div class="flex flex-col space-y-2">
                <a href="${rootPath}index.html" class="block px-4 py-3 rounded-lg hover:bg-slate-50 ${getActiveClass('index')}">Home</a>
                <a href="${rootPath}research.html" class="block px-4 py-3 rounded-lg hover:bg-slate-50 ${getActiveClass('research')}">Research</a>
                <a href="${rootPath}essays.html" class="block px-4 py-3 rounded-lg hover:bg-slate-50 ${getActiveClass('essays')}">Essays</a>
                <a href="${rootPath}about.html" class="block px-4 py-3 rounded-lg hover:bg-slate-50 ${getActiveClass('about')}">About</a>
            </div>
        </div>
    `;
    
    const headerElement = document.getElementById('main-header');
    if (headerElement) {
        headerElement.innerHTML = navHTML;
        headerElement.className = "sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 relative";
    }

    // --------------------------------------------------------------------------
    // 3. FOOTER INJECTION (The New Part)
    // --------------------------------------------------------------------------
    const footerHTML = `
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                
                <div>
                    <h3 class="text-white text-lg font-bold mb-4" style="font-family: 'Merriweather', serif;">Narender Kumar</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        Bridging the gap between educational theory and classroom reality. Focused on pedagogy, student psychology, and the future of learning.
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://www.linkedin.com/in/narender-kumar-102a25191"  target="_blank" class="text-slate-400 hover:text-white transition-colors"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                        <a href="#" class="text-slate-400 hover:text-white transition-colors"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                    </div>
                </div>

                <div>
                    <h3 class="text-white text-lg font-bold mb-4">Quick Navigation</h3>
                    <ul class="space-y-2 text-sm text-slate-400">
                        <li><a href="${rootPath}index.html" class="hover:text-sky-400 transition-colors">Home</a></li>
                        <li><a href="${rootPath}research.html" class="hover:text-sky-400 transition-colors">Research Library</a></li>
                        <li><a href="${rootPath}essays.html" class="hover:text-sky-400 transition-colors">Essays & Thoughts</a></li>
                        <li><a href="${rootPath}about.html" class="hover:text-sky-400 transition-colors">About & Bio</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-white text-lg font-bold mb-4">Contact Me</h3>
                    <ul class="space-y-4 text-sm text-slate-400">
                        <li class="flex items-start">
                            <svg class="w-5 h-5 mr-3 text-sky-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <span><a href="mailto:narenderkumar.ed@gmail.com" class="hover:text-white">narenderkumar.ed@gmail.com</a></span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-5 h-5 mr-3 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                            <span><a href="https://wa.me/917494883425" class="hover:text-white">+91 7494883425</a></span>
                        </li>
                    </ul>
                </div>

            </div>
            

            <div class="border-t border-slate-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                <p>
                    &copy; 2025 Narender Kumar. This work is openly licensed via 
                    <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" class="hover:text-sky-400 transition-colors underline decoration-slate-700 hover:decoration-sky-400 underline-offset-2">CC BY 4.0</a>.
                </p>
                <p class="mt-2 md:mt-0">Designed for Education.</p>
            </div>
        </div>
    `;

    const footerElement = document.getElementById('main-footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
        // Apply Footer Styles
        footerElement.className = "bg-slate-950 text-slate-300 py-12 border-t border-slate-900";
    }

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});