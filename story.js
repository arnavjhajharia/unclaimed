// UNCLAIMED — story data. Original work.
// Hidden values: warmth (W), truth (T), hold (H). Flags in state.f.
// Each node: img, time, text (array of paragraphs; may be a function of state), choices.
// choice: {t: label, go: node, fx: {W,T,H}, set: flag, need: fn(state)->bool, lock: reason shown when unavailable}

window.STORY = {
  start: {
    img: "00-office", time: "23:40",
    text: [
      "Kestrel Halt has one platform, one lamp that works, and one office with a sliding window and a sign that says LOST PROPERTY in letters that were gold once.",
      "Mr. Hale, the stationmaster, buttons his coat to the throat. \"Last train passes at 02:10. Doesn't stop. First one stops at 05:52.\" He taps the ledger on the counter. \"Nobody comes for anything at night. Write down what turns up. That's the whole job.\"",
      "The door closes. The rain takes over.",
      "You have done this job for a long time. You could not say exactly how long. That is the first strange thing about tonight: noticing that you can't."
    ],
    choices: [
      { t: "Open the ledger.", go: "mitten" }
    ]
  },

  mitten: {
    img: "01-mitten", time: "23:58",
    text: [
      "The first thing tonight is small enough to sit in your palm: one red mitten, hand-knitted, a little felted at the thumb. Someone found it under the bench on the platform.",
      "When you hold it under the lamp, the office goes quiet in a way rain can't explain, and you see it the way you sometimes see these things:",
      "<em>A girl, six or seven, on her father's shoulders. A train door. The father sets her down and climbs aboard and the girl waves until the mitten flies off her hand, and she doesn't notice, because she is still waving.</em>",
      "The ledger asks for a location: <b>Drawer B (gloves, single)</b>. There is also the hook in the window, where anyone on the platform could see it."
    ],
    choices: [
      { t: "Hang it in the window, facing the platform.", go: "umbrella", fx: { W: 1 }, set: "mittenWindow" },
      { t: "File it: Drawer B, gloves, single.", go: "umbrella", fx: { H: 1 } }
    ]
  },

  umbrella: {
    img: "02-umbrella", time: "00:21",
    text: [
      "A knock on the glass. An old man, soaked despite his hat, already apologising.",
      "\"Teodor,\" he says. \"A green umbrella. One spoke broken. It was my wife's. I left it here this afternoon, I think. I'm sure. Nearly sure.\"",
      "It is on the shelf behind you. When you lift it, you see:",
      "<em>A woman in a yellow scarf, this afternoon, leaning the umbrella carefully against the bench. Not forgetting it. Placing it. She tucks a folded note into the canopy, looks at the tracks toward the sea, and boards a train alone.</em>",
      "The note is still there. You can feel it through the fabric."
    ],
    choices: [
      { t: "Hand it over and say nothing. The note will find him.", go: "letter", fx: { W: 1 } },
      { t: "Tell him gently that his wife left it on purpose, and there is a note.", go: "letter", fx: { T: 1, W: 1 }, set: "toldTeodor" },
      { t: "\"I'm sorry. Nothing like that has come in.\"", go: "umbrella_keep", fx: { H: 2 } }
    ]
  },

  umbrella_keep: {
    img: "02-umbrella", time: "00:24",
    text: [
      "He thanks you anyway. That is the worst part. He thanks you and walks back into the rain, and the umbrella stays on your shelf, dry.",
      "You tell yourself it was kinder. The ledger does not have a column for kinder."
    ],
    choices: [{ t: "Turn back to the shelves.", go: "letter" }]
  },

  letter: {
    img: "03-letter", time: "00:50",
    text: [
      "Wedged behind Drawer F you find an envelope you have never seen before. The stamp is a design they stopped printing decades ago. It was never posted.",
      "It is addressed, in careful blue ink: <b>To whoever works the night window at Kestrel Halt.</b>",
      "That is you. It has always, apparently, been you."
    ],
    choices: [
      { t: "Open it now.", go: "letter_open", fx: { T: 1 }, set: "readLetter" },
      { t: "Not yet. Put it in your coat pocket.", go: "tape", fx: { H: 1 }, set: "pocketLetter" }
    ]
  },

  letter_open: {
    img: "03-letter", time: "00:52",
    text: [
      "One page. The handwriting slants to the right and loops its g's.",
      "<em>\"The office keeps the things nobody comes back for. That is its job, and it is good at it. Be careful you do not become one of them. If you are reading this, check the date on the platform clock, and then check how old your hands look.\"</em>",
      "It is signed only with initials. They are smudged. You don't look at your hands. Not yet."
    ],
    choices: [{ t: "Fold it away. Someone is running up the platform.", go: "tape" }]
  },

  tape: {
    img: "04-tape", time: "01:13",
    text: [
      "A young woman, breathless, backpack streaming water. \"Please tell me someone handed in a cassette. Blue case. It says FOR THE DRIVE.\"",
      "It's in the tray. When you touch it:",
      "<em>Two kids in the back of a car, years ago, fighting over who controls the music, until the older one gives up and records a tape of everything the younger one likes. Their voices are on it, between songs, arguing, laughing.</em>",
      "\"My brother made it,\" she says. \"He's in hospital in the city. I'm on the first train. I wanted to play it for him.\" Her eyes go to the old tape deck on your desk."
    ],
    choices: [
      { t: "Give it to her. She has a train to catch.", go: "ring", fx: { W: 1 } },
      { t: "\"Play the start here. Make sure it survived the rain.\"", go: "tape_play", fx: { W: 1, T: 1 } },
      { t: "\"I'll need ID and a description of the contents. Rules.\"", go: "tape_rules", fx: { H: 1 } }
    ]
  },

  tape_play: {
    img: "04-tape", time: "01:16",
    text: [
      "The deck chews for a second, then a boy's voice, maybe twelve: <em>\"Okay, this is track one, and before you say anything, it's a good song—\"</em>",
      "She laughs so suddenly it sounds like a cough. Then she is crying, and then laughing again, and you both listen to the whole first song in the lamp light, and neither of you says anything, and it is the best four minutes the office has had in years."
    ],
    choices: [{ t: "Eject it carefully and hand it over.", go: "ring" }]
  },

  tape_rules: {
    img: "04-tape", time: "01:20",
    text: [
      "She digs out a student card, describes the tape down to the coffee stain. It takes nine minutes. You fill in every column.",
      "She takes it without looking at you. The ledger is very neat."
    ],
    choices: [{ t: "Next.", go: "ring" }]
  },

  ring: {
    img: "05-ring", time: "01:41",
    text: [
      "The ticket machine on the platform has been beeping. In its coin tray: a gold wedding ring, still warm.",
      "<em>A man in a good suit, an hour ago, buying a single to the city, where someone in a white dress is waiting in a hotel room. He pays. He takes off the ring to look at it. He leaves it in the tray and sits down on the bench.</em>",
      "He is still on the bench. Head down. He hasn't left. He hasn't gone either."
    ],
    choices: [
      { t: "Walk it out to him. Sit with him a while.", go: "ring_sit", fx: { W: 1 } },
      { t: "Leave it in the tray. Some choices aren't yours to make.", go: "dog", fx: { T: 1 } },
      { t: "Lock it in the safe. Valuables go in the safe.", go: "dog", fx: { H: 1 }, set: "ringSafe" }
    ]
  },

  ring_sit: {
    img: "05-ring", time: "01:49",
    text: [
      "You don't tell him what to do. You sit on the cold bench and put the ring between you and talk about the rain.",
      "After a while he says, \"I think I just needed someone to see me decide.\" He puts the ring in his pocket, not on his finger. You don't know what that means. Maybe he doesn't either. But he gets up."
    ],
    choices: [{ t: "Go back inside.", go: "dog" }]
  },

  dog: {
    img: "06-dog", time: "01:58",
    text: [
      "The red dog lead has hung by the door since before you can remember. Tonight, for the first time, something comes to stand under it.",
      "A brown dog, soaked, ears flat, looking at you the way the girl looked at the train.",
      "No collar. No tag. Just waiting."
    ],
    choices: [
      { t: "Let it in. Find it a towel.", go: "train", fx: { W: 1 }, set: "dog" },
      { t: "Close the door. You can't take in everything that turns up.", go: "train", fx: { H: 1 } }
    ]
  },

  train: {
    img: "07-suitcase", time: "02:10",
    text: [
      "The last train comes through without stopping, a long bright smear of windows and noise, and then it's gone and the quiet is bigger than before.",
      "Where it passed, on the edge of the platform, there's a suitcase. Old brown leather. Painted initials, faded.",
      "You know the initials before you can read them. They match the ones at the bottom of the letter.",
      "They are yours."
    ],
    choices: [{ t: "Bring it inside.", go: "suitcase" }]
  },

  suitcase: {
    img: "08-key", time: "02:31",
    text: (s) => [
      "Inside: folded shirts you remember buying. A photograph of a small house with a blue door. A brass key on a paper tag, and on the tag, in your handwriting: <em>back soon</em>.",
      "And the memory comes, the way all the others did, except this one is yours:",
      "<em>A younger you, arriving at Kestrel Halt to change trains. One night, that was the plan. The connection was cancelled. The night clerk was ill. Someone had to mind the window. Just until morning.</em>",
      (s.f.readLetter || s.f.pocketLetter)
        ? "The letter in your " + (s.f.readLetter ? "memory" : "pocket") + " has your loops on its g's. You wrote it on your first night here, to whoever would be next, and then you never left, so nobody was next. Except you."
        : "Somewhere behind Drawer F there is a letter in your handwriting. You don't need to read it now.",
      s.f.dog ? "The dog puts its chin on your knee." : "The office is very quiet."
    ],
    choices: [{ t: "Wait for the first train.", go: "dawn" }]
  },

  dawn: {
    img: "09-dawn", time: "05:52",
    text: (s) => {
      const out = [
        "The rain stops at five. At 05:52 the first train comes in and, for once, it stops. Its doors open with a sigh and stay open.",
        "Mr. Hale's ledger is on the counter. The key is in your hand. " +
          (s.f.mittenWindow ? "In the window, the red mitten turns slowly on its hook. Someone on the platform is pointing at it. " : "") +
          (s.f.toldTeodor ? "On the bench, an umbrella you recognise: Teodor came back to say thank you, and fell asleep waiting. " : "")
      ];
      if (s.H >= 4) out.push("Your fingers don't want to open. Thirty-one years of holding things will do that.");
      return out;
    },
    choices: [
      { t: "Take the key and get on the train.", go: "end_claimed", need: (s) => s.W >= 3 && s.H < 4,
        lock: "You can't quite make yourself let go of the office. (You've kept too much tonight, or given too little.)" },
      { t: "Write the true entry in the ledger, then walk home.", go: "end_ledger", need: (s) => s.T >= 2,
        lock: "You don't yet know enough of the truth to write it down. (Some things tonight you chose not to look at.)" },
      { t: "Stay. Someone has to mind the window.", go: "end_stay" }
    ]
  },

  end_claimed: {
    img: (s) => s.f.dog ? "09-board-dog" : "09-board", time: "05:53", ending: "CLAIMED",
    text: (s) => [
      "You leave the ledger open at tonight's page and put the key in your pocket.",
      s.f.dog ? "The dog gets on the train first, as if it has been waiting thirty-one years for exactly this." : "You get on alone, which is fine. Plenty of people do.",
      "From the window you watch Kestrel Halt slide away: the lamp, the shelves, the sign that used to be gold. Somewhere ahead there is a house with a blue door that has been waiting for you a lot longer than one night.",
      "<b>Item: one clerk. Status: claimed.</b>"
    ],
    choices: [{ t: "Begin the night again.", go: "__restart" }]
  },

  end_ledger: {
    img: "11-road", time: "05:58", ending: "THE TRUE ENTRY",
    text: (s) => [
      "You don't get on the train. You don't stay either. You pick up the pen and write, in the next empty line of the ledger:",
      "<b>Found: one person, on Platform 1, thirty-one years ago. Description: tired. Status: returned to owner.</b>",
      "Then you leave a note for whoever comes next. A different note this time: <em>Nothing here is lost. It's only waiting. Don't wait with it.</em>",
      s.f.dog ? "You walk out along the road toward the hills with the suitcase in one hand and the dog trotting ahead. The house with the blue door is only eleven miles. You've had thirty-one years. You can manage eleven miles." :
                "You walk out along the road toward the hills, suitcase in hand. The house with the blue door is only eleven miles away. You could have walked it any morning. Today you do."
    ],
    choices: [{ t: "Begin the night again.", go: "__restart" }]
  },

  end_stay: {
    img: "10-office", time: "06:10", ending: "THE NIGHT WINDOW",
    text: (s) => [
      "The doors close. The train goes on without you, and you are surprised by how little it hurts.",
      "You put the key back in the suitcase, and the suitcase on the shelf, and you write it in the ledger like anything else: <b>Suitcase, brown leather. Unclaimed.</b>",
      s.f.ringSafe ? "In the safe, the ring sits next to thirty years of other people's decisions." : "The shelves are full of other people's almosts.",
      "Somebody has to keep them. It might as well be someone who understands.",
      "Mr. Hale will be in at seven. He'll say, \"Quiet night?\" and you'll say yes, and it will be true, and it won't."
    ],
    choices: [{ t: "Begin the night again.", go: "__restart" }]
  }
};
