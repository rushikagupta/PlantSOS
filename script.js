const plantProblems = [
  {
    name: "Possible overwatering",
    symptoms: ["yellow", "drooping"],
    clues: ["wet", "often"],
    description:
      "Roots may be sitting in wet soil for too long, reducing the oxygen they need. Yellowing and wilting can both happen when roots are stressed.",
    solution:
      "Pause watering for now. Check that the pot has drainage holes and let the upper soil dry before watering again. If the soil smells sour or stems are mushy, inspect the roots.",
    checks: [
      "Is the pot sitting in a saucer of water?",
      "Does the pot have drainage holes?",
      "Are roots dark, mushy or unpleasant-smelling?",
    ],
  },
  {
    name: "Possible underwatering",
    symptoms: ["brown", "drooping"],
    clues: ["dry", "rarely"],
    description:
      "Dry soil combined with limp leaves or crispy edges can point to a plant that is not getting enough water.",
    solution:
      "Check moisture a few centimetres below the surface. If it is dry, water slowly and thoroughly until excess drains away. Avoid leaving the pot standing in water.",
    checks: [
      "Does the pot feel unusually light?",
      "Is the soil pulling away from the pot edges?",
      "Are leaves dry and papery rather than soft?",
    ],
  },
  {
    name: "Light stress",
    symptoms: ["brown", "yellow", "slow"],
    clues: ["direct", "low"],
    description:
      "Very strong direct sun can scorch foliage, while persistently dim conditions can slow growth and contribute to leaf loss.",
    solution:
      "Move the plant gradually to a spot with the light its species prefers. Avoid sudden changes; observe it for a week or two.",
    checks: [
      "Are pale or crispy patches on the window-facing side?",
      "Has the plant recently been moved?",
      "Is there enough natural light to read comfortably nearby?",
    ],
  },
  {
    name: "Possible pest activity",
    symptoms: ["pests", "spots", "yellow"],
    clues: [],
    description:
      "Fine webbing, tiny moving insects, sticky residue or speckled leaves can be signs of common houseplant pests.",
    solution:
      "Isolate the plant from nearby plants. Inspect leaf undersides and stems closely. Identify the pest before choosing a treatment; test any product on a small area first.",
    checks: [
      "Look under leaves and around new growth.",
      "Check for sticky residue or fine webbing.",
      "Keep the plant separate while investigating.",
    ],
  },
  {
    name: "Possible leaf-spot issue",
    symptoms: ["spots", "yellow"],
    clues: ["wet"],
    description:
      "Spots can have many causes, including wet foliage, physical damage, pests or fungal and bacterial problems. Pattern and spread matter.",
    solution:
      "Avoid wetting leaves when watering, improve gentle airflow and remove badly affected fallen material with clean tools. Do not apply a treatment until the cause is clearer.",
    checks: [
      "Are spots spreading or staying the same?",
      "Are spots wet-looking, raised or ringed?",
      "Do nearby plants show similar marks?",
    ],
  },
  {
    name: "Possible nutrient or root-zone stress",
    symptoms: ["yellow", "slow"],
    clues: ["old", "new"],
    description:
      "Slow growth and leaf colour changes may relate to nutrients, root crowding, seasonal rest or unsuitable growing conditions.",
    solution:
      "Check light, watering and whether roots are crowded before adding fertiliser. If the plant is actively growing, use a suitable houseplant fertiliser according to its label.",
    checks: [
      "Has the plant outgrown its pot?",
      "Has it been repotted recently?",
      "Is it currently in its active growing season?",
    ],
  },
  {
    name: "Humidity or dry-air stress",
    symptoms: ["brown"],
    clues: [],
    description:
      "Crispy leaf tips or edges can be associated with dry air, inconsistent watering, mineral build-up or other environmental stress.",
    solution:
      "Keep watering consistent and check water quality and soil moisture. Grouping compatible plants can slightly change the local humidity; avoid misting as a cure-all.",
    checks: [
      "Is the plant near a heater or air conditioner?",
      "Are only the tips affected?",
      "Does your tap water leave visible mineral deposits?",
    ],
  },
];

const plants = [
  {
    name: "Monstera deliciosa",
    common: "Swiss cheese plant",
    light: "Bright indirect",
    water: "When top soil dries",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUAPiyZ0No7U5Og8GIDf1gjAtTSEABFiBj7CpVDbaZ-dcdthXuYS-u2Jy&s=10",
    about:
      "A climbing tropical plant known for its dramatic split leaves. Give it room, a support to climb and a chunky, well-draining mix.",
  },
  {
    name: "Epipremnum aureum",
    common: "Golden pothos",
    light: "Indirect to low",
    water: "When partly dry",
    image:
      "https://www.leafenvy.co.uk/cdn/shop/files/Golden_Pothos_Light.jpg?v=1766762992",
    about:
      "A forgiving trailing vine. It tolerates a range of indoor conditions, though brighter indirect light helps maintain variegation.",
  },
  {
    name: "Sansevieria trifasciata",
    common: "Snake plant",
    light: "Indirect; tolerates low",
    water: "Let soil dry fully",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbswfi02t0xxhL42ex3Aa65YEEogc4RHrelJHXNve1A&s=10",
    about:
      "A drought-tolerant plant with upright leaves. Overwatering is a common problem, so use a draining pot and allow the mix to dry.",
  },
  {
    name: "Spathiphyllum",
    common: "Peace lily",
    light: "Medium indirect",
    water: "When surface dries",
    image:
      "https://www.marthastewart.com/thmb/tCF8K7TKH8wXoWEd3hSvOgu1yuI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2240821087-bf0c527b01e84c56bfb627db9747afb9.jpg",
    about:
      "Known for glossy leaves and white flower-like spathes. It appreciates evenly moist, not waterlogged, soil and protection from harsh sun.",
  },
];

const guides = {
  watering: {
    title: "Before you reach for the watering can",
    intro:
      "A watering routine should respond to the plant and its environment, not just the calendar.",
    items: [
      "Check the soil with a finger or wooden stick a few centimetres below the surface.",
      "Water thoroughly when the plant's needs indicate it is time, allowing excess water to drain away.",
      "Empty decorative cachepots and saucers so roots are not left standing in water.",
      "Adjust for season, pot size, soil mix, light and room temperature. The same plant may need different amounts at different times.",
    ],
  },
  light: {
    title: "Find your plant's happy place",
    intro:
      "Light is one of the biggest influences on houseplant health. 'Bright' can mean different things in different rooms.",
    items: [
      "Observe the spot at different times of day rather than judging from one moment.",
      "Direct sun means sunbeams fall on the leaves; bright indirect light is bright without strong direct rays.",
      "Move plants gradually when changing their light exposure to reduce shock.",
      "Rotate the pot occasionally for more even growth, if the species benefits from it.",
    ],
  },
  leaves: {
    title: "A closer look goes a long way",
    intro:
      "A quick, regular leaf check can help you notice changes before they become widespread.",
    items: [
      "Look at the upper and lower surfaces of leaves, along stems and around new growth.",
      "Notice whether spots are dry, wet, raised, spreading or limited to older leaves.",
      "Look for fine webbing, tiny insects, sticky residue or cottony clusters.",
      "Clean tools between plants and isolate a plant if you suspect pests. Identify the issue before treating.",
    ],
  },
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function renderPlantLibrary() {
  $("#plantGrid").innerHTML = plants
    .map(
      (plant, index) => `
    <article class="plant-card">
      <img src="${plant.image}" alt="${plant.common}">
      <div class="plant-card-body">
        <h3>${plant.common}</h3><p class="latin">${plant.name}</p>
        <div class="plant-meta"><span>☀ ${plant.light}</span><span>💧 ${plant.water}</span></div>
        <button class="text-link plant-detail" data-index="${index}">Meet this plant ↗</button>
      </div>
    </article>`,
    )
    .join("");
}

function diagnose(formData) {
  const symptoms = formData.getAll("symptoms");
  const answers = ["soil", "watering", "light", "location"].map((name) =>
    formData.get(name),
  );
  return plantProblems
    .map((problem) => {
      let score = 0;
      problem.symptoms.forEach((s) => {
        if (symptoms.includes(s)) score += 2;
      });
      problem.clues.forEach((clue) => {
        if (answers.includes(clue)) score += 1.5;
      });
      const possible = problem.symptoms.length + problem.clues.length;
      const percent = Math.min(96, Math.round((score / (possible * 2)) * 100));
      return { ...problem, score, percent };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
}

function renderResults(results, plantName) {
  $("#resultIntro").textContent =
    `Based on the clues you selected${plantName ? ` for ${plantName}` : ""}, these are possible areas to investigate.`;
  $("#resultsList").innerHTML = results
    .map(
      (result) => `
      <article class="result-card">
        <div class="result-card-top"><h4>${result.name}</h4><span class="match-pill">${result.percent}% clue match</span></div>
        <p>${result.description}</p>
        <strong>A gentle next step</strong><p class="solution">${result.solution}</p>
        <strong>Things to check</strong><ul>${result.checks.map((check) => `<li>${check}</li>`).join("")}</ul>
      </article>`,
    )
    .join("");
  $("#resultsPanel").hidden = false;
  $("#resultsPanel").scrollIntoView();
}

function openDialog(content) {
  $("#dialogContent").innerHTML = content;
  $("#detailDialog").showModal();
}

$("#diagnosisForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  if (!formData.getAll("symptoms").length) {
    $("#formError").textContent =
      "Choose at least one symptom so we have a clue to start with.";
    return;
  }
  $("#formError").textContent = "";
  renderResults(diagnose(formData), $("#plantName").value.trim());
});
$("#closeResults").addEventListener("click", () => {
  $("#resultsPanel").hidden = true;
});

$("#plantGrid").addEventListener("click", (event) => {
  const button = event.target.closest(".plant-detail");
  if (!button) return;
  const plant = plants[Number(button.dataset.index)];
  openDialog(
    `<p class="eyebrow">PLANT LIBRARY</p><h3>${plant.common}</h3><p><em>${plant.name}</em></p><p>${plant.about}</p><ul><li><strong>Light:</strong> ${plant.light}</li><li><strong>Water:</strong> ${plant.water}</li></ul><p>Care needs vary with the season, pot, soil and home environment. Observe your plant and adjust gradually.</p>`,
  );
});
$$(".guide-open").forEach((button) =>
  button.addEventListener("click", () => {
    const guide = guides[button.dataset.guide];
    openDialog(
      `<p class="eyebrow">PLANTSOS CARE NOTES</p><h3>${guide.title}</h3><p>${guide.intro}</p><ul>${guide.items.map((item) => `<li>${item}</li>`).join("")}</ul>`,
    );
  }),
);
$("#dialogClose").addEventListener("click", () => $("#detailDialog").close());

$("#menuToggle").addEventListener("click", () => {
  $("#mainNav").classList.toggle("open");
});

renderPlantLibrary();
