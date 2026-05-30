document.addEventListener("DOMContentLoaded", function() {
    // 1. Iniezione automatica delle nuove variabili :root e dello stile CSS medico
    const navStyle = document.createElement('style');
    navStyle.textContent = `
        :root {
            --med-red: #d90429;
            --deep-red: #b00202;
            --soft-red-white: #f5d7d7;
            --tech-black: #2b2d42;
            --clean-white: #ffffff;
            --soft-gray: #f8f9fa;
            --footer-bg: #1a1b29;
            --radius-lg: 24px;
            --column-base: rgba(210, 210, 215, 0.4); 
        }
        .navbar { 
            background: linear-gradient(90deg, var(--soft-red-white) 0%, var(--deep-red) 100%); 
            border-bottom: 3px solid var(--deep-red); 
            padding: 0.8rem 0; 
        }
        .navbar-brand { font-family: 'Outfit', sans-serif; font-weight: 600; color: var(--tech-black)!important; }
        .brand-accent { color: var(--deep-red); }
        
        .nav-link { color: white!important; font-size: 0.85rem; letter-spacing: 0.5px; border-radius: 50px; padding: 8px 15px!important; transition: 0.3s; }
        .nav-link:hover, .nav-link:focus { background: rgba(255,255,255,0.1); }

        .dropdown-menu { border: none; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); padding: 10px; }
        .dropdown-item { border-radius: 8px; font-size: 0.9rem; padding: 8px 15px; transition: 0.2s; }
        .dropdown-item:hover { background-color: var(--soft-red-white); color: var(--deep-red); }

        .btn-medical { background-color: var(--tech-black); color: white; border-radius: 0px; padding: 8px 20px; font-weight: 600; border: none; transition: 0.3s; font-size: 0.8rem; }
        .btn-medical:hover { background-color: var(--deep-red); transform: translateY(-2px); color: white; }
        
        #user-info { display: none; align-items: center; gap: 12px; }
        
        @media (max-width: 991px) {
            #user-info { padding: 15px 0; flex-direction: column; }
            .dropdown-menu { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); }
            .dropdown-item { color: white; }
        }
    `;
    document.head.appendChild(navStyle);

    // 2. Generazione dell'HTML della barra di navigazione
    const navContainer = document.getElementById("global-navbar");
    
    if (navContainer) {
        navContainer.innerHTML = `
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="index.html">
                <img src="https://www.drgiuseppemusumeci.com/favicon.png" alt="Logo" width="55" class="me-2">
                <span>GIUSEPPE<span class="brand-accent">MUSUMECI</span></span>
            </a>
            <button class="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
                <i class="bi bi-list fs-1"></i>
            </button>

            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item dropdown px-lg-2">
                        <a class="nav-link dropdown-toggle fw-bold text-uppercase" href="#" data-bs-toggle="dropdown">Chi Sono</a>
                        <ul class="dropdown-menu shadow border-0" style="border-radius: 15px;">
                            <li><a class="dropdown-item" href="giuseppe-musumeci.html">Giuseppe Musumeci</a></li>
                            <li><a class="dropdown-item" href="formazione.html">Formazione</a></li>
                            <li><a class="dropdown-item" href="carriera.html">Carriera</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown px-lg-2">
                        <a class="nav-link dropdown-toggle fw-bold text-uppercase" href="#" data-bs-toggle="dropdown">Cosa faccio</a>
                        <ul class="dropdown-menu shadow border-0" style="border-radius: 15px;">
                            <li><a class="dropdown-item" href="direttore.html">Direttore</a></li>
                            <li><a class="dropdown-item" href="interventistica.html">Interventistica Strutturale</a></li>
                            <li><a class="dropdown-item" href="cardiologia.html">Cardiologia Clinica</a></li>
                            <li><a class="dropdown-item" href="patologie.html">Patologie Cardiovascolari</a></li>
                            <li><a class="dropdown-item" href="incarichi.html">Incarichi Istituzionali</a></li>
                            <li><a class="dropdown-item" href="media.html">Comunicazione e Media</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown px-lg-2">
                        <a class="nav-link dropdown-toggle fw-bold text-uppercase" href="#" data-bs-toggle="dropdown">Info</a>
                        <ul class="dropdown-menu shadow border-0" style="border-radius: 15px;">
                            <li><a class="dropdown-item" href="contatti.html">Contatti</a></li>
                            <li><a class="dropdown-item" href="libera-professione.html">Libera Professione</a></li>
                            <li><a class="dropdown-item" href="documenti.html">Documenti&Articoli</a></li>
                        </ul>
                    </li>
                    <li class="nav-item px-lg-2"><a class="nav-link fw-bold text-uppercase" href="eventi.html">News&Eventi</a></li>
                    <li class="nav-item px-lg-2"><a class="nav-link fw-bold text-uppercase" href="https://drgiuseppemusumeci.com/media#video">Video</a></li>
                    <li class="nav-item px-lg-2 me-lg-3"><a class="nav-link fw-bold text-uppercase" href="https://change.drgiuseppemusumeci.com/">Change</a></li>
                    <li class="nav-item">
                        <a href="login.html" id="btn-login-nav" class="btn btn-medical btn-sm">ACCESSO HUB</a>
                        <div id="user-info">
                            <span id="user-name" class="me-3 small fw-bold text-uppercase opacity-75"></span>
                            <button onclick="logout()" class="btn btn-outline-light btn-sm rounded-pill fw-bold">LOGOUT</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        `;
    }
});
