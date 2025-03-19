// Updated Hindi Varnamala with sentence and translation fields
const hindiLetters = [
    { letter: 'अ', pronunciation: 'a', example: 'अनार (Anaar)', sentence: 'अनार एक लाल रंग का फल होता है।', translation: 'Pomegranate is a red-colored fruit.' },
    { letter: 'आ', pronunciation: 'aa', example: 'आम (Aam)', sentence: 'आम गर्मियों का सबसे लोकप्रिय फल है।', translation: 'Mango is the most popular fruit in summer.' },
    { letter: 'इ', pronunciation: 'i', example: 'इमली (Imli)', sentence: 'इमली का स्वाद खट्टा होता है।', translation: 'Tamarind has a sour taste.' },
    { letter: 'ई', pronunciation: 'ee', example: 'ईख (Eekh)', sentence: 'ईख से चीनी बनाई जाती है।', translation: 'Sugar is made from sugarcane.' },
    { letter: 'उ', pronunciation: 'u', example: 'उल्लू (Ullu)', sentence: 'उल्लू रात में जागता है।', translation: 'The owl stays awake at night.' },
    { letter: 'ऊ', pronunciation: 'oo', example: 'ऊन (Oon)', sentence: 'ऊन से गरम कपड़े बनते हैं।', translation: 'Warm clothes are made from wool.' },
    { letter: 'ऋ', pronunciation: 'ri', example: 'ऋषि (Rishi)', sentence: 'ऋषि जंगल में ध्यान करते थे।', translation: 'Sages meditated in the forest.' },
    { letter: 'ए', pronunciation: 'e', example: 'एल (El)', sentence: 'एल एक अंग्रेजी अक्षर है।', translation: 'L is an English letter.' },
    { letter: 'ऐ', pronunciation: 'ai', example: 'ऐनक (Ainak)', sentence: 'ऐनक आँखों की मदद करती है।', translation: 'Glasses help the eyes.' },
    { letter: 'ओ', pronunciation: 'o', example: 'ओखली (Okhali)', sentence: 'ओखली में मसाले पीसे जाते हैं।', translation: 'Spices are ground in a mortar.' },
    { letter: 'औ', pronunciation: 'au', example: 'औरत (Aurat)', sentence: 'औरत घर संभालती है।', translation: 'A woman manages the house.' },
    { letter: 'क', pronunciation: 'ka', example: 'कमल (Kamal)', sentence: 'कमल पानी में खिलता है।', translation: 'The lotus blooms in water.' },
    { letter: 'ख', pronunciation: 'kha', example: 'खरगोश (Khargosh)', sentence: 'खरगोश तेजी से दौड़ता है।', translation: 'The rabbit runs fast.' },
    { letter: 'ग', pronunciation: 'ga', example: 'गाय (Gaay)', sentence: 'गाय दूध देती है।', translation: 'The cow gives milk.' },
    { letter: 'घ', pronunciation: 'gha', example: 'घर (Ghar)', sentence: 'घर में परिवार रहता है।', translation: 'A family lives in the house.' },
    { letter: 'ङ', pronunciation: 'nga', example: 'अंगूर (Angoor)', sentence: 'अंगूर मीठे और रसीले होते हैं।', translation: 'Grapes are sweet and juicy.' },
    { letter: 'च', pronunciation: 'cha', example: 'चम्मच (Chammach)', sentence: 'चम्मच से खाना खाया जाता है।', translation: 'Food is eaten with a spoon.' },
    { letter: 'छ', pronunciation: 'chha', example: 'छत (Chhat)', sentence: 'छत पर कपड़े सुखाए जाते हैं।', translation: 'Clothes are dried on the roof.' },
    { letter: 'ज', pronunciation: 'ja', example: 'जंगल (Jangal)', sentence: 'जंगल में कई जानवर रहते हैं।', translation: 'Many animals live in the forest.' },
    { letter: 'झ', pronunciation: 'jha', example: 'झरना (Jharna)', sentence: 'झरना पहाड़ों से गिरता है।', translation: 'The waterfall falls from the mountains.' },
    { letter: 'ञ', pronunciation: 'nya', example: 'कन्या (Kanya)', sentence: 'कन्या स्कूल जाती है।', translation: 'The girl goes to school.' },
    { letter: 'ट', pronunciation: 'ta', example: 'टमाटर (Tamaatar)', sentence: 'टमाटर सब्जी में डाला जाता है।', translation: 'Tomato is used in curry.' },
    { letter: 'ठ', pronunciation: 'tha', example: 'ठंड (Thand)', sentence: 'ठंड में लोग गरम कपड़े पहनते हैं।', translation: 'People wear warm clothes in the cold.' },
    { letter: 'ड', pronunciation: 'da', example: 'डाक (Daak)', sentence: 'डाक से चिट्ठियाँ आती हैं।', translation: 'Letters come by mail.' },
    { letter: 'ढ', pronunciation: 'dha', example: 'ढोल (Dhol)', sentence: 'ढोल उत्सव में बजाया जाता है।', translation: 'The drum is played at festivals.' },
    { letter: 'ण', pronunciation: 'na', example: 'पर्ण (Parn)', sentence: 'पर्ण पेड़ का हिस्सा होता है।', translation: 'A leaf is part of a tree.' },
    { letter: 'त', pronunciation: 'ta', example: 'तारा (Taara)', sentence: 'तारा रात में चमकता है।', translation: 'The star shines at night.' },
    { letter: 'थ', pronunciation: 'tha', example: 'थाली (Thaali)', sentence: 'थाली में खाना परोसा जाता है।', translation: 'Food is served on a plate.' },
    { letter: 'द', pronunciation: 'da', example: 'दाल (Daal)', sentence: 'दाल रोज खाई जाती है।', translation: 'Lentils are eaten daily.' },
    { letter: 'ध', pronunciation: 'dha', example: 'धन (Dhan)', sentence: 'धन से सुख खरीदा नहीं जा सकता।', translation: 'Happiness cannot be bought with money.' },
    { letter: 'न', pronunciation: 'na', example: 'नदी (Nadi)', sentence: 'नदी गाँव के पास बहती है।', translation: 'The river flows near the village.' },
    { letter: 'प', pronunciation: 'pa', example: 'पक्षी (Pakshi)', sentence: 'पक्षी आसमान में उड़ते हैं।', translation: 'Birds fly in the sky.' },
    { letter: 'फ', pronunciation: 'pha', example: 'फल (Phal)', sentence: 'फल स्वास्थ्य के लिए अच्छे हैं।', translation: 'Fruits are good for health.' },
    { letter: 'ब', pronunciation: 'ba', example: 'बंदर (Bandar)', sentence: 'बंदर पेड़ पर चढ़ता है।', translation: 'The monkey climbs the tree.' },
    { letter: 'भ', pronunciation: 'bha', example: 'भालू (Bhaalu)', sentence: 'भालू जंगल में रहता है।', translation: 'The bear lives in the forest.' },
    { letter: 'म', pronunciation: 'ma', example: 'मछली (Machhli)', sentence: 'मछली पानी में तैरती है।', translation: 'The fish swims in water.' },
    { letter: 'य', pronunciation: 'ya', example: 'यमुना (Yamuna)', sentence: 'यमुना एक पवित्र नदी है।', translation: 'The Yamuna is a sacred river.' },
    { letter: 'र', pronunciation: 'ra', example: 'रंग (Rang)', sentence: 'रंग जीवन को सुंदर बनाते हैं।', translation: 'Colors make life beautiful.' },
    { letter: 'ल', pronunciation: 'la', example: 'लाल (Laal)', sentence: 'लाल रंग बहुत चटकीला होता है।', translation: 'The color red is very vibrant.' },
    { letter: 'व', pronunciation: 'va', example: 'वन (Van)', sentence: 'वन में शांति मिलती है।', translation: 'Peace is found in the forest.' },
    { letter: 'श', pronunciation: 'sha', example: 'शेर (Sher)', sentence: 'शेर जंगल का राजा है।', translation: 'The lion is the king of the jungle.' },
    { letter: 'ष', pronunciation: 'sha', example: 'कषाय (Kashaay)', sentence: 'कषाय का स्वाद कड़वा होता है।', translation: 'The decoction has a bitter taste.' },
    { letter: 'स', pronunciation: 'sa', example: 'सूरज (Sooraj)', sentence: 'सूरज सुबह उगता है।', translation: 'The sun rises in the morning.' },
    { letter: 'ह', pronunciation: 'ha', example: 'हाथी (Haathi)', sentence: 'हाथी बहुत बड़ा और शक्तिशाली जानवर होता है।', translation: 'The elephant is a very large and powerful animal.' },
    { letter: 'क्ष', pronunciation: 'ksha', example: 'क्षेत्र (Kshetra)', sentence: 'क्षेत्र में खेती होती है।', translation: 'Farming is done in the field.' },
    { letter: 'त्र', pronunciation: 'tra', example: 'त्रिशूल (Trishool)', sentence: 'त्रिशूल भगवान शिव का हथियार है।', translation: 'The trident is Lord Shiva’s weapon.' },
    { letter: 'ज्ञ', pronunciation: 'gya', example: 'ज्ञान (Gyaan)', sentence: 'ज्ञान जीवन का आधार है।', translation: 'Knowledge is the foundation of life.' },
];

const cardGrid = document.getElementById('cardGrid');

function speakWithDelay(letter, example, sentence, translation, delay = 250) {
    // Cancel any ongoing speech to avoid overlap
    window.speechSynthesis.cancel();

    // Add visual feedback for the active card
    const activeCard = document.querySelector('.card.speaking');
    if (activeCard) {
        activeCard.classList.remove('speaking');
    }
    event.currentTarget.classList.add('speaking');
    
    // Speak the letter
    const letterUtterance = new SpeechSynthesisUtterance(letter);
    letterUtterance.lang = 'hi-IN';
    letterUtterance.rate = 1;

    // Speak the example (only the Hindi word)
    const exampleUtterance = new SpeechSynthesisUtterance(example.split(' ')[0]);
    exampleUtterance.lang = 'hi-IN';
    exampleUtterance.rate = 1;

    // Speak the sentence
    const sentenceUtterance = new SpeechSynthesisUtterance(sentence);
    sentenceUtterance.lang = 'hi-IN';
    sentenceUtterance.rate = 1;

    // Speak the translation
    const translationUtterance = new SpeechSynthesisUtterance(translation);
    translationUtterance.lang = 'en-GB'; 
    translationUtterance.rate = 1;

    // Play the sequence: letter -> delay -> example -> delay -> sentence -> delay -> translation
    window.speechSynthesis.speak(letterUtterance);

    letterUtterance.onend = () => {
        setTimeout(() => {
            window.speechSynthesis.speak(exampleUtterance);
            exampleUtterance.onend = () => {
                setTimeout(() => {
                    window.speechSynthesis.speak(sentenceUtterance);
                    sentenceUtterance.onend = () => {
                        setTimeout(() => {
                            window.speechSynthesis.speak(translationUtterance);
                            translationUtterance.onend = () => {
                                // Remove speaking class when audio finishes
                                event.currentTarget.classList.remove('speaking');
                            };
                        }, delay);
                    };
                }, delay);
            };
        }, delay);
    };
}

function createFlashcards() {
    hindiLetters.forEach(letter => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Add tabindex="-1" to prevent focus
        card.setAttribute('tabindex', '-1');

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        cardFront.textContent = letter.letter;

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');

        const pronunciation = document.createElement('p');
        pronunciation.innerHTML = `<strong>${letter.pronunciation}</strong> - ${letter.example}`;

        const sentenceText = document.createElement('p');
        sentenceText.textContent = letter.sentence;

        const translationText = document.createElement('p');
        translationText.textContent = letter.translation;

        // Play letter, example, sentence, and translation with delays on click
        card.addEventListener('click', (event) => {
            // Prevent default focus behavior
            event.preventDefault();
            
            // Remove focus immediately after click
            card.blur();
            
            speakWithDelay(letter.letter, letter.example, letter.sentence, letter.translation, 250);
            
            // Add pulse animation on click
            card.classList.add('pulse');
            setTimeout(() => {
                card.classList.remove('pulse');
            }, 1000);
        });
        
        // Prevent focus on mousedown
        card.addEventListener('mousedown', (event) => {
            event.preventDefault();
        });

        cardBack.appendChild(pronunciation);
        cardBack.appendChild(sentenceText);
        cardBack.appendChild(translationText);

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        cardGrid.appendChild(card);
    });
}

// Add this CSS dynamically for the speaking and pulse animations
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .card.pulse {
        animation: pulse 1s ease;
    }
    
    .card.speaking {
        box-shadow: 0 0 0 3px #ff7e5f;
    }
    
    .card.speaking .card-inner {
        box-shadow: 0 0 20px rgba(255, 126, 95, 0.6);
    }
    
    /* This will remove the orange highlight on mobile devices */
    * {
        -webkit-tap-highlight-color: transparent;
    }
`;
document.head.appendChild(style);

createFlashcards();