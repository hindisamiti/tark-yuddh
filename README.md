# ⚖️ तर्क युद्ध'26 (Tark Yuddh '26)

A premium, professional debate pair selector application built with a modern light-mode aesthetic. This tool is designed to facilitate fair and visually engaging participant selection for debate competitions.

## ✨ Features

- **Professional UI**: A clean, institutional light-mode design with a focus on readability and "Light Glass" aesthetics.
- **Premium Typography**: Utilizes **Outfit** for headlines and **Poppins** for Hindi text to ensure a modern look.
- **Dynamic Animations**: Features smooth, cinematic "Reveal" and "Pulse" effects for a premium user experience.
- **Interactive Elements**: Includes a custom particle engine that creates a subtle, floating ambient background.
- **Modular Architecture**: Code is split into `index.html`, `style.css`, and `script.js` for easy maintenance.

## 📁 Project Structure

- `index.html`: The main entry point and structural logic.
- `style.css`: Contains all design tokens, animations, and responsive layouts.
- `script.js`: Manages the participant data, pair-drawing logic, and the particle engine.

## 🚀 Getting Started

1.  **Installation**: No installation required! Simply download the project folder.
2.  **Running the App**: Open `index.html` in any modern web browser.
3.  **Drawing a Pair**: Click the **🎲 Draw Pair** button to randomly select two participants (one from "Paksh" and one from "Vipaksh").
4.  **Resetting**: Click the **🔁 Reset** button to refill the participant pools.

## 🛠️ Adding Participants

To update the list of participants, simply edit the arrays in [script.js](script.js):

```javascript
let paksh = [
    "Participant 1", "Participant 2", ...
];

let vipaksh = [
    "Participant A", "Participant B", ...
];
```

## 📜 Credits

- **Organized by**: Hindi Samiti, MITS-DU Gwalior.

