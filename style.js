const siteBackgroundArt = {
    imageUrl: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1775065282/%E5%86%99%E5%AE%9E%E6%B8%B8%E6%88%8F%E6%B5%B7%E6%8A%A5%E5%A3%81%E7%94%BB%E5%A2%99_m8zwvv.jpg',
    position: 'center center',
    size: 'cover',
};

function getApiBaseUrl() {
    const explicitBase = window.__CALL_OF_STORE_API_BASE__ || '';
    if (explicitBase) {
        return String(explicitBase).replace(/\/$/, '');
    }

    return window.location.protocol === 'file:'
        ? 'http://localhost:3000'
        : '';
}

function apiUrl(path) {
    const normalizedPath = String(path || '').startsWith('/') ? String(path) : `/${path}`;
    return `${getApiBaseUrl()}${normalizedPath}`;
}

const novidadesProducts = [
    {
        id: 1,
        slug: 'crimson-desert',
        nome: 'Crimson Desert',
        categoria: 'novidades',
        precoOriginal: 349.99,
        precoPromo: 69.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773980442/bGl0eT1tZWRpdW0_zk2kui.jpg',
        estoque: 92,
        vendas: 7,
    },
    {
        id: 2,
        slug: 'death-stranding-2-on-the-beach',
        nome: 'Death Stranding 2: On the Beach',
        categoria: 'novidades',
        precoOriginal: 399.90,
        precoPromo: 49.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773980325/MDY4eDYwMS5qcGc_zamqff.jpg',
        estoque: 95,
        vendas: 4,
    },
    {
        id: 3,
        slug: 'assassins-creed-valhalla',
        nome: "Assassin's Creed Valhalla",
        categoria: 'novidades',
        precoOriginal: 199.99,
        precoPromo: 14.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773980218/ZWQuanBn_br7vpg.jpg',
        estoque: 94,
        vendas: 5,
    },
    {
        id: 4,
        slug: 'ea-sports-fc-26',
        nome: 'EA SPORTS FC™ 26',
        categoria: 'novidades',
        precoOriginal: 379.00,
        precoPromo: 39.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773775625/NjE5LmpwZw_azbtpv.jpg',
        estoque: 177,
        vendas: 22,
    },
    {
        id: 5,
        slug: 'resident-evil-requiem',
        nome: 'Resident Evil Requiem',
        categoria: 'novidades',
        precoOriginal: 299.00,
        precoPromo: 59.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773774985/wp15649780_toqzov.webp',
        estoque: 66,
        vendas: 120,
    },
    {
        id: 6,
        slug: 'silent-hill-f',
        nome: 'Silent Hill f',
        categoria: 'novidades',
        precoOriginal: 299.90,
        precoPromo: 29.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774493951/aXR5PW1lZGl1bQ_zyjkcs.jpg',
        estoque: 97,
        vendas: 2,
    },
    {
        id: 7,
        slug: 'dying-light-the-beast',
        nome: 'Dying Light: The Beast',
        categoria: 'novidades',
        precoOriginal: 249.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773775740/NTk4NDUyNw_yobwes.jpg',
        estoque: 99,
        vendas: 84,
    },
    {
        id: 8,
        slug: 'hollow-knight-silksong',
        nome: 'Hollow Knight: Silksong',
        categoria: 'novidades',
        precoOriginal: 59.90,
        precoPromo: 14.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773775866/JA_taqzys.jpg',
        estoque: 150,
        vendas: 61,
    },
    {
        id: 9,
        slug: 'no-i-m-not-a-human',
        nome: "No, I'm not a Human",
        categoria: 'novidades',
        precoOriginal: 46.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774494031/MzkzMzY0NQ_hldgng.jpg',
        estoque: 99,
        vendas: 3,
    },
    {
        id: 10,
        slug: 'metal-gear-solid-delta-snake-eater',
        nome: 'Metal Gear Solid Δ Snake Eater',
        categoria: 'novidades',
        precoOriginal: 349.90,
        precoPromo: 24.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773776619/M2cydW9mMS5qcGVn_cxgzgp.jpg',
        estoque: 102,
        vendas: 6,
    },
    {
        id: 11,
        slug: 'hell-is-us',
        nome: 'Hell is Us',
        categoria: 'novidades',
        precoOriginal: 179.90,
        precoPromo: 17.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773776805/ZS5qcGc_nrfun5.jpg',
        estoque: 99,
        vendas: 5,
    },
    {
        id: 12,
        slug: 'clair-obscur-expedition-33',
        nome: 'Clair Obscur: Expedition 33',
        categoria: 'novidades',
        precoOriginal: 199.90,
        precoPromo: 14.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774494144/MTU4LndlYnA_h5vkle.jpg',
        estoque: 99,
        vendas: 8,
    },
    {
        id: 13,
        slug: 'marvel-s-spider-man-2',
        nome: "Marvel's Spider-Man 2",
        categoria: 'novidades',
        precoOriginal: 249.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773777032/MTE_lubqya.jpg',
        estoque: 123,
        vendas: 17,
    },
    {
        id: 14,
        slug: 'kingdom-come-deliverance-ii',
        nome: 'Kingdom Come: Deliverance II',
        categoria: 'novidades',
        precoOriginal: 299.90,
        precoPromo: 24.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773777147/bGl0eT1tZWRpdW0_sighd5.jpg',
        estoque: 98,
        vendas: 1,
    },
];

const maisPopularesProducts = [
    {
        id: 15,
        slug: 'red-dead-redemption-2',
        nome: 'Red Dead Redemption 2',
        categoria: 'mais-populares',
        precoOriginal: 299.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774791694/cGc_rmsmjq.jpg',
        estoque: 99,
        vendas: 14,
    },
    {
        id: 16,
        slug: 'elden-ring',
        nome: 'Elden Ring',
        categoria: 'mais-populares',
        precoOriginal: 274.50,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774793448/cWQwLmpwZw_ej6ps7.jpg',
        estoque: 99,
        vendas: 11,
    },
    {
        id: 17,
        slug: 'god-of-war',
        nome: 'God of War',
        categoria: 'mais-populares',
        precoOriginal: 199.90,
        precoPromo: 14.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773777909/NWh5LmpwZw_d3g6iu.jpg',
        estoque: 99,
        vendas: 17,
    },
    {
        id: 18,
        slug: 'grand-theft-auto-enhanced-legacy',
        nome: 'Grand Theft Auto Enhanced | Legacy',
        categoria: 'mais-populares',
        precoOriginal: 149.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773778551/MmM0ZGI0Mi5qcGc_ieel7z.jpg',
        estoque: 99,
        vendas: 8,
    },
    {
        id: 19,
        slug: 'microsoft-flight-simulator-2024',
        nome: 'Microsoft Flight Simulator 2024',
        categoria: 'mais-populares',
        precoOriginal: 299.99,
        precoPromo: 24.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774793872/c21hcnQ_jn0afe.jpg',
        estoque: 99,
        vendas: 19,
    },
    {
        id: 20,
        slug: 'grand-theft-auto-san-andreas',
        nome: 'Grand Theft Auto: San Andreas',
        categoria: 'mais-populares',
        precoOriginal: 49.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774793985/ZS5qcGc_zjsbdg.jpg',
        estoque: 99,
        vendas: 6,
    },
    {
        id: 21,
        slug: 'grand-theft-auto-the-trilogy-the-definitive-edition',
        nome: 'Grand Theft Auto: The Trilogy - The Definitive Edition',
        categoria: 'mais-populares',
        precoOriginal: 299.90,
        precoPromo: 24.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773778658/MzZmMmE0OWE_f73854.jpg',
        estoque: 99,
        vendas: 12,
    },
    {
        id: 22,
        slug: 'black-myth-wukong',
        nome: 'Black Myth: Wukong',
        categoria: 'mais-populares',
        precoOriginal: 229.99,
        precoPromo: 29.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774794097/MGYzMmIxMA_zvk1qg.jpg',
        estoque: 99,
        vendas: 18,
    },
    {
        id: 23,
        slug: 'kingdom-come-deliverance',
        nome: 'Kingdom Come: Deliverance',
        categoria: 'mais-populares',
        precoOriginal: 149.00,
        precoPromo: 14.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773777825/MDAuanBn_kl87u2.jpg',
        estoque: 99,
        vendas: 10,
    },
    {
        id: 24,
        slug: 'the-crew-motorfest',
        nome: 'The Crew Motorfest',
        categoria: 'mais-populares',
        precoOriginal: 299.99,
        precoPromo: 24.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773777745/dHk9bWVkaXVt_sembqi.jpg',
        estoque: 99,
        vendas: 15,
    },
    {
        id: 25,
        slug: 'days-gone',
        nome: 'Days Gone',
        categoria: 'mais-populares',
        precoOriginal: 199.50,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774794301/ODUxNy5qcGc_cxvnma.jpg',
        estoque: 99,
        vendas: 7,
    },
    {
        id: 26,
        slug: 'euro-truck-simulator-2',
        nome: 'Euro Truck Simulator 2',
        categoria: 'mais-populares',
        precoOriginal: 61.99,
        precoPromo: 4.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773777679/MjQxNi5qcGc_fltzkt.jpg',
        estoque: 99,
        vendas: 13,
    },
    {
        id: 27,
        slug: 'resident-evil-4-remake-todas-as-dlcs',
        nome: "Resident Evil 4 Remake + Todas as DLC's",
        categoria: 'mais-populares',
        precoOriginal: 169.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773777598/OTQxNy5wbmc_qvkcqj.png',
        estoque: 99,
        vendas: 20,
    },
    {
        id: 28,
        slug: 'ghost-of-tsushima-directors-cut',
        nome: "Ghost of Tsushima DIRECTOR'S CUT",
        categoria: 'mais-populares',
        precoOriginal: 249.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773777524/c2hpbWEtMi5qcGc_k2kqx2.jpg',
        estoque: 99,
        vendas: 9,
    },
    {
        id: 29,
        slug: 'cyberpunk-2077',
        nome: 'Cyberpunk 2077',
        categoria: 'mais-populares',
        precoOriginal: 199.90,
        precoPromo: 14.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773778405/OTY5MDM3Nw_pddi29.jpg',
        estoque: 99,
        vendas: 16,
    },
    {
        id: 30,
        slug: 'the-last-of-us-part-ii-remastered',
        nome: 'The Last of Us™ Parte II Remastered',
        categoria: 'mais-populares',
        precoOriginal: 199.90,
        precoPromo: 24.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773777436/ODA_lmq1dm.jpg',
        estoque: 99,
        vendas: 5,
    },
    {
        id: 31,
        slug: 'the-last-of-us-part-i',
        nome: 'The Last of Us™ Part I',
        categoria: 'mais-populares',
        precoOriginal: 249.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1773777368/MzE_hneq1f.jpg',
        estoque: 99,
        vendas: 4,
    },
    {
        id: 32,
        slug: 'god-of-war-ragnarok',
        nome: 'God of War Ragnarök',
        categoria: 'mais-populares',
        precoOriginal: 249.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774794570/MDQ_se02be.jpg',
        estoque: 99,
        vendas: 18,
    },
];

const maisJogosProducts = [
    {
        id: 33,
        slug: 'internet-cafe-simulator-2',
        nome: 'Internet Cafe Simulator 2',
        categoria: 'mais-jogos',
        precoOriginal: 59.99,
        precoPromo: 7.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774795495/cy5qcGc_vplsbe.jpg',
        estoque: 99,
        vendas: 9,
    },
    {
        id: 34,
        slug: 'outlast-2',
        nome: 'Outlast 2',
        categoria: 'mais-jogos',
        precoOriginal: 59.99,
        precoPromo: 7.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774795617/NTEyMC5wbmc_bqunxr.png',
        estoque: 99,
        vendas: 12,
    },
    {
        id: 35,
        slug: 'dead-island-definitive-edition',
        nome: 'Dead Island Definitive Edition',
        categoria: 'mais-jogos',
        precoOriginal: 99.00,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774795751/bXJpcC5qcGc_aq3gox.jpg',
        estoque: 99,
        vendas: 7,
    },
    {
        id: 36,
        slug: 'dead-island-2',
        nome: 'Dead Island 2',
        categoria: 'mais-jogos',
        precoOriginal: 249.00,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774795874/NC9PQ1FKb2wuanBn_xchldi.jpg',
        estoque: 99,
        vendas: 16,
    },
    {
        id: 37,
        slug: 'metro-last-light-redux',
        nome: 'Metro: Last Light Redux',
        categoria: 'mais-jogos',
        precoOriginal: 99.00,
        precoPromo: 6.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774795924/NQ_ntpsag.jpg',
        estoque: 99,
        vendas: 11,
    },
    {
        id: 38,
        slug: 'metro-2033-redux',
        nome: 'Metro 2033 Redux',
        categoria: 'mais-jogos',
        precoOriginal: 99.00,
        precoPromo: 6.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774796027/ZWQ3NTZiNGU_qihht9.jpg',
        estoque: 99,
        vendas: 5,
    },
    {
        id: 39,
        slug: 'call-of-duty-modern-warfare',
        nome: 'Call of Duty®: Modern Warfare®',
        categoria: 'mais-jogos',
        precoOriginal: 329.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774796144/header_w901uo.jpg',
        estoque: 99,
        vendas: 18,
    },
    {
        id: 40,
        slug: 'fallout-76',
        nome: 'Fallout 76',
        categoria: 'mais-jogos',
        precoOriginal: 149.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774796242/eWhoNXRiMy5qcGc_corova.jpg',
        estoque: 99,
        vendas: 10,
    },
    {
        id: 41,
        slug: 'sons-of-the-forest',
        nome: 'Sons Of The Forest',
        categoria: 'mais-jogos',
        precoOriginal: 89.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774796375/cmNnNDdnMS5wbmc_t7mmzv.png',
        estoque: 99,
        vendas: 14,
    },
    {
        id: 42,
        slug: 'call-of-duty-black-ops',
        nome: 'Call of Duty®: Black Ops',
        categoria: 'mais-jogos',
        precoOriginal: 219.90,
        precoPromo: 14.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774797067/header_bi71pf.jpg',
        estoque: 99,
        vendas: 8,
    },

    {
        id: 43,
        slug: 'call-of-duty-black-ops-ii',
        nome: 'Call of Duty®: Black Ops II',
        categoria: 'mais-jogos',
        precoOriginal: 329.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774797195/Ni9IZjlDbUouanBn_dnehj3.jpg',
        estoque: 99,
        vendas: 13,
    },
    {
        id: 44,
        slug: 'call-of-duty-black-ops-iii',
        nome: 'Call of Duty®: Black Ops III',
        categoria: 'mais-jogos',
        precoOriginal: 329.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774797287/header_hmurzv.jpg',
        estoque: 99,
        vendas: 18,
    },
    {
        id: 45,
        slug: 'resident-evil-4-2005',
        nome: 'Resident Evil 4 (2005)',
        categoria: 'mais-jogos',
        precoOriginal: 80.00,
        precoPromo: 7.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774797431/Ni5qcGc_ljpzmc.jpg',
        estoque: 99,
        vendas: 9,
    },
    {
        id: 46,
        slug: 'schedule-i',
        nome: 'Schedule I',
        categoria: 'mais-jogos',
        precoOriginal: 59.99,
        precoPromo: 7.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774797503/ODQ4LmpwZw_sz1cst.jpg',
        estoque: 99,
        vendas: 6,
    },
    {
        id: 47,
        slug: 'riders-republic',
        nome: 'Riders Republic',
        categoria: 'mais-jogos',
        precoOriginal: 169.99,
        precoPromo: 16.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774797556/header_gebgde.jpg',
        estoque: 99,
        vendas: 20,
    },
    {
        id: 48,
        slug: 'crash-bandicoot-n-sane-trilogy',
        nome: 'Crash Bandicoot™ N. Sane Trilogy',
        categoria: 'mais-jogos',
        precoOriginal: 219.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774797643/header_r3stoa.jpg',
        estoque: 99,
        vendas: 10,
    },
    {
        id: 49,
        slug: 'nioh-2-the-complete-edition',
        nome: 'Nioh 2 – The Complete Edition',
        categoria: 'mais-jogos',
        precoOriginal: 249.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774798069/header_uixntz.jpg',
        estoque: 99,
        vendas: 15,
    },
    {
        id: 50,
        slug: 'assetto-corsa',
        nome: 'Assetto Corsa',
        categoria: 'mais-jogos',
        precoOriginal: 59.99,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774798385/MQ_rqmxpf.jpg',
        estoque: 99,
        vendas: 7,
    },
    {
        id: 51,
        slug: 'car-mechanic-simulator-2021',
        nome: 'Car Mechanic Simulator 2021',
        categoria: 'mais-jogos',
        precoOriginal: 79.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774798494/OTIxMjkzMA_nrkh8j.jpg',
        estoque: 99,
        vendas: 12,
    },
    {
        id: 52,
        slug: 'farming-simulator-22',
        nome: 'Farming Simulator 22',
        categoria: 'mais-jogos',
        precoOriginal: 179.90,
        precoPromo: 17.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774799117/Mg_imt5ta.jpg',
        estoque: 99,
        vendas: 16,
    },

    {
        id: 53,
        slug: 'project-zomboid',
        nome: 'Project Zomboid',
        categoria: 'mais-jogos',
        precoOriginal: 59.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774806833/MSZzc2w9MQ_li975a.jpg',
        estoque: 99,
        vendas: 11,
    },
    {
        id: 54,
        slug: 'naruto-shippuden-ultimate-ninja-storm-4',
        nome: 'NARUTO SHIPPUDEN: Ultimate Ninja STORM 4',
        categoria: 'mais-jogos',
        precoOriginal: 79.90,
        precoPromo: 11.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774806939/header_oyh3um.jpg',
        estoque: 99,
        vendas: 7,
    },
    {
        id: 55,
        slug: 'naruto-x-boruto-ultimate-ninja-storm-connections',
        nome: 'NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS',
        categoria: 'mais-jogos',
        precoOriginal: 229.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774806983/header_cx3gjr.jpg',
        estoque: 99,
        vendas: 15,
    },
    {
        id: 56,
        slug: 'watch-dogs-todas-as-dlcs',
        nome: "Watch_Dogs™ + Todas as DLC's",
        categoria: 'mais-jogos',
        precoOriginal: 94.99,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774807103/header_xnzv2u.jpg',
        estoque: 99,
        vendas: 9,
    },
    {
        id: 57,
        slug: 'watch-dogs-2-todas-as-dlcs',
        nome: "Watch_Dogs® 2 + Todas as DLC's",
        categoria: 'mais-jogos',
        precoOriginal: 149.90,
        precoPromo: 14.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774807178/MTQ4MC5qcGc_lfdkmb.jpg',
        estoque: 99,
        vendas: 18,
    },
    {
        id: 58,
        slug: 'watch-dogs-legion-todas-as-dlcs',
        nome: 'Watch_Dogs® Legion + Todas as (DLCs)',
        categoria: 'mais-jogos',
        precoOriginal: 249.99,
        precoPromo: 24.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774812277/header_rxp0i3.jpg',
        estoque: 99,
        vendas: 6,
    },
    {
        id: 59,
        slug: 'the-elder-scrolls-v-skyrim-special-edition',
        nome: 'The Elder Scrolls V: Skyrim Special Edition',
        categoria: 'mais-jogos',
        precoOriginal: 149.00,
        precoPromo: 4.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774812344/header_krc0if.jpg',
        estoque: 99,
        vendas: 13,
    },
    {
        id: 60,
        slug: 'mortal-kombat-11',
        nome: 'Mortal Kombat 11',
        categoria: 'mais-jogos',
        precoOriginal: 229.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774812480/MS5qcGc_rwwkoi.jpg',
        estoque: 99,
        vendas: 20,
    },
    {
        id: 61,
        slug: 'starfield',
        nome: 'Starfield',
        categoria: 'mais-jogos',
        precoOriginal: 299.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774814363/Mjg_umlrwl.jpg',
        estoque: 99,
        vendas: 8,
    },
    {
        id: 62,
        slug: 'beamng-drive',
        nome: 'BeamNG.drive',
        categoria: 'mais-jogos',
        precoOriginal: 69.00,
        precoPromo: 9.00,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774814433/header_h3wres.jpg',
        estoque: 99,
        vendas: 17,
    },

    {
        id: 63,
        slug: 'uncharted-legacy-of-thieves-collection',
        nome: "UNCHARTED™: Legacy of Thieves Collection",
        categoria: 'mais-jogos',
        precoOriginal: 249.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774816201/header_zwxe3z.jpg',
        estoque: 99,
        vendas: 15,
    },
    {
        id: 64,
        slug: 'detroit-become-human',
        nome: "Detroit: Become Human",
        categoria: 'mais-jogos',
        precoOriginal: 199.99,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774816252/header_braof3.jpg',
        estoque: 99,
        vendas: 18,
    },
    {
        id: 65,
        slug: 'roadcraft',
        nome: "RoadCraft",
        categoria: 'mais-jogos',
        precoOriginal: 199.90,
        precoPromo: 14.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774816365/MTE0LndlYnA_iouefu.jpg',
        estoque: 99,
        vendas: 6,
    },
    {
        id: 66,
        slug: 'far-cry-3',
        nome: "Far Cry 3",
        categoria: 'mais-jogos',
        precoOriginal: 59.99,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774818012/header_rv4ksz.jpg',
        estoque: 99,
        vendas: 9,
    },
    {
        id: 67,
        slug: 'far-cry-4',
        nome: "Far Cry® 4",
        categoria: 'mais-jogos',
        precoOriginal: 89.90,
        precoPromo: 14.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774818969/header_ykhmo4.jpg',
        estoque: 99,
        vendas: 12,
    },
    {
        id: 68,
        slug: 'far-cry-5',
        nome: "Far Cry® 5",
        categoria: 'mais-jogos',
        precoOriginal: 179.90,
        precoPromo: 17.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774819044/header_oc0oan.jpg',
        estoque: 99,
        vendas: 15,
    },
    {
        id: 69,
        slug: 'baldurs-gate-3',
        nome: "Baldur's Gate 3",
        categoria: 'mais-jogos',
        precoOriginal: 199.99,
        precoPromo: 14.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774819571/header_s0snfu.jpg',
        estoque: 99,
        vendas: 18,
    },
    {
        id: 70,
        slug: 'resident-evil-7-biohazard',
        nome: "Resident Evil 7 Biohazard",
        categoria: 'mais-jogos',
        precoOriginal: 80.00,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774819787/MjQ3MS5qcGc_anqpt6.jpg',
        estoque: 99,
        vendas: 6,
    },
    {
        id: 71,
        slug: 'resident-evil-2',
        nome: "Resident Evil 2",
        categoria: 'mais-jogos',
        precoOriginal: 139.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774819856/dS5qcGc_vbs256.jpg',
        estoque: 99,
        vendas: 9,
    },
    {
        id: 72,
        slug: 'resident-evil-3',
        nome: "Resident Evil 3",
        categoria: 'mais-jogos',
        precoOriginal: 169.90,
        precoPromo: 16.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774820541/header_xuqbcd.jpg',
        estoque: 99,
        vendas: 12,
    },
    {
        id: 73,
        slug: 'resident-evil-village',
        nome: "Resident Evil Village",
        categoria: 'mais-jogos',
        precoOriginal: 169.00,
        precoPromo: 16.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774820647/aWxsYWdlLmpwZw_lncxtc.jpg',
        estoque: 99,
        vendas: 15,
    },
    {
        id: 74,
        slug: 'grand-theft-auto-iv-the-complete-edition',
        nome: "Grand Theft Auto IV: The Complete Edition",
        categoria: 'mais-jogos',
        precoOriginal: 79.90,
        precoPromo: 12.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774821726/NjMyMzYuanBn_gk0swp.jpg',
        estoque: 99,
        vendas: 18,
    },
    {
        id: 75,
        slug: 'marvels-spider-man-remastered',
        nome: "Marvel’s Spider-Man Remastered",
        categoria: 'mais-jogos',
        precoOriginal: 249.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774822458/Zw_am86jo.jpg',
        estoque: 99,
        vendas: 6,
    },
    {
        id: 76,
        slug: 'marvels-spider-man-miles-morales',
        nome: "Marvel’s Spider-Man: Miles Morales",
        categoria: 'mais-jogos',
        precoOriginal: 199.90,
        precoPromo: 14.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774822527/Zw_peupka.jpg',
        estoque: 99,
        vendas: 9,
    },
    {
        id: 77,
        slug: 'assassins-creed-iii',
        nome: "Assassin’s Creed® III",
        categoria: 'mais-jogos',
        precoOriginal: 99.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774830790/MjE3MzIuanBn_ahwned.jpg',
        estoque: 99,
        vendas: 12,
    },
    {
        id: 78,
        slug: 'assassins-creed-unity',
        nome: "Assassin’s Creed® Unity",
        categoria: 'mais-jogos',
        precoOriginal: 89.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774830930/header_pocjax.jpg',
        estoque: 99,
        vendas: 15,
    },
    {
        id: 79,
        slug: 'assassins-creed-mirage',
        nome: "Assassin’s Creed Mirage",
        categoria: 'mais-jogos',
        precoOriginal: 209.90,
        precoPromo: 20.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774830985/header_nyi81t.jpg',
        estoque: 99,
        vendas: 18,
    },
    {
        id: 80,
        slug: 'assassins-creed-origins',
        nome: "Assassin’s Creed® Origins",
        categoria: 'mais-jogos',
        precoOriginal: 189.90,
        precoPromo: 18.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774831026/header_vxktio.jpg',
        estoque: 99,
        vendas: 6,
    },
    {
        id: 81,
        slug: 'assassins-creed-odyssey',
        nome: "Assassin’s Creed® Odyssey",
        categoria: 'mais-jogos',
        precoOriginal: 179.90,
        precoPromo: 17.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774831132/header_gfmo6g.jpg',
        estoque: 99,
        vendas: 9,
    },
    {
        id: 82,
        slug: 'assassins-creed-iv-black-flag',
        nome: "Assassin’s Creed® IV Black Flag™",
        categoria: 'mais-jogos',
        precoOriginal: 119.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774831191/header_vuvksm.jpg',
        estoque: 99,
        vendas: 12,
    },
    {
        id: 83,
        slug: 'red-dead-redemption',
        nome: "Red Dead Redemption",
        categoria: 'mais-jogos',
        precoOriginal: 249.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774831417/NTk_siguru.jpg',
        estoque: 99,
        vendas: 15,
    },
    {
        id: 84,
        slug: 'shadow-of-the-tomb-raider-definitive-edition',
        nome: "Shadow of the Tomb Raider: Definitive Edition",
        categoria: 'mais-jogos',
        precoOriginal: 119.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774831535/c3RlYW1yaXAuanBn_msps1v.jpg',
        estoque: 99,
        vendas: 18,
    },
    {
        id: 85,
        slug: 'sekiro-shadows-die-twice-goty-edition',
        nome: "Sekiro™: Shadows Die Twice - GOTY Edition",
        categoria: 'mais-jogos',
        precoOriginal: 139.90,
        precoPromo: 13.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774831607/header_hlqcwn.jpg',
        estoque: 99,
        vendas: 6,
    },
    {
        id: 86,
        slug: 'dark-souls-remastered',
        nome: "DARK SOULS™: REMASTERED",
        categoria: 'mais-jogos',
        precoOriginal: 159.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774831655/header_sfbmzr.jpg',
        estoque: 99,
        vendas: 9,
    },
    {
        id: 87,
        slug: 'dark-souls-iii',
        nome: "DARK SOULS™ III",
        categoria: 'mais-jogos',
        precoOriginal: 229.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774831711/anBn_pgnhlz.jpg',
        estoque: 99,
        vendas: 12,
    },
    {
        id: 88,
        slug: 'dark-souls-ii',
        nome: "DARK SOULS™ II",
        categoria: 'mais-jogos',
        precoOriginal: 159.90,
        precoPromo: 12.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774831760/header_qchhx5.jpg',
        estoque: 99,
        vendas: 15,
    },

    {
        id: 89,
        slug: '171',
        nome: "171",
        categoria: 'mais-jogos',
        precoOriginal: 59.90,
        precoPromo: 12.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774831816/header_ql1wdq.jpg',
        estoque: 99,
        vendas: 7,
    },
    {
        id: 90,
        slug: 'death-stranding-directors-cut',
        nome: "Death Stranding Director’s Cut",
        categoria: 'mais-jogos',
        precoOriginal: 159.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774831870/header_pwllpl.jpg',
        estoque: 99,
        vendas: 9,
    },
    {
        id: 91,
        slug: 'dragon-ball-sparking-zero',
        nome: "Dragon Ball: Sparking! Zero",
        categoria: 'mais-jogos',
        precoOriginal: 444.90,
        precoPromo: 24.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774831920/header_qudbpd.jpg',
        estoque: 99,
        vendas: 11,
    },
    {
        id: 92,
        slug: 'horizon-zero-dawn-complete-edition',
        nome: "Horizon Zero Dawn™ Complete Edition",
        categoria: 'mais-jogos',
        precoOriginal: 249.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774831985/header_obbgml.jpg',
        estoque: 99,
        vendas: 13,
    },
    {
        id: 93,
        slug: 'horizon-forbidden-west-complete-edition',
        nome: "Horizon Forbidden West™ Complete Edition",
        categoria: 'mais-jogos',
        precoOriginal: 299.90,
        precoPromo: 22.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774832109/header_xte5jv.jpg',
        estoque: 99,
        vendas: 15,
    },
    {
        id: 94,
        slug: 'devil-may-cry-5',
        nome: "Devil May Cry 5",
        categoria: 'mais-jogos',
        precoOriginal: 119.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774832164/header_lxjkqx.jpg',
        estoque: 99,
        vendas: 17,
    },
    {
        id: 95,
        slug: 'bleach-rebirth-of-souls',
        nome: "BLEACH Rebirth of Souls",
        categoria: 'mais-jogos',
        precoOriginal: 279.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774832202/header_ly1qen.jpg',
        estoque: 99,
        vendas: 19,
    },
    {
        id: 96,
        slug: 'dying-light-2-stay-human-reloaded-edition',
        nome: "Dying Light 2 Stay Human: Reloaded Edition",
        categoria: 'mais-jogos',
        precoOriginal: 99.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774832268/header_y27y6t.jpg',
        estoque: 99,
        vendas: 7,
    },
    {
        id: 97,
        slug: 'stray',
        nome: "Stray",
        categoria: 'mais-jogos',
        precoOriginal: 89.99,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774832316/header_m65lq6.jpg',
        estoque: 99,
        vendas: 9,
    },
    {
        id: 98,
        slug: 'split-fiction',
        nome: "Split Fiction",
        categoria: 'mais-jogos',
        precoOriginal: 199.00,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774832384/header_fsqlez.jpg',
        estoque: 99,
        vendas: 11,
    },
    {
        id: 99,
        slug: 'ark-survival-ascended',
        nome: "ARK: Survival Ascended",
        categoria: 'mais-jogos',
        precoOriginal: 220.00,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774832530/header_ofluj9.jpg',
        estoque: 99,
        vendas: 13,
    },
    {
        id: 100,
        slug: 'farming-simulator-25',
        nome: "Farming Simulator 25",
        categoria: 'mais-jogos',
        precoOriginal: 143.95,
        precoPromo: 14.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774832460/ZWRpdW0_zvujy5.jpg',
        estoque: 99,
        vendas: 15,
    },
    {
        id: 101,
        slug: 'silent-hill-2',
        nome: "SILENT HILL 2",
        categoria: 'mais-jogos',
        precoOriginal: 349.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774832598/header_yqdqvf.jpg',
        estoque: 99,
        vendas: 17,
    },
    {
        id: 102,
        slug: 'subnautica',
        nome: "Subnautica",
        categoria: 'mais-jogos',
        precoOriginal: 124.50,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774832652/header_qxmbxz.jpg',
        estoque: 99,
        vendas: 19,
    },
    {
        id: 103,
        slug: 'elden-ring-nightreign',
        nome: "Elden Ring Nightreign",
        categoria: 'mais-jogos',
        precoOriginal: 197.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774832709/header_h3ta4g.jpg',
        estoque: 99,
        vendas: 7,
    },
    {
        id: 104,
        slug: 'need-for-speed-most-wanted',
        nome: "Need for Speed™ Most Wanted",
        categoria: 'mais-jogos',
        precoOriginal: 79.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774832784/LmpwZw_ftwkk2.jpg',
        estoque: 99,
        vendas: 9,
    },
    {
        id: 105,
        slug: 'forza-horizon-5',
        nome: "Forza Horizon 5",
        categoria: 'mais-jogos',
        precoOriginal: 249.00,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774832880/header_mblkak.jpg',
        estoque: 99,
        vendas: 11,
    },
    {
        id: 106,
        slug: 'forza-horizon-4',
        nome: "Forza Horizon 4",
        categoria: 'mais-jogos',
        precoOriginal: 199.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774832932/header_te0isw.jpg',
        estoque: 99,
        vendas: 13,
    },
    {
        id: 107,
        slug: 'stalker-2-heart-of-chornobyl',
        nome: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
        categoria: 'mais-jogos',
        precoOriginal: 239.00,
        precoPromo: 29.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774832997/header_fiv8g7.jpg',
        estoque: 99,
        vendas: 15,
    },
    {
        id: 108,
        slug: 'metal-gear-solid-v-the-phantom-pain',
        nome: "Metal Gear Solid V: The Phantom Pain",
        categoria: 'mais-jogos',
        precoOriginal: 129.00,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774833053/header_ha9txw.jpg',
        estoque: 99,
        vendas: 17,
    },
    {
        id: 109,
        slug: 'metro-exodus',
        nome: "Metro Exodus",
        categoria: 'mais-jogos',
        precoOriginal: 149.00,
        precoPromo: 14.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774833103/header_rrcava.jpg',
        estoque: 99,
        vendas: 19,
    },
    {
        id: 110,
        slug: 'the-elder-scrolls-iv-oblivion-remastered',
        nome: "The Elder Scrolls IV: Oblivion Remastered",
        categoria: 'mais-jogos',
        precoOriginal: 264.90,
        precoPromo: 24.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774833167/MTY4MTA3Mw_hs8evm.jpg',
        estoque: 99,
        vendas: 7,
    },
    {
        id: 111,
        slug: 'ready-or-not',
        nome: "Ready or Not",
        categoria: 'mais-jogos',
        precoOriginal: 131.99,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774835406/header_fqpbpa.jpg',
        estoque: 99,
        vendas: 9,
    },
    {
        id: 112,
        slug: 'the-walking-dead-survival-instinct',
        nome: "The Walking Dead™: Survival Instinct",
        categoria: 'mais-jogos',
        precoOriginal: 119.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774835514/NDEuNDAtcG0ucG5n_k1fuyp.jpg',
        estoque: 99,
        vendas: 11,
    },
    {
        id: 113,
        slug: 'rise-of-the-tomb-raider',
        nome: "Rise of the Tomb Raider™",
        categoria: 'mais-jogos',
        precoOriginal: 124.90,
        precoPromo: 9.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774835591/NDguanBn_dxefto.jpg',
        estoque: 99,
        vendas: 13,
    },
    {
        id: 114,
        slug: 'crash-bandicoot-4-it-s-about-time',
        nome: "Crash Bandicoot™ 4: It’s About Time",
        categoria: 'mais-jogos',
        precoOriginal: 199.90,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774835635/header_rajquy.jpg',
        estoque: 99,
        vendas: 15,
    },
    {
        id: 115,
        slug: 'phasmophobia',
        nome: "Phasmophobia",
        categoria: 'mais-jogos',
        precoOriginal: 59.99,
        precoPromo: 6.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774835697/NC5qcGc_dj2yk3.jpg',
        estoque: 99,
        vendas: 17,
    },
    {
        id: 116,
        slug: 'the-evil-within-2',
        nome: "The Evil Within 2",
        categoria: 'mais-jogos',
        precoOriginal: 155.00,
        precoPromo: 14.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774835788/header_s0jjy9.jpg',
        estoque: 99,
        vendas: 19,
    },
    {
        id: 117,
        slug: 'the-evil-within',
        nome: "The Evil Within",
        categoria: 'mais-jogos',
        precoOriginal: 49.99,
        precoPromo: 5.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774835879/MDkuanBn_kbh8vu.jpg',
        estoque: 99,
        vendas: 7,
    },
    {
        id: 118,
        slug: 'need-for-speed-heat',
        nome: "Need for Speed™ Heat",
        categoria: 'mais-jogos',
        precoOriginal: 279.00,
        precoPromo: 19.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774835958/cXVlLmpwZw_ee1wrs.jpg',
        estoque: 99,
        vendas: 9,
    },
    {
        id: 119,
        slug: 'mafia-definitive-edition',
        nome: "Mafia: Definitive Edition",
        categoria: 'mais-jogos',
        precoOriginal: 229.90,
        precoPromo: 22.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774836025/header_sp9qja.jpg',
        estoque: 99,
        vendas: 11,
    },
    {
        id: 120,
        slug: 'mafia-ii-definitive-edition',
        nome: "Mafia II: Definitive Edition",
        categoria: 'mais-jogos',
        precoOriginal: 169.99,
        precoPromo: 16.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774836075/OTIxLmpwZw_jtoejd.jpg',
        estoque: 99,
        vendas: 13,
    },
    {
        id: 121,
        slug: 'mafia-iii-definitive-edition',
        nome: "Mafia III: Definitive Edition",
        categoria: 'mais-jogos',
        precoOriginal: 169.99,
        precoPromo: 16.90,
        imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774836131/header_gqmhyy.jpg',
        estoque: 99,
        vendas: 15,
    },
];

const apenas490Products = [
{
    id: 122,
    slug: 'hitman-world-of-assassination',
    nome: "HITMAN World of Assassination",
    categoria: 'apenas-490',
    precoOriginal: 88.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774884033/ZWFkZXIuanBn_p8bjxd.jpg',
    estoque: 99,
    vendas: 1,
},
{
    id: 123,
    slug: 'hitman-absolution',
    nome: "Hitman: Absolution™",
    categoria: 'apenas-490',
    precoOriginal: 36.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774884247/cGhvdG8uanBn_wvneie.jpg',
    estoque: 99,
    vendas: 2,
},
{
    id: 124,
    slug: 'fallout-4',
    nome: "Fallout 4",
    categoria: 'apenas-490',
    precoOriginal: 79.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774884387/Zw_upcfkv.jpg',
    estoque: 99,
    vendas: 3,
},
{
    id: 125,
    slug: 'saint-seiya-soldiers-soul',
    nome: "Saint Seiya: Soldiers' Soul",
    categoria: 'apenas-490',
    precoOriginal: 89.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774884474/MzJjNzA3YTk0MDBj_svyofl.jpg',
    estoque: 99,
    vendas: 4,
},
{
    id: 126,
    slug: 'valheim',
    nome: "Valheim",
    categoria: 'apenas-490',
    precoOriginal: 79.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774884535/NTE2Ni5qcGc_yj02yu.jpg',
    estoque: 99,
    vendas: 5,
},
{
    id: 127,
    slug: 'ultrakill',
    nome: "ULTRAKILL",
    categoria: 'apenas-490',
    precoOriginal: 49.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774884586/MDcucG5n_ej002o.png',
    estoque: 99,
    vendas: 6,
},
{
    id: 128,
    slug: 'five-nights-at-freddys-help-wanted',
    nome: "FIVE NIGHTS AT FREDDY'S: HELP WANTED",
    categoria: 'apenas-490',
    precoOriginal: 59.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774884898/NGMxMmZkZWM_jo5bnd.jpg',
    estoque: 99,
    vendas: 7,
},
{
    id: 129,
    slug: 'lossless-scaling',
    nome: "Lossless Scaling",
    categoria: 'apenas-490',
    precoOriginal: 19.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774884701/Zw_r3ab3m.jpg',
    estoque: 99,
    vendas: 8,
},
{
    id: 130,
    slug: 'sifu',
    nome: "Sifu",
    categoria: 'apenas-490',
    precoOriginal: 79.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774884762/Yjc1YTM5NzU_z0imc5.jpg',
    estoque: 99,
    vendas: 9,
},
{
    id: 131,
    slug: 'stardew-valley',
    nome: "Stardew Valley",
    categoria: 'apenas-490',
    precoOriginal: 29.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774884820/cGc_xkfsti.jpg',
    estoque: 99,
    vendas: 10,
},
{
    id: 132,
    slug: 'tony-hawks-pro-skater-1-plus-2',
    nome: "Tony Hawk's™ Pro Skater™ 1 + 2",
    categoria: 'apenas-490',
    precoOriginal: 89.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774885090/Nzg_hngloe.jpg',
    estoque: 99,
    vendas: 11,
},
{
    id: 133,
    slug: 'sonic-mania',
    nome: "Sonic Mania",
    categoria: 'apenas-490',
    precoOriginal: 99.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774885137/aXVt_tpjto5.jpg',
    estoque: 99,
    vendas: 12,
},
{
    id: 134,
    slug: 'cuphead',
    nome: "Cuphead",
    categoria: 'apenas-490',
    precoOriginal: 39.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774885182/LTYzOXgzNjEuanBn_sbwjb6.jpg',
    estoque: 99,
    vendas: 13,
},
{
    id: 135,
    slug: 'hollow-knight',
    nome: "Hollow Knight",
    categoria: 'apenas-490',
    precoOriginal: 49.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774885254/MzI1OS5qcGc_w0mhma.jpg',
    estoque: 99,
    vendas: 14,
},
{
    id: 136,
    slug: 'overcooked',
    nome: "Overcooked",
    categoria: 'apenas-490',
    precoOriginal: 51.00,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774885302/NQ_mosmoz.jpg',
    estoque: 99,
    vendas: 15,
},
{
    id: 137,
    slug: 'humanitz',
    nome: "HumanitZ",
    categoria: 'apenas-490',
    precoOriginal: 39.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774885343/MTE4MDg_abue8q.jpg',
    estoque: 99,
    vendas: 16,
},
{
    id: 138,
    slug: 'palworld',
    nome: "Palworld",
    categoria: 'apenas-490',
    precoOriginal: 89.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774885377/LmpwZw_mthe6m.jpg',
    estoque: 99,
    vendas: 17,
},
{
    id: 139,
    slug: 'devil-may-cry-4',
    nome: "Devil May Cry 4",
    categoria: 'apenas-490',
    precoOriginal: 89.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774885466/OC9NUGJ4OHAuanBn_ylmonj.jpg',
    estoque: 99,
    vendas: 18,
},
{
    id: 140,
    slug: 'hitman-2-silent-assassin',
    nome: "Hitman 2: Silent Assassin",
    categoria: 'apenas-490',
    precoOriginal: 22.79,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774885506/Zw_ydap8j.jpg',
    estoque: 99,
    vendas: 19,
},
{
    id: 141,
    slug: 'left-4-dead-2',
    nome: "Left 4 Dead 2",
    categoria: 'apenas-490',
    precoOriginal: 39.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774885555/MXZncmprcWUuanBn_liosdw.jpg',
    estoque: 99,
    vendas: 20,
},
{
    id: 142,
    slug: 'internet-cafe-simulator',
    nome: "Internet Cafe Simulator",
    categoria: 'apenas-490',
    precoOriginal: 49.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774885772/LmpwZw_r23xzk.png',
    estoque: 99,
    vendas: 1,
},
{
    id: 143,
    slug: 'inside',
    nome: "INSIDE",
    categoria: 'apenas-490',
    precoOriginal: 74.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886251/17729444667392374imagem_cxflbg.jpg',
    estoque: 99,
    vendas: 2,
},
{
    id: 144,
    slug: 'american-truck-simulator',
    nome: "American Truck Simulator",
    categoria: 'apenas-490',
    precoOriginal: 61.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774885917/ZDU3NG1pYy5qcGc_ynsapx.jpg',
    estoque: 99,
    vendas: 3,
},
{
    id: 145,
    slug: 'mortal-kombat-komplete-edition',
    nome: "Mortal Kombat Komplete Edition",
    categoria: 'apenas-490',
    precoOriginal: 59.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886008/17729469141361984imagem_sdxhbz.jpg',
    estoque: 99,
    vendas: 4,
},
{
    id: 146,
    slug: 'sleeping-dogs',
    nome: "Sleeping Dogs",
    categoria: 'apenas-490',
    precoOriginal: 59.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886035/17729474128489784imagem_tifay3.jpg',
    estoque: 99,
    vendas: 5,
},
{
    id: 147,
    slug: 'the-witcher-3-wild-hunt',
    nome: "The Witcher 3: Wild Hunt",
    categoria: 'apenas-490',
    precoOriginal: 89.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886074/17729477191491833imagem_dpepws.jpg',
    estoque: 99,
    vendas: 6,
},
{
    id: 148,
    slug: 'outlast',
    nome: "Outlast",
    categoria: 'apenas-490',
    precoOriginal: 59.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886102/17729480406847568imagem_dpjcv7.jpg',
    estoque: 99,
    vendas: 7,
},
{
    id: 149,
    slug: 'far-cry-primal',
    nome: "Far Cry® Primal",
    categoria: 'apenas-490',
    precoOriginal: 89.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886133/17729484469693951imagem_yqvbzc.png',
    estoque: 99,
    vendas: 8,
},
{
    id: 150,
    slug: 'bully-scholarship-edition',
    nome: "Bully: Scholarship Edition",
    categoria: 'apenas-490',
    precoOriginal: 39.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886163/17729491560304006imagem_wdbfsf.jpg',
    estoque: 99,
    vendas: 9,
},
{
    id: 151,
    slug: 'hitman-blood-money',
    nome: "Hitman: Blood Money",
    categoria: 'apenas-490',
    precoOriginal: 32.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886189/17729495023315040imagem_wrery6.jpg',
    estoque: 99,
    vendas: 10,
},
{
    id: 152,
    slug: 'lego-batman-the-videogame',
    nome: "LEGO® Batman™: The Videogame",
    categoria: 'apenas-490',
    precoOriginal: 29.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886319/17729430769839051imagem_c6yvqi.png',
    estoque: 99,
    vendas: 11,
},
{
    id: 153,
    slug: 'hitman-codename-47',
    nome: "Hitman: Codename 47",
    categoria: 'apenas-490',
    precoOriginal: 20.69,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886357/1772950210901206imagem_e1rg82.jpg',
    estoque: 99,
    vendas: 12,
},
{
    id: 154,
    slug: 'hitman-contracts',
    nome: "Hitman: Contracts",
    categoria: 'apenas-490',
    precoOriginal: 22.79,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886381/1772950598255675imagem_qj3t7t.jpg',
    estoque: 99,
    vendas: 13,
},
{
    id: 155,
    slug: 'hitman-go-definitive-edition',
    nome: "Hitman GO: Definitive Edition",
    categoria: 'apenas-490',
    precoOriginal: 15.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886536/1772950855427838imagem_vq2hj7.png',
    estoque: 99,
    vendas: 14,
},
{
    id: 156,
    slug: 'f1-2015',
    nome: "F1 2015",
    categoria: 'apenas-490',
    precoOriginal: 29.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886567/17729512179612212imagem_jngnqc.jpg',
    estoque: 99,
    vendas: 15,
},
{
    id: 157,
    slug: 'f1-2016',
    nome: "F1 2016",
    categoria: 'apenas-490',
    precoOriginal: 29.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886600/17729514921087860imagem_vc7zqj.png',
    estoque: 99,
    vendas: 16,
},
{
    id: 158,
    slug: 'f1-2017',
    nome: "F1™ 2017",
    categoria: 'apenas-490',
    precoOriginal: 49.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886631/17729517230213254imagem_acsdp0.png',
    estoque: 99,
    vendas: 17,
},
{
    id: 159,
    slug: 'f1-2018',
    nome: "F1 2018",
    categoria: 'apenas-490',
    precoOriginal: 59.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886658/17729511709641478imagem_uju93b.png',
    estoque: 99,
    vendas: 18,
},
{
    id: 160,
    slug: 'f1-2019',
    nome: "F1™ 2019",
    categoria: 'apenas-490',
    precoOriginal: 69.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886690/17729523315666918imagem_yz1mpe.jpg',
    estoque: 99,
    vendas: 19,
},
{
    id: 161,
    slug: 'f1-2020',
    nome: "F1® 2020",
    categoria: 'apenas-490',
    precoOriginal: 29.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886724/17735020035898950imagem_s3gi7t.png',
    estoque: 99,
    vendas: 20,
},
{
    id: 162,
    slug: 'f1-2021',
    nome: "F1® 2021",
    categoria: 'apenas-490',
    precoOriginal: 62.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886812/17735016221323257imagem_mppkzc.jpg',
    estoque: 99,
    vendas: 1,
},
{
    id: 163,
    slug: 'f1-manager-2022',
    nome: "F1® Manager 2022",
    categoria: 'apenas-490',
    precoOriginal: 39.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886850/17735012314629265imagem_hzlgso.png',
    estoque: 99,
    vendas: 2,
},
{
    id: 164,
    slug: 'f1-manager-2023',
    nome: "F1® Manager 2023",
    categoria: 'apenas-490',
    precoOriginal: 39.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886893/17735009688092009imagem_dvdo8s.jpg',
    estoque: 99,
    vendas: 3,
},
{
    id: 165,
    slug: 'pc-building-simulator',
    nome: "PC Building Simulator",
    categoria: 'apenas-490',
    precoOriginal: 59.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886951/17729527845797078imagem_e8qtep.png',
    estoque: 99,
    vendas: 4,
},
{
    id: 166,
    slug: 'terraria',
    nome: "Terraria",
    categoria: 'apenas-490',
    precoOriginal: 32.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774886979/17729530557797078imagem_gte731.png',
    estoque: 99,
    vendas: 5,
},
{
    id: 167,
    slug: 'my-summer-car',
    nome: "My Summer Car",
    categoria: 'apenas-490',
    precoOriginal: 27.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774887017/1772953460296557imagem_afkrni.png',
    estoque: 99,
    vendas: 6,
},
{
    id: 168,
    slug: 'my-winter-car',
    nome: "My Winter Car",
    categoria: 'apenas-490',
    precoOriginal: 46.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774887101/17729537041622710imagem_bkviwg.png',
    estoque: 99,
    vendas: 7,
},
{
    id: 169,
    slug: 'ark-survival-evolved',
    nome: "ARK: Survival Evolved",
    categoria: 'apenas-490',
    precoOriginal: 46.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774977803/YzcyY2ZhZDQ_owxgox.jpg',
    estoque: 99,
    vendas: 8,
},
{
    id: 170,
    slug: 'thief-simulator',
    nome: "Thief Simulator",
    categoria: 'apenas-490',
    precoOriginal: 59.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774887154/17729556615215585imagem_pzxxhj.png',
    estoque: 99,
    vendas: 9,
},
{
    id: 171,
    slug: 'thief-simulator-2',
    nome: "Thief Simulator 2",
    categoria: 'apenas-490',
    precoOriginal: 59.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774887183/17729556598189439imagem_rgtysf.png',
    estoque: 99,
    vendas: 10,
},
{
    id: 172,
    slug: 'contraband-police',
    nome: "Contraband Police",
    categoria: 'apenas-490',
    precoOriginal: 89.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774887242/17729552787942127imagem_nsalrk.png',
    estoque: 99,
    vendas: 11,
},
{
    id: 173,
    slug: 'quarantine-zone-the-last-check',
    nome: "Quarantine Zone: The Last Check",
    categoria: 'apenas-490',
    precoOriginal: 59.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774887272/17729549691433352imagem_fltnjb.png',
    estoque: 99,
    vendas: 12,
},
{
    id: 174,
    slug: 'tomb-raider',
    nome: "Tomb Raider",
    categoria: 'apenas-490',
    precoOriginal: 69.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774887300/17729394035209430imagem_sqynal.png',
    estoque: 99,
    vendas: 13,
},
{
    id: 175,
    slug: 'just-cause-3',
    nome: "Just Cause™ 3",
    categoria: 'apenas-490',
    precoOriginal: 49.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774887324/17729401946857971imagem_wokx3q.png',
    estoque: 99,
    vendas: 14,
},
{
    id: 176,
    slug: 'rayman-origins',
    nome: "Rayman® Origins",
    categoria: 'apenas-490',
    precoOriginal: 59.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774887349/17729411216401362imagem_miwbdj.png',
    estoque: 99,
    vendas: 15,
},
{
    id: 177,
    slug: 'manhunt',
    nome: "Manhunt",
    categoria: 'apenas-490',
    precoOriginal: 19.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774887387/17729415496957293imagem_jtegdz.jpg',
    estoque: 99,
    vendas: 16,
},
{
    id: 178,
    slug: 'devil-may-cry-3-special-edition',
    nome: "Devil May Cry 3: Special Edition",
    categoria: 'apenas-490',
    precoOriginal: 49.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774887420/17729419717912576imagem_ipocsn.png',
    estoque: 99,
    vendas: 17,
},
{
    id: 179,
    slug: 'limbo',
    nome: "LIMBO",
    categoria: 'apenas-490',
    precoOriginal: 39.90,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774887445/17729426287762398imagem_bshgnc.png',
    estoque: 99,
    vendas: 18,
},
{
    id: 180,
    slug: 'raft',
    nome: "Raft",
    categoria: 'apenas-490',
    precoOriginal: 36.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774887470/17733917522773911imagem_bzc9dk.png',
    estoque: 99,
    vendas: 19,
},
{
    id: 181,
    slug: 'the-forest',
    nome: "The Forest",
    categoria: 'apenas-490',
    precoOriginal: 37.99,
    precoPromo: 4.90,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774887506/17735005985973401imagem_krxh4p.jpg',
    estoque: 99,
    vendas: 20,
},{
    id: 181,
    slug: 'teste',
    nome: "teste",
    categoria: 'apenas-490',
    precoOriginal: 37.99,
    precoPromo: 0.010,
    imagem: 'https://res.cloudinary.com/dcle0spvc/image/upload/v1774887506/17735005985973401imagem_krxh4p.jpg',
    estoque: 99,
    vendas: 20,
},
];



const allProducts = [...novidadesProducts, ...maisPopularesProducts, ...maisJogosProducts, ...apenas490Products];


function applyBackgroundArt() {
    const lightningBg = document.getElementById('lightningBg');
    if (!lightningBg) return;

    const { imageUrl, position, size } = siteBackgroundArt;

    if (!imageUrl) {
        lightningBg.classList.remove('has-background-art');
        lightningBg.style.removeProperty('--site-bg-image');
        lightningBg.style.removeProperty('--site-bg-position');
        lightningBg.style.removeProperty('--site-bg-size');
        return;
    }

    lightningBg.classList.add('has-background-art');
    lightningBg.style.setProperty('--site-bg-image', `url("${imageUrl}")`);
    lightningBg.style.setProperty('--site-bg-position', position || 'center center');
    lightningBg.style.setProperty('--site-bg-size', size || 'cover');
}

const tickerPhrases = [
    'Suporte rápido e eficiente',
    'Produtos 100% originais e garantidos',
    'Compra segura, prática e transparente',
    'Entrega via Discord',
    'Produtos com garantia estendida',
    'Descontos em todos os produtos',
];

function formatPrice(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}

function getDiscountPercentage(product) {
    if (!product.precoOriginal || product.precoOriginal <= product.precoPromo) {
        return 0;
    }

    return Math.round(((product.precoOriginal - product.precoPromo) / product.precoOriginal) * 100);
}

function createLightningLines() {
    const lightningBg = document.getElementById('lightningBg');
    if (!lightningBg) return;

    const totalLines = 28;
    const startOffset = 2.5;
    const spacing = 3.45;

    const lines = Array.from({ length: totalLines }, (_, index) => {
        const line = document.createElement('span');
        const height = 120 + Math.round(Math.random() * 240);

        line.className = 'bg-line';

        if (index % 3 === 0) line.classList.add('thin');
        if (index % 5 === 0) line.classList.add('wide');
        if (index % 4 === 0) line.classList.add('tone-b');
        if (index % 6 === 0) line.classList.add('tone-c');

        line.style.left = `${startOffset + (index * spacing)}%`;
        line.style.height = `${height}px`;
        line.style.animationDuration = `${4.8 + Math.random() * 6.2}s`;
        line.style.animationDelay = `${Math.random() * 4}s`;

        return line;
    });

    lightningBg.append(...lines);
}

function setupTicker() {
    const tickerContainer = document.querySelector('.ticker-container');
    const tickerContent = document.getElementById('tickerContent');

    if (!tickerContainer || !tickerContent) return;

    let animationId = null;
    let lastTimestamp = 0;
    let offset = 0;
    let contentWidth = 0;
    let containerWidth = 0;
    let pauseUntil = 0;

    const speed = 135;
    const pauseDuration = 2000;

    const renderTicker = () => {
        tickerContent.innerHTML = tickerPhrases
            .map((phrase, index) => {
                const separator = index < tickerPhrases.length - 1
                    ? '<span class="ticker-separator">•</span>'
                    : '';

                return `<span class="ticker-item">${phrase}</span>${separator}`;
            })
            .join('');
    };

    const resetPosition = () => {
        contentWidth = tickerContent.scrollWidth;
        containerWidth = tickerContainer.clientWidth;
        offset = containerWidth;
        tickerContent.style.transform = `translateX(${offset}px)`;
        pauseUntil = 0;
        lastTimestamp = 0;
    };

    const step = (timestamp) => {
        if (!lastTimestamp) lastTimestamp = timestamp;

        const delta = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        if (pauseUntil && timestamp < pauseUntil) {
            animationId = requestAnimationFrame(step);
            return;
        }

        if (pauseUntil && timestamp >= pauseUntil) {
            resetPosition();
        }

        offset -= speed * (delta / 1000);
        tickerContent.style.transform = `translateX(${offset}px)`;

        if (offset <= -contentWidth) {
            pauseUntil = timestamp + pauseDuration;
        }

        animationId = requestAnimationFrame(step);
    };

    renderTicker();
    resetPosition();
    animationId = requestAnimationFrame(step);

    window.addEventListener('resize', () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }

        renderTicker();
        resetPosition();
        animationId = requestAnimationFrame(step);
    });
}

function renderProductCards(gridId, productList) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    grid.innerHTML = productList
        .map((product) => {
            const imageMarkup = product.imagem
                ? `<img src="${product.imagem}" alt="${product.nome}" class="card-image">`
                : `<div class="card-image-placeholder">FC 26</div>`;

            return `
                <article class="product-card" data-slug="${product.slug}">
                    ${imageMarkup}
                    <div class="card-content">
                        <h3 class="card-title">${product.nome}</h3>
                        <div>
                            <span class="price-original">${formatPrice(product.precoOriginal)}</span>
                            <span class="discount">-${getDiscountPercentage(product)}%</span>
                        </div>
                        <div class="price-promo">${formatPrice(product.precoPromo)}</div>
                        <div class="pix-info">
                            <i class="fas fa-bolt"></i>
                            <span>À vista no Pix</span>
                        </div>
                        <button class="card-btn" type="button">
                            <i class="fas fa-shopping-cart"></i>
                            Comprar agora
                        </button>
                    </div>
                </article>
            `;
        })
        .join('');
}



const defaultProductPageData = {
    infoCards: [
        {
            icon: 'fa-shield-halved',
            title: 'Compra segura',
            text: 'Ambiente criptografado e pagamento protegido.',
        },
        {
            icon: 'fa-bolt',
            title: 'Entrega via Discord',
            text: 'Receba seu jogo pelo Discord após a confirmação do pagamento.',
        },
        {
            icon: 'fa-qrcode',
            title: 'Método de pagamento',
            text: 'Aceitamos pagamento à vista no Pix.',
        },
        {
            icon: 'fa-star',
            title: 'Avaliações',
            text: '4.8/5 baseado em avaliações positivas.',
        },
    ],
    highlightsTitle: '💯 Informações importantes — leia antes da compra:',
    highlights: [
        'Produto digital com acesso rápido após a confirmação da compra.',
        'Envio rápido após confirmação da compra.',
        'Estoque real e disponível para ativação instantânea.',
        'Passo a passo completo incluso, com instruções simples para ativação.',
        'Produto digital — acesse diretamente na sua plataforma, sem risco.',
        'Conta compartilhada.',
        'Nunca perde o acesso.',
    ],
    warning: 'Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
    minimumTitle: '⚙️ Requisitos mínimos',
    minimumRequirements: [
        'Sistema: Windows 10/11 64 Bit',
        'Processador: Intel Core i5 / AMD Ryzen 5',
        'Memória: 8 GB RAM',
        'Placa de vídeo: GTX 1050 Ti / RX 570 ou superior',
        'DirectX: Versão 12',
        'Armazenamento: 50 GB disponíveis',
    ],
    requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da plataforma.)',
};

const productPageOverrides = {
    'crimson-desert': {
        highlights: [
            '✅ Este jogo possui proteção Denuvo, porém o acesso é imediato, estável e sem erros.',
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação.',
            '✅ Produto digital — acesse diretamente na Steam, sem risco.',
            '✅ Conta compartilhada.',
            '✅ Nunca perde o acesso.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 64-bit',
            '◽Processador: Ryzen 5 2600X / i5-8500',
            '◽Memória: 16 GB RAM',
            '◽DirectX: Vesão 12',
            '◽Placa de vídeo: RX 5500 XT / GTX 1060',
            '◽Armazenamento: 150 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'death-stranding-2-on-the-beach': {
        highlights: [
            '✅ Envio rapido após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10/11 Version 1909 or newer',
            '◽Processador: Intel Core i3-10100, AMD Ryzen 3 3100',
            '◽Memória: 16 GB RAM',
            '◽Placa de vídeo: NVIDIA GeForce GTX 1660, AMD Radeon RX 5500 XT 8GB',
            '◽Armazenamento: 150 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'assassins-creed-valhalla': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            'Sistema: Windows 10 (versions 64 bits uniquement)',
            'Processador: AMD Ryzen 3 1200 3.1 GHz / Intel Core i5-4460 3.2 GHz',
            'Memória: 8 GB RAM',
            'Placa de vídeo: AMD R9 380 /NVIDIA GeForce GTX 960',
            'Armazenamento: 160 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'ea-sports-fc-26': {
        highlights: [
            '✅ Este jogo possui proteção Denuvo, porém o acesso é imediato, estável e sem erros.',
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação.',
            '✅ Produto digital — acesse diretamente na Steam, sem risco.',
            '✅ Conta compartilhada.',
            '✅ Nunca perde o acesso.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10/11 - 64-Bit (Latest Update)',
            '◽Processador: AMD Ryzen 5 1600 or Intel Core i5 6600k',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: AMD RX 570 or Nvidia GTX 1050 Ti',
            '◽DIRECTX: Versão 12',
            '◽Armazenamento: 100 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'resident-evil-requiem': {
        highlights: [
            '✅ Este jogo possui proteção Denuvo, porém o acesso é imediato, estável e sem erros.',
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação.',
            '✅ Produto digital — acesse diretamente na sua Steam, sem risco.',
            '✅ Conta compartilhada.',
            '✅ Nunca perde o acesso.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 11 (64 Bit required)',
            '◽Processador: Intel corei5-8500 / AMD Ryzen 5 3500',
            '◽Memória: 16 GB RAM',
            '◽Placa de vídeo: GeForce GTX 1660 6GB / Radeon RX 5500 XT 8GB',
            '◽DIRECTX: Versão 12',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'silent-hill-f': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 11 x64',
            '◽Processador: Intel Core i5-8400 / AMD Ryzen 5 2600',
            '◽Memória: 16 GB RAM',
            '◽Placa de vídeo: NVIDIA® GeForce GTX 1070 Ti or AMD Radeon™ RX 5700',
            '◽Armazenamento: 50 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'dying-light-the-beast': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 or newer',
            '◽Processador: Intel i5-13400f / AMD Ryzen 7 5800X',
            '◽Memória: 16 GB RAM',
            '◽Placa de vídeo: NVIDIA GeForce 1060 / AMD Radeon 5500 XT / Intel ARC A750',
            '◽Armazenamento: 70 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'hollow-knight-silksong': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 version 21H1 (build 19043) or newer',
            '◽Processador: Intel Core i3-3240, AMD FX-4300',
            '◽Memória: 4 GB RAM',
            '◽Placa de vídeo: GeForce GTX 560 Ti (1GB), Radeon HD 7750 (1GB)',
            '◽Armazenamento: 8 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'no-i-m-not-a-human': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: 10',
            '◽Processador: Intel core i5',
            '◽Memória: 2 GB RAM',
            '◽Placa de vídeo: GTX 960',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'metal-gear-solid-delta-snake-eater': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows® 10, Windows® 11 (64-bit OS required)',
            '◽Processador: Intel i5-8600 or AMD Ryzen 5 3600',
            '◽Memória: 16 GB RAM',
            '◽Placa de vídeo: RTX 2060 Super (8GB)',
            '◽Armazenamento: 100 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'hell-is-us': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10/11 64-bit',
            '◽Processador: Intel Core i7-7700K or AMD Ryzen 3 3300X',
            '◽Memória: 16 GB RAM',
            '◽Placa de vídeo: NVIDIA GeForce GTX 1070, 8GB or AMD Radeon RX 5600 XT, 6GB or Intel Arc A750, 8GB',
            '◽Armazenamento: 30 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'clair-obscur-expedition-33': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10',
            '◽Processador: Intel Core i7-8700K / AMD Ryzen 5 1600X',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: NVIDIA GeForce GTX 1060 6 GB / AMD Radeon RX 5600 XT 6 GB / Intel Arc A380 6 GB',
            '◽Armazenamento: 55 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'marvel-s-spider-man-2': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10/11 (version 1909 or higher)',
            '◽Processador: Intel Core i3-8100 or AMD Ryzen 3 3100',
            '◽Memória: 16 GB RAM',
            '◽Placa de vídeo: NVIDIA GeForce GTX 1650 or AMD Radeon RX 5500 XT',
            '◽Armazenamento: 140 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'kingdom-come-deliverance-ii': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 64-bit (or newer)',
            '◽Processador: Intel Core i5-8400, AMD Ryzen 5 2600',
            '◽Memória: 16 GB RAM',
            '◽Placa de vídeo: NVIDIA GeForce GTX 1060 (6GB), AMD Radeon RX 580',
            '◽Armazenamento: 100 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'red-dead-redemption-2': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 - 64-bit',
            '◽Processador: Intel® Core™ i5-2500K / AMD FX-6300',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB',
            '◽Armazenamento: 150 GB disponíveis',
            '◽Placa de som: DirectX Compatible',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'elden-ring': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10',
            '◽Processador: Intel Core i5-8400 ou AMD Ryzen 3 3300X',
            '◽Memória: 12 GB RAM',
            '◽Placa de vídeo: NVIDIA GeForce GTX 1060 3 GB ou AMD Radeon RX 580 4 GB',
            '◽DirectX: Versão 12',
            '◽Armazenamento: 60 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'god-of-war': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 64-bit',
            '◽Processador: Intel i5-2500k (4 cores 3.3 GHz) ou AMD Ryzen 3 1200 (4 cores 3.1 GHz)',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: NVIDIA GTX 960 (4 GB) ou AMD R9 290X (4 GB)',
            '◽DirectX: Versão 11',
            '◽Armazenamento: 70 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'grand-theft-auto-enhanced-legacy': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 (latest service pack)',
            '◽Processador: Intel® Core™ i7-4770 ou AMD FX™-9590',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: NVIDIA GeForce® GTX 1630 (4 GB VRAM) ou AMD Radeon™ RX 6400 (4 GB VRAM)',
            '◽Armazenamento: 105 GB disponíveis',
            '◽Placa de som: DirectX 10 Compatible',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'microsoft-flight-simulator-2024': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação.',
            '✅ Produto digital — acesse diretamente na Steam, sem risco.',
            '✅ Conta compartilhada.',
            '✅ Nunca perde o acesso.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 64-bit',
            '◽Processador: AMD Ryzen 5 2600X ou Intel Core i7-6800K',
            '◽Memória: 16 GB RAM',
            '◽Placa de vídeo: Radeon RX 5700 ou GeForce GTX 970',
            '◽DirectX: Versão 12',
            '◽Armazenamento: 50 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },

    'grand-theft-auto-san-andreas': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10',
            '◽Processador: Intel® Core™ i5-6600K / AMD FX-6300',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: Nvidia GeForce GTX 760 2 GB / AMD Radeon R9 280 3 GB',
            '◽Armazenamento: 19 GB disponíveis',
            '◽Placa de som: DirectX Compatible',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'grand-theft-auto-the-trilogy-the-definitive-edition': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10',
            '◽Processador: Intel® Core™ i5-6600K / AMD FX-6300',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: Nvidia GeForce GTX 760 2 GB / AMD Radeon R9 280 3 GB',
            '◽Armazenamento: 45 GB disponíveis',
            '◽Placa de som: DirectX Compatible',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'black-myth-wukong': {
        highlights: [
            '✅ Este jogo possui proteção Denuvo, porém o acesso é imediato, estável e sem erros.',
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação.',
            '✅ Produto digital — acesse diretamente na Steam, sem risco.',
            '✅ Conta compartilhada.',
            '✅ Nunca perde o acesso.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 64-bit',
            '◽Processador: Intel Core i5-8400 / AMD Ryzen 5 1600',
            '◽Memória: 16 GB RAM',
            '◽Placa de vídeo: NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB',
            '◽DirectX: Versão 11',
            '◽Armazenamento: 130 GB disponíveis',
            '◽Placa de som: Windows Compatible Audio Device',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'kingdom-come-deliverance': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: OS 64-bit Windows 7, 64-bit Windows 8 (8.1) ou Windows 10',
            '◽Processador: Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870',
            '◽DirectX: Versão 11',
            '◽Armazenamento: 70 GB disponíveis',
            '◽Placa de som: Integrada',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'the-crew-motorfest': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 (64 bit only)',
            '◽Processador: Intel Core i5-4460 / AMD Ryzen 5 1400',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: NVIDIA GeForce GTX 1060 6GB ou AMD Radeon RX 480 8GB',
            '◽Rede: Conexão de internet banda larga',
            '◽Armazenamento: 40 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },

    'days-gone': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 64-bits',
            '◽Processador: Intel Core i5-2500K@3.3GHz / AMD FX 6300@3.5GHz',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: Nvidia GeForce GTX 780 (3 GB) / AMD Radeon R9 290 (4 GB)',
            '◽DirectX: Versão 11',
            '◽Armazenamento: 70 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'euro-truck-simulator-2': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 7',
            '◽Processador: CPU dual core 2.4 GHz',
            '◽Memória: 4 GB RAM',
            '◽Placa de vídeo: GeForce GTS 450-class (Intel HD 4000)',
            '◽Armazenamento: 25 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'resident-evil-4-remake-todas-as-dlcs': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 (64 bit)',
            '◽Processador: AMD Ryzen 3 1200 / Intel Core i5-7500',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: AMD Radeon RX 560 4GB / NVIDIA GeForce GTX 1050 Ti 4GB',
            '◽DirectX: Versão 12',
            '◽Armazenamento: 67 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'ghost-of-tsushima-directors-cut': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 64-bit',
            '◽Processador: Intel Core i3-7100 / AMD Ryzen 3 1200',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: NVIDIA GeForce GTX 960 / AMD Radeon RX 5500 XT',
            '◽Armazenamento: 75 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'cyberpunk-2077': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: 64-bit Windows 10',
            '◽Processador: Core i7-6700 ou Ryzen 5 1600',
            '◽Memória: 12 GB RAM',
            '◽Placa de vídeo: GeForce GTX 1060 6GB ou Radeon RX 580 8GB ou Arc A380',
            '◽DirectX: Versão 12',
            '◽Armazenamento: 70 GB SSD disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'the-last-of-us-part-ii-remastered': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10/11 64-bit (version 1909 or higher)',
            '◽Processador: Intel Core i3-8100 / AMD Ryzen 3 1300X',
            '◽Memória: 16 GB RAM',
            '◽Placa de vídeo: NVIDIA GeForce GTX 1650 / AMD Radeon RX 5500XT',
            '◽Armazenamento: 150 GB SSD disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'the-last-of-us-part-i': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 (Version 1909 or Newer) 64-bit',
            '◽Processador: AMD Ryzen 5 1500X / Intel Core i7-4770K',
            '◽Memória: 16 GB RAM',
            '◽Placa de vídeo: AMD Radeon 470 (4 GB) / NVIDIA GeForce GTX 970 (4 GB)',
            '◽Armazenamento: 100 GB SSD disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'god-of-war-ragnarok': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 64-bit',
            '◽Processador: Intel i5-4670k ou AMD Ryzen 3 1200',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: NVIDIA GTX 1060 (6GB) ou AMD RX 5500 XT (8GB) ou Intel Arc A750',
            '◽DirectX: Versão 12',
            '◽Armazenamento: 190 GB SSD disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },

    'internet-cafe-simulator-2': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 7',
            '◽Processador: 2 GHz Dual Core CPU',
            '◽Memória: 4 GB RAM',
            '◽Placa de vídeo: Intel HD Graphics 4000 or better',
            '◽Armazenamento: 7 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'outlast-2': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows Vista / 7 / 8 / 10, 64-bits',
            '◽Processador: Intel Core i3-530',
            '◽Memória: 4 GB RAM',
            '◽Placa de vídeo: 1GB VRAM, NVIDIA Geforce GTX 260 / ATI Radeon HD 4870',
            '◽DirectX: Versão 10',
            '◽Armazenamento: 30 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'dead-island-definitive-edition': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows® 7 64-bit / Windows® 8 64-bit / Windows® 8.1 64-bit / Windows® 10 64-bit',
            '◽Processador: Intel® Core™ i5-2500 @3.3 GHz / AMD FX-8320 @3.5 GHz',
            '◽Memória: 4 GB RAM',
            '◽Placa de vídeo: NVIDIA® GeForce® GTX 560 Ti / AMD Radeon™ HD 6870 (1GB VRAM)',
            '◽DIRECTX: Versão 11',
            '◽Armazenamento: 10 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'dead-island-2': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10',
            '◽Processador: AMD FX-9590 / Intel Core i7-7700HQ',
            '◽Memória: 10 GB RAM',
            '◽Placa de vídeo: Radeon R9 390X (8192 VRAM) / GeForce GTX 1060 (6144 VRAM)',
            '◽DIRECTX: Versão 12',
            '◽Armazenamento: 70 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'metro-last-light-redux': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows Vista, 7 or 8 (64-bit only)',
            '◽Processador: Dual Core CPU (2.2+ GHz Dual Core CPU or better)',
            '◽Memória: 2 GB RAM',
            '◽Placa de vídeo: DirectX 10, Shader Model 4 compliant graphics cards (GeForce 8800 GT 512 MB, GeForce GTS 250, etc)',
            '◽Armazenamento: 10 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'metro-2033-redux': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows Vista, 7 or 8 (64-bit only)',
            '◽Processador: Dual Core CPU (2.2+ GHz Dual Core CPU or better)',
            '◽Memória: 2 GB RAM',
            '◽Placa de vídeo: DirectX 10, Shader Model 4 compliant graphics cards (GeForce 8800 GT 512 MB, GeForce GTS 250, etc)',
            '◽Armazenamento: 10 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'call-of-duty-modern-warfare': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows® 10 64-bit (v.1709 ou mais alta)',
            '◽Processador: Intel® Core™ i3-4340 ou AMD FX-6300',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: NVIDIA® GeForce® GTX 670 / NVIDIA® GeForce® GTX 1650 ou AMD Radeon™ HD 7950 - Sistema compatível com DirectX 12.0',
            '◽Armazenamento: 175 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'fallout-76': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 8.1/10 (64-bit versions)',
            '◽Processador: Intel Core i5-6600k 3.5 GHz /AMD Ryzen 3 1300X 3.5 GHz or equivalent',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: NVIDIA GTX 780 3GB /AMD Radeon R9 285 2GB or equivalent',
            '◽Armazenamento: 96 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'sons-of-the-forest': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: 64-bit Windows 10',
            '◽Processador: INTEL CORE I5-8400 or AMD RYZEN 3 3300X',
            '◽Memória: 12 GB RAM',
            '◽Placa de vídeo: NVIDIA GeForce GTX 1060 3GB or AMD Radeon RX 570 4GB',
            '◽Armazenamento: 20 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'call-of-duty-black-ops': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows® Vista / XP / 7',
            '◽Processador: Intel® Core™2 Duo E6600 or AMD Phenom™ X3 8750 or better',
            '◽Memória: 2 GB RAM',
            '◽Placa de vídeo: Shader 3.0 or better 256MB NVIDIA® GeForce® 8600GT / ATI Radeon® X1950Pro or better',
            '◽Armazenamento: 12 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'call-of-duty-black-ops-ii': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows Vista SP2 ou Windows 7',
            '◽Processador: Intel Core2 Duo E8200 2.66 GHz ou AMD Phenom X3 8750 2.4 GHz',
            '◽Memória: 2 GB (32-bit) ou 4 GB (64-bit)',
            '◽Placa de vídeo: Nvidia GeForce 8800GT 512 MB ou ATI Radeon HD 3870 512 MB',
            '◽DirectX: Versão 9.0c',
            '◽Armazenamento: 16 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'call-of-duty-black-ops-iii': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 7 / 8 / 8.1 64-Bit',
            '◽Processador: Intel Core i3-530 2.93 GHz ou AMD Phenom II X4 810 2.60 GHz',
            '◽Memória: 6 GB RAM',
            '◽Placa de vídeo: GeForce GTX 470 1 GB ou ATI Radeon HD 6970 1 GB',
            '◽DirectX: Versão 11',
            '◽Armazenamento: 100 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'resident-evil-4-2005': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação.',
            '✅ Produto digital — acesse diretamente na sua Steam, sem risco.',
            '✅ Conta compartilhada.',
            '✅ Nunca perde o acesso.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10',
            '◽Processador: Intel Core 2 Duo 2.4 GHz ou AMD Athlon X2 2.8 GHz',
            '◽Memória: 2 GB RAM',
            '◽Placa de vídeo: NVIDIA GeForce 8800GTS ou superior',
            '◽DirectX: Versão 9.0c',
            '◽Armazenamento: 15 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'schedule-i': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 64-bit',
            '◽Processador: 3GHz 4-Core ou similar',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: GeForce GTX 1060 ou Radeon RX 580',
            '◽Armazenamento: 8 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'riders-republic': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 64-bit',
            '◽Processador: Intel i5-4460 ou AMD Ryzen 5 1400',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: GeForce GTX 970 4GB ou AMD RX 470 4GB',
            '◽DirectX: Versão 12',
            '◽Armazenamento: 20 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'crash-bandicoot-n-sane-trilogy': {
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 7',
            '◽Processador: Intel Core i5-750 2.67 GHz ou AMD Phenom II X4 965 3.4 GHz',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: GeForce GTX 660 2GB ou AMD Radeon HD 7850 2GB',
            '◽DirectX: Versão 9.0c',
            '◽Armazenamento: 30 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'nioh-2-the-complete-edition': {
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 64-bit',
            '◽Processador: Intel Core i5 4460 ou superior',
            '◽Memória: 6 GB RAM',
            '◽Placa de vídeo: GeForce GTX 970 4GB ou Radeon R9 290 4GB',
            '◽DirectX: Versão 11',
            '◽Armazenamento: 85 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'assetto-corsa': {
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 7 SP1 / 8 / 8.1 / 10',
            '◽Processador: AMD Athlon X2 2.8 GHz ou Intel Core 2 Duo 2.4 GHz',
            '◽Memória: 2 GB RAM',
            '◽Placa de vídeo: DirectX 10.1 (Radeon HD 6450 / GeForce GT 460 ou similar)',
            '◽DirectX: Versão 11',
            '◽Armazenamento: 15 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'car-mechanic-simulator-2021': {
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 8.1 / 10 64-bit',
            '◽Processador: Intel Core i5 4690 ou AMD Ryzen 5 1500X',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: NVIDIA GeForce GTX 760 2GB',
            '◽DirectX: Versão 11',
            '◽Armazenamento: 35 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'farming-simulator-22': {
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 Home 64-bit',
            '◽Processador: Intel Core i5-3330 ou AMD FX-8320',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: GeForce GTX 660 ou AMD Radeon R7 265 (mín. 2GB VRAM)',
            '◽DirectX: Versão 11',
            '◽Armazenamento: 35 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },

    'project-zomboid': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10, 64 Bit, 64bit OS required',
            '◽Processador: Intel 2.77GHz Quad-core',
            '◽Memória: 8 GB RAM',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'naruto-shippuden-ultimate-ninja-storm-4': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows (64bit) 7 or higher up to date',
            '◽Processador: Intel Core2 Duo, 3.0GHz - AMD Athlon 64 X2 Dual Core 6400+ 3.2GHz',
            '◽Memória: 2 GB RAM',
            '◽Placa de vídeo: 1024 MB video card',
            '◽Armazenamento: 40 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'naruto-x-boruto-ultimate-ninja-storm-connections': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10',
            '◽Processador: Intel Core i7-8700 / AMD Ryzen 7 2700X',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: Nvidia GeForce GTX 660 Ti / Radeon R9 270X / Intel Arc A380',
            '◽Armazenamento: 30.36 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'watch-dogs-todas-as-dlcs': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Originally released for Windows 7, the game can be played on Windows 10 and Windows 11 OS',
            '◽Processador: Intel Core 2 Quad Q8400 @ 2.66Ghz or AMD Phenom II X4 940 @ 3.0Ghz',
            '◽Memória: 6 GB RAM',
            '◽Placa de vídeo: DirectX 11 graphics card with 1 GB Video RAM - Nvidia Geforce GTX 460 or AMD Radeon HD 5770',
            '◽Armazenamento: 25 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'watch-dogs-2-todas-as-dlcs': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Originally released for Windows 7, the game can be played on Windows 10 and Windows 11 OS',
            '◽Processador: Intel Core i5 2400s @ 2.5 GHz, AMD FX 6120 @ 3.5 GHz or better',
            '◽Memória: 6 GB RAM',
            '◽Placa de vídeo: NVIDIA GeForce GTX 660 with 2 GB VRAM or AMD Radeon HD 7870, with 2 GB VRAM or better - See supported List*',
            '◽Armazenamento: 27 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'watch-dogs-legion-todas-as-dlcs': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 (64-bit versions)',
            '◽Processador: Intel Core i5-4460 or AMD Ryzen 5 1400 290X',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: NVIDIA GeForce GTX 970, NVIDIA GeForce GTX 1650, or AMD Radeon R9 290X',
            '◽DirectX: 12',
            '◽Armazenamento: 115 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'the-elder-scrolls-v-skyrim-special-edition': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '▫️Sistema: Windows 7/8.1/10 (64-bit Version)',
            '▫️Processador: Intel i5-750/AMD Phenom II X4-945',
            '▫️Memória: 8 GB RAM',
            '▫️Placa de vídeo: NVIDIA GTX 470 1GB /AMD HD 7870 2GB',
            '▫️Armazenamento: 12 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'mortal-kombat-11': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
            '❌ Atenção: Modo Online desabilitado.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: 64-bit Windows 7 / Windows 10',
            '◽Processador: Intel Core i5-750, 2.66 GHz / AMD Phenom II X4 965, 3.4 GHz or AMD Ryzen™ 3 1200, 3.1 GHz',
            '◽Memória: 8 GB RAM',
            '◽Placa de vídeo: NVIDIA® GeForce™ GTX 670 or NVIDIA® GeForce™ GTX 1050 / AMD® Radeon™ HD 7950 or AMD® Radeon™ R9 270',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'starfield': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 version 21H1 (10.0.19043)',
            '◽Processador: AMD Ryzen 5 2600X, Intel Core i7-6800K',
            '◽Memória: 16 GB RAM',
            '◽Placa de vídeo: AMD Radeon RX 5700, NVIDIA GeForce 1070 Ti',
            '◽Armazenamento: 125 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'beamng-drive': {
        highlights: [
            '✅ Envio imediato após confirmação da compra.',
            '✅ Estoque real e disponível para ativação instantânea.',
            '✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.',
            '✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.',
            '❌ Não é conta compartilhada, nem acesso temporário.',
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            '◽Sistema: Windows 10 64 Bit',
            '◽Processador: AMD FX 6300 3.5Ghz / Intel Core i3-6300 3.8Ghz',
            '◽Memória: 16 GB RAM',
            '◽Placa de vídeo: Radeon HD 7750 / Nvidia GeForce GTX 550 Ti',
            '◽Armazenamento: 55 GB disponíveis',
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'uncharted-legacy-of-thieves-collection': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 64-bit",
            "◽Processador: Intel i5-4430 / AMD Ryzen 3 1200",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GTX 960 (4 GB) / AMD R9 290X (4 GB)",
            "◽DirectX: Versão 12",
            "◽Armazenamento: 126 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'detroit-become-human': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 (64 bit)",
            "◽Processador: Intel Core i5-2300 @ 2.8 GHz / AMD Ryzen 3 1200 @ 3.1 GHz / AMD FX-8350 @ 4.2 GHz",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: Nvidia GeForce GTX 780 ou AMD HD 7950 com 3 GB VRAM (Vulkan 1.1)",
            "◽Armazenamento: 55 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'roadcraft': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
             "❌ Atenção: Modo Online desabilitado.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 (18362 min)/11 64-bit",
            "◽Processador: AMD Ryzen 5 1500X / Intel Core i5-8400",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: AMD Radeon RX 590 / Nvidia GeForce GTX 1060 / Intel ARC A580 (6 GB VRAM)",
            "◽Armazenamento: 40 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'far-cry-3': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows XP / Windows Vista",
            "◽Processador: Intel Core 2 Duo E6700 @ 2.6 GHz ou AMD Athlon64 X2 6000+ @ 3.0 GHz",
            "◽Memória: 4 GB RAM",
            "◽Placa de vídeo: 512 MB VRAM (1 GB recomendado), DirectX 9c / Shader Model 3.0",
            "◽DirectX: Versão 9.0c",
            "◽Armazenamento: 15 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'far-cry-4': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 (64-bit)",
            "◽Processador: Intel Core i5-750 2.6 GHz ou AMD Phenom II X4 955 3.2 GHz",
            "◽Memória: 4 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 460 ou AMD Radeon HD 5850 (1 GB VRAM)",
            "◽DirectX: Versão 11",
            "◽Armazenamento: 30 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'far-cry-5': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Atenção: Modo Online desabilitado.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 7 SP1 / 8.1 / 10 (64-bit)",
            "◽Processador: Intel Core i5-2400 @ 3.1 GHz ou AMD FX-6300 @ 3.5 GHz",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 670 ou AMD R9 270 (2 GB VRAM)",
            "◽DirectX: Versão 9.0",
            "◽Armazenamento: 40 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'baldurs-gate-3': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 64-bit",
            "◽Processador: Intel i5 4690 / AMD FX 8350 / Snapdragon X Elite",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: Nvidia GTX 970 / RX 480 / Intel Arc A380 (4 GB+ VRAM)",
            "◽DirectX: Versão 11",
            "◽Armazenamento: 150 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'resident-evil-7-biohazard': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: WINDOWS® 10 (64-BIT Required)",
            "◽Processador: Intel® Core™ i5-4460, 2.70GHz ou AMD FX™-6300 ou superior",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA® GeForce® GTX 960 ou AMD Radeon™ RX 460",
            "◽DirectX: Versão 12",
            "◽Armazenamento: 24 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'resident-evil-2': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: WINDOWS® 10 (64-BIT Required)",
            "◽Processador: Intel® Core™ i5-4460 ou AMD FX™-6300 ou superior",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA® GeForce® GTX 960 ou AMD Radeon™ RX 460",
            "◽DirectX: Versão 12",
            "◽Armazenamento: 26 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'resident-evil-3': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "✅ Conta compartilhada.",
            "✅ Nunca perde o acesso.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: WINDOWS® 10 (64-BIT Required)",
            "◽Processador: Intel® Core™ i5-4460 ou AMD FX™-6300 ou superior",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA® GeForce® GTX 960 ou AMD Radeon™ RX 460",
            "◽DirectX: Versão 12",
            "◽Armazenamento: 45 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'resident-evil-village': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 (64 bit)",
            "◽Processador: AMD Ryzen 3 1200 / Intel Core i5-7500",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: AMD Radeon RX 560 4 GB / NVIDIA GeForce GTX 1050 Ti 4 GB",
            "◽DirectX: Versão 12",
            "◽Armazenamento: 50 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'grand-theft-auto-iv-the-complete-edition': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 (64-bit)",
            "◽Processador: Intel Core 2 Duo 1.8 GHz ou AMD Athlon X2 64 2.4 GHz",
            "◽Memória: 1.5 GB RAM",
            "◽Placa de vídeo: NVIDIA 7900 256 MB / ATI X1900 256 MB",
            "◽DirectX: Versão 9.0c",
            "◽Armazenamento: 22 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'marvels-spider-man-remastered': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 64-bit",
            "◽Processador: Intel Core i3-4160 3.6 GHz ou equivalente AMD",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GTX 950 ou AMD Radeon RX 470",
            "◽DirectX: Versão 12",
            "◽Armazenamento: 75 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'marvels-spider-man-miles-morales': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 64-bit 1909",
            "◽Processador: Intel Core i3-4160 3.6 GHz ou equivalente AMD",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GTX 950 ou AMD Radeon RX 470",
            "◽DirectX: Versão 12",
            "◽Armazenamento: 75 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'assassins-creed-iii': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 7 SP1 / 8.1 / 10 (64-bit)",
            "◽Processador: Intel Core i5 2400 @ 3.1 GHz ou AMD FX 6350 @ 3.9 GHz",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: Nvidia GeForce GTX 660 ou AMD Radeon R9 270X (2 GB VRAM)",
            "◽DirectX: Versão 11",
            "◽Armazenamento: 45 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'assassins-creed-unity': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 (64-bit)",
            "◽Processador: Intel Core i5-2500K @ 3.3 GHz ou AMD FX-8350 @ 4.0 GHz",
            "◽Memória: 6 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 680 ou AMD Radeon HD 7970 (2 GB VRAM)",
            "◽Armazenamento: 50 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'assassins-creed-mirage': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10/11",
            "◽Processador: Intel Core i7-4790K / Intel Core i5-8400 (Intel Arc) / Ryzen 5 1600",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: Intel Arc A380 6 GB / NVIDIA GeForce GTX 1060 6 GB / AMD Radeon RX 570 4 GB",
            "◽DirectX: Versão 12",
            "◽Armazenamento: 40 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'assassins-creed-origins': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 (64-bit)",
            "◽Processador: Intel Core i5-2400s @ 2.5 GHz ou AMD FX-6350 @ 3.9 GHz",
            "◽Memória: 6 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 660 ou AMD R9 270 (2048 MB VRAM)",
            "◽DirectX: Versão 11",
            "◽Armazenamento: 42 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'assassins-creed-odyssey': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 (64bit)",
            "◽Processador: AMD FX 6300 @ 3.8 GHz / Ryzen 3 1200 / Intel Core i5 2400 @ 3.1 GHz",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: AMD Radeon R9 285 ou NVIDIA GeForce GTX 660 (2 GB VRAM)",
            "◽DirectX: Versão 11",
            "◽Armazenamento: 46 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'assassins-creed-iv-black-flag': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 / 11",
            "◽Processador: Intel Core i5-2400S @ 2.5 GHz ou AMD Phenom II x4 940 @ 3.0 GHz",
            "◽Memória: 4 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 260 ou AMD Radeon HD 4870 (512 MB)",
            "◽DirectX: Versão 11",
            "◽Armazenamento: 30 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'red-dead-redemption': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 64-Bit",
            "◽Processador: Intel® Core™ i5-4670 / AMD FX-9590",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 960 / AMD Radeon R7 360",
            "◽DirectX: Versão 12",
            "◽Armazenamento: 12 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'shadow-of-the-tomb-raider-definitive-edition': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 7 64 bit",
            "◽Processador: Intel Core i7 4770K 3.40 GHz ou AMD Ryzen 5 1600 3.20 GHz",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GTX 1060 6 GB ou AMD Radeon RX 480 8 GB",
            "◽DirectX: Versão 12",
            "◽Armazenamento: 40 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'sekiro-shadows-die-twice-goty-edition': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 7 64-bit / Windows 8 64-bit / Windows 10 64-bit",
            "◽Processador: Intel Core i3-2100 ou AMD FX-6300",
            "◽Memória: 4 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 760 ou AMD Radeon HD 7950",
            "◽DirectX: Versão 11",
            "◽Armazenamento: 25 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'dark-souls-remastered': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 7 64-bit, Service Pack 1",
            "◽Processador: Intel Core i5-2300 2.8 GHz / AMD FX-6300 3.5 GHz",
            "◽Memória: 6 GB RAM",
            "◽Placa de vídeo: GeForce GTX 460 1 GB / Radeon HD 6870 1 GB",
            "◽DirectX: Versão 11",
            "◽Armazenamento: 8 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'dark-souls-iii': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 7 SP1 64bit / Windows 8.1 64bit / Windows 10 64bit",
            "◽Processador: Intel Core i3-2100 / AMD FX-6300",
            "◽Memória: 4 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 750 Ti / ATI Radeon HD 7950",
            "◽DirectX: Versão 11",
            "◽Armazenamento: 25 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'dark-souls-ii': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows Vista SP2 / Windows 7 SP1 / Windows 8",
            "◽Processador: AMD Phenom II X2 555 3.2 GHz ou Intel Pentium Core 2 Duo E8500 3.17 GHz",
            "◽Memória: 2 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce 9600GT ou ATI Radeon HD 5870",
            "◽DirectX: Versão 9.0c",
            "◽Armazenamento: 12 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },

    '171': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 64-bit",
            "◽Processador: Intel Core i5-8400 / AMD Ryzen 5 1400",
            "◽Memória: 16 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 1060 6 GB / AMD Radeon RX 580 8 GB",
            "◽Armazenamento: 35 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'death-stranding-directors-cut': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10",
            "◽Processador: Intel Core i5-3470 ou AMD Ryzen 3 1200",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: GeForce GTX 1050 4 GB ou AMD Radeon RX 560 4 GB",
            "◽DirectX: Versão 12",
            "◽Armazenamento: 80 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'dragon-ball-sparking-zero': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10",
            "◽Processador: Intel Core i7-9700K / AMD Ryzen 5 3600",
            "◽Memória: 12 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce RTX 2060 / AMD Radeon RX 6600",
            "◽Armazenamento: 29 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'horizon-zero-dawn-complete-edition': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 64-bit",
            "◽Processador: Intel Core i5-2500K / AMD Ryzen 3 1300X",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 780 3 GB / AMD Radeon RX 470 4 GB",
            "◽Armazenamento: 100 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'horizon-forbidden-west-complete-edition': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 64-bit (version 1909 or higher)",
            "◽Processador: Intel Core i3-8100 / AMD Ryzen 3 1300X",
            "◽Memória: 16 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 1650 4 GB / AMD Radeon RX 5500 XT 4 GB",
            "◽Armazenamento: 150 GB disponíveis (SSD recomendado)",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'devil-may-cry-5': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 7 / 8.1 / 10 (64-bit)",
            "◽Processador: Intel Core i5-4460 / AMD FX-6300",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 760 / AMD Radeon R7 260x",
            "◽DirectX: Versão 11",
            "◽Armazenamento: 35 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'bleach-rebirth-of-souls': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 / 11",
            "◽Processador: Intel Core i7-9700K / AMD Ryzen 5 3600",
            "◽Memória: 16 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce RTX 2070 / AMD Radeon RX 5700 XT",
            "◽DirectX: Versão 12",
            "◽Armazenamento: 75 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'dying-light-2-stay-human-reloaded-edition': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 64-bit",
            "◽Processador: Intel Core i3-9100 / AMD Ryzen 3 2300X",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 560 4 GB",
            "◽Armazenamento: 60 GB disponíveis (SSD recomendado)",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'stray': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10",
            "◽Processador: Intel Core i5-2300 / AMD FX-6350",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 650 Ti 2 GB / AMD Radeon R7 360 2 GB",
            "◽Armazenamento: 10 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'split-fiction': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 / 11 64-bit",
            "◽Processador: Intel Core i5-6600K / AMD Ryzen 5 2600X",
            "◽Memória: 16 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 970 / AMD Radeon RX 470",
            "◽Armazenamento: 85 GB disponíveis (SSD recomendado)",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'ark-survival-ascended': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 / 11 64-bit",
            "◽Processador: AMD Ryzen 5 2600X / Intel Core i7-6800K",
            "◽Memória: 16 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 1080 / AMD Radeon RX 5700",
            "◽DirectX: Versão 12",
            "◽Armazenamento: 70 GB disponíveis (SSD obrigatório)",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'farming-simulator-25': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 64bit",
            "◽Processador: Intel Core i5-6400, AMD Ryzen 5 1400, ou superior",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: Nvidia GeForce GTX 1050Ti, AMD Radeon RX 470 ou superior (mín. 3 GB VRAM, suporte a DX12)",
            "◽DirectX: Versão 12",
            "◽Armazenamento: 45 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'silent-hill-2': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 x64",
            "◽Processador: Intel Core i7-6700K / AMD Ryzen 5 3600",
            "◽Memória: 16 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 1070 Ti / AMD Radeon RX 5700",
            "◽Armazenamento: 50 GB disponíveis (SSD recomendado)",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'subnautica': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows Vista SP2 ou posterior (64-bit)",
            "◽Processador: Intel Haswell 2 cores / 4 threads 2.5 GHz ou equivalente",
            "◽Memória: 4 GB RAM",
            "◽Placa de vídeo: Intel HD 4600 ou melhor",
            "◽Armazenamento: 20 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'elden-ring-nightreign': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10",
            "◽Processador: Intel Core i5-10600 / AMD Ryzen 5 5500",
            "◽Memória: 12 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 1060 3 GB / AMD Radeon RX 580 4 GB",
            "◽DirectX: Versão 12",
            "◽Armazenamento: 30 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'need-for-speed-most-wanted': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows Vista (Service Pack 2 e todas as atualizações disponíveis)",
            "◽Processador: Intel Core 2 Duo 2.4 GHz / AMD Athlon X2 2.7 GHz",
            "◽Memória: 2 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce 8800 GTS / ATI Radeon HD 3870",
            "◽DirectX: Versão 10.1",
            "◽Armazenamento: 20 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'forza-horizon-5': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 versão 15063.0 ou superior",
            "◽Processador: Intel Core i5-4460 / AMD Ryzen 3 1200",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 970 / AMD Radeon RX 470",
            "◽DirectX: Versão 12",
            "◽Armazenamento: 110 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'forza-horizon-4': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 versão 15063.0 ou superior",
            "◽Processador: Intel Core i3-4170 / AMD Ryzen 3 1300X",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 650 Ti / AMD Radeon R7 250X",
            "◽DirectX: Versão 12",
            "◽Armazenamento: 80 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'stalker-2-heart-of-chornobyl': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 x64 / Windows 11 x64",
            "◽Processador: AMD Ryzen 5 1600X / Intel Core i5-7600K",
            "◽Memória: 16 GB RAM",
            "◽Placa de vídeo: AMD Radeon RX 580 8 GB / NVIDIA GeForce GTX 1060 6 GB",
            "◽Armazenamento: 160 GB disponíveis (SSD obrigatório)",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'metal-gear-solid-v-the-phantom-pain': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 7 x64 / Windows 8 x64 (64-bit OS Required)",
            "◽Processador: Intel Core i5-4460 (3.40 GHz) ou superior",
            "◽Memória: 4 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 650 (2 GB) ou superior",
            "◽DirectX: Versão 11",
            "◽Armazenamento: 28 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'metro-exodus': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 7 / 8 / 10",
            "◽Processador: Intel Core i5-4440 / AMD Ryzen 3 1200",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 670 / GTX 1050 / AMD Radeon HD 7870",
            "◽DirectX: Versão 11",
            "◽Armazenamento: 59 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'the-elder-scrolls-iv-oblivion-remastered': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 64-bit",
            "◽Processador: AMD Ryzen 5 2600X / Intel Core i7-6800K",
            "◽Memória: 16 GB RAM",
            "◽Placa de vídeo: AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070 Ti",
            "◽Armazenamento: 125 GB disponíveis (SSD recomendado)",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'ready-or-not': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 64-bit",
            "◽Processador: Intel Core i5-4430 / AMD Ryzen 5 1600",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 960 2 GB / AMD Radeon RX 570 4 GB",
            "◽Armazenamento: 60 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'the-walking-dead-survival-instinct': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows XP Service Pack 3",
            "◽Processador: Intel Core 2 Duo E4600 / AMD Athlon 64 X2 5600",
            "◽Memória: 2 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTS 250 / ATI Radeon HD 4850",
            "◽Armazenamento: 8 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'rise-of-the-tomb-raider': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 7 64-bit",
            "◽Processador: Intel Core i3-2100 / AMD equivalent",
            "◽Memória: 6 GB RAM",
            "◽Placa de vídeo: NVIDIA GTX 650 2 GB / AMD HD 7770 2 GB",
            "◽DirectX: Versão 11",
            "◽Armazenamento: 25 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'crash-bandicoot-4-it-s-about-time': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10",
            "◽Processador: Intel Core i3-4340 / AMD FX-6300",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GTX 660 / AMD Radeon HD 7950",
            "◽Armazenamento: 30 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'phasmophobia': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 64-bit",
            "◽Processador: Intel Core i5-4590 / AMD Ryzen 5 2600",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GTX 970 / AMD Radeon R9 390",
            "◽DirectX: Versão 11",
            "◽Armazenamento: 21 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'the-evil-within-2': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 7 / 8.1 / 10 (64-bit)",
            "◽Processador: Intel Core i5-2400 / AMD FX-8320",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 660 2 GB / AMD Radeon HD 7970 3 GB",
            "◽Armazenamento: 40 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'the-evil-within': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 7 SP1 / 8.1 (64-bit)",
            "◽Processador: Intel Core i7 com quatro núcleos ou equivalente",
            "◽Memória: 4 GB RAM",
            "◽Placa de vídeo: GeForce GTX 460 / Radeon HD 6850",
            "◽Armazenamento: 50 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'need-for-speed-heat': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10",
            "◽Processador: FX-6350 ou equivalente / Core i5-3570 ou equivalente",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: Radeon 7970/R9 280x ou equivalente; GeForce GTX 760 ou equivalente",
            "◽DirectX: Versão 11",
            "◽Armazenamento: 50 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'mafia-definitive-edition': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 10 64-bit",
            "◽Processador: Intel Core i5-2550K / AMD FX-8120",
            "◽Memória: 6 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 660 / AMD Radeon HD 7870",
            "◽DirectX: Versão 11",
            "◽Armazenamento: 50 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'mafia-ii-definitive-edition': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 8.1 64-bit",
            "◽Processador: Intel Core i5-2500K / AMD FX-8120",
            "◽Memória: 6 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 660 / AMD Radeon HD 7870",
            "◽Armazenamento: 50 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'mafia-iii-definitive-edition': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: '⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.',
        minimumRequirements: [
            "◽Sistema: Windows 7 64-bit",
            "◽Processador: Intel Core i5-2500K / AMD FX-8120",
            "◽Memória: 6 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 660 / AMD Radeon HD 7870",
            "◽Armazenamento: 50 GB disponíveis",
        ],
        requirementsNote: '(Os requisitos podem variar conforme atualizações oficiais da Steam.)',
    },
    'hitman-world-of-assassination': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: OS 64-bit Windows 10",
            "◽Processador: Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 660 / Radeon HD 7870",
            "◽DIRECTX: Versão 12",
            "◽Armazenamento: 60 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'hitman-absolution': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows Vista, 7",
            "◽Processador: True dual core CPU (Intel, AMD)",
            "◽Memória: 2 GB RAM",
            "◽Placa de vídeo: NV8600 512 Mb RAM, or AMD equivalent",
            "◽DIRECTX: Versão 10",
            "◽Armazenamento: 24 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'fallout-4': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 7/8/10 (64-bit OS required)",
            "◽Processador: Intel Core i5-2300 2.8 GHz/AMD Phenom II X4 945 3.0 GHz or equivalent",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GTX 550 Ti 2GB/AMD Radeon HD 7870 2GB or equivalent",
            "◽Armazenamento: 30 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'saint-seiya-soldiers-soul': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows Vista / 7 / 8 / 8.1",
            "◽Processador: Intel Core 2 Duo 2.4 GHz / AMD Athlon 64 X2 5200+ 2.6 GHz",
            "◽Memória: 1 GB RAM",
            "◽Placa de vídeo: GeForce 8800 / ATI Radeon HD 3870",
            "◽Armazenamento: 12 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'valheim': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 10 or later",
            "◽Processador: 2.6 GHz Quad Core or similar",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: GeForce GTX 950 or Radeon HD 7970",
            "◽Armazenamento: 1 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'ultrakill': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 10",
            "◽Processador: 2.4 GHz Dual Core Processor Or Higher",
            "◽Memória: 4 GB RAM",
            "◽Placa de vídeo: GeForce GTX 560 Or Equivalent",
            "◽Armazenamento: 3 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'five-nights-at-freddys-help-wanted': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 8",
            "◽Processador: Intel i5-4590 or greater / AMD FX 8350 or greater",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 970 / AMD R9 390",
            "◽Armazenamento: 11 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'lossless-scaling': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do software antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 10 version 2004",
            "◽Placa de vídeo: Modern integrated graphics",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'sifu': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 8.1",
            "◽Processador: AMD FX-4350 or Intel Core i5-3470 or equivalent",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: Radeon R7 250 or GeForce GT 640 or equivalent",
            "◽Armazenamento: 22 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'stardew-valley': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows Vista or greater",
            "◽Processador: 2 Ghz",
            "◽Memória: 2 GB RAM",
            "◽Placa de vídeo: 256 mb video memory, shader model 3.0+",
            "◽Armazenamento: 500 MB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'tony-hawks-pro-skater-1-plus-2': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 10",
            "◽Processador: AMD FX 6300 / Intel Core i3-4340",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: AMD HD 7950 / Nvidia GTX 660",
            "◽Armazenamento: 24 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'sonic-mania': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 7 / 8 / 10",
            "◽Processador: Core 2 Duo",
            "◽Memória: 2 GB RAM",
            "◽Placa de vídeo: DirectX 9.0c compliant video card 256MB",
            "◽Armazenamento: 400 MB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'cuphead': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 7",
            "◽Processador: Intel Core2 Duo E8400, 3.0GHz or AMD Athlon 64 X2 6000+, 3.0GHz or higher",
            "◽Memória: 3 GB RAM",
            "◽Placa de vídeo: Geforce 9600 GT or AMD HD 3870 512MB or higher",
            "◽Armazenamento: 4 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'hollow-knight': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 7 (64bit)",
            "◽Processador: Intel Core 2 Duo E5200",
            "◽Memória: 4 GB RAM",
            "◽Placa de vídeo: GeForce 9800GTX+ (1GB)",
            "◽Armazenamento: 9 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'overcooked': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 7 (32-bit)",
            "◽Processador: Dual Core 2.4Ghz",
            "◽Memória: 2 GB RAM",
            "◽Placa de vídeo: GeForce 8800 GT / AMD HD 6850 / Intel HD Graphics 4400 or above",
            "◽Armazenamento: 750 MB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'humanitz': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 10",
            "◽Processador: Intel Core i5-8600K",
            "◽Memória: 16 GB RAM",
            "◽Placa de vídeo: Nvidia GTX 1060",
            "◽Armazenamento: 20 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'palworld': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 10 or later (64-Bit)",
            "◽Processador: i5-3570K 3.4 GHz 4 Core",
            "◽Memória: 16 GB RAM",
            "◽Placa de vídeo: GeForce GTX 1050 (2GB)",
            "◽Armazenamento: 40 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'devil-may-cry-4': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows XP / Windows Vista (32-bit or 64-bit)",
            "◽Processador: Intel Pentium 4 a 3.0 GHz or newer / AMD Athlon 64 3000+ or newer",
            "◽Memória: 1 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce 6600 / ATI Radeon X1600",
            "◽Armazenamento: 8 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'hitman-2-silent-assassin': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Microsoft Windows 98/ME/XP",
            "◽Processador: Pentium 3 450 MHz or equivalent",
            "◽Memória: 128 MB RAM",
            "◽Placa de vídeo: 100% DirectX 8.1 compatible video card with at least 16 megabytes of video memory",
            "◽Armazenamento: 800 MB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'left-4-dead-2': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows® 7 32/64-bit / Vista 32/64 / XP",
            "◽Processador: Pentium 4 3.0GHz",
            "◽Memória: 2 GB RAM",
            "◽Placa de vídeo: Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better",
            "◽Armazenamento: 13 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'internet-cafe-simulator': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 7",
            "◽Processador: 2 GHz Dual Core CPU",
            "◽Memória: 2 GB RAM",
            "◽Placa de vídeo: Intel HD Graphics 4000 or better",
            "◽Armazenamento: 4500 MB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'inside': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 10 (64-bit OS required)",
            "◽Processador: Intel Core 2 Quad Q6600 @ 2.4 GHz, AMD FX 8120 @ 3.1 GHz",
            "◽Memória: 4 GB RAM",
            "◽Placa de vídeo: NVIDIA GT 630 / 650m, AMD Radeon HD6570 or equivalent",
            "◽Armazenamento: 3 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'american-truck-simulator': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 10 64-bit",
            "◽Processador: Intel Core i5-6400 or AMD Ryzen 3 1200 or similar",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 660 or AMD Radeon RX 460 or Intel HD 630 (2GB VRAM)",
            "◽Armazenamento: 25 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'mortal-kombat-komplete-edition': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows Vista / Windows 7 / Windows 8",
            "◽Processador: Intel Core Duo 2.4 GHz or AMD Athlon X2 2.8 GHz",
            "◽Memória: 2 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce 8800 GTS / AMD Radeon 3850 with 512 MB VRAM",
            "◽Armazenamento: 10 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'sleeping-dogs': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows Vista Service Pack 2",
            "◽Processador: Core 2 Duo 2.4 GHz or Athlon X2 2.7 GHz",
            "◽Memória: 2 GB RAM",
            "◽Placa de vídeo: DirectX 10 or 11 compatible Nvidia or AMD ATI card, ATI Radeon 3870 or higher, Nvidia GeForce 8800 GT or higher",
            "◽Armazenamento: 15 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'the-witcher-3-wild-hunt': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: 64-bit Windows 7, 64-bit Windows 8 (8.1)",
            "◽Processador: Intel CPU Core i5-2500K 3.3GHz / AMD A10-5800K APU (3.8GHz)",
            "◽Memória: 6 GB RAM",
            "◽Placa de vídeo: Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870",
            "◽Armazenamento: 50 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'outlast': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows XP / Vista / 7 / 8 - 64 bits",
            "◽Processador: 2.2 GHz Dual Core CPU",
            "◽Memória: 2 GB RAM",
            "◽Placa de vídeo: 512 MB NVIDIA GeForce 9800GTX / ATI Radeon HD 3xxx series",
            "◽Armazenamento: 5 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'far-cry-primal': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 10 (64-bit versions only)",
            "◽Processador: Intel Core i3-550 | AMD Phenom II X4 955 or equivalent",
            "◽Memória: 4 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent",
            "◽Armazenamento: 20 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'bully-scholarship-edition': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 10",
            "◽Processador: Intel Pentium 4 (3+ GHZ) / AMD Athlon 3000+",
            "◽Memória: 1 GB RAM",
            "◽Placa de vídeo: DirectX 9.0c Shader 3.0 supported, Nvidia 6800 or 7300 or better, ATI Radeon X1300 or better",
            "◽Armazenamento: 4.7 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'hitman-blood-money': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Microsoft Windows® 2000/XP (Windows 95/98/ME/NT Not Supported)",
            "◽Processador: Pentium 4 1.5Ghz or Athlon XP Equivalent",
            "◽Memória: 512 MB RAM",
            "◽Placa de vídeo: 100% DirectX 9.0c compatible video card which supports Hardware TnL and Pixel Shader 2.0 (GeForce FX / Radeon 9500 or higher)",
            "◽Armazenamento: 5 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'lego-batman-the-videogame': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows Vista®/XP",
            "◽Processador: Intel® P3 1.5 GHz or AMD Athlon™ XP",
            "◽Memória: 256 MB RAM, 512 MB RAM required for Windows Vista®",
            "◽Placa de vídeo: 128 MB with Shader Model 2.0 capability (Shader Model 3.0 recommended)",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'hitman-codename-47': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Microsoft Windows 95/98/ME",
            "◽Processador: Pentium II 300 MHz",
            "◽Memória: 64 MB RAM",
            "◽Placa de vídeo: 100% DirectX 7.0a-compatible 3D Accelerated Card with 12MB VRAM",
            "◽DIRECTX: Versão 7.0a",
            "◽Armazenamento: 400 MB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'hitman-contracts': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 98/2000/ME/XP",
            "◽Processador: Pentium III 800MHz",
            "◽Memória: 256 MB RAM",
            "◽Placa de vídeo: 100% DirectX 8.1 compatible 3D accelerator video card with at least 32MB RAM",
            "◽DIRECTX: Versão 8.1",
            "◽Armazenamento: 2 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'hitman-go-definitive-edition': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows® XP SP2 and above",
            "◽Processador: Intel® Pentium® 4 or AMD® Athlon™ 64 X2",
            "◽Memória: 1 GB RAM",
            "◽Placa de vídeo: ATI™ Radeon™ X700 (256 MB) or NVidia Equivalent (256 MB) or better",
            "◽DIRECTX: Versão 9.0",
            "◽Armazenamento: 2 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'f1-2015': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 7 64 bit or Windows 8 64 bit",
            "◽Processador: Intel Core 2 Quad @ 3.0GHz or AMD Phenom II X4 @ 3.2GHz",
            "◽Memória: 4 GB RAM",
            "◽Placa de vídeo: Intel 4th Gen Iris Graphics or AMD HD5770 or NVIDIA GTS450",
            "◽DIRECTX: Versão 11",
            "◽Armazenamento: 20 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'f1-2016': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: 64bit Versions of Windows 7, Windows 8, Windows 10",
            "◽Processador: Intel Core i3 530 or AMD FX 4100",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: Nvidia GTX 460 or AMD HD 5870",
            "◽DIRECTX: Versão 11",
            "◽Armazenamento: 30 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'f1-2017': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: 64bit Versions of Windows 7, Windows 8, Windows 10",
            "◽Processador: Intel Core i3 530 or AMD FX 4100",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: Nvidia GTX 460 or AMD HD 5870",
            "◽DIRECTX: Versão 11",
            "◽Armazenamento: 40 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'f1-2018': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: 64bit Versions of Windows 7, Windows 8, Windows 10",
            "◽Processador: Intel Core i3 2130 or AMD FX 4300",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: Nvidia GT 640 or AMD HD 7750",
            "◽DIRECTX: Versão 11",
            "◽Armazenamento: 50 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'f1-2019': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: 64 bit Windows 10",
            "◽Processador: Intel Core i3 2130 / AMD FX 4300",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GT 640 / AMD HD 7750 (DirectX11 Graphics Card)",
            "◽Armazenamento: 70 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'f1-2020': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: 64 bit Windows 10",
            "◽Processador: Intel Core i3 2130 / AMD FX 4300",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GT 640 / AMD HD 7750 (DirectX11 Graphics Card)",
            "◽Armazenamento: 80 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'f1-2021': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 10 64-bit (Version 1709) | For Ray Tracing: Windows 10 64-bit (Version 2004)",
            "◽Processador: Intel Core i3-2130 or AMD FX 4300",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GTX 950 or AMD R9 280 | For Ray Tracing: GeForce RTX 2060 or Radeon RX 6700 XT",
            "◽DIRECTX: Versão 12",
            "◽Armazenamento: 80 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'f1-manager-2022': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 10 64-bit",
            "◽Processador: Intel Core i5-4590 or AMD FX-8370",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: Nvidia GeForce GTX 960 or AMD R9 280x (3GB VRAM)",
            "◽Armazenamento: 30 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'f1-manager-2023': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 10 64-bit",
            "◽Processador: Intel Core i5-4590 or AMD FX-8370",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: Nvidia GeForce GTX 960 or AMD R9 280x (3GB VRAM)",
            "◽Armazenamento: 30 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'pc-building-simulator': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 7 or higher",
            "◽Processador: Intel Core i5-2500K or AMD Athlon X4 740 (or equivalent)",
            "◽Memória: 4 GB RAM",
            "◽Placa de vídeo: GeForce GTX 660 (2048 MB) or Radeon R9 285 (2048 MB) - Integrated GPUs may work but are not supported",
            "◽DIRECTX: Versão 9.0c",
            "◽Armazenamento: 30 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'terraria': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: WINDOWS XP, VISTA, 7, 8/8.1, 10",
            "◽Processador: 2.0 GHZ",
            "◽Memória: 2.5 GB RAM",
            "◽Placa de vídeo: 128MB VIDEO MEMORY, CAPABLE OF SHADER MODEL 2.0+",
            "◽DIRECTX: 9.0C OR GREATER",
            "◽Armazenamento: 200 MB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'my-summer-car': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: 64bit versions of Windows 7, Windows 8, Windows 10",
            "◽Processador: +3 GHZ dual core processor",
            "◽Memória: 6 GB RAM",
            "◽Placa de vídeo: Nvidia GTX 960 or AMD equivalent",
            "◽DIRECTX: Versão 9.0",
            "◽Armazenamento: 1 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'my-winter-car': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: 7",
            "◽Processador: Intel I5 or equivalent",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 1070",
            "◽DIRECTX: Versão 11",
            "◽Armazenamento: 1 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'ark-survival-evolved': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 7/8.1/10 (64-bit versions)",
            "◽Processador: Intel Core i5-2400/AMD FX-8320 or better",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GTX 670 2GB/AMD Radeon HD 7870 2GB or better",
            "◽DIRECTX: Versão 10",
            "◽Armazenamento: 60 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'thief-simulator': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 7",
            "◽Processador: Intel Core i5",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVidia GeForce GTX 750",
            "◽DIRECTX: Versão 10",
            "◽Armazenamento: 5 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'thief-simulator-2': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 7",
            "◽Processador: Intel Core i3-6100 or equivalent",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVidia GeForce GTX 960 or equivalent",
            "◽DIRECTX: Versão 10",
            "◽Armazenamento: 12 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'contraband-police': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 10 (64-bit versions only)",
            "◽Processador: Intel Core i5-6600 @ 3.3 GHz or AMD Ryzen 5 1600 @ 3.2 GHz or equivalent",
            "◽Memória: 12 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 1050 or AMD RX 560 (3GB VRAM with Shader Model 5.0 or better)",
            "◽DIRECTX: Versão 11",
            "◽Armazenamento: 12 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'quarantine-zone-the-last-check': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 10 x64 Bit",
            "◽Processador: Intel Core i7-5820K / AMD FX-8370",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: GeForce GTX 980 / Radeon RX 470 / Arc A380",
            "◽DIRECTX: Versão 12",
            "◽Armazenamento: 12 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'tomb-raider': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows XP Service Pack 3, Windows Vista, 7, 8 (32bit/64bit)",
            "◽Processador: Dual core CPU: AMD Athlon64 X2 2.1 Ghz (4050+), Intel Core2 Duo 1.86 Ghz (E6300)",
            "◽Memória: 1 GB RAM",
            "◽Placa de vídeo: DirectX 9 graphics card with 512Mb Video RAM: AMD Radeon HD 2600 XT, nVidia 8600",
            "◽Armazenamento: 12 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'just-cause-3': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Vista SP2 / Windows 7.1 SP1 / Windows 8.1 (64-bit Operating System Required)",
            "◽Processador: Intel Core i5-2500k, 3.3GHz / AMD Phenom II X6 1075T 3GHz",
            "◽Memória: 8 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce GTX 670 (2GB) / AMD Radeon HD 7870 (2GB)",
            "◽Armazenamento: 54 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'rayman-origins': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows® XP / Windows Vista® (only)",
            "◽Processador: 3.0 GHz Intel® Pentium® 4 or 1.8 GHz AMD Athlon™ 64 3000+",
            "◽Memória: 1 GB Windows XP / 1.5 GB Windows Vista",
            "◽Placa de vídeo: 128 MB DirectX® 9.0c-compliant video card or higher* (see supported list)",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'manhunt': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Microsoft® Windows® 2000/XP Only",
            "◽Processador: 1GHz Intel Pentium III or AMD Athlon processor or equivalent",
            "◽Memória: 192 MB RAM",
            "◽Placa de vídeo: 32 MB 3D card",
            "◽Armazenamento: 2.3 GB uncompressed free hard disk space",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'devil-may-cry-3-special-edition': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 2000 / XP / Vista / 7 / 8 / 10",
            "◽Processador: Intel Pentium III 1.0 GHz ou AMD Athlon XP or equivalent",
            "◽Memória: 256 MB RAM",
            "◽Placa de vídeo: DirectX 9.0c compatible (with at least 128 MB VRAM)",
            "◽Armazenamento: 1.2 GB",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'limbo': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows XP, Vista, 7",
            "◽Processador: 2 GHz",
            "◽Memória: 512 MB RAM",
            "◽Placa de vídeo: Deve ter sido lançada há 5 anos ou menos. Gráficos integrados e placas de baixo custo podem não funcionar. A placa precisa ter suporte ao Shader Model 3.0.",
            "◽Armazenamento: 150 MB",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'raft': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 7 or later",
            "◽Processador: Intel Core i5 2.6GHz or similar",
            "◽Memória: 6 GB RAM",
            "◽Placa de vídeo: GeForce GTX 700 series or similar",
            "◽Armazenamento: 10 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
    'the-forest': {
        highlights: [
            "✅ Envio imediato após confirmação da compra.",
            "✅ Estoque real e disponível para ativação instantânea.",
            "✅ Passo a passo completo incluso, com instruções simples para ativação na sua conta Steam.",
            "✅ Produto digital — ative diretamente em sua biblioteca Steam, sem risco e sem compartilhamento de contas.",
            "❌ Não é conta compartilhada, nem acesso temporário.",
            "❌ Atenção: Modo Online desabilitado.",
        ],
        warning: "⭕ Atenção: verifique os requisitos mínimos e recomendados do jogo antes de comprar.",
        minimumRequirements: [
            "◽Sistema: Windows 7",
            "◽Processador: Intel Dual-Core 2.4 GHz",
            "◽Memória: 4 GB RAM",
            "◽Placa de vídeo: NVIDIA GeForce 8800GT",
            "◽DIRECTX: Versão 9.0",
            "◽Armazenamento: 5 GB disponíveis",
        ],
        requirementsNote: "(Os requisitos podem variar conforme atualizações oficiais da Steam.)",
    },
};

let homeMainContentMarkup = '';
const HOME_SCROLL_RESTORE_KEY = 'callofstore-home-scroll-restore-slug';
let shouldRestoreHomeScroll = false;
let suppressNextHomeScrollRestore = false;
let activeRouteType = 'home';

function saveHomeScrollRestoreSlug(slug) {
    if (!slug) return;

    try {
        sessionStorage.setItem(HOME_SCROLL_RESTORE_KEY, slug);
    } catch (error) {
        // ignore storage errors
    }
}

function getHomeScrollRestoreSlug() {
    try {
        return sessionStorage.getItem(HOME_SCROLL_RESTORE_KEY) || '';
    } catch (error) {
        return '';
    }
}

function restoreHomeScrollPosition() {
    if (!shouldRestoreHomeScroll || suppressNextHomeScrollRestore) {
        shouldRestoreHomeScroll = false;
        suppressNextHomeScrollRestore = false;
        return;
    }

    const slug = getHomeScrollRestoreSlug();
    if (!slug) {
        shouldRestoreHomeScroll = false;
        return;
    }

    requestAnimationFrame(() => {
        const productCard = document.querySelector(`.product-card[data-slug="${slug}"]`);
        if (!productCard) {
            shouldRestoreHomeScroll = false;
            return;
        }

        const header = document.querySelector('.header');
        const headerOffset = header ? header.offsetHeight : 0;
        const cardTop = productCard.getBoundingClientRect().top + window.pageYOffset;
        const targetTop = Math.max(0, cardTop - headerOffset - 18);

        window.scrollTo({ top: targetTop, behavior: 'auto' });
        shouldRestoreHomeScroll = false;
    });
}


function getProductPageData(product) {
    return {
        ...defaultProductPageData,
        ...(productPageOverrides[product.slug] || {}),
    };
}

function getProductBySlug(slug) {
    return allProducts.find((product) => product.slug === slug) || null;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function createProductPageMarkup(product) {
    const pageData = getProductPageData(product);
    const imageMarkup = product.imagem
        ? `<img src="${product.imagem}" alt="${escapeHtml(product.nome)}" class="product-page-hero-image">`
        : `<div class="product-page-hero-placeholder">${escapeHtml(product.nome)}</div>`;

    return `
        <div class="main-content product-page-shell">
            <section class="product-page-card">
                <div class="product-page-top">
                    <div class="product-page-hero-panel">
                        ${imageMarkup}
                    </div>

                    <div class="product-page-buy-panel">
                        <h1 class="product-page-title">${escapeHtml(product.nome)}</h1>
                        <div class="product-page-meta-row">
                            <span class="product-page-chip">${product.vendas} vendas</span>
                            <span class="product-page-chip product-page-chip-accent"><i class="fas fa-bolt"></i> Entrega via Discord</span>
                        </div>
                        <div class="product-page-price-row">
                            <span class="price-original">${formatPrice(product.precoOriginal)}</span>
                            <span class="product-page-discount"><i class="fas fa-angle-down"></i>${getDiscountPercentage(product)}%</span>
                        </div>
                        <div class="product-page-price">${formatPrice(product.precoPromo)}</div>
                        <div class="product-page-pix">À vista no Pix</div>

                        <div class="product-page-purchase-box">
                            <div class="product-page-stock">(${product.estoque} em estoque)</div>
                            <button class="product-page-primary-btn" type="button">
                                <i class="fas fa-lock"></i>
                                Comprar agora
                            </button>
                            <button class="product-page-secondary-btn" type="button" data-add-to-cart="${product.slug}">
                                <i class="fas fa-cart-shopping"></i>
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </div>

                    <aside class="product-page-side-info">
                        ${pageData.infoCards.map((item) => `
                            <article class="product-page-info-card">
                                <i class="fas ${item.icon} product-page-info-icon"></i>
                                <h3>${escapeHtml(item.title)}</h3>
                                <p>${escapeHtml(item.text)}</p>
                            </article>
                        `).join('')}
                    </aside>
                </div>

                <section class="product-page-details-card">
                    <h2 class="product-page-details-title">${escapeHtml(pageData.highlightsTitle)}</h2>
                    <ul class="product-page-list">
                        ${pageData.highlights.map((item) => `
                            <li><span>${escapeHtml(item)}</span></li>
                        `).join('')}
                        <li class="product-page-warning"><span>${escapeHtml(pageData.warning)}</span></li>
                    </ul>

                    <h3 class="product-page-requirements-title">${escapeHtml(pageData.minimumTitle)}</h3>
                    <ul class="product-page-requirements-list">
                        ${pageData.minimumRequirements.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                    </ul>

                    <p class="product-page-note">${escapeHtml(pageData.requirementsNote)}</p>
                </section>
            </section>
        </div>
    `;
}

function renderHomePage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent || !homeMainContentMarkup) return;

    mainContent.innerHTML = homeMainContentMarkup;
    restoreHomeScrollPosition();
}

function renderProductPage(product) {
    const mainContent = document.getElementById('main-content');
    if (!mainContent || !product) return;

    mainContent.innerHTML = createProductPageMarkup(product);
    window.scrollTo({ top: 0, behavior: 'instant' });
}

function renderPageFromHash() {
    const previousRouteType = activeRouteType;
    const route = getHashRoute();

    if (route.type === 'home') {
        shouldRestoreHomeScroll = previousRouteType === 'product' && !suppressNextHomeScrollRestore;
        activeRouteType = 'home';
        renderHomePage();
        return;
    }

    if (route.type === 'static') {
        activeRouteType = 'static';
        return;
    }

    if (route.type === 'checkout') {
        activeRouteType = 'checkout';
        const product = getCheckoutRouteProduct(route.slug);

        if (route.slug && !product) {
            activeRouteType = 'home';
            renderHomePage();
            return;
        }

        renderCheckoutPage(product);
        return;
    }

    const product = getProductBySlug(route.slug);

    if (!product) {
        activeRouteType = 'home';
        renderHomePage();
        return;
    }

    activeRouteType = 'product';
    renderProductPage(product);
}

function openProductPage(slug) {
    if (!slug) return;

    saveHomeScrollRestoreSlug(slug);
    shouldRestoreHomeScroll = false;
    suppressNextHomeScrollRestore = false;
    window.location.hash = slug;
}

function setupProductNavigation() {
    document.addEventListener('click', (event) => {
        const productCard = event.target.closest('.product-card');
        if (productCard) {
            openProductPage(productCard.dataset.slug);
            return;
        }

        const logoLink = event.target.closest('.logo-link');
        if (logoLink && window.location.hash) {
            event.preventDefault();
            suppressNextHomeScrollRestore = true;
            shouldRestoreHomeScroll = false;
            window.location.hash = '';
            renderHomePage();
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    });

    window.addEventListener('hashchange', renderPageFromHash);
}



const checkoutCoupons = {
    CALL473: {
        code: 'CALL473',
        discountRate: 0.15,
        discountLabel: '15%',
    },
};

const checkoutState = {
    slug: '',
    quantity: 1,
    couponInput: '',
    couponStatus: 'idle',
    appliedCoupon: null,
    pendingRemoval: false,
    pendingRemovalSlug: '',
};

function getCheckoutQuantity(product) {
    if (!product) return 0;

    const cartItem = cartState.items.find((item) => item.slug === product.slug);

    if (cartItem) {
        return Math.max(0, Number(cartItem.quantity) || 0);
    }

    if (checkoutState.slug === product.slug) {
        return Math.max(0, Number(checkoutState.quantity) || 0);
    }

    return 1;
}

function getCheckoutPricing(product) {
    const quantity = getCheckoutQuantity(product);
    const subtotal = product.precoPromo * quantity;
    const appliedCoupon = checkoutState.appliedCoupon;
    const discount = appliedCoupon ? subtotal * appliedCoupon.discountRate : 0;
    const total = Math.max(0, subtotal - discount);

    return {
        quantity,
        subtotal,
        discount,
        total,
        appliedCoupon,
    };
}

function getCheckoutCouponFeedback() {
    if (checkoutState.couponStatus === 'empty') {
        return {
            text: 'Digite um cupom válido.',
            className: 'is-error',
        };
    }

    if (checkoutState.couponStatus === 'invalid') {
        return {
            text: 'Cupom inválido. Tente novamente.',
            className: 'is-error',
        };
    }

    if (checkoutState.couponStatus === 'applied' && checkoutState.appliedCoupon) {
        return {
            text: `Cupom ${checkoutState.appliedCoupon.code} aplicado com ${checkoutState.appliedCoupon.discountLabel} de desconto.`,
            className: 'is-success',
        };
    }

    return null;
}

function getCheckoutRouteProduct(slug) {
    return slug ? getProductBySlug(slug) : null;
}

function getCheckoutCartProducts() {
    return cartState.items
        .map((item) => {
            const product = getProductBySlug(item.slug);
            if (!product) return null;

            return {
                product,
                quantity: Math.max(0, Number(item.quantity) || 0),
            };
        })
        .filter((entry) => entry && entry.quantity > 0);
}

function getCheckoutCartPricing() {
    const subtotal = getCartTotal();
    const appliedCoupon = checkoutState.appliedCoupon;
    const discount = appliedCoupon ? subtotal * appliedCoupon.discountRate : 0;
    const total = Math.max(0, subtotal - discount);

    return {
        subtotal,
        discount,
        total,
        appliedCoupon,
    };
}

function createCheckoutItemRowMarkup(product, quantity) {
    const imageMarkup = product.imagem
        ? `<img src="${product.imagem}" alt="${escapeHtml(product.nome)}" class="checkout-product-image">`
        : `<div class="checkout-product-image-placeholder">${escapeHtml(product.nome)}</div>`;

    return `
        <div class="checkout-product-row" data-checkout-item="${escapeHtml(product.slug)}">
            <div class="checkout-product-main">
                <div class="checkout-product-thumb">${imageMarkup}</div>
                <div class="checkout-product-info">
                    <h3>${escapeHtml(product.nome)}</h3>
                    <p>${formatPrice(product.precoPromo)}</p>
                </div>
            </div>

            <div class="checkout-quantity-controls" aria-label="Quantidade">
                <button type="button" class="checkout-qty-btn" aria-label="Diminuir quantidade" data-checkout-qty="decrease" data-checkout-item-slug="${escapeHtml(product.slug)}">−</button>
                <span class="checkout-qty-value">${quantity}</span>
                <button type="button" class="checkout-qty-btn" aria-label="Aumentar quantidade" data-checkout-qty="increase" data-checkout-item-slug="${escapeHtml(product.slug)}">+</button>
                <button type="button" class="checkout-trash-btn" aria-label="Remover item" data-checkout-remove data-checkout-item-slug="${escapeHtml(product.slug)}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
}

function createCheckoutTotalsMarkup(pricing) {
    return `
        <div class="checkout-total-box">
            <div class="checkout-total-row">
                <span>Sub Total:</span>
                <strong>${formatPrice(pricing.subtotal)}</strong>
            </div>
            ${pricing.appliedCoupon ? `
                <div class="checkout-total-row">
                    <span>Desconto (${pricing.appliedCoupon.discountLabel}):</span>
                    <strong class="checkout-discount-value">- ${formatPrice(pricing.discount)}</strong>
                </div>
            ` : ''}
            <div class="checkout-total-row checkout-total-row-final">
                <span>Total:</span>
                <strong>${formatPrice(pricing.total)}</strong>
            </div>
        </div>
    `;
}

function createCheckoutSummaryCardMarkup(contentMarkup, pricing) {
    const feedback = getCheckoutCouponFeedback();

    return `
        <article class="checkout-card checkout-summary-card">
            <h2 class="checkout-card-title">Resumo do pedido</h2>

            ${contentMarkup}

            <div class="checkout-coupon-row">
                <input
                    type="text"
                    class="checkout-coupon-input"
                    placeholder="Digite seu cupom de desconto"
                    value="${escapeHtml(checkoutState.couponInput || '')}"
                    data-checkout-coupon-input
                />
                <button type="button" class="checkout-coupon-btn" data-checkout-coupon-apply>Aplicar</button>
            </div>

            ${feedback ? `<div class="checkout-coupon-feedback ${feedback.className}">${feedback.text}</div>` : ''}
            ${createCheckoutTotalsMarkup(pricing)}

            <div class="checkout-security-box">
                <i class="fas fa-shield-halved"></i>
                <span>Pagamento 100% Seguro</span>
            </div>

            <button type="button" class="checkout-primary-btn">
                <i class="fas fa-lock"></i>
                Gerar Pix ${formatPrice(pricing.total)}
            </button>
        </article>
    `;
}

function createCheckoutShellMarkup(summaryMarkup, modalMarkup = '') {
    return `
        <div class="main-content checkout-page-shell">
            <section class="checkout-hero">
                <h1 class="checkout-title">Carrinho</h1>
                <p class="checkout-breadcrumb">Início / Carrinho</p>
            </section>

            <section class="checkout-layout">
                <div class="checkout-left-column">
                    <article class="checkout-card">
                        <h2 class="checkout-card-title">Forma de pagamento</h2>

                        <div class="checkout-payment-option">
                            <div class="checkout-payment-icon">
                                <i class="fas fa-qrcode"></i>
                            </div>
                            <div class="checkout-payment-content">
                                <div class="checkout-payment-top">
                                    <span class="checkout-payment-name">Pix</span>
                                    <span class="checkout-payment-badge"><i class="fas fa-bolt"></i> Mais rápido</span>
                                </div>
                                <p>O site vai gerar o QR Code e abrir o pedido automaticamente no Discord.</p>
                            </div>
                        </div>
                    </article>

                    <article class="checkout-card">
                        <h2 class="checkout-card-title">Informações Pessoais</h2>

                        <div class="checkout-form-grid">
                            <label class="checkout-field">
                                <span>Nome</span>
                                <input type="text" placeholder="Ex: Diogo" autocomplete="name" />
                            </label>

                            <label class="checkout-field">
                                <span>Discord</span>
                                <input type="text" placeholder="Ex: usuário#1234" autocomplete="off" />
                            </label>
                        </div>

                        <label class="checkout-field checkout-field-full">
                            <span>Email</span>
                            <input type="email" placeholder="exemplo@exemplo.com" autocomplete="email" />
                        </label>

                        <div class="checkout-note">
                            <i class="fas fa-circle-info"></i>
                            <p>Depois de pagar, aguarde a confirmação automática do Pix. Quando aprovar, a equipe já fica liberada para enviar a key.</p>
                        </div>
                    </article>
                </div>

                <aside class="checkout-right-column">
                    ${summaryMarkup}
                </aside>
            </section>
            ${modalMarkup}
        </div>
    `;
}

function createCheckoutEmptyMarkup() {
    const summaryMarkup = `
        <article class="checkout-card checkout-summary-card">
            <h2 class="checkout-card-title">Resumo do pedido</h2>

            <div class="checkout-summary-empty-box">
                <div class="checkout-summary-empty-icon" aria-hidden="true">
                    <i class="fas fa-bag-shopping"></i>
                </div>
                <p class="checkout-summary-empty-text">Monte um carrinho de compras!</p>
                <button type="button" class="checkout-summary-empty-btn" data-checkout-back-home>
                    Explorar catálogo
                </button>
            </div>
        </article>
    `;

    return createCheckoutShellMarkup(summaryMarkup);
}

function createCheckoutRemoveModalMarkup(product) {
    if (!checkoutState.pendingRemoval || !product) return '';

    const imageMarkup = product.imagem
        ? `<img src="${product.imagem}" alt="${escapeHtml(product.nome)}" class="checkout-remove-modal-thumb">`
        : `<div class="checkout-remove-modal-thumb checkout-remove-modal-thumb-placeholder">${escapeHtml(product.nome)}</div>`;

    return `
        <div class="checkout-remove-modal-overlay">
            <div class="checkout-remove-modal" role="dialog" aria-modal="true" aria-label="Remover produto">
                <div class="checkout-remove-modal-product">
                    ${imageMarkup}
                    <div class="checkout-remove-modal-product-info">
                        <strong>${escapeHtml(product.nome)}</strong>
                    </div>
                </div>

                <p class="checkout-remove-modal-text">Você tem certeza de que deseja remover este produto do carrinho?</p>

                <div class="checkout-remove-modal-actions">
                    <button type="button" class="checkout-remove-modal-btn is-cancel" data-checkout-remove-cancel>Não</button>
                    <button type="button" class="checkout-remove-modal-btn is-confirm" data-checkout-remove-confirm>Sim</button>
                </div>
            </div>
        </div>
    `;
}

function createCheckoutPageMarkup(product) {
    const checkoutProduct = product || getProductBySlug(checkoutState.pendingRemovalSlug);

    if (product) {
        const pricing = getCheckoutPricing(product);
        const isEmpty = pricing.quantity <= 0;

        const summaryMarkup = isEmpty
            ? `
                <article class="checkout-card checkout-summary-card">
                    <h2 class="checkout-card-title">Resumo do pedido</h2>

                    <div class="checkout-summary-empty-box">
                        <div class="checkout-summary-empty-icon" aria-hidden="true">
                            <i class="fas fa-lock"></i>
                        </div>
                        <p class="checkout-summary-empty-text">Não há itens para finalizar.</p>
                        <button type="button" class="checkout-summary-empty-btn" data-checkout-back-home>
                            Explorar catálogo
                        </button>
                    </div>
                </article>
            `
            : createCheckoutSummaryCardMarkup(
                createCheckoutItemRowMarkup(product, pricing.quantity),
                pricing,
            );

        return createCheckoutShellMarkup(summaryMarkup, createCheckoutRemoveModalMarkup(checkoutProduct));
    }

    const checkoutItems = getCheckoutCartProducts();
    if (!checkoutItems.length) {
        return createCheckoutEmptyMarkup();
    }

    const pricing = getCheckoutCartPricing();
    const itemsMarkup = checkoutItems
        .map(({ product: cartProduct, quantity }) => createCheckoutItemRowMarkup(cartProduct, quantity))
        .join('');

    const summaryMarkup = createCheckoutSummaryCardMarkup(itemsMarkup, pricing);
    return createCheckoutShellMarkup(summaryMarkup, createCheckoutRemoveModalMarkup(checkoutProduct));
}

function syncCheckoutItemQuantity(product, quantity) {
    if (!product) return;
    const safeQuantity = Math.max(1, Number(quantity) || 1);
    checkoutState.quantity = safeQuantity;
    setCartItemQuantity(product.slug, safeQuantity);
}

function applyCheckoutCoupon(value) {
    const normalizedValue = String(value || '').trim().toUpperCase();
    checkoutState.couponInput = String(value || '').trim();

    if (!normalizedValue) {
        checkoutState.couponStatus = 'empty';
        checkoutState.appliedCoupon = null;
        return;
    }

    const validCoupon = checkoutCoupons[normalizedValue];
    if (!validCoupon) {
        checkoutState.couponStatus = 'invalid';
        checkoutState.appliedCoupon = null;
        return;
    }

    checkoutState.couponStatus = 'applied';
    checkoutState.appliedCoupon = validCoupon;
    checkoutState.couponInput = validCoupon.code;
}

function rerenderCheckoutFromRoute() {
    const route = getHashRoute();
    if (route.type !== 'checkout') return;

    const product = getCheckoutRouteProduct(route.slug);
    renderCheckoutPage(product, { preserveState: true });
}

function renderCheckoutPage(product, options = {}) {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const preserveState = Boolean(options.preserveState);
    const nextSlug = product?.slug || '';
    const isDifferentProduct = checkoutState.slug !== nextSlug;

    if (!preserveState || isDifferentProduct) {
        const cartItem = product
            ? cartState.items.find((item) => item.slug === product.slug)
            : null;

        checkoutState.slug = nextSlug;
        checkoutState.quantity = product
            ? Math.max(1, Number(cartItem?.quantity) || 1)
            : 0;
        checkoutState.couponInput = '';
        checkoutState.couponStatus = 'idle';
        checkoutState.appliedCoupon = null;
        checkoutState.pendingRemoval = false;
        checkoutState.pendingRemovalSlug = '';
    } else if (product) {
        checkoutState.quantity = getCheckoutQuantity(product);
    }

    mainContent.innerHTML = createCheckoutPageMarkup(product);
    window.scrollTo({ top: 0, behavior: 'instant' });
}

function getHashRoute() {
    const rawHash = window.location.hash.replace('#', '').trim();

    if (!rawHash) {
        return { type: 'home' };
    }

    if (rawHash === 'sobre-nos' || rawHash === 'termos-de-uso') {
        return {
            type: 'static',
            slug: rawHash,
        };
    }

    if (rawHash === 'checkout') {
        return {
            type: 'checkout',
            slug: '',
        };
    }

    if (rawHash.startsWith('checkout/')) {
        return {
            type: 'checkout',
            slug: rawHash.slice('checkout/'.length).trim(),
        };
    }

    return {
        type: 'product',
        slug: rawHash,
    };
}

function openCheckoutPage(slug) {
    if (!slug) return;

    const targetHash = `#checkout/${slug}`;
    if (window.location.hash === targetHash) {
        renderCheckoutPage(getProductBySlug(slug));
        return;
    }

    window.location.hash = targetHash;
}

function openCartCheckoutPage() {
    const targetHash = '#checkout';
    if (window.location.hash === targetHash) {
        renderCheckoutPage(null);
        return;
    }

    window.location.hash = 'checkout';
}


const cartState = {
    items: [],
};

function getCartStorageKey() {
    return 'callofstore-cart';
}

function loadCart() {
    try {
        const stored = localStorage.getItem(getCartStorageKey());
        const parsed = stored ? JSON.parse(stored) : [];

        if (!Array.isArray(parsed)) {
            cartState.items = [];
            return;
        }

        cartState.items = parsed
            .map((item) => ({
                slug: item.slug,
                quantity: Number(item.quantity) || 0,
            }))
            .filter((item) => item.slug && item.quantity > 0);
    } catch {
        cartState.items = [];
    }
}

function saveCart() {
    localStorage.setItem(getCartStorageKey(), JSON.stringify(cartState.items));
}

function getCartCount() {
    return cartState.items.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
    return cartState.items.reduce((total, item) => {
        const product = getProductBySlug(item.slug);
        if (!product) return total;
        return total + (product.precoPromo * item.quantity);
    }, 0);
}

function updateCartBadge() {
    const badge = document.querySelector('.cart-count');
    if (!badge) return;
    badge.textContent = String(getCartCount());
}

function getCartModalElements() {
    return {
        overlay: document.getElementById('cartModalOverlay'),
        panel: document.getElementById('cartModal'),
        body: document.getElementById('cartModalBody'),
        total: document.getElementById('cartModalTotal'),
        close: document.getElementById('cartModalClose'),
    };
}

function ensureCartModal() {
    if (document.getElementById('cartModalOverlay')) return;

    const modalMarkup = `
        <div class="cart-modal-overlay" id="cartModalOverlay" hidden>
            <aside class="cart-modal" id="cartModal" aria-label="Carrinho" aria-modal="true" role="dialog">
                <div class="cart-modal-header">
                    <div>
                        <h2 class="cart-modal-title">Carrinho</h2>
                        <p class="cart-modal-subtitle">Seus itens selecionados</p>
                    </div>
                    <button class="cart-modal-close" id="cartModalClose" type="button" aria-label="Fechar carrinho">
                        <i class="fas fa-xmark"></i>
                    </button>
                </div>

                <div class="cart-modal-body" id="cartModalBody"></div>

                <div class="cart-modal-footer">
                    <div class="cart-modal-total-box">
                        <span>Valor total:</span>
                        <strong id="cartModalTotal">R$ 0,00</strong>
                    </div>
                    <button class="cart-modal-buy-btn" type="button">
                        <i class="fas fa-up-right-from-square"></i>
                        Comprar
                    </button>
                </div>
            </aside>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalMarkup);
}

function createCartItemMarkup(item) {
    const product = getProductBySlug(item.slug);
    if (!product) return '';

    const imageMarkup = product.imagem
        ? `<img src="${product.imagem}" alt="${escapeHtml(product.nome)}" class="cart-item-image">`
        : `<div class="cart-item-image-placeholder">JOGO</div>`;

    return `
        <article class="cart-item" data-cart-slug="${product.slug}">
            <div class="cart-item-media">${imageMarkup}</div>
            <div class="cart-item-main">
                <div class="cart-item-top-row">
                    <div>
                        <h3 class="cart-item-title">${escapeHtml(product.nome)}</h3>
                        <div class="cart-item-unit-price">${formatPrice(product.precoPromo)}</div>
                    </div>
                    <button class="cart-item-remove" type="button" data-cart-remove="${product.slug}" aria-label="Remover ${escapeHtml(product.nome)}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <div class="cart-item-bottom-row">
                    <div class="cart-quantity-controls">
                        <button class="cart-qty-btn" type="button" data-cart-decrease="${product.slug}" aria-label="Diminuir quantidade">−</button>
                        <span class="cart-qty-value">${item.quantity}</span>
                        <button class="cart-qty-btn" type="button" data-cart-increase="${product.slug}" aria-label="Aumentar quantidade">+</button>
                    </div>
                    <div class="cart-item-total-price">${formatPrice(product.precoPromo * item.quantity)}</div>
                </div>
            </div>
        </article>
    `;
}

function renderCart() {
    ensureCartModal();

    const { body, total } = getCartModalElements();
    if (!body || !total) return;

    if (!cartState.items.length) {
        body.innerHTML = `
            <div class="cart-empty-state">
                <i class="fas fa-cart-shopping"></i>
                <p>Seu carrinho está vazio</p>
            </div>
        `;
        total.textContent = formatPrice(0);
        updateCartBadge();
        return;
    }

    body.innerHTML = cartState.items
        .map(createCartItemMarkup)
        .filter(Boolean)
        .join('');

    total.textContent = formatPrice(getCartTotal());
    updateCartBadge();
}

function openCartModal() {
    ensureCartModal();
    renderCart();

    const { overlay } = getCartModalElements();
    if (!overlay) return;

    overlay.hidden = false;
    document.body.classList.add('cart-modal-open');
}

function closeCartModal() {
    const { overlay } = getCartModalElements();
    if (!overlay) return;

    overlay.hidden = true;
    document.body.classList.remove('cart-modal-open');
}

function setCartItemQuantity(slug, quantity) {
    const safeQuantity = Math.max(0, quantity);
    const existingItem = cartState.items.find((item) => item.slug === slug);

    if (existingItem) {
        existingItem.quantity = safeQuantity;
        cartState.items = cartState.items.filter((item) => item.quantity > 0);
    } else if (safeQuantity > 0) {
        cartState.items.push({ slug, quantity: safeQuantity });
    }

    saveCart();
    renderCart();
}

function addProductToCart(slug) {
    const existingItem = cartState.items.find((item) => item.slug === slug);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartState.items.push({ slug, quantity: 1 });
    }

    saveCart();
    renderCart();
    openCartModal();
}

function ensureProductInCart(slug) {
    if (!slug) return;

    const existingItem = cartState.items.find((item) => item.slug === slug);
    if (existingItem) {
        return;
    }

    cartState.items.push({ slug, quantity: 1 });
    saveCart();
    renderCart();
}

function startCheckoutWithProduct(slug) {
    if (!slug) return;

    ensureProductInCart(slug);
    openCartCheckoutPage();
}

function setupCart() {
    loadCart();
    ensureCartModal();
    renderCart();

    document.addEventListener('click', (event) => {

        const checkoutBackHomeButton = event.target.closest('[data-checkout-back-home]');
        if (checkoutBackHomeButton) {
            window.location.hash = '';
            renderHomePage();
            window.scrollTo({ top: 0, behavior: 'instant' });
            return;
        }

        const checkoutCouponApplyButton = event.target.closest('[data-checkout-coupon-apply]');
        if (checkoutCouponApplyButton) {
            const couponInput = document.querySelector('[data-checkout-coupon-input]');
            applyCheckoutCoupon(couponInput?.value || '');
            rerenderCheckoutFromRoute();
            return;
        }

        const checkoutQtyButton = event.target.closest('[data-checkout-qty]');
        if (checkoutQtyButton) {
            const route = getHashRoute();
            const targetSlug = checkoutQtyButton.dataset.checkoutItemSlug || route.slug;
            const product = getProductBySlug(targetSlug);

            if (route.type === 'checkout' && product) {
                const currentQuantity = getCheckoutQuantity(product);
                const action = checkoutQtyButton.dataset.checkoutQty;

                if (action === 'increase') {
                    syncCheckoutItemQuantity(product, currentQuantity + 1);
                    rerenderCheckoutFromRoute();
                    return;
                }

                if (currentQuantity <= 1) {
                    checkoutState.pendingRemoval = true;
                    checkoutState.pendingRemovalSlug = product.slug;
                    rerenderCheckoutFromRoute();
                    return;
                }

                syncCheckoutItemQuantity(product, currentQuantity - 1);
                rerenderCheckoutFromRoute();
            }
            return;
        }

        const checkoutRemoveButton = event.target.closest('[data-checkout-remove]');
        if (checkoutRemoveButton) {
            const route = getHashRoute();
            checkoutState.pendingRemoval = true;
            checkoutState.pendingRemovalSlug = checkoutRemoveButton.dataset.checkoutItemSlug || route.slug || '';
            rerenderCheckoutFromRoute();
            return;
        }

        const checkoutRemoveCancelButton = event.target.closest('[data-checkout-remove-cancel]');
        if (checkoutRemoveCancelButton) {
            checkoutState.pendingRemoval = false;
            checkoutState.pendingRemovalSlug = '';
            rerenderCheckoutFromRoute();
            return;
        }

        const checkoutRemoveConfirmButton = event.target.closest('[data-checkout-remove-confirm]');
        if (checkoutRemoveConfirmButton) {
            const route = getHashRoute();
            const targetSlug = checkoutState.pendingRemovalSlug || route.slug;
            const product = getProductBySlug(targetSlug);
            checkoutState.pendingRemoval = false;
            checkoutState.pendingRemovalSlug = '';

            if (route.type === 'checkout' && product) {
                if (route.slug === product.slug) {
                    checkoutState.quantity = 0;
                }

                setCartItemQuantity(product.slug, 0);
                rerenderCheckoutFromRoute();
            }
            return;
        }
function showPixPaymentModal({ pedidoId, qrCode, qrCodeBase64, total }) {
    const existing = document.getElementById('pixPaymentOverlay');
    if (existing) existing.remove();

    const qrImage = qrCodeBase64
        ? `data:image/png;base64,${qrCodeBase64}`
        : '';

    const formattedTotal = Number.isFinite(Number(total))
        ? formatPrice(Number(total))
        : '';

    const overlay = document.createElement('div');
    overlay.id = 'pixPaymentOverlay';
    overlay.className = 'pix-payment-overlay';

    overlay.innerHTML = `
        <div class="pix-payment-modal" role="dialog" aria-modal="true" aria-labelledby="pixPaymentTitle">
            <button type="button" class="pix-payment-close" id="pixPaymentClose" aria-label="Fechar">
                <i class="fas fa-xmark"></i>
            </button>

            <h2 id="pixPaymentTitle" class="pix-payment-title">Pix gerado com sucesso</h2>
            <p class="pix-payment-subtitle">Pedido #${pedidoId}${formattedTotal ? ` • ${formattedTotal}` : ''}</p>

            <div class="pix-payment-status is-pending" id="pixPaymentStatus">
                <div class="pix-payment-status-badge" id="pixPaymentStatusBadge">
                    <i class="fas fa-clock"></i>
                    <span>Aguardando pagamento</span>
                </div>
                <p class="pix-payment-status-text" id="pixPaymentStatusText">
                    Estamos verificando o seu pagamento automaticamente a cada poucos segundos.
                </p>
                <p class="pix-payment-status-meta" id="pixPaymentStatusMeta">
                    Pague o Pix e deixe esta janela aberta para acompanhar a confirmação.
                </p>
            </div>

            ${qrImage ? `
                <div class="pix-payment-qr-wrap">
                    <img src="${qrImage}" alt="QR Code do Pix" class="pix-payment-qr-image" />
                </div>
            ` : `
                <div class="pix-payment-qr-empty">
                    QR Code não disponível.
                </div>
            `}

            <label class="pix-payment-label">Código Pix copia e cola</label>
            <textarea class="pix-payment-code" readonly>${qrCode || ''}</textarea>

            <div class="pix-payment-actions">
                <button type="button" class="pix-payment-copy" id="pixPaymentCopy">
                    <i class="fas fa-copy"></i>
                    Copiar código Pix
                </button>
                <button type="button" class="pix-payment-refresh" id="pixPaymentRefresh">
                    <i class="fas fa-rotate-right"></i>
                    Verificar agora
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.classList.add('modal-open');

    const closeButton = overlay.querySelector('#pixPaymentClose');
    const copyButton = overlay.querySelector('#pixPaymentCopy');
    const refreshButton = overlay.querySelector('#pixPaymentRefresh');
    const statusCard = overlay.querySelector('#pixPaymentStatus');
    const statusBadge = overlay.querySelector('#pixPaymentStatusBadge');
    const statusText = overlay.querySelector('#pixPaymentStatusText');
    const statusMeta = overlay.querySelector('#pixPaymentStatusMeta');

    let destroyed = false;
    let isChecking = false;
    let statusIntervalId = null;

    const statusPresets = {
        pending: {
            className: 'is-pending',
            icon: 'fa-clock',
            label: 'Aguardando pagamento'
        },
        approved: {
            className: 'is-approved',
            icon: 'fa-circle-check',
            label: 'Pagamento aprovado'
        },
        delivered: {
            className: 'is-delivered',
            icon: 'fa-key',
            label: 'Key enviada'
        },
        cancelled: {
            className: 'is-cancelled',
            icon: 'fa-circle-xmark',
            label: 'Pedido cancelado'
        }
    };

    const applyStatusPreset = (presetKey, payload = {}) => {
        const preset = statusPresets[presetKey] || statusPresets.pending;
        statusCard.classList.remove('is-pending', 'is-approved', 'is-delivered', 'is-cancelled');
        statusCard.classList.add(preset.className);
        statusBadge.innerHTML = `
            <i class="fas ${preset.icon}"></i>
            <span>${payload.title || preset.label}</span>
        `;
        statusText.textContent = payload.nextAction || 'Estamos atualizando o status do seu pedido automaticamente.';
        statusMeta.textContent = payload.meta || `Última verificação: ${new Date().toLocaleTimeString('pt-BR')}`;
    };

    const updateStatus = (payload) => {
        const status = String(payload?.status || '');
        const paymentStatus = String(payload?.paymentStatus || '').toLowerCase();
        const paymentApproved = Boolean(payload?.paymentApproved);
        const keyDelivered = Boolean(payload?.keyDelivered);

        let presetKey = 'pending';

        if (status === 'cancelado' || ['cancelled', 'rejected', 'refunded', 'charged_back'].includes(paymentStatus)) {
            presetKey = 'cancelled';
        } else if (keyDelivered || ['key_enviada', 'finalizado'].includes(status)) {
            presetKey = 'delivered';
        } else if (paymentApproved || ['pagamento_aprovado', 'aguardando_entrega'].includes(status) || paymentStatus === 'approved') {
            presetKey = 'approved';
        }

        let meta = `Última verificação: ${new Date().toLocaleTimeString('pt-BR')}`;
        if (paymentStatus) {
            meta += ` • Status MP: ${paymentStatus}`;
        }

        applyStatusPreset(presetKey, {
            ...payload,
            meta
        });
    };

    const verificarStatus = async () => {
        if (destroyed || isChecking) return;
        isChecking = true;
        refreshButton.disabled = true;
        refreshButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verificando...';

        try {
            const response = await fetch(apiUrl(`/api/pedidos/${pedidoId}/status?ts=${Date.now()}`), {
                cache: 'no-store'
            });
            const data = await response.json().catch(() => ({}));

            if (!response.ok || !data?.sucesso) {
                throw new Error(data?.erro || 'Não foi possível consultar o pedido agora.');
            }

            updateStatus(data);
        } catch (error) {
            console.error(error);
            applyStatusPreset('pending', {
                title: 'Aguardando pagamento',
                nextAction: error.message || 'Não foi possível atualizar o pedido agora. Tente novamente.',
                meta: `Última tentativa: ${new Date().toLocaleTimeString('pt-BR')}`
            });
        } finally {
            isChecking = false;
            refreshButton.disabled = false;
            refreshButton.innerHTML = '<i class="fas fa-rotate-right"></i> Verificar agora';
        }
    };

    const closeModal = () => {
        destroyed = true;
        if (statusIntervalId) {
            clearInterval(statusIntervalId);
            statusIntervalId = null;
        }
        overlay.remove();
        document.body.classList.remove('modal-open');
    };

    closeButton?.addEventListener('click', closeModal);

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) closeModal();
    });

    copyButton?.addEventListener('click', async () => {
        if (!qrCode) return;

        try {
            await navigator.clipboard.writeText(qrCode);
            alert('Código Pix copiado com sucesso.');
        } catch (error) {
            console.error(error);
            alert('Não foi possível copiar automaticamente.');
        }
    });

    refreshButton?.addEventListener('click', () => {
        verificarStatus();
    });

    verificarStatus();
    statusIntervalId = window.setInterval(verificarStatus, 5000);
}
        const cartButton = event.target.closest('.cart-btn');
        if (cartButton) {
            openCartModal();
            return;
        }

        const addToCartButton = event.target.closest('[data-add-to-cart]');
        if (addToCartButton) {
            event.preventDefault();
            event.stopPropagation();
            addProductToCart(addToCartButton.dataset.addToCart);
            return;
        }

        // AQUI entra o botão Gerar Pix
        const checkoutPrimaryButton = event.target.closest('.checkout-primary-btn');
        if (checkoutPrimaryButton) {
            const route = getHashRoute();
            const checkoutItems = route.type === 'checkout' && route.slug
                ? [{ product: getProductBySlug(route.slug), quantity: getCheckoutQuantity(getProductBySlug(route.slug)) }]
                : getCheckoutCartProducts();

            const validItems = checkoutItems
                .filter(item => item && item.product && item.quantity > 0)
                .map(item => ({
                    nome: item.product.nome,
                    slug: item.product.slug,
                    preco: item.product.precoPromo,
                    quantidade: item.quantity
                }));

            if (!validItems.length) {
                alert('Seu carrinho está vazio.');
                return;
            }

            const nameInput = document.querySelector('input[autocomplete="name"]');
            const discordInput = document.querySelector('input[placeholder*="usuário"], input[placeholder*="usuário#1234"]');
            const emailInput = document.querySelector('input[type="email"]');

            const nome = nameInput?.value?.trim();
            const discordUser = discordInput?.value?.trim();
            const email = emailInput?.value?.trim();

            if (!nome || !discordUser || !email) {
                alert('Preencha nome, Discord e email antes de gerar o Pix.');
                return;
            }

            const pricing = route.type === 'checkout' && route.slug
                ? getCheckoutPricing(getProductBySlug(route.slug))
                : getCheckoutCartPricing();

            checkoutPrimaryButton.disabled = true;
            const originalHtml = checkoutPrimaryButton.innerHTML;
            checkoutPrimaryButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gerando Pix...';

            fetch(apiUrl('/api/checkout/pix'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cliente: { nome },
                    discordUser,
                    email,
                    jogos: validItems
                })
            })
           .then(async (response) => {
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data?.sucesso) {
        throw new Error(data?.erro || 'Falha ao gerar Pix.');
    }

    showPixPaymentModal({
        pedidoId: data.pedidoId,
        qrCode: data.qr_code || '',
        qrCodeBase64: data.qr_code_base64 || '',
        total: data.total
    });
})
            .catch((error) => {
                alert(`Erro ao gerar Pix: ${error.message}`);
                console.error(error);
            })
            .finally(() => {
                checkoutPrimaryButton.disabled = false;
                checkoutPrimaryButton.innerHTML = originalHtml;
            });

            return;
        }

        const primaryBuyButton = event.target.closest('.product-page-primary-btn');
        if (primaryBuyButton) {
            const route = getHashRoute();
            if (route.slug) {
                startCheckoutWithProduct(route.slug);
            }
            return;
        }
    });
}

function setupSearch() {
    const searchArea = document.querySelector('.search-area');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (!searchArea || !searchInput || !searchResults) return;

    const renderResults = (query) => {
        const normalizedQuery = query.trim().toLowerCase();

        if (!normalizedQuery) {
            searchResults.hidden = true;
            searchResults.innerHTML = '';
            return;
        }

        const filteredProducts = allProducts.filter((product) =>
            product.nome.toLowerCase().includes(normalizedQuery)
        );

        if (!filteredProducts.length) {
            searchResults.hidden = false;
            searchResults.innerHTML = '<div class="search-empty">Nenhum jogo encontrado.</div>';
            return;
        }

        const visibleResults = filteredProducts.slice(0, 5);
        const remainingCount = filteredProducts.length - visibleResults.length;

        searchResults.hidden = false;
        searchResults.innerHTML = `
            ${visibleResults
                .map((product) => {
                    const imageMarkup = product.imagem
                        ? `<img src="${product.imagem}" alt="${product.nome}" class="search-result-thumb">`
                        : `<div class="search-result-thumb-placeholder">JOGO</div>`;

                    return `
                        <button class="search-result-item" type="button" data-slug="${product.slug}">
                            ${imageMarkup}
                            <div class="search-result-body">
                                <div class="search-result-title">${product.nome}</div>
                                <div class="search-result-price">${formatPrice(product.precoPromo)}</div>
                                <div class="search-result-pix">À vista no Pix</div>
                            </div>
                        </button>
                    `;
                })
                .join('')}
            <div class="search-results-footer">
                ${remainingCount > 0
                    ? `+ ${remainingCount} jogos encontrados`
                    : `${filteredProducts.length} jogo${filteredProducts.length > 1 ? 's' : ''} encontrado`}
            </div>
        `;
    };

    searchInput.addEventListener('input', () => {
        renderResults(searchInput.value);
    });

    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim()) {
            renderResults(searchInput.value);
        }
    });

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            searchResults.hidden = true;
            searchInput.blur();
        }
    });

    searchResults.addEventListener('click', (event) => {
        const button = event.target.closest('.search-result-item');
        if (!button) return;

        const selectedProduct = allProducts.find((product) => product.slug === button.dataset.slug);
        if (!selectedProduct) return;

        searchInput.value = selectedProduct.nome;
        searchResults.hidden = true;
        openProductPage(selectedProduct.slug);
    });

    document.addEventListener('click', (event) => {
        if (searchArea.contains(event.target)) return;
        searchResults.hidden = true;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applyBackgroundArt();
    createLightningLines();
    setupTicker();
    renderProductCards('novidadesGrid', novidadesProducts);
    renderProductCards('maisPopularesGrid', maisPopularesProducts);
    renderProductCards('maisJogosGrid', maisJogosProducts);
    renderProductCards('apenas490Grid', apenas490Products);

    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        homeMainContentMarkup = mainContent.innerHTML;
    }

    setupProductNavigation();
    setupSearch();
    setupCart();
    renderPageFromHash();
});
