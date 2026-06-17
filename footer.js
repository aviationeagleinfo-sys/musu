document.addEventListener("DOMContentLoaded", function() {
    const footerContainer = document.getElementById("global-footer");
    
    if (footerContainer) {
        // 1. INIEZIONE DINAMICA DELLO STILE CSS
        const footerStyle = document.createElement("style");
        footerStyle.innerHTML = `
            .main-footer { 
                background-color: var(--brand-black, #1a1a1a); 
                color: #ffffff; 
                padding: 80px 0 40px 0; 
                margin-top: 100px; 
                border-top: 6px solid var(--med-red, #d90429); 
            }
            .footer-link { 
                color: #9da3a8; 
                text-decoration: none; 
                transition: 0.2s; 
                font-size: 0.95rem; 
                display: block; 
                margin-bottom: 8px; 
            }
            .footer-link:hover { 
                color: var(--med-red, #d90429); 
                padding-left: 5px; 
            }
            .footer-logo {
                font-size: 1.4rem;
                letter-spacing: 1px;
            }
            .footer-logo .brand-accent {
                color: var(--med-red, #d90429);
                font-weight: 700;
            }
            .btn-medical { 
                background-color: var(--tech-black, #2b2d42); 
                color: white; 
                border-radius: 0; 
                padding: 10px 25px; 
                font-weight: 600; 
                border: none; 
            }
            #user-info { 
                display: none; 
                align-items: center; 
                color: white; 
            }
        `;
        document.head.appendChild(footerStyle);

        // 2. CALCOLO DINAMICO DELL'ANNO CORRENTE
        const currentYear = new Date().getFullYear();
        const yearDisplay = currentYear === 2026 ? "2026" : `2026-${currentYear}`;

        // 3. ASSEGNAZIONE DELLA CLASSE STRUTTURALE AL CONTENITORE
        footerContainer.classList.add("main-footer");

        // 4. INIEZIONE DEL BLOCCO HTML
        footerContainer.innerHTML = `
        <div class="container text-center text-md-start">
            <div class="row g-5">
                <div class="col-lg-5">
                    <div class="footer-logo mb-3" style="font-family:'Outfit'; font-weight:600;">GIUSEPPE <span class="brand-accent">MUSUMECI</span></div>
                    <p class="opacity-75">Giuseppe Musumeci MD<br>
                    Direttore SC Cardiologia,<br>
                    AO Ordine Mauriziano Torino<br>
                    Largo Turati, 62, Torino, Italy<br>
                    tel. +390115082515 <br>
                    Presidente Regione Piemonte ANMCO</p>
                    <div class="mt-4">
                        <a href="https://it.linkedin.com/in/giuseppe-musumeci-96414358" target="_blank" class="btn btn-outline-light btn-sm rounded-0 me-2"><i class="bi bi-linkedin"></i></a>
                        <a href="mailto:info@drgiuseppemusumeci.com" class="btn btn-outline-light btn-sm rounded-0"><i class="bi bi-envelope"></i></a>
                    </div>
                </div>
                <div class="col-6 col-lg-3">
                    <h6 class="fw-bold mb-4 text-uppercase small">Navigazione</h6>
                    <nav>
                        <a href="index.html" class="footer-link">Home</a>
                        <a href="login.html" class="footer-link">Accesso Hub</a>
                        <a href="news.html" class="footer-link">Aggiornamenti</a>
                        <a href="/security/operatori.html" class="footer-link">Operatori - RESERVED</a>
                    </nav>
                </div>
                <div class="col-6 col-lg-4">
                    <h6 class="fw-bold mb-4 text-uppercase small">Sicurezza</h6>
                    <nav>
                        <a href="privacy.html" class="footer-link">Privacy Policy</a>
                        <a href="termini&condizioni" class="footer-link">Termini & Condizioni d'Uso</a>
                        <span class="footer-link text-white-50 mt-3 small">Status: <span class="text-success">● Operativo</span></span>
                    </nav>
                </div>
            </div>
            <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
                <p class="mb-0">&copy; ${yearDisplay} MD Giuseppe Musumeci. Tutti i diritti riservati.</p>
            </div>
        </div>
        `;
    }
});
