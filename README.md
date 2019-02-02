**Purpose**

The purpose of this exercise is to create a capsule that will allow users to ask Bixby for information on a Pokemon based on its name, id, or type.

**What is Bixby and how do I code for it?**

We have put together a few resources that we think will be very useful in getting a quick introduction to the Bixby ecosystem. We strongly recommend that you go through these before starting any capsule development.
  - Dice Capsule Walkthrough (https://bixbydevelopers.com/dev/docs/get-started/quick-start)
    - This is Bixby's version of a Hello World program. It will take you through the development of a simple capsule that teaches Bixby how to roll dice and return the results.
  - Teaching Bixby Fundamentals (https://www.youtube.com/watch?v=EYp_AhgNQWA)
    - This video is a comprehensive look at how to develop a capsule from scratch. This capsule is more complex than the Dice capsule and shows the implementation of hotel reservation using a hypothetical resort in space.
    - The sample code used for the capsule in the above video can be found here (https://github.com/bixbydevelopers/space-resorts).
  - 3rd Party Capsule Development Walkthrough (https://voicebot.ai/2018/12/15/how-to-build-a-samsung-bixby-capsule/)
    - This article is written by the winner of the Bixby Developer Showcase at Samsung Developer Conference 2018, Roger Kibbe. It describes Bixby development from an external developer perspective and serves as a great way to be introduced to programming for voice in general and Bixby in particular.

**Before you start!**

  - You will first need to create a Samsung account by navigating to https://bixbydevelopers.com/ and clicking on the "Login/Sign Up" button at the top right corner of the page. Once you have signed up, download the IDE to start creating the capsule.
  - We recommend that you explore the JSON objects served by the PokeApi (https://pokeapi.co/). We are using Version 2 of the API.

**Deliverable**

You will be required to create a capsule that will handle the following utterances.

  - Who is [Pokemon]?
    - The expected return for this should be the name, ID, image, and element type(s) for the pokemon name requested.
  - Who are [Pokemon1] and [Pokemon2]?
    - The expected return for this should be the name, ID, image, and element type(s) for all the pokemon names requested.
  - What pokemon has an ID of [Pokemon ID]?
    - The expected return for this should be the name, ID, image, and element type(s) for the pokemon ID requested.
  - How many [Pokemon Type] pokemon are there?
    - The expected return for this should be the count that represents the number of pokemon there of the requested type.
  - What type is [Pokemon]?
    - The expected return for this should be the element type(s) of the pokemon name requested.

**Tasks to complete**

It is suggested that you perform these tasks in order as they may be inherent blockers for the next task

Task List:
1) The Pokemon object (./models/concepts/structures/Pokemon.model.bxb) is broken. Add/Change any relevant elements to resolve the error(s). **NOTE: This task must be completed first or the rest of the capsule will not work.**

2) This is a two part question. Both of the parts described below result in searches not producing one or more Pokemon displayed.

    a) Searching for a particular Pokemon or all Pokemon of a given type does not produce a result.
    
      1) Utterance to try: "Show me squirtle" and "Show me ice pokemon" **NOTE: Make sure you use the "Show me ice pokemon" utterance when testing the multiple-Pokemon version of this utterance. Many other Pokemon types result in far larger data sets which may throw errors.**
      2) Working example display: See ~/WorkingExampleScreenshots/Task_2a_Example_1.png and ~/WorkingExampleScreenshots/Task_2a_Example_2.png

    b) Pokemon Type(s) are not defined. Add the necessary code to ./code/lib/utils.js to ensure that a Pokemon's type(s) are defined correctly.
    
      1) Utterance to try: "Show me Charizard"
      2) Working example display: See ~/WorkingExampleScreenshots/Task_2b_Example.png

3) Searching for the number of Pokemon of a particular type does not result in a number. Fix the necessary code to display the number correctly.
    1) Utterance to try: "How many fire pokemon are there?"
    2) Working example display: See ~/WorkingExampleScreenshots/Task_3_Example.png

4) All Pokemon images currently show Ditto (https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png). Change the necessary code to ensure that the correct Pokemon image is shown for each Pokemon.
    1) Working example display: See ~/WorkingExampleScreenshots/Task_4_Example.png

5) **BONUS CHALLENGE!** The singular Pokemon result display is sub-standard. Change the correct Layout macro file and any other parts of the capsule to present the information in a more pleasing way. Issues to address are: Image is too small, Pokemon Name & Pokemon Type are not capitalized (Should show "Charmander" instead of "charmander"). Feel free to add any other personal touches that you would like.

**Resources**

General Resources:
  - PokeApi (We are using Version 2 or v2): https://pokeapi.co/

Bixby Developer Resources:
  - Bixby Developer Center: https://bixbydevelopers.com/
  - Bixby Developer Support Help Center: https://support.bixbydevelopers.com/hc/en-us
    - You may find the  FAQ section useful as it contains articles that provide insight into common pitfalls first-time developers may encounter.

**Need Help?**
  - If you are stuck or need assistance, feel free to reach out to us. We are here to help you with any questions or point you to the right areas of the Bixby Developer Center or the Bixby Help Center. You can reach us by sending your questions via email to support@bixbydevelopers.com, make sure that you add **[POKEDEX PUZZLE QUESTION]** at the beginning of your support ticket subject line so we can get it to it quickly!
