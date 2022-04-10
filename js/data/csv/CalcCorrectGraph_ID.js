// Don't leave any white space after the first ` otherwise the headers won't be read properly
const calcCorrectGraphIDCSV = 
`Name,Physical,Magic,Fire,Lightning,Holy,AttackElementCorrect ID
Dagger,0,0,0,0,0,10000
Heavy Dagger,1,0,0,0,0,10000
Keen Dagger,2,0,0,0,0,10000
Quality Dagger,8,0,0,0,0,10000
Fire Dagger,0,0,4,0,0,10005
Flame Art Dagger,0,0,4,0,0,10000
Lightning Dagger,0,0,0,4,0,10000
Sacred Dagger,0,0,0,0,4,10000
Magic Dagger,0,4,0,0,0,10000
Cold Dagger,0,0,0,0,0,10000
Poison Dagger,0,0,0,0,0,10013
Blood Dagger,0,0,0,0,0,10013
Occult Dagger,7,0,0,0,0,10013
Black Knife,0,0,0,0,4,10000
Parrying Dagger,0,0,0,0,0,10000
Heavy Parrying Dagger,1,0,0,0,0,10000
Keen Parrying Dagger,2,0,0,0,0,10000
Quality Parrying Dagger,8,0,0,0,0,10000
Fire Parrying Dagger,0,0,4,0,0,10005
Flame Art Parrying Dagger,0,0,4,0,0,10000
Lightning Parrying Dagger,0,0,0,4,0,10000
Sacred Parrying Dagger,0,0,0,0,4,10000
Magic Parrying Dagger,0,4,0,0,0,10000
Cold Parrying Dagger,0,0,0,0,0,10000
Poison Parrying Dagger,0,0,0,0,0,10013
Blood Parrying Dagger,0,0,0,0,0,10013
Occult Parrying Dagger,7,0,0,0,0,10013
Misericorde,0,0,0,0,0,10000
Heavy Misericorde,1,0,0,0,0,10000
Keen Misericorde,2,0,0,0,0,10000
Quality Misericorde,8,0,0,0,0,10000
Fire Misericorde,0,0,4,0,0,10005
Flame Art Misericorde,0,0,4,0,0,10000
Lightning Misericorde,0,0,0,4,0,10000
Sacred Misericorde,0,0,0,0,4,10000
Magic Misericorde,0,4,0,0,0,10000
Cold Misericorde,0,0,0,0,0,10000
Poison Misericorde,0,0,0,0,0,10013
Blood Misericorde,0,0,0,0,0,10013
Occult Misericorde,7,0,0,0,0,10013
Reduvia,7,0,0,0,0,10013
Crystal Knife,0,0,0,0,0,10000
Celebrant's Sickle,0,0,0,0,0,10000
Celebrant's Heavy Sickle,1,0,0,0,0,10000
Celebrant's Keen Sickle,2,0,0,0,0,10000
Celebrant's Quality Sickle,8,0,0,0,0,10000
Celebrant's Fire Sickle,0,0,4,0,0,10005
Celebrant's Flame Art Sickle,0,0,4,0,0,10000
Celebrant's Lightning Sickle,0,0,0,4,0,10000
Celebrant's Sacred Sickle,0,0,0,0,4,10000
Celebrant's Magic Sickle,0,4,0,0,0,10000
Celebrant's Cold Sickle,0,0,0,0,0,10000
Celebrant's Poison Sickle,0,0,0,0,0,10013
Celebrant's Blood Sickle,0,0,0,0,0,10013
Celebrant's Occult Sickle,7,0,0,0,0,10013
Glintstone Kris,0,4,0,0,0,10000
Scorpion's Stinger,0,0,0,0,0,10000
Great Knife,0,0,0,0,0,10000
Heavy Great Knife,1,0,0,0,0,10000
Keen Great Knife,2,0,0,0,0,10000
Quality Great Knife,8,0,0,0,0,10000
Fire Great Knife,0,0,4,0,0,10005
Flame Art Great Knife,0,0,4,0,0,10000
Lightning Great Knife,0,0,0,4,0,10000
Sacred Great Knife,0,0,0,0,4,10000
Magic Great Knife,0,4,0,0,0,10000
Cold Great Knife,0,0,0,0,0,10000
Poison Great Knife,0,0,0,0,0,10013
Blood Great Knife,0,0,0,0,0,10013
Occult Great Knife,7,0,0,0,0,10013
Wakizashi,0,0,0,0,0,10000
Heavy Wakizashi,1,0,0,0,0,10000
Keen Wakizashi,2,0,0,0,0,10000
Quality Wakizashi,8,0,0,0,0,10000
Fire Wakizashi,0,0,4,0,0,10005
Flame Art Wakizashi,0,0,4,0,0,10000
Lightning Wakizashi,0,0,0,4,0,10000
Sacred Wakizashi,0,0,0,0,4,10000
Magic Wakizashi,0,4,0,0,0,10000
Cold Wakizashi,0,0,0,0,0,10000
Poison Wakizashi,0,0,0,0,0,10013
Blood Wakizashi,0,0,0,0,0,10013
Occult Wakizashi,7,0,0,0,0,10013
Cinquedea,0,0,0,0,0,10000
Ivory Sickle,0,4,0,0,0,10000
Bloodstained Dagger,0,0,0,0,0,10000
Heavy Bloodstained Dagger,1,0,0,0,0,10000
Keen Bloodstained Dagger,2,0,0,0,0,10000
Quality Bloodstained Dagger,8,0,0,0,0,10000
Fire Bloodstained Dagger,0,0,4,0,0,10005
Flame Art Bloodstained Dagger,0,0,4,0,0,10000
Lightning Bloodstained Dagger,0,0,0,4,0,10000
Sacred Bloodstained Dagger,0,0,0,0,4,10000
Magic Bloodstained Dagger,0,4,0,0,0,10000
Cold Bloodstained Dagger,0,0,0,0,0,10000
Poison Bloodstained Dagger,0,0,0,0,0,10013
Blood Bloodstained Dagger,0,0,0,0,0,10013
Occult Bloodstained Dagger,7,0,0,0,0,10013
Erdsteel Dagger,0,0,0,0,0,12000
Heavy Erdsteel Dagger,1,0,0,0,0,12000
Keen Erdsteel Dagger,2,0,0,0,0,12000
Quality Erdsteel Dagger,8,0,0,0,0,12000
Fire Erdsteel Dagger,0,0,4,0,0,12005
Flame Art Erdsteel Dagger,0,0,4,0,0,12000
Lightning Erdsteel Dagger,0,0,0,4,0,12000
Sacred Erdsteel Dagger,0,0,0,0,4,12000
Magic Erdsteel Dagger,0,4,0,0,0,12000
Cold Erdsteel Dagger,0,0,0,0,0,12000
Poison Erdsteel Dagger,0,0,0,0,0,12005
Blood Erdsteel Dagger,0,0,0,0,0,12005
Occult Erdsteel Dagger,7,0,0,0,0,12005
Blade of Calling,0,0,0,0,4,10000
Longsword,0,0,0,0,0,10000
Heavy Longsword,1,0,0,0,0,10000
Keen Longsword,2,0,0,0,0,10000
Quality Longsword,8,0,0,0,0,10000
Fire Longsword,0,0,4,0,0,10005
Flame Art Longsword,0,0,4,0,0,10000
Lightning Longsword,0,0,0,4,0,10000
Sacred Longsword,0,0,0,0,4,10000
Magic Longsword,0,4,0,0,0,10000
Cold Longsword,0,4,0,0,0,10000
Poison Longsword,0,0,0,0,0,10013
Bloody Longsword,0,0,0,0,0,10013
Occult Longsword,7,0,0,0,0,10013
Short Sword,0,0,0,0,0,10000
Heavy Short Sword,1,0,0,0,0,10000
Keen Short Sword,2,0,0,0,0,10000
Quality Short Sword,8,0,0,0,0,10000
Fire Short Sword,0,0,4,0,0,10005
Flame Art Short Sword,0,0,4,0,0,10000
Lightning Short Sword,0,0,0,4,0,10000
Sacred Short Sword,0,0,0,0,4,10000
Magic Short Sword,0,4,0,0,0,10000
Cold Short Sword,0,4,0,0,0,10000
Poison Short Sword,0,0,0,0,0,10013
Blood Short Sword,0,0,0,0,0,10013
Occult Short Sword,7,0,0,0,0,10013
Broadsword,0,0,0,0,0,10000
Heavy Broadsword,1,0,0,0,0,10000
Keen Broadsword,2,0,0,0,0,10000
Quality Broadsword,8,0,0,0,0,10000
Fire Broadsword,0,0,4,0,0,10005
Flame Art Broadsword,0,0,4,0,0,10000
Lightning Broadsword,0,0,0,4,0,10000
Sacred Broadsword,0,0,0,0,4,10000
Magic Broadsword,0,4,0,0,0,10000
Cold Broadsword,0,4,0,0,0,10000
Poison Broadsword,0,0,0,0,0,10013
Blood Broadsword,0,0,0,0,0,10013
Occult Broadsword,7,0,0,0,0,10013
Lordsworn's Straight Sword,0,0,0,0,0,10000
Lordsworn's Heavy Straight Sword,1,0,0,0,0,10000
Lordsworn's Keen Straight Sword,2,0,0,0,0,10000
Lordsworn's Quality Straight Sword,8,0,0,0,0,10000
Lordsworn's Fire Straight Sword,0,0,4,0,0,10005
Lordsworn's Flame Art Straight Sword,0,0,4,0,0,10000
Lordsworn's Lightning Straight Sword,0,0,0,4,0,10000
Lordsworn's Sacred Straight Sword,0,0,0,0,4,10000
Lordsworn's Magic Straight Sword,0,4,0,0,0,10000
Lordsworn's Cold Straight Sword,0,4,0,0,0,10000
Lordsworn's Poison Straight Sword,0,0,0,0,0,10013
Lordsworn's Blood Straight Sword,0,0,0,0,0,10013
Lordsworn's Occult Straight Sword,7,0,0,0,0,10013
Weathered Straight Sword,0,0,0,0,0,10000
Weathered Heavy Straight Sword,1,0,0,0,0,10000
Weathered Keen Straight Sword,2,0,0,0,0,10000
Weathered Quality Straight Sword,8,0,0,0,0,10000
Weathered Fire Straight Sword,0,0,4,0,0,10005
Weathered Flame Art Straight Sword,0,0,4,0,0,10000
Weathered Lightning Straight Sword,0,0,0,4,0,10000
Weathered Sacred Straight Sword,0,0,0,0,4,10000
Weathered Magic Straight Sword,0,4,0,0,0,10000
Weathered Cold Straight Sword,0,4,0,0,0,10000
Weathered Poison Straight Sword,0,0,0,0,0,10013
Weathered Blood Straight Sword,0,0,0,0,0,10013
Weathered Occult Straight Sword,7,0,0,0,0,10013
Ornamental Straight Sword,0,0,0,0,0,10000
Golden Epitaph,0,0,0,0,4,10000
Nox Flowing Sword,0,0,0,0,0,10000
Inseparable Sword,0,0,0,0,4,10000
Coded Sword,0,0,0,0,4,10000
Sword of Night and Flame,0,4,4,0,0,10000
Crystal Sword,0,4,0,0,0,10000
Carian Knight's Sword,0,4,0,0,0,10000
Sword of St. Trina,0,4,0,0,0,10000
Miquellan Knight's Sword,0,4,0,0,4,10000
Cane Sword,0,0,0,0,0,10000
Heavy Cane Sword,1,0,0,0,0,10000
Keen Cane Sword,2,0,0,0,0,10000
Quality Cane Sword,8,0,0,0,0,10000
Fire Cane Sword,0,0,4,0,0,10005
Flame Art Cane Sword,0,0,4,0,0,10000
Lightning Cane Sword,0,0,0,4,0,10000
Sacred Cane Sword,0,0,0,0,4,10000
Magic Cane Sword,0,4,0,0,0,10000
Cold Cane Sword,0,4,0,0,0,10000
Poison Cane Sword,0,0,0,0,0,10013
Blood Cane Sword,0,0,0,0,0,10013
Occult Cane Sword,7,0,0,0,0,10013
Regalia of Eochaid,7,4,0,0,0,10100
Noble's Slender Sword,0,0,0,0,0,10000
Noble's Heavy Slender Sword,1,0,0,0,0,10000
Noble's Keen Slender Sword,2,0,0,0,0,10000
Noble's Quality Slender Sword,8,0,0,0,0,10000
Noble's Fire Slender Sword,0,0,4,0,0,10005
Noble's Flame Art Slender Sword,0,0,4,0,0,10000
Noble's Lightning Slender Sword,0,0,0,4,0,10000
Noble's Sacred Slender Sword,0,0,0,0,4,10000
Noble's Magic Slender Sword,0,4,0,0,0,10000
Noble's Cold Slender Sword,0,4,0,0,0,10000
Noble's Poison Slender Sword,0,0,0,0,0,10013
Noble's Blood Slender Sword,0,0,0,0,0,10013
Noble's Occult Slender Sword,7,0,0,0,0,10013
Warhawk's Talon,0,0,0,0,0,10000
Warhawk's Heavy Talon,1,0,0,0,0,10000
Warhawk's Keen Talon,2,0,0,0,0,10000
Warhawk's Quality Talon,8,0,0,0,0,10000
Warhawk's Fire Talon,0,0,4,0,0,10005
Warhawk's Flame Art Talon,0,0,4,0,0,10000
Warhawk's Lightning Talon,0,0,0,4,0,10000
Warhawk's Sacred Talon,0,0,0,0,4,10000
Warhawk's Magic Talon,0,4,0,0,0,10000
Warhawk's Cold Talon,0,4,0,0,0,10000
Warhawk's Poison Talon,0,0,0,0,0,10013
Warhawk's Blood Talon,0,0,0,0,0,10013
Warhawk's Occult Talon,7,0,0,0,0,10013
Lazuli Glintstone Sword,0,4,0,0,0,10000
Rotten Crystal Sword,0,4,0,0,0,10000
Bastard Sword,0,0,0,0,0,10000
Heavy Bastard Sword,1,0,0,0,0,10000
Keen Bastard Sword,2,0,0,0,0,10000
Quality Bastard Sword,8,0,0,0,0,10000
Fire Bastard Sword,0,0,4,0,0,10005
Flame Art Bastard Sword,0,0,4,0,0,10000
Lightning Bastard Sword,0,0,0,4,0,10000
Sacred Bastard Sword,0,0,0,0,4,10000
Magic Bastard Sword,0,4,0,0,0,10000
Cold Bastard Sword,0,4,0,0,0,10000
Poison Bastard Sword,0,0,0,0,0,10013
Bloody Bastard Sword,0,0,0,0,0,10013
Occult Bastard Sword,7,0,0,0,0,10013
Forked Greatsword,0,0,0,0,0,10000
Heavy Forked Greatsword,1,0,0,0,0,10000
Keen Forked Greatsword,2,0,0,0,0,10000
Quality Forked Greatsword,8,0,0,0,0,10000
Fire Forked Greatsword,0,0,4,0,0,10005
Flame Art Forked Greatsword,0,0,4,0,0,10000
Lightning Forked Greatsword,0,0,0,4,0,10000
Sacred Forked Greatsword,0,0,0,0,4,10000
Magic Forked Greatsword,0,4,0,0,0,10000
Cold Forked Greatsword,0,4,0,0,0,10000
Poison Forked Greatsword,0,0,0,0,0,10013
Blood Forked Greatsword,0,0,0,0,0,10013
Occult Forked Greatsword,7,0,0,0,0,10013
Iron Greatsword,0,0,0,0,0,10000
Heavy Iron Greatsword,1,0,0,0,0,10000
Keen Iron Greatsword,2,0,0,0,0,10000
Quality Iron Greatsword,8,0,0,0,0,10000
Fire Iron Greatsword,0,0,4,0,0,10005
Flame Art Iron Greatsword,0,0,4,0,0,10000
Lightning Iron Greatsword,0,0,0,4,0,10000
Sacred Iron Greatsword,0,0,0,0,4,10000
Magic Iron Greatsword,0,4,0,0,0,10000
Cold Iron Greatsword,0,4,0,0,0,10000
Poison Iron Greatsword,0,0,0,0,0,10013
Blood Iron Greatsword,0,0,0,0,0,10013
Occult Iron Greatsword,7,0,0,0,0,10013
Lordsworn's Greatsword,0,0,0,0,0,10000
Lordsworn's Heavy Greatsword,1,0,0,0,0,10000
Lordsworn's Keen Greatsword,2,0,0,0,0,10000
Lordsworn's Quality Greatsword,8,0,0,0,0,10000
Lordsworn's Fire Greatsword,0,0,4,0,0,10005
Lordsworn's Flame Art Greatsword,0,0,4,0,0,10000
Lordsworn's Lightning Greatsword,0,0,0,4,0,10000
Lordsworn's Sacred Greatsword,0,0,0,0,4,10000
Lordsworn's Magic Greatsword,0,4,0,0,0,10000
Lordsworn's Cold Greatsword,0,4,0,0,0,10000
Lordsworn's Poison Greatsword,0,0,0,0,0,10013
Lordsworn's Blood Greatsword,0,0,0,0,0,10013
Lordsworn's Occult Greatsword,7,0,0,0,0,10013
Knight's Greatsword,0,0,0,0,0,10000
Knight's Heavy Greatsword,1,0,0,0,0,10000
Knight's Keen Greatsword,2,0,0,0,0,10000
Knight's Quality Greatsword,8,0,0,0,0,10000
Knight's Fire Greatsword,0,0,4,0,0,10005
Knight's Flame Art Greatsword,0,0,4,0,0,10000
Knight's Lightning Greatsword,0,0,0,4,0,10000
Knight's Sacred Greatsword,0,0,0,0,4,10000
Knight's Magic Greatsword,0,4,0,0,0,10000
Knight's Cold Greatsword,0,4,0,0,0,10000
Knight's Poison Greatsword,0,0,0,0,0,10013
Knight's Blood Greatsword,0,0,0,0,0,10013
Knight's Occult Greatsword,7,0,0,0,0,10013
Flamberge,0,0,0,0,0,10000
Heavy Flamberge,1,0,0,0,0,10000
Keen Flamberge,2,0,0,0,0,10000
Quality Flamberge,8,0,0,0,0,10000
Fire Flamberge,0,0,4,0,0,10005
Flame Art Flamberge,0,0,4,0,0,10000
Lightning Flamberge,0,0,0,4,0,10000
Sacred Flamberge,0,0,0,0,4,10000
Magic Flamberge,0,4,0,0,0,10000
Cold Flamberge,0,4,0,0,0,10000
Poison Flamberge,0,0,0,0,0,10013
Blood Flamberge,0,0,0,0,0,10013
Occult Flamberge,7,0,0,0,0,10013
Ordovis's Greatsword,0,0,0,0,4,10000
Alabaster Lord's Sword,0,4,0,0,0,10000
Banished Knight's Greatsword,0,0,0,0,0,10000
Banished Knight's Heavy Greatsword,1,0,0,0,0,10000
Banished Knight's Keen Greatsword,2,0,0,0,0,10000
Banished Knight's Quality Greatsword,8,0,0,0,0,10000
Banished Knight's Fire Greatsword,0,0,4,0,0,10005
Banished Knight's Flame Art Greatsword,0,0,4,0,0,10000
Banished Knight's Lightning Greatsword,0,0,0,4,0,10000
Banished Knight's Sacred Greatsword,0,0,0,0,4,10000
Banished Knight's Magic Greatsword,0,4,0,0,0,10000
Banished Knight's Cold Greatsword,0,4,0,0,0,10000
Banished Knight's Poison Greatsword,0,0,0,0,0,10013
Banished Knight's Blood Greatsword,0,0,0,0,0,10013
Banished Knight's Occult Greatsword,7,0,0,0,0,10013
Dark Moon Greatsword,0,4,0,0,0,10000
Sacred Relic Sword,0,0,0,0,4,10000
Helphen's Steeple,0,4,4,0,0,10000
Blasphemous Blade,0,0,4,0,0,10000
Marais Executioner's Sword,7,4,0,0,0,10100
Sword of Milos,0,0,0,0,0,10000
Golden Order Greatsword,0,0,0,0,4,10000
Claymore,0,0,0,0,0,10000
Heavy Claymore,1,0,0,0,0,10000
Keen Claymore,2,0,0,0,0,10000
Quality Claymore,8,0,0,0,0,10000
Fire Claymore,0,0,4,0,0,10005
Flame Art Claymore,0,0,4,0,0,10000
Lightning Claymore,0,0,0,4,0,10000
Sacred Claymore,0,0,0,0,4,10000
Magic Claymore,0,4,0,0,0,10000
Cold Claymore,0,4,0,0,0,10000
Poison Claymore,0,0,0,0,0,10013
Blood Claymore,0,0,0,0,0,10013
Occult Claymore,7,0,0,0,0,10013
Gargoyle's Greatsword,0,0,0,0,0,10000
Gargoyle's Heavy Greatsword,1,0,0,0,0,10000
Gargoyle's Keen Greatsword,2,0,0,0,0,10000
Gargoyle's Quality Greatsword,8,0,0,0,0,10000
Gargoyle's Fire Greatsword,0,0,4,0,0,10005
Gargoyle's Flame Art Greatsword,0,0,4,0,0,10000
Gargoyle's Lightning Greatsword,0,0,0,4,0,10000
Gargoyle's Sacred Greatsword,0,0,0,0,4,10000
Gargoyle's Magic Greatsword,0,4,0,0,0,10000
Gargoyle's Cold Greatsword,0,4,0,0,0,10000
Gargoyle's Poison Greatsword,0,0,0,0,0,10013
Gargoyle's Blood Greatsword,0,0,0,0,0,10013
Gargoyle's Occult Greatsword,7,0,0,0,0,10013
Death's Poker,0,4,0,0,0,10000
Gargoyle's Blackblade,0,0,0,0,4,10000
Greatsword,0,0,0,0,0,10000
Heavy Greatsword,1,0,0,0,0,10000
Keen Greatsword,2,0,0,0,0,10000
Quality Greatsword,8,0,0,0,0,10000
Fire Greatsword,0,0,4,0,0,10005
Flame Art Greatsword,0,0,4,0,0,10000
Lightning Greatsword,0,0,0,4,0,10000
Sacred Greatsword,0,0,0,0,4,10000
Magic Greatsword,0,4,0,0,0,10000
Cold Greatsword,0,4,0,0,0,10000
Poison Greatsword,0,0,0,0,0,10013
Blood Greatsword,0,0,0,0,0,10013
Occult Greatsword,7,0,0,0,0,10013
Watchdog's Greatsword,0,0,0,0,0,10000
Watchdog's Heavy Greatsword,1,0,0,0,0,10000
Watchdog's Keen Greatsword,2,0,0,0,0,10000
Watchdog's Quality Greatsword,8,0,0,0,0,10000
Watchdog's Fire Greatsword,0,0,4,0,0,10005
Watchdog's Flame Art Greatsword,0,0,4,0,0,10000
Watchdog's Lightning Greatsword,0,0,0,4,0,10000
Watchdog's Sacred Greatsword,0,0,0,0,4,10000
Watchdog's Magic Greatsword,0,4,0,0,0,10000
Watchdog's Cold Greatsword,0,4,0,0,0,10000
Watchdog's Poison Greatsword,0,0,0,0,0,10013
Watchdog's Blood Greatsword,0,0,0,0,0,10013
Watchdog's Occult Greatsword,7,0,0,0,0,10013
Maliketh's Black Blade,0,0,0,0,4,10000
Troll's Golden Sword,0,0,0,0,0,10000
Troll's Golden Heavy Sword,1,0,0,0,0,10000
Troll's Golden Keen Sword,2,0,0,0,0,10000
Troll's Golden Quality Sword,8,0,0,0,0,10000
Troll's Golden Fire Sword,0,0,4,0,0,10005
Troll's Golden Flame Art Sword,0,0,4,0,0,10000
Troll's Golden Lightning Sword,0,0,0,4,0,10000
Troll's Golden Sacred Sword,0,0,0,0,4,10000
Troll's Golden Magic Sword,0,4,0,0,0,10000
Troll's Golden Cold Sword,0,4,0,0,0,10000
Troll's Golden Poison Sword,0,0,0,0,0,10013
Troll's Golden Blood Sword,0,0,0,0,0,10013
Troll's Golden Occult Sword,7,0,0,0,0,10013
Zweihander,0,0,0,0,0,10000
Heavy Zweihander,1,0,0,0,0,10000
Keen Zweihander,2,0,0,0,0,10000
Quality Zweihander,8,0,0,0,0,10000
Fire Zweihander,0,0,4,0,0,10005
Flame Art Zweihander,0,0,4,0,0,10000
Lightning Zweihander,0,0,0,4,0,10000
Sacred Zweihander,0,0,0,0,4,10000
Magic Zweihander,0,4,0,0,0,10000
Cold Zweihander,0,4,0,0,0,10000
Poison Zweihander,0,0,0,0,0,10013
Blood Zweihander,0,0,0,0,0,10013
Occult Zweihander,7,0,0,0,0,10013
Starscourge Greatsword,0,4,0,0,0,10000
Royal Greatsword,0,4,0,0,0,10000
Godslayer's Greatsword,0,0,4,0,0,10000
Ruins Greatsword,0,4,0,0,0,10000
Grafted Blade Greatsword,0,0,0,0,0,10000
Troll Knight's Sword,0,4,0,0,0,10000
Estoc,0,0,0,0,0,10000
Heavy Estoc,1,0,0,0,0,10000
Keen Estoc,2,0,0,0,0,10000
Quality Estoc,8,0,0,0,0,10000
Fire Estoc,0,0,4,0,0,10005
Flame Art Estoc,0,0,4,0,0,10000
Lightning Estoc,0,0,0,4,0,10000
Sacred Estoc,0,0,0,0,4,10000
Magic Estoc,0,4,0,0,0,10000
Cold Estoc,0,4,0,0,0,10000
Poison Estoc,0,0,0,0,0,10013
Blood Estoc,0,0,0,0,0,10013
Occult Estoc,7,0,0,0,0,10013
Cleanrot Knight's Sword,0,0,0,0,0,10000
Cleanrot Knight's Heavy Sword,1,0,0,0,0,10000
Cleanrot Knight's Keen Sword,2,0,0,0,0,10000
Cleanrot Knight's Quality Sword,8,0,0,0,0,10000
Cleanrot Knight's Fire Sword,0,0,4,0,0,10005
Cleanrot Knight's Flame Art Sword,0,0,4,0,0,10000
Cleanrot Knight's Lightning Sword,0,0,0,4,0,10000
Cleanrot Knight's Sacred Sword,0,0,0,0,4,10000
Cleanrot Knight's Magic Sword,0,4,0,0,0,10000
Cleanrot Knight's Cold Sword,0,4,0,0,0,10000
Cleanrot Knight's Poison Sword,0,0,0,0,0,10013
Cleanrot Knight's Blood Sword,0,0,0,0,0,10013
Cleanrot Knight's Occult Sword,7,0,0,0,0,10013
Rapier,0,0,0,0,0,10000
Heavy Rapier,1,0,0,0,0,10000
Keen Rapier,2,0,0,0,0,10000
Quality Rapier,8,0,0,0,0,10000
Fire Rapier,0,0,4,0,0,10005
Flame Art Rapier,0,0,4,0,0,10000
Lightning Rapier,0,0,0,4,0,10000
Sacred Rapier,0,0,0,0,4,10000
Magic Rapier,0,4,0,0,0,10000
Cold Rapier,0,4,0,0,0,10000
Poison Rapier,0,0,0,0,0,10013
Blood Rapier,0,0,0,0,0,10013
Occult Rapier,7,0,0,0,0,10013
Rogier's Rapier,0,0,0,0,0,10000
Rogier's Heavy Rapier,1,0,0,0,0,10000
Rogier's Keen Rapier,2,0,0,0,0,10000
Rogier's Quality Rapier,8,0,0,0,0,10000
Rogier's Fire Rapier,0,0,4,0,0,10005
Rogier's Flame Art Rapier,0,0,4,0,0,10000
Rogier's Lightning Rapier,0,0,0,4,0,10000
Rogier's Sacred Rapier,0,0,0,0,4,10000
Rogier's Magic Rapier,0,4,0,0,0,10000
Rogier's Cold Rapier,0,4,0,0,0,10000
Rogier's Poison Rapier,0,0,0,0,0,10013
Rogier's Blood Rapier,0,0,0,0,0,10013
Rogier's Occult Rapier,7,0,0,0,0,10013
Antspur Rapier,0,0,0,0,0,10000
Heavy Antspur Rapier,1,0,0,0,0,10000
Keen Antspur Rapier,2,0,0,0,0,10000
Quality Antspur Rapier,8,0,0,0,0,10000
Fire Antspur Rapier,0,0,4,0,0,10005
Flame Art Antspur Rapier,0,0,4,0,0,10000
Lightning Antspur Rapier,0,0,0,4,0,10000
Sacred Antspur Rapier,0,0,0,0,4,10000
Magic Antspur Rapier,0,4,0,0,0,10000
Cold Antspur Rapier,0,4,0,0,0,10000
Poison Antspur Rapier,0,0,0,0,0,10013
Blood Antspur Rapier,0,0,0,0,0,10013
Occult Antspur Rapier,7,0,0,0,0,10013
Frozen Needle,0,0,0,0,0,10000
Noble's Estoc,0,0,0,0,0,10000
Noble's Heavy Estoc,1,0,0,0,0,10000
Noble's Keen Estoc,2,0,0,0,0,10000
Noble's Quality Estoc,8,0,0,0,0,10000
Noble's Fire Estoc,0,0,4,0,0,10005
Noble's Flame Art Estoc,0,0,4,0,0,10000
Noble's Lightning Estoc,0,0,0,4,0,10000
Noble's Sacred Estoc,0,0,0,0,4,10000
Noble's Magic Estoc,0,4,0,0,0,10000
Noble's Cold Estoc,0,4,0,0,0,10000
Noble's Poison Estoc,0,0,0,0,0,10013
Noble's Blood Estoc,0,0,0,0,0,10013
Noble's Occult Estoc,7,0,0,0,0,10013
Bloody Helice,7,0,0,0,0,10013
Godskin Stitcher,0,0,0,0,0,10000
Heavy Godskin Stitcher,1,0,0,0,0,10000
Keen Godskin Stitcher,2,0,0,0,0,10000
Quality Godskin Stitcher,8,0,0,0,0,10000
Fire Godskin Stitcher,0,0,4,0,0,10005
Flame Art Godskin Stitcher,0,0,4,0,0,10000
Lightning Godskin Stitcher,0,0,0,4,0,10000
Sacred Godskin Stitcher,0,0,0,0,4,10000
Magic Godskin Stitcher,0,4,0,0,0,10000
Cold Godskin Stitcher,0,4,0,0,0,10000
Poison Godskin Stitcher,0,0,0,0,0,10013
Blood Godskin Stitcher,0,0,0,0,0,10013
Occult Godskin Stitcher,7,0,0,0,0,10013
Great epee,0,0,0,0,0,10000
Heavy Great epee,1,0,0,0,0,10000
Keen Great epee,2,0,0,0,0,10000
Quality Great epee,8,0,0,0,0,10000
Fire Great epee,0,0,4,0,0,10005
Flame Art Great epee,0,0,4,0,0,10000
Lightning Great epee,0,0,0,4,0,10000
Sacred Great epee,0,0,0,0,4,10000
Magic Great epee,0,4,0,0,0,10000
Cold Great epee,0,4,0,0,0,10000
Poison Great epee,0,0,0,0,0,10013
Blood Great epee,0,0,0,0,0,10013
Occult Great epee,7,0,0,0,0,10013
Dragon King's Cragblade,0,0,0,4,0,10000
Falchion,0,0,0,0,0,10000
Heavy Falchion,1,0,0,0,0,10000
Keen Falchion,2,0,0,0,0,10000
Quality Falchion,8,0,0,0,0,10000
Fire Falchion,0,0,4,0,0,10005
Flame Art Falchion,0,0,4,0,0,10000
Lightning Falchion,0,0,0,4,0,10000
Sacred Falchion,0,0,0,0,4,10000
Magic Falchion,0,4,0,0,0,10000
Cold Falchion,0,4,0,0,0,10000
Poison Falchion,0,0,0,0,0,10013
Blood Falchion,0,0,0,0,0,10013
Occult Falchion,7,0,0,0,0,10013
Beastman's Curved Sword,0,0,0,0,0,10000
Beastman's Heavy Curved Sword,1,0,0,0,0,10000
Beastman's Keen Curved Sword,2,0,0,0,0,10000
Beastman's Quality Curved Sword,8,0,0,0,0,10000
Beastman's Fire Curved Sword,0,0,4,0,0,10005
Beastman's Flame Art Curved Sword,0,0,4,0,0,10000
Beastman's Lightning Curved Sword,0,0,0,4,0,10000
Beastman's Sacred Curved Sword,0,0,0,0,4,10000
Beastman's Magic Curved Sword,0,4,0,0,0,10000
Beastman's Cold Curved Sword,0,4,0,0,0,10000
Beastman's Poison Curved Sword,0,0,0,0,0,10013
Beastman's Blood Curved Sword,0,0,0,0,0,10013
Beastman's Occult Curved Sword,7,0,0,0,0,10013
Shotel,0,0,0,0,0,10000
Heavy Shotel,1,0,0,0,0,10000
Keen Shotel,2,0,0,0,0,10000
Quality Shotel,8,0,0,0,0,10000
Fire Shotel,0,0,4,0,0,10005
Flame Art Shotel,0,0,4,0,0,10000
Lightning Shotel,0,0,0,4,0,10000
Sacred Shotel,0,0,0,0,4,10000
Magic Shotel,0,4,0,0,0,10000
Cold Shotel,0,4,0,0,0,10000
Poison Shotel,0,0,0,0,0,10013
Blood Shotel,0,0,0,0,0,10013
Occult Shotel,7,0,0,0,0,10013
Shamshir,0,0,0,0,0,10000
Heavy Shamshir,1,0,0,0,0,10000
Keen Shamshir,2,0,0,0,0,10000
Quality Shamshir,8,0,0,0,0,10000
Fire Shamshir,0,0,4,0,0,10005
Flame Art Shamshir,0,0,4,0,0,10000
Lightning Shamshir,0,0,0,4,0,10000
Sacred Shamshir,0,0,0,0,4,10000
Magic Shamshir,0,4,0,0,0,10000
Cold Shamshir,0,4,0,0,0,10000
Poison Shamshir,0,0,0,0,0,10013
Blood Shamshir,0,0,0,0,0,10013
Occult Shamshir,7,0,0,0,0,10013
Bandit's Curved Sword,0,0,0,0,0,10000
Bandit's Heavy Curved Sword,1,0,0,0,0,10000
Bandit's Keen Curved Sword,2,0,0,0,0,10000
Bandit's Quality Curved Sword,8,0,0,0,0,10000
Bandit's Fire Curved Sword,0,0,4,0,0,10005
Bandit's Flame Art Curved Sword,0,0,4,0,0,10000
Bandit's Lightning Curved Sword,0,0,0,4,0,10000
Bandit's Sacred Curved Sword,0,0,0,0,4,10000
Bandit's Magic Curved Sword,0,4,0,0,0,10000
Bandit's Cold Curved Sword,0,4,0,0,0,10000
Bandit's Poison Curved Sword,0,0,0,0,0,10013
Bandit's Blood Curved Sword,0,0,0,0,0,10013
Bandit's Occult Curved Sword,7,0,0,0,0,10013
Magma Blade,0,0,4,0,0,10000
Flowing Curved Sword,0,0,0,0,0,10000
Flowing Heavy Curved Sword,1,0,0,0,0,10000
Flowing Keen Curved Sword,2,0,0,0,0,10000
Flowing Quality Curved Sword,8,0,0,0,0,10000
Flowing Fire Curved Sword,0,0,4,0,0,10005
Flowing Flame Art Curved Sword,0,0,4,0,0,10000
Flowing Lightning Curved Sword,0,0,0,4,0,10000
Flowing Sacred Curved Sword,0,0,0,0,4,10000
Flowing Magic Curved Sword,0,4,0,0,0,10000
Flowing Cold Curved Sword,0,4,0,0,0,10000
Flowing Poison Curved Sword,0,0,0,0,0,10013
Flowing Blood Curved Sword,0,0,0,0,0,10013
Flowing Occult Curved Sword,7,0,0,0,0,10013
Wing of Astel,0,4,0,0,0,10000
Scavenger's Curved Sword,0,0,0,0,0,10000
Scavenger's Heavy Curved Sword,1,0,0,0,0,10000
Scavenger's Keen Curved Sword,2,0,0,0,0,10000
Scavenger's Quality Curved Sword,8,0,0,0,0,10000
Scavenger's Fire Curved Sword,0,0,4,0,0,10005
Scavenger's Flame Art Curved Sword,0,0,4,0,0,10000
Scavenger's Lightning Curved Sword,0,0,0,4,0,10000
Scavenger's Sacred Curved Sword,0,0,0,0,4,10000
Scavenger's Magic Curved Sword,0,4,0,0,0,10000
Scavenger's Cold Curved Sword,0,4,0,0,0,10000
Scavenger's Poison Curved Sword,0,0,0,0,0,10013
Scavenger's Blood Curved Sword,0,0,0,0,0,10013
Scavenger's Occult Curved Sword,7,0,0,0,0,10013
Eclipse Shotel,0,0,0,0,4,10000
Serpent-God's Curved Sword,0,0,0,0,0,10000
Serpent-God's Heavy Curved Sword,1,0,0,0,0,10000
Serpent-God's Keen Curved Sword,2,0,0,0,0,10000
Serpent-God's Quality Curved Sword,8,0,0,0,0,10000
Serpent-God's Fire Curved Sword,0,0,4,0,0,10005
Serpent-God's Flame Art Curved Sword,0,0,4,0,0,10000
Serpent-God's Lightning Curved Sword,0,0,0,4,0,10000
Serpent-God's Sacred Curved Sword,0,0,0,0,4,10000
Serpent-God's Magic Curved Sword,0,4,0,0,0,10000
Serpent-God's Cold Curved Sword,0,4,0,0,0,10000
Serpent-God's Poison Curved Sword,0,0,0,0,0,10013
Serpent-God's Blood Curved Sword,0,0,0,0,0,10013
Serpent-God's Occult Curved Sword,7,0,0,0,0,10013
Mantis Blade,0,0,0,0,0,10000
Heavy Mantis Blade,1,0,0,0,0,10000
Keen Mantis Blade,2,0,0,0,0,10000
Quality Mantis Blade,8,0,0,0,0,10000
Fire Mantis Blade,0,0,4,0,0,10005
Flame Art Mantis Blade,0,0,4,0,0,10000
Lightning Mantis Blade,0,0,0,4,0,10000
Sacred Mantis Blade,0,0,0,0,4,10000
Magic Mantis Blade,0,4,0,0,0,10000
Cold Mantis Blade,0,4,0,0,0,10000
Poison Mantis Blade,0,0,0,0,0,10013
Blood Mantis Blade,0,0,0,0,0,10013
Occult Mantis Blade,7,0,0,0,0,10013
Scimitar,0,0,0,0,0,10000
Heavy Scimitar,1,0,0,0,0,10000
Keen Scimitar,2,0,0,0,0,10000
Quality Scimitar,8,0,0,0,0,10000
Fire Scimitar,0,0,4,0,0,10005
Flame Art Scimitar,0,0,4,0,0,10000
Lightning Scimitar,0,0,0,4,0,10000
Sacred Scimitar,0,0,0,0,4,10000
Magic Scimitar,0,4,0,0,0,10000
Cold Scimitar,0,4,0,0,0,10000
Poison Scimitar,0,0,0,0,0,10013
Bloody Scimitar,0,0,0,0,0,10013
Occult Scimitar,7,0,0,0,0,10013
Grossmesser,0,0,0,0,0,10000
Heavy Grossmesser,1,0,0,0,0,10000
Keen Grossmesser,2,0,0,0,0,10000
Quality Grossmesser,8,0,0,0,0,10000
Fire Grossmesser,0,0,4,0,0,10005
Flame Art Grossmesser,0,0,4,0,0,10000
Lightning Grossmesser,0,0,0,4,0,10000
Sacred Grossmesser,0,0,0,0,4,10000
Magic Grossmesser,0,4,0,0,0,10000
Cold Grossmesser,0,4,0,0,0,10000
Poison Grossmesser,0,0,0,0,0,10013
Blood Grossmesser,0,0,0,0,0,10013
Occult Grossmesser,7,0,0,0,0,10013
Onyx Lord's Greatsword,0,4,0,0,0,10000
Dismounter,0,0,0,0,0,10000
Heavy Dismounter,1,0,0,0,0,10000
Keen Dismounter,2,0,0,0,0,10000
Quality Dismounter,8,0,0,0,0,10000
Fire Dismounter,0,0,4,0,0,10005
Flame Art Dismounter,0,0,4,0,0,10000
Lightning Dismounter,0,0,0,4,0,10000
Sacred Dismounter,0,0,0,0,4,10000
Magic Dismounter,0,4,0,0,0,10000
Cold Dismounter,0,4,0,0,0,10000
Poison Dismounter,0,0,0,0,0,10013
Blood Dismounter,0,0,0,0,0,10013
Occult Dismounter,7,0,0,0,0,10013
Bloodhound's Fang,0,0,0,0,0,10000
Magma Wyrm's Scalesword,0,0,4,0,0,10000
Zamor Curved Sword,0,0,0,0,0,10000
Omen Cleaver,0,0,0,0,0,10000
Heavy Omen Cleaver,1,0,0,0,0,10000
Keen Omen Cleaver,2,0,0,0,0,10000
Quality Omen Cleaver,8,0,0,0,0,10000
Fire Omen Cleaver,0,0,4,0,0,10005
Flame Art Omen Cleaver,0,0,4,0,0,10000
Lightning Omen Cleaver,0,0,0,4,0,10000
Sacred Omen Cleaver,0,0,0,0,4,10000
Magic Omen Cleaver,0,4,0,0,0,10000
Cold Omen Cleaver,0,4,0,0,0,10000
Poison Omen Cleaver,0,0,0,0,0,10013
Blood Omen Cleaver,0,0,0,0,0,10013
Occult Omen Cleaver,7,0,0,0,0,10013
Monk's Flameblade,0,0,0,0,0,10000
Monk's Heavy Flameblade,1,0,0,0,0,10000
Monk's Keen Flameblade,2,0,0,0,0,10000
Monk's Quality Flameblade,8,0,0,0,0,10000
Monk's Fire Flameblade,0,0,4,0,0,10005
Monk's Flame Art Flameblade,0,0,4,0,0,10000
Monk's Lightning Flameblade,0,0,0,4,0,10000
Monk's Sacred Flameblade,0,0,0,0,4,10000
Monk's Magic Flameblade,0,4,0,0,0,10000
Monk's Cold Flameblade,0,4,0,0,0,10000
Monk's Poison Flameblade,0,0,0,0,0,10013
Monk's Blood Flameblade,0,0,0,0,0,10013
Monk's Occult Flameblade,7,0,0,0,0,10013
Beastman's Cleaver,0,0,0,0,0,10000
Beastman's Heavy Cleaver,1,0,0,0,0,10000
Beastman's Keen Cleaver,2,0,0,0,0,10000
Beastman's Quality Cleaver,8,0,0,0,0,10000
Beastman's Fire Cleaver,0,0,4,0,0,10005
Beastman's Flame Art Cleaver,0,0,4,0,0,10000
Beastman's Lightning Cleaver,0,0,0,4,0,10000
Beastman's Sacred Cleaver,0,0,0,0,4,10000
Beastman's Magic Cleaver,0,4,0,0,0,10000
Beastman's Cold Cleaver,0,4,0,0,0,10000
Beastman's Poison Cleaver,0,0,0,0,0,10013
Beastman's Blood Cleaver,0,0,0,0,0,10013
Beastman's Occult Cleaver,7,0,0,0,0,10013
Morgott's Cursed Sword,7,0,0,0,0,10013
Uchigatana,0,0,0,0,0,10000
Heavy Uchigatana,1,0,0,0,0,10000
Keen Uchigatana,2,0,0,0,0,10000
Quality Uchigatana,8,0,0,0,0,10000
Fire Uchigatana,0,0,4,0,0,10005
Flame Art Uchigatana,0,0,4,0,0,10000
Lightning Uchigatana,0,0,0,4,0,10000
Sacred Uchigatana,0,0,0,0,4,10000
Magic Uchigatana,0,4,0,0,0,10000
Cold Uchigatana,0,4,0,0,0,10000
Poison Uchigatana,0,0,0,0,0,10013
Blood Uchigatana,0,0,0,0,0,10013
Occult Uchigatana,7,0,0,0,0,10013
Nagakiba,0,0,0,0,0,10000
Heavy Nagakiba,1,0,0,0,0,10000
Keen Nagakiba,2,0,0,0,0,10000
Quality Nagakiba,8,0,0,0,0,10000
Fire Nagakiba,0,0,4,0,0,10005
Flame Art Nagakiba,0,0,4,0,0,10000
Lightning Nagakiba,0,0,0,4,0,10000
Sacred Nagakiba,0,0,0,0,4,10000
Magic Nagakiba,0,4,0,0,0,10000
Cold Nagakiba,0,4,0,0,0,10000
Poison Nagakiba,0,0,0,0,0,10013
Blood Nagakiba,0,0,0,0,0,10013
Occult Nagakiba,7,0,0,0,0,10013
Hand of Malenia,0,0,0,0,0,10000
Meteoric Ore Blade,0,4,0,0,0,10000
Rivers of Blood,7,0,4,0,0,10100
Moonveil,0,4,0,0,0,10000
Dragonscale Blade,0,0,0,4,0,10000
Serpentbone Blade,0,0,0,0,0,10000
Twinblade,0,0,0,0,0,10000
Heavy Twinblade,1,0,0,0,0,10000
Keen Twinblade,2,0,0,0,0,10000
Quality Twinblade,8,0,0,0,0,10000
Fire Twinblade,0,0,4,0,0,10005
Flame Art Twinblade,0,0,4,0,0,10000
Lightning Twinblade,0,0,0,4,0,10000
Sacred Twinblade,0,0,0,0,4,10000
Magic Twinblade,0,4,0,0,0,10000
Cold Twinblade,0,4,0,0,0,10000
Poison Twinblade,0,0,0,0,0,10013
Bloody Twinblade,0,0,0,0,0,10013
Occult Twinblade,7,0,0,0,0,10013
Godskin Peeler,0,0,0,0,0,10000
Heavy Godskin Peeler,1,0,0,0,0,10000
Keen Godskin Peeler,2,0,0,0,0,10000
Quality Godskin Peeler,8,0,0,0,0,10000
Fire Godskin Peeler,0,0,4,0,0,10005
Flame Art Godskin Peeler,0,0,4,0,0,10000
Lightning Godskin Peeler,0,0,0,4,0,10000
Sacred Godskin Peeler,0,0,0,0,4,10000
Magic Godskin Peeler,0,4,0,0,0,10000
Cold Godskin Peeler,0,4,0,0,0,10000
Poison Godskin Peeler,0,0,0,0,0,10013
Blood Godskin Peeler,0,0,0,0,0,10013
Occult Godskin Peeler,7,0,0,0,0,10013
Twinned Knight Swords,0,0,0,0,0,10000
Heavy Twinned Knight Swords,1,0,0,0,0,10000
Keen Twinned Knight Swords,2,0,0,0,0,10000
Quality Twinned Knight Swords,8,0,0,0,0,10000
Fire Twinned Knight Swords,0,0,4,0,0,10005
Flame Art Twinned Knight Swords,0,0,4,0,0,10000
Lightning Twinned Knight Swords,0,0,0,4,0,10000
Sacred Twinned Knight Swords,0,0,0,0,4,10000
Magic Twinned Knight Swords,0,4,0,0,0,10000
Cold Twinned Knight Swords,0,4,0,0,0,10000
Poison Twinned Knight Swords,0,0,0,0,0,10013
Blood Twinned Knight Swords,0,0,0,0,0,10013
Occult Twinned Knight Swords,7,0,0,0,0,10013
Eleonora's Poleblade,7,0,4,0,0,10100
Gargoyle's Twinblade,0,0,0,0,0,10000
Gargoyle's Heavy Twinblade,1,0,0,0,0,10000
Gargoyle's Keen Twinblade,2,0,0,0,0,10000
Gargoyle's Quality Twinblade,8,0,0,0,0,10000
Gargoyle's Fire Twinblade,0,0,4,0,0,10005
Gargoyle's Flame Art Twinblade,0,0,4,0,0,10000
Gargoyle's Lightning Twinblade,0,0,0,4,0,10000
Gargoyle's Sacred Twinblade,0,0,0,0,4,10000
Gargoyle's Magic Twinblade,0,4,0,0,0,10000
Gargoyle's Cold Twinblade,0,4,0,0,0,10000
Gargoyle's Poison Twinblade,0,0,0,0,0,10013
Gargoyle's Blood Twinblade,0,0,0,0,0,10013
Gargoyle's Occult Twinblade,7,0,0,0,0,10013
Gargoyle's Black Blades,0,0,0,0,4,10000
Mace,0,0,0,0,0,10000
Heavy Mace,1,0,0,0,0,10000
Keen Mace,2,0,0,0,0,10000
Quality Mace,8,0,0,0,0,10000
Fire Mace,0,0,4,0,0,10005
Flame Art Mace,0,0,4,0,0,10000
Lightning Mace,0,0,0,4,0,10000
Sacred Mace,0,0,0,0,4,10000
Magic Mace,0,4,0,0,0,10000
Cold Mace,0,4,0,0,0,10000
Poison Mace,0,0,0,0,0,10013
Blood Mace,0,0,0,0,0,10013
Occult Mace,7,0,0,0,0,10013
Club,7,0,0,0,0,10000
Heavy Club,1,0,0,0,0,10000
Keen Club,2,0,0,0,0,10000
Quality Club,8,0,0,0,0,10000
Fire Club,0,0,4,0,0,10005
Flame Art Club,0,0,4,0,0,10000
Lightning Club,0,0,0,4,0,10000
Sacred Club,0,0,0,0,4,10000
Magic Club,0,4,0,0,0,10000
Cold Club,0,4,0,0,0,10000
Poison Club,0,0,0,0,0,10013
Bloody Club,0,0,0,0,0,10013
Occult Club,7,0,0,0,0,10013
Curved Club,7,0,0,0,0,10000
Heavy Curved Club,1,0,0,0,0,10000
Keen Curved Club,2,0,0,0,0,10000
Quality Curved Club,8,0,0,0,0,10000
Fire Curved Club,0,0,4,0,0,10005
Flame Art Curved Club,0,0,4,0,0,10000
Lightning Curved Club,0,0,0,4,0,10000
Sacred Curved Club,0,0,0,0,4,10000
Magic Curved Club,0,4,0,0,0,10000
Cold Curved Club,0,4,0,0,0,10000
Poison Curved Club,0,0,0,0,0,10013
Blood Curved Club,0,0,0,0,0,10013
Occult Curved Club,7,0,0,0,0,10013
Warpick,0,0,0,0,0,10000
Heavy Warpick,1,0,0,0,0,10000
Keen Warpick,2,0,0,0,0,10000
Quality Warpick,8,0,0,0,0,10000
Fire Warpick,0,0,4,0,0,10005
Flame Art Warpick,0,0,4,0,0,10000
Lightning Warpick,0,0,0,4,0,10000
Sacred Warpick,0,0,0,0,4,10000
Magic Warpick,0,4,0,0,0,10000
Cold Warpick,0,4,0,0,0,10000
Poison Warpick,0,0,0,0,0,10013
Blood Warpick,0,0,0,0,0,10013
Occult Warpick,7,0,0,0,0,10013
Morning Star,0,0,0,0,0,10000
Heavy Morning Star,1,0,0,0,0,10000
Keen Morning Star,2,0,0,0,0,10000
Quality Morning Star,8,0,0,0,0,10000
Fire Morning Star,0,0,4,0,0,10005
Flame Art Morning Star,0,0,4,0,0,10000
Lightning Morning Star,0,0,0,4,0,10000
Sacred Morning Star,0,0,0,0,4,10000
Magic Morning Star,0,4,0,0,0,10000
Cold Morning Star,0,4,0,0,0,10000
Poison Morning Star,0,0,0,0,0,10013
Blood Morning Star,0,0,0,0,0,10013
Occult Morning Star,7,0,0,0,0,10013
Varre's Bouquet,7,0,0,0,0,10013
Spiked Club,0,0,0,0,0,10000
Heavy Spiked Club,1,0,0,0,0,10000
Keen Spiked Club,2,0,0,0,0,10000
Quality Spiked Club,8,0,0,0,0,10000
Fire Spiked Club,0,0,4,0,0,10005
Flame Art Spiked Club,0,0,4,0,0,10000
Lightning Spiked Club,0,0,0,4,0,10000
Sacred Spiked Club,0,0,0,0,4,10000
Magic Spiked Club,0,4,0,0,0,10000
Cold Spiked Club,0,4,0,0,0,10000
Poison Spiked Club,0,0,0,0,0,10013
Blood Spiked Club,0,0,0,0,0,10013
Occult Spiked Club,7,0,0,0,0,10013
Hammer,0,0,0,0,0,10000
Heavy Hammer,1,0,0,0,0,10000
Keen Hammer,2,0,0,0,0,10000
Quality Hammer,8,0,0,0,0,10000
Fire Hammer,0,0,4,0,0,10005
Flame Art Hammer,0,0,4,0,0,10000
Lightning Hammer,0,0,0,4,0,10000
Sacred Hammer,0,0,0,0,4,10000
Magic Hammer,0,4,0,0,0,10000
Cold Hammer,0,4,0,0,0,10000
Poison Hammer,0,0,0,0,0,10013
Blood Hammer,0,0,0,0,0,10013
Occult Hammer,7,0,0,0,0,10013
Monk's Flamemace,0,0,0,0,0,10000
Monk's Heavy Flamemace,1,0,0,0,0,10000
Monk's Keen Flamemace,2,0,0,0,0,10000
Monk's Quality Flamemace,8,0,0,0,0,10000
Monk's Fire Flamemace,0,0,4,0,0,10005
Monk's Flame Art Flamemace,0,0,4,0,0,10000
Monk's Lightning Flamemace,0,0,0,4,0,10000
Monk's Sacred Flamemace,0,0,0,0,4,10000
Monk's Magic Flamemace,0,4,0,0,0,10000
Monk's Cold Flamemace,0,4,0,0,0,10000
Monk's Poison Flamemace,0,0,0,0,0,10013
Monk's Blood Flamemace,0,0,0,0,0,10013
Monk's Occult Flamemace,7,0,0,0,0,10013
Envoy's Horn,0,0,0,0,4,10000
Scepter of the All-Knowing,0,4,0,0,0,10000
Nox Flowing Hammer,0,0,0,0,0,10000
Ringed Finger,0,0,0,0,0,10000
Stone Club,0,0,0,0,0,10000
Heavy Stone Club,1,0,0,0,0,10000
Keen Stone Club,2,0,0,0,0,10000
Quality Stone Club,8,0,0,0,0,10000
Fire Stone Club,0,0,4,0,0,10005
Flame Art Stone Club,0,0,4,0,0,10000
Lightning Stone Club,0,0,0,4,0,10000
Sacred Stone Club,0,0,0,0,4,10000
Magic Stone Club,0,4,0,0,0,10000
Cold Stone Club,0,4,0,0,0,10000
Poison Stone Club,0,0,0,0,0,10013
Blood Stone Club,0,0,0,0,0,10013
Occult Stone Club,7,0,0,0,0,10013
Marika's Hammer,0,0,0,0,4,10000
Large Club,0,0,0,0,0,10000
Heavy Large Club,1,0,0,0,0,10000
Keen Large Club,2,0,0,0,0,10000
Quality Large Club,8,0,0,0,0,10000
Fire Large Club,0,0,4,0,0,10005
Flame Art Large Club,0,0,4,0,0,10000
Lightning Large Club,0,0,0,4,0,10000
Sacred Large Club,0,0,0,0,4,10000
Magic Large Club,0,4,0,0,0,10000
Cold Large Club,0,4,0,0,0,10000
Poison Large Club,0,0,0,0,0,10013
Blood Large Club,0,0,0,0,0,10013
Occult Large Club,7,0,0,0,0,10013
Greathorn Hammer,0,0,0,0,0,10000
Heavy Greathorn Hammer,1,0,0,0,0,10000
Keen Greathorn Hammer,2,0,0,0,0,10000
Quality Greathorn Hammer,8,0,0,0,0,10000
Fire Greathorn Hammer,0,0,4,0,0,10005
Flame Art Greathorn Hammer,0,0,4,0,0,10000
Lightning Greathorn Hammer,0,0,0,4,0,10000
Sacred Greathorn Hammer,0,0,0,0,4,10000
Magic Greathorn Hammer,0,4,0,0,0,10000
Cold Greathorn Hammer,0,4,0,0,0,10000
Poison Greathorn Hammer,0,0,0,0,0,10013
Blood Greathorn Hammer,0,0,0,0,0,10013
Occult Greathorn Hammer,7,0,0,0,0,10013
Battle Hammer,0,0,0,0,0,10000
Heavy Battle Hammer,1,0,0,0,0,10000
Keen Battle Hammer,2,0,0,0,0,10000
Quality Battle Hammer,8,0,0,0,0,10000
Fire Battle Hammer,0,0,4,0,0,10005
Flame Art Battle Hammer,0,0,4,0,0,10000
Lightning Battle Hammer,0,0,0,4,0,10000
Sacred Battle Hammer,0,0,0,0,4,10000
Magic Battle Hammer,0,4,0,0,0,10000
Cold Battle Hammer,0,4,0,0,0,10000
Poison Battle Hammer,0,0,0,0,0,10013
Blood Battle Hammer,0,0,0,0,0,10013
Occult Battle Hammer,7,0,0,0,0,10013
Great Mace,0,0,0,0,0,10000
Heavy Great Mace,1,0,0,0,0,10000
Keen Great Mace,2,0,0,0,0,10000
Quality Great Mace,8,0,0,0,0,10000
Fire Great Mace,0,0,4,0,0,10005
Flame Art Great Mace,0,0,4,0,0,10000
Lightning Great Mace,0,0,0,4,0,10000
Sacred Great Mace,0,0,0,0,4,10000
Magic Great Mace,0,4,0,0,0,10000
Cold Great Mace,0,4,0,0,0,10000
Poison Great Mace,0,0,0,0,0,10013
Blood Great Mace,0,0,0,0,0,10013
Occult Great Mace,7,0,0,0,0,10013
Curved Great Club,0,0,0,0,0,10000
Heavy Curved Great Club,1,0,0,0,0,10000
Keen Curved Great Club,2,0,0,0,0,10000
Quality Curved Great Club,8,0,0,0,0,10000
Fire Curved Great Club,0,0,4,0,0,10005
Flame Art Curved Great Club,0,0,4,0,0,10000
Lightning Curved Great Club,0,0,0,4,0,10000
Sacred Curved Great Club,0,0,0,0,4,10000
Magic Curved Great Club,0,4,0,0,0,10000
Cold Curved Great Club,0,4,0,0,0,10000
Poison Curved Great Club,0,0,0,0,0,10013
Blood Curved Great Club,0,0,0,0,0,10013
Occult Curved Great Club,7,0,0,0,0,10013
Celebrant's Skull,0,0,0,0,0,10000
Celebrant's Heavy Skull,1,0,0,0,0,10000
Celebrant's Keen Skull,2,0,0,0,0,10000
Celebrant's Quality Skull,8,0,0,0,0,10000
Celebrant's Fire Skull,0,0,4,0,0,10005
Celebrant's Flame Art Skull,0,0,4,0,0,10000
Celebrant's Lightning Skull,0,0,0,4,0,10000
Celebrant's Sacred Skull,0,0,0,0,4,10000
Celebrant's Magic Skull,0,4,0,0,0,10000
Celebrant's Cold Skull,0,4,0,0,0,10000
Celebrant's Poison Skull,0,0,0,0,0,10013
Celebrant's Blood Skull,0,0,0,0,0,10013
Celebrant's Occult Skull,7,0,0,0,0,10013
Pickaxe,0,0,0,0,0,10000
Heavy Pickaxe,1,0,0,0,0,10000
Keen Pickaxe,2,0,0,0,0,10000
Quality Pickaxe,8,0,0,0,0,10000
Fire Pickaxe,0,0,4,0,0,10005
Flame Art Pickaxe,0,0,4,0,0,10000
Lightning Pickaxe,0,0,0,4,0,10000
Sacred Pickaxe,0,0,0,0,4,10000
Magic Pickaxe,0,4,0,0,0,10000
Cold Pickaxe,0,4,0,0,0,10000
Poison Pickaxe,0,0,0,0,0,10013
Blood Pickaxe,0,0,0,0,0,10013
Occult Pickaxe,7,0,0,0,0,10013
Beastclaw Greathammer,0,0,0,0,4,10000
Envoy's Long Horn,0,0,0,0,4,10000
Cranial Vessel Candlestand,0,0,4,0,0,10000
Great Stars,0,0,0,0,0,10000
Heavy Great Stars,1,0,0,0,0,10000
Keen Great Stars,2,0,0,0,0,10000
Quality Great Stars,8,0,0,0,0,10000
Fire Great Stars,0,0,4,0,0,10005
Flame Art Great Stars,0,0,4,0,0,10000
Lightning Great Stars,0,0,0,4,0,10000
Sacred Great Stars,0,0,0,0,4,10000
Magic Great Stars,0,4,0,0,0,10000
Cold Great Stars,0,4,0,0,0,10000
Poison Great Stars,0,0,0,0,0,10013
Blood Great Stars,0,0,0,0,0,10013
Occult Great Stars,7,0,0,0,0,10013
Brick Hammer,0,0,0,0,0,10000
Heavy Brick Hammer,1,0,0,0,0,10000
Keen Brick Hammer,2,0,0,0,0,10000
Quality Brick Hammer,8,0,0,0,0,10000
Fire Brick Hammer,0,0,4,0,0,10005
Flame Art Brick Hammer,0,0,4,0,0,10000
Lightning Brick Hammer,0,0,0,4,0,10000
Sacred Brick Hammer,0,0,0,0,4,10000
Magic Brick Hammer,0,4,0,0,0,10000
Cold Brick Hammer,0,4,0,0,0,10000
Poison Brick Hammer,0,0,0,0,0,10013
Blood Brick Hammer,0,0,0,0,0,10013
Occult Brick Hammer,7,0,0,0,0,10013
Devourer's Scepter,0,0,4,0,0,10000
Rotten Battle Hammer,0,0,0,0,0,10000
Heavy Rotten Battle Hammer,1,0,0,0,0,10000
Keen Rotten Battle Hammer,2,0,0,0,0,10000
Quality Rotten Battle Hammer,8,0,0,0,0,10000
Fire Rotten Battle Hammer,0,0,4,0,0,10005
Flame Art Rotten Battle Hammer,0,0,4,0,0,10000
Lightning Rotten Battle Hammer,0,0,0,4,0,10000
Sacred Rotten Battle Hammer,0,0,0,0,4,10000
Magic Rotten Battle Hammer,0,4,0,0,0,10000
Cold Rotten Battle Hammer,0,4,0,0,0,10000
Poison Rotten Battle Hammer,0,0,0,0,0,10013
Blood Rotten Battle Hammer,0,0,0,0,0,10013
Occult Rotten Battle Hammer,7,0,0,0,0,10013
Nightrider Flail,0,0,0,0,0,10000
Heavy Nightrider Flail,1,0,0,0,0,10000
Keen Nightrider Flail,2,0,0,0,0,10000
Quality Nightrider Flail,8,0,0,0,0,10000
Fire Nightrider Flail,0,0,4,0,0,10005
Flame Art Nightrider Flail,0,0,4,0,0,10000
Lightning Nightrider Flail,0,0,0,4,0,10000
Sacred Nightrider Flail,0,0,0,0,4,10000
Magic Nightrider Flail,0,4,0,0,0,10000
Cold Nightrider Flail,0,4,0,0,0,10000
Poison Nightrider Flail,0,0,0,0,0,10013
Blood Nightrider Flail,0,0,0,0,0,10013
Occult Nightrider Flail,7,0,0,0,0,10013
Flail,0,0,0,0,0,10000
Heavy Flail,1,0,0,0,0,10000
Keen Flail,2,0,0,0,0,10000
Quality Flail,8,0,0,0,0,10000
Fire Flail,0,0,4,0,0,10005
Flame Art Flail,0,0,4,0,0,10000
Lightning Flail,0,0,0,4,0,10000
Sacred Flail,0,0,0,0,4,10000
Magic Flail,0,4,0,0,0,10000
Cold Flail,0,4,0,0,0,10000
Poison Flail,0,0,0,0,0,10013
Blood Flail,0,0,0,0,0,10013
Occult Flail,7,0,0,0,0,10013
Family Heads,0,4,0,0,0,10000
Bastard's Stars,0,4,0,0,0,10000
Chainlink Flail,0,0,0,0,0,10000
Heavy Chainlink Flail,1,0,0,0,0,10000
Keen Chainlink Flail,2,0,0,0,0,10000
Quality Chainlink Flail,8,0,0,0,0,10000
Fire Chainlink Flail,0,0,4,0,0,10005
Flame Art Chainlink Flail,0,0,4,0,0,10000
Lightning Chainlink Flail,0,0,0,4,0,10000
Sacred Chainlink Flail,0,0,0,0,4,10000
Magic Chainlink Flail,0,4,0,0,0,10000
Cold Chainlink Flail,0,4,0,0,0,10000
Poison Chainlink Flail,0,0,0,0,0,10013
Blood Chainlink Flail,0,0,0,0,0,10013
Occult Chainlink Flail,7,0,0,0,0,10013
Battle Axe,0,0,0,0,0,10000
Heavy Battle Axe,1,0,0,0,0,10000
Keen Battle Axe,2,0,0,0,0,10000
Quality Battle Axe,8,0,0,0,0,10000
Fire Battle Axe,0,0,4,0,0,10005
Flame Art Battle Axe,0,0,4,0,0,10000
Lightning Battle Axe,0,0,0,4,0,10000
Sacred Battle Axe,0,0,0,0,4,10000
Magic Battle Axe,0,4,0,0,0,10000
Cold Battle Axe,0,4,0,0,0,10000
Poison Battle Axe,0,0,0,0,0,10013
Blood Battle Axe,0,0,0,0,0,10013
Occult Battle Axe,7,0,0,0,0,10013
Forked Hatchet,0,0,0,0,0,10000
Heavy Forked Hatchet,1,0,0,0,0,10000
Keen Forked Hatchet,2,0,0,0,0,10000
Quality Forked Hatchet,8,0,0,0,0,10000
Fire Forked Hatchet,0,0,4,0,0,10005
Flame Art Forked Hatchet,0,0,4,0,0,10000
Lightning Forked Hatchet,0,0,0,4,0,10000
Sacred Forked Hatchet,0,0,0,0,4,10000
Magic Forked Hatchet,0,4,0,0,0,10000
Cold Forked Hatchet,0,4,0,0,0,10000
Poison Forked Hatchet,0,0,0,0,0,10013
Blood Forked Hatchet,0,0,0,0,0,10013
Occult Forked Hatchet,7,0,0,0,0,10013
Hand Axe,0,0,0,0,0,10000
Heavy Hand Axe,1,0,0,0,0,10000
Keen Hand Axe,2,0,0,0,0,10000
Quality Hand Axe,8,0,0,0,0,10000
Fire Hand Axe,0,0,4,0,0,10005
Flame Art Hand Axe,0,0,4,0,0,10000
Lightning Hand Axe,0,0,0,4,0,10000
Sacred Hand Axe,0,0,0,0,4,10000
Magic Hand Axe,0,4,0,0,0,10000
Cold Hand Axe,0,4,0,0,0,10000
Poison Hand Axe,0,0,0,0,0,10013
Blood Hand Axe,0,0,0,0,0,10013
Occult Hand Axe,7,0,0,0,0,10013
Jawbone Axe,0,0,0,0,0,10000
Heavy Jawbone Axe,1,0,0,0,0,10000
Keen Jawbone Axe,2,0,0,0,0,10000
Quality Jawbone Axe,8,0,0,0,0,10000
Fire Jawbone Axe,0,0,4,0,0,10005
Flame Art Jawbone Axe,0,0,4,0,0,10000
Lightning Jawbone Axe,0,0,0,4,0,10000
Sacred Jawbone Axe,0,0,0,0,4,10000
Magic Jawbone Axe,0,4,0,0,0,10000
Cold Jawbone Axe,0,4,0,0,0,10000
Poison Jawbone Axe,0,0,0,0,0,10013
Blood Jawbone Axe,0,0,0,0,0,10013
Occult Jawbone Axe,7,0,0,0,0,10013
Iron Cleaver,0,0,0,0,0,10000
Heavy Iron Cleaver,1,0,0,0,0,10000
Keen Iron Cleaver,2,0,0,0,0,10000
Quality Iron Cleaver,8,0,0,0,0,10000
Fire Iron Cleaver,0,0,4,0,0,10005
Flame Art Iron Cleaver,0,0,4,0,0,10000
Lightning Iron Cleaver,0,0,0,4,0,10000
Sacred Iron Cleaver,0,0,0,0,4,10000
Magic Iron Cleaver,0,4,0,0,0,10000
Cold Iron Cleaver,0,4,0,0,0,10000
Poison Iron Cleaver,0,0,0,0,0,10013
Blood Iron Cleaver,0,0,0,0,0,10013
Occult Iron Cleaver,7,0,0,0,0,10013
Ripple Blade,7,0,0,0,0,10013
Celebrant's Cleaver,0,0,0,0,0,10000
Celebrant's Heavy Cleaver,1,0,0,0,0,10000
Celebrant's Keen Cleaver,2,0,0,0,0,10000
Celebrant's Quality Cleaver,8,0,0,0,0,10000
Celebrant's Fire Cleaver,0,0,4,0,0,10005
Celebrant's Flame Art Cleaver Blades,0,0,4,0,0,10000
Celebrant's Lightning Cleaver,0,0,0,4,0,10000
Celebrant's Sacred Cleaver,0,0,0,0,4,10000
Celebrant's Magic Cleaver,0,4,0,0,0,10000
Celebrant's Cold Cleaver,0,4,0,0,0,10000
Celebrant's Poison Cleaver,0,0,0,0,0,10013
Celebrant's Blood Cleaver,0,0,0,0,0,10013
Celebrant's Occult Cleaver,7,0,0,0,0,10013
Icerind Hatchet,0,0,0,0,0,10000
Highland Axe,0,0,0,0,0,10000
Heavy Highland Axe,1,0,0,0,0,10000
Keen Highland Axe,2,0,0,0,0,10000
Quality Highland Axe,8,0,0,0,0,10000
Fire Highland Axe,0,0,4,0,0,10005
Flame Art Highland Axe,0,0,4,0,0,10000
Lightning Highland Axe,0,0,0,4,0,10000
Sacred Highland Axe,0,0,0,0,4,10000
Magic Highland Axe,0,4,0,0,0,10000
Cold Highland Axe,0,4,0,0,0,10000
Poison Highland Axe,0,0,0,0,0,10013
Bloody Highland Axe,0,0,0,0,0,10013
Occult Highland Axe,7,0,0,0,0,10013
Sacrificial Axe,0,0,0,0,0,10000
Heavy Sacrificial Axe,1,0,0,0,0,10000
Keen Sacrificial Axe,2,0,0,0,0,10000
Quality Sacrificial Axe,8,0,0,0,0,10000
Fire Sacrificial Axe,0,0,4,0,0,10005
Flame Art Sacrificial Axe,0,0,4,0,0,10000
Lightning Sacrificial Axe,0,0,0,4,0,10000
Sacred Sacrificial Axe,0,0,0,0,4,10000
Magic Sacrificial Axe,0,4,0,0,0,10000
Cold Sacrificial Axe,0,4,0,0,0,10000
Poison Sacrificial Axe,0,0,0,0,0,10013
Blood Sacrificial Axe,0,0,0,0,0,10013
Occult Sacrificial Axe,7,0,0,0,0,10013
Rosus' Axe,0,4,0,0,0,10000
Stormhawk Axe,0,0,0,0,0,10000
Greataxe,0,0,0,0,0,10000
Heavy Greataxe,1,0,0,0,0,10000
Keen Greataxe,2,0,0,0,0,10000
Quality Greataxe,8,0,0,0,0,10000
Fire Greataxe,0,0,4,0,0,10005
Flame Art Greataxe,0,0,4,0,0,10000
Lightning Greataxe,0,0,0,4,0,10000
Sacred Greataxe,0,0,0,0,4,10000
Magic Greataxe,0,4,0,0,0,10000
Cold Greataxe,0,4,0,0,0,10000
Poison Greataxe,0,0,0,0,0,10013
Blood Greataxe,0,0,0,0,0,10013
Occult Greataxe,7,0,0,0,0,10013
Warped Axe,0,0,0,0,0,10000
Heavy Warped Axe,1,0,0,0,0,10000
Keen Warped Axe,2,0,0,0,0,10000
Quality Warped Axe,8,0,0,0,0,10000
Fire Warped Axe,0,0,4,0,0,10005
Flame Art Warped Axe,0,0,4,0,0,10000
Lightning Warped Axe,0,0,0,4,0,10000
Sacred Warped Axe,0,0,0,0,4,10000
Magic Warped Axe,0,4,0,0,0,10000
Cold Warped Axe,0,4,0,0,0,10000
Poison Warped Axe,0,0,0,0,0,10013
Blood Warped Axe,0,0,0,0,0,10013
Occult Warped Axe,7,0,0,0,0,10013
Great Omenkiller Cleaver,0,0,0,0,0,10000
Heavy Great Omenkiller Cleaver,1,0,0,0,0,10000
Keen Great Omenkiller Cleaver,2,0,0,0,0,10000
Quality Great Omenkiller Cleaver,8,0,0,0,0,10000
Fire Great Omenkiller Cleaver,0,0,4,0,0,10005
Flame Art Great Omenkiller Cleaver,0,0,4,0,0,10000
Lightning Great Omenkiller Cleaver,0,0,0,4,0,10000
Sacred Great Omenkiller Cleaver,0,0,0,0,4,10000
Magic Great Omenkiller Cleaver,0,4,0,0,0,10000
Cold Great Omenkiller Cleaver,0,4,0,0,0,10000
Poison Great Omenkiller Cleaver,0,0,0,0,0,10013
Blood Great Omenkiller Cleaver,0,0,0,0,0,10013
Occult Great Omenkiller Cleaver,7,0,0,0,0,10013
Crescent Moon Axe,0,0,0,0,0,10000
Heavy Crescent Moon Axe,1,0,0,0,0,10000
Keen Crescent Moon Axe,2,0,0,0,0,10000
Quality Crescent Moon Axe,8,0,0,0,0,10000
Fire Crescent Moon Axe,0,0,4,0,0,10005
Flame Art Crescent Moon Axe,0,0,4,0,0,10000
Lightning Crescent Moon Axe,0,0,0,4,0,10000
Sacred Crescent Moon Axe,0,0,0,0,4,10000
Magic Crescent Moon Axe,0,4,0,0,0,10000
Cold Crescent Moon Axe,0,4,0,0,0,10000
Poison Crescent Moon Axe,0,0,0,0,0,10013
Blood Crescent Moon Axe,0,0,0,0,0,10013
Occult Crescent Moon Axe,7,0,0,0,0,10013
Axe of Godrick,0,0,0,0,0,10000
Longhaft Axe,0,0,0,0,0,10000
Heavy Longhaft Axe,1,0,0,0,0,10000
Keen Longhaft Axe,2,0,0,0,0,10000
Quality Longhaft Axe,8,0,0,0,0,10000
Fire Longhaft Axe,0,0,4,0,0,10005
Flame Art Longhaft Axe,0,0,4,0,0,10000
Lightning Longhaft Axe,0,0,0,4,0,10000
Sacred Longhaft Axe,0,0,0,0,4,10000
Magic Longhaft Axe,0,4,0,0,0,10000
Cold Longhaft Axe,0,4,0,0,0,10000
Poison Longhaft Axe,0,0,0,0,0,10013
Blood Longhaft Axe,0,0,0,0,0,10013
Occult Longhaft Axe,7,0,0,0,0,10013
Rusted Anchor,0,0,0,0,0,10000
Heavy Rusted Anchor,1,0,0,0,0,10000
Keen Rusted Anchor,2,0,0,0,0,10000
Quality Rusted Anchor,8,0,0,0,0,10000
Fire Rusted Anchor,0,0,4,0,0,10005
Flame Art Rusted Anchor,0,0,4,0,0,10000
Lightning Rusted Anchor,0,0,0,4,0,10000
Sacred Rusted Anchor,0,0,0,0,4,10000
Magic Rusted Anchor,0,4,0,0,0,10000
Cold Rusted Anchor,0,4,0,0,0,10000
Poison Rusted Anchor,0,0,0,0,0,10013
Blood Rusted Anchor,0,0,0,0,0,10013
Occult Rusted Anchor,7,0,0,0,0,10013
Executioner's Greataxe,0,0,0,0,0,10000
Executioner's Heavy Greataxe,1,0,0,0,0,10000
Executioner's Keen Greataxe,2,0,0,0,0,10000
Executioner's Quality Greataxe,8,0,0,0,0,10000
Executioner's Fire Greataxe,0,0,4,0,0,10005
Executioner's Flame Art Greataxe,0,0,4,0,0,10000
Executioner's Lightning Greataxe,0,0,0,4,0,10000
Executioner's Sacred Greataxe,0,0,0,0,4,10000
Executioner's Magic Greataxe,0,4,0,0,0,10000
Executioner's Cold Greataxe,0,4,0,0,0,10000
Executioner's Poison Greataxe,0,0,0,0,0,10013
Executioner's Blood Greataxe,0,0,0,0,0,10013
Executioner's Occult Greataxe,7,0,0,0,0,10013
Winged Greathorn,0,0,0,0,0,10000
Butchering Knife,0,0,0,0,0,10000
Heavy Butchering Knife,1,0,0,0,0,10000
Keen Butchering Knife,2,0,0,0,0,10000
Quality Butchering Knife,8,0,0,0,0,10000
Fire Butchering Knife,0,0,4,0,0,10005
Flame Art Butchering Knife,0,0,4,0,0,10000
Lightning Butchering Knife,0,0,0,4,0,10000
Sacred Butchering Knife,0,0,0,0,4,10000
Magic Butchering Knife,0,4,0,0,0,10000
Cold Butchering Knife,0,4,0,0,0,10000
Poison Butchering Knife,0,0,0,0,0,10013
Blood Butchering Knife,0,0,0,0,0,10013
Occult Butchering Knife,7,0,0,0,0,10013
Gargoyle's Great Axe,0,0,0,0,0,10000
Gargoyle's Heavy Great Axe,1,0,0,0,0,10000
Gargoyle's Keen Great Axe,2,0,0,0,0,10000
Gargoyle's Quality Great Axe,8,0,0,0,0,10000
Gargoyle's Fire Great Axe,0,0,4,0,0,10005
Gargoyle's Flame Art Great Axe,0,0,4,0,0,10000
Gargoyle's Lightning Great Axe,0,0,0,4,0,10000
Gargoyle's Sacred Great Axe,0,0,0,0,4,10000
Gargoyle's Magic Great Axe,0,4,0,0,0,10000
Gargoyle's Cold Great Axe,0,4,0,0,0,10000
Gargoyle's Poison Great Axe,0,0,0,0,0,10013
Gargoyle's Blood Great Axe,0,0,0,0,0,10013
Gargoyle's Occult Great Axe,7,0,0,0,0,10013
Gargoyle's Black Axe,0,0,0,0,4,10000
Short Spear,0,0,0,0,0,10000
Heavy Short Spear,1,0,0,0,0,10000
Keen Short Spear,2,0,0,0,0,10000
Quality Short Spear,8,0,0,0,0,10000
Fire Short Spear,0,0,4,0,0,10005
Flame Art Short Spear,0,0,4,0,0,10000
Lightning Short Spear,0,0,0,4,0,10000
Sacred Short Spear,0,0,0,0,4,10000
Magic Short Spear,0,4,0,0,0,10000
Cold Short Spear,0,4,0,0,0,10000
Poison Short Spear,0,0,0,0,0,10013
Blood Short Spear,0,0,0,0,0,10013
Occult Short Spear,7,0,0,0,0,10013
Spear,0,0,0,0,0,10000
Heavy Spear,1,0,0,0,0,10000
Keen Spear,2,0,0,0,0,10000
Quality Spear,8,0,0,0,0,10000
Fire Spear,0,0,4,0,0,10005
Flame Art Spear,0,0,4,0,0,10000
Lightning Spear,0,0,0,4,0,10000
Sacred Spear,0,0,0,0,4,10000
Magic Spear,0,4,0,0,0,10000
Cold Spear,0,4,0,0,0,10000
Poison Spear,0,0,0,0,0,10013
Bloody Spear,0,0,0,0,0,10013
Occult Spear,7,0,0,0,0,10013
Crystal Spear,0,4,0,0,0,10000
Clayman's Harpoon,0,4,0,0,0,10000
Clayman's Heavy Harpoon,1,4,0,0,0,10000
Clayman's Keen Harpoon,2,4,0,0,0,10000
Clayman's Quality Harpoon,8,4,0,0,0,10000
Clayman's Fire Harpoon,0,4,4,0,0,10005
Clayman's Flame Art Harpoon,0,4,4,0,0,10000
Clayman's Lightning Harpoon,0,4,0,4,0,10000
Clayman's Sacred Harpoon,0,4,0,0,4,10000
Clayman's Magic Harpoon,0,4,0,0,0,10000
Clayman's Cold Harpoon,0,4,0,0,0,10000
Clayman's Poison Harpoon,0,4,0,0,0,10013
Clayman's Blood Harpoon,0,4,0,0,0,10013
Clayman's Occult Harpoon,7,4,0,0,0,10013
Cleanrot Spear,0,0,0,0,4,10000
Partisan,0,0,0,0,0,10000
Heavy Partisan,1,0,0,0,0,10000
Keen Partisan,2,0,0,0,0,10000
Quality Partisan,8,0,0,0,0,10000
Fire Partisan,0,0,4,0,0,10005
Flame Art Partisan,0,0,4,0,0,10000
Lightning Partisan,0,0,0,4,0,10000
Sacred Partisan,0,0,0,0,4,10000
Magic Partisan,0,4,0,0,0,10000
Cold Partisan,0,4,0,0,0,10000
Poison Partisan,0,0,0,0,0,10013
Blood Partisan,0,0,0,0,0,10013
Occult Partisan,7,0,0,0,0,10013
Celebrant's Rib-Rake,0,0,0,0,0,10000
Celebrant's Heavy Rib-Rake,1,0,0,0,0,10000
Celebrant's Keen Rib-Rake,2,0,0,0,0,10000
Celebrant's Quality Rib-Rake,8,0,0,0,0,10000
Celebrant's Fire Rib-Rake,0,0,4,0,0,10005
Celebrant's Flame Art Rib-Rake,0,0,4,0,0,10000
Celebrant's Lightning Rib-Rake,0,0,0,4,0,10000
Celebrant's Sacred Rib-Rake,0,0,0,0,4,10000
Celebrant's Magic Rib-Rake,0,4,0,0,0,10000
Celebrant's Cold Rib-Rake,0,4,0,0,0,10000
Celebrant's Poison Rib-Rake,0,0,0,0,0,10013
Celebrant's Blood Rib-Rake,0,0,0,0,0,10013
Celebrant's Occult Rib-Rake,7,0,0,0,0,10013
Pike,0,0,0,0,0,10000
Heavy Pike,1,0,0,0,0,10000
Keen Pike,2,0,0,0,0,10000
Quality Pike,8,0,0,0,0,10000
Fire Pike,0,0,4,0,0,10005
Flame Art Pike,0,0,4,0,0,10000
Lightning Pike,0,0,0,4,0,10000
Sacred Pike,0,0,0,0,4,10000
Magic Pike,0,4,0,0,0,10000
Cold Pike,0,4,0,0,0,10000
Poison Pike,0,0,0,0,0,10013
Blood Pike,0,0,0,0,0,10013
Occult Pike,7,0,0,0,0,10013
Torchpole,0,0,4,0,0,10000
Bolt of Gransax,0,0,0,4,0,10000
Cross-Naginata,0,0,0,0,0,10000
Heavy Cross-Naginata,1,0,0,0,0,10000
Keen Cross-Naginata,2,0,0,0,0,10000
Quality Cross-Naginata,8,0,0,0,0,10000
Fire Cross-Naginata,0,0,4,0,0,10005
Flame Art Cross-Naginata,0,0,4,0,0,10000
Lightning Cross-Naginata,0,0,0,4,0,10000
Sacred Cross-Naginata,0,0,0,0,4,10000
Magic Cross-Naginata,0,4,0,0,0,10000
Cold Cross-Naginata,0,4,0,0,0,10000
Poison Cross-Naginata,0,0,0,0,0,10013
Blood Cross-Naginata,0,0,0,0,0,10013
Occult Cross-Naginata,7,0,0,0,0,10013
Death Ritual Spear,0,4,0,0,0,10000
Inquisitor's Girandole,0,0,4,0,0,10000
Spiked Spear,0,0,0,0,0,10000
Heavy Spiked Spear,1,0,0,0,0,10000
Keen Spiked Spear,2,0,0,0,0,10000
Quality Spiked Spear,8,0,0,0,0,10000
Fire Spiked Spear,0,0,4,0,0,10005
Flame Art Spiked Spear,0,0,4,0,0,10000
Lightning Spiked Spear,0,0,0,4,0,10000
Sacred Spiked Spear,0,0,0,0,4,10000
Magic Spiked Spear,0,4,0,0,0,10000
Cold Spiked Spear,0,4,0,0,0,10000
Poison Spiked Spear,0,0,0,0,0,10013
Blood Spiked Spear,0,0,0,0,0,10013
Occult Spiked Spear,7,0,0,0,0,10013
Iron Spear,0,0,0,0,0,10000
Heavy Iron Spear,1,0,0,0,0,10000
Keen Iron Spear,2,0,0,0,0,10000
Quality Iron Spear,8,0,0,0,0,10000
Fire Iron Spear,0,0,4,0,0,10005
Flame Art Iron Spear,0,0,4,0,0,10000
Lightning Iron Spear,0,0,0,4,0,10000
Sacred Iron Spear,0,0,0,0,4,10000
Magic Iron Spear,0,4,0,0,0,10000
Cold Iron Spear,0,4,0,0,0,10000
Poison Iron Spear,0,0,0,0,0,10013
Blood Iron Spear,0,0,0,0,0,10013
Occult Iron Spear,7,0,0,0,0,10013
Rotten Crystal Spear,0,4,0,0,0,10000
Mohgwyn's Sacred Spear,7,0,4,0,0,10100
Siluria's Tree,0,0,0,0,4,10000
Serpent-Hunter,0,0,0,0,0,10000
Vyke's War Spear,0,0,4,0,0,10000
Lance,0,0,0,0,0,10000
Heavy Lance,1,0,0,0,0,10000
Keen Lance,2,0,0,0,0,10000
Quality Lance,8,0,0,0,0,10000
Fire Lance,0,0,4,0,0,10005
Flame Art Lance,0,0,4,0,0,10000
Lightning Lance,0,0,0,4,0,10000
Sacred Lance,0,0,0,0,4,10000
Magic Lance,0,4,0,0,0,10000
Cold Lance,0,4,0,0,0,10000
Poison Lance,0,0,0,0,0,10013
Bloody Lance,0,0,0,0,0,10013
Occult Lance,7,0,0,0,0,10013
Treespear,0,0,0,0,4,10000
Halberd,0,0,0,0,0,10000
Heavy Halberd,1,0,0,0,0,10000
Keen Halberd,2,0,0,0,0,10000
Quality Halberd,8,0,0,0,0,10000
Fire Halberd,0,0,4,0,0,10005
Flame Art Halberd,0,0,4,0,0,10000
Lightning Halberd,0,0,0,4,0,10000
Sacred Halberd,0,0,0,0,4,10000
Magic Halberd,0,4,0,0,0,10000
Cold Halberd,0,4,0,0,0,10000
Poison Halberd,0,0,0,0,0,10013
Blood Halberd,0,0,0,0,0,10013
Occult Halberd,7,0,0,0,0,10013
Pest's Glaive,0,0,0,0,0,10000
Pest's Heavy Glaive,1,0,0,0,0,10000
Pest's Keen Glaive,2,0,0,0,0,10000
Pest's Quality Glaive,8,0,0,0,0,10000
Pest's Fire Glaive,0,0,4,0,0,10005
Pest's Flame Art Glaive,0,0,4,0,0,10000
Pest's Lightning Glaive,0,0,0,4,0,10000
Pest's Sacred Glaive,0,0,0,0,4,10000
Pest's Magic Glaive,0,4,0,0,0,10000
Pest's Cold Glaive,0,4,0,0,0,10000
Pest's Poison Glaive,0,0,0,0,0,10013
Pest's Blood Glaive,0,0,0,0,0,10013
Pest's Occult Glaive,7,0,0,0,0,10013
Lucerne,0,0,0,0,0,10000
Heavy Lucerne,1,0,0,0,0,10000
Keen Lucerne,2,0,0,0,0,10000
Quality Lucerne,8,0,0,0,0,10000
Fire Lucerne,0,0,4,0,0,10005
Flame Art Lucerne,0,0,4,0,0,10000
Lightning Lucerne,0,0,0,4,0,10000
Sacred Lucerne,0,0,0,0,4,10000
Magic Lucerne,0,4,0,0,0,10000
Cold Lucerne,0,4,0,0,0,10000
Poison Lucerne,0,0,0,0,0,10013
Blood Lucerne,0,0,0,0,0,10013
Occult Lucerne,7,0,0,0,0,10013
Banished Knight's Halberd,0,0,0,0,0,10000
Banished Knight's Heavy Halberd,1,0,0,0,0,10000
Banished Knight's Keen Halberd,2,0,0,0,0,10000
Banished Knight's Quality Halberd,8,0,0,0,0,10000
Banished Knight's Fire Halberd,0,0,4,0,0,10005
Banished Knight's Flame Art Halberd,0,0,4,0,0,10000
Banished Knight's Lightning Halberd,0,0,0,4,0,10000
Banished Knight's Sacred Halberd,0,0,0,0,4,10000
Banished Knight's Magic Halberd,0,4,0,0,0,10000
Banished Knight's Cold Halberd,0,4,0,0,0,10000
Banished Knight's Poison Halberd,0,0,0,0,0,10013
Banished Knight's Blood Halberd,0,0,0,0,0,10013
Banished Knight's Occult Halberd,7,0,0,0,0,10013
Commander's Standard,0,0,0,0,0,10000
Nightrider Glaive,0,0,0,0,0,10000
Heavy Nightrider Glaive,1,0,0,0,0,10000
Keen Nightrider Glaive,2,0,0,0,0,10000
Quality Nightrider Glaive,8,0,0,0,0,10000
Fire Nightrider Glaive,0,0,4,0,0,10005
Flame Art Nightrider Glaive,0,0,4,0,0,10000
Lightning Nightrider Glaive,0,0,0,4,0,10000
Sacred Nightrider Glaive,0,0,0,0,4,10000
Magic Nightrider Glaive,0,4,0,0,0,10000
Cold Nightrider Glaive,0,4,0,0,0,10000
Poison Nightrider Glaive,0,0,0,0,0,10013
Blood Nightrider Glaive,0,0,0,0,0,10013
Occult Nightrider Glaive,7,0,0,0,0,10013
Ripple Crescent Halberd,7,0,0,0,0,10013
Vulgar Militia Saw,0,0,0,0,0,10000
Heavy Vulgar Militia Saw,1,0,0,0,0,10000
Keen Vulgar Militia Saw,2,0,0,0,0,10000
Quality Vulgar Militia Saw,8,0,0,0,0,10000
Fire Vulgar Militia Saw,0,0,4,0,0,10005
Flame Art Vulgar Militia Saw,0,0,4,0,0,10000
Lightning Vulgar Militia Saw,0,0,0,4,0,10000
Sacred Vulgar Militia Saw,0,0,0,0,4,10000
Magic Vulgar Militia Saw,0,4,0,0,0,10000
Cold Vulgar Militia Saw,0,4,0,0,0,10000
Poison Vulgar Militia Saw,0,0,0,0,0,10013
Blood Vulgar Militia Saw,0,0,0,0,0,10013
Occult Vulgar Militia Saw,7,0,0,0,0,10013
Golden Halberd,0,0,0,0,4,10000
Glaive,0,0,0,0,0,10000
Heavy Glaive,1,0,0,0,0,10000
Keen Glaive,2,0,0,0,0,10000
Quality Glaive,8,0,0,0,0,10000
Fire Glaive,0,0,4,0,0,10005
Flame Art Glaive,0,0,4,0,0,10000
Lightning Glaive,0,0,0,4,0,10000
Sacred Glaive,0,0,0,0,4,10000
Magic Glaive,0,4,0,0,0,10000
Cold Glaive,0,4,0,0,0,10000
Poison Glaive,0,0,0,0,0,10013
Blood Glaive,0,0,0,0,0,10013
Occult Glaive,7,0,0,0,0,10013
Loretta's War Sickle,0,4,0,0,0,10000
Guardian's Swordspear,0,0,0,0,0,10000
Guardian's Heavy Swordspear,1,0,0,0,0,10000
Guardian's Keen Swordspear,2,0,0,0,0,10000
Guardian's Quality Swordspear,8,0,0,0,0,10000
Guardian's Fire Swordspear,0,0,4,0,0,10005
Guardian's Flame Art Swordspear,0,0,4,0,0,10000
Guardian's Lightning Swordspear,0,0,0,4,0,10000
Guardian's Sacred Swordspear,0,0,0,0,4,10000
Guardian's Magic Swordspear,0,4,0,0,0,10000
Guardian's Cold Swordspear,0,4,0,0,0,10000
Guardian's Poison Swordspear,0,0,0,0,0,10013
Guardian's Blood Swordspear,0,0,0,0,0,10013
Guardian's Occult Swordspear,7,0,0,0,0,10013
Vulgar Militia Shotel,0,0,0,0,0,10000
Heavy Vulgar Militia Shotel,1,0,0,0,0,10000
Keen Vulgar Militia Shotel,2,0,0,0,0,10000
Quality Vulgar Militia Shotel,8,0,0,0,0,10000
Fire Vulgar Militia Shotel,0,0,4,0,0,10005
Flame Art Vulgar Militia Shotel,0,0,4,0,0,10000
Lightning Vulgar Militia Shotel,0,0,0,4,0,10000
Sacred Vulgar Militia Shotel,0,0,0,0,4,10000
Magic Vulgar Militia Shotel,0,4,0,0,0,10000
Cold Vulgar Militia Shotel,0,4,0,0,0,10000
Poison Vulgar Militia Shotel,0,0,0,0,0,10013
Blood Vulgar Militia Shotel,0,0,0,0,0,10013
Occult Vulgar Militia Shotel,7,0,0,0,0,10013
Dragon Halberd,0,0,0,4,0,10000
Gargoyle's Halberd,0,0,0,0,0,10000
Gargoyle's Heavy Halberd,1,0,0,0,0,10000
Gargoyle's Keen Halberd,2,0,0,0,0,10000
Gargoyle's Quality Halberd,8,0,0,0,0,10000
Gargoyle's Fire Halberd,0,0,4,0,0,10005
Gargoyle's Flame Art Halberd,0,0,4,0,0,10000
Gargoyle's Lightning Halberd,0,0,0,4,0,10000
Gargoyle's Sacred Halberd,0,0,0,0,4,10000
Gargoyle's Magic Halberd,0,4,0,0,0,10000
Gargoyle's Cold Halberd,0,4,0,0,0,10000
Gargoyle's Poison Halberd,0,0,0,0,0,10013
Gargoyle's Blood Halberd,0,0,0,0,0,10013
Gargoyle's Occult Halberd,7,0,0,0,0,10013
Gargoyle's Black Halberd,0,0,0,0,0,10000
Scythe,0,0,0,0,0,10000
Heavy Scythe,1,0,0,0,0,10000
Keen Scythe,2,0,0,0,0,10000
Quality Scythe,8,0,0,0,0,10000
Fire Scythe,0,0,4,0,0,10005
Flame Art Scythe,0,0,4,0,0,10000
Lightning Scythe,0,0,0,4,0,10000
Sacred Scythe,0,0,0,0,4,10000
Magic Scythe,0,4,0,0,0,10000
Cold Scythe,0,4,0,0,0,10000
Poison Scythe,0,0,0,0,0,10013
Blood Scythe,0,0,0,0,0,10013
Occult Scythe,7,0,0,0,0,10013
Grave Scythe,0,0,0,0,0,10000
Heavy Grave Scythe,1,0,0,0,0,10000
Keen Grave Scythe,2,0,0,0,0,10000
Quality Grave Scythe,8,0,0,0,0,10000
Fire Grave Scythe,0,0,4,0,0,10005
Flame Art Grave Scythe,0,0,4,0,0,10000
Lightning Grave Scythe,0,0,0,4,0,10000
Sacred Grave Scythe,0,0,0,0,4,10000
Magic Grave Scythe,0,4,0,0,0,10000
Cold Grave Scythe,0,4,0,0,0,10000
Poison Grave Scythe,0,0,0,0,0,10013
Blood Grave Scythe,0,0,0,0,0,10013
Occult Grave Scythe,7,0,0,0,0,10013
Halo Scythe,0,0,0,0,4,10000
Winged Scythe,0,0,0,0,4,10000
Whip,0,0,0,0,0,10000
Heavy Whip,1,0,0,0,0,10000
Keen Whip,2,0,0,0,0,10000
Quality Whip,8,0,0,0,0,10000
Fire Whip,0,0,4,0,0,10005
Flame Art Whip,0,0,4,0,0,10000
Lightning Whip,0,0,0,4,0,10000
Sacred Whip,0,0,0,0,4,10000
Magic Whip,0,4,0,0,0,10000
Cold Whip,0,4,0,0,0,10000
Poison Whip,0,0,0,0,0,10013
Blood Whip,0,0,0,0,0,10013
Occult Whip,7,0,0,0,0,10013
Thorned Whip,0,0,0,0,0,10000
Heavy Thorned Whip,1,0,0,0,0,10000
Keen Thorned Whip,2,0,0,0,0,10000
Quality Thorned Whip,8,0,0,0,0,10000
Fire Thorned Whip,0,0,4,0,0,10005
Flame Art Thorned Whip,0,0,4,0,0,10000
Lightning Thorned Whip,0,0,0,4,0,10000
Sacred Thorned Whip,0,0,0,0,4,10000
Magic Thorned Whip,0,4,0,0,0,10000
Cold Thorned Whip,0,4,0,0,0,10000
Poison Thorned Whip,0,0,0,0,0,10013
Blood Thorned Whip,0,0,0,0,0,10013
Occult Thorned Whip,7,0,0,0,0,10013
Magma Whip Candlestick,0,0,4,0,0,10000
Hoslow's Petal Whip,0,0,0,0,0,10000
Hoslow's Heavy Petal Whip,1,0,0,0,0,10000
Hoslow's Keen Petal Whip,2,0,0,0,0,10000
Hoslow's Quality Petal Whip,8,0,0,0,0,10000
Hoslow's Fire Petal Whip,0,0,4,0,0,10005
Hoslow's Flame Art Petal Whip,0,0,4,0,0,10000
Hoslow's Lightning Petal Whip,0,0,0,4,0,10000
Hoslow's Sacred Petal Whip,0,0,0,0,4,10000
Hoslow's Magic Petal Whip,0,4,0,0,0,10000
Hoslow's Cold Petal Whip,0,4,0,0,0,10000
Hoslow's Poison Petal Whip,0,0,0,0,0,10013
Hoslow's Blood Petal Whip,0,0,0,0,0,10013
Hoslow's Occult Petal Whip,7,0,0,0,0,10013
Giant's Red Braid,0,0,4,0,0,10000
Urumi,0,0,0,0,0,10000
Heavy Urumi,1,0,0,0,0,10000
Keen Urumi,2,0,0,0,0,10000
Quality Urumi,8,0,0,0,0,10000
Fire Urumi,0,0,4,0,0,10005
Flame Art Urumi,0,0,4,0,0,10000
Lightning Urumi,0,0,0,4,0,10000
Sacred Urumi,0,0,0,0,4,10000
Magic Urumi,0,4,0,0,0,10000
Cold Urumi,0,4,0,0,0,10000
Poison Urumi,0,0,0,0,0,10013
Blood Urumi,0,0,0,0,0,10013
Occult Urumi,7,0,0,0,0,10013
Caestus,0,0,0,0,0,10000
Heavy Caestus,1,0,0,0,0,10000
Keen Caestus,2,0,0,0,0,10000
Quality Caestus,8,0,0,0,0,10000
Fire Caestus,0,0,4,0,0,10005
Flame Art Caestus,0,0,4,0,0,10000
Lightning Caestus,0,0,0,4,0,10000
Sacred Caestus,0,0,0,0,4,10000
Magic Caestus,0,4,0,0,0,10000
Cold Caestus,0,4,0,0,0,10000
Poison Caestus,0,0,0,0,0,10013
Blood Caestus,0,0,0,0,0,10013
Occult Caestus,7,0,0,0,0,10013
Spiked Caestus,0,0,0,0,0,10000
Heavy Spiked Caestus,1,0,0,0,0,10000
Keen Spiked Caestus,2,0,0,0,0,10000
Quality Spiked Caestus,8,0,0,0,0,10000
Fire Spiked Caestus,0,0,4,0,0,10005
Flame Art Spiked Caestus,0,0,4,0,0,10000
Lightning Spiked Caestus,0,0,0,4,0,10000
Sacred Spiked Caestus,0,0,0,0,4,10000
Magic Spiked Caestus,0,4,0,0,0,10000
Cold Spiked Caestus,0,4,0,0,0,10000
Poison Spiked Caestus,0,0,0,0,0,10013
Blood Spiked Caestus,0,0,0,0,0,10013
Occult Spiked Caestus,7,0,0,0,0,10013
Grafted Dragon,0,0,4,0,0,10000
Iron Ball,0,0,0,0,0,10000
Heavy Iron Ball,1,0,0,0,0,10000
Keen Iron Ball,2,0,0,0,0,10000
Quality Iron Ball,8,0,0,0,0,10000
Fire Iron Ball,0,0,4,0,0,10005
Flame Art Iron Ball,0,0,4,0,0,10000
Lightning Iron Ball,0,0,0,4,0,10000
Sacred Iron Ball,0,0,0,0,4,10000
Magic Iron Ball,0,4,0,0,0,10000
Cold Iron Ball,0,4,0,0,0,10000
Poison Iron Ball,0,0,0,0,0,10013
Blood Iron Ball,0,0,0,0,0,10013
Occult Iron Ball,7,0,0,0,0,10013
Star Fist,0,0,0,0,0,10000
Heavy Star Fist,1,0,0,0,0,10000
Keen Star Fist,2,0,0,0,0,10000
Quality Star Fist,8,0,0,0,0,10000
Fire Star Fist,0,0,4,0,0,10005
Flame Art Star Fist,0,0,4,0,0,10000
Lightning Star Fist,0,0,0,4,0,10000
Sacred Star Fist,0,0,0,0,4,10000
Magic Star Fist,0,4,0,0,0,10000
Cold Star Fist,0,4,0,0,0,10000
Poison Star Fist,0,0,0,0,0,10013
Blood Star Fist,0,0,0,0,0,10013
Occult Star Fist,7,0,0,0,0,10013
Katar,0,0,0,0,0,10000
Heavy Katar,1,0,0,0,0,10000
Keen Katar,2,0,0,0,0,10000
Quality Katar,8,0,0,0,0,10000
Fire Katar,0,0,4,0,0,10005
Flame Art Katar,0,0,4,0,0,10000
Lightning Katar,0,0,0,4,0,10000
Sacred Katar,0,0,0,0,4,10000
Magic Katar,0,4,0,0,0,10000
Cold Katar,0,4,0,0,0,10000
Poison Katar,0,0,0,0,0,10013
Blood Katar,0,0,0,0,0,10013
Occult Katar,7,0,0,0,0,10013
Clinging Bone,7,4,0,0,0,10100
Veteran's Prosthesis,0,0,0,4,0,10000
Cipher Pata,0,0,0,0,4,10000
Hookclaws,0,0,0,0,0,10000
Heavy Hookclaws,1,0,0,0,0,10000
Keen Hookclaws,2,0,0,0,0,10000
Quality Hookclaws,8,0,0,0,0,10000
Fire Hookclaws,0,0,4,0,0,10005
Flame Art Hookclaws,0,0,4,0,0,10000
Lightning Hookclaws,0,0,0,4,0,10000
Sacred Hookclaws,0,0,0,0,4,10000
Magic Hookclaws,0,4,0,0,0,10000
Cold Hookclaws,0,4,0,0,0,10000
Poison Hookclaws,0,0,0,0,0,10013
Blood Hookclaws,0,0,0,0,0,10013
Occult Hookclaws,7,0,0,0,0,10013
Venomous Fang,0,0,0,0,0,10000
Heavy Venomous Fang,1,0,0,0,0,10000
Keen Venomous Fang,2,0,0,0,0,10000
Quality Venomous Fang,8,0,0,0,0,10000
Fire Venomous Fang,0,0,4,0,0,10005
Flame Art Venomous Fang,0,0,4,0,0,10000
Lightning Venomous Fang,0,0,0,4,0,10000
Sacred Venomous Fang,0,0,0,0,4,10000
Magic Venomous Fang,0,4,0,0,0,10000
Cold Venomous Fang,0,4,0,0,0,10000
Poison Venomous Fang,0,0,0,0,0,10013
Blood Venomous Fang,0,0,0,0,0,10013
Occult Venomous Fang,7,0,0,0,0,10013
Bloodhound Claws,0,0,0,0,0,10000
Heavy Bloodhound Claws,1,0,0,0,0,10000
Keen Bloodhound Claws,2,0,0,0,0,10000
Quality Bloodhound Claws,8,0,0,0,0,10000
Fire Bloodhound Claws,0,0,4,0,0,10005
Flame Art Bloodhound Claws,0,0,4,0,0,10000
Lightning Bloodhound Claws,0,0,0,4,0,10000
Sacred Bloodhound Claws,0,0,0,0,4,10000
Magic Bloodhound Claws,0,4,0,0,0,10000
Cold Bloodhound Claws,0,4,0,0,0,10000
Poison Bloodhound Claws,0,0,0,0,0,10013
Blood Bloodhound Claws,0,0,0,0,0,10013
Occult Bloodhound Claws,7,0,0,0,0,10013
Raptor Talons,0,0,0,0,0,10000
Heavy Raptor Talons,1,0,0,0,0,10000
Keen Raptor Talons,2,0,0,0,0,10000
Quality Raptor Talons,8,0,0,0,0,10000
Fire Raptor Talons,0,0,4,0,0,10005
Flame Art Raptor Talons,0,0,4,0,0,10000
Lightning Raptor Talons,0,0,0,4,0,10000
Sacred Raptor Talons,0,0,0,0,4,10000
Magic Raptor Talons,0,4,0,0,0,10000
Cold Raptor Talons,0,4,0,0,0,10000
Poison Raptor Talons,0,0,0,0,0,10013
Blood Raptor Talons,0,0,0,0,0,10013
Occult Raptor Talons,7,0,0,0,0,10013
Prelate's Inferno Crozier,0,0,0,0,0,10000
Prelate's Heavy Inferno Crozier,1,0,0,0,0,10000
Prelate's Keen Inferno Crozier,2,0,0,0,0,10000
Prelate's Quality Inferno Crozier,8,0,0,0,0,10000
Prelate's Fire Inferno Crozier,0,0,4,0,0,10005
Prelate's Flame Art Inferno Crozier,0,0,4,0,0,10000
Prelate's Lightning Inferno Crozier,0,0,0,4,0,10000
Prelate's Sacred Inferno Crozier,0,0,0,0,4,10000
Prelate's Magic Inferno Crozier,0,4,0,0,0,10000
Prelate's Cold Inferno Crozier,0,4,0,0,0,10000
Prelate's Poison Inferno Crozier,0,0,0,0,0,10013
Prelate's Blood Inferno Crozier,0,0,0,0,0,10013
Prelate's Occult Inferno Crozier,7,0,0,0,0,10013
Watchdog's Staff,0,0,0,0,0,10000
Great Club,0,0,0,0,0,10000
Heavy Great Club,1,0,0,0,0,10000
Keen Great Club,2,0,0,0,0,10000
Quality Great Club,8,0,0,0,0,10000
Fire Great Club,0,0,4,0,0,10005
Flame Art Great Club,0,0,4,0,0,10000
Lightning Great Club,0,0,0,4,0,10000
Sacred Great Club,0,0,0,0,4,10000
Magic Great Club,0,4,0,0,0,10000
Cold Great Club,0,4,0,0,0,10000
Poison Great Club,0,0,0,0,0,10013
Blood Great Club,0,0,0,0,0,10013
Occult Great Club,7,0,0,0,0,10013
Envoy's Greathorn,0,0,0,0,4,10000
Duelist Greataxe,0,0,0,0,0,10000
Heavy Duelist Greataxe,1,0,0,0,0,10000
Keen Duelist Greataxe,2,0,0,0,0,10000
Quality Duelist Greataxe,8,0,0,0,0,10000
Fire Duelist Greataxe,0,0,4,0,0,10005
Flame Art Duelist Greataxe,0,0,4,0,0,10000
Lightning Duelist Greataxe,0,0,0,4,0,10000
Sacred Duelist Greataxe,0,0,0,0,4,10000
Magic Duelist Greataxe,0,4,0,0,0,10000
Cold Duelist Greataxe,0,4,0,0,0,10000
Poison Duelist Greataxe,0,0,0,0,0,10013
Blood Duelist Greataxe,0,0,0,0,0,10013
Occult Duelist Greataxe,7,0,0,0,0,10013
Axe of Godfrey,0,0,0,0,0,10000
Dragon Greatclaw,0,0,0,4,0,10000
Staff of the Avatar,0,0,0,0,4,10000
Fallingstar Beast Jaw,0,4,0,0,0,10000
Ghiza's Wheel,0,0,0,0,0,10000
Giant-Crusher,0,0,0,0,0,10000
Heavy Giant-Crusher,1,0,0,0,0,10000
Keen Giant-Crusher,2,0,0,0,0,10000
Quality Giant-Crusher,8,0,0,0,0,10000
Fire Giant-Crusher,0,0,4,0,0,10005
Flame Art Giant-Crusher,0,0,4,0,0,10000
Lightning Giant-Crusher,0,0,0,4,0,10000
Sacred Giant-Crusher,0,0,0,0,4,10000
Magic Giant-Crusher,0,4,0,0,0,10000
Cold Giant-Crusher,0,4,0,0,0,10000
Poison Giant-Crusher,0,0,0,0,0,10013
Blood Giant-Crusher,0,0,0,0,0,10013
Occult Giant-Crusher,7,0,0,0,0,10013
Golem's Halberd,0,0,0,0,0,10000
Golem's Heavy Halberd,1,0,0,0,0,10000
Golem's Keen Halberd,2,0,0,0,0,10000
Golem's Quality Halberd,8,0,0,0,0,10000
Golem's Fire Halberd,0,0,4,0,0,10005
Golem's Flame Art Halberd,0,0,4,0,0,10000
Golem's Lightning Halberd,0,0,0,4,0,10000
Golem's Sacred Halberd,0,0,0,0,4,10000
Golem's Magic Halberd,0,4,0,0,0,10000
Golem's Cold Halberd,0,4,0,0,0,10000
Golem's Poison Halberd,0,0,0,0,0,10013
Golem's Blood Halberd,0,0,0,0,0,10013
Golem's Occult Halberd,7,0,0,0,0,10013
Troll's Hammer,0,0,4,0,0,10000
Rotten Staff,0,0,0,0,0,10000
Rotten Greataxe,0,0,0,0,0,10000
Heavy Rotten Greataxe,1,0,0,0,0,10000
Keen Rotten Greataxe,2,0,0,0,0,10000
Quality Rotten Greataxe,8,0,0,0,0,10000
Fire Rotten Greataxe,0,0,4,0,0,10005
Flame Art Rotten Greataxe,0,0,4,0,0,10000
Lightning Rotten Greataxe,0,0,0,4,0,10000
Sacred Rotten Greataxe,0,0,0,0,4,10000
Magic Rotten Greataxe,0,4,0,0,0,10000
Cold Rotten Greataxe,0,4,0,0,0,10000
Poison Rotten Greataxe,0,0,0,0,0,10013
Blood Rotten Greataxe,0,0,0,0,0,10013
Occult Rotten Greataxe,7,0,0,0,0,10013
Torch,0,0,4,0,0,10000
Steel-Wire Torch,0,0,4,0,0,10000
St. Trina's Torch,0,0,4,0,0,10000
Ghostflame Torch,0,4,0,0,0,10000
Beast-Repellent Torch,0,0,4,0,0,10000
Sentry's Torch,0,0,0,0,4,10000
Buckler,0,0,0,0,0,10000
Heavy Buckler,1,0,0,0,0,10000
Keen Buckler,2,0,0,0,0,10000
Quality Buckler,8,0,0,0,0,10000
Fire Buckler,0,0,4,0,0,10005
Flame Art Buckler,0,0,4,0,0,10000
Lightning Buckler,0,0,0,4,0,10000
Sacred Buckler,0,0,0,0,4,10000
Magic Buckler,0,4,0,0,0,10000
Cold Buckler,0,4,0,0,0,10000
Poison Buckler,0,0,0,0,0,10013
Bloody Buckler,0,0,0,0,0,10013
Occult Buckler,7,0,0,0,0,10013
Perfumer's Shield,0,0,0,0,0,10000
Perfumer's Heavy Shield,1,0,0,0,0,10000
Perfumer's Keen Shield,2,0,0,0,0,10000
Perfumer's Quality Shield,8,0,0,0,0,10000
Perfumer's Fire Shield,0,0,4,0,0,10005
Perfumer's Flame Art Shield,0,0,4,0,0,10000
Perfumer's Lightning Shield,0,0,0,4,0,10000
Perfumer's Sacred Shield,0,0,0,0,4,10000
Perfumer's Magic Shield,0,4,0,0,0,10000
Perfumer's Cold Shield,0,4,0,0,0,10000
Perfumer's Poison Shield,0,0,0,0,0,10013
Perfumer's Blood Shield,0,0,0,0,0,10013
Perfumer's Occult Shield,7,0,0,0,0,10013
Man-Serpent's Shield,0,0,0,0,0,10000
Man-serpent's Heavy Shield,1,0,0,0,0,10000
Man-serpent's Keen Shield,2,0,0,0,0,10000
Man-serpent's Quality Shield,8,0,0,0,0,10000
Man-serpent's Fire Shield,0,0,4,0,0,10005
Man-serpent's Flame Art Shield,0,0,4,0,0,10000
Man-serpent's Lightning Shield,0,0,0,4,0,10000
Man-serpent's Sacred Shield,0,0,0,0,4,10000
Man-serpent's Magic Shield,0,4,0,0,0,10000
Man-serpent's Cold Shield,0,4,0,0,0,10000
Man-serpent's Poison Shield,0,0,0,0,0,10013
Man-serpent's Blood Shield,0,0,0,0,0,10013
Man-serpent's Occult Shield,7,0,0,0,0,10013
Rickety Shield,0,0,0,0,0,10000
Heavy Rickety Shield,1,0,0,0,0,10000
Keen Rickety Shield,2,0,0,0,0,10000
Quality Rickety Shield,8,0,0,0,0,10000
Fire Rickety Shield,0,0,4,0,0,10005
Flame Art Rickety Shield,0,0,4,0,0,10000
Lightning Rickety Shield,0,0,0,4,0,10000
Sacred Rickety Shield,0,0,0,0,4,10000
Magic Rickety Shield,0,4,0,0,0,10000
Cold Rickety Shield,0,4,0,0,0,10000
Poison Rickety Shield,0,0,0,0,0,10013
Bloody Rickety Shield,0,0,0,0,0,10013
Occult Rickety Shield,7,0,0,0,0,10013
Pillory Shield,0,0,0,0,0,10000
Heavy Pillory Shield,1,0,0,0,0,10000
Keen Pillory Shield,2,0,0,0,0,10000
Quality Pillory Shield,8,0,0,0,0,10000
Fire Pillory Shield,0,0,4,0,0,10005
Flame Art Pillory Shield,0,0,4,0,0,10000
Lightning Pillory Shield,0,0,0,4,0,10000
Sacred Pillory Shield,0,0,0,0,4,10000
Magic Pillory Shield,0,4,0,0,0,10000
Cold Pillory Shield,0,4,0,0,0,10000
Poison Pillory Shield,0,0,0,0,0,10013
Blood Pillory Shield,0,0,0,0,0,10013
Occult Pillory Shield,7,0,0,0,0,10013
Beastman's Jar-Shield,0,0,0,0,0,10000
Beastman's Heavy Jar-Shield,1,0,0,0,0,10000
Beastman's Keen Jar-Shield,2,0,0,0,0,10000
Beastman's Quality Jar-Shield,8,0,0,0,0,10000
Beastman's Fire Jar-Shield,0,0,4,0,0,10005
Beastman's Flame Art Jar-Shield,0,0,4,0,0,10000
Beastman's Lightning Jar-Shield,0,0,0,4,0,10000
Beastman's Sacred Jar-Shield,0,0,0,0,4,10000
Beastman's Magic Jar-Shield,0,4,0,0,0,10000
Beastman's Cold Jar-Shield,0,4,0,0,0,10000
Beastman's Poison Jar-Shield,0,0,0,0,0,10013
Beastman's Blood Jar-Shield,0,0,0,0,0,10013
Beastman's Occult Jar-Shield,7,0,0,0,0,10013
Red Thorn Roundshield,0,0,0,0,0,10000
Heavy Red Thorn Roundshield,1,0,0,0,0,10000
Keen Red Thorn Roundshield,2,0,0,0,0,10000
Quality Red Thorn Roundshield,8,0,0,0,0,10000
Fire Red Thorn Roundshield,0,0,4,0,0,10005
Flame Art Red Thorn Roundshield,0,0,4,0,0,10000
Lightning Red Thorn Roundshield,0,0,0,4,0,10000
Sacred Red Thorn Roundshield,0,0,0,0,4,10000
Magic Red Thorn Roundshield,0,4,0,0,0,10000
Cold Red Thorn Roundshield,0,4,0,0,0,10000
Poison Red Thorn Roundshield,0,0,0,0,0,10013
Bloody Red Thorn Roundshield,0,0,0,0,0,10013
Occult Red Thorn Roundshield,7,0,0,0,0,10013
Scripture Wooden Shield,0,0,0,0,0,10000
Heavy Scripture Wooden Shield,1,0,0,0,0,10000
Keen Scripture Wooden Shield,2,0,0,0,0,10000
Quality Scripture Wooden Shield,8,0,0,0,0,10000
Fire Scripture Wooden Shield,0,0,4,0,0,10005
Flame Art Scripture Wooden Shield,0,0,4,0,0,10000
Lightning Scripture Wooden Shield,0,0,0,4,0,10000
Sacred Scripture Wooden Shield,0,0,0,0,4,10000
Magic Scripture Wooden Shield,0,4,0,0,0,10000
Cold Scripture Wooden Shield,0,4,0,0,0,10000
Poison Scripture Wooden Shield,0,0,0,0,0,10013
Blood Scripture Wooden Shield,0,0,0,0,0,10013
Occult Scripture Wooden Shield,7,0,0,0,0,10013
Riveted Wooden Shield,0,0,0,0,0,10000
Heavy Riveted Wooden Shield,1,0,0,0,0,10000
Keen Riveted Wooden Shield,2,0,0,0,0,10000
Quality Riveted Wooden Shield,8,0,0,0,0,10000
Fire Riveted Wooden Shield,0,0,4,0,0,10005
Flame Art Riveted Wooden Shield,0,0,4,0,0,10000
Lightning Riveted Wooden Shield,0,0,0,4,0,10000
Sacred Riveted Wooden Shield,0,0,0,0,4,10000
Magic Riveted Wooden Shield,0,4,0,0,0,10000
Cold Riveted Wooden Shield,0,4,0,0,0,10000
Poison Riveted Wooden Shield,0,0,0,0,0,10013
Blood Riveted Wooden Shield,0,0,0,0,0,10013
Occult Riveted Wooden Shield,7,0,0,0,0,10013
Blue-White Wooden Shield,0,0,0,0,0,10000
Heavy Blue-White Wooden Shield,1,0,0,0,0,10000
Keen Blue-White Wooden Shield,2,0,0,0,0,10000
Quality Blue-White Wooden Shield,8,0,0,0,0,10000
Fire Blue-White Wooden Shield,0,0,4,0,0,10005
Flame Art Blue-White Wooden Shield,0,0,4,0,0,10000
Lightning Blue-White Wooden Shield,0,0,0,4,0,10000
Sacred Blue-White Wooden Shield,0,0,0,0,4,10000
Magic Blue-White Wooden Shield,0,4,0,0,0,10000
Cold Blue-White Wooden Shield,0,4,0,0,0,10000
Poison Blue-White Wooden Shield,0,0,0,0,0,10013
Blood Blue-White Wooden Shield,0,0,0,0,0,10013
Occult Blue-White Wooden Shield,7,0,0,0,0,10013
Rift Shield,0,0,0,0,0,10000
Heavy Rift Shield,1,0,0,0,0,10000
Keen Rift Shield,2,0,0,0,0,10000
Quality Rift Shield,8,0,0,0,0,10000
Fire Rift Shield,0,0,4,0,0,10005
Flame Art Rift Shield,0,0,4,0,0,10000
Lightning Rift Shield,0,0,0,4,0,10000
Sacred Rift Shield,0,0,0,0,4,10000
Magic Rift Shield,0,4,0,0,0,10000
Cold Rift Shield,0,4,0,0,0,10000
Poison Rift Shield,0,0,0,0,0,10013
Blood Rift Shield,0,0,0,0,0,10013
Occult Rift Shield,7,0,0,0,0,10013
Iron Roundshield,0,0,0,0,0,10000
Heavy Iron Roundshield,1,0,0,0,0,10000
Keen Iron Roundshield,2,0,0,0,0,10000
Quality Iron Roundshield,8,0,0,0,0,10000
Fire Iron Roundshield,0,0,4,0,0,10005
Flame Art Iron Roundshield,0,0,4,0,0,10000
Lightning Iron Roundshield,0,0,0,4,0,10000
Sacred Iron Roundshield,0,0,0,0,4,10000
Magic Iron Roundshield,0,4,0,0,0,10000
Cold Iron Roundshield,0,4,0,0,0,10000
Poison Iron Roundshield,0,0,0,0,0,10013
Bloody Iron Roundshield,0,0,0,0,0,10013
Occult Iron Roundshield,7,0,0,0,0,10013
Gilded Iron Shield,0,0,0,0,0,10000
Gilded Heavy Iron Shield,1,0,0,0,0,10000
Gilded Keen Iron Shield,2,0,0,0,0,10000
Gilded Quality Iron Shield,8,0,0,0,0,10000
Gilded Fire Iron Shield,0,0,4,0,0,10005
Gilded Flame Art Iron Shield,0,0,4,0,0,10000
Gilded Lightning Iron Shield,0,0,0,4,0,10000
Gilded Sacred Iron Shield,0,0,0,0,4,10000
Gilded Magic Iron Shield,0,4,0,0,0,10000
Gilded Cold Iron Shield,0,4,0,0,0,10000
Gilded Poison Iron Shield,0,0,0,0,0,10013
Gilded Blood Iron Shield,0,0,0,0,0,10013
Gilded Occult Iron Shield,7,0,0,0,0,10013
Ice Crest Shield,0,0,0,0,0,10000
Heavy Ice Crest Shield,1,0,0,0,0,10000
Keen Ice Crest Shield,2,0,0,0,0,10000
Quality Ice Crest Shield,8,0,0,0,0,10000
Fire Ice Crest Shield,0,0,4,0,0,10005
Flame Art Ice Crest Shield,0,0,4,0,0,10000
Lightning Ice Crest Shield,0,0,0,4,0,10000
Sacred Ice Crest Shield,0,0,0,0,4,10000
Magic Ice Crest Shield,0,4,0,0,0,10000
Cold Ice Crest Shield,0,4,0,0,0,10000
Poison Ice Crest Shield,0,0,0,0,0,10013
Blood Ice Crest Shield,0,0,0,0,0,10013
Occult Ice Crest Shield,7,0,0,0,0,10013
Smoldering Shield,0,0,4,0,0,10000
Spiralhorn Shield,0,0,0,0,0,10000
Heavy Spiralhorn Shield,1,0,0,0,0,10000
Keen Spiralhorn Shield,2,0,0,0,0,10000
Quality Spiralhorn Shield,8,0,0,0,0,10000
Fire Spiralhorn Shield,0,0,4,0,0,10005
Flame Art Spiralhorn Shield,0,0,4,0,0,10000
Lightning Spiralhorn Shield,0,0,0,4,0,10000
Sacred Spiralhorn Shield,0,0,0,0,4,10000
Magic Spiralhorn Shield,0,4,0,0,0,10000
Cold Spiralhorn Shield,0,4,0,0,0,10000
Poison Spiralhorn Shield,0,0,0,0,0,10013
Blood Spiralhorn Shield,0,0,0,0,0,10013
Occult Spiralhorn Shield,7,0,0,0,0,10013
Coil Shield,0,0,0,0,0,10000
Kite Shield,0,0,0,0,0,10000
Heavy Kite Shield,1,0,0,0,0,10000
Keen Kite Shield,2,0,0,0,0,10000
Quality Kite Shield,8,0,0,0,0,10000
Fire Kite Shield,0,0,4,0,0,10005
Flame Art Kite Shield,0,0,4,0,0,10000
Lightning Kite Shield,0,0,0,4,0,10000
Sacred Kite Shield,0,0,0,0,4,10000
Magic Kite Shield,0,4,0,0,0,10000
Cold Kite Shield,0,4,0,0,0,10000
Poison Kite Shield,0,0,0,0,0,10013
Blood Kite Shield,0,0,0,0,0,10013
Occult Kite Shield,7,0,0,0,0,10013
Marred Leather Shield,0,0,0,0,0,10000
Marred Heavy Leather Shield,1,0,0,0,0,10000
Marred Keen Leather Shield,2,0,0,0,0,10000
Marred Quality Leather Shield,8,0,0,0,0,10000
Marred Fire Leather Shield,0,0,4,0,0,10005
Marred Flame Art Leather Shield,0,0,4,0,0,10000
Marred Lightning Leather Shield,0,0,0,4,0,10000
Marred Sacred Leather Shield,0,0,0,0,4,10000
Marred Magic Leather Shield,0,4,0,0,0,10000
Marred Cold Leather Shield,0,4,0,0,0,10000
Marred Poison Leather Shield,0,0,0,0,0,10013
Marred Blood Leather Shield,0,0,0,0,0,10013
Marred Occult Leather Shield,7,0,0,0,0,10013
Marred Wooden Shield,0,0,0,0,0,10000
Marred Heavy Wooden Shield,1,0,0,0,0,10000
Marred Keen Wooden Shield,2,0,0,0,0,10000
Marred Quality Wooden Shield,8,0,0,0,0,10000
Marred Fire Wooden Shield,0,0,4,0,0,10005
Marred Flame Art Wooden Shield,0,0,4,0,0,10000
Marred Lightning Wooden Shield,0,0,0,4,0,10000
Marred Sacred Wooden Shield,0,0,0,0,4,10000
Marred Magic Wooden Shield,0,4,0,0,0,10000
Marred Cold Wooden Shield,0,4,0,0,0,10000
Marred Poison Wooden Shield,0,0,0,0,0,10013
Marred Blood Wooden Shield,0,0,0,0,0,10013
Marred Occult Wooden Shield,7,0,0,0,0,10013
Banished Knight's Shield,0,0,0,0,0,10000
Banished Knight's Heavy Shield,1,0,0,0,0,10000
Banished Knight's Keen Shield,2,0,0,0,0,10000
Banished Knight's Quality Shield,8,0,0,0,0,10000
Banished Knight's Fire Shield,0,0,4,0,0,10005
Banished Knight's Flame Art Shield,0,0,4,0,0,10000
Banished Knight's Lightning Shield,0,0,0,4,0,10000
Banished Knight's Sacred Shield,0,0,0,0,4,10000
Banished Knight's Magic Shield,0,4,0,0,0,10000
Banished Knight's Cold Shield,0,4,0,0,0,10000
Banished Knight's Poison Shield,0,0,0,0,0,10013
Banished Knight's Blood Shield,0,0,0,0,0,10013
Banished Knight's Occult Shield,7,0,0,0,0,10013
Albinauric Shield,0,0,0,0,0,10000
Heavy Albinauric Shield,1,0,0,0,0,10000
Keen Albinauric Shield,2,0,0,0,0,10000
Quality Albinauric Shield,8,0,0,0,0,10000
Fire Albinauric Shield,0,0,4,0,0,10005
Flame Art Albinauric Shield,0,0,4,0,0,10000
Lightning Albinauric Shield,0,0,0,4,0,10000
Sacred Albinauric Shield,0,0,0,0,4,10000
Magic Albinauric Shield,0,4,0,0,0,10000
Cold Albinauric Shield,0,4,0,0,0,10000
Poison Albinauric Shield,0,0,0,0,0,10013
Blood Albinauric Shield,0,0,0,0,0,10013
Occult Albinauric Shield,7,0,0,0,0,10013
Sun Realm Shield,0,0,0,0,0,10000
Heavy Sun Realm Shield,1,0,0,0,0,10000
Keen Sun Realm Shield,2,0,0,0,0,10000
Quality Sun Realm Shield,8,0,0,0,0,10000
Fire Sun Realm Shield,0,0,4,0,0,10005
Flame Art Sun Realm Shield,0,0,4,0,0,10000
Lightning Sun Realm Shield,0,0,0,4,0,10000
Sacred Sun Realm Shield,0,0,0,0,4,10000
Magic Sun Realm Shield,0,4,0,0,0,10000
Cold Sun Realm Shield,0,4,0,0,0,10000
Poison Sun Realm Shield,0,0,0,0,0,10013
Blood Sun Realm Shield,0,0,0,0,0,10013
Occult Sun Realm Shield,7,0,0,0,0,10013
Silver Mirrorshield,0,4,0,0,0,10000
Round Shield,0,0,0,0,0,10000
Heavy Round Shield,1,0,0,0,0,10000
Keen Round Shield,2,0,0,0,0,10000
Quality Round Shield,8,0,0,0,0,10000
Fire Round Shield,0,0,4,0,0,10005
Flame Art Round Shield,0,0,4,0,0,10000
Lightning Round Shield,0,0,0,4,0,10000
Sacred Round Shield,0,0,0,0,4,10000
Magic Round Shield,0,4,0,0,0,10000
Cold Round Shield,0,4,0,0,0,10000
Poison Round Shield,0,0,0,0,0,10013
Blood Round Shield,0,0,0,0,0,10013
Occult Round Shield,7,0,0,0,0,10013
Scorpion Kite Shield,0,0,0,0,0,10000
Heavy Scorpion Kite Shield,1,0,0,0,0,10000
Keen Scorpion Kite Shield,2,0,0,0,0,10000
Quality Scorpion Kite Shield,8,0,0,0,0,10000
Fire Scorpion Kite Shield,0,0,4,0,0,10005
Flame Art Scorpion Kite Shield,0,0,4,0,0,10000
Lightning Scorpion Kite Shield,0,0,0,4,0,10000
Sacred Scorpion Kite Shield,0,0,0,0,4,10000
Magic Scorpion Kite Shield,0,4,0,0,0,10000
Cold Scorpion Kite Shield,0,4,0,0,0,10000
Poison Scorpion Kite Shield,0,0,0,0,0,10013
Blood Scorpion Kite Shield,0,0,0,0,0,10013
Occult Scorpion Kite Shield,7,0,0,0,0,10013
Twinbird Kite Shield,0,0,0,0,0,10000
Heavy Twinbird Kite Shield,1,0,0,0,0,10000
Keen Twinbird Kite Shield,2,0,0,0,0,10000
Quality Twinbird Kite Shield,8,0,0,0,0,10000
Fire Twinbird Kite Shield,0,0,4,0,0,10005
Flame Art Twinbird Kite Shield,0,0,4,0,0,10000
Lightning Twinbird Kite Shield,0,0,0,4,0,10000
Sacred Twinbird Kite Shield,0,0,0,0,4,10000
Magic Twinbird Kite Shield,0,4,0,0,0,10000
Cold Twinbird Kite Shield,0,4,0,0,0,10000
Poison Twinbird Kite Shield,0,0,0,0,0,10013
Blood Twinbird Kite Shield,0,0,0,0,0,10013
Occult Twinbird Kite Shield,7,0,0,0,0,10013
Blue-Gold Kite Shield,0,0,0,0,0,10000
Heavy Blue-Gold Kite Shield,1,0,0,0,0,10000
Keen Blue-Gold Kite Shield,2,0,0,0,0,10000
Quality Blue-Gold Kite Shield,8,0,0,0,0,10000
Fire Blue-Gold Kite Shield,0,0,4,0,0,10005
Flame Art Blue-Gold Kite Shield,0,0,4,0,0,10000
Lightning Blue-Gold Kite Shield,0,0,0,4,0,10000
Sacred Blue-Gold Kite Shield,0,0,0,0,4,10000
Magic Blue-Gold Kite Shield,0,4,0,0,0,10000
Cold Blue-Gold Kite Shield,0,4,0,0,0,10000
Poison Blue-Gold Kite Shield,0,0,0,0,0,10013
Blood Blue-Gold Kite Shield,0,0,0,0,0,10013
Occult Blue-Gold Kite Shield,7,0,0,0,0,10013
Brass Shield,0,0,0,0,0,10000
Heavy Brass Shield,1,0,0,0,0,10000
Keen Brass Shield,2,0,0,0,0,10000
Quality Brass Shield,8,0,0,0,0,10000
Fire Brass Shield,0,0,4,0,0,10005
Flame Art Brass Shield,0,0,4,0,0,10000
Lightning Brass Shield,0,0,0,4,0,10000
Sacred Brass Shield,0,0,0,0,4,10000
Magic Brass Shield,0,4,0,0,0,10000
Cold Brass Shield,0,4,0,0,0,10000
Poison Brass Shield,0,0,0,0,0,10013
Blood Brass Shield,0,0,0,0,0,10013
Occult Brass Shield,7,0,0,0,0,10013
Great Turtle Shell,0,0,0,0,0,10000
Heavy Great Turtle Shell,1,0,0,0,0,10000
Keen Great Turtle Shell,2,0,0,0,0,10000
Quality Great Turtle Shell,8,0,0,0,0,10000
Fire Great Turtle Shell,0,0,4,0,0,10005
Flame Art Great Turtle Shell,0,0,4,0,0,10000
Lightning Great Turtle Shell,0,0,0,4,0,10000
Sacred Great Turtle Shell,0,0,0,0,4,10000
Magic Great Turtle Shell,0,4,0,0,0,10000
Cold Great Turtle Shell,0,4,0,0,0,10000
Poison Great Turtle Shell,0,0,0,0,0,10013
Blood Great Turtle Shell,0,0,0,0,0,10013
Occult Great Turtle Shell,7,0,0,0,0,10013
Shield of the Guilty,0,0,0,0,0,10000
Heavy Shield of the Guilty,1,0,0,0,0,10000
Keen Shield of the Guilty,2,0,0,0,0,10000
Quality Shield of the Guilty,8,0,0,0,0,10000
Fire Shield of the Guilty,0,0,4,0,0,10005
Flame Art Shield of the Guilty,0,0,4,0,0,10000
Lightning Shield of the Guilty,0,0,0,4,0,10000
Sacred Shield of the Guilty,0,0,0,0,4,10000
Magic Shield of the Guilty,0,4,0,0,0,10000
Cold Shield of the Guilty,0,4,0,0,0,10000
Poison Shield of the Guilty,0,0,0,0,0,10013
Blood Shield of the Guilty,0,0,0,0,0,10013
Occult Shield of the Guilty,7,0,0,0,0,10013
Carian Knight's Shield,0,4,0,0,0,10000
Carian Knight's Heavy Shield,1,4,0,0,0,10000
Carian Knight's Keen Shield,2,4,0,0,0,10000
Carian Knight's Quality Shield,8,4,0,0,0,10000
Carian Knight's Fire Shield,0,4,4,0,0,10005
Carian Knight's Flame Art Shield,0,4,4,0,0,10000
Carian Knight's Lightning Shield,0,4,0,4,0,10000
Carian Knight's Sacred Shield,0,4,0,0,4,10000
Carian Knight's Magic Shield,0,4,0,0,0,10000
Carian Knight's Cold Shield,0,4,0,0,0,10000
Carian Knight's Poison Shield,0,4,0,0,0,10013
Carian Knight's Bloody Shield,0,4,0,0,0,10013
Carian Knight's Occult Shield,7,4,0,0,0,10013
Large Leather Shield,0,0,0,0,0,10000
Heavy Large Leather Shield,1,0,0,0,0,10000
Keen Large Leather Shield,2,0,0,0,0,10000
Quality Large Leather Shield,8,0,0,0,0,10000
Fire Large Leather Shield,0,0,4,0,0,10005
Flame Art Large Leather Shield,0,0,4,0,0,10000
Lightning Large Leather Shield,0,0,0,4,0,10000
Sacred Large Leather Shield,0,0,0,0,4,10000
Magic Large Leather Shield,0,4,0,0,0,10000
Cold Large Leather Shield,0,4,0,0,0,10000
Poison Large Leather Shield,0,0,0,0,0,10013
Bloody Large Leather Shield,0,0,0,0,0,10013
Occult Large Leather Shield,7,0,0,0,0,10013
Horse Crest Wooden Shield,0,0,0,0,0,10000
Heavy Horse Crest Wooden Shield,1,0,0,0,0,10000
Keen Horse Crest Wooden Shield,2,0,0,0,0,10000
Quality Horse Crest Wooden Shield,8,0,0,0,0,10000
Fire Horse Crest Wooden Shield,0,0,4,0,0,10005
Flame Art Horse Crest Wooden Shield,0,0,4,0,0,10000
Lightning Horse Crest Wooden Shield,0,0,0,4,0,10000
Sacred Horse Crest Wooden Shield,0,0,0,0,4,10000
Magic Horse Crest Wooden Shield,0,4,0,0,0,10000
Cold Horse Crest Wooden Shield,0,4,0,0,0,10000
Poison Horse Crest Wooden Shield,0,0,0,0,0,10013
Blood Horse Crest Wooden Shield,0,0,0,0,0,10013
Occult Horse Crest Wooden Shield,7,0,0,0,0,10013
Candletree Wooden Shield,0,0,0,0,0,10000
Heavy Candletree Wooden Shield,1,0,0,0,0,10000
Keen Candletree Wooden Shield,2,0,0,0,0,10000
Quality Candletree Wooden Shield,8,0,0,0,0,10000
Fire Candletree Wooden Shield,0,0,4,0,0,10005
Flame Art Candletree Wooden Shield,0,0,4,0,0,10000
Lightning Candletree Wooden Shield,0,0,0,4,0,10000
Sacred Candletree Wooden Shield,0,0,0,0,4,10000
Magic Candletree Wooden Shield,0,4,0,0,0,10000
Cold Candletree Wooden Shield,0,4,0,0,0,10000
Poison Candletree Wooden Shield,0,0,0,0,0,10013
Blood Candletree Wooden Shield,0,0,0,0,0,10013
Occult Candletree Wooden Shield,7,0,0,0,0,10013
Flame Crest Wooden Shield,0,0,0,0,0,10000
Heavy Flame Crest Wooden Shield,1,0,0,0,0,10000
Keen Flame Crest Wooden Shield,2,0,0,0,0,10000
Quality Flame Crest Wooden Shield,8,0,0,0,0,10000
Fire Flame Crest Wooden Shield,0,0,4,0,0,10005
Flame Art Flame Crest Wooden Shield,0,0,4,0,0,10000
Lightning Flame Crest Wooden Shield,0,0,0,4,0,10000
Sacred Flame Crest Wooden Shield,0,0,0,0,4,10000
Magic Flame Crest Wooden Shield,0,4,0,0,0,10000
Cold Flame Crest Wooden Shield,0,4,0,0,0,10000
Poison Flame Crest Wooden Shield,0,0,0,0,0,10013
Blood Flame Crest Wooden Shield,0,0,0,0,0,10013
Occult Flame Crest Wooden Shield,7,0,0,0,0,10013
Hawk Crest Wooden Shield,0,0,0,0,0,10000
Heavy Hawk Crest Wooden Shield,1,0,0,0,0,10000
Keen Hawk Crest Wooden Shield,2,0,0,0,0,10000
Quality Hawk Crest Wooden Shield,8,0,0,0,0,10000
Fire Hawk Crest Wooden Shield,0,0,4,0,0,10005
Flame Art Hawk Crest Wooden Shield,0,0,4,0,0,10000
Lightning Hawk Crest Wooden Shield,0,0,0,4,0,10000
Sacred Hawk Crest Wooden Shield,0,0,0,0,4,10000
Magic Hawk Crest Wooden Shield,0,4,0,0,0,10000
Cold Hawk Crest Wooden Shield,0,4,0,0,0,10000
Poison Hawk Crest Wooden Shield,0,0,0,0,0,10013
Blood Hawk Crest Wooden Shield,0,0,0,0,0,10013
Occult Hawk Crest Wooden Shield,7,0,0,0,0,10013
Beast Crest Heater Shield,0,0,0,0,0,10000
Heavy Beast Crest Heater Shield,1,0,0,0,0,10000
Keen Beast Crest Heater Shield,2,0,0,0,0,10000
Quality Beast Crest Heater Shield,8,0,0,0,0,10000
Fire Beast Crest Heater Shield,0,0,4,0,0,10005
Flame Art Beast Crest Heater Shield,0,0,4,0,0,10000
Lightning Beast Crest Heater Shield,0,0,0,4,0,10000
Sacred Beast Crest Heater Shield,0,0,0,0,4,10000
Magic Beast Crest Heater Shield,0,4,0,0,0,10000
Cold Beast Crest Heater Shield,0,4,0,0,0,10000
Poison Beast Crest Heater Shield,0,0,0,0,0,10013
Blood Beast Crest Heater Shield,0,0,0,0,0,10013
Occult Beast Crest Heater Shield,7,0,0,0,0,10013
Red Crest Heater Shield,0,0,0,0,0,10000
Heavy Red Crest Heater Shield,1,0,0,0,0,10000
Keen Red Crest Heater Shield,2,0,0,0,0,10000
Quality Red Crest Heater Shield,8,0,0,0,0,10000
Fire Red Crest Heater Shield,0,0,4,0,0,10005
Flame Art Red Crest Heater Shield,0,0,4,0,0,10000
Lightning Red Crest Heater Shield,0,0,0,4,0,10000
Sacred Red Crest Heater Shield,0,0,0,0,4,10000
Magic Red Crest Heater Shield,0,4,0,0,0,10000
Cold Red Crest Heater Shield,0,4,0,0,0,10000
Poison Red Crest Heater Shield,0,0,0,0,0,10013
Blood Red Crest Heater Shield,0,0,0,0,0,10013
Occult Red Crest Heater Shield,7,0,0,0,0,10013
Blue Crest Heater Shield,0,0,0,0,0,10000
Heavy Blue Crest Heater Shield,1,0,0,0,0,10000
Keen Blue Crest Heater Shield,2,0,0,0,0,10000
Quality Blue Crest Heater Shield,8,0,0,0,0,10000
Fire Blue Crest Heater Shield,0,0,4,0,0,10005
Flame Art Blue Crest Heater Shield,0,0,4,0,0,10000
Lightning Blue Crest Heater Shield,0,0,0,4,0,10000
Sacred Blue Crest Heater Shield,0,0,0,0,4,10000
Magic Blue Crest Heater Shield,0,4,0,0,0,10000
Cold Blue Crest Heater Shield,0,4,0,0,0,10000
Poison Blue Crest Heater Shield,0,0,0,0,0,10013
Blood Blue Crest Heater Shield,0,0,0,0,0,10013
Occult Blue Crest Heater Shield,7,0,0,0,0,10013
Eclipse Crest Heater Shield,0,0,0,0,0,10000
Heavy Eclipse Crest Heater Shield,1,0,0,0,0,10000
Keen Eclipse Crest Heater Shield,2,0,0,0,0,10000
Quality Eclipse Crest Heater Shield,8,0,0,0,0,10000
Fire Eclipse Crest Heater Shield,0,0,4,0,0,10005
Flame Art Eclipse Crest Heater Shield,0,0,4,0,0,10000
Lightning Eclipse Crest Heater Shield,0,0,0,4,0,10000
Sacred Eclipse Crest Heater Shield,0,0,0,0,4,10000
Magic Eclipse Crest Heater Shield,0,4,0,0,0,10000
Cold Eclipse Crest Heater Shield,0,4,0,0,0,10000
Poison Eclipse Crest Heater Shield,0,0,0,0,0,10013
Blood Eclipse Crest Heater Shield,0,0,0,0,0,10013
Occult Eclipse Crest Heater Shield,7,0,0,0,0,10013
Inverted Hawk Heater Shield,0,0,0,0,0,10000
Heavy Inverted Hawk Heater Shield,1,0,0,0,0,10000
Keen Inverted Hawk Heater Shield,2,0,0,0,0,10000
Quality Inverted Hawk Heater Shield,8,0,0,0,0,10000
Fire Inverted Hawk Heater Shield,0,0,4,0,0,10005
Flame Art Inverted Hawk Heater Shield,0,0,4,0,0,10000
Lightning Inverted Hawk Heater Shield,0,0,0,4,0,10000
Sacred Inverted Hawk Heater Shield,0,0,0,0,4,10000
Magic Inverted Hawk Heater Shield,0,4,0,0,0,10000
Cold Inverted Hawk Heater Shield,0,4,0,0,0,10000
Poison Inverted Hawk Heater Shield,0,0,0,0,0,10013
Blood Inverted Hawk Heater Shield,0,0,0,0,0,10013
Occult Inverted Hawk Heater Shield,7,0,0,0,0,10013
Heater Shield,0,0,0,0,0,10000
Heavy Heater Shield,1,0,0,0,0,10000
Keen Heater Shield,2,0,0,0,0,10000
Quality Heater Shield,8,0,0,0,0,10000
Fire Heater Shield,0,0,4,0,0,10005
Flame Art Heater Shield,0,0,4,0,0,10000
Lightning Heater Shield,0,0,0,4,0,10000
Sacred Heater Shield,0,0,0,0,4,10000
Magic Heater Shield,0,4,0,0,0,10000
Cold Heater Shield,0,4,0,0,0,10000
Poison Heater Shield,0,0,0,0,0,10013
Blood Heater Shield,0,0,0,0,0,10013
Occult Heater Shield,7,0,0,0,0,10013
Black Leather Shield,0,0,0,0,0,10000
Heavy Black Leather Shield,1,0,0,0,0,10000
Keen Black Leather Shield,2,0,0,0,0,10000
Quality Black Leather Shield,8,0,0,0,0,10000
Fire Black Leather Shield,0,0,4,0,0,10005
Flame Art Black Leather Shield,0,0,4,0,0,10000
Lightning Black Leather Shield,0,0,0,4,0,10000
Sacred Black Leather Shield,0,0,0,0,4,10000
Magic Black Leather Shield,0,4,0,0,0,10000
Cold Black Leather Shield,0,4,0,0,0,10000
Poison Black Leather Shield,0,0,0,0,0,10013
Blood Black Leather Shield,0,0,0,0,0,10013
Occult Black Leather Shield,7,0,0,0,0,10013
Dragon Towershield,0,0,0,0,0,10000
Heavy Dragon Towershield,1,0,0,0,0,10000
Keen Dragon Towershield,2,0,0,0,0,10000
Quality Dragon Towershield,8,0,0,0,0,10000
Fire Dragon Towershield,0,0,4,0,0,10005
Flame Art Dragon Towershield,0,0,4,0,0,10000
Lightning Dragon Towershield,0,0,0,4,0,10000
Sacred Dragon Towershield,0,0,0,0,4,10000
Magic Dragon Towershield,0,4,0,0,0,10000
Cold Dragon Towershield,0,4,0,0,0,10000
Poison Dragon Towershield,0,0,0,0,0,10013
Blood Dragon Towershield,0,0,0,0,0,10013
Occult Dragon Towershield,7,0,0,0,0,10013
Distinguished Greatshield,0,0,0,0,0,10000
Distinguished Heavy Greatshield,1,0,0,0,0,10000
Distinguished Keen Greatshield,2,0,0,0,0,10000
Distinguished Quality Greatshield,8,0,0,0,0,10000
Distinguished Fire Greatshield,0,0,4,0,0,10005
Distinguished Flame Art Greatshield,0,0,4,0,0,10000
Distinguished Lightning Greatshield,0,0,0,4,0,10000
Distinguished Sacred Greatshield,0,0,0,0,4,10000
Distinguished Magic Greatshield,0,4,0,0,0,10000
Distinguished Cold Greatshield,0,4,0,0,0,10000
Distinguished Poison Greatshield,0,0,0,0,0,10013
Distinguished Blood Greatshield,0,0,0,0,0,10013
Distinguished Occult Greatshield,7,0,0,0,0,10013
Crucible Hornshield,0,0,0,0,0,10000
Dragonclaw Shield,0,0,0,4,0,10000
Briar Greatshield,0,0,0,0,0,10000
Heavy Briar Greatshield,1,0,0,0,0,10000
Keen Briar Greatshield,2,0,0,0,0,10000
Quality Briar Greatshield,8,0,0,0,0,10000
Fire Briar Greatshield,0,0,4,0,0,10005
Flame Art Briar Greatshield,0,0,4,0,0,10000
Lightning Briar Greatshield,0,0,0,4,0,10000
Sacred Briar Greatshield,0,0,0,0,4,10000
Magic Briar Greatshield,0,4,0,0,0,10000
Cold Briar Greatshield,0,4,0,0,0,10000
Poison Briar Greatshield,0,0,0,0,0,10013
Blood Briar Greatshield,0,0,0,0,0,10013
Occult Briar Greatshield,7,0,0,0,0,10013
Erdtree Greatshield,0,0,0,0,4,10000
Golden Beast Crest Shield,0,0,0,0,0,10000
Heavy Golden Beast Crest Shield,1,0,0,0,0,10000
Keen Golden Beast Crest Shield,2,0,0,0,0,10000
Quality Golden Beast Crest Shield,8,0,0,0,0,10000
Fire Golden Beast Crest Shield,0,0,4,0,0,10005
Flame Art Golden Beast Crest Shield,0,0,4,0,0,10000
Lightning Golden Beast Crest Shield,0,0,0,4,0,10000
Sacred Golden Beast Crest Shield,0,0,0,0,4,10000
Magic Golden Beast Crest Shield,0,4,0,0,0,10000
Cold Golden Beast Crest Shield,0,4,0,0,0,10000
Poison Golden Beast Crest Shield,0,0,0,0,0,10013
Blood Golden Beast Crest Shield,0,0,0,0,0,10013
Occult Golden Beast Crest Shield,7,0,0,0,0,10013
Jellyfish Shield,0,0,0,0,0,10000
Fingerprint Stone Shield,0,0,0,0,0,10000
Heavy Fingerprint Stone Shield,1,0,0,0,0,10000
Keen Fingerprint Stone Shield,2,0,0,0,0,10000
Quality Fingerprint Stone Shield,8,0,0,0,0,10000
Fire Fingerprint Stone Shield,0,0,4,0,0,10005
Flame Art Fingerprint Stone Shield,0,0,4,0,0,10000
Lightning Fingerprint Stone Shield,0,0,0,4,0,10000
Sacred Fingerprint Stone Shield,0,0,0,0,4,10000
Magic Fingerprint Stone Shield,0,4,0,0,0,10000
Cold Fingerprint Stone Shield,0,4,0,0,0,10000
Poison Fingerprint Stone Shield,0,0,0,0,0,10013
Blood Fingerprint Stone Shield,0,0,0,0,0,10013
Occult Fingerprint Stone Shield,7,0,0,0,0,10013
Icon Shield,0,0,0,0,0,10000
One-Eyed Shield,0,0,0,0,0,10000
Visage Shield,0,0,0,0,0,10000
Spiked Palisade Shield,0,0,0,0,0,10000
Heavy Spiked Palisade Shield,1,0,0,0,0,10000
Keen Spiked Palisade Shield,2,0,0,0,0,10000
Quality Spiked Palisade Shield,8,0,0,0,0,10000
Fire Spiked Palisade Shield,0,0,4,0,0,10005
Flame Art Spiked Palisade Shield,0,0,4,0,0,10000
Lightning Spiked Palisade Shield,0,0,0,4,0,10000
Sacred Spiked Palisade Shield,0,0,0,0,4,10000
Magic Spiked Palisade Shield,0,4,0,0,0,10000
Cold Spiked Palisade Shield,0,4,0,0,0,10000
Poison Spiked Palisade Shield,0,0,0,0,0,10013
Blood Spiked Palisade Shield,0,0,0,0,0,10013
Occult Spiked Palisade Shield,7,0,0,0,0,10013
Manor Towershield,0,0,0,0,0,10000
Heavy Manor Towershield,1,0,0,0,0,10000
Keen Manor Towershield,2,0,0,0,0,10000
Quality Manor Towershield,8,0,0,0,0,10000
Fire Manor Towershield,0,0,4,0,0,10005
Flame Art Manor Towershield,0,0,4,0,0,10000
Lightning Manor Towershield,0,0,0,4,0,10000
Sacred Manor Towershield,0,0,0,0,4,10000
Magic Manor Towershield,0,4,0,0,0,10000
Cold Manor Towershield,0,4,0,0,0,10000
Poison Manor Towershield,0,0,0,0,0,10013
Blood Manor Towershield,0,0,0,0,0,10013
Occult Manor Towershield,7,0,0,0,0,10013
Crossed-Tree Towershield,0,0,0,0,0,10000
Heavy Crossed-Tree Towershield,1,0,0,0,0,10000
Keen Crossed-Tree Towershield,2,0,0,0,0,10000
Quality Crossed-Tree Towershield,8,0,0,0,0,10000
Fire Crossed-Tree Towershield,0,0,4,0,0,10005
Flame Art Crossed-Tree Towershield,0,0,4,0,0,10000
Lightning Crossed-Tree Towershield,0,0,0,4,0,10000
Sacred Crossed-Tree Towershield,0,0,0,0,4,10000
Magic Crossed-Tree Towershield,0,4,0,0,0,10000
Cold Crossed-Tree Towershield,0,4,0,0,0,10000
Poison Crossed-Tree Towershield,0,0,0,0,0,10013
Blood Crossed-Tree Towershield,0,0,0,0,0,10013
Occult Crossed-Tree Towershield,7,0,0,0,0,10013
Inverted Hawk Towershield,0,0,0,0,0,10000
Heavy Inverted Hawk Towershield,1,0,0,0,0,10000
Keen Inverted Hawk Towershield,2,0,0,0,0,10000
Quality Inverted Hawk Towershield,8,0,0,0,0,10000
Fire Inverted Hawk Towershield,0,0,4,0,0,10005
Flame Art Inverted Hawk Towershield,0,0,4,0,0,10000
Lightning Inverted Hawk Towershield,0,0,0,4,0,10000
Sacred Inverted Hawk Towershield,0,0,0,0,4,10000
Magic Inverted Hawk Towershield,0,4,0,0,0,10000
Cold Inverted Hawk Towershield,0,4,0,0,0,10000
Poison Inverted Hawk Towershield,0,0,0,0,0,10013
Blood Inverted Hawk Towershield,0,0,0,0,0,10013
Occult Inverted Hawk Towershield,7,0,0,0,0,10013
Ant's Skull Plate,0,0,0,0,0,10000
Redmane Greatshield,0,0,0,0,0,10000
Heavy Redmane Greatshield,1,0,0,0,0,10000
Keen Redmane Greatshield,2,0,0,0,0,10000
Quality Redmane Greatshield,8,0,0,0,0,10000
Fire Redmane Greatshield,0,0,4,0,0,10005
Flame Art Redmane Greatshield,0,0,4,0,0,10000
Lightning Redmane Greatshield,0,0,0,4,0,10000
Sacred Redmane Greatshield,0,0,0,0,4,10000
Magic Redmane Greatshield,0,4,0,0,0,10000
Cold Redmane Greatshield,0,4,0,0,0,10000
Poison Redmane Greatshield,0,0,0,0,0,10013
Blood Redmane Greatshield,0,0,0,0,0,10013
Occult Redmane Greatshield,7,0,0,0,0,10013
Eclipse Crest Greatshield,0,0,0,0,0,10000
Heavy Eclipse Crest Greatshield,1,0,0,0,0,10000
Keen Eclipse Crest Greatshield,2,0,0,0,0,10000
Quality Eclipse Crest Greatshield,8,0,0,0,0,10000
Fire Eclipse Crest Greatshield,0,0,4,0,0,10005
Flame Art Eclipse Crest Greatshield,0,0,4,0,0,10000
Lightning Eclipse Crest Greatshield,0,0,0,4,0,10000
Sacred Eclipse Crest Greatshield,0,0,0,0,4,10000
Magic Eclipse Crest Greatshield,0,4,0,0,0,10000
Cold Eclipse Crest Greatshield,0,4,0,0,0,10000
Poison Eclipse Crest Greatshield,0,0,0,0,0,10013
Blood Eclipse Crest Greatshield,0,0,0,0,0,10013
Occult Eclipse Crest Greatshield,7,0,0,0,0,10013
Cuckoo Greatshield,0,0,0,0,0,10000
Heavy Cuckoo Greatshield,1,0,0,0,0,10000
Keen Cuckoo Greatshield,2,0,0,0,0,10000
Quality Cuckoo Greatshield,8,0,0,0,0,10000
Fire Cuckoo Greatshield,0,0,4,0,0,10005
Flame Art Cuckoo Greatshield,0,0,4,0,0,10000
Lightning Cuckoo Greatshield,0,0,0,4,0,10000
Sacred Cuckoo Greatshield,0,0,0,0,4,10000
Magic Cuckoo Greatshield,0,4,0,0,0,10000
Cold Cuckoo Greatshield,0,4,0,0,0,10000
Poison Cuckoo Greatshield,0,0,0,0,0,10013
Blood Cuckoo Greatshield,0,0,0,0,0,10013
Occult Cuckoo Greatshield,7,0,0,0,0,10013
Golden Greatshield,0,0,0,0,0,10000
Heavy Golden Greatshield,1,0,0,0,0,10000
Keen Golden Greatshield,2,0,0,0,0,10000
Quality Golden Greatshield,8,0,0,0,0,10000
Fire Golden Greatshield,0,0,4,0,0,10005
Flame Art Golden Greatshield,0,0,4,0,0,10000
Lightning Golden Greatshield,0,0,0,4,0,10000
Sacred Golden Greatshield,0,0,0,0,4,10000
Magic Golden Greatshield,0,4,0,0,0,10000
Cold Golden Greatshield,0,4,0,0,0,10000
Poison Golden Greatshield,0,0,0,0,0,10013
Blood Golden Greatshield,0,0,0,0,0,10013
Occult Golden Greatshield,7,0,0,0,0,10013
Gilded Greatshield,0,0,0,0,0,10000
Heavy Gilded Greatshield,1,0,0,0,0,10000
Keen Gilded Greatshield,2,0,0,0,0,10000
Quality Gilded Greatshield,8,0,0,0,0,10000
Fire Gilded Greatshield,0,0,4,0,0,10005
Flame Art Gilded Greatshield,0,0,4,0,0,10000
Lightning Gilded Greatshield,0,0,0,4,0,10000
Sacred Gilded Greatshield,0,0,0,0,4,10000
Magic Gilded Greatshield,0,4,0,0,0,10000
Cold Gilded Greatshield,0,4,0,0,0,10000
Poison Gilded Greatshield,0,0,0,0,0,10013
Blood Gilded Greatshield,0,0,0,0,0,10013
Occult Gilded Greatshield,7,0,0,0,0,10013
Haligtree Crest Greatshield,0,0,0,0,0,10000
Heavy Haligtree Crest Greatshield,1,0,0,0,0,10000
Keen Haligtree Crest Greatshield,2,0,0,0,0,10000
Quality Haligtree Crest Greatshield,8,0,0,0,0,10000
Fire Haligtree Crest Greatshield,0,0,4,0,0,10005
Flame Art Haligtree Crest Greatshield,0,0,4,0,0,10000
Lightning Haligtree Crest Greatshield,0,0,0,4,0,10000
Sacred Haligtree Crest Greatshield,0,0,0,0,4,10000
Magic Haligtree Crest Greatshield,0,4,0,0,0,10000
Cold Haligtree Crest Greatshield,0,4,0,0,0,10000
Poison Haligtree Crest Greatshield,0,0,0,0,0,10013
Blood Haligtree Crest Greatshield,0,0,0,0,0,10013
Occult Haligtree Crest Greatshield,7,0,0,0,0,10013
Wooden Greatshield,0,0,0,0,0,10000
Heavy Wooden Greatshield,1,0,0,0,0,10000
Keen Wooden Greatshield,2,0,0,0,0,10000
Quality Wooden Greatshield,8,0,0,0,0,10000
Fire Wooden Greatshield,0,0,4,0,0,10005
Flame Art Wooden Greatshield,0,0,4,0,0,10000
Lightning Wooden Greatshield,0,0,0,4,0,10000
Sacred Wooden Greatshield,0,0,0,0,4,10000
Magic Wooden Greatshield,0,4,0,0,0,10000
Cold Wooden Greatshield,0,4,0,0,0,10000
Poison Wooden Greatshield,0,0,0,0,0,10013
Blood Wooden Greatshield,0,0,0,0,0,10013
Occult Wooden Greatshield,7,0,0,0,0,10013
Lordsworn's Shield,0,0,0,0,0,10000
Heavy Lordsworn's Shield,1,0,0,0,0,10000
Keen Lordsworn's Shield,2,0,0,0,0,10000
Quality Lordsworn's Shield,8,0,0,0,0,10000
Fire Lordsworn's Shield,0,0,4,0,0,10005
Flame Art Lordsworn's Shield,0,0,4,0,0,10000
Lightning Lordsworn's Shield,0,0,0,4,0,10000
Sacred Lordsworn's Shield,0,0,0,0,4,10000
Magic Lordsworn's Shield,0,4,0,0,0,10000
Cold Lordsworn's Shield,0,4,0,0,0,10000
Poison Lordsworn's Shield,0,0,0,0,0,10013
Blood Lordsworn's Shield,0,0,0,0,0,10013
Occult Lordsworn's Shield,7,0,0,0,0,10013
Glintstone Staff,16,16,16,16,16,20000
Crystal Staff,15,15,15,15,15,20000
Gelmir Glintstone Staff,12,12,12,12,12,20010
Demi-Human Queen's Staff,14,14,14,14,14,20000
Carian Regal Scepter,15,15,15,15,15,20000
Digger's Staff,16,16,16,16,16,20000
Astrologer's Staff,16,16,16,16,16,20000
Carian Glintblade Staff,16,16,16,16,16,20000
Prince of Death's Staff,15,15,15,15,15,20010
Albinauric Staff,12,12,12,12,12,20030
Academy Glintstone Staff,16,16,16,16,16,20000
Carian Glintstone Staff,16,16,16,16,16,20000
Azur's Glintstone Staff,15,15,15,15,15,20000
Lusat's Glintstone Staff,15,15,15,15,15,20000
Meteorite Staff,16,16,16,16,16,20000
Staff of the Guilty,16,16,16,16,16,20020
Rotten Crystal Staff,15,15,15,15,15,20000
Staff of Loss,15,15,15,15,15,20000
Finger Seal,16,16,16,16,16,30000
Godslayer's Seal,16,16,16,16,16,30000
Giant's Seal,16,16,16,16,16,30000
Gravel Stone Seal,16,16,16,16,16,30000
Clawmark Seal,12,12,12,12,12,30020
Golden Order Seal,12,12,12,12,12,30010
Erdtree Seal,15,15,15,15,15,30000
Dragon Communion Seal,12,12,12,12,12,30030
Frenzied Flame Seal,12,12,12,12,12,30040
Shortbow,0,0,0,0,0,10000
Misbegotten Shortbow,0,0,0,0,0,10000
Red Branch Shortbow,0,0,0,0,0,10000
Harp Bow,0,0,0,0,0,10000
Composite Bow,0,0,0,0,0,10000
Longbow,0,0,0,0,0,10000
Albinauric Bow,0,0,0,0,0,10000
Horn Bow,0,0,0,0,0,10000
Erdtree Bow,0,0,0,0,0,10000
Serpent Bow,0,0,0,0,0,10000
Pulley Bow,0,0,0,0,0,10000
Black Bow,0,0,0,0,0,10000
Lion Greatbow,0,0,0,0,0,10000
Golem Greatbow,0,0,0,0,0,10000
Erdtree Greatbow,0,0,0,0,0,10000
Greatbow,0,0,0,0,0,10000
Soldier's Crossbow,0,0,0,0,0,10000
Light Crossbow,0,0,0,0,0,10000
Heavy Crossbow,0,0,0,0,0,10000
Pulley Crossbow,0,0,0,0,0,10000
Full Moon Crossbow,0,0,0,0,0,10000
Arbalest,0,0,0,0,0,10000
Crepus's Black-Key Crossbow,0,0,0,0,0,10000
Hand Ballista,0,0,0,0,0,10000
Jar Cannon,0,0,0,0,0,10000
`;