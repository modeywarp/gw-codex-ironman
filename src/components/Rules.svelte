<section class="rules">
  <h1>Rules</h1>

  <p>
    Similar to the <a href="https://wiki.guildwars.com/wiki/Codex_Arena"
      >Codex Arena</a
    >
    where players have a limited skillset available to them everyday, you must complete
    the campaigns with a set of skills that varies as you progress.
  </p>

  <p>
    Two variants of the mode are available. Both revolving around having a
    limited skillset in order to spice things up, the outposts replace the daily
    rotation you'd usually see in the Codex Arena:
  </p>

  <hr />

  <div class="cells">
    <div class="row split">
      <h3>Regular</h3>
      <h3>Ironman</h3>
    </div>
    <div class="row split">
      <p>Pick the character of your choice.</p>
      <p>
        Create a fresh character using the <a
          href="https://wiki.guildwars.com/wiki/User:Hazedesunna/Ironman"
          >Ironman rules</a
        >
        of your choice.
      </p>
    </div>

    <div class="row center">
      <i>
        Before leaving an outpost or a city into an explorable area you must
        ensure your skillbar contains only skills from the offered skillset of:
      </i>
    </div>
    <div class="row split">
      <p>
        the outpost <u>you're currently in</u>.
      </p>
      <p>
        the <u>last outpost you unlocked.</u>
      </p>
    </div>
  </div>

  <hr />

  <p>
    Heroes are subject are subject to the same rules as the player character
    with one exception: they are able to use the skillsets from any of the
    previously discovered outposts. As it would be too cumbersome to edit the
    build of a whole group every outpost. Even with this exception discovering
    outposts should still provide some welcomed build-crafting potential
  </p>

  <hr />

  <p>
    Start by entering your character name & the outpost you're in according to
    the rules you use (Regular or Ironman)
  </p>
</section>

<style>
  .rules {
    position: relative;
    background-color: white;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
  }

  .rules::before {
    content: "";
    position: absolute;
    top: -200px;
    left: 0;
    width: 100%;
    height: 400px;
    transform: skewY(-8deg);
    background-color: white;
    box-shadow: 0 -20px 45px 0px rgba(20, 20, 20, 0.2);
    z-index: -1;
  }

  .rules h1 {
    text-align: center;
  }

  .rules > p {
    max-width: 450px;
  }

  .rules > .cells {
    max-width: 850px;
  }

  .rules .cells .row {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .rules .cells .row h3 {
    text-align: center;
  }

  .rules .cells .row.split {
    justify-content: space-evenly;
  }

  .rules .cells .row.split > * {
    flex-grow: 1;
    width: 50%;
    margin: 1em;
  }

  .rules .cells .row.center {
    max-width: 450px;
    text-align: center;
    margin: auto;
  }
</style>
