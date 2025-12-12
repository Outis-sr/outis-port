// --- Local 'AI' Database ---
const philosophicalIdeas = [
    "To become 'Nobody' is to become everything. A blank canvas reflects the world back at itself, revealing truths others miss.",
    "The best strategy is one that remains unseen until the moment of victory. Silence is your loudest weapon.",
    "Crafting is not just about material; it is about imposing your will upon chaos to create order.",
    "True power lies not in recognition, but in the ability to influence outcomes without being detected.",
    "The Cyclops was blinded not by strength, but by the cunning application of a simple name. What name limits you?",
    "Patience is a trap you set for time itself. Wait longer than your opponent, and they will defeat themselves.",
    "A plan is a living thing. It must breathe, adapt, and change. Rigidity is the death of strategy.",
    "In the details of a small mechanism, one can find the blueprint for a grand empire.",
    "Music is the architecture of time. Listen to the silence between the notes to understand the structure of the moment.",
    "To retreat is not to lose; it is to reposition for a strike from an unexpected angle."
];

// --- Main Idea Generation Function ---
async function generateStrategicIdea() {
    const outputDiv = document.getElementById('ideaOutput');
    const button = document.getElementById('generateIdeaBtn');

    // Safety check
    if (!outputDiv || !button) return;

    const originalButtonText = button.innerHTML;

    // 1. Show processing state
    outputDiv.innerHTML = '<p style="text-align: center; color: var(--accent-color);">Consulting the archives of Outis...</p>';
    button.disabled = true;
    button.innerHTML = 'Thinking...';

    // Simulate "thinking" delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // 2. Select a random idea
    const randomIdea = philosophicalIdeas[Math.floor(Math.random() * philosophicalIdeas.length)];

    // 3. Clear and prepare for typing effect
    outputDiv.innerHTML = `
        <h4 style="color: var(--accent-color); font-size: 1.25rem; font-weight: bold; margin-bottom: 0.75rem;">Please read it again :</h4>
        <p id="typed-text" style="color: #e5e7eb; white-space: pre-wrap; min-height: 1.5em;"></p>
    `;

    const textElement = document.getElementById('typed-text');

    // 4. Typing effect implementation
    let i = 0;
    const speed = 30; // ms per char

    function typeWriter() {
        if (i < randomIdea.length) {
            textElement.innerHTML += randomIdea.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Finished typing
            button.disabled = false;
            button.innerHTML = originalButtonText;
        }
    }

    typeWriter();
}