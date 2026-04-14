export type PluginCategory = 'Instrument' | 'Audio Effect' | 'MIDI Effect';

const CDN = 'https://ableton-production.imgix.net/live-manual/12';

export const pluginImageUrl = (filename: string) => `${CDN}/${filename}?auto=format&w=640`;

export interface Plugin {
  id: string;
  name: string;
  category: PluginCategory;
  description: string;
  longDescription: string;
  tags: string[];
  accentColor: string;
  imageFile: string;
}

export const PLUGINS: Plugin[] = [
  // Instruments
  {
    id: 'analog',
    name: 'Analog',
    category: 'Instrument',
    description: 'Synthétiseur analogique vintage à oscillateurs multiples.',
    longDescription:
      'Analog émule le caractère chaud des synthétiseurs analogiques classiques. Il propose deux oscillateurs, deux filtres indépendants, deux amplificateurs et une section de modulation complète pour sculpter des sons allant des basses profondes aux leads percutants.',
    tags: ['Synth', 'Vintage', 'Subtractive'],
    accentColor: '#FF6B00',
    imageFile: 'AnalogL12.png',
  },
  {
    id: 'wavetable',
    name: 'Wavetable',
    category: 'Instrument',
    description: 'Synthétiseur wavetable moderne aux possibilités sonores infinies.',
    longDescription:
      'Wavetable explore des territoires sonores impossibles pour les synthétiseurs analogiques. Deux oscillateurs parcourent des tables d\'ondes en temps réel, combinés à des filtres puissants et une matrice de modulation flexible.',
    tags: ['Synth', 'Wavetable', 'Modern'],
    accentColor: '#FF6B00',
    imageFile: 'WavetableInstrumentL12.png',
  },
  {
    id: 'operator',
    name: 'Operator',
    category: 'Instrument',
    description: 'Synthétiseur FM classique à quatre opérateurs.',
    longDescription:
      'Operator combine la synthèse FM avec des filtres analogiques et un LFO. Ses quatre opérateurs peuvent être configurés selon 11 algorithmes différents, offrant des sons allant des cloches cristallines aux basses FM caractéristiques.',
    tags: ['Synth', 'FM', 'Classic'],
    accentColor: '#FF6B00',
    imageFile: 'OperatorL12.png',
  },
  {
    id: 'simpler',
    name: 'Simpler',
    category: 'Instrument',
    description: 'Sampler simple et intuitif pour jouer vos samples.',
    longDescription:
      'Simpler est le sampler fondamental d\'Ableton. Chargez n\'importe quel sample et jouez-le sur votre clavier. Il propose trois modes : Classic pour les bases, 1-Shot pour les percussions, et Slice pour découper les boucles en rythme.',
    tags: ['Sampler', 'Loop', 'One-shot'],
    accentColor: '#FF6B00',
    imageFile: 'SimplerL12.png',
  },
  {
    id: 'sampler',
    name: 'Sampler',
    category: 'Instrument',
    description: 'Sampler avancé avec mappage multizones et modulations.',
    longDescription:
      'Sampler est la version professionnelle de Simpler, permettant de charger plusieurs samples mappés sur différentes zones du clavier et de vélocité. Il inclut une modulation avancée, un filtre résonant et un LFO pour des instruments complexes.',
    tags: ['Sampler', 'Multizone', 'Advanced'],
    accentColor: '#FF6B00',
    imageFile: 'SamplerL12.png',
  },
  {
    id: 'impulse',
    name: 'Impulse',
    category: 'Instrument',
    description: 'Boîte à rythmes à 8 emplacements avec effets intégrés.',
    longDescription:
      'Impulse est une boîte à rythmes à 8 slots indépendants. Chaque slot peut charger un sample avec son propre transposeur, enveloppe, filtre, panoramique et saturation. Idéal pour créer des kits de batterie expressifs.',
    tags: ['Drums', 'Sampler', 'Percussion'],
    accentColor: '#FF6B00',
    imageFile: 'ImpulseL12.png',
  },
  {
    id: 'drift',
    name: 'Drift',
    category: 'Instrument',
    description: 'Synthétiseur semi-modulaire au caractère analogique distinctif.',
    longDescription:
      'Drift est un synthétiseur semi-modulaire qui capture l\'essence des machines analogiques vintage avec leur légère instabilité naturelle. Il combine oscillateurs, filtres en échelle et une section de modulation pour des textures vivantes et organiques.',
    tags: ['Synth', 'Semi-modular', 'Analog'],
    accentColor: '#FF6B00',
    imageFile: 'DriftL12.png',
  },
  {
    id: 'meld',
    name: 'Meld',
    category: 'Instrument',
    description: 'Synthétiseur polyphonique à architecture parallèle.',
    longDescription:
      'Meld dispose de deux couches de synthèse qui peuvent fonctionner en parallèle ou en série. Chaque couche possède ses propres oscillateurs et filtre, permettant de créer des sons complexes et en évolution qui fusionnent de manière organique.',
    tags: ['Synth', 'Polyphonic', 'Layered'],
    accentColor: '#FF6B00',
    imageFile: 'MeldL12.png',
  },
  {
    id: 'electric',
    name: 'Electric',
    category: 'Instrument',
    description: 'Piano électrique modélisant les classiques des années 70.',
    longDescription:
      'Electric modélise physiquement les pianos électriques vintage comme le Rhodes et le Wurlitzer. Il simule les mécanismes de frappe, les tonges, les amplificateurs et les haut-parleurs pour un son authentiquement vintage.',
    tags: ['Piano', 'Vintage', 'Physical modeling'],
    accentColor: '#FF6B00',
    imageFile: 'ElectricL12.png',
  },
  {
    id: 'collision',
    name: 'Collision',
    category: 'Instrument',
    description: 'Synthétiseur à modélisation physique pour percussions et mallet.',
    longDescription:
      'Collision simule la physique des objets qui entrent en collision : marteaux, maillets et archets rencontrant des résonateurs. Parfait pour les percussions mallet, les sons de cloches et les textures acoustiques complexes.',
    tags: ['Physical modeling', 'Percussion', 'Mallet'],
    accentColor: '#FF6B00',
    imageFile: 'CollisionL12.png',
  },
  {
    id: 'tension',
    name: 'Tension',
    category: 'Instrument',
    description: 'Synthétiseur à modélisation de cordes pincées et frappées.',
    longDescription:
      'Tension modélise physiquement les instruments à cordes : guitares, pianos, clavecins et bien plus. Il simule les doigts, le médiator, les archets et la table de résonance pour créer des instruments à cordes acoustiquement réalistes.',
    tags: ['Physical modeling', 'Strings', 'Acoustic'],
    accentColor: '#FF6B00',
    imageFile: 'TensionL12.png',
  },

  // Audio Effects
  {
    id: 'eq-eight',
    name: 'EQ Eight',
    category: 'Audio Effect',
    description: 'Égaliseur paramétrique 8 bandes de référence.',
    longDescription:
      'EQ Eight est l\'égaliseur de référence d\'Ableton avec 8 bandes paramétriques entièrement configurables. Chaque bande peut être de type Bell, Shelf, Notch ou Coupe. Il offre un affichage spectral en temps réel pour une correction précise du son.',
    tags: ['EQ', 'Mixing', 'Correction'],
    accentColor: '#3A8FD6',
    imageFile: 'EQEightL12.png',
  },
  {
    id: 'compressor',
    name: 'Compressor',
    category: 'Audio Effect',
    description: 'Compresseur polyvalent avec détection Peak et RMS.',
    longDescription:
      'Le Compressor d\'Ableton offre un contrôle précis de la dynamique avec des modes Peak et RMS, un side-chain externe, et un circuit de feedback optionnel. Son affichage de gain reduction en temps réel facilite le réglage.',
    tags: ['Dynamics', 'Mixing', 'Compression'],
    accentColor: '#3A8FD6',
    imageFile: 'CompressorL12.png',
  },
  {
    id: 'reverb',
    name: 'Reverb',
    category: 'Audio Effect',
    description: 'Réverbération algorithmique aux textures atmosphériques.',
    longDescription:
      'La Reverb d\'Ableton crée des espaces acoustiques réalistes grâce à des algorithmes d\'Early Reflections et de Diffusion Network. Elle offre un contrôle sur la taille, la couleur, et la modulation pour des ambiances allant de la petite pièce à la cathédrale.',
    tags: ['Reverb', 'Space', 'Ambience'],
    accentColor: '#3A8FD6',
    imageFile: 'ReverbL12.png',
  },
  {
    id: 'echo',
    name: 'Echo',
    category: 'Audio Effect',
    description: 'Delay stéréo avec filtres et modulation intégrés.',
    longDescription:
      'Echo est un delay moderne qui combine des têtes de lecture stéréo indépendantes avec des filtres intégrés, une modulation et une section Repitch. Il peut aller du simple delay slap-back aux effets de delay complexes et rythmiques.',
    tags: ['Delay', 'Echo', 'Modulation'],
    accentColor: '#3A8FD6',
    imageFile: 'EchoL12.png',
  },
  {
    id: 'auto-filter',
    name: 'Auto Filter',
    category: 'Audio Effect',
    description: 'Filtre dynamique modulable par enveloppe ou LFO.',
    longDescription:
      'Auto Filter est un filtre suiveur d\'enveloppe classique. Il peut suivre l\'amplitude du signal d\'entrée ou être modulé par un LFO pour créer des effets wah-wah, des sweeps de filtre et des textures sonores animées.',
    tags: ['Filter', 'Modulation', 'Wah'],
    accentColor: '#3A8FD6',
    imageFile: 'AutoFilterL12.png',
  },
  {
    id: 'chorus-ensemble',
    name: 'Chorus-Ensemble',
    category: 'Audio Effect',
    description: 'Chorus et ensemble pour épaissir et enrichir les sons.',
    longDescription:
      'Chorus-Ensemble regroupe deux effets classiques : un Chorus qui duplique et désaccorde légèrement le signal, et un Ensemble qui crée une modulation plus complexe. Parfait pour épaissir les cordes, les voix et les synthétiseurs.',
    tags: ['Chorus', 'Modulation', 'Width'],
    accentColor: '#3A8FD6',
    imageFile: 'ChorusEnsembleL12.png',
  },
  {
    id: 'phaser-flanger',
    name: 'Phaser-Flanger',
    category: 'Audio Effect',
    description: 'Phaser et flanger pour des effets de balayage spectral.',
    longDescription:
      'Phaser-Flanger combine deux effets de modulation classiques. Le Phaser crée des interférences de phase tournantes, tandis que le Flanger produit un effet de "jet" caractéristique. Les deux partagent une interface LFO flexible.',
    tags: ['Phaser', 'Flanger', 'Modulation'],
    accentColor: '#3A8FD6',
    imageFile: 'PhaserFlangerL12.png',
  },
  {
    id: 'beat-repeat',
    name: 'Beat Repeat',
    category: 'Audio Effect',
    description: 'Répéteur de beats créatif pour effets glitch et stutters.',
    longDescription:
      'Beat Repeat capture des fragments audio et les répète de manière rythmique ou aléatoire. Il crée des effets de stutter, de glitch et de bégaiement qui sont devenus un outil signature de la musique électronique moderne.',
    tags: ['Glitch', 'Stutter', 'Creative'],
    accentColor: '#3A8FD6',
    imageFile: 'BeatRepeatL12.png',
  },
  {
    id: 'overdrive',
    name: 'Overdrive',
    category: 'Audio Effect',
    description: 'Distorsion douce inspirée des pédales analogiques.',
    longDescription:
      'Overdrive émule le clipping doux des amplificateurs à transistors et tubes. Son circuit de soft-clipping ajoute des harmoniques chaudes et agréables, idéal pour les guitares, les basses et pour ajouter du caractère à n\'importe quelle source.',
    tags: ['Distortion', 'Guitar', 'Saturation'],
    accentColor: '#3A8FD6',
    imageFile: 'OverdriveL12.png',
  },
  {
    id: 'glue-compressor',
    name: 'Glue Compressor',
    category: 'Audio Effect',
    description: 'Compresseur de bus inspiré des SSL pour coller le mix.',
    longDescription:
      'Glue Compressor est inspiré du légendaire compresseur de bus des consoles SSL 4000. Il "colle" les éléments d\'un groupe ou d\'un mix, ajoutant de la cohésion et du punch. Son circuit de détection RMS lui confère un comportement musical naturel.',
    tags: ['Dynamics', 'Bus', 'Mixing'],
    accentColor: '#3A8FD6',
    imageFile: 'GlueL12.png',
  },
  {
    id: 'limiter',
    name: 'Limiter',
    category: 'Audio Effect',
    description: 'Limiteur transparent pour la protection et le mastering.',
    longDescription:
      'Le Limiter d\'Ableton est un limiteur de crête transparent conçu pour le mastering et la protection des sorties. Il garantit que le signal ne dépasse jamais un seuil défini, avec un look-ahead configurable pour éviter les distorsions.',
    tags: ['Dynamics', 'Mastering', 'Limiting'],
    accentColor: '#3A8FD6',
    imageFile: 'LimiterL12.png',
  },
  {
    id: 'utility',
    name: 'Utility',
    category: 'Audio Effect',
    description: 'Outil essentiel pour le gain, la phase et la largeur stéréo.',
    longDescription:
      'Utility est l\'outil de routage de référence d\'Ableton. Il contrôle le gain, la phase, la largeur stéréo, et permet de transformer un signal stéréo en mono. Un outil indispensable dans toute chaîne de traitement audio.',
    tags: ['Gain', 'Stereo', 'Utility'],
    accentColor: '#3A8FD6',
    imageFile: 'UtilityL12.png',
  },
  {
    id: 'spectrum',
    name: 'Spectrum',
    category: 'Audio Effect',
    description: 'Analyseur de spectre en temps réel pour le monitoring.',
    longDescription:
      'Spectrum est un analyseur de spectre FFT qui affiche la distribution des fréquences en temps réel. Il aide à identifier les problèmes de fréquences, à comparer des sources audio et à prendre des décisions d\'égalisation éclairées.',
    tags: ['Analyzer', 'Monitoring', 'EQ'],
    accentColor: '#3A8FD6',
    imageFile: 'SpectrumL12.png',
  },
  {
    id: 'saturator',
    name: 'Saturator',
    category: 'Audio Effect',
    description: 'Saturateur polyvalent avec six modes de distorsion.',
    longDescription:
      'Saturator offre six courbes de saturation différentes : Analog Clip, Soft Sine, Medium Curve, Hard Curve, Sinoid Fold et Digital Clip. Il ajoute de la chaleur et des harmoniques ou peut être poussé pour des distorsions créatives.',
    tags: ['Saturation', 'Warmth', 'Distortion'],
    accentColor: '#3A8FD6',
    imageFile: 'SaturatorL12.png',
  },
  {
    id: 'multiband-dynamics',
    name: 'Multiband Dynamics',
    category: 'Audio Effect',
    description: 'Compresseur et expandeur multibande pour un contrôle précis.',
    longDescription:
      'Multiband Dynamics divise le signal en trois bandes de fréquences indépendantes, chacune avec son propre compresseur et expandeur. C\'est l\'outil idéal pour le mastering et le traitement avancé de la dynamique par bande de fréquence.',
    tags: ['Dynamics', 'Mastering', 'Multiband'],
    accentColor: '#3A8FD6',
    imageFile: 'MultibandDynamicsL12.png',
  },
  {
    id: 'delay',
    name: 'Delay',
    category: 'Audio Effect',
    description: 'Delay stéréo simple avec synchronisation au tempo.',
    longDescription:
      'Le Delay d\'Ableton est un delay stéréo classique avec synchronisation au tempo. Il offre des canaux gauche et droit indépendants, un filtre de feedback et un mode de repitch pour des effets créatifs variés.',
    tags: ['Delay', 'Tempo', 'Stereo'],
    accentColor: '#3A8FD6',
    imageFile: 'DelayL12.png',
  },
  {
    id: 'grain-delay',
    name: 'Grain Delay',
    category: 'Audio Effect',
    description: 'Delay à granulation pour des textures sonores uniques.',
    longDescription:
      'Grain Delay décompose le signal audio en petits grains sonores avant de les retarder. Le résultat va du léger flou sonore à des textures granulaires radicales, avec un contrôle sur la fréquence, la taille et la dispersion des grains.',
    tags: ['Granular', 'Texture', 'Creative'],
    accentColor: '#3A8FD6',
    imageFile: 'GrainDelayL12.png',
  },
  {
    id: 'vocoder',
    name: 'Vocoder',
    category: 'Audio Effect',
    description: 'Vocodeur classique pour effets vocaux robotiques.',
    longDescription:
      'Le Vocoder d\'Ableton applique l\'enveloppe spectrale d\'un signal modulateur (généralement une voix) à un signal porteur (généralement un synthétiseur). Il crée les effets vocaux robotiques classiques des années 70 et 80.',
    tags: ['Vocal', 'Robotic', 'Classic'],
    accentColor: '#3A8FD6',
    imageFile: 'VocoderL12.png',
  },
  {
    id: 'looper',
    name: 'Looper',
    category: 'Audio Effect',
    description: 'Pédale de loop en temps réel pour enregistrement sur scène.',
    longDescription:
      'Looper est une pédale de looping en temps réel. Enregistrez, superposez et rejouez des boucles audio à la volée. Il peut se synchroniser au tempo d\'Ableton ou fonctionner de manière indépendante, et s\'exporte en audio.',
    tags: ['Loop', 'Live', 'Performance'],
    accentColor: '#3A8FD6',
    imageFile: 'LooperL12.png',
  },
  {
    id: 'corpus',
    name: 'Corpus',
    category: 'Audio Effect',
    description: 'Résonateur physique pour transformer n\'importe quel son.',
    longDescription:
      'Corpus simule la résonance acoustique de sept types de corps physiques : barres, tambours, membranes, tubes, plaques et sphères. Il transforme n\'importe quelle source audio en instrument acoustique virtuel.',
    tags: ['Resonator', 'Physical modeling', 'Creative'],
    accentColor: '#3A8FD6',
    imageFile: 'CorpusL12.png',
  },
  {
    id: 'cabinet',
    name: 'Cabinet',
    category: 'Audio Effect',
    description: 'Simulation de cabinets de guitare pour un son amplifié.',
    longDescription:
      'Cabinet émule cinq configurations de cabinets de guitare allant du petit combo 1x10 au grande stack 4x12. Chaque cabinet est capturé avec plusieurs microphones positionnés différemment pour un son authentique.',
    tags: ['Guitar', 'Cabinet', 'Amp sim'],
    accentColor: '#3A8FD6',
    imageFile: 'CabinetL12.png',
  },
  {
    id: 'pedal',
    name: 'Pedal',
    category: 'Audio Effect',
    description: 'Simulation de pédales de distorsion classiques.',
    longDescription:
      'Pedal émule trois types de pédales de distorsion classiques : Overdrive doux, Distortion médium et Fuzz radical. Chacun possède son propre caractère et son mode de saturation, parfait pour guitares et sons électroniques.',
    tags: ['Distortion', 'Guitar', 'Pedal'],
    accentColor: '#3A8FD6',
    imageFile: 'PedalL12.png',
  },
  {
    id: 'dynamic-tube',
    name: 'Dynamic Tube',
    category: 'Audio Effect',
    description: 'Saturation à tube dynamique réagissant au signal.',
    longDescription:
      'Dynamic Tube émule la saturation harmonique des amplificateurs à tubes. Contrairement à une saturation statique, il réagit dynamiquement au niveau du signal d\'entrée, ajoutant de la chaleur et du caractère à basse intensité et saturant plus à fort niveau.',
    tags: ['Tube', 'Saturation', 'Warmth'],
    accentColor: '#3A8FD6',
    imageFile: 'DynamicTubeL12.png',
  },
  {
    id: 'erosion',
    name: 'Erosion',
    category: 'Audio Effect',
    description: 'Dégradation audio par bruit et ondes sinusoïdales.',
    longDescription:
      'Erosion dégrade la qualité audio en modulant le signal avec du bruit blanc, coloré ou des ondes sinusoïdales. Il crée des effets lo-fi, des aliasings et des distorsions numériques caractéristiques pour des textures abîmées.',
    tags: ['Lo-fi', 'Degradation', 'Noise'],
    accentColor: '#3A8FD6',
    imageFile: 'ErosionL12.png',
  },
  {
    id: 'redux',
    name: 'Redux',
    category: 'Audio Effect',
    description: 'Réducteur de bits et de sample rate pour effets lo-fi.',
    longDescription:
      'Redux réduit la résolution en bits et le sample rate du signal audio pour créer des effets lo-fi et rétro caractéristiques des premiers samplers et consoles de jeux vidéo des années 80 et 90.',
    tags: ['Lo-fi', 'Bit crusher', 'Retro'],
    accentColor: '#3A8FD6',
    imageFile: 'ReduxL12.png',
  },
  {
    id: 'vinyl-distortion',
    name: 'Vinyl Distortion',
    category: 'Audio Effect',
    description: 'Simulation des imperfections du vinyle et du craquement.',
    longDescription:
      'Vinyl Distortion émule les artefacts acoustiques des platines vinyle : distorsion harmonique liée au groove, craquements et saturation analogique. Il ajoute du caractère et de la chaleur pour des productions lo-fi authentiques.',
    tags: ['Vinyl', 'Lo-fi', 'Analog'],
    accentColor: '#3A8FD6',
    imageFile: 'VinylDistortionL12.png',
  },

  // MIDI Effects
  {
    id: 'arpeggiator',
    name: 'Arpeggiator',
    category: 'MIDI Effect',
    description: 'Arpège automatiquement les accords en motifs rythmiques.',
    longDescription:
      'L\'Arpeggiator décompose les accords en notes individuelles jouées en séquence selon différents modes : Up, Down, UpDown, Random, et bien d\'autres. Il est synchronisé au tempo et offre un contrôle sur la vitesse, la durée et le transposeur.',
    tags: ['Arpeggio', 'Rhythm', 'Melodic'],
    accentColor: '#9B59B6',
    imageFile: 'ArpeggiatorL12.png',
  },
  {
    id: 'chord',
    name: 'Chord',
    category: 'MIDI Effect',
    description: 'Génère des accords à partir de notes simples.',
    longDescription:
      'Chord transforme chaque note jouée en accord en ajoutant jusqu\'à six notes supplémentaires à des intervalles définis. Parfait pour créer des harmonies complexes en jouant simplement une mélodie à une main.',
    tags: ['Harmony', 'Chords', 'MIDI'],
    accentColor: '#9B59B6',
    imageFile: 'ChordL12.png',
  },
  {
    id: 'scale',
    name: 'Scale',
    category: 'MIDI Effect',
    description: 'Transpose les notes selon une gamme musicale définie.',
    longDescription:
      'Scale remappes les notes MIDI entrantes sur une gamme musicale choisie. Toute note jouée est automatiquement transposée à la note la plus proche de la gamme, garantissant que toutes les notes sonnent juste dans un contexte musical défini.',
    tags: ['Scale', 'Quantize', 'Melody'],
    accentColor: '#9B59B6',
    imageFile: 'ScaleL12.png',
  },
  {
    id: 'pitch',
    name: 'Pitch',
    category: 'MIDI Effect',
    description: 'Transpose les notes MIDI par demi-tons ou octaves.',
    longDescription:
      'Pitch est le transposeur MIDI le plus simple : il décale toutes les notes entrantes d\'un nombre défini de demi-tons. Utile pour transposer un instrument dans une autre tonalité sans toucher à la programmation MIDI.',
    tags: ['Transpose', 'MIDI', 'Pitch'],
    accentColor: '#9B59B6',
    imageFile: 'PitchL12.png',
  },
  {
    id: 'velocity',
    name: 'Velocity',
    category: 'MIDI Effect',
    description: 'Contrôle et façonne la vélocité des notes MIDI.',
    longDescription:
      'Velocity modifie la vélocité des notes MIDI entrantes. Il peut la compresser, l\'expandre, la randomiser ou la fixer à une valeur constante. Idéal pour humaniser des programmations MIDI trop rigides ou homogénéiser un jeu.',
    tags: ['Velocity', 'MIDI', 'Expression'],
    accentColor: '#9B59B6',
    imageFile: 'VelocityL12.png',
  },
  {
    id: 'random',
    name: 'Random',
    category: 'MIDI Effect',
    description: 'Ajoute une variation aléatoire à la hauteur des notes.',
    longDescription:
      'Random ajoute une quantité aléatoire de transposition à chaque note jouée. La quantité et le mode de randomisation (aléatoire libre ou confiné à une gamme) sont configurables pour des variations subtiles ou drastiques.',
    tags: ['Random', 'Variation', 'MIDI'],
    accentColor: '#9B59B6',
    imageFile: 'RandomL12.png',
  },
  {
    id: 'note-length',
    name: 'Note Length',
    category: 'MIDI Effect',
    description: 'Contrôle la durée des notes MIDI et le legato.',
    longDescription:
      'Note Length modifie la durée de toutes les notes MIDI ou la force à une valeur fixe. Il peut également déclencher des notes uniquement sur le Note Off, permettant de créer des effets de Gate à partir d\'un signal MIDI continu.',
    tags: ['Duration', 'Gate', 'MIDI'],
    accentColor: '#9B59B6',
    imageFile: 'NoteLengthL12.png',
  },
];

export const CATEGORIES: PluginCategory[] = ['Instrument', 'Audio Effect', 'MIDI Effect'];

export const getCategoryColor = (category: PluginCategory): string => {
  switch (category) {
    case 'Instrument':
      return '#FF6B00';
    case 'Audio Effect':
      return '#3A8FD6';
    case 'MIDI Effect':
      return '#9B59B6';
  }
};
