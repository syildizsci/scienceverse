// ===== Element Data =====
const elements = [
    { number: 1, symbol: 'H', name: 'Hydrogen', mass: 1.008, category: 'nonmetal', group: 1, period: 1, electrons: '1', discovered: '1766', discoverer: 'Henry Cavendish', description: 'The lightest and most abundant element in the universe.' },
    { number: 2, symbol: 'He', name: 'Helium', mass: 4.003, category: 'noble', group: 18, period: 1, electrons: '2', discovered: '1868', discoverer: 'Pierre Janssen', description: 'An inert noble gas used in balloons and cryogenics.' },
    { number: 3, symbol: 'Li', name: 'Lithium', mass: 6.941, category: 'alkali', group: 1, period: 2, electrons: '2,1', discovered: '1817', discoverer: 'Johan Arfwedson', description: 'A soft alkali metal used in batteries and medication.' },
    { number: 4, symbol: 'Be', name: 'Beryllium', mass: 9.012, category: 'alkaline', group: 2, period: 2, electrons: '2,2', discovered: '1797', discoverer: 'Louis Vauquelin', description: 'A light, strong metal used in aerospace applications.' },
    { number: 5, symbol: 'B', name: 'Boron', mass: 10.81, category: 'metalloid', group: 13, period: 2, electrons: '2,3', discovered: '1808', discoverer: 'Joseph Gay-Lussac', description: 'A metalloid used in glass and ceramics.' },
    { number: 6, symbol: 'C', name: 'Carbon', mass: 12.01, category: 'nonmetal', group: 14, period: 2, electrons: '2,4', discovered: 'Ancient', discoverer: 'Known since antiquity', description: 'The basis of organic chemistry and all known life.' },
    { number: 7, symbol: 'N', name: 'Nitrogen', mass: 14.01, category: 'nonmetal', group: 15, period: 2, electrons: '2,5', discovered: '1772', discoverer: 'Daniel Rutherford', description: 'Makes up 78% of Earth\'s atmosphere.' },
    { number: 8, symbol: 'O', name: 'Oxygen', mass: 16.00, category: 'nonmetal', group: 16, period: 2, electrons: '2,6', discovered: '1774', discoverer: 'Joseph Priestley', description: 'Essential for respiration in most life forms.' },
    { number: 9, symbol: 'F', name: 'Fluorine', mass: 19.00, category: 'halogen', group: 17, period: 2, electrons: '2,7', discovered: '1886', discoverer: 'Henri Moissan', description: 'The most reactive and electronegative element.' },
    { number: 10, symbol: 'Ne', name: 'Neon', mass: 20.18, category: 'noble', group: 18, period: 2, electrons: '2,8', discovered: '1898', discoverer: 'William Ramsay', description: 'A noble gas used in neon signs and lasers.' },
    { number: 11, symbol: 'Na', name: 'Sodium', mass: 22.99, category: 'alkali', group: 1, period: 3, electrons: '2,8,1', discovered: '1807', discoverer: 'Humphry Davy', description: 'A soft, reactive metal essential for life.' },
    { number: 12, symbol: 'Mg', name: 'Magnesium', mass: 24.31, category: 'alkaline', group: 2, period: 3, electrons: '2,8,2', discovered: '1755', discoverer: 'Joseph Black', description: 'A light metal used in alloys and fireworks.' },
    { number: 13, symbol: 'Al', name: 'Aluminum', mass: 26.98, category: 'post-transition', group: 13, period: 3, electrons: '2,8,3', discovered: '1825', discoverer: 'Hans Christian Ørsted', description: 'A lightweight metal widely used in packaging.' },
    { number: 14, symbol: 'Si', name: 'Silicon', mass: 28.09, category: 'metalloid', group: 14, period: 3, electrons: '2,8,4', discovered: '1824', discoverer: 'Jöns Jacob Berzelius', description: 'The basis of computer chips and semiconductors.' },
    { number: 15, symbol: 'P', name: 'Phosphorus', mass: 30.97, category: 'nonmetal', group: 15, period: 3, electrons: '2,8,5', discovered: '1669', discoverer: 'Hennig Brand', description: 'Essential for DNA and energy transfer in cells.' },
    { number: 16, symbol: 'S', name: 'Sulfur', mass: 32.07, category: 'nonmetal', group: 16, period: 3, electrons: '2,8,6', discovered: 'Ancient', discoverer: 'Known since antiquity', description: 'A yellow element used in fertilizers and rubber.' },
    { number: 17, symbol: 'Cl', name: 'Chlorine', mass: 35.45, category: 'halogen', group: 17, period: 3, electrons: '2,8,7', discovered: '1774', discoverer: 'Carl Wilhelm Scheele', description: 'A toxic gas used in water purification.' },
    { number: 18, symbol: 'Ar', name: 'Argon', mass: 39.95, category: 'noble', group: 18, period: 3, electrons: '2,8,8', discovered: '1894', discoverer: 'Lord Rayleigh', description: 'An inert gas used in welding and lighting.' },
    { number: 19, symbol: 'K', name: 'Potassium', mass: 39.10, category: 'alkali', group: 1, period: 4, electrons: '2,8,8,1', discovered: '1807', discoverer: 'Humphry Davy', description: 'Essential for nerve function and plant growth.' },
    { number: 20, symbol: 'Ca', name: 'Calcium', mass: 40.08, category: 'alkaline', group: 2, period: 4, electrons: '2,8,8,2', discovered: '1808', discoverer: 'Humphry Davy', description: 'Essential for bones, teeth, and cell signaling.' },
    { number: 21, symbol: 'Sc', name: 'Scandium', mass: 44.96, category: 'transition', group: 3, period: 4, electrons: '2,8,9,2', discovered: '1879', discoverer: 'Lars Fredrik Nilson', description: 'A transition metal used in aerospace alloys.' },
    { number: 22, symbol: 'Ti', name: 'Titanium', mass: 47.87, category: 'transition', group: 4, period: 4, electrons: '2,8,10,2', discovered: '1791', discoverer: 'William Gregor', description: 'A strong, lightweight metal used in aerospace.' },
    { number: 23, symbol: 'V', name: 'Vanadium', mass: 50.94, category: 'transition', group: 5, period: 4, electrons: '2,8,11,2', discovered: '1801', discoverer: 'Andrés Manuel del Río', description: 'Used to strengthen steel and titanium alloys.' },
    { number: 24, symbol: 'Cr', name: 'Chromium', mass: 52.00, category: 'transition', group: 6, period: 4, electrons: '2,8,13,1', discovered: '1797', discoverer: 'Louis Vauquelin', description: 'A hard metal used for chrome plating.' },
    { number: 25, symbol: 'Mn', name: 'Manganese', mass: 54.94, category: 'transition', group: 7, period: 4, electrons: '2,8,13,2', discovered: '1774', discoverer: 'Johan Gahn', description: 'Essential for steel production and metabolism.' },
    { number: 26, symbol: 'Fe', name: 'Iron', mass: 55.85, category: 'transition', group: 8, period: 4, electrons: '2,8,14,2', discovered: 'Ancient', discoverer: 'Known since antiquity', description: 'The most commonly used metal on Earth.' },
    { number: 27, symbol: 'Co', name: 'Cobalt', mass: 58.93, category: 'transition', group: 9, period: 4, electrons: '2,8,15,2', discovered: '1735', discoverer: 'Georg Brandt', description: 'Used in batteries and blue pigments.' },
    { number: 28, symbol: 'Ni', name: 'Nickel', mass: 58.69, category: 'transition', group: 10, period: 4, electrons: '2,8,16,2', discovered: '1751', discoverer: 'Axel Cronstedt', description: 'Used in coins, batteries, and alloys.' },
    { number: 29, symbol: 'Cu', name: 'Copper', mass: 63.55, category: 'transition', group: 11, period: 4, electrons: '2,8,18,1', discovered: 'Ancient', discoverer: 'Known since antiquity', description: 'An excellent conductor used in wiring.' },
    { number: 30, symbol: 'Zn', name: 'Zinc', mass: 65.38, category: 'transition', group: 12, period: 4, electrons: '2,8,18,2', discovered: 'Ancient', discoverer: 'Known since antiquity', description: 'Used for galvanizing steel and in batteries.' },
    { number: 31, symbol: 'Ga', name: 'Gallium', mass: 69.72, category: 'post-transition', group: 13, period: 4, electrons: '2,8,18,3', discovered: '1875', discoverer: 'Paul Emile Lecoq', description: 'A metal that melts in your hand.' },
    { number: 32, symbol: 'Ge', name: 'Germanium', mass: 72.63, category: 'metalloid', group: 14, period: 4, electrons: '2,8,18,4', discovered: '1886', discoverer: 'Clemens Winkler', description: 'Used in semiconductors and fiber optics.' },
    { number: 33, symbol: 'As', name: 'Arsenic', mass: 74.92, category: 'metalloid', group: 15, period: 4, electrons: '2,8,18,5', discovered: 'Ancient', discoverer: 'Known since antiquity', description: 'A toxic metalloid used in semiconductors.' },
    { number: 34, symbol: 'Se', name: 'Selenium', mass: 78.97, category: 'nonmetal', group: 16, period: 4, electrons: '2,8,18,6', discovered: '1817', discoverer: 'Jöns Jacob Berzelius', description: 'Essential trace element for humans.' },
    { number: 35, symbol: 'Br', name: 'Bromine', mass: 79.90, category: 'halogen', group: 17, period: 4, electrons: '2,8,18,7', discovered: '1826', discoverer: 'Antoine Balard', description: 'A red-brown liquid halogen.' },
    { number: 36, symbol: 'Kr', name: 'Krypton', mass: 83.80, category: 'noble', group: 18, period: 4, electrons: '2,8,18,8', discovered: '1898', discoverer: 'William Ramsay', description: 'A noble gas used in photography and lighting.' },
    { number: 37, symbol: 'Rb', name: 'Rubidium', mass: 85.47, category: 'alkali', group: 1, period: 5, electrons: '2,8,18,8,1', discovered: '1861', discoverer: 'Robert Bunsen', description: 'A soft alkali metal used in atomic clocks.' },
    { number: 38, symbol: 'Sr', name: 'Strontium', mass: 87.62, category: 'alkaline', group: 2, period: 5, electrons: '2,8,18,8,2', discovered: '1790', discoverer: 'Adair Crawford', description: 'Used in fireworks for red color.' },
    { number: 39, symbol: 'Y', name: 'Yttrium', mass: 88.91, category: 'transition', group: 3, period: 5, electrons: '2,8,18,9,2', discovered: '1794', discoverer: 'Johan Gadolin', description: 'Used in LEDs and superconductors.' },
    { number: 40, symbol: 'Zr', name: 'Zirconium', mass: 91.22, category: 'transition', group: 4, period: 5, electrons: '2,8,18,10,2', discovered: '1789', discoverer: 'Martin Klaproth', description: 'Used in nuclear reactors and ceramics.' },
    { number: 41, symbol: 'Nb', name: 'Niobium', mass: 92.91, category: 'transition', group: 5, period: 5, electrons: '2,8,18,12,1', discovered: '1801', discoverer: 'Charles Hatchett', description: 'Used in superconducting magnets.' },
    { number: 42, symbol: 'Mo', name: 'Molybdenum', mass: 95.95, category: 'transition', group: 6, period: 5, electrons: '2,8,18,13,1', discovered: '1781', discoverer: 'Carl Wilhelm Scheele', description: 'Essential trace element, used in steel.' },
    { number: 43, symbol: 'Tc', name: 'Technetium', mass: 98, category: 'transition', group: 7, period: 5, electrons: '2,8,18,13,2', discovered: '1937', discoverer: 'Carlo Perrier', description: 'First artificially produced element.' },
    { number: 44, symbol: 'Ru', name: 'Ruthenium', mass: 101.1, category: 'transition', group: 8, period: 5, electrons: '2,8,18,15,1', discovered: '1844', discoverer: 'Karl Ernst Claus', description: 'Used in electronics and catalysis.' },
    { number: 45, symbol: 'Rh', name: 'Rhodium', mass: 102.9, category: 'transition', group: 9, period: 5, electrons: '2,8,18,16,1', discovered: '1803', discoverer: 'William Wollaston', description: 'Used in catalytic converters.' },
    { number: 46, symbol: 'Pd', name: 'Palladium', mass: 106.4, category: 'transition', group: 10, period: 5, electrons: '2,8,18,18', discovered: '1803', discoverer: 'William Wollaston', description: 'Used in catalytic converters and jewelry.' },
    { number: 47, symbol: 'Ag', name: 'Silver', mass: 107.9, category: 'transition', group: 11, period: 5, electrons: '2,8,18,18,1', discovered: 'Ancient', discoverer: 'Known since antiquity', description: 'Best electrical conductor, used in jewelry.' },
    { number: 48, symbol: 'Cd', name: 'Cadmium', mass: 112.4, category: 'transition', group: 12, period: 5, electrons: '2,8,18,18,2', discovered: '1817', discoverer: 'Friedrich Stromeyer', description: 'Used in batteries and pigments.' },
    { number: 49, symbol: 'In', name: 'Indium', mass: 114.8, category: 'post-transition', group: 13, period: 5, electrons: '2,8,18,18,3', discovered: '1863', discoverer: 'Ferdinand Reich', description: 'Used in touchscreens and solar cells.' },
    { number: 50, symbol: 'Sn', name: 'Tin', mass: 118.7, category: 'post-transition', group: 14, period: 5, electrons: '2,8,18,18,4', discovered: 'Ancient', discoverer: 'Known since antiquity', description: 'Used in solder and tin cans.' },
    { number: 51, symbol: 'Sb', name: 'Antimony', mass: 121.8, category: 'metalloid', group: 15, period: 5, electrons: '2,8,18,18,5', discovered: 'Ancient', discoverer: 'Known since antiquity', description: 'Used in flame retardants and alloys.' },
    { number: 52, symbol: 'Te', name: 'Tellurium', mass: 127.6, category: 'metalloid', group: 16, period: 5, electrons: '2,8,18,18,6', discovered: '1782', discoverer: 'Franz-Joseph Müller', description: 'Used in solar cells and alloys.' },
    { number: 53, symbol: 'I', name: 'Iodine', mass: 126.9, category: 'halogen', group: 17, period: 5, electrons: '2,8,18,18,7', discovered: '1811', discoverer: 'Bernard Courtois', description: 'Essential for thyroid function.' },
    { number: 54, symbol: 'Xe', name: 'Xenon', mass: 131.3, category: 'noble', group: 18, period: 5, electrons: '2,8,18,18,8', discovered: '1898', discoverer: 'William Ramsay', description: 'Used in flash lamps and anesthesia.' },
    { number: 55, symbol: 'Cs', name: 'Cesium', mass: 132.9, category: 'alkali', group: 1, period: 6, electrons: '2,8,18,18,8,1', discovered: '1860', discoverer: 'Robert Bunsen', description: 'Used in atomic clocks.' },
    { number: 56, symbol: 'Ba', name: 'Barium', mass: 137.3, category: 'alkaline', group: 2, period: 6, electrons: '2,8,18,18,8,2', discovered: '1808', discoverer: 'Humphry Davy', description: 'Used in X-ray imaging and fireworks.' },
    { number: 72, symbol: 'Hf', name: 'Hafnium', mass: 178.5, category: 'transition', group: 4, period: 6, electrons: '2,8,18,32,10,2', discovered: '1923', discoverer: 'Dirk Coster', description: 'Used in nuclear reactors.' },
    { number: 73, symbol: 'Ta', name: 'Tantalum', mass: 180.9, category: 'transition', group: 5, period: 6, electrons: '2,8,18,32,11,2', discovered: '1802', discoverer: 'Anders Ekeberg', description: 'Used in electronics and surgical implants.' },
    { number: 74, symbol: 'W', name: 'Tungsten', mass: 183.8, category: 'transition', group: 6, period: 6, electrons: '2,8,18,32,12,2', discovered: '1783', discoverer: 'Fausto Elhuyar', description: 'Has the highest melting point of all elements.' },
    { number: 75, symbol: 'Re', name: 'Rhenium', mass: 186.2, category: 'transition', group: 7, period: 6, electrons: '2,8,18,32,13,2', discovered: '1925', discoverer: 'Walter Noddack', description: 'One of the rarest elements on Earth.' },
    { number: 76, symbol: 'Os', name: 'Osmium', mass: 190.2, category: 'transition', group: 8, period: 6, electrons: '2,8,18,32,14,2', discovered: '1803', discoverer: 'Smithson Tennant', description: 'The densest naturally occurring element.' },
    { number: 77, symbol: 'Ir', name: 'Iridium', mass: 192.2, category: 'transition', group: 9, period: 6, electrons: '2,8,18,32,15,2', discovered: '1803', discoverer: 'Smithson Tennant', description: 'Most corrosion-resistant metal.' },
    { number: 78, symbol: 'Pt', name: 'Platinum', mass: 195.1, category: 'transition', group: 10, period: 6, electrons: '2,8,18,32,17,1', discovered: '1735', discoverer: 'Antonio de Ulloa', description: 'A precious metal used in catalysts and jewelry.' },
    { number: 79, symbol: 'Au', name: 'Gold', mass: 197.0, category: 'transition', group: 11, period: 6, electrons: '2,8,18,32,18,1', discovered: 'Ancient', discoverer: 'Known since antiquity', description: 'A precious metal prized for its beauty.' },
    { number: 80, symbol: 'Hg', name: 'Mercury', mass: 200.6, category: 'transition', group: 12, period: 6, electrons: '2,8,18,32,18,2', discovered: 'Ancient', discoverer: 'Known since antiquity', description: 'The only metal liquid at room temperature.' },
    { number: 81, symbol: 'Tl', name: 'Thallium', mass: 204.4, category: 'post-transition', group: 13, period: 6, electrons: '2,8,18,32,18,3', discovered: '1861', discoverer: 'William Crookes', description: 'A toxic metal once used in rat poison.' },
    { number: 82, symbol: 'Pb', name: 'Lead', mass: 207.2, category: 'post-transition', group: 14, period: 6, electrons: '2,8,18,32,18,4', discovered: 'Ancient', discoverer: 'Known since antiquity', description: 'A dense, toxic metal used in batteries.' },
    { number: 83, symbol: 'Bi', name: 'Bismuth', mass: 209.0, category: 'post-transition', group: 15, period: 6, electrons: '2,8,18,32,18,5', discovered: '1753', discoverer: 'Claude Geoffroy', description: 'Used in medicines and cosmetics.' },
    { number: 84, symbol: 'Po', name: 'Polonium', mass: 209, category: 'metalloid', group: 16, period: 6, electrons: '2,8,18,32,18,6', discovered: '1898', discoverer: 'Marie Curie', description: 'Highly radioactive, used in nuclear devices.' },
    { number: 85, symbol: 'At', name: 'Astatine', mass: 210, category: 'halogen', group: 17, period: 6, electrons: '2,8,18,32,18,7', discovered: '1940', discoverer: 'Dale Corson', description: 'The rarest naturally occurring element.' },
    { number: 86, symbol: 'Rn', name: 'Radon', mass: 222, category: 'noble', group: 18, period: 6, electrons: '2,8,18,32,18,8', discovered: '1900', discoverer: 'Friedrich Dorn', description: 'A radioactive noble gas.' },
    { number: 87, symbol: 'Fr', name: 'Francium', mass: 223, category: 'alkali', group: 1, period: 7, electrons: '2,8,18,32,18,8,1', discovered: '1939', discoverer: 'Marguerite Perey', description: 'Extremely rare and radioactive alkali metal.' },
    { number: 88, symbol: 'Ra', name: 'Radium', mass: 226, category: 'alkaline', group: 2, period: 7, electrons: '2,8,18,32,18,8,2', discovered: '1898', discoverer: 'Marie Curie', description: 'Radioactive element once used in watches.' },
    { number: 104, symbol: 'Rf', name: 'Rutherfordium', mass: 267, category: 'transition', group: 4, period: 7, electrons: '2,8,18,32,32,10,2', discovered: '1964', discoverer: 'Soviet Joint Institute', description: 'Named after Ernest Rutherford.' },
    { number: 105, symbol: 'Db', name: 'Dubnium', mass: 268, category: 'transition', group: 5, period: 7, electrons: '2,8,18,32,32,11,2', discovered: '1967', discoverer: 'Soviet Joint Institute', description: 'Named after Dubna, Russia.' },
    { number: 106, symbol: 'Sg', name: 'Seaborgium', mass: 269, category: 'transition', group: 6, period: 7, electrons: '2,8,18,32,32,12,2', discovered: '1974', discoverer: 'Lawrence Berkeley Lab', description: 'Named after Glenn Seaborg.' },
    { number: 107, symbol: 'Bh', name: 'Bohrium', mass: 270, category: 'transition', group: 7, period: 7, electrons: '2,8,18,32,32,13,2', discovered: '1981', discoverer: 'GSI Helmholtz Centre', description: 'Named after Niels Bohr.' },
    { number: 108, symbol: 'Hs', name: 'Hassium', mass: 277, category: 'transition', group: 8, period: 7, electrons: '2,8,18,32,32,14,2', discovered: '1984', discoverer: 'GSI Helmholtz Centre', description: 'Named after Hesse, Germany.' },
    { number: 109, symbol: 'Mt', name: 'Meitnerium', mass: 278, category: 'transition', group: 9, period: 7, electrons: '2,8,18,32,32,15,2', discovered: '1982', discoverer: 'GSI Helmholtz Centre', description: 'Named after Lise Meitner.' },
    { number: 110, symbol: 'Ds', name: 'Darmstadtium', mass: 281, category: 'transition', group: 10, period: 7, electrons: '2,8,18,32,32,16,2', discovered: '1994', discoverer: 'GSI Helmholtz Centre', description: 'Named after Darmstadt, Germany.' },
    { number: 111, symbol: 'Rg', name: 'Roentgenium', mass: 282, category: 'transition', group: 11, period: 7, electrons: '2,8,18,32,32,17,2', discovered: '1994', discoverer: 'GSI Helmholtz Centre', description: 'Named after Wilhelm Röntgen.' },
    { number: 112, symbol: 'Cn', name: 'Copernicium', mass: 285, category: 'transition', group: 12, period: 7, electrons: '2,8,18,32,32,18,2', discovered: '1996', discoverer: 'GSI Helmholtz Centre', description: 'Named after Nicolaus Copernicus.' },
    { number: 113, symbol: 'Nh', name: 'Nihonium', mass: 286, category: 'post-transition', group: 13, period: 7, electrons: '2,8,18,32,32,18,3', discovered: '2003', discoverer: 'RIKEN', description: 'Named after Japan (Nihon).' },
    { number: 114, symbol: 'Fl', name: 'Flerovium', mass: 289, category: 'post-transition', group: 14, period: 7, electrons: '2,8,18,32,32,18,4', discovered: '1998', discoverer: 'JINR', description: 'Named after Flerov Laboratory.' },
    { number: 115, symbol: 'Mc', name: 'Moscovium', mass: 290, category: 'post-transition', group: 15, period: 7, electrons: '2,8,18,32,32,18,5', discovered: '2003', discoverer: 'JINR', description: 'Named after Moscow.' },
    { number: 116, symbol: 'Lv', name: 'Livermorium', mass: 293, category: 'post-transition', group: 16, period: 7, electrons: '2,8,18,32,32,18,6', discovered: '2000', discoverer: 'JINR', description: 'Named after Livermore, California.' },
    { number: 117, symbol: 'Ts', name: 'Tennessine', mass: 294, category: 'halogen', group: 17, period: 7, electrons: '2,8,18,32,32,18,7', discovered: '2010', discoverer: 'JINR', description: 'Named after Tennessee.' },
    { number: 118, symbol: 'Og', name: 'Oganesson', mass: 294, category: 'noble', group: 18, period: 7, electrons: '2,8,18,32,32,18,8', discovered: '2002', discoverer: 'JINR', description: 'Named after Yuri Oganessian.' }
];

// ===== Quiz Questions =====
const quizQuestions = {
    chemistry: [
        { q: "What is the chemical symbol for Gold?", a: ["Au", "Ag", "Go", "Gd"], correct: 0 },
        { q: "How many electrons does Carbon have?", a: ["4", "6", "8", "12"], correct: 1 },
        { q: "What is the most abundant gas in Earth's atmosphere?", a: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correct: 2 },
        { q: "What is the pH of a neutral solution?", a: ["0", "7", "14", "1"], correct: 1 },
        { q: "Which element has the highest electronegativity?", a: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"], correct: 2 },
        { q: "What type of bond involves sharing of electrons?", a: ["Ionic", "Covalent", "Metallic", "Hydrogen"], correct: 1 },
        { q: "What is the molecular formula of water?", a: ["HO", "H2O", "H2O2", "OH"], correct: 1 },
        { q: "Which subatomic particle has no charge?", a: ["Proton", "Electron", "Neutron", "Positron"], correct: 2 },
        { q: "What is Avogadro's number approximately equal to?", a: ["6.02 × 10²³", "3.14 × 10⁸", "9.8 × 10¹⁰", "1.6 × 10⁻¹⁹"], correct: 0 },
        { q: "Which element is a noble gas?", a: ["Nitrogen", "Oxygen", "Helium", "Hydrogen"], correct: 2 }
    ],
    physics: [
        { q: "What is the SI unit of force?", a: ["Joule", "Watt", "Newton", "Pascal"], correct: 2 },
        { q: "What is the speed of light in vacuum?", a: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"], correct: 0 },
        { q: "What is the formula for kinetic energy?", a: ["mgh", "½mv²", "Fd", "ma"], correct: 1 },
        { q: "Which law states F = ma?", a: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Conservation"], correct: 1 },
        { q: "What is the unit of electrical resistance?", a: ["Volt", "Ampere", "Ohm", "Watt"], correct: 2 },
        { q: "What type of wave is sound?", a: ["Transverse", "Longitudinal", "Electromagnetic", "Standing"], correct: 1 },
        { q: "What is the acceleration due to gravity on Earth?", a: ["9.8 m/s²", "10.8 m/s²", "8.9 m/s²", "11 m/s²"], correct: 0 },
        { q: "Which color of light has the longest wavelength?", a: ["Violet", "Blue", "Green", "Red"], correct: 3 },
        { q: "What is the SI unit of power?", a: ["Joule", "Newton", "Watt", "Pascal"], correct: 2 },
        { q: "What phenomenon causes a rainbow?", a: ["Reflection", "Refraction", "Diffraction", "Dispersion"], correct: 3 }
    ],
    biology: [
        { q: "What is the powerhouse of the cell?", a: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"], correct: 2 },
        { q: "What molecule carries genetic information?", a: ["RNA", "DNA", "Protein", "Lipid"], correct: 1 },
        { q: "How many chromosomes do humans have?", a: ["23", "46", "44", "48"], correct: 1 },
        { q: "What is the process by which plants make food?", a: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"], correct: 1 },
        { q: "Which base pairs with Adenine in DNA?", a: ["Guanine", "Cytosine", "Thymine", "Uracil"], correct: 2 },
        { q: "What is the largest organ in the human body?", a: ["Heart", "Liver", "Brain", "Skin"], correct: 3 },
        { q: "What type of cell division produces gametes?", a: ["Mitosis", "Meiosis", "Binary Fission", "Budding"], correct: 1 },
        { q: "What is the basic unit of life?", a: ["Atom", "Molecule", "Cell", "Organ"], correct: 2 },
        { q: "Which organelle is responsible for protein synthesis?", a: ["Mitochondria", "Ribosome", "Lysosome", "Vacuole"], correct: 1 },
        { q: "What is the green pigment in plants called?", a: ["Carotene", "Xanthophyll", "Chlorophyll", "Melanin"], correct: 2 }
    ]
};

// ===== Navigation =====
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.dataset.section;
        navigateTo(section);
    });
});

document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', () => {
        const section = card.dataset.section;
        navigateTo(section);
    });
});

function navigateTo(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
}

// ===== Periodic Table =====
function initPeriodicTable() {
    const table = document.getElementById('periodicTable');
    
    // Create grid positions for elements
    const positions = {};
    elements.forEach(el => {
        if (el.group && el.period) {
            positions[`${el.period}-${el.group}`] = el;
        }
    });

    // Generate table
    for (let period = 1; period <= 7; period++) {
        for (let group = 1; group <= 18; group++) {
            const el = positions[`${period}-${group}`];
            const div = document.createElement('div');
            
            if (el) {
                div.className = `element ${el.category}`;
                div.innerHTML = `
                    <span class="number">${el.number}</span>
                    <span class="symbol">${el.symbol}</span>
                    <span class="name">${el.name}</span>
                `;
                div.addEventListener('click', () => showElementDetails(el));
            } else {
                div.className = 'element empty';
                div.style.visibility = 'hidden';
            }
            
            table.appendChild(div);
        }
    }
}

function showElementDetails(el) {
    const details = document.getElementById('elementDetails');
    details.innerHTML = `
        <div class="element-info">
            <div class="big-symbol ${el.category}">
                <span class="number">${el.number}</span>
                ${el.symbol}
            </div>
            <div>
                <h2>${el.name}</h2>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${el.description}</p>
                <div class="properties">
                    <div class="property">
                        <div class="property-label">Atomic Mass</div>
                        <div class="property-value">${el.mass} u</div>
                    </div>
                    <div class="property">
                        <div class="property-label">Category</div>
                        <div class="property-value">${el.category.replace('-', ' ')}</div>
                    </div>
                    <div class="property">
                        <div class="property-label">Electron Config</div>
                        <div class="property-value">${el.electrons}</div>
                    </div>
                    <div class="property">
                        <div class="property-label">Discovered</div>
                        <div class="property-value">${el.discovered}</div>
                    </div>
                    <div class="property">
                        <div class="property-label">Discoverer</div>
                        <div class="property-value">${el.discoverer}</div>
                    </div>
                    <div class="property">
                        <div class="property-label">Group / Period</div>
                        <div class="property-value">${el.group} / ${el.period}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ===== Physics Calculators =====
function calculateOhm() {
    const V = parseFloat(document.getElementById('voltage').value);
    const I = parseFloat(document.getElementById('current').value);
    const R = parseFloat(document.getElementById('resistance').value);
    const result = document.getElementById('ohmResult');

    const filled = [!isNaN(V), !isNaN(I), !isNaN(R)].filter(Boolean).length;
    
    if (filled !== 2) {
        result.innerHTML = '⚠️ Please fill exactly 2 values to calculate the third.';
        return;
    }

    if (isNaN(V)) {
        const voltage = I * R;
        result.innerHTML = `<strong>Voltage (V)</strong> = I × R = ${I} × ${R} = <strong>${voltage.toFixed(2)} V</strong>`;
    } else if (isNaN(I)) {
        const current = V / R;
        result.innerHTML = `<strong>Current (I)</strong> = V / R = ${V} / ${R} = <strong>${current.toFixed(4)} A</strong>`;
    } else {
        const resistance = V / I;
        result.innerHTML = `<strong>Resistance (R)</strong> = V / I = ${V} / ${I} = <strong>${resistance.toFixed(2)} Ω</strong>`;
    }
}

function calculateKinematics() {
    const v0 = parseFloat(document.getElementById('initVel').value) || 0;
    const a = parseFloat(document.getElementById('accel').value) || 0;
    const t = parseFloat(document.getElementById('time').value) || 0;
    const result = document.getElementById('kinResult');

    const vf = v0 + a * t;
    const d = v0 * t + 0.5 * a * t * t;

    result.innerHTML = `
        <strong>Final Velocity:</strong> v = v₀ + at = ${v0} + (${a})(${t}) = <strong>${vf.toFixed(2)} m/s</strong><br>
        <strong>Displacement:</strong> d = v₀t + ½at² = (${v0})(${t}) + ½(${a})(${t})² = <strong>${d.toFixed(2)} m</strong>
    `;
}

// ===== Projectile Motion =====
let projectileAnimation = null;

function initProjectileCanvas() {
    const canvas = document.getElementById('projectileCanvas');
    const ctx = canvas.getContext('2d');
    drawProjectileScene(ctx, canvas);
    
    document.getElementById('angle').addEventListener('input', (e) => {
        document.getElementById('angleValue').textContent = e.target.value + '°';
    });
    
    document.getElementById('speed').addEventListener('input', (e) => {
        document.getElementById('speedValue').textContent = e.target.value + ' m/s';
    });
}

function drawProjectileScene(ctx, canvas) {
    ctx.fillStyle = '#1a472a';
    ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
}

function launchProjectile() {
    const canvas = document.getElementById('projectileCanvas');
    const ctx = canvas.getContext('2d');
    const angle = parseFloat(document.getElementById('angle').value) * Math.PI / 180;
    const speed = parseFloat(document.getElementById('speed').value);
    
    if (projectileAnimation) cancelAnimationFrame(projectileAnimation);
    
    const g = 9.8;
    const scale = 3;
    let t = 0;
    const dt = 0.05;
    const vx = speed * Math.cos(angle);
    const vy = speed * Math.sin(angle);
    const startX = 30;
    const startY = canvas.height - 25;
    const trail = [];

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw gradient background
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#1a1a2e');
        gradient.addColorStop(0.5, '#16213e');
        gradient.addColorStop(1, '#1a472a');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw ground
        ctx.fillStyle = '#2d5a27';
        ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
        
        // Calculate position
        const x = vx * t;
        const y = vy * t - 0.5 * g * t * t;
        
        const canvasX = startX + x * scale;
        const canvasY = startY - y * scale;
        
        // Store trail
        trail.push({ x: canvasX, y: canvasY });
        
        // Draw trail
        if (trail.length > 1) {
            ctx.beginPath();
            ctx.moveTo(trail[0].x, trail[0].y);
            for (let i = 1; i < trail.length; i++) {
                ctx.lineTo(trail[i].x, trail[i].y);
            }
            ctx.strokeStyle = 'rgba(0, 212, 255, 0.6)';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        
        // Draw projectile
        ctx.beginPath();
        ctx.arc(canvasX, canvasY, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#ff6b6b';
        ctx.fill();
        ctx.shadowColor = '#ff6b6b';
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Check bounds
        if (canvasY < startY && canvasX < canvas.width) {
            t += dt;
            projectileAnimation = requestAnimationFrame(animate);
        }
    }
    
    animate();
}

// ===== Biology Tabs =====
document.querySelectorAll('.bio-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.bio;
        
        document.querySelectorAll('.bio-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.bio-panel').forEach(p => p.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});

// ===== Quiz Game =====
let currentQuiz = {
    questions: [],
    current: 0,
    score: 0
};

document.querySelectorAll('.quiz-category').forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        startQuiz(category);
    });
});

function startQuiz(category) {
    let questions = [];
    
    if (category === 'mixed') {
        const all = [...quizQuestions.chemistry, ...quizQuestions.physics, ...quizQuestions.biology];
        questions = shuffleArray(all).slice(0, 10);
    } else {
        questions = shuffleArray([...quizQuestions[category]]).slice(0, 10);
    }
    
    currentQuiz = {
        questions,
        current: 0,
        score: 0
    };
    
    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizGame').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';
    
    showQuestion();
}

function showQuestion() {
    const q = currentQuiz.questions[currentQuiz.current];
    const total = currentQuiz.questions.length;
    
    document.getElementById('questionCount').textContent = `${currentQuiz.current + 1}/${total}`;
    document.getElementById('progressFill').style.width = `${((currentQuiz.current + 1) / total) * 100}%`;
    document.getElementById('score').textContent = currentQuiz.score;
    document.getElementById('questionText').textContent = q.q;
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = 'quiz-feedback';
    
    const container = document.getElementById('answersContainer');
    container.innerHTML = '';
    
    q.a.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer;
        btn.addEventListener('click', () => selectAnswer(index));
        container.appendChild(btn);
    });
}

function selectAnswer(index) {
    const q = currentQuiz.questions[currentQuiz.current];
    const buttons = document.querySelectorAll('.answer-btn');
    const feedback = document.getElementById('feedback');
    
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correct) {
            btn.classList.add('correct');
        } else if (i === index && index !== q.correct) {
            btn.classList.add('incorrect');
        }
    });
    
    if (index === q.correct) {
        currentQuiz.score += 10;
        feedback.textContent = '✓ Correct! Well done!';
        feedback.className = 'quiz-feedback correct';
    } else {
        feedback.textContent = `✗ Incorrect. The answer was: ${q.a[q.correct]}`;
        feedback.className = 'quiz-feedback incorrect';
    }
    
    setTimeout(() => {
        currentQuiz.current++;
        if (currentQuiz.current < currentQuiz.questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    document.getElementById('quizGame').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    
    const total = currentQuiz.questions.length * 10;
    const percent = Math.round((currentQuiz.score / total) * 100);
    
    document.getElementById('finalScore').textContent = `${currentQuiz.score}/${total}`;
    
    let message = '';
    if (percent >= 90) message = '🏆 Outstanding! You\'re a science genius!';
    else if (percent >= 70) message = '🌟 Great job! You really know your science!';
    else if (percent >= 50) message = '👍 Good effort! Keep learning!';
    else message = '📚 Keep studying! Science is fascinating!';
    
    document.getElementById('scoreMessage').textContent = message;
}

function resetQuiz() {
    document.getElementById('quizSetup').style.display = 'block';
    document.getElementById('quizGame').style.display = 'none';
    document.getElementById('quizResults').style.display = 'none';
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ===== AI Chat Knowledge Base (Bilingual) =====
const scienceKnowledge = {
    // Sun / Güneş
    "sun": {
        keywords: ["sun", "solar", "star", "güneş", "yıldız", "sıcak", "hot"],
        en: `☀️ <strong>About the Sun</strong><br><br>
        The Sun is a giant star at the center of our Solar System!<br><br>
        🔥 <strong>Why is it hot?</strong> In the Sun's core, hydrogen atoms fuse together to form helium. This "nuclear fusion" releases enormous energy!<br><br>
        📊 <strong>Fun Facts:</strong><br>
        • Surface temperature: 5,500°C (9,932°F)<br>
        • Core temperature: 15 million°C<br>
        • Distance from Earth: 150 million km<br>
        • Light takes 8 min 20 sec to reach us<br>
        • Age: 4.6 billion years`,
        tr: `☀️ <strong>Güneş Hakkında</strong><br><br>
        Güneş, Güneş Sistemi'nin merkezindeki dev bir yıldızdır!<br><br>
        🔥 <strong>Neden sıcak?</strong> Güneş'in merkezinde hidrojen atomları birleşerek helyuma dönüşür. Bu "nükleer füzyon" denilen olay muazzam enerji açığa çıkarır!<br><br>
        📊 <strong>İlginç Bilgiler:</strong><br>
        • Yüzey sıcaklığı: 5,500°C<br>
        • Merkez sıcaklığı: 15 milyon°C<br>
        • Dünya'dan uzaklığı: 150 milyon km<br>
        • Işığı bize ulaşması: 8 dakika 20 saniye<br>
        • Yaşı: 4.6 milyar yıl`
    },
    // Solar System / Güneş Sistemi
    "solar system": {
        keywords: ["solar system", "planets", "mercury", "venus", "mars", "jupiter", "saturn", "neptune", "uranus", "güneş sistemi", "gezegenler", "gezegen"],
        en: `🌌 <strong>The Solar System</strong><br><br>
        Our Solar System has 8 planets! In order:<br><br>
        1. ☿️ <strong>Mercury</strong> - Smallest, closest to Sun<br>
        2. ♀️ <strong>Venus</strong> - Hottest planet (462°C!)<br>
        3. 🌍 <strong>Earth</strong> - Our home, has life!<br>
        4. 🔴 <strong>Mars</strong> - The red planet, has robots<br>
        5. 🟠 <strong>Jupiter</strong> - Largest, giant gas ball<br>
        6. 🪐 <strong>Saturn</strong> - Has beautiful rings<br>
        7. 💠 <strong>Uranus</strong> - Rotates on its side<br>
        8. 🔵 <strong>Neptune</strong> - Coldest, very windy<br><br>
        🌟 Plus billions of asteroids, comets, and dwarf planets!`,
        tr: `🌌 <strong>Güneş Sistemi</strong><br><br>
        Güneş Sistemi'nde 8 gezegen var! Sırasıyla:<br><br>
        1. ☿️ <strong>Merkür</strong> - En küçük, Güneş'e en yakın<br>
        2. ♀️ <strong>Venüs</strong> - En sıcak gezegen (462°C!)<br>
        3. 🌍 <strong>Dünya</strong> - Bizim evimiz, yaşam var!<br>
        4. 🔴 <strong>Mars</strong> - Kızıl gezegen, robotlar var<br>
        5. 🟠 <strong>Jüpiter</strong> - En büyük, dev gaz topu<br>
        6. 🪐 <strong>Satürn</strong> - Güzel halkaları var<br>
        7. 💠 <strong>Uranüs</strong> - Yatık dönen gezegen<br>
        8. 🔵 <strong>Neptün</strong> - En soğuk, rüzgarlı<br><br>
        🌟 Ayrıca milyarlarca asteroid, kuyruklu yıldız ve cüce gezegen var!`
    },
    // Cell / Hücre
    "cell": {
        keywords: ["cell", "cells", "mitochondria", "nucleus", "organelle", "hücre", "hucre", "mitokondri", "çekirdek"],
        en: `🔬 <strong>The Cell - Building Block of Life</strong><br><br>
        The cell is the smallest unit of all living things!<br><br>
        🏠 <strong>Cell Parts:</strong><br>
        • <strong>Nucleus:</strong> Stores DNA, the cell's brain<br>
        • <strong>Mitochondria:</strong> Makes energy, "powerhouse"<br>
        • <strong>Ribosome:</strong> Makes proteins<br>
        • <strong>Cell membrane:</strong> Controls what goes in/out<br><br>
        📊 <strong>Fun Facts:</strong><br>
        • Your body has about 37 trillion cells!<br>
        • 3.8 million cells die every second (and new ones are made)<br>
        • Largest cell: Ostrich egg<br>
        • Smallest: Bacteria (0.2 micrometers)`,
        tr: `🔬 <strong>Hücre - Yaşamın Yapı Taşı</strong><br><br>
        Hücre, tüm canlıların en küçük yapı birimidir!<br><br>
        🏠 <strong>Hücrenin Parçaları:</strong><br>
        • <strong>Çekirdek:</strong> DNA'yı saklar, hücrenin beyni<br>
        • <strong>Mitokondri:</strong> Enerji üretir, "güç santrali"<br>
        • <strong>Ribozom:</strong> Protein üretir<br>
        • <strong>Hücre zarı:</strong> İçeri-dışarı geçişi kontrol eder<br><br>
        📊 <strong>İlginç Bilgiler:</strong><br>
        • Vücudunda yaklaşık 37 trilyon hücre var!<br>
        • Her saniye 3.8 milyon hücre ölür ve yenisi yapılır<br>
        • En büyük hücre: Devekuşu yumurtası<br>
        • En küçük: Bakteri (0.2 mikrometre)`
    },
    // DNA
    "dna": {
        keywords: ["dna", "gene", "genes", "genetic", "chromosome", "gen", "genetik", "kalıtım", "kromozom"],
        en: `🧬 <strong>DNA - The Code of Life</strong><br><br>
        DNA is like an "instruction manual" that contains the recipe for everything in your body!<br><br>
        📖 <strong>What Does DNA Do?</strong><br>
        • Determines your eye color<br>
        • Affects your height<br>
        • Codes your hair color<br>
        • Carries disease risks<br><br>
        🔤 <strong>DNA Alphabet:</strong><br>
        Only 4 letters: A, T, G, C<br>
        • A (Adenine) ↔ T (Thymine)<br>
        • G (Guanine) ↔ C (Cytosine)<br><br>
        📊 <strong>Fun Facts:</strong><br>
        • If stretched, your DNA would be 6 feet long!<br>
        • Humans share 99.9% of the same DNA<br>
        • We share 60% of our genes with bananas! 🍌`,
        tr: `🧬 <strong>DNA - Yaşamın Şifresi</strong><br><br>
        DNA, vücudundaki her şeyin tarifini içeren bir "talimat kitabı"dır!<br><br>
        📖 <strong>DNA Ne Yapar?</strong><br>
        • Göz rengini belirler<br>
        • Boyunu etkiler<br>
        • Saç rengini kodlar<br>
        • Hastalık risklerini taşır<br><br>
        🔤 <strong>DNA Alfabesi:</strong><br>
        Sadece 4 harf var: A, T, G, C<br>
        • A (Adenin) ↔ T (Timin)<br>
        • G (Guanin) ↔ C (Sitozin)<br><br>
        📊 <strong>İlginç:</strong><br>
        • DNA'n açılsa 2 metre uzunluğunda!<br>
        • İnsanlar %99.9 aynı DNA'ya sahip<br>
        • Muzla %60 ortak genimiz var! 🍌`
    },
    // Gravity / Yerçekimi
    "gravity": {
        keywords: ["gravity", "fall", "falling", "weight", "newton", "yerçekimi", "düşme", "ağırlık", "çekim"],
        en: `🍎 <strong>Gravity</strong><br><br>
        Gravity is the force that pulls everything with mass toward each other!<br><br>
        📖 <strong>Newton's Story:</strong><br>
        In 1687, Isaac Newton discovered gravity after seeing an apple fall from a tree (at least that's the story! 😄)<br><br>
        ⚡ <strong>How Does It Work?</strong><br>
        • Earth pulls you → that's why you stand on ground<br>
        • You also pull Earth! (but very slightly)<br>
        • More mass = stronger gravity<br><br>
        📊 <strong>Facts:</strong><br>
        • On Earth: 9.8 m/s² acceleration<br>
        • On the Moon: You'd weigh 6x less!<br>
        • On Jupiter: You'd weigh 2.5x more!`,
        tr: `🍎 <strong>Yerçekimi Kuvveti</strong><br><br>
        Yerçekimi, kütlesi olan her şeyin birbirini çekmesidir!<br><br>
        📖 <strong>Newton'un Hikayesi:</strong><br>
        1687'de Isaac Newton, ağactan düşen elmayı görünce yerçekimini keşfetti (en azından hikaye böyle! 😄)<br><br>
        ⚡ <strong>Nasıl Çalışır?</strong><br>
        • Dünya seni çeker → bu yüzden yere basarsın<br>
        • Sen de Dünya'yı çekersin! (ama çok küçük)<br>
        • Kütle arttıkça çekim artar<br><br>
        📊 <strong>Bilgiler:</strong><br>
        • Dünya'da: 9.8 m/s² hızlanma<br>
        • Ay'da: 6 kat daha hafıfsın!<br>
        • Jüpiter'de: 2.5 kat daha ağırsın!`
    },
    // Atom
    "atom": {
        keywords: ["atom", "atoms", "proton", "neutron", "electron", "element", "nötron", "elektron"],
        en: `⚛️ <strong>Atoms - The Smallest Piece of Matter</strong><br><br>
        Everything is made of atoms - you, me, air, water, everything!<br><br>
        🔬 <strong>Structure of an Atom:</strong><br>
        • <strong>Proton (+):</strong> In the nucleus, positive charge<br>
        • <strong>Neutron (0):</strong> In the nucleus, no charge<br>
        • <strong>Electron (-):</strong> Orbits around the nucleus<br><br>
        🎯 <strong>Size Comparison:</strong><br>
        If an atom were a football stadium, the nucleus would be a pea in the center!<br><br>
        📊 <strong>Fun Facts:</strong><br>
        • Your body is 99.9999999999999% empty space!<br>
        • 1 drop of water has 2 sextillion atoms`,
        tr: `⚛️ <strong>Atom - Maddenin En Küçük Parçası</strong><br><br>
        Her şey atomlardan oluşur - sen, ben, hava, su, her şey!<br><br>
        🔬 <strong>Atomun Yapısı:</strong><br>
        • <strong>Proton (+):</strong> Çekirdekte, pozitif yüklü<br>
        • <strong>Nötron (0):</strong> Çekirdekte, yüksüz<br>
        • <strong>Elektron (-):</strong> Çekirdeğin etrafında döner<br><br>
        🎯 <strong>Boyut Karşılaştırması:</strong><br>
        Eğer atom bir futbol stadyumu olsaydı, çekirdek ortadaki bir bezelye kadar olurdu!<br><br>
        📊 <strong>İlginç:</strong><br>
        • Vücudun %99.9999999999999'u boşluk!<br>
        • 1 damla suda 2 sekstilyon atom var`
    },
    // Light / Işık
    "light": {
        keywords: ["light", "rainbow", "color", "colours", "refraction", "reflection", "ışık", "renk", "gökkuşağı", "yansıma", "kırılma"],
        en: `🌈 <strong>Light and Colors</strong><br><br>
        Light is the fastest thing in the universe!<br><br>
        ⚡ <strong>Speed of Light:</strong> 300,000 km/second<br>
        (It circles Earth 7.5 times in 1 second!)<br><br>
        🌈 <strong>How Do Rainbows Form?</strong><br>
        1. Sunlight enters a water droplet<br>
        2. Light bends and separates into colors<br>
        3. 7 colors appear: Red, Orange, Yellow, Green, Blue, Indigo, Violet<br><br>
        📊 <strong>Fun Facts:</strong><br>
        • White light is a mix of all colors<br>
        • Sky is blue because blue light scatters more<br>
        • Sunsets are red because blue light gets filtered out`,
        tr: `🌈 <strong>Işık ve Renkler</strong><br><br>
        Işık, evrendeki en hızlı şeydir!<br><br>
        ⚡ <strong>Işık Hızı:</strong> 300,000 km/saniye<br>
        (1 saniyede Dünya'yı 7.5 kez dolanır!)<br><br>
        🌈 <strong>Gökkuşağı Nasıl Oluşur?</strong><br>
        1. Güneş ışığı su damlasına girer<br>
        2. Işık kırılır ve renklere ayrılır<br>
        3. 7 renk ortaya çıkar: Kırmızı, Turuncu, Sarı, Yeşil, Mavi, Çivit, Mor<br><br>
        📊 <strong>İlginç:</strong><br>
        • Beyaz ışık tüm renklerin karışımı<br>
        • Gökyüzü mavi çünkü mavi ışık daha çok saçılır<br>
        • Gün batımı kırmızı çünkü mavi ışık filtrelenir`
    },
    // Water Cycle / Su Döngüsü
    "water cycle": {
        keywords: ["water cycle", "evaporation", "rain", "cloud", "precipitation", "condensation", "su döngüsü", "buharlaşma", "yağmur", "yoğuşma", "bulut"],
        en: `💧 <strong>The Water Cycle</strong><br><br>
        Water is always moving! Here's the cycle:<br><br>
        1. ☀️ <strong>Evaporation:</strong> Sun heats water, turns to vapor<br>
        2. ☁️ <strong>Condensation:</strong> Vapor rises, cools, forms clouds<br>
        3. 🌧️ <strong>Precipitation:</strong> Clouds get heavy, rain/snow falls<br>
        4. 🏔️ <strong>Collection:</strong> Water flows to rivers, lakes, oceans<br>
        5. 🔄 And it starts again!<br><br>
        📊 <strong>Fun Facts:</strong><br>
        • Earth's water amount has never changed!<br>
        • The water you drink is the same water dinosaurs drank!<br>
        • A water droplet completes the cycle in about 9 days`,
        tr: `💧 <strong>Su Döngüsü</strong><br><br>
        Su, sürekli hareket halinde! İşte döngü:<br><br>
        1. ☀️ <strong>Buharlaşma:</strong> Güneş suyu ısıtır, su buhar olur<br>
        2. ☁️ <strong>Yoğuşma:</strong> Buhar yükselir, soğur, bulut olur<br>
        3. 🌧️ <strong>Yağış:</strong> Bulutlar ağırlaşır, yağmur/kar yağar<br>
        4. 🏔️ <strong>Toplama:</strong> Su nehirlere, göllere, denizlere akar<br>
        5. 🔄 Ve başa döner!<br><br>
        📊 <strong>İlginç:</strong><br>
        • Dünya'daki su miktarı hiç değişmedi!<br>
        • İçtiğin su dinozorların içtiği suyla aynı!<br>
        • Bir su damlası döngüyü 9 günde tamamlar`
    },
    // Photosynthesis / Fotosentez
    "photosynthesis": {
        keywords: ["photosynthesis", "plant", "plants", "oxygen", "carbon dioxide", "chlorophyll", "fotosentez", "bitki", "oksijen", "karbondioksit", "klorofil"],
        en: `🌱 <strong>Photosynthesis - How Plants Make Food</strong><br><br>
        Plants make their own food! Here's the recipe:<br><br>
        📝 <strong>Ingredients:</strong><br>
        • ☀️ Sunlight (energy)<br>
        • 💧 Water (from roots)<br>
        • 💨 Carbon dioxide (from air)<br><br>
        🧪 <strong>Result:</strong><br>
        • 🍬 Glucose (sugar - plant's food)<br>
        • 💨 Oxygen (what we breathe!)<br><br>
        🌿 <strong>Chlorophyll:</strong> The green stuff that captures light<br><br>
        📊 <strong>Fun Facts:</strong><br>
        • 1 tree produces 100 kg of oxygen per year<br>
        • Ocean algae produce 70% of Earth's oxygen!`,
        tr: `🌱 <strong>Fotosentez - Bitkilerin Yemek Yapması</strong><br><br>
        Bitkiler kendi yemeklerini yapar! İşte tarif:<br><br>
        📝 <strong>Malzemeler:</strong><br>
        • ☀️ Güneş ışığı (enerji)<br>
        • 💧 Su (köklerden)<br>
        • 💨 Karbondioksit (havadan)<br><br>
        🧪 <strong>Sonuç:</strong><br>
        • 🍬 Glikoz (şeker - bitkinin yemeği)<br>
        • 💨 Oksijen (bizim nefes aldığımız!)<br><br>
        🌿 <strong>Klorofil:</strong> Yaprakları yeşil yapan ve ışığı yakalayan madde<br><br>
        📊 <strong>İlginç:</strong><br>
        • 1 ağaç yılda 100 kg oksijen üretir<br>
        • Okyanustaki algler oksijenin %70'ini üretir!`
    },
    // Earthquake / Deprem
    "earthquake": {
        keywords: ["earthquake", "earthquakes", "fault", "tectonic", "seismic", "deprem", "fay", "levha", "sismik"],
        en: `🌍 <strong>How Do Earthquakes Happen?</strong><br><br>
        Earth's crust is made of giant "plates" like puzzle pieces!<br><br>
        ⚡ <strong>How It Happens:</strong><br>
        1. Plates slowly move<br>
        2. They rub against each other and get stuck<br>
        3. Pressure builds up<br>
        4. Suddenly they slip → EARTHQUAKE!<br><br>
        📏 <strong>Measurement:</strong><br>
        • Richter scale is used<br>
        • Each 1 point = 32 times stronger!<br><br>
        🏠 <strong>Safety:</strong><br>
        • Drop, Cover, and Hold On!<br>
        • Stay away from windows<br>
        • Have an emergency kit ready`,
        tr: `🌍 <strong>Depremler Nasıl Oluşur?</strong><br><br>
        Dünya'nın kabuğu dev yapboz parçaları gibi "levhalar"dan oluşur!<br><br>
        ⚡ <strong>Deprem Nasıl Olur?</strong><br>
        1. Levhalar yavaşça hareket eder<br>
        2. Birbirlerine sürtünür ve takılır<br>
        3. Basınç birikir<br>
        4. Aniden kayar → DEPREM!<br><br>
        📏 <strong>Ölçümü:</strong><br>
        • Richter ölçeği kullanılır<br>
        • Her 1 puan = 32 kat daha güçlü!<br><br>
        🇹🇷 <strong>Güvenlik:</strong><br>
        • Çök-Kapan-Tutun kuralı hayat kurtarır<br>
        • Pencerelerden uzak dur<br>
        • Deprem çantası hazırla`
    },
    // Electricity / Elektrik
    "electricity": {
        keywords: ["electricity", "electric", "current", "volt", "battery", "elektrik", "akım", "volt", "pil"],
        en: `⚡ <strong>How Does Electricity Work?</strong><br><br>
        Electricity is the movement of electrons!<br><br>
        🔋 <strong>Basic Concepts:</strong><br>
        • <strong>Volt (V):</strong> Electric pressure<br>
        • <strong>Ampere (A):</strong> Amount of current<br>
        • <strong>Ohm (Ω):</strong> Resistance<br><br>
        💡 <strong>How Does a Light Bulb Work?</strong><br>
        1. Battery pushes electrons<br>
        2. Electrons flow through wire<br>
        3. Pass through the bulb's filament<br>
        4. Filament heats up and glows!<br><br>
        ⚠️ <strong>Safety:</strong><br>
        • Never touch outlets with wet hands!<br>
        • Electricity can be very dangerous<br>
        • Lightning is 300 million volts!`,
        tr: `⚡ <strong>Elektrik Nasıl Çalışır?</strong><br><br>
        Elektrik, elektronların harekettir!<br><br>
        🔋 <strong>Temel Kavramlar:</strong><br>
        • <strong>Volt (V):</strong> Elektrik basıncı<br>
        • <strong>Amper (A):</strong> Akım miktarı<br>
        • <strong>Ohm (Ω):</strong> Direnç<br><br>
        💡 <strong>Ampul Nasıl Yanar?</strong><br>
        1. Pil elektron pompalar<br>
        2. Elektronlar kabloda akar<br>
        3. Ampulün telinden geçer<br>
        4. Tel ısınır ve ışık verir!<br><br>
        ⚠️ <strong>Güvenlik:</strong><br>
        • Islak elle prize dokunma!<br>
        • Elektrik çok tehlikeli olabilir<br>
        • Yıldırım 300 milyon volt!`
    },
    // Moon / Ay
    "moon": {
        keywords: ["moon", "lunar", "tide", "tides", "phases", "ay", "ayın evreleri", "gelgit"],
        en: `🌙 <strong>The Moon - Earth's Satellite</strong><br><br>
        The Moon is Earth's only natural satellite!<br><br>
        🌑🌒🌓🌔🌕 <strong>Moon Phases:</strong><br>
        • New Moon → Crescent → First Quarter → Full Moon → Last Quarter<br>
        (29.5 day cycle)<br><br>
        🌊 <strong>Tides:</strong><br>
        The Moon's gravity pulls on the oceans!<br>
        That's why sea levels rise and fall.<br><br>
        📊 <strong>Fun Facts:</strong><br>
        • Gravity on Moon is 6x less<br>
        • Moon moves 3.8 cm away from Earth each year<br>
        • 12 humans walked on the Moon (1969-1972)<br>
        • Water ice was discovered on the Moon! 🧊`,
        tr: `🌙 <strong>Ay - Dünya'nın Uydusu</strong><br><br>
        Ay, Dünya'nın tek doğal uydusudur!<br><br>
        🌑🌒🌓🌔🌕 <strong>Ay'ın Evreleri:</strong><br>
        • Yeni Ay → Hilal → İlk Dördün → Dolunay → Son Dördün<br>
        (29.5 günde bir döngü)<br><br>
        🌊 <strong>Gelgit Olayı:</strong><br>
        Ay'ın çekim kuvveti denizleri çeker!<br>
        Bu yüzden deniz seviyesi yükselip alçalır.<br><br>
        📊 <strong>İlginç Bilgiler:</strong><br>
        • Ay'da yerçekimi 6 kat az<br>
        • Ay, Dünya'dan yılda 3.8 cm uzaklaşıyor<br>
        • 12 insan Ay'a ayak bastı (1969-1972)<br>
        • Ay'da su buzu keşfedildi! 🧊`
    }
};

// Default/fallback responses
const defaultResponses = {
    en: [
        "🤔 Hmm, let me ask you this instead - what do YOU think happens?",
        "🔬 Interesting! But first, tell me - what do you already know about this?",
        "📚 Good question! What's your best guess? 🤔",
        "🌟 I want to hear YOUR ideas first! What do you think?"
    ],
    tr: [
        "🤔 Hmm, ben sana sorayım - SEN ne düşünüyorsun?",
        "🔬 İlginç! Ama önce söyle - bu konu hakkında ne biliyorsun?",
        "📚 Güzel soru! Senin tahmin ne? 🤔",
        "🌟 Önce SENİN fikirlerini duymak istiyorum! Ne düşünüyorsun?"
    ]
};

// Socratic questioning - guide children through discovery
const socraticQuestions = {
    "light": {
        en: [
            "🌈 Hmm, that's a wonderful thing to wonder about! Have you ever seen a rainbow? What colors did you notice in it?",
            "💡 Interesting question! When you see sunlight coming through a window, does it look like it has colors, or just white light?",
            "🔵 Great question! Look at the sky now - is it the same blue everywhere, or different shades? What do you notice?",
            "✨ I wonder about that too! When the sun sets, what color does the sky become? Why do you think it changes?",
            "🌈 Have you ever shined light through a glass of water or a prism? What happened to the light?"
        ],
        tr: [
            "🌈 Hmm, bu harika bir merak! Hiç gökkuşağı gördün mü? Hangi renkleri fark ettin?",
            "💡 İlginç soru! Pencereden gelen güneş ışığına baktığında, renkli mi görünüyor yoksa sadece beyaz ışık mı?",
            "🔵 Güzel soru! Şimdi gökyüzüne bak - her yerde aynı mavi mi, yoksa farklı tonlar mı var? Ne fark ediyorsun?",
            "✨ Ben de bunu merak ediyorum! Güneş batarken gökyüzü ne renk oluyor? Sence neden değişiyor?",
            "🌈 Hiç ışığı bir bardak suyun ya da prizmanın içinden geçirdin mi? Işığa ne oldu?"
        ]
    },
    "solar system": {
        en: [
            "🌞 Let's think together! What do you see in the sky during the day?",
            "🤔 If the Sun is a star, why do other stars look so tiny at night?",
            "🌍 Why do you think we have day and night? What's moving?",
            "🚀 If you could visit any planet, which one? What do you know about it?",
            "⭐ How many planets can you name? Let's count together!"
        ],
        tr: [
            "🌞 Birlikte düşünelim! Gündüz gökyüzünde ne görüyorsun?",
            "🤔 Güneş bir yıldızsa, diğer yıldızlar gece neden çok küçük görünüyor?",
            "🌍 Sence gece ve gündüz neden oluyor? Ne hareket ediyor?",
            "🚀 Herhangi bir gezegene gidebilsen hangisine giderdin? Onun hakkında ne biliyorsun?",
            "⭐ Kaç gezegen sayabilirsin? Birlikte sayalım!"
        ]
    },
    "cell": {
        en: [
            "🔬 Your body is made of tiny pieces called cells. How tiny do you think they are?",
            "🤔 Cells need energy to work. Where do YOU get your energy from?",
            "🧠 Every cell has a 'brain' called the nucleus. What do you think it does?",
            "💪 Muscle cells and brain cells look different. Why do you think that is?",
            "🏠 If a cell was a house, what rooms would it need?"
        ],
        tr: [
            "🔬 Vücudun hücre denen küçük parçalardan oluşuyor. Sence ne kadar küçükler?",
            "🤔 Hücreler çalışmak için enerjiye ihtiyaç duyar. SEN enerjini nereden alıyorsun?",
            "🧠 Her hücrenin 'çekirdek' denen bir beyni var. Sence ne iş yapıyor?",
            "💪 Kas hücreleri ve beyin hücreleri farklı görünür. Sence neden?",
            "🏠 Hücre bir ev olsaydı, hangi odalara ihtiyacı olurdu?"
        ]
    },
    "gravity": {
        en: [
            "🍎 When you drop something, what happens? Why doesn't it float?",
            "🌙 Astronauts float in space! Why don't we float on Earth?",
            "⚽ If you throw a ball up, what happens? Why does it come back down?",
            "🤔 Do you think a feather and a rock fall at the same speed? Why or why not?",
            "🌍 What would happen if there was no gravity? What would your day be like?"
        ],
        tr: [
            "🍎 Bir şeyi bıraktığında ne oluyor? Neden havada kalmıyor?",
            "🌙 Astronotlar uzayda süzülüyor! Biz Dünya'da neden süzülmüyoruz?",
            "⚽ Bir topu yukarı atarsan ne olur? Neden geri düşüyor?",
            "🤔 Sence bir tüy ve bir taş aynı hızda mı düşer? Neden?",
            "🌍 Yerçekimi olmasaydı ne olurdu? Günün nasıl geçerdi?"
        ]
    },
    "dna": {
        en: [
            "👀 Why do you look like your parents? What do you think makes that happen?",
            "🧬 DNA is like a recipe book. What 'recipes' do you think are in YOUR DNA?",
            "👶 Brothers and sisters look similar but not identical. Why do you think?",
            "🌈 What color are your eyes? Where did that color come from?",
            "🤔 If DNA is instructions, what is it giving instructions TO?"
        ],
        tr: [
            "👀 Neden ailene benziyorsun? Sence bunu ne sağlıyor?",
            "🧬 DNA bir tarif kitabı gibi. SENİN DNA'nda hangi 'tarifler' var sence?",
            "👶 Kardeşler benzer ama aynı değil. Sence neden?",
            "🌈 Gözlerin ne renk? Bu renk nereden geldi?",
            "🤔 DNA talimat ise, NEYİ yönetiyor bu talimatlar?"
        ]
    },
    "atom": {
        en: [
            "🔍 Everything is made of atoms! What do you think atoms are made of?",
            "🤔 Can you see atoms? Why or why not?",
            "💨 Is air made of atoms too? How can you tell air exists?",
            "⚡ Atoms have positive and negative parts. What else do you know that has + and -?",
            "🧊 Ice, water, and steam are all H2O. What's different about their atoms?"
        ],
        tr: [
            "🔍 Her şey atomlardan oluşuyor! Sence atomlar neden oluşuyor?",
            "🤔 Atomları görebilir misin? Neden görebilir ya da göremezsin?",
            "💨 Hava da atomlardan mı oluşuyor? Havanın var olduğunu nasıl anlarsın?",
            "⚡ Atomların pozitif ve negatif parçaları var. + ve - olan başka ne biliyorsun?",
            "🧊 Buz, su ve buhar hep H2O. Atomlarında ne farklı?"
        ]
    },
    "water cycle": {
        en: [
            "💧 Where does rain come from? Where do you think clouds get their water?",
            "☀️ What happens to a puddle on a sunny day? Where does the water go?",
            "🤔 Is the water you drink today NEW water, or has it been around before?",
            "🌧️ Why do you think it rains more in some places than others?",
            "❄️ Rain, snow, and hail are all water. What makes them different?"
        ],
        tr: [
            "💧 Yağmur nereden geliyor? Bulutlar suyunu nereden alıyor sence?",
            "☀️ Güneşli bir günde su birikintisine ne olur? Su nereye gidiyor?",
            "🤔 Bugün içtiğin su YENİ mi, yoksa daha önce var mıydı?",
            "🌧️ Sence neden bazı yerlerde daha çok yağmur yağıyor?",
            "❄️ Yağmur, kar ve dolu hep su. Onları farklı yapan ne?"
        ]
    },
    "photosynthesis": {
        en: [
            "🌱 Plants make their own food! How do you think they do it?",
            "☀️ Why do plants need sunlight? What happens if you put a plant in the dark?",
            "🌿 Why are most plants green? What do you think makes that color?",
            "💨 You breathe out CO2, plants 'breathe' it in. What do they give back to you?",
            "🤔 Can a plant grow without soil? What does it really need?"
        ],
        tr: [
            "🌱 Bitkiler kendi yemeklerini yapıyor! Sence nasıl yapıyorlar?",
            "☀️ Bitkiler neden güneş ışığına ihtiyaç duyar? Karanlıkta ne olur?",
            "🌿 Bitkilerin çoğu neden yeşil? Bu rengi ne yapıyor sence?",
            "💨 Sen CO2 veriyorsun, bitkiler alıyor. Onlar sana ne veriyor?",
            "🤔 Bitki topraksız büyüyebilir mi? Gerçekten neye ihtiyacı var?"
        ]
    }
};

// Quiz questions for "ask me" feature
const quizMeQuestions = {
    "solar system": {
        en: [
            { q: "Which planet is known as the Red Planet?", a: "Mars" },
            { q: "What is the largest planet in our Solar System?", a: "Jupiter" },
            { q: "Which planet has beautiful rings around it?", a: "Saturn" },
            { q: "How many planets are in our Solar System?", a: "8 planets" },
            { q: "Which planet is closest to the Sun?", a: "Mercury" }
        ],
        tr: [
            { q: "Hangi gezegen 'Kızıl Gezegen' olarak bilinir?", a: "Mars" },
            { q: "Güneş Sistemi'ndeki en büyük gezegen hangisi?", a: "Jüpiter" },
            { q: "Hangi gezegenin etrafında halkalar var?", a: "Satürn" },
            { q: "Güneş Sistemi'nde kaç gezegen var?", a: "8 gezegen" },
            { q: "Güneş'e en yakın gezegen hangisi?", a: "Merkür" }
        ]
    },
    "cell": {
        en: [
            { q: "What is the 'powerhouse' of the cell called?", a: "Mitochondria" },
            { q: "Where is DNA stored in a cell?", a: "Nucleus" },
            { q: "What organelle makes proteins?", a: "Ribosome" },
            { q: "What controls what enters and exits the cell?", a: "Cell membrane" }
        ],
        tr: [
            { q: "Hücrenin 'enerji santrali' ne denir?", a: "Mitokondri" },
            { q: "DNA hücrede nerede saklanır?", a: "Çekirdek" },
            { q: "Hangi organel protein üretir?", a: "Ribozom" },
            { q: "Hücreye giriş-çıkışı ne kontrol eder?", a: "Hücre zarı" }
        ]
    },
    "gravity": {
        en: [
            { q: "Who discovered gravity after seeing an apple fall?", a: "Isaac Newton" },
            { q: "What is Earth's gravitational acceleration? (m/s²)", a: "9.8 m/s²" },
            { q: "On which celestial body would you weigh 6 times less?", a: "The Moon" }
        ],
        tr: [
            { q: "Elmanın düşmesini görüp yerçekimini kim keşfetti?", a: "Isaac Newton" },
            { q: "Dünya'daki yerçekimi ivmesi kaçtır? (m/s²)", a: "9.8 m/s²" },
            { q: "Hangi gök cisminde 6 kat daha hafif olursun?", a: "Ay" }
        ]
    },
    "dna": {
        en: [
            { q: "What are the 4 letters (bases) of DNA?", a: "A, T, G, C" },
            { q: "Which base pairs with Adenine (A)?", a: "Thymine (T)" },
            { q: "What percentage of DNA do all humans share?", a: "99.9%" }
        ],
        tr: [
            { q: "DNA'nın 4 harfi (bazı) nedir?", a: "A, T, G, C" },
            { q: "Adenin (A) hangi bazla eşleşir?", a: "Timin (T)" },
            { q: "İnsanlar DNA'nın yüzde kaçını paylaşır?", a: "%99.9" }
        ]
    },
    "atom": {
        en: [
            { q: "What are the 3 particles that make up an atom?", a: "Proton, Neutron, Electron" },
            { q: "Which particle has a positive charge?", a: "Proton" },
            { q: "Which particle orbits the nucleus?", a: "Electron" }
        ],
        tr: [
            { q: "Atomu oluşturan 3 parçacık nedir?", a: "Proton, Nötron, Elektron" },
            { q: "Hangi parçacık pozitif yüklüdür?", a: "Proton" },
            { q: "Hangi parçacık çekirdeğin etrafında döner?", a: "Elektron" }
        ]
    },
    "water cycle": {
        en: [
            { q: "What is it called when water turns into vapor?", a: "Evaporation" },
            { q: "What forms when water vapor cools in the sky?", a: "Clouds" },
            { q: "What is rain, snow, or hail called?", a: "Precipitation" }
        ],
        tr: [
            { q: "Suyun buhar olmasına ne denir?", a: "Buharlaşma" },
            { q: "Su buharı gökyüzünde soğuyunca ne oluşur?", a: "Bulut" },
            { q: "Yağmur, kar veya doluya ne denir?", a: "Yağış" }
        ]
    },
    "photosynthesis": {
        en: [
            { q: "What gas do plants release during photosynthesis?", a: "Oxygen" },
            { q: "What green pigment captures sunlight?", a: "Chlorophyll" },
            { q: "What 3 things do plants need for photosynthesis?", a: "Sunlight, Water, Carbon dioxide" }
        ],
        tr: [
            { q: "Bitkiler fotosentez sırasında hangi gazı salar?", a: "Oksijen" },
            { q: "Güneş ışığını yakalayan yeşil madde nedir?", a: "Klorofil" },
            { q: "Bitkiler fotosentez için hangi 3 şeye ihtiyaç duyar?", a: "Güneş ışığı, Su, Karbondioksit" }
        ]
    }
};

// Detect language from text
function detectLanguage(text) {
    const turkishChars = /[çğıöşüÇĞİÖŞÜ]/;
    const turkishWords = /\b(merhaba|selam|nedir|nasıl|neden|ne|bir|bu|için|ve|ile|var|yok|evet|hayır|teşekkür|hakkında|anlat|açıkla|soru|sor)\b/i;
    
    if (turkishChars.test(text) || turkishWords.test(text)) {
        return 'tr';
    }
    return 'en';
}

// Check if user wants to be quizzed
function checkForQuizRequest(question) {
    const lowerQ = question.toLowerCase();
    const lang = detectLanguage(question);
    
    // Patterns for "ask me a question" type requests
    const quizPatterns = /ask me|quiz me|test me|question me|soru sor|bana sor|beni test et|beni sına/i;
    
    if (!quizPatterns.test(lowerQ)) {
        return null;
    }
    
    // Find which topic they want to be quizzed on
    for (const [topic, questions] of Object.entries(quizMeQuestions)) {
        const topicKeywords = {
            "solar system": ["solar", "planet", "güneş", "gezegen", "uzay", "space"],
            "cell": ["cell", "hücre"],
            "gravity": ["gravity", "yerçekimi", "newton"],
            "dna": ["dna", "gene", "gen"],
            "atom": ["atom"],
            "water cycle": ["water", "su", "rain", "yağmur"],
            "photosynthesis": ["photo", "foto", "plant", "bitki"]
        };
        
        for (const keyword of topicKeywords[topic] || []) {
            if (lowerQ.includes(keyword)) {
                const qs = questions[lang] || questions.en;
                const randomQ = qs[Math.floor(Math.random() * qs.length)];
                
                const prefix = lang === 'tr' 
                    ? `🎯 <strong>İşte sana bir soru!</strong><br><br>`
                    : `🎯 <strong>Here's a question for you!</strong><br><br>`;
                
                const suffix = lang === 'tr'
                    ? `<br><br><em>Cevabını yaz, kontrol edeyim!</em> 💪`
                    : `<br><br><em>Type your answer, I'll check it!</em> 💪`;
                
                // Store current quiz question for checking answer
                window.currentQuizQuestion = randomQ;
                
                return prefix + `<strong>❓ ${randomQ.q}</strong>` + suffix;
            }
        }
    }
    
    // Generic quiz request without specific topic
    const genericResponse = lang === 'tr'
        ? `🤔 Hangi konuda soru istiyorsun?<br><br>
           • "Güneş sistemi hakkında soru sor"<br>
           • "Hücre konusunda beni test et"<br>
           • "DNA hakkında soru sor"<br>
           • "Atom konusunda soru sor"<br><br>
           Bir konu seç! 📚`
        : `🤔 What topic would you like a question about?<br><br>
           • "Ask me about the solar system"<br>
           • "Quiz me on cells"<br>
           • "Test me on DNA"<br>
           • "Ask me about atoms"<br><br>
           Pick a topic! 📚`;
    
    return genericResponse;
}

// Check if user is answering a quiz question
function checkQuizAnswer(answer) {
    if (!window.currentQuizQuestion) return null;
    
    const lang = detectLanguage(answer);
    const correctAnswer = window.currentQuizQuestion.a.toLowerCase();
    const userAnswer = answer.toLowerCase().trim();
    
    // Check if answer is correct (flexible matching)
    const isCorrect = correctAnswer.includes(userAnswer) || userAnswer.includes(correctAnswer) ||
                      correctAnswer.split(/[,\s]+/).some(part => userAnswer.includes(part.toLowerCase()));
    
    window.currentQuizQuestion = null; // Reset
    
    if (isCorrect) {
        return lang === 'tr'
            ? `🎉 <strong>Doğru!</strong> Harika, tebrikler! 🌟<br><br>Başka bir soru ister misin? Veya farklı bir konu sorabiliriz!`
            : `🎉 <strong>Correct!</strong> Great job! 🌟<br><br>Want another question? Or we can explore a different topic!`;
    } else {
        const correctText = window.currentQuizQuestion ? window.currentQuizQuestion.a : correctAnswer;
        return lang === 'tr'
            ? `❌ Tam değil! Doğru cevap: <strong>${correctAnswer}</strong><br><br>Tekrar dene veya başka bir soru iste! 💪`
            : `❌ Not quite! The answer was: <strong>${correctAnswer}</strong><br><br>Try again or ask for another question! 💪`;
    }
}

// Handle Socratic response - encourage thinking and ask follow-up
function handleSocraticResponse(answer, lang) {
    const topic = window.awaitingSocraticResponse;
    window.awaitingSocraticResponse = null;
    
    // Encouraging responses that validate their thinking
    const encouragements = {
        en: [
            "🌟 <strong>Great thinking!</strong> I love how you're figuring this out!",
            "💡 <strong>Interesting idea!</strong> You're on the right track!",
            "🧠 <strong>Wow!</strong> You're really using your brain!",
            "👏 <strong>Nice!</strong> That's a smart observation!",
            "🎯 <strong>Good guess!</strong> Let's explore more!"
        ],
        tr: [
            "🌟 <strong>Harika düşünce!</strong> Bunu çözmeye çalışman süper!",
            "💡 <strong>İlginç fikir!</strong> Doğru yoldasın!",
            "🧠 <strong>Vay!</strong> Beynini gerçekten kullanıyorsun!",
            "👏 <strong>Güzel!</strong> Bu akıllıca bir gözlem!",
            "🎯 <strong>İyi tahmin!</strong> Hadi daha fazla keşfedelim!"
        ]
    };
    
    const encouragement = encouragements[lang][Math.floor(Math.random() * encouragements[lang].length)];
    
    // Ask a follow-up question from the same topic
    if (socraticQuestions[topic]) {
        const qs = socraticQuestions[topic][lang] || socraticQuestions[topic].en;
        const followUp = qs[Math.floor(Math.random() * qs.length)];
        window.awaitingSocraticResponse = topic; // Continue the conversation
        
        return `${encouragement}<br><br>${followUp}`;
    }
    
    return encouragement;
}

function findBestAnswer(question) {
    const lowerQuestion = question.toLowerCase().replace(/[?!.,]/g, '');
    const lang = detectLanguage(question);
    
    // First check if user wants to be quizzed
    const quizResponse = checkForQuizRequest(question);
    if (quizResponse) {
        return quizResponse;
    }
    
    // Check if user is answering a quiz question
    if (window.currentQuizQuestion) {
        return checkQuizAnswer(question);
    }
    
    // Check if user is answering a Socratic question (store their response and ask follow-up)
    if (window.awaitingSocraticResponse) {
        return handleSocraticResponse(question, lang);
    }
    
    // Use Socratic method - ask guiding questions instead of explaining
    for (const [topic, questions] of Object.entries(socraticQuestions)) {
        const topicKeywords = {
            "light": ["sky blue", "sky is blue", "is the sky blue", "why is sky", "why sky", "blue sky", "rainbow", "color of sky", "light scatter", "refraction", "prism", "gökyüzü mavi", "gökyüzü neden mavi", "neden mavi", "mavi gökyüzü", "gökkuşağı", "ışık kırılma", "renk"],
            "solar system": ["planet", "planets", "sun", "moon", "star", "stars", "earth", "mars", "jupiter", "saturn", "solar", "galaxy", "universe", "rocket", "astronaut", "night sky", "outer space", "uzay", "gezegen", "güneş", "ay", "yıldız", "dünya", "evren", "meteor"],
            "cell": ["cell", "cells", "hücre", "mitochondria", "nucleus", "mitokondri", "çekirdek"],
            "gravity": ["gravity", "fall", "weight", "yerçekimi", "düşme", "ağırlık", "newton"],
            "dna": ["dna", "gene", "genetic", "gen", "genetik", "kalıtım"],
            "atom": ["atom", "proton", "electron", "elektron", "nötron"],
            "water cycle": ["water cycle", "rain", "cloud", "evaporation", "su döngüsü", "yağmur", "bulut", "buharlaşma"],
            "photosynthesis": ["photosynthesis", "plant", "oxygen", "fotosentez", "bitki", "oksijen"]
        };
        
        const keywords = topicKeywords[topic] || [];
        for (const keyword of keywords) {
            if (lowerQuestion.includes(keyword.toLowerCase())) {
                // Ask a Socratic question instead of explaining
                const qs = questions[lang] || questions.en;
                const randomQ = qs[Math.floor(Math.random() * qs.length)];
                
                // Store that we're waiting for a response
                window.awaitingSocraticResponse = topic;
                
                return randomQ;
            }
        }
    }
    
    // Fallback to knowledge base only if user specifically asks for facts/explanation
    const wantsExplanation = lowerQuestion.match(/explain|tell me|what is|how does|anlat|açıkla|nedir|nasıl/i);
    
    if (wantsExplanation) {
        for (const [topic, data] of Object.entries(scienceKnowledge)) {
            for (const keyword of data.keywords) {
                if (lowerQuestion.includes(keyword.toLowerCase())) {
                    // Even when explaining, end with a question!
                    const explanation = data[lang] || data.en;
                    const followUp = lang === 'tr' 
                        ? "<br><br>🤔 <strong>Şimdi sana bir soru:</strong> Bu bilgiler seni şaşırttı mı? En ilginç bulduğun ne?"
                        : "<br><br>🤔 <strong>Now a question for you:</strong> Did any of this surprise you? What's the most interesting part?";
                    return explanation + followUp;
                }
            }
        }
    }
    
    // Check for greetings
    if (lowerQuestion.match(/merhaba|selam|hey|naber|nasılsın/)) {
        return `👋 Merhaba! Ben ScienceVerse AI, bilim asistanın!<br><br>
        Bana bilimle ilgili her şeyi sorabilirsin. Örneğin:<br>
        • Uzay ve gezegenler 🌌<br>
        • Hücreler ve DNA 🧬<br>
        • Fizik ve yerçekimi ⚡<br>
        • Doğa olayları 🌍<br><br>
        Hadi, merak ettiğin bir şey sor!`;
    }
    
    if (lowerQuestion.match(/hello|hi|hey|how are you/)) {
        return `👋 Hello! I'm ScienceVerse AI, your science assistant!<br><br>
        Ask me anything about science! For example:<br>
        • Space and planets 🌌<br>
        • Cells and DNA 🧬<br>
        • Physics and gravity ⚡<br>
        • Nature and weather 🌍<br><br>
        Go ahead, ask me something!`;
    }
    
    // Check for thanks
    if (lowerQuestion.match(/teşekkür|sağol|eyvallah/)) {
        return `😊 Rica ederim! Başka soruların olursa her zaman buradayım. Bilim öğrenmek çok eğlenceli! 🔬✨`;
    }
    
    if (lowerQuestion.match(/thanks|thank you|thx/)) {
        return `😊 You're welcome! I'm always here if you have more questions. Learning science is so much fun! 🔬✨`;
    }
    
    // Check for "what can you do"
    if (lowerQuestion.match(/ne yapabilirsin|neler biliyorsun|ne sorabilir/)) {
        return `🤖 <strong>Bildiğim Konular:</strong><br><br>
        🌌 <strong>Uzay:</strong> Güneş, gezegenler, Ay, yıldızlar<br>
        🧬 <strong>Biyoloji:</strong> Hücreler, DNA, fotosentez<br>
        ⚛️ <strong>Fizik:</strong> Atomlar, yerçekimi, ışık, elektrik<br>
        🌍 <strong>Doğa:</strong> Depremler, su döngüsü, hava<br><br>
        Bu konulardan birini sor, detaylı anlatayım! 📚`;
    }
    
    if (lowerQuestion.match(/what can you|what do you know|help/)) {
        return `🤖 <strong>Topics I Know:</strong><br><br>
        🌌 <strong>Space:</strong> Sun, planets, Moon, stars<br>
        🧬 <strong>Biology:</strong> Cells, DNA, photosynthesis<br>
        ⚛️ <strong>Physics:</strong> Atoms, gravity, light, electricity<br>
        🌍 <strong>Nature:</strong> Earthquakes, water cycle, weather<br><br>
        Ask about any of these topics! 📚`;
    }
    
    // Return random default response in detected language
    const responses = defaultResponses[lang] || defaultResponses.en;
    return responses[Math.floor(Math.random() * responses.length)];
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    
    // Show typing indicator
    showTyping();
    
    // Simulate AI thinking time
    setTimeout(() => {
        removeTyping();
        const response = findBestAnswer(message);
        addMessage(response, 'bot');
    }, 1000 + Math.random() * 1000);
}

function addMessage(content, type) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${type}`;
    
    const avatar = type === 'bot' ? '🤖' : '👤';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <div class="message-bubble">${content}</div>
        </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTyping() {
    const messagesContainer = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot';
    typingDiv.id = 'typingIndicator';
    
    typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">
            <div class="message-bubble">
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    `;
    
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeTyping() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
}

function handleChatKeypress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function askSuggestion(question) {
    document.getElementById('chatInput').value = question;
    sendMessage();
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    initPeriodicTable();
    initProjectileCanvas();
});

