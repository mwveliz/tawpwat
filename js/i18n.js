// TAWPWAT Multi-Language Engine (36 Languages)
// Updated for Missing Puppies Rescue Adventure (Domi, Leia, Mora • 17 Worlds • 24h Mission)

(function (global) {
  const LANGUAGES = [
  { code: "en", name: "English", native: "English", dir: "ltr" },
  { code: "es", name: "Spanish", native: "Español", dir: "ltr" },
  { code: "ja", name: "Japanese", native: "日本語", dir: "ltr" },
  { code: "pt", name: "Portuguese", native: "Português", dir: "ltr" },
  { code: "fr", name: "French", native: "Français", dir: "ltr" },
  { code: "it", name: "Italian", native: "Italiano", dir: "ltr" },
  { code: "de", name: "German", native: "Deutsch", dir: "ltr" },
  { code: "zh-CN", name: "Chinese (Simplified)", native: "简体中文", dir: "ltr" },
  { code: "zh-TW", name: "Chinese (Traditional)", native: "繁體中文", dir: "ltr" },
  { code: "ko", name: "Korean", native: "한국어", dir: "ltr" },
  { code: "ru", name: "Russian", native: "Русский", dir: "ltr" },
  { code: "ar", name: "Arabic", native: "العربية", dir: "rtl" },
  { code: "hi", name: "Hindi", native: "हिन्दी", dir: "ltr" },
  { code: "nl", name: "Dutch", native: "Nederlands", dir: "ltr" },
  { code: "pl", name: "Polish", native: "Polski", dir: "ltr" },
  { code: "tr", name: "Turkish", native: "Türkçe", dir: "ltr" },
  { code: "sv", name: "Swedish", native: "Svenska", dir: "ltr" },
  { code: "da", name: "Danish", native: "Dansk", dir: "ltr" },
  { code: "no", name: "Norwegian", native: "Norsk", dir: "ltr" },
  { code: "fi", name: "Finnish", native: "Suomi", dir: "ltr" },
  { code: "el", name: "Greek", native: "Ελληνικά", dir: "ltr" },
  { code: "cs", name: "Czech", native: "Čeština", dir: "ltr" },
  { code: "ro", name: "Romanian", native: "Română", dir: "ltr" },
  { code: "hu", name: "Hungarian", native: "Magyar", dir: "ltr" },
  { code: "uk", name: "Ukrainian", native: "Українська", dir: "ltr" },
  { code: "vi", name: "Vietnamese", native: "Tiếng Việt", dir: "ltr" },
  { code: "th", name: "Thai", native: "ไทย", dir: "ltr" },
  { code: "id", name: "Indonesian", native: "Bahasa Indonesia", dir: "ltr" },
  { code: "ms", name: "Malay", native: "Bahasa Melayu", dir: "ltr" },
  { code: "he", name: "Hebrew", native: "עברית", dir: "rtl" },
  { code: "fa", name: "Persian", native: "فارسی", dir: "rtl" },
  { code: "bn", name: "Bengali", native: "বাংলা", dir: "ltr" },
  { code: "ta", name: "Tamil", native: "தமிழ்", dir: "ltr" },
  { code: "ca", name: "Catalan", native: "Català", dir: "ltr" },
  { code: "eu", name: "Basque", native: "Euskara", dir: "ltr" },
  { code: "gl", name: "Galician", native: "Galego", dir: "ltr" }
];

const TRANSLATIONS = {
  en: {
    "nav.features": "Gameplay",
    "nav.puppies": "3 Puppies",
    "nav.demo": "Warp Demo",
    "nav.worlds": "17 Worlds",
    "nav.legal": "Legal",
    "nav.home": "Home",
    "nav.play": "Google Play",
    "hero.badge": "RETRO 3D LIMINAL SCI-FI PUPPY RESCUE",
    "hero.subtitle": "The Amazing Warp Post Way at Tawpwat",
    "hero.desc": "Play as Inspector Kira Uku on a 24-hour mission aboard the rotating 360° Tawpwat Annular Space Station and across 17 interconnected worlds. Find and rescue 3 missing puppies — Domi, Leia, and Mora — by tuning Oniric Visions, solving 5 analog warp puzzles, collecting dropped toys, and triangulating them on the 8×8 Causal Chess Board before timeline coherence runs out.",
    "hero.ctaPlay": "Get it on Google Play",
    "hero.ctaDemo": "Try Warp Simulator",
    "hero.metaOffline": "100% Offline • Zero Ads • 24h Rescue Mission",
    "hero.metaLangs": "36 Web Languages • Android & Godot 4.3",
    "puppies.heading": "Find & Rescue the 3 Missing Puppies",
    "puppies.sub": "Each puppy has a unique 3D procedural breed model, favorite toy clue, difficulty tier, and joins Kira's pack once rescued.",
    "pup.domi.tier": "Level 1: Easy • Dachshund (Teckel)",
    "pup.domi.desc": "Chased the scent of tachyon biscuits through the warp ducts. Drops quantum crumbs and pauses often so Kira can catch up.",
    "pup.domi.stats": "Speed 5.5 • Clues 1 • Visions 1 • Sighting 100%",
    "pup.domi.toy": "Toy: Quantum Bone Biscuit",
    "pup.leia.tier": "Level 2: Medium • Jack Russell Terrier",
    "pup.leia.desc": "Bounced after a glowing tennis ball into a hyperdimensional portal. Nimble, fast, and leaps swiftly across eras.",
    "pup.leia.stats": "Speed 7.5 • Clues 2 • Visions 2 • Sighting 50%",
    "pup.leia.toy": "Toy: Phosphorescent Tennis Ball",
    "pup.mora.tier": "Level 3: Hard • Great Dane Puppy",
    "pup.mora.desc": "Giant yet shy puppy whose big paws trip over gravity anomalies, hiding in the deepest, farthest corners of hyperspace.",
    "pup.mora.stats": "Speed 10.0 • Clues 3 • Visions 3 • Sighting 30%",
    "pup.mora.toy": "Toy: Interstellar Rope Toy",
    "features.heading": "Core Gameplay Loop",
    "features.sub": "A non-violent, atmospheric 3D sci-fi adventure blending a 360° rotating space hub, tactile puzzles, and pack rescue.",
    "feat1.title": "360° Rotating Hub & 17 Worlds",
    "feat1.desc": "Explore the 5-sector wrap-around Tawpwat Annular Space Station and 17 worlds (Exterior, District, and Sanctum Vault).",
    "feat2.title": "Oniric Visions & +5% Coherence",
    "feat2.desc": "Approach LED terminals and dream dioramas to restore Timeline Coherence and reveal which world your target puppy fled to.",
    "feat3.title": "5 Analog & Sci-Fi Warp Puzzles",
    "feat3.desc": "Unlock portals with Quantum Gems or master the Oscilloscope, Cipher Disk, Astronomical Clock, Chrono Beam, and Hydro Manometer.",
    "feat4.title": "Live Sightings & Dropped Toys",
    "feat4.desc": "Catch a puppy during her playful pause for an early rescue—or collect her dropped favorite toy as a forensic clue.",
    "feat5.title": "8×8 Causal Chess & Pack Follow",
    "feat5.desc": "Collect enough clues to highlight the target world (🎯) on the A1–H8 board, rescue her in Zone 2, and reunite the full pack!",
    "feat6.title": "100% Offline & Privacy-First",
    "feat6.desc": "Zero internet permissions, zero ads, local-only saves, plus built-in TTS voiceover and handheld haptic feedback.",
    "demo.heading": "Interactive Warp Portal Simulator",
    "demo.sub": "Calibrate the Frequency Oscilloscope just like Kira does to unlock warp doors and lock onto a missing puppy's trail.",
    "demo.freqLabel": "Carrier Frequency (Hz)",
    "demo.phaseLabel": "Tachyon Phase (°)",
    "demo.ampLabel": "Harmonic Gain (%)",
    "demo.locked": "PORTAL LOCKED — TUNE RESONANCE",
    "demo.unlocked": "RESONANCE LOCKED — PUPPY TRAIL DETECTED",
    "demo.hint": "Target: Freq 64 Hz • Phase 180° • Gain 75%",
    "demo.reset": "Scramble Frequency",
    "worlds.heading": "17 Interconnected Worlds",
    "worlds.sub": "Travel across ancient Earth, orbital archives, exoplanets, and the Sombrero Null Archive—each with 3 explorable 3D zones.",
    "legal.heading": "Google Play & Legal Documentation",
    "legal.sub": "Transparent policies ready for Google Play Console compliance.",
    "legal.privacyBtn": "Privacy Policy",
    "legal.termsBtn": "Terms & Conditions",
    "legal.licenseBtn": "License & IP",
    "footer.rights": "© 2026 Miguel Delgado Veliz (com.mwveliz.tawpwat). All rights reserved.",
    "footer.playLink": "Google Play Store",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.license": "License",
    "privacy.title": "Privacy Policy",
    "privacy.updated": "Last updated: November 24, 2026 • Package: com.mwveliz.tawpwat",
    "privacy.intro": "TAWPWAT: The Amazing Warp Post Way at Tawpwat is developed by Miguel Delgado Veliz as a 100% offline, privacy-respecting game.",
    "privacy.s1Title": "1. Zero Data Collection",
    "privacy.s1Body": "TAWPWAT does not collect, store, transmit, or share any personal information, device identifiers, location data, contacts, or usage analytics. The Android application does not request internet access.",
    "privacy.s2Title": "2. Local Storage Only",
    "privacy.s2Body": "Game progress, rescued puppies, language preferences, and settings are saved strictly locally on your device (user://savegame.json) and never leave your device.",
    "privacy.s3Title": "3. No Ads or Third-Party SDKs",
    "privacy.s3Body": "TAWPWAT contains no advertisements, no in-app tracking SDKs, and no third-party analytics services.",
    "privacy.s4Title": "4. Accessibility & Children's Privacy",
    "privacy.s4Body": "Optional Text-to-Speech (TTS) and handheld vibration run locally via your operating system. Because no data is collected, the app complies with global children's privacy standards (COPPA/GDPR-K).",
    "privacy.s5Title": "5. Contact",
    "privacy.s5Body": "For privacy inquiries, contact: mwveliz@gmail.com",
    "terms.title": "Terms & Conditions",
    "terms.updated": "Last updated: November 24, 2026 • Package: com.mwveliz.tawpwat",
    "terms.intro": "By downloading or playing TAWPWAT: The Amazing Warp Post Way at Tawpwat, you agree to these Terms and Conditions.",
    "terms.s1Title": "1. License to Use",
    "terms.s1Body": "You are granted a personal, non-exclusive, non-transferable license to install and play TAWPWAT on compatible Android devices via Google Play.",
    "terms.s2Title": "2. Intellectual Property",
    "terms.s2Body": "All original characters (including Inspector Kira Uku and puppies Domi, Leia, and Mora), lore, 3D models, procedural systems, and audio compositions are the intellectual property of Miguel Delgado Veliz.",
    "terms.s3Title": "3. Disclaimer of Warranties",
    "terms.s3Body": "The application is provided 'AS IS' without warranties of any kind. Since all saves are local, uninstalling the app removes local save data.",
    "terms.s4Title": "4. Contact",
    "terms.s4Body": "Questions regarding these terms may be sent to mwveliz@gmail.com.",
    "license.title": "License & Attribution",
    "license.updated": "Last updated: November 24, 2026 • Package: com.mwveliz.tawpwat",
    "license.intro": "Licensing details for the TAWPWAT web portal, game IP, and underlying open-source engine.",
    "license.s1Title": "1. TAWPWAT Game Assets & Lore",
    "license.s1Body": "All original game content, characters, 3D assets, and trademarks in com.mwveliz.tawpwat are © 2026 Miguel Delgado Veliz. All rights reserved.",
    "license.s2Title": "2. Landing Page (MIT License)",
    "license.s2Body": "Permission is hereby granted, free of charge, to any person obtaining a copy of this web landing template to use, copy, modify, and publish it under the MIT License.",
    "license.s3Title": "3. Godot Engine Attribution",
    "license.s3Body": "TAWPWAT is powered by Godot Engine 4.3+ (https://godotengine.org/license), distributed under the MIT License. Portions of this software are copyright © 2014-present Godot Engine contributors."
  },
  es: {
    "nav.features": "Jugabilidad",
    "nav.puppies": "3 Perritas",
    "nav.demo": "Demo Warp",
    "nav.worlds": "17 Mundos",
    "nav.legal": "Legal",
    "nav.home": "Inicio",
    "nav.play": "Google Play",
    "hero.badge": "AVENTURA RETRO 3D DE RESCATE CANINO SCI-FI",
    "hero.subtitle": "The Amazing Warp Post Way at Tawpwat",
    "hero.desc": "Encarna a la Inspectora Kira Uku en una misión de 24 horas a bordo de la Estación Espacial Anular 360° de Tawpwat y a través de 17 mundos interconectados. Encuentra y rescata a 3 perritas perdidas — Domi, Leia y Mora — sintonizando Visiones Oníricas, resolviendo 5 puzzles analógicos, recogiendo sus juguetes y triangulándolas en el Ajedrez Causal 8×8 antes de que se agote la coherencia temporal.",
    "hero.ctaPlay": "Descargar en Google Play",
    "hero.ctaDemo": "Probar Simulador Warp",
    "hero.metaOffline": "100% Offline • Sin Anuncios • Misión de 24h",
    "hero.metaLangs": "36 Idiomas en Web • Android & Godot 4.3",
    "puppies.heading": "Encuentra y Rescata a las 3 Perritas Perdidas",
    "puppies.sub": "Cada perrita tiene su propio modelo 3D procedural, juguete favorito como pista, nivel de dificultad y se une a la manada de Kira al ser rescatada.",
    "pup.domi.tier": "Nivel 1: Fácil • Dachshund (Teckel)",
    "pup.domi.desc": "Se coló por los ductos siguiendo el aroma a galletitas de taquiones. Deja migajas cuánticas y hace pausas frecuentes para que Kira la alcance.",
    "pup.domi.stats": "Velocidad 5.5 • Pistas 1 • Visiones 1 • Avistamiento 100%",
    "pup.domi.toy": "Juguete: Galleta cuántica de hueso",
    "pup.leia.tier": "Nivel 2: Medio • Jack Russell Terrier",
    "pup.leia.desc": "Salió disparada tras una pelota brillante hacia un umbral hiperdimensional. Ágil, rápida y veloz cruzando entre épocas.",
    "pup.leia.stats": "Velocidad 7.5 • Pistas 2 • Visiones 2 • Avistamiento 50%",
    "pup.leia.toy": "Juguete: Pelota de tenis fosforescente",
    "pup.mora.tier": "Nivel 3: Difícil • Gran Danés Cachorrita",
    "pup.mora.desc": "Cachorrita gigante pero tímida; sus patotas tropiezan con anomalías de gravedad y se esconde en los rincones más lejanos del hiperespacio.",
    "pup.mora.stats": "Velocidad 10.0 • Pistas 3 • Visiones 3 • Avistamiento 30%",
    "pup.mora.toy": "Juguete: Mordedor de cuerda interestelar",
    "features.heading": "Cómo se juega TAWPWAT",
    "features.sub": "Una aventura 3D atmosférica sin violencia, que combina una estación espacial giratoria 360°, puzzles táctiles y rescate de manada.",
    "feat1.title": "Estación Anular 360° y 17 Mundos",
    "feat1.desc": "Recorre los 5 sectores continuos de la estación Tawpwat y 17 mundos (Exterior, Distrito Interno y Cámara Santuario).",
    "feat2.title": "Visiones Oníricas (+5% Coherencia)",
    "feat2.desc": "Acércate a terminales LED para activar dioramas oníricos 3D que restauran la coherencia y revelan a qué mundo huyó la perrita.",
    "feat3.title": "5 Puzzles Analógicos y Sci-Fi",
    "feat3.desc": "Usa Gemas Cuánticas o resuelve el Osciloscopio, Disco Cifrador, Reloj Astronómico, Deflector Crono e Hidromanómetro.",
    "feat4.title": "Avistamientos en Vivo y Juguetes",
    "feat4.desc": "Atrapa a la perrita durante su pausa juguetona para rescatarla al instante, o recoge el juguete que deja caer como pista.",
    "feat5.title": "Ajedrez Causal 8×8 y Manada",
    "feat5.desc": "Reúne pistas para marcar el mundo objetivo (🎯) en el tablero A1–H8, rescátala en la Zona 2 y reúne a toda la manada.",
    "feat6.title": "100% Offline y Privado",
    "feat6.desc": "Sin permisos de internet, sin anuncios, guardado local, más accesibilidad con síntesis de voz (TTS) y vibración háptica.",
    "demo.heading": "Simulador Interactivo de Portal Warp",
    "demo.sub": "Calibra el Osciloscopio de Frecuencias como hace Kira para desbloquear portales y detectar el rastro de la perrita.",
    "demo.freqLabel": "Frecuencia Portadora (Hz)",
    "demo.phaseLabel": "Fase Taquiónica (°)",
    "demo.ampLabel": "Ganancia Armónica (%)",
    "demo.locked": "PORTAL BLOQUEADO — CALIBRA RESONANCIA",
    "demo.unlocked": "RESONANCIA SINCRONIZADA — RASTRO CANINO DETECTADO",
    "demo.hint": "Objetivo: Frec 64 Hz • Fase 180° • Ganancia 75%",
    "demo.reset": "Desajustar Frecuencia",
    "worlds.heading": "17 Mundos Interconectados",
    "worlds.sub": "Viaja desde la Tierra antigua y archivos orbitales hasta exoplanetas y el Archivo Nulo del Sombrero, cada uno con 3 zonas 3D.",
    "legal.heading": "Documentación Legal y Google Play",
    "legal.sub": "Políticas transparentes listas para cumplir con Google Play Console.",
    "legal.privacyBtn": "Política de Privacidad",
    "legal.termsBtn": "Términos y Condiciones",
    "legal.licenseBtn": "Licencia y Propiedad",
    "footer.rights": "© 2026 Miguel Delgado Veliz (com.mwveliz.tawpwat). Todos los derechos reservados.",
    "footer.playLink": "Google Play Store",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos y Condiciones",
    "footer.license": "Licencia",
    "privacy.title": "Política de Privacidad",
    "privacy.updated": "Última actualización: 24 de noviembre de 2026 • Paquete: com.mwveliz.tawpwat",
    "privacy.intro": "TAWPWAT: The Amazing Warp Post Way at Tawpwat es desarrollado por Miguel Delgado Veliz como un videojuego 100% offline y respetuoso con tu privacidad.",
    "privacy.s1Title": "1. Cero Recolección de Datos",
    "privacy.s1Body": "TAWPWAT no recopila, almacena, transmite ni comparte información personal, identificadores de dispositivo, ubicación, contactos ni analíticas de uso. La app Android no solicita permiso de internet.",
    "privacy.s2Title": "2. Almacenamiento Exclusivamente Local",
    "privacy.s2Body": "Tu progreso, perritas rescatadas, idioma y ajustes se guardan únicamente en tu dispositivo (user://savegame.json) y nunca salen de él.",
    "privacy.s3Title": "3. Sin Anuncios ni SDKs de Terceros",
    "privacy.s3Body": "TAWPWAT no contiene publicidad, ni SDKs de rastreo, ni servicios de analítica de terceros.",
    "privacy.s4Title": "4. Accesibilidad y Privacidad Infantil",
    "privacy.s4Body": "La síntesis de voz (TTS) opcional y la vibración háptica funcionan localmente en tu sistema operativo. Al no recopilar datos, cumple con estándares internacionales de privacidad infantil (COPPA/GDPR-K).",
    "privacy.s5Title": "5. Contacto",
    "privacy.s5Body": "Para consultas sobre privacidad, escribe a: mwveliz@gmail.com",
    "terms.title": "Términos y Condiciones",
    "terms.updated": "Última actualización: 24 de noviembre de 2026 • Paquete: com.mwveliz.tawpwat",
    "terms.intro": "Al descargar o jugar TAWPWAT: The Amazing Warp Post Way at Tawpwat, aceptas estos Términos y Condiciones.",
    "terms.s1Title": "1. Licencia de Uso",
    "terms.s1Body": "Se te otorga una licencia personal, no exclusiva e intransferible para instalar y jugar TAWPWAT en dispositivos Android compatibles vía Google Play.",
    "terms.s2Title": "2. Propiedad Intelectual",
    "terms.s2Body": "Todos los personajes originales (incluida la Inspectora Kira Uku y las perritas Domi, Leia y Mora), lore, modelos 3D, sistemas procedurales y composiciones son propiedad intelectual de Miguel Delgado Veliz.",
    "terms.s3Title": "3. Exclusión de Garantías",
    "terms.s3Body": "La aplicación se ofrece 'TAL CUAL' sin garantías de ningún tipo. Como el guardado es local, desinstalar la app elimina los datos guardados localmente.",
    "terms.s4Title": "4. Contacto",
    "terms.s4Body": "Para consultas sobre estos términos, escribe a mwveliz@gmail.com.",
    "license.title": "Licencia y Atribuciones",
    "license.updated": "Última actualización: 24 de noviembre de 2026 • Paquete: com.mwveliz.tawpwat",
    "license.intro": "Detalles de licencia del portal web de TAWPWAT, propiedad intelectual del juego y motor open-source.",
    "license.s1Title": "1. Recursos y Lore de TAWPWAT",
    "license.s1Body": "Todo el contenido original, personajes, modelos 3D y marcas de com.mwveliz.tawpwat son © 2026 Miguel Delgado Veliz. Todos los derechos reservados.",
    "license.s2Title": "2. Página Web (Licencia MIT)",
    "license.s2Body": "Se concede permiso gratuito a cualquier persona que obtenga una copia de esta plantilla web para usarla, copiarla, modificarla y publicarla bajo la Licencia MIT.",
    "license.s3Title": "3. Atribución a Godot Engine",
    "license.s3Body": "TAWPWAT funciona con Godot Engine 4.3+ (https://godotengine.org/license), distribuido bajo Licencia MIT. Partes de este software son copyright © 2014-presente de los colaboradores de Godot Engine."
  },
  ja: {
    "nav.features": "ゲーム概要",
    "nav.puppies": "3匹の子犬",
    "nav.demo": "ワープ体験",
    "nav.worlds": "17の世界",
    "nav.legal": "法的情報",
    "nav.home": "ホーム",
    "nav.play": "Google Play",
    "hero.badge": "レトロ3D リミナルSF 子犬レスキュー冒険",
    "hero.subtitle": "The Amazing Warp Post Way at Tawpwat",
    "hero.desc": "捜査官キラ・ウクとして、360度回転するタウパット環状宇宙ステーションと17の連結世界へ24時間タイムリミットの救出任務に出発！夢幻ビジョンを調整し、5種類のアナログ・ワープパズルを解き、落ちたおもちゃを集めて8×8因果チェス盤で3匹の迷子の子犬（ドミ、レイア、モラ）を救出しよう。",
    "hero.ctaPlay": "Google Playで入手",
    "hero.ctaDemo": "ワープ装置を試す",
    "hero.metaOffline": "100% オフライン • 広告なし • 24時間救出任務",
    "hero.metaLangs": "Web 36言語対応 • Android & Godot 4.3",
    "puppies.heading": "3匹の迷子の子犬を探して救出しよう",
    "puppies.sub": "それぞれ固有の3D犬種モデル、お気に入りのおもちゃ、難易度を持ち、救出するとキラの群れ（パック）に加わります。",
    "pup.domi.tier": "レベル1：かんたん • ダックスフンド",
    "pup.domi.desc": "タキオン・ビスケットの匂いを追ってワープダクトへ迷い込んだ子犬。よく立ち止まるので追いかけやすい。",
    "pup.domi.stats": "速度 5.5 • 手掛かり 1 • ビジョン 1 • 目撃率 100%",
    "pup.domi.toy": "おもちゃ：量子ボーンビスケット",
    "pup.leia.tier": "レベル2：ふつう • ジャック・ラッセル・テリア",
    "pup.leia.desc": "光るテニスボールを追って超次元ポータルへ飛び込んだ俊敏な子犬。素早く時代を駆け抜けます。",
    "pup.leia.stats": "速度 7.5 • 手掛かり 2 • ビジョン 2 • 目撃率 50%",
    "pup.leia.toy": "おもちゃ：蛍光テニスボール",
    "pup.mora.tier": "レベル3：むずかしい • グレート・デーンの子犬",
    "pup.mora.desc": "大きな体だけど恥ずかしがり屋。重力異常につまずきながら超空間の最深部へ隠れてしまいます。",
    "pup.mora.stats": "速度 10.0 • 手掛かり 3 • ビジョン 3 • 目撃率 30%",
    "pup.mora.toy": "おもちゃ：星間ロープトイ",
    "features.heading": "TAWPWATのゲームプレイ",
    "features.sub": "360度回転ステーション、アナログパズル、子犬の群れ救出が融合した非暴力・没入型3D SFアドベンチャー。",
    "feat1.title": "360°環状ステーションと17の世界",
    "feat1.desc": "5セクターが連続するタウパット宇宙ステーションと、3ゾーン構成の17の世界を探索。",
    "feat2.title": "夢幻ビジョン＆コヒーレンス+5%",
    "feat2.desc": "LED端末で3D夢ジオラマを起動し、時間軸コヒーレンスを回復しながら子犬が逃げた世界を特定。",
    "feat3.title": "5種のアナログ＆SFワープパズル",
    "feat3.desc": "量子ジェムで解除するか、オシロスコープ、暗号ディスク、天文時計、クロノビーム、水圧計に挑戦。",
    "feat4.title": "リアルタイム目撃＆おもちゃの手掛かり",
    "feat4.desc": "遊びの合間に追いついて早期救出するか、落としたお気に入りのおもちゃを手掛かりとして回収。",
    "feat5.title": "8×8因果チェス盤と群れの再会",
    "feat5.desc": "手掛かりを集めてA1–H8盤面で目的地(🎯)を特定し、ゾーン2で救出。3匹全員でフィナーレへ！",
    "feat6.title": "完全オフライン＆プライバシー重視",
    "feat6.desc": "通信権限不要、広告ゼロ、ローカル保存のみ。音声読み上げ(TTS)と振動にも対応。",
    "demo.heading": "インタラクティブ・ワープポータル体験",
    "demo.sub": "キラと同じように周波数オシロスコープを調整してゲートを開き、迷子の子犬の軌跡を捉えよう。",
    "demo.freqLabel": "搬送周波数 (Hz)",
    "demo.phaseLabel": "タキオン位相 (°)",
    "demo.ampLabel": "高調波ゲイン (%)",
    "demo.locked": "ポータル施錠中 — 共鳴を調整してください",
    "demo.unlocked": "共鳴同期完了 — 子犬の軌跡を検出",
    "demo.hint": "目標: 周波数 64 Hz • 位相 180° • ゲイン 75%",
    "demo.reset": "周波数をリセット",
    "worlds.heading": "17の連結ワールド",
    "worlds.sub": "古代地球から軌道アーカイブ、太陽系外惑星、ソンブレロ・ヌル・アーカイブまで各3ゾーンを探索。",
    "legal.heading": "Google Play 法的ドキュメント",
    "legal.sub": "Google Play Consoleの要件に準拠した透明性の高いポリシー。",
    "legal.privacyBtn": "プライバシーポリシー",
    "legal.termsBtn": "利用規約",
    "legal.licenseBtn": "ライセンスと権利",
    "footer.rights": "© 2026 Miguel Delgado Veliz (com.mwveliz.tawpwat). All rights reserved.",
    "footer.playLink": "Google Play ストア",
    "footer.privacy": "プライバシーポリシー",
    "footer.terms": "利用規約",
    "footer.license": "ライセンス",
    "privacy.title": "プライバシーポリシー",
    "privacy.updated": "最終更新日: 2026年11月24日 • パッケージ: com.mwveliz.tawpwat",
    "privacy.intro": "TAWPWAT: The Amazing Warp Post Way at Tawpwat は、Miguel Delgado Veliz によって開発された100%オフライン・プライバシー重視のゲームです。",
    "privacy.s1Title": "1. データ収集ゼロ",
    "privacy.s1Body": "TAWPWATは個人情報、端末識別子、位置情報、連絡先、利用状況データを一切収集・保存・送信・共有しません。Android版はインターネット権限を要求しません。",
    "privacy.s2Title": "2. ローカル保存のみ",
    "privacy.s2Body": "ゲームの進行状況、救出した子犬、言語設定は端末内（user://savegame.json）にのみ保存され、外部へ送信されることはありません。",
    "privacy.s3Title": "3. 広告・外部SDKなし",
    "privacy.s3Body": "本アプリには広告、トラッキングSDK、第三者解析ツールは一切含まれていません。",
    "privacy.s4Title": "4. アクセシビリティと児童プライバシー",
    "privacy.s4Body": "任意の音声読み上げ(TTS)や振動機能はOS上でローカル動作します。データを一切収集しないため、COPPAやGDPR-K等の児童プライバシー基準に準拠しています。",
    "privacy.s5Title": "5. お問い合わせ",
    "privacy.s5Body": "プライバシーに関するお問い合わせ: mwveliz@gmail.com",
    "terms.title": "利用規約",
    "terms.updated": "最終更新日: 2026年11月24日 • パッケージ: com.mwveliz.tawpwat",
    "terms.intro": "TAWPWATをダウンロードまたはプレイすることで、本利用規約に同意したものとみなされます。",
    "terms.s1Title": "1. 使用許諾",
    "terms.s1Body": "Google Playを通じて対応Android端末にTAWPWATをインストール・プレイするための個人的・非独占的・譲渡不可のライセンスが付与されます。",
    "terms.s2Title": "2. 知的財産権",
    "terms.s2Body": "キラ・ウクおよび子犬のドミ、レイア、モラを含むオリジナルキャラクター、世界観、3Dモデル、楽曲はMiguel Delgado Velizの知的財産です。",
    "terms.s3Title": "3. 免責事項",
    "terms.s3Body": "本アプリは「現状有姿」で提供されます。セーブデータはローカル保存のため、アプリを削除すると進行状況も削除されます。",
    "terms.s4Title": "4. お問い合わせ",
    "terms.s4Body": "規約に関するご質問は mwveliz@gmail.com までご連絡ください。",
    "license.title": "ライセンスと帰属表示",
    "license.updated": "最終更新日: 2026年11月24日 • パッケージ: com.mwveliz.tawpwat",
    "license.intro": "TAWPWAT Webサイト、ゲームIP、および使用エンジンのライセンス情報。",
    "license.s1Title": "1. ゲームアセットと世界観",
    "license.s1Body": "com.mwveliz.tawpwat のオリジナルコンテンツ、キャラクター、商標は © 2026 Miguel Delgado Veliz に帰属します。",
    "license.s2Title": "2. ランディングページ (MITライセンス)",
    "license.s2Body": "本Webサイトのテンプレート部分はMITライセンスの下で自由に使用・改変・公開できます。",
    "license.s3Title": "3. Godot Engine 帰属表示",
    "license.s3Body": "TAWPWATはMITライセンスの Godot Engine 4.3+ (https://godotengine.org/license) を使用しています。"
  }
};

const EXTRA_LANGS = {
  pt: {
    "nav.features": "Jogabilidade", "nav.puppies": "3 Cachorrinhas", "nav.demo": "Demo Warp", "nav.worlds": "17 Mundos", "nav.legal": "Legal", "nav.home": "Início", "nav.play": "Google Play",
    "hero.badge": "AVENTURA RETRO 3D DE RESGATE CANINO SCI-FI",
    "hero.desc": "Jogue como a Inspetora Kira Uku em uma missão de 24 horas pela Estação Espacial Anular 360° de Tawpwat e 17 mundos interconectados. Encontre e resgate 3 cachorrinhas perdidas — Domi, Leia e Mora — sintonizando Visões Oníricas, resolvendo 5 puzzles analógicos e triangulando pistas no Xadrez Causal 8×8.",
    "hero.ctaPlay": "Baixar no Google Play", "hero.ctaDemo": "Testar Simulador Warp",
    "hero.metaOffline": "100% Offline • Sem Anúncios • Missão de 24h", "hero.metaLangs": "36 Idiomas na Web • Android & Godot 4.3",
    "puppies.heading": "Encontre e Resgate as 3 Cachorrinhas Perdidas",
    "puppies.sub": "Cada cachorrinha tem seu modelo 3D procedural, brinquedo favorito como pista, nível de dificuldade e se junta à matilha de Kira ao ser resgatada.",
    "pup.domi.tier": "Nível 1: Fácil • Dachshund (Teckel)", "pup.domi.desc": "Seguiu o cheiro de biscoitos de táquions pelos dutos. Deixa migalhas quânticas e faz pausas frequentes.", "pup.domi.toy": "Brinquedo: Biscoito quântico de osso",
    "pup.leia.tier": "Nível 2: Médio • Jack Russell Terrier", "pup.leia.desc": "Correu atrás de uma bola brilhante por um portal hiperdimensional. Ágil, rápida e saltitante.", "pup.leia.toy": "Brinquedo: Bola de tênis fosforescente",
    "pup.mora.tier": "Nível 3: Difícil • Dogue Alemão Filhote", "pup.mora.desc": "Filhote gigante e tímida cujas patas grandes tropeçam em anomalias gravitacionais nos cantos mais distantes do hiperespaço.", "pup.mora.toy": "Brinquedo: Corda interestelar",
    "features.heading": "Como funciona o TAWPWAT", "features.sub": "Uma aventura 3D atmosférica sem violência, unindo estação giratória 360°, puzzles táteis e resgate em matilha.",
    "feat1.title": "Estação Anular 360° e 17 Mundos", "feat1.desc": "Explore os 5 setores contínuos da estação Tawpwat e 17 mundos (Exterior, Distrito e Câmara Santuário).",
    "feat2.title": "Visões Oníricas (+5% Coerência)", "feat2.desc": "Ative terminais LED para restaurar a coerência temporal e descobrir para qual mundo a cachorrinha fugiu.",
    "feat3.title": "5 Puzzles Analógicos e Sci-Fi", "feat3.desc": "Use Gemas Quânticas ou resolva Osciloscópio, Disco Cifrador, Relógio Astronômico, Defletor Crono e Hidromanômetro.",
    "feat4.title": "Avistamentos e Brinquedos", "feat4.desc": "Alcance a cachorrinha em sua pausa brincalhona ou colete o brinquedo favorito que ela deixa como pista.",
    "feat5.title": "Xadrez Causal 8×8 e Matilha", "feat5.desc": "Reúna pistas para marcar o mundo alvo (🎯) no tabuleiro A1–H8, resgate-a na Zona 2 e reúna toda a matilha!",
    "feat6.title": "100% Offline e Privado", "feat6.desc": "Sem permissão de internet, sem anúncios, salvamento local, TTS acessível e feedback háptico.",
    "demo.heading": "Simulador Interativo de Portal Warp", "demo.sub": "Calibre o Osciloscópio de Frequências como Kira para abrir portais e localizar o rastro da cachorrinha.",
    "demo.freqLabel": "Frequência Portadora (Hz)", "demo.phaseLabel": "Fase Taquiônica (°)", "demo.ampLabel": "Ganho Harmônico (%)",
    "demo.locked": "PORTAL BLOQUEADO — AJUSTE A RESSONÂNCIA", "demo.unlocked": "RESSONÂNCIA SINCRONIZADA — RASTRO DETECTADO",
    "demo.hint": "Alvo: Freq 64 Hz • Fase 180° • Ganho 75%", "demo.reset": "Embaralhar Frequência",
    "worlds.heading": "17 Mundos Interconectados", "worlds.sub": "Viaje da Terra antiga e arquivos orbitais até exoplanetas e o Arquivo Nulo do Sombrero.",
    "legal.heading": "Documentação Legal e Google Play", "legal.sub": "Políticas transparentes prontas para o Google Play Console.",
    "legal.privacyBtn": "Política de Privacidade", "legal.termsBtn": "Termos e Condições", "legal.licenseBtn": "Licença e PI",
    "footer.rights": "© 2026 Miguel Delgado Veliz (com.mwveliz.tawpwat). Todos os direitos reservados.",
    "footer.playLink": "Google Play Store", "footer.privacy": "Privacidade", "footer.terms": "Termos", "footer.license": "Licença",
    "privacy.title": "Política de Privacidade", "privacy.intro": "TAWPWAT é desenvolvido por Miguel Delgado Veliz como um jogo 100% offline que respeita sua privacidade.",
    "privacy.s1Title": "1. Zero Coleta de Dados", "privacy.s1Body": "TAWPWAT não coleta, armazena ou transmite dados pessoais. O app não solicita acesso à internet.",
    "privacy.s2Title": "2. Armazenamento Local", "privacy.s2Body": "Progresso e cachorrinhas resgatadas são salvos apenas localmente no dispositivo.",
    "privacy.s3Title": "3. Sem Anúncios", "privacy.s3Body": "Sem anúncios nem SDKs de rastreamento.",
    "privacy.s4Title": "4. Acessibilidade e Privacidade Infantil", "privacy.s4Body": "TTS e vibração funcionam localmente. Conforme COPPA/GDPR-K.",
    "privacy.s5Title": "5. Contato", "privacy.s5Body": "mwveliz@gmail.com",
    "terms.title": "Termos e Condições", "terms.intro": "Ao baixar ou jogar TAWPWAT, você concorda com estes termos.",
    "terms.s1Title": "1. Licença", "terms.s1Body": "Licença pessoal para jogar no Android via Google Play.",
    "terms.s2Title": "2. Propriedade Intelectual", "terms.s2Body": "Personagens (Kira Uku, Domi, Leia, Mora) e modelos 3D pertencem a Miguel Delgado Veliz.",
    "terms.s3Title": "3. Isenção", "terms.s3Body": "Fornecido 'COMO ESTÁ'. Desinstalar remove dados salvos localmente.",
    "terms.s4Title": "4. Contato", "terms.s4Body": "mwveliz@gmail.com",
    "license.title": "Licença e Atribuições", "license.intro": "Licenciamento do site, jogo e Godot Engine.",
    "license.s1Title": "1. Conteúdo do Jogo", "license.s1Body": "© 2026 Miguel Delgado Veliz. Todos os direitos reservados.",
    "license.s2Title": "2. Site (MIT)", "license.s2Body": "Modelo web distribuído sob licença MIT.",
    "license.s3Title": "3. Godot Engine", "license.s3Body": "Godot Engine 4.3+ sob licença MIT."
  },
  fr: {
    "nav.features": "Gameplay", "nav.puppies": "3 Chiots", "nav.demo": "Démo Warp", "nav.worlds": "17 Mondes", "nav.legal": "Légal", "nav.home": "Accueil", "nav.play": "Google Play",
    "hero.badge": "AVENTURE SCI-FI RÉTRO 3D — SAUVETAGE DE CHIOTS",
    "hero.desc": "Incarnez l'inspectrice Kira Uku dans une mission de 24h à bord de la station spatiale annulaire 360° de Tawpwat et à travers 17 mondes. Retrouvez et sauvez 3 chiots disparus — Domi, Leia et Mora — grâce aux Visions Oniriques, 5 puzzles analogiques et à l'Échiquier Causal 8×8.",
    "hero.ctaPlay": "Télécharger sur Google Play", "hero.ctaDemo": "Tester le Simulateur Warp",
    "hero.metaOffline": "100% Hors ligne • Sans pub • Mission 24h", "hero.metaLangs": "36 Langues Web • Android & Godot 4.3",
    "puppies.heading": "Retrouvez les 3 Chiots Disparus",
    "puppies.sub": "Chaque chiot possède son modèle 3D procédural, son jouet favori, son niveau de difficulté et rejoint la meute de Kira une fois sauvé.",
    "pup.domi.tier": "Niveau 1 : Facile • Teckel", "pup.domi.desc": "A suivi l'odeur des biscuits à tachyons dans les conduits. Fait souvent des pauses joueuses.", "pup.domi.toy": "Jouet : Biscuit os quantique",
    "pup.leia.tier": "Niveau 2 : Moyen • Jack Russell Terrier", "pup.leia.desc": "A poursuivi une balle phosphorescente à travers un portail hyperdimensionnel.", "pup.leia.toy": "Jouet : Balle de tennis lumineuse",
    "pup.mora.tier": "Niveau 3 : Difficile • Chiot Dogue Allemand", "pup.mora.desc": "Géante timide qui se réfugie dans les recoins les plus lointains de l'hyperespace.", "pup.mora.toy": "Jouet : Corde interstellaire",
    "features.heading": "Boucle de Gameplay", "features.sub": "Une aventure 3D non violente combinant station rotative à 360°, énigmes tactiles et sauvetage en meute.",
    "feat1.title": "Station Annulaire 360° & 17 Mondes", "feat1.desc": "Explorez les 5 secteurs continus de Tawpwat et 17 mondes à 3 zones.",
    "feat2.title": "Visions Oniriques (+5% Cohérence)", "feat2.desc": "Restaurez la cohérence temporelle aux bornes LED et repérez le monde où le chiot s'est réfugié.",
    "feat3.title": "5 Puzzles Analogiques & Sci-Fi", "feat3.desc": "Oscilloscope, Disque Chiffreur, Horloge Astronomique, Déflecteur Chrono et Manomètre Hydro.",
    "feat4.title": "Observations & Jouets Perdus", "feat4.desc": "Rattrapez le chiot lors de sa pause ou ramassez son jouet tombé comme indice.",
    "feat5.title": "Échiquier Causal 8×8 & Meute", "feat5.desc": "Triangulez le monde cible (🎯) en Zone 2 et réunissez les 3 chiots.",
    "feat6.title": "100% Hors ligne & Privé", "feat6.desc": "Aucune pub, aucun suivi, sauvegarde locale, TTS et retour haptique.",
    "demo.heading": "Simulateur de Portail Warp", "demo.sub": "Calibrez l'oscilloscope comme Kira pour ouvrir les portails et capter la piste d'un chiot.",
    "demo.locked": "PORTAIL VERROUILLÉ — RÉGLEZ LA RÉSONANCE", "demo.unlocked": "RÉSONANCE SYNCHRONISÉE — PISTE DÉTECTÉE",
    "worlds.heading": "17 Mondes Interconnectés", "worlds.sub": "De la Terre antique aux exoplanètes jusqu'à l'Archive Nulle du Sombrero.",
    "legal.heading": "Documents Légaux & Google Play", "privacy.title": "Politique de Confidentialité", "terms.title": "Conditions d'Utilisation", "license.title": "Licence & Attributions"
  },
  it: {
    "nav.features": "Gameplay", "nav.puppies": "3 Cuccioli", "nav.demo": "Demo Warp", "nav.worlds": "17 Mondi", "nav.legal": "Legale", "nav.home": "Home", "nav.play": "Google Play",
    "hero.badge": "AVVENTURA RETRO 3D SCI-FI — SALVATAGGIO CUCCIOLI",
    "hero.desc": "Vesti i panni dell'ispettrice Kira Uku in una missione di 24 ore nella Stazione Spaziale Anulare 360° di Tawpwat e attraverso 17 mondi. Trova e salva 3 cucciole smarrite — Domi, Leia e Mora — con Visioni Oniriche, 5 puzzle analogici e Scacchiera Causale 8×8.",
    "hero.ctaPlay": "Scarica su Google Play", "hero.ctaDemo": "Prova il Simulatore Warp",
    "hero.metaOffline": "100% Offline • Zero Pubblicità • Missione 24h", "hero.metaLangs": "36 Lingue Web • Android & Godot 4.3",
    "puppies.heading": "Trova e Salva le 3 Cucciole Smarrite",
    "puppies.sub": "Ogni cucciola ha un modello 3D procedurale, un giocattolo preferito, un livello di difficoltà e si unisce al branco di Kira.",
    "pup.domi.tier": "Livello 1: Facile • Bassotto (Teckel)", "pup.domi.desc": "Ha seguito il profumo dei biscotti ai tachioni nei condotti. Si ferma spesso per giocare.", "pup.domi.toy": "Gioco: Biscotto quantico a osso",
    "pup.leia.tier": "Livello 2: Medio • Jack Russell Terrier", "pup.leia.desc": "È corsa dietro a una pallina fluorescente attraversando un portale dimensionale.", "pup.leia.toy": "Gioco: Pallina da tennis fluorescente",
    "pup.mora.tier": "Livello 3: Difficile • Cucciola di Alano", "pup.mora.desc": "Gigante ma timida, si nasconde negli angoli più remoti dell'iperspazio.", "pup.mora.toy": "Gioco: Corda interstellare",
    "features.heading": "Gameplay Principale", "features.sub": "Avventura 3D atmosferica senza violenza tra stazione rotante 360°, puzzle tattili e salvataggio del branco.",
    "feat1.title": "Stazione Anulare 360° e 17 Mondi", "feat1.desc": "Esplora i 5 settori continui della stazione Tawpwat e 17 mondi a 3 zone.",
    "feat2.title": "Visioni Oniriche (+5% Coerenza)", "feat2.desc": "Ripristina la coerenza temporale ai terminali LED e scopri in quale mondo è fuggita la cucciola.",
    "feat3.title": "5 Puzzle Analogici e Sci-Fi", "feat3.desc": "Oscilloscopio, Disco Cifratore, Orologio Astronomico, Deflettore Crono e Manometro Idro.",
    "feat4.title": "Avvistamenti e Giocattoli", "feat4.desc": "Raggiungi la cucciola durante la sua pausa o raccogli il suo giocattolo come indizio.",
    "feat5.title": "Scacchi Causali 8×8 e Branco", "feat5.desc": "Triangola il mondo bersaglio (🎯) in Zona 2 e riunisci tutte e 3 le cucciole.",
    "feat6.title": "100% Offline e Privato", "feat6.desc": "Zero pubblicità, salvataggi locali, sintesi vocale TTS e vibrazione.",
    "demo.heading": "Simulatore Interattivo Portale Warp", "demo.sub": "Calibra l'oscilloscopio come Kira per aprire i portali e rilevare la traccia della cucciola.",
    "demo.locked": "PORTALE BLOCCATO — REGOLA RISONANZA", "demo.unlocked": "RISONANZA SINCRONIZZATA — TRACCIA RILEVATA",
    "worlds.heading": "17 Mondi Interconnessi", "worlds.sub": "Dalla Terra antica agli esopianeti fino all'Archivio Nullo del Sombrero.",
    "legal.heading": "Documentazione Legale e Google Play", "privacy.title": "Informativa sulla Privacy", "terms.title": "Termini e Condizioni", "license.title": "Licenza e Attribuzioni"
  },
  de: {
    "nav.features": "Gameplay", "nav.puppies": "3 Welpen", "nav.demo": "Warp-Demo", "nav.worlds": "17 Welten", "nav.legal": "Rechtliches", "nav.home": "Start", "nav.play": "Google Play",
    "hero.badge": "RETRO-3D LIMINALES SCI-FI WELPEN-RETTUNGSSPIEL",
    "hero.desc": "Begleite Inspektorin Kira Uku auf einer 24-Stunden-Mission durch die 360°-Ringraumstation Tawpwat und 17 verbundene Welten. Finde und rette 3 vermisste Welpen — Domi, Leia und Mora — mit Traumvisionen, 5 analogen Rätseln und dem 8×8-Kausalschachbrett.",
    "hero.ctaPlay": "Bei Google Play holen", "hero.ctaDemo": "Warp-Simulator testen",
    "hero.metaOffline": "100 % Offline • Keine Werbung • 24h-Mission", "hero.metaLangs": "36 Web-Sprachen • Android & Godot 4.3",
    "puppies.heading": "Finde & Rette die 3 Vermissten Welpen",
    "puppies.sub": "Jeder Welpe hat ein eigenes 3D-Rassemodell, ein Lieblingsspielzeug als Hinweis und schließt sich Kiras Rudel an.",
    "pup.domi.tier": "Level 1: Einfach • Dackel (Teckel)", "pup.domi.desc": "Folgte dem Duft von Tachyonen-Keksen durch die Schächte und macht oft Spielpausen.", "pup.domi.toy": "Spielzeug: Quanten-Knochenkeks",
    "pup.leia.tier": "Level 2: Mittel • Jack Russell Terrier", "pup.leia.desc": "Sprang einem leuchtenden Tennisball in ein Hyperraum-Portal hinterher.", "pup.leia.toy": "Spielzeug: Leuchtender Tennisball",
    "pup.mora.tier": "Level 3: Schwer • Deutsche Dogge Welpe", "pup.mora.desc": "Riesig, aber schüchtern — versteckt sich in den entlegensten Winkeln des Hyperraums.", "pup.mora.toy": "Spielzeug: Interstellares Spieltau",
    "features.heading": "Spielprinzip", "features.sub": "Ein gewaltfreies 3D-Sci-Fi-Abenteuer mit rotierender 360°-Station, analogen Rätseln und Rudelrettung.",
    "feat1.title": "360°-Ringstation & 17 Welten", "feat1.desc": "Erkunde 5 nahtlose Stationssektoren und 17 Welten mit je 3 Zonen.",
    "feat2.title": "Traumvisionen (+5 % Kohärenz)", "feat2.desc": "Stelle Zeitkohärenz an LED-Terminals wieder her und finde die Zielwelt.",
    "feat3.title": "5 Analoge & Sci-Fi-Rätsel", "feat3.desc": "Oszilloskop, Chiffrierscheibe, Astronomische Uhr, Chronostrahl und Hydro-Manometer.",
    "feat4.title": "Sichtungen & Spielzeug-Hinweise", "feat4.desc": "Fange den Welpen in seiner Pause ein oder sammle sein Spielzeug ein.",
    "feat5.title": "8×8-Kausalschach & Rudel", "feat5.desc": "Trianguliere die Zielwelt (🎯) auf A1–H8 und vereine alle 3 Welpen.",
    "feat6.title": "100 % Offline & Datenschutz", "feat6.desc": "Keine Werbung, lokale Spielstände, TTS und Haptik.",
    "demo.heading": "Interaktiver Warp-Portal-Simulator", "demo.sub": "Kalibriere das Oszilloskop wie Kira, um Portale zu öffnen und Welpenspuren zu finden.",
    "demo.locked": "PORTAL GESPERRT — RESONANZ ABGLEICHEN", "demo.unlocked": "RESONANZ SYNCHRON — WELPENSPUR ERKANNT",
    "worlds.heading": "17 Verbundene Welten", "worlds.sub": "Von der Antike bis zu Exoplaneten und dem Sombrero-Nullarchiv.",
    "legal.heading": "Rechtliche Hinweise & Google Play", "privacy.title": "Datenschutzerklärung", "terms.title": "Nutzungsbedingungen", "license.title": "Lizenz & Danksagungen"
  }
};

const COMPACT_LANGS = {
  "zh-CN": { "nav.features": "玩法特色", "nav.puppies": "3只小狗", "nav.demo": "跃迁模拟", "nav.worlds": "17个世界", "nav.legal": "法律条款", "nav.home": "首页", "nav.play": "Google Play", "hero.badge": "复古3D阈限空间科幻寻犬冒险", "hero.desc": "化身调查员吉拉·乌库，在360°旋转的塔帕特环形空间站与17个互联世界展开24小时救援任务，校准梦境视觉、破解5种模拟谜题，并在8×8因果象棋盘上找回失踪的3只小狗——Domi、Leia 和 Mora。", "hero.ctaPlay": "前往 Google Play 下载", "hero.ctaDemo": "体验跃迁模拟器", "puppies.heading": "寻找并营救3只失踪的小狗", "demo.heading": "交互式跃迁传送门模拟器", "demo.locked": "传送门已锁定 — 请调节谐振", "demo.unlocked": "谐振同步成功 — 已锁定小狗踪迹", "worlds.heading": "17个互联世界", "legal.heading": "Google Play 法律文档", "privacy.title": "隐私政策", "terms.title": "服务条款", "license.title": "许可与声明" },
  "zh-TW": { "nav.features": "玩法特色", "nav.puppies": "3隻小狗", "nav.demo": "躍遷模擬", "nav.worlds": "17個世界", "nav.legal": "法律條款", "nav.home": "首頁", "nav.play": "Google Play", "hero.badge": "復古3D閾限空間科幻尋犬冒險", "hero.desc": "化身調查員吉拉·烏庫，在360°旋轉的塔帕特環形太空站與17個互聯世界展開24小時救援任務，校準夢境視覺、破解5種類比謎題，並在8×8因果西洋棋盤上找回失蹤的3隻小狗——Domi、Leia 和 Mora。", "hero.ctaPlay": "前往 Google Play 下載", "hero.ctaDemo": "體驗躍遷模擬器", "puppies.heading": "尋找並營救3隻失蹤的小狗", "demo.heading": "互動式躍遷傳送門模擬器", "demo.locked": "傳送門已鎖定 — 請調節諧振", "demo.unlocked": "諧振同步成功 — 已鎖定小狗蹤跡", "worlds.heading": "17個互聯世界", "legal.heading": "Google Play 法律文件", "privacy.title": "隱私權政策", "terms.title": "服務條款", "license.title": "授權與聲明" },
  ko: { "nav.features": "게임플레이", "nav.puppies": "강아지 3마리", "nav.demo": "워프 데모", "nav.worlds": "17개 세계", "nav.legal": "법적 고지", "nav.home": "홈", "nav.play": "Google Play", "hero.badge": "레트로 3D 리미널 SF 강아지 구조 어드벤처", "hero.desc": "수사관 키라 우쿠가 되어 360° 회전하는 타우파트 원형 우주정거장과 17개 세계에서 24시간 구조 임무를 수행하세요. 몽환 비전, 5가지 아날로그 퍼즐, 8×8 인과 체스판으로 실종된 3마리 강아지(도미, 레이아, 모라)를 구출하세요!", "hero.ctaPlay": "Google Play에서 받기", "hero.ctaDemo": "워프 시뮬레이터 체험", "puppies.heading": "실종된 3마리 강아지 찾기 및 구조", "demo.heading": "인터랙티브 워프 포탈 시뮬레이터", "demo.locked": "포탈 잠금 — 공명을 맞추세요", "demo.unlocked": "공명 동기화 완료 — 강아지 흔적 감지", "worlds.heading": "17개의 연결된 세계", "legal.heading": "Google Play 법적 문서", "privacy.title": "개인정보처리방침", "terms.title": "이용약관", "license.title": "라이선스 및 저작권" },
  ru: { "nav.features": "Геймплей", "nav.puppies": "3 щенка", "nav.demo": "Демо варпа", "nav.worlds": "17 миров", "nav.legal": "Право", "nav.home": "Главная", "nav.play": "Google Play", "hero.badge": "РЕТРО 3D ЛИМИНАЛЬНОЕ SCI-FI СПАСЕНИЕ ЩЕНКОВ", "hero.desc": "В роли инспектора Киры Уку отправьтесь в 24-часовую миссию по кольцевой станции Таупат и 17 мирам, чтобы найти и спасти 3 пропавших щенков — Доми, Лею и Мору — решая 5 аналоговых головоломок и сверяя улики на доске Причинных шахмат 8×8.", "hero.ctaPlay": "Скачать в Google Play", "hero.ctaDemo": "Запустить симулятор", "puppies.heading": "Найдите и спасите 3 пропавших щенков", "demo.heading": "Интерактивный симулятор варп-портала", "demo.locked": "ПОРТАЛ ЗАБЛОКИРОВАН — НАСТРОЙТЕ РЕЗОНАНС", "demo.unlocked": "РЕЗОНАНС СИНХРОНИЗИРОВАН — СЛЕД ЩЕНКА НАЙДЕН", "worlds.heading": "17 взаимосвязанных миров", "legal.heading": "Документация для Google Play", "privacy.title": "Политика конфиденциальности", "terms.title": "Условия использования", "license.title": "Лицензия и права" },
  ar: { "nav.features": "أسلوب اللعب", "nav.puppies": "3 جراء", "nav.demo": "تجربة البوابة", "nav.worlds": "17 عالماً", "nav.legal": "قانوني", "nav.home": "الرئيسية", "nav.play": "Google Play", "hero.badge": "مغامرة خيال علمي ثلاثية الأبعاد لإنقاذ الجراء", "hero.desc": "العب بدور المحققة كيرا أوكو في مهمة مدتها 24 ساعة عبر محطة تاوبات الحلقية و17 عالماً متصلاً لإنقاذ 3 جراء مفقودة — دومي وليا ومورا — عبر الرؤى الحلمية و5 ألغاز تناظرية ولوحة الشطرنج السببي 8×8.", "hero.ctaPlay": "احصل عليه من Google Play", "hero.ctaDemo": "جرّب محاكي البوابة", "puppies.heading": "ابحث عن الجراء الثلاثة وأنقذها", "demo.heading": "محاكي بوابة الانتقال التفاعلي", "worlds.heading": "17 عالماً متصلاً", "privacy.title": "سياسة الخصوصية", "terms.title": "الشروط والأحكام", "license.title": "الترخيص" },
  hi: { "nav.features": "गेमप्ले", "nav.puppies": "3 पिल्ले", "nav.demo": "वार्प डेमो", "nav.worlds": "17 दुनिया", "nav.legal": "कानूनी", "nav.home": "होम", "nav.play": "Google Play", "hero.badge": "रेट्रो 3D साई-फाई पिल्ला बचाव एडवेंचर", "hero.desc": "इंस्पेक्टर किरा उकु के रूप में 360° तौपत स्पेस स्टेशन और 17 दुनियाओं में 24 घंटे के मिशन पर जाएँ और 3 लापता पिल्लों — डोमी, लिया और मोरा — को बचाएँ।", "hero.ctaPlay": "Google Play से डाउनलोड करें", "hero.ctaDemo": "वार्प सिम्युलेटर आज़माएँ", "puppies.heading": "3 लापता पिल्लों को खोजें और बचाएँ", "worlds.heading": "17 जुड़ी हुई दुनियाएँ", "privacy.title": "गोपनीयता नीति", "terms.title": "नियम और शर्तें", "license.title": "लाइसेंस" },
  nl: { "nav.features": "Gameplay", "nav.puppies": "3 Puppy's", "nav.demo": "Warp-demo", "nav.worlds": "17 Werelden", "nav.legal": "Juridisch", "nav.home": "Home", "nav.play": "Google Play", "hero.badge": "RETRO 3D SCI-FI PUPPYREDDING", "hero.desc": "Speel als inspecteur Kira Uku op een 24-uursmissie door het 360° Tawpwat-ruimtestation en 17 werelden om 3 vermiste puppy's — Domi, Leia en Mora — te redden.", "hero.ctaPlay": "Download op Google Play", "hero.ctaDemo": "Probeer Warp-simulator", "puppies.heading": "Vind & Red de 3 Vermiste Puppy's", "worlds.heading": "17 Verbonden Werelden", "privacy.title": "Privacybeleid", "terms.title": "Algemene voorwaarden", "license.title": "Licentie" },
  pl: { "nav.features": "Rozgrywka", "nav.puppies": "3 Szczeniaki", "nav.demo": "Demo Warp", "nav.worlds": "17 Światów", "nav.legal": "Prawne", "nav.home": "Start", "nav.play": "Google Play", "hero.badge": "RETRO 3D SCI-FI RATOWANIE SZCZENIAKÓW", "hero.desc": "Wciel się w inspektor Kirę Uku w 24-godzinnej misji na stacji Tawpwat i w 17 światach, aby odnaleźć i uratować 3 zaginione szczeniaki: Domi, Leię i Morę.", "hero.ctaPlay": "Pobierz w Google Play", "hero.ctaDemo": "Wypróbuj symulator", "puppies.heading": "Znajdź i uratuj 3 zaginione szczeniaki", "worlds.heading": "17 Połączonych Światów", "privacy.title": "Polityka prywatności", "terms.title": "Regulamin", "license.title": "Licencja" },
  tr: { "nav.features": "Oynanış", "nav.puppies": "3 Yavru Köpek", "nav.demo": "Warp Demo", "nav.worlds": "17 Dünya", "nav.legal": "Yasal", "nav.home": "Ana Sayfa", "nav.play": "Google Play", "hero.badge": "RETRO 3D BİLİM KURGU KÖPEK KURTARMA MACERASI", "hero.desc": "Müfettiş Kira Uku olarak 360° Tawpwat uzay istasyonunda ve 17 dünyada 24 saatlik bir görevde kayıp 3 yavru köpeği — Domi, Leia ve Mora'yı — kurtarın.", "hero.ctaPlay": "Google Play'den İndir", "hero.ctaDemo": "Simülatörü Dene", "puppies.heading": "3 Kayıp Yavru Köpeği Bul ve Kurtar", "worlds.heading": "17 Bağlantılı Dünya", "privacy.title": "Gizlilik Politikası", "terms.title": "Kullanım Koşulları", "license.title": "Lisans" },
  sv: { "nav.features": "Spelupplägg", "nav.puppies": "3 Valpar", "nav.demo": "Warp-demo", "nav.worlds": "17 Världar", "nav.legal": "Juridik", "nav.home": "Hem", "nav.play": "Google Play", "hero.badge": "RETRO 3D SCI-FI VALPRÄDDNING", "hero.desc": "Spela som inspektör Kira Uku på ett 24-timmarsuppdrag genom 17 världar för att rädda 3 försvunna valpar — Domi, Leia och Mora.", "puppies.heading": "Hitta & Rädda de 3 Försvunna Valparna", "worlds.heading": "17 Sammankopplade Världar", "privacy.title": "Integritetspolicy", "terms.title": "Användarvillkor", "license.title": "Licens" },
  da: { "nav.features": "Gameplay", "nav.puppies": "3 Hvalpe", "nav.demo": "Warp-demo", "nav.worlds": "17 Verdener", "nav.legal": "Juridisk", "nav.home": "Hjem", "nav.play": "Google Play", "hero.badge": "RETRO 3D SCI-FI HVALPEREDNING", "hero.desc": "Spil som inspektør Kira Uku på en 24-timers mission gennem 17 verdener for at redde 3 forsvundne hvalpe — Domi, Leia og Mora.", "puppies.heading": "Find og Red de 3 Forsvundne Hvalpe", "worlds.heading": "17 Forbundne Verdener", "privacy.title": "Privatlivspolitik", "terms.title": "Vilkår og betingelser", "license.title": "Licens" },
  no: { "nav.features": "Spillopplevelse", "nav.puppies": "3 Valper", "nav.demo": "Warp-demo", "nav.worlds": "17 Verdener", "nav.legal": "Juridisk", "nav.home": "Hjem", "nav.play": "Google Play", "hero.badge": "RETRO 3D SCI-FI VALPEREDNING", "hero.desc": "Spill som inspektør Kira Uku på et 24-timers oppdrag gjennom 17 verdener for å redde 3 savnede valper — Domi, Leia og Mora.", "puppies.heading": "Finn og Redd de 3 Savnede Valpene", "worlds.heading": "17 Sammenkoblede Verdener", "privacy.title": "Personvernerklæring", "terms.title": "Vilkår og betingelser", "license.title": "Licens" },
  fi: { "nav.features": "Pelaaminen", "nav.puppies": "3 Pentua", "nav.demo": "Warp-demo", "nav.worlds": "17 Maailmaa", "nav.legal": "Lakiasiat", "nav.home": "Etusivu", "nav.play": "Google Play", "hero.badge": "RETRO 3D SCI-FI PENNUNPELASTUSSEIKKAILU", "hero.desc": "Pelaa tarkastaja Kira Ukuna 24 tunnin tehtävässä 17 maailmassa ja pelasta 3 kadonnutta koiranpentua — Domi, Leia ja Mora.", "puppies.heading": "Etsi ja pelasta 3 kadonnutta pentua", "worlds.heading": "17 Yhdistettyä Maailmaa", "privacy.title": "Tietosuojakäytäntö", "terms.title": "Käyttöehdot", "license.title": "Lisenssi" },
  el: { "nav.features": "Παιχνίδι", "nav.puppies": "3 Κουτάβια", "nav.demo": "Επίδειξη Warp", "nav.worlds": "17 Κόσμοι", "nav.legal": "Νομικά", "nav.home": "Αρχική", "nav.play": "Google Play", "hero.badge": "ΡΕΤΡΟ 3D SCI-FI ΔΙΑΣΩΣΗ ΚΟΥΤΑΒΙΩΝ", "hero.desc": "Παίξτε ως Επιθεωρήτρια Kira Uku σε αποστολή 24 ωρών σε 17 κόσμους για να σώσετε 3 χαμένα κουτάβια — Domi, Leia και Mora.", "puppies.heading": "Βρείτε & Σώστε τα 3 Χαμένα Κουτάβια", "worlds.heading": "17 Διασυνδεδεμένοι Κόσμοι", "privacy.title": "Πολιτική Απορρήτου", "terms.title": "Όροι Χρήσης", "license.title": "Άδεια Χρήσης" },
  cs: { "nav.features": "Hratelnost", "nav.puppies": "3 Štěňata", "nav.demo": "Warp Demo", "nav.worlds": "17 Světů", "nav.legal": "Právní", "nav.home": "Domů", "nav.play": "Google Play", "hero.badge": "RETRO 3D SCI-FI ZÁCHRANA ŠTĚŇAT", "hero.desc": "Vydejte se jako inspektorka Kira Uku na 24hodinovou misi napříč 17 světy a zachraňte 3 ztracená štěňata — Domi, Leiu a Moru.", "puppies.heading": "Najděte a zachraňte 3 ztracená štěňata", "worlds.heading": "17 Propojených Světů", "privacy.title": "Zásady ochrany osobních údajů", "terms.title": "Podmínky použití", "license.title": "Licence" },
  ro: { "nav.features": "Gameplay", "nav.puppies": "3 Cățeluși", "nav.demo": "Demo Warp", "nav.worlds": "17 Lumi", "nav.legal": "Legal", "nav.home": "Acasă", "nav.play": "Google Play", "hero.badge": "AVENTURĂ RETRO 3D SCI-FI DE SALVARE A CĂȚELUȘILOR", "hero.desc": "Joacă rolul inspectoarei Kira Uku într-o misiune de 24h prin 17 lumi pentru a găsi și salva 3 cățeluși pierduți — Domi, Leia și Mora.", "puppies.heading": "Găsește și Salvează cei 3 Cățeluși", "worlds.heading": "17 Lumi Interconectate", "privacy.title": "Politica de confidențialitate", "terms.title": "Termeni și condiții", "license.title": "Licență" },
  hu: { "nav.features": "Játékmenet", "nav.puppies": "3 Kiskutya", "nav.demo": "Warp Demó", "nav.worlds": "17 Világ", "nav.legal": "Jogi", "nav.home": "Főoldal", "nav.play": "Google Play", "hero.badge": "RETRO 3D SCI-FI KISKUTYAMENTŐ KALAND", "hero.desc": "Indulj 24 órás küldetésre Kira Uku felügyelőként 17 világon át, hogy megments 3 elveszett kiskutyát — Domit, Leiát és Morát.", "puppies.heading": "Találd meg és mentsd meg a 3 kiskutyát", "worlds.heading": "17 Összekapcsolt Világ", "privacy.title": "Adatvédelmi irányelvek", "terms.title": "Felhasználási feltételek", "license.title": "Licenc" },
  uk: { "nav.features": "Геймплей", "nav.puppies": "3 цуценяти", "nav.demo": "Демо варпу", "nav.worlds": "17 світів", "nav.legal": "Право", "nav.home": "Головна", "nav.play": "Google Play", "hero.badge": "РЕТРО 3D SCI-FI ПОРЯТУНОК ЦУЦЕНЯТ", "hero.desc": "У ролі інспекторки Кіри Уку вирушайте у 24-годинну місію крізь 17 світів, щоб врятувати 3 зниклих цуценят — Домі, Лею та Мору.", "puppies.heading": "Знайдіть і врятуйте 3 цуценят", "worlds.heading": "17 взаємопов'язаних світів", "privacy.title": "Політика конфіденційності", "terms.title": "Умови використання", "license.title": "Ліцензія" },
  vi: { "nav.features": "Lối chơi", "nav.puppies": "3 Chú Cún", "nav.demo": "Mô phỏng Warp", "nav.worlds": "17 Thế giới", "nav.legal": "Pháp lý", "nav.home": "Trang chủ", "nav.play": "Google Play", "hero.badge": "PHIÊU LƯU GIẢI CỨU CÚN CƯNG SCI-FI 3D RETRO", "hero.desc": "Vào vai Thanh tra Kira Uku trong nhiệm vụ 24 giờ qua 17 thế giới để giải cứu 3 chú cún bị lạc — Domi, Leia và Mora.", "puppies.heading": "Tìm & Giải cứu 3 Chú Cún Bị Lạc", "worlds.heading": "17 Thế giới Kết nối", "privacy.title": "Chính sách bảo mật", "terms.title": "Điều khoản sử dụng", "license.title": "Giấy phép" },
  th: { "nav.features": "เกมเพลย์", "nav.puppies": "ลูกสุนัข 3 ตัว", "nav.demo": "จำลองวาร์ป", "nav.worlds": "17 โลก", "nav.legal": "กฎหมาย", "nav.home": "หน้าแรก", "nav.play": "Google Play", "hero.badge": "เกมผจญภัยไซไฟ 3D ช่วยเหลือลูกสุนัข", "hero.desc": "รับบทสารวัตร Kira Uku ในภารกิจ 24 ชั่วโมงข้าม 17 โลก เพื่อตามหาและช่วยลูกสุนัข 3 ตัว — Domi, Leia และ Mora", "puppies.heading": "ตามหาและช่วยลูกสุนัขทั้ง 3 ตัว", "worlds.heading": "17 โลกที่เชื่อมต่อกัน", "privacy.title": "นโยบายความเป็นส่วนตัว", "terms.title": "ข้อกำหนดและเงื่อนไข", "license.title": "ใบอนุญาต" },
  id: { "nav.features": "Gameplay", "nav.puppies": "3 Anak Anjing", "nav.demo": "Demo Warp", "nav.worlds": "17 Dunia", "nav.legal": "Legal", "nav.home": "Beranda", "nav.play": "Google Play", "hero.badge": "PETUALANGAN PENYELAMATAN ANJING SCI-FI 3D RETRO", "hero.desc": "Bermain sebagai Inspektur Kira Uku dalam misi 24 jam melintasi 17 dunia untuk menyelamatkan 3 anak anjing yang hilang — Domi, Leia, dan Mora.", "puppies.heading": "Temukan & Selamatkan 3 Anak Anjing", "worlds.heading": "17 Dunia Terhubung", "privacy.title": "Kebijakan Privasi", "terms.title": "Syarat & Ketentuan", "license.title": "Lisensi" },
  ms: { "nav.features": "Permainan", "nav.puppies": "3 Anak Anjing", "nav.demo": "Demo Warp", "nav.worlds": "17 Dunia", "nav.legal": "Undang-undang", "nav.home": "Utama", "nav.play": "Google Play", "hero.badge": "PENGEMBARAAN PENYELAMATAN ANJING SCI-FI 3D RETRO", "hero.desc": "Main sebagai Inspektor Kira Uku dalam misi 24 jam merentasi 17 dunia untuk menyelamatkan 3 anak anjing yang hilang — Domi, Leia, dan Mora.", "puppies.heading": "Cari & Selamatkan 3 Anak Anjing", "worlds.heading": "17 Dunia Terhubung", "privacy.title": "Dasar Privasi", "terms.title": "Terma & Syarat", "license.title": "Lesen" },
  he: { "nav.features": "משחקיות", "nav.puppies": "3 גורות", "nav.demo": "הדגמת שער", "nav.worlds": "17 עולמות", "nav.legal": "משפטי", "nav.home": "ראשי", "nav.play": "Google Play", "hero.badge": "הרפתקת מד״ב רטרו להצלת גורות", "hero.desc": "שחקו בתור המפקחת קירה אוקו במשימה של 24 שעות ב-17 עולמות כדי למצוא ולהציל 3 גורות אבודות — דומי, ליאה ומורה.", "puppies.heading": "מצאו והצילו את 3 הגורות", "worlds.heading": "17 עולמות מחוברים", "privacy.title": "מדיניות פרטיות", "terms.title": "תנאי שימוש", "license.title": "רישיון" },
  fa: { "nav.features": "گیم‌پلی", "nav.puppies": "۳ توله‌سگ", "nav.demo": "شبیه‌ساز", "nav.worlds": "۱۷ جهان", "nav.legal": "قوانین", "nav.home": "خانه", "nav.play": "Google Play", "hero.badge": "ماجراجویی علمی-تخیلی سه‌بعدی نجات توله‌سگ‌ها", "hero.desc": "در نقش بازرس کیرا اوکو در مأموریتی ۲۴ ساعته در ۱۷ جهان، ۳ توله‌سگ گمشده — دومی، لیا و مورا — را پیدا و نجات دهید.", "puppies.heading": "پیدا کردن و نجات ۳ توله‌سگ گمشده", "worlds.heading": "۱۷ جهان به هم پیوسته", "privacy.title": "سیاست حفظ حریم خصوصی", "terms.title": "شرایط و ضوابط", "license.title": "مجوز" },
  bn: { "nav.features": "গেমপ্লে", "nav.puppies": "৩টি কুকুরছানা", "nav.demo": "ওয়ার্প ডেমো", "nav.worlds": "১৭টি জগৎ", "nav.legal": "আইনি", "nav.home": "হোম", "nav.play": "Google Play", "hero.badge": "রেট্রো 3D সায়েন্স-ফিকশন কুকুরছানা উদ্ধার অভিযান", "hero.desc": "ইন্সপেক্টর কিরা উকু হিসেবে ১৭টি জগতে ২৪ ঘণ্টার অভিযানে হারিয়ে যাওয়া ৩টি কুকুরছানা — ডোমি, লিয়া এবং মোরা-কে উদ্ধার করুন।", "puppies.heading": "হারিয়ে যাওয়া ৩টি কুকুরছানা উদ্ধার করুন", "worlds.heading": "১৭টি সংযুক্ত জগৎ", "privacy.title": "গোপনীয়তা নীতি", "terms.title": "শর্তাবলী", "license.title": "লাইসেন্স" },
  ta: { "nav.features": "விளையாட்டு", "nav.puppies": "3 நாய்க்குட்டிகள்", "nav.demo": "வார்ப் டெமோ", "nav.worlds": "17 உலகங்கள்", "nav.legal": "சட்டம்", "nav.home": "முகப்பு", "nav.play": "Google Play", "hero.badge": "ரெட்ரோ 3D அறிவியல் புனைகதை நாய்க்குட்டி மீட்பு", "hero.desc": "ஆய்வாளர் கிரா உகுவாக 17 உலகங்களில் 24 மணி நேரப் பயணத்தில் காணாமல் போன 3 நாய்க்குட்டிகளை (Domi, Leia, Mora) மீட்டெடுங்கள்.", "puppies.heading": "காணாமல் போன 3 நாய்க்குட்டிகளை மீட்டெடுக்கவும்", "worlds.heading": "17 இணைக்கப்பட்ட உலகங்கள்", "privacy.title": "தனியுரிமைக் கொள்கை", "terms.title": "விதிமுறைகள்", "license.title": "உரிமம்" },
  ca: { "nav.features": "Jugabilitat", "nav.puppies": "3 Gossetes", "nav.demo": "Demo Warp", "nav.worlds": "17 Mons", "nav.legal": "Legal", "nav.home": "Inici", "nav.play": "Google Play", "hero.badge": "AVENTURA RETRO 3D DE RESCAT CANÍ SCI-FI", "hero.desc": "Acompanya la Inspectora Kira Uku en una missió de 24 hores per l'Estació Anul·lar 360° de Tawpwat i 17 mons per rescatar 3 gossetes perdudes: Domi, Leia i Mora.", "puppies.heading": "Troba i Rescata les 3 Gossetes Perdudes", "worlds.heading": "17 Mons Interconnectats", "privacy.title": "Política de Privadesa", "terms.title": "Termes i Condicions", "license.title": "Llicència" },
  eu: { "nav.features": "Jokagarritasuna", "nav.puppies": "3 Txakurkume", "nav.demo": "Warp Demo", "nav.worlds": "17 Mundu", "nav.legal": "Legezkoa", "nav.home": "Hasiera", "nav.play": "Google Play", "hero.badge": "RETRO 3D ZIENTZIA-FIKZIOZKO TXAKURKUME ERRESKATEA", "hero.desc": "Lagundu Kira Uku inspektoreari 24 orduko misio batean 17 mundutan zehar galdutako 3 txakurkumeak — Domi, Leia eta Mora — erreskatatzen.", "puppies.heading": "Bilatu eta Erreskatatu 3 Txakurkumeak", "worlds.heading": "17 Mundu Konektatu", "privacy.title": "Pribatutasun Politika", "terms.title": "Baldintzak", "license.title": "Lizentzia" },
  gl: { "nav.features": "Xogabilidade", "nav.puppies": "3 Cadelas", "nav.demo": "Demo Warp", "nav.worlds": "17 Mundos", "nav.legal": "Legal", "nav.home": "Inicio", "nav.play": "Google Play", "hero.badge": "AVENTURA RETRO 3D DE RESCATE CANINO SCI-FI", "hero.desc": "Acompaña á Inspectora Kira Uku nunha misión de 24 horas pola Estación Anular 360° de Tawpwat e 17 mundos para rescatar a 3 cadelas perdidas: Domi, Leia e Mora.", "puppies.heading": "Atopa e Rescata ás 3 Cadelas Perdidas", "worlds.heading": "17 Mundos Interconectados", "privacy.title": "Política de Privacidade", "terms.title": "Termos e Condicións", "license.title": "Licenza" }
};

for (const [code, dict] of Object.entries(EXTRA_LANGS)) {
  TRANSLATIONS[code] = { ...TRANSLATIONS.en, ...dict };
}
for (const [code, dict] of Object.entries(COMPACT_LANGS)) {
  TRANSLATIONS[code] = { ...TRANSLATIONS.en, ...dict };
}

function detectInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  if (urlLang && TRANSLATIONS[urlLang]) return urlLang;

  try {
    const saved = localStorage.getItem("tawpwat_lang");
    if (saved && TRANSLATIONS[saved]) return saved;
  } catch (_) {}

  const nav = (navigator.language || "en").trim();
  if (TRANSLATIONS[nav]) return nav;
  const base = nav.split("-")[0];
  if (TRANSLATIONS[base]) return base;
  return "en";
}

function applyLanguage(langCode) {
  const code = TRANSLATIONS[langCode] ? langCode : "en";
  const dict = TRANSLATIONS[code];
  const meta = LANGUAGES.find((l) => l.code === code) || LANGUAGES[0];

  document.documentElement.lang = code;
  document.documentElement.dir = meta.dir;
  try {
    localStorage.setItem("tawpwat_lang", code);
  } catch (_) {}

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll(".lang-pill").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === code);
  });

  const select = document.getElementById("lang-select");
  if (select && select.value !== code) {
    select.value = code;
  }

  document.querySelectorAll("a[data-preserve-lang]").forEach((a) => {
    const baseHref = a.getAttribute("data-base-href") || a.getAttribute("href").split("?")[0];
    a.setAttribute("data-base-href", baseHref);
    a.setAttribute("href", `${baseHref}?lang=${encodeURIComponent(code)}`);
  });

  window.dispatchEvent(new CustomEvent("tawpwat:langchange", { detail: { code, dict } }));
}

function initI18n() {
  const select = document.getElementById("lang-select");
  if (select) {
    select.innerHTML = "";
    LANGUAGES.forEach((l) => {
      const opt = document.createElement("option");
      opt.value = l.code;
      opt.textContent = `${l.native} (${l.code.toUpperCase()})`;
      select.appendChild(opt);
    });
    select.addEventListener("change", (e) => applyLanguage(e.target.value));
  }

  document.querySelectorAll(".lang-pill").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  const initial = detectInitialLanguage();
  applyLanguage(initial);
}

global.TAWPWAT_I18N = {
  LANGUAGES,
  TRANSLATIONS,
  detectInitialLanguage,
  applyLanguage,
  initI18n
};
})(typeof window !== "undefined" ? window : globalThis);
