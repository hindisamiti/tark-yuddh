// DATA
let paksh = [
    "आर्यन अग्रवाल", "हिमांशु शुक्ला", "प्रद्युम्न रघुवंशी",
    "साक्षी सिंह", "सौम्या तिवारी", "केशवी उपाध्याय",
    "मुस्कान छोंकर", "निशिका यादव", "यश शर्मा"
];

let vipaksh = [
    "अनन्या ओझा", "आशीष त्यागी", "भूमिका शर्मा",
    "हर्ष कुमार", "पियूष पाल", "ओम चतुर्वेदी",
    "आयुषी कुशवाह", "अभय शर्मा", "अरुणव सिंह"
];

let pakshPool = [...paksh];
let vipakshPool = [...vipaksh];

// 🎥 Animation function
function animate(box, list) {
    return new Promise(resolve => {
        let i = 0;
        let interval = setInterval(() => {
            box.innerText = list[Math.floor(Math.random() * list.length)];
            i++;
        }, 80);

        setTimeout(() => {
            clearInterval(interval);
            resolve();
        }, 2000);
    });
}

// 🎲 Draw Pair
async function drawPair() {
    if (pakshPool.length === 0 || vipakshPool.length === 0) {
        document.getElementById("pakshBox").innerText = "Finished";
        document.getElementById("vipakshBox").innerText = "Finished";
        return;
    }

    let pBox = document.getElementById("pakshBox");
    let vBox = document.getElementById("vipakshBox");

    pBox.classList.add("active");
    vBox.classList.add("active");

    await Promise.all([
        animate(pBox, paksh),
        animate(vBox, vipaksh)
    ]);

    let p = pakshPool.splice(Math.floor(Math.random() * pakshPool.length), 1)[0];
    let v = vipakshPool.splice(Math.floor(Math.random() * vipakshPool.length), 1)[0];

    pBox.innerText = p;
    vBox.innerText = v;

    pBox.classList.add("reveal");
    vBox.classList.add("reveal");

    setTimeout(() => {
        pBox.classList.remove("reveal", "active");
        vBox.classList.remove("reveal", "active");
    }, 600);
}

// 🔁 Reset
function reset() {
    pakshPool = [...paksh];
    vipakshPool = [...vipaksh];

    document.getElementById("pakshBox").innerText = "पक्ष";
    document.getElementById("vipakshBox").innerText = "विपक्ष";
}

// 🌌 Particle Background
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.5 + 0.1
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 70, 229, ${p.opacity})`;
        ctx.fill();

        p.y += p.speed;
        if (p.y > canvas.height) p.y = 0;
    });

    requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
