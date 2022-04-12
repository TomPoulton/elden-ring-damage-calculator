# Elden Ring Damage Calculator

Search for the best weapons for your build

<img src="img/search-results.png" alt="Search Results" title="Search Results" style="width:700px; height:auto;">

Filter on weapon and damage types. Sort by AR, damage types, and passive effects

<img src="img/search-options.png" alt="Search Options" title="Search Options" style="width:700px; height:auto;">

See how the weapon's stats change as you upgrade it

<img src="img/weapon-charts.png" alt="Weapon Charts" title="Weapon Charts" style="width:700px; height:auto;">

You can now see how the weapon's stats change with attributes in real time using the slider under the charts

## Usage

Enter your attributes at the top, then either search for the best weapon for your stats, or look up a specific weapon and see how it will perform.

You can customize the search results by clicking `Search Options`. If you click on a weapon in the results table it will show you the graphs for that weapon.

The graphs show how different weapon stats vary with upgrade level:
- Total AR
- Attribute scaling
- Passive effects

## Credits

All data and calculations are from the spreadsheet by u/TarnishedSpreadsheet [here's the reddit post with all the updates and spinoff projects](https://www.reddit.com/r/Eldenring/comments/tbco46/elden_ring_weapon_calculator/)

## Development

I'm clearly not a frontend developer, my JS and UX foo is weak. Suggestions / improvements / PRs welcome!

## ToDo
- Calculate sorcery scaling for staffs etc (possibly a separate table & filter?)
- Show weapon scaling with attributes
    - just scale against one attribute for now (starting at minimum)
    - Give dropdown for attribute select?
- Do proper calculations when you're below the stat requirements
