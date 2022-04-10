// Don't leave any white space after the first ` otherwise the headers won't be read properly
const extraDataCSV =
`Name,Weapon Name,Affinity (Dropdown),Affinity,Max Upgrade,Required (Str),Required (Dex),Required (Int),Required (Fai),Required (Arc),Physical Damage Type,Weight,Base Poise Attack,Weapon Type
Dagger,Dagger,None,None,25,5,9,0,0,0,Slash/Pierce,1.5,3,Dagger
Heavy Dagger,Dagger,Heavy,Heavy,25,5,9,0,0,0,Slash/Pierce,1.5,3,Dagger
Keen Dagger,Dagger,Keen,Keen,25,5,9,0,0,0,Slash/Pierce,1.5,3,Dagger
Quality Dagger,Dagger,Quality,Quality,25,5,9,0,0,0,Slash/Pierce,1.5,3,Dagger
Fire Dagger,Dagger,Fire,Fire,25,5,9,0,0,0,Slash/Pierce,1.5,3,Dagger
Flame Art Dagger,Dagger,Flame Art,Flame Art,25,5,9,0,0,0,Slash/Pierce,1.5,3,Dagger
Lightning Dagger,Dagger,Lightning,Lightning,25,5,9,0,0,0,Slash/Pierce,1.5,3,Dagger
Sacred Dagger,Dagger,Sacred,Sacred,25,5,9,0,0,0,Slash/Pierce,1.5,3,Dagger
Magic Dagger,Dagger,Magic,Magic,25,5,9,0,0,0,Slash/Pierce,1.5,3,Dagger
Cold Dagger,Dagger,Cold,Cold,25,5,9,0,0,0,Slash/Pierce,1.5,3,Dagger
Poison Dagger,Dagger,Poison,Poison,25,5,9,0,0,0,Slash/Pierce,1.5,3,Dagger
Blood Dagger,Dagger,Blood,Blood,25,5,9,0,0,0,Slash/Pierce,1.5,3,Dagger
Occult Dagger,Dagger,Occult,Occult,25,5,9,0,0,0,Slash/Pierce,1.5,3,Dagger
Black Knife,Black Knife,None,-,10,8,12,0,18,0,Slash/Pierce,2,3,Dagger
Parrying Dagger,Parrying Dagger,None,None,25,5,14,0,0,0,Slash/Pierce,1.5,3,Dagger
Heavy Parrying Dagger,Parrying Dagger,Heavy,Heavy,25,5,14,0,0,0,Slash/Pierce,1.5,3,Dagger
Keen Parrying Dagger,Parrying Dagger,Keen,Keen,25,5,14,0,0,0,Slash/Pierce,1.5,3,Dagger
Quality Parrying Dagger,Parrying Dagger,Quality,Quality,25,5,14,0,0,0,Slash/Pierce,1.5,3,Dagger
Fire Parrying Dagger,Parrying Dagger,Fire,Fire,25,5,14,0,0,0,Slash/Pierce,1.5,3,Dagger
Flame Art Parrying Dagger,Parrying Dagger,Flame Art,Flame Art,25,5,14,0,0,0,Slash/Pierce,1.5,3,Dagger
Lightning Parrying Dagger,Parrying Dagger,Lightning,Lightning,25,5,14,0,0,0,Slash/Pierce,1.5,3,Dagger
Sacred Parrying Dagger,Parrying Dagger,Sacred,Sacred,25,5,14,0,0,0,Slash/Pierce,1.5,3,Dagger
Magic Parrying Dagger,Parrying Dagger,Magic,Magic,25,5,14,0,0,0,Slash/Pierce,1.5,3,Dagger
Cold Parrying Dagger,Parrying Dagger,Cold,Cold,25,5,14,0,0,0,Slash/Pierce,1.5,3,Dagger
Poison Parrying Dagger,Parrying Dagger,Poison,Poison,25,5,14,0,0,0,Slash/Pierce,1.5,3,Dagger
Blood Parrying Dagger,Parrying Dagger,Blood,Blood,25,5,14,0,0,0,Slash/Pierce,1.5,3,Dagger
Occult Parrying Dagger,Parrying Dagger,Occult,Occult,25,5,14,0,0,0,Slash/Pierce,1.5,3,Dagger
Misericorde,Misericorde,None,None,25,7,12,0,0,0,Slash/Pierce,2,3,Dagger
Heavy Misericorde,Misericorde,Heavy,Heavy,25,7,12,0,0,0,Slash/Pierce,2,3,Dagger
Keen Misericorde,Misericorde,Keen,Keen,25,7,12,0,0,0,Slash/Pierce,2,3,Dagger
Quality Misericorde,Misericorde,Quality,Quality,25,7,12,0,0,0,Slash/Pierce,2,3,Dagger
Fire Misericorde,Misericorde,Fire,Fire,25,7,12,0,0,0,Slash/Pierce,2,3,Dagger
Flame Art Misericorde,Misericorde,Flame Art,Flame Art,25,7,12,0,0,0,Slash/Pierce,2,3,Dagger
Lightning Misericorde,Misericorde,Lightning,Lightning,25,7,12,0,0,0,Slash/Pierce,2,3,Dagger
Sacred Misericorde,Misericorde,Sacred,Sacred,25,7,12,0,0,0,Slash/Pierce,2,3,Dagger
Magic Misericorde,Misericorde,Magic,Magic,25,7,12,0,0,0,Slash/Pierce,2,3,Dagger
Cold Misericorde,Misericorde,Cold,Cold,25,7,12,0,0,0,Slash/Pierce,2,3,Dagger
Poison Misericorde,Misericorde,Poison,Poison,25,7,12,0,0,0,Slash/Pierce,2,3,Dagger
Blood Misericorde,Misericorde,Blood,Blood,25,7,12,0,0,0,Slash/Pierce,2,3,Dagger
Occult Misericorde,Misericorde,Occult,Occult,25,7,12,0,0,0,Slash/Pierce,2,3,Dagger
Reduvia,Reduvia,None,-,10,5,13,0,0,13,Slash/Pierce,2.5,3,Dagger
Crystal Knife,Crystal Knife,None,-,25,8,12,9,0,0,Slash/Pierce,2,3,Dagger
Celebrant's Sickle,Celebrant's Sickle,None,None,25,6,11,0,0,0,Slash/Pierce,1.5,3,Dagger
Celebrant's Heavy Sickle,Celebrant's Sickle,Heavy,Heavy,25,6,11,0,0,0,Slash/Pierce,1.5,3,Dagger
Celebrant's Keen Sickle,Celebrant's Sickle,Keen,Keen,25,6,11,0,0,0,Slash/Pierce,1.5,3,Dagger
Celebrant's Quality Sickle,Celebrant's Sickle,Quality,Quality,25,6,11,0,0,0,Slash/Pierce,1.5,3,Dagger
Celebrant's Fire Sickle,Celebrant's Sickle,Fire,Fire,25,6,11,0,0,0,Slash/Pierce,1.5,3,Dagger
Celebrant's Flame Art Sickle,Celebrant's Sickle,Flame Art,Flame Art,25,6,11,0,0,0,Slash/Pierce,1.5,3,Dagger
Celebrant's Lightning Sickle,Celebrant's Sickle,Lightning,Lightning,25,6,11,0,0,0,Slash/Pierce,1.5,3,Dagger
Celebrant's Sacred Sickle,Celebrant's Sickle,Sacred,Sacred,25,6,11,0,0,0,Slash/Pierce,1.5,3,Dagger
Celebrant's Magic Sickle,Celebrant's Sickle,Magic,Magic,25,6,11,0,0,0,Slash/Pierce,1.5,3,Dagger
Celebrant's Cold Sickle,Celebrant's Sickle,Cold,Cold,25,6,11,0,0,0,Slash/Pierce,1.5,3,Dagger
Celebrant's Poison Sickle,Celebrant's Sickle,Poison,Poison,25,6,11,0,0,0,Slash/Pierce,1.5,3,Dagger
Celebrant's Blood Sickle,Celebrant's Sickle,Blood,Blood,25,6,11,0,0,0,Slash/Pierce,1.5,3,Dagger
Celebrant's Occult Sickle,Celebrant's Sickle,Occult,Occult,25,6,11,0,0,0,Slash/Pierce,1.5,3,Dagger
Glintstone Kris,Glintstone Kris,None,-,10,5,12,16,0,0,Slash/Pierce,1.5,3,Dagger
Scorpion's Stinger,Scorpion's Stinger,None,-,10,6,12,0,0,0,Slash/Pierce,2.5,3,Dagger
Great Knife,Great Knife,None,None,25,6,12,0,0,0,Slash/Pierce,1.5,3,Dagger
Heavy Great Knife,Great Knife,Heavy,Heavy,25,6,12,0,0,0,Slash/Pierce,1.5,3,Dagger
Keen Great Knife,Great Knife,Keen,Keen,25,6,12,0,0,0,Slash/Pierce,1.5,3,Dagger
Quality Great Knife,Great Knife,Quality,Quality,25,6,12,0,0,0,Slash/Pierce,1.5,3,Dagger
Fire Great Knife,Great Knife,Fire,Fire,25,6,12,0,0,0,Slash/Pierce,1.5,3,Dagger
Flame Art Great Knife,Great Knife,Flame Art,Flame Art,25,6,12,0,0,0,Slash/Pierce,1.5,3,Dagger
Lightning Great Knife,Great Knife,Lightning,Lightning,25,6,12,0,0,0,Slash/Pierce,1.5,3,Dagger
Sacred Great Knife,Great Knife,Sacred,Sacred,25,6,12,0,0,0,Slash/Pierce,1.5,3,Dagger
Magic Great Knife,Great Knife,Magic,Magic,25,6,12,0,0,0,Slash/Pierce,1.5,3,Dagger
Cold Great Knife,Great Knife,Cold,Cold,25,6,12,0,0,0,Slash/Pierce,1.5,3,Dagger
Poison Great Knife,Great Knife,Poison,Poison,25,6,12,0,0,0,Slash/Pierce,1.5,3,Dagger
Blood Great Knife,Great Knife,Blood,Blood,25,6,12,0,0,0,Slash/Pierce,1.5,3,Dagger
Occult Great Knife,Great Knife,Occult,Occult,25,6,12,0,0,0,Slash/Pierce,1.5,3,Dagger
Wakizashi,Wakizashi,None,None,25,9,13,0,0,0,Slash/Pierce,3,3,Dagger
Heavy Wakizashi,Wakizashi,Heavy,Heavy,25,9,13,0,0,0,Slash/Pierce,3,3,Dagger
Keen Wakizashi,Wakizashi,Keen,Keen,25,9,13,0,0,0,Slash/Pierce,3,3,Dagger
Quality Wakizashi,Wakizashi,Quality,Quality,25,9,13,0,0,0,Slash/Pierce,3,3,Dagger
Fire Wakizashi,Wakizashi,Fire,Fire,25,9,13,0,0,0,Slash/Pierce,3,3,Dagger
Flame Art Wakizashi,Wakizashi,Flame Art,Flame Art,25,9,13,0,0,0,Slash/Pierce,3,3,Dagger
Lightning Wakizashi,Wakizashi,Lightning,Lightning,25,9,13,0,0,0,Slash/Pierce,3,3,Dagger
Sacred Wakizashi,Wakizashi,Sacred,Sacred,25,9,13,0,0,0,Slash/Pierce,3,3,Dagger
Magic Wakizashi,Wakizashi,Magic,Magic,25,9,13,0,0,0,Slash/Pierce,3,3,Dagger
Cold Wakizashi,Wakizashi,Cold,Cold,25,9,13,0,0,0,Slash/Pierce,3,3,Dagger
Poison Wakizashi,Wakizashi,Poison,Poison,25,9,13,0,0,0,Slash/Pierce,3,3,Dagger
Blood Wakizashi,Wakizashi,Blood,Blood,25,9,13,0,0,0,Slash/Pierce,3,3,Dagger
Occult Wakizashi,Wakizashi,Occult,Occult,25,9,13,0,0,0,Slash/Pierce,3,3,Dagger
Cinquedea,Cinquedea,None,-,10,10,10,0,0,0,Slash/Pierce,3.5,3,Dagger
Ivory Sickle,Ivory Sickle,None,-,25,6,11,13,0,0,Slash/Pierce,2,3,Dagger
Bloodstained Dagger,Bloodstained Dagger,None,None,25,9,12,0,0,0,Slash/Pierce,2,3,Dagger
Heavy Bloodstained Dagger,Bloodstained Dagger,Heavy,Heavy,25,9,12,0,0,0,Slash/Pierce,2,3,Dagger
Keen Bloodstained Dagger,Bloodstained Dagger,Keen,Keen,25,9,12,0,0,0,Slash/Pierce,2,3,Dagger
Quality Bloodstained Dagger,Bloodstained Dagger,Quality,Quality,25,9,12,0,0,0,Slash/Pierce,2,3,Dagger
Fire Bloodstained Dagger,Bloodstained Dagger,Fire,Fire,25,9,12,0,0,0,Slash/Pierce,2,3,Dagger
Flame Art Bloodstained Dagger,Bloodstained Dagger,Flame Art,Flame Art,25,9,12,0,0,0,Slash/Pierce,2,3,Dagger
Lightning Bloodstained Dagger,Bloodstained Dagger,Lightning,Lightning,25,9,12,0,0,0,Slash/Pierce,2,3,Dagger
Sacred Bloodstained Dagger,Bloodstained Dagger,Sacred,Sacred,25,9,12,0,0,0,Slash/Pierce,2,3,Dagger
Magic Bloodstained Dagger,Bloodstained Dagger,Magic,Magic,25,9,12,0,0,0,Slash/Pierce,2,3,Dagger
Cold Bloodstained Dagger,Bloodstained Dagger,Cold,Cold,25,9,12,0,0,0,Slash/Pierce,2,3,Dagger
Poison Bloodstained Dagger,Bloodstained Dagger,Poison,Poison,25,9,12,0,0,0,Slash/Pierce,2,3,Dagger
Blood Bloodstained Dagger,Bloodstained Dagger,Blood,Blood,25,9,12,0,0,0,Slash/Pierce,2,3,Dagger
Occult Bloodstained Dagger,Bloodstained Dagger,Occult,Occult,25,9,12,0,0,0,Slash/Pierce,2,3,Dagger
Erdsteel Dagger,Erdsteel Dagger,None,None,25,7,12,0,14,0,Slash/Pierce,2,3,Dagger
Heavy Erdsteel Dagger,Erdsteel Dagger,Heavy,Heavy,25,7,12,0,14,0,Slash/Pierce,2,3,Dagger
Keen Erdsteel Dagger,Erdsteel Dagger,Keen,Keen,25,7,12,0,14,0,Slash/Pierce,2,3,Dagger
Quality Erdsteel Dagger,Erdsteel Dagger,Quality,Quality,25,7,12,0,14,0,Slash/Pierce,2,3,Dagger
Fire Erdsteel Dagger,Erdsteel Dagger,Fire,Fire,25,7,12,0,14,0,Slash/Pierce,2,3,Dagger
Flame Art Erdsteel Dagger,Erdsteel Dagger,Flame Art,Flame Art,25,7,12,0,14,0,Slash/Pierce,2,3,Dagger
Lightning Erdsteel Dagger,Erdsteel Dagger,Lightning,Lightning,25,7,12,0,14,0,Slash/Pierce,2,3,Dagger
Sacred Erdsteel Dagger,Erdsteel Dagger,Sacred,Sacred,25,7,12,0,14,0,Slash/Pierce,2,3,Dagger
Magic Erdsteel Dagger,Erdsteel Dagger,Magic,Magic,25,7,12,0,14,0,Slash/Pierce,2,3,Dagger
Cold Erdsteel Dagger,Erdsteel Dagger,Cold,Cold,25,7,12,0,14,0,Slash/Pierce,2,3,Dagger
Poison Erdsteel Dagger,Erdsteel Dagger,Poison,Poison,25,7,12,0,14,0,Slash/Pierce,2,3,Dagger
Blood Erdsteel Dagger,Erdsteel Dagger,Blood,Blood,25,7,12,0,14,0,Slash/Pierce,2,3,Dagger
Occult Erdsteel Dagger,Erdsteel Dagger,Occult,Occult,25,7,12,0,14,0,Slash/Pierce,2,3,Dagger
Blade of Calling,Blade of Calling,None,-,10,6,13,0,15,0,Slash/Pierce,1.5,3,Dagger
Longsword,Longsword,None,None,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Heavy Longsword,Longsword,Heavy,Heavy,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Keen Longsword,Longsword,Keen,Keen,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Quality Longsword,Longsword,Quality,Quality,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Fire Longsword,Longsword,Fire,Fire,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Flame Art Longsword,Longsword,Flame Art,Flame Art,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Lightning Longsword,Longsword,Lightning,Lightning,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Sacred Longsword,Longsword,Sacred,Sacred,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Magic Longsword,Longsword,Magic,Magic,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Cold Longsword,Longsword,Cold,Cold,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Poison Longsword,Longsword,Poison,Poison,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Bloody Longsword,Longsword,Blood,Blood,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Occult Longsword,Longsword,Occult,Occult,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Short Sword,Short Sword,None,None,25,8,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Heavy Short Sword,Short Sword,Heavy,Heavy,25,8,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Keen Short Sword,Short Sword,Keen,Keen,25,8,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Quality Short Sword,Short Sword,Quality,Quality,25,8,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Fire Short Sword,Short Sword,Fire,Fire,25,8,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Flame Art Short Sword,Short Sword,Flame Art,Flame Art,25,8,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Lightning Short Sword,Short Sword,Lightning,Lightning,25,8,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Sacred Short Sword,Short Sword,Sacred,Sacred,25,8,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Magic Short Sword,Short Sword,Magic,Magic,25,8,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Cold Short Sword,Short Sword,Cold,Cold,25,8,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Poison Short Sword,Short Sword,Poison,Poison,25,8,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Blood Short Sword,Short Sword,Blood,Blood,25,8,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Occult Short Sword,Short Sword,Occult,Occult,25,8,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Broadsword,Broadsword,None,None,25,10,10,0,0,0,Standard/Pierce,4,5,Straight Sword
Heavy Broadsword,Broadsword,Heavy,Heavy,25,10,10,0,0,0,Standard/Pierce,4,5,Straight Sword
Keen Broadsword,Broadsword,Keen,Keen,25,10,10,0,0,0,Standard/Pierce,4,5,Straight Sword
Quality Broadsword,Broadsword,Quality,Quality,25,10,10,0,0,0,Standard/Pierce,4,5,Straight Sword
Fire Broadsword,Broadsword,Fire,Fire,25,10,10,0,0,0,Standard/Pierce,4,5,Straight Sword
Flame Art Broadsword,Broadsword,Flame Art,Flame Art,25,10,10,0,0,0,Standard/Pierce,4,5,Straight Sword
Lightning Broadsword,Broadsword,Lightning,Lightning,25,10,10,0,0,0,Standard/Pierce,4,5,Straight Sword
Sacred Broadsword,Broadsword,Sacred,Sacred,25,10,10,0,0,0,Standard/Pierce,4,5,Straight Sword
Magic Broadsword,Broadsword,Magic,Magic,25,10,10,0,0,0,Standard/Pierce,4,5,Straight Sword
Cold Broadsword,Broadsword,Cold,Cold,25,10,10,0,0,0,Standard/Pierce,4,5,Straight Sword
Poison Broadsword,Broadsword,Poison,Poison,25,10,10,0,0,0,Standard/Pierce,4,5,Straight Sword
Blood Broadsword,Broadsword,Blood,Blood,25,10,10,0,0,0,Standard/Pierce,4,5,Straight Sword
Occult Broadsword,Broadsword,Occult,Occult,25,10,10,0,0,0,Standard/Pierce,4,5,Straight Sword
Lordsworn's Straight Sword,Lordsworn's Straight Sword,None,None,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Lordsworn's Heavy Straight Sword,Lordsworn's Straight Sword,Heavy,Heavy,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Lordsworn's Keen Straight Sword,Lordsworn's Straight Sword,Keen,Keen,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Lordsworn's Quality Straight Sword,Lordsworn's Straight Sword,Quality,Quality,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Lordsworn's Fire Straight Sword,Lordsworn's Straight Sword,Fire,Fire,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Lordsworn's Flame Art Straight Sword,Lordsworn's Straight Sword,Flame Art,Flame Art,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Lordsworn's Lightning Straight Sword,Lordsworn's Straight Sword,Lightning,Lightning,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Lordsworn's Sacred Straight Sword,Lordsworn's Straight Sword,Sacred,Sacred,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Lordsworn's Magic Straight Sword,Lordsworn's Straight Sword,Magic,Magic,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Lordsworn's Cold Straight Sword,Lordsworn's Straight Sword,Cold,Cold,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Lordsworn's Poison Straight Sword,Lordsworn's Straight Sword,Poison,Poison,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Lordsworn's Blood Straight Sword,Lordsworn's Straight Sword,Blood,Blood,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Lordsworn's Occult Straight Sword,Lordsworn's Straight Sword,Occult,Occult,25,10,10,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Weathered Straight Sword,Weathered Straight Sword,None,None,25,7,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Weathered Heavy Straight Sword,Weathered Straight Sword,Heavy,Heavy,25,7,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Weathered Keen Straight Sword,Weathered Straight Sword,Keen,Keen,25,7,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Weathered Quality Straight Sword,Weathered Straight Sword,Quality,Quality,25,7,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Weathered Fire Straight Sword,Weathered Straight Sword,Fire,Fire,25,7,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Weathered Flame Art Straight Sword,Weathered Straight Sword,Flame Art,Flame Art,25,7,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Weathered Lightning Straight Sword,Weathered Straight Sword,Lightning,Lightning,25,7,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Weathered Sacred Straight Sword,Weathered Straight Sword,Sacred,Sacred,25,7,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Weathered Magic Straight Sword,Weathered Straight Sword,Magic,Magic,25,7,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Weathered Cold Straight Sword,Weathered Straight Sword,Cold,Cold,25,7,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Weathered Poison Straight Sword,Weathered Straight Sword,Poison,Poison,25,7,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Weathered Blood Straight Sword,Weathered Straight Sword,Blood,Blood,25,7,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Weathered Occult Straight Sword,Weathered Straight Sword,Occult,Occult,25,7,10,0,0,0,Standard/Pierce,3,5,Straight Sword
Ornamental Straight Sword,Ornamental Straight Sword,None,-,10,10,14,0,0,0,Standard/Pierce,3,5,Straight Sword
Golden Epitaph,Golden Epitaph,None,-,10,12,10,0,14,0,Standard/Pierce,3.5,5,Straight Sword
Nox Flowing Sword,Nox Flowing Sword,None,-,10,8,15,0,0,0,Slash,3.5,5,Curved Sword
Inseparable Sword,Inseparable Sword,None,-,10,18,18,0,20,0,Standard/Pierce,10,5.5,Greatsword
Coded Sword,Coded Sword,None,-,10,0,0,0,20,0,Standard/Pierce,2.5,5,Straight Sword
Sword of Night and Flame,Sword of Night and Flame,None,-,10,12,12,24,24,0,Standard/Pierce,4,5,Straight Sword
Crystal Sword,Crystal Sword,None,-,10,13,10,15,0,0,Standard/Pierce,4.5,5,Straight Sword
Carian Knight's Sword,Carian Knight's Sword,None,-,10,10,10,18,0,0,Standard/Pierce,4,5,Straight Sword
Sword of St. Trina,Sword of St. Trina,None,-,10,10,12,14,0,0,Standard/Pierce,3,5,Straight Sword
Miquellan Knight's Sword,Miquellan Knight's Sword,None,-,10,11,11,0,16,0,Standard/Pierce,3.5,5,Straight Sword
Cane Sword,Cane Sword,None,None,25,8,11,0,0,0,Standard/Pierce,2.5,5,Straight Sword
Heavy Cane Sword,Cane Sword,Heavy,Heavy,25,8,11,0,0,0,Standard/Pierce,2.5,5,Straight Sword
Keen Cane Sword,Cane Sword,Keen,Keen,25,8,11,0,0,0,Standard/Pierce,2.5,5,Straight Sword
Quality Cane Sword,Cane Sword,Quality,Quality,25,8,11,0,0,0,Standard/Pierce,2.5,5,Straight Sword
Fire Cane Sword,Cane Sword,Fire,Fire,25,8,11,0,0,0,Standard/Pierce,2.5,5,Straight Sword
Flame Art Cane Sword,Cane Sword,Flame Art,Flame Art,25,8,11,0,0,0,Standard/Pierce,2.5,5,Straight Sword
Lightning Cane Sword,Cane Sword,Lightning,Lightning,25,8,11,0,0,0,Standard/Pierce,2.5,5,Straight Sword
Sacred Cane Sword,Cane Sword,Sacred,Sacred,25,8,11,0,0,0,Standard/Pierce,2.5,5,Straight Sword
Magic Cane Sword,Cane Sword,Magic,Magic,25,8,11,0,0,0,Standard/Pierce,2.5,5,Straight Sword
Cold Cane Sword,Cane Sword,Cold,Cold,25,8,11,0,0,0,Standard/Pierce,2.5,5,Straight Sword
Poison Cane Sword,Cane Sword,Poison,Poison,25,8,11,0,0,0,Standard/Pierce,2.5,5,Straight Sword
Blood Cane Sword,Cane Sword,Blood,Blood,25,8,11,0,0,0,Standard/Pierce,2.5,5,Straight Sword
Occult Cane Sword,Cane Sword,Occult,Occult,25,8,11,0,0,0,Standard/Pierce,2.5,5,Straight Sword
Regalia of Eochaid,Regalia of Eochaid,None,-,10,12,18,0,0,15,Standard/Pierce,5.5,5,Straight Sword
Noble's Slender Sword,Noble's Slender Sword,None,None,25,8,11,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Noble's Heavy Slender Sword,Noble's Slender Sword,Heavy,Heavy,25,8,11,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Noble's Keen Slender Sword,Noble's Slender Sword,Keen,Keen,25,8,11,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Noble's Quality Slender Sword,Noble's Slender Sword,Quality,Quality,25,8,11,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Noble's Fire Slender Sword,Noble's Slender Sword,Fire,Fire,25,8,11,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Noble's Flame Art Slender Sword,Noble's Slender Sword,Flame Art,Flame Art,25,8,11,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Noble's Lightning Slender Sword,Noble's Slender Sword,Lightning,Lightning,25,8,11,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Noble's Sacred Slender Sword,Noble's Slender Sword,Sacred,Sacred,25,8,11,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Noble's Magic Slender Sword,Noble's Slender Sword,Magic,Magic,25,8,11,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Noble's Cold Slender Sword,Noble's Slender Sword,Cold,Cold,25,8,11,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Noble's Poison Slender Sword,Noble's Slender Sword,Poison,Poison,25,8,11,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Noble's Blood Slender Sword,Noble's Slender Sword,Blood,Blood,25,8,11,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Noble's Occult Slender Sword,Noble's Slender Sword,Occult,Occult,25,8,11,0,0,0,Standard/Pierce,3.5,5,Straight Sword
Warhawk's Talon,Warhawk's Talon,None,None,25,10,16,0,0,0,Standard/Pierce,3,5,Straight Sword
Warhawk's Heavy Talon,Warhawk's Talon,Heavy,Heavy,25,10,16,0,0,0,Standard/Pierce,3,5,Straight Sword
Warhawk's Keen Talon,Warhawk's Talon,Keen,Keen,25,10,16,0,0,0,Standard/Pierce,3,5,Straight Sword
Warhawk's Quality Talon,Warhawk's Talon,Quality,Quality,25,10,16,0,0,0,Standard/Pierce,3,5,Straight Sword
Warhawk's Fire Talon,Warhawk's Talon,Fire,Fire,25,10,16,0,0,0,Standard/Pierce,3,5,Straight Sword
Warhawk's Flame Art Talon,Warhawk's Talon,Flame Art,Flame Art,25,10,16,0,0,0,Standard/Pierce,3,5,Straight Sword
Warhawk's Lightning Talon,Warhawk's Talon,Lightning,Lightning,25,10,16,0,0,0,Standard/Pierce,3,5,Straight Sword
Warhawk's Sacred Talon,Warhawk's Talon,Sacred,Sacred,25,10,16,0,0,0,Standard/Pierce,3,5,Straight Sword
Warhawk's Magic Talon,Warhawk's Talon,Magic,Magic,25,10,16,0,0,0,Standard/Pierce,3,5,Straight Sword
Warhawk's Cold Talon,Warhawk's Talon,Cold,Cold,25,10,16,0,0,0,Standard/Pierce,3,5,Straight Sword
Warhawk's Poison Talon,Warhawk's Talon,Poison,Poison,25,10,16,0,0,0,Standard/Pierce,3,5,Straight Sword
Warhawk's Blood Talon,Warhawk's Talon,Blood,Blood,25,10,16,0,0,0,Standard/Pierce,3,5,Straight Sword
Warhawk's Occult Talon,Warhawk's Talon,Occult,Occult,25,10,16,0,0,0,Standard/Pierce,3,5,Straight Sword
Lazuli Glintstone Sword,Lazuli Glintstone Sword,None,-,10,8,9,13,0,0,Standard/Pierce,3.5,5,Straight Sword
Rotten Crystal Sword,Rotten Crystal Sword,None,-,10,13,10,15,0,0,Standard/Pierce,4.5,5,Straight Sword
Bastard Sword,Bastard Sword,None,None,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Heavy Bastard Sword,Bastard Sword,Heavy,Heavy,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Keen Bastard Sword,Bastard Sword,Keen,Keen,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Quality Bastard Sword,Bastard Sword,Quality,Quality,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Fire Bastard Sword,Bastard Sword,Fire,Fire,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Flame Art Bastard Sword,Bastard Sword,Flame Art,Flame Art,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Lightning Bastard Sword,Bastard Sword,Lightning,Lightning,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Sacred Bastard Sword,Bastard Sword,Sacred,Sacred,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Magic Bastard Sword,Bastard Sword,Magic,Magic,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Cold Bastard Sword,Bastard Sword,Cold,Cold,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Poison Bastard Sword,Bastard Sword,Poison,Poison,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Bloody Bastard Sword,Bastard Sword,Blood,Blood,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Occult Bastard Sword,Bastard Sword,Occult,Occult,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Forked Greatsword,Forked Greatsword,None,None,25,14,16,0,0,0,Standard/Pierce,9,5.5,Greatsword
Heavy Forked Greatsword,Forked Greatsword,Heavy,Heavy,25,14,16,0,0,0,Standard/Pierce,9,5.5,Greatsword
Keen Forked Greatsword,Forked Greatsword,Keen,Keen,25,14,16,0,0,0,Standard/Pierce,9,5.5,Greatsword
Quality Forked Greatsword,Forked Greatsword,Quality,Quality,25,14,16,0,0,0,Standard/Pierce,9,5.5,Greatsword
Fire Forked Greatsword,Forked Greatsword,Fire,Fire,25,14,16,0,0,0,Standard/Pierce,9,5.5,Greatsword
Flame Art Forked Greatsword,Forked Greatsword,Flame Art,Flame Art,25,14,16,0,0,0,Standard/Pierce,9,5.5,Greatsword
Lightning Forked Greatsword,Forked Greatsword,Lightning,Lightning,25,14,16,0,0,0,Standard/Pierce,9,5.5,Greatsword
Sacred Forked Greatsword,Forked Greatsword,Sacred,Sacred,25,14,16,0,0,0,Standard/Pierce,9,5.5,Greatsword
Magic Forked Greatsword,Forked Greatsword,Magic,Magic,25,14,16,0,0,0,Standard/Pierce,9,5.5,Greatsword
Cold Forked Greatsword,Forked Greatsword,Cold,Cold,25,14,16,0,0,0,Standard/Pierce,9,5.5,Greatsword
Poison Forked Greatsword,Forked Greatsword,Poison,Poison,25,14,16,0,0,0,Standard/Pierce,9,5.5,Greatsword
Blood Forked Greatsword,Forked Greatsword,Blood,Blood,25,14,16,0,0,0,Standard/Pierce,9,5.5,Greatsword
Occult Forked Greatsword,Forked Greatsword,Occult,Occult,25,14,16,0,0,0,Standard/Pierce,9,5.5,Greatsword
Iron Greatsword,Iron Greatsword,None,None,25,18,10,0,0,0,Standard/Pierce,12,5.5,Greatsword
Heavy Iron Greatsword,Iron Greatsword,Heavy,Heavy,25,18,10,0,0,0,Standard/Pierce,12,5.5,Greatsword
Keen Iron Greatsword,Iron Greatsword,Keen,Keen,25,18,10,0,0,0,Standard/Pierce,12,5.5,Greatsword
Quality Iron Greatsword,Iron Greatsword,Quality,Quality,25,18,10,0,0,0,Standard/Pierce,12,5.5,Greatsword
Fire Iron Greatsword,Iron Greatsword,Fire,Fire,25,18,10,0,0,0,Standard/Pierce,12,5.5,Greatsword
Flame Art Iron Greatsword,Iron Greatsword,Flame Art,Flame Art,25,18,10,0,0,0,Standard/Pierce,12,5.5,Greatsword
Lightning Iron Greatsword,Iron Greatsword,Lightning,Lightning,25,18,10,0,0,0,Standard/Pierce,12,5.5,Greatsword
Sacred Iron Greatsword,Iron Greatsword,Sacred,Sacred,25,18,10,0,0,0,Standard/Pierce,12,5.5,Greatsword
Magic Iron Greatsword,Iron Greatsword,Magic,Magic,25,18,10,0,0,0,Standard/Pierce,12,5.5,Greatsword
Cold Iron Greatsword,Iron Greatsword,Cold,Cold,25,18,10,0,0,0,Standard/Pierce,12,5.5,Greatsword
Poison Iron Greatsword,Iron Greatsword,Poison,Poison,25,18,10,0,0,0,Standard/Pierce,12,5.5,Greatsword
Blood Iron Greatsword,Iron Greatsword,Blood,Blood,25,18,10,0,0,0,Standard/Pierce,12,5.5,Greatsword
Occult Iron Greatsword,Iron Greatsword,Occult,Occult,25,18,10,0,0,0,Standard/Pierce,12,5.5,Greatsword
Lordsworn's Greatsword,Lordsworn's Greatsword,None,None,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Lordsworn's Heavy Greatsword,Lordsworn's Greatsword,Heavy,Heavy,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Lordsworn's Keen Greatsword,Lordsworn's Greatsword,Keen,Keen,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Lordsworn's Quality Greatsword,Lordsworn's Greatsword,Quality,Quality,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Lordsworn's Fire Greatsword,Lordsworn's Greatsword,Fire,Fire,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Lordsworn's Flame Art Greatsword,Lordsworn's Greatsword,Flame Art,Flame Art,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Lordsworn's Lightning Greatsword,Lordsworn's Greatsword,Lightning,Lightning,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Lordsworn's Sacred Greatsword,Lordsworn's Greatsword,Sacred,Sacred,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Lordsworn's Magic Greatsword,Lordsworn's Greatsword,Magic,Magic,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Lordsworn's Cold Greatsword,Lordsworn's Greatsword,Cold,Cold,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Lordsworn's Poison Greatsword,Lordsworn's Greatsword,Poison,Poison,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Lordsworn's Blood Greatsword,Lordsworn's Greatsword,Blood,Blood,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Lordsworn's Occult Greatsword,Lordsworn's Greatsword,Occult,Occult,25,16,10,0,0,0,Standard/Pierce,9,5.5,Greatsword
Knight's Greatsword,Knight's Greatsword,None,None,25,16,12,0,0,0,Standard/Pierce,10,5.5,Greatsword
Knight's Heavy Greatsword,Knight's Greatsword,Heavy,Heavy,25,16,12,0,0,0,Standard/Pierce,10,5.5,Greatsword
Knight's Keen Greatsword,Knight's Greatsword,Keen,Keen,25,16,12,0,0,0,Standard/Pierce,10,5.5,Greatsword
Knight's Quality Greatsword,Knight's Greatsword,Quality,Quality,25,16,12,0,0,0,Standard/Pierce,10,5.5,Greatsword
Knight's Fire Greatsword,Knight's Greatsword,Fire,Fire,25,16,12,0,0,0,Standard/Pierce,10,5.5,Greatsword
Knight's Flame Art Greatsword,Knight's Greatsword,Flame Art,Flame Art,25,16,12,0,0,0,Standard/Pierce,10,5.5,Greatsword
Knight's Lightning Greatsword,Knight's Greatsword,Lightning,Lightning,25,16,12,0,0,0,Standard/Pierce,10,5.5,Greatsword
Knight's Sacred Greatsword,Knight's Greatsword,Sacred,Sacred,25,16,12,0,0,0,Standard/Pierce,10,5.5,Greatsword
Knight's Magic Greatsword,Knight's Greatsword,Magic,Magic,25,16,12,0,0,0,Standard/Pierce,10,5.5,Greatsword
Knight's Cold Greatsword,Knight's Greatsword,Cold,Cold,25,16,12,0,0,0,Standard/Pierce,10,5.5,Greatsword
Knight's Poison Greatsword,Knight's Greatsword,Poison,Poison,25,16,12,0,0,0,Standard/Pierce,10,5.5,Greatsword
Knight's Blood Greatsword,Knight's Greatsword,Blood,Blood,25,16,12,0,0,0,Standard/Pierce,10,5.5,Greatsword
Knight's Occult Greatsword,Knight's Greatsword,Occult,Occult,25,16,12,0,0,0,Standard/Pierce,10,5.5,Greatsword
Flamberge,Flamberge,None,None,25,15,14,0,0,0,Standard/Pierce,10,5.5,Greatsword
Heavy Flamberge,Flamberge,Heavy,Heavy,25,15,14,0,0,0,Standard/Pierce,10,5.5,Greatsword
Keen Flamberge,Flamberge,Keen,Keen,25,15,14,0,0,0,Standard/Pierce,10,5.5,Greatsword
Quality Flamberge,Flamberge,Quality,Quality,25,15,14,0,0,0,Standard/Pierce,10,5.5,Greatsword
Fire Flamberge,Flamberge,Fire,Fire,25,15,14,0,0,0,Standard/Pierce,10,5.5,Greatsword
Flame Art Flamberge,Flamberge,Flame Art,Flame Art,25,15,14,0,0,0,Standard/Pierce,10,5.5,Greatsword
Lightning Flamberge,Flamberge,Lightning,Lightning,25,15,14,0,0,0,Standard/Pierce,10,5.5,Greatsword
Sacred Flamberge,Flamberge,Sacred,Sacred,25,15,14,0,0,0,Standard/Pierce,10,5.5,Greatsword
Magic Flamberge,Flamberge,Magic,Magic,25,15,14,0,0,0,Standard/Pierce,10,5.5,Greatsword
Cold Flamberge,Flamberge,Cold,Cold,25,15,14,0,0,0,Standard/Pierce,10,5.5,Greatsword
Poison Flamberge,Flamberge,Poison,Poison,25,15,14,0,0,0,Standard/Pierce,10,5.5,Greatsword
Blood Flamberge,Flamberge,Blood,Blood,25,15,14,0,0,0,Standard/Pierce,10,5.5,Greatsword
Occult Flamberge,Flamberge,Occult,Occult,25,15,14,0,0,0,Standard/Pierce,10,5.5,Greatsword
Ordovis's Greatsword,Ordovis's Greatsword,None,-,10,25,13,0,15,0,Standard/Pierce,12,5.5,Greatsword
Alabaster Lord's Sword,Alabaster Lord's Sword,None,-,10,16,12,18,0,0,Standard/Pierce,8,5.5,Greatsword
Banished Knight's Greatsword,Banished Knight's Greatsword,None,None,25,17,9,0,0,0,Standard/Pierce,10,5.5,Greatsword
Banished Knight's Heavy Greatsword,Banished Knight's Greatsword,Heavy,Heavy,25,17,9,0,0,0,Standard/Pierce,10,5.5,Greatsword
Banished Knight's Keen Greatsword,Banished Knight's Greatsword,Keen,Keen,25,17,9,0,0,0,Standard/Pierce,10,5.5,Greatsword
Banished Knight's Quality Greatsword,Banished Knight's Greatsword,Quality,Quality,25,17,9,0,0,0,Standard/Pierce,10,5.5,Greatsword
Banished Knight's Fire Greatsword,Banished Knight's Greatsword,Fire,Fire,25,17,9,0,0,0,Standard/Pierce,10,5.5,Greatsword
Banished Knight's Flame Art Greatsword,Banished Knight's Greatsword,Flame Art,Flame Art,25,17,9,0,0,0,Standard/Pierce,10,5.5,Greatsword
Banished Knight's Lightning Greatsword,Banished Knight's Greatsword,Lightning,Lightning,25,17,9,0,0,0,Standard/Pierce,10,5.5,Greatsword
Banished Knight's Sacred Greatsword,Banished Knight's Greatsword,Sacred,Sacred,25,17,9,0,0,0,Standard/Pierce,10,5.5,Greatsword
Banished Knight's Magic Greatsword,Banished Knight's Greatsword,Magic,Magic,25,17,9,0,0,0,Standard/Pierce,10,5.5,Greatsword
Banished Knight's Cold Greatsword,Banished Knight's Greatsword,Cold,Cold,25,17,9,0,0,0,Standard/Pierce,10,5.5,Greatsword
Banished Knight's Poison Greatsword,Banished Knight's Greatsword,Poison,Poison,25,17,9,0,0,0,Standard/Pierce,10,5.5,Greatsword
Banished Knight's Blood Greatsword,Banished Knight's Greatsword,Blood,Blood,25,17,9,0,0,0,Standard/Pierce,10,5.5,Greatsword
Banished Knight's Occult Greatsword,Banished Knight's Greatsword,Occult,Occult,25,17,9,0,0,0,Standard/Pierce,10,5.5,Greatsword
Dark Moon Greatsword,Dark Moon Greatsword,None,-,10,16,11,38,0,0,Standard/Pierce,10,5.5,Greatsword
Sacred Relic Sword,Relic Sword,None,-,10,14,24,0,22,0,Standard/Pierce,11,5.5,Greatsword
Helphen's Steeple,Helphen's Steeple,None,-,10,19,10,22,0,0,Standard/Pierce,11.5,5.5,Greatsword
Blasphemous Blade,Blasphemous Blade,None,-,10,22,15,0,21,0,Standard/Pierce,13.5,5.5,Greatsword
Marais Executioner's Sword,Marais Executioner's Sword,None,-,10,24,14,0,0,23,Standard/Pierce,11.5,5.5,Greatsword
Sword of Milos,Sword of Milos,None,-,10,15,19,0,0,0,Standard/Pierce,10,5.5,Greatsword
Golden Order Greatsword,Golden Order Greatsword,None,-,10,16,21,0,28,0,Standard/Pierce,10,5.5,Greatsword
Claymore,Claymore,None,None,25,16,13,0,0,0,Standard/Pierce,9,5.5,Greatsword
Heavy Claymore,Claymore,Heavy,Heavy,25,16,13,0,0,0,Standard/Pierce,9,5.5,Greatsword
Keen Claymore,Claymore,Keen,Keen,25,16,13,0,0,0,Standard/Pierce,9,5.5,Greatsword
Quality Claymore,Claymore,Quality,Quality,25,16,13,0,0,0,Standard/Pierce,9,5.5,Greatsword
Fire Claymore,Claymore,Fire,Fire,25,16,13,0,0,0,Standard/Pierce,9,5.5,Greatsword
Flame Art Claymore,Claymore,Flame Art,Flame Art,25,16,13,0,0,0,Standard/Pierce,9,5.5,Greatsword
Lightning Claymore,Claymore,Lightning,Lightning,25,16,13,0,0,0,Standard/Pierce,9,5.5,Greatsword
Sacred Claymore,Claymore,Sacred,Sacred,25,16,13,0,0,0,Standard/Pierce,9,5.5,Greatsword
Magic Claymore,Claymore,Magic,Magic,25,16,13,0,0,0,Standard/Pierce,9,5.5,Greatsword
Cold Claymore,Claymore,Cold,Cold,25,16,13,0,0,0,Standard/Pierce,9,5.5,Greatsword
Poison Claymore,Claymore,Poison,Poison,25,16,13,0,0,0,Standard/Pierce,9,5.5,Greatsword
Blood Claymore,Claymore,Blood,Blood,25,16,13,0,0,0,Standard/Pierce,9,5.5,Greatsword
Occult Claymore,Claymore,Occult,Occult,25,16,13,0,0,0,Standard/Pierce,9,5.5,Greatsword
Gargoyle's Greatsword,Gargoyle's Greatsword,None,None,25,18,10,0,0,0,Standard/Pierce,11.5,5.5,Greatsword
Gargoyle's Heavy Greatsword,Gargoyle's Greatsword,Heavy,Heavy,25,18,10,0,0,0,Standard/Pierce,11.5,5.5,Greatsword
Gargoyle's Keen Greatsword,Gargoyle's Greatsword,Keen,Keen,25,18,10,0,0,0,Standard/Pierce,11.5,5.5,Greatsword
Gargoyle's Quality Greatsword,Gargoyle's Greatsword,Quality,Quality,25,18,10,0,0,0,Standard/Pierce,11.5,5.5,Greatsword
Gargoyle's Fire Greatsword,Gargoyle's Greatsword,Fire,Fire,25,18,10,0,0,0,Standard/Pierce,11.5,5.5,Greatsword
Gargoyle's Flame Art Greatsword,Gargoyle's Greatsword,Flame Art,Flame Art,25,18,10,0,0,0,Standard/Pierce,11.5,5.5,Greatsword
Gargoyle's Lightning Greatsword,Gargoyle's Greatsword,Lightning,Lightning,25,18,10,0,0,0,Standard/Pierce,11.5,5.5,Greatsword
Gargoyle's Sacred Greatsword,Gargoyle's Greatsword,Sacred,Sacred,25,18,10,0,0,0,Standard/Pierce,11.5,5.5,Greatsword
Gargoyle's Magic Greatsword,Gargoyle's Greatsword,Magic,Magic,25,18,10,0,0,0,Standard/Pierce,11.5,5.5,Greatsword
Gargoyle's Cold Greatsword,Gargoyle's Greatsword,Cold,Cold,25,18,10,0,0,0,Standard/Pierce,11.5,5.5,Greatsword
Gargoyle's Poison Greatsword,Gargoyle's Greatsword,Poison,Poison,25,18,10,0,0,0,Standard/Pierce,11.5,5.5,Greatsword
Gargoyle's Blood Greatsword,Gargoyle's Greatsword,Blood,Blood,25,18,10,0,0,0,Standard/Pierce,11.5,5.5,Greatsword
Gargoyle's Occult Greatsword,Gargoyle's Greatsword,Occult,Occult,25,18,10,0,0,0,Standard/Pierce,11.5,5.5,Greatsword
Death's Poker,Death's Poker,None,-,10,15,17,11,0,0,Standard/Pierce,8.5,5.5,Greatsword
Gargoyle's Blackblade,Gargoyle's Blackblade,None,-,10,18,10,0,22,0,Standard/Pierce,11.5,5.5,Greatsword
Greatsword,Greatsword,None,None,25,31,12,0,0,0,Standard,23,6,Colossal Sword
Heavy Greatsword,Greatsword,Heavy,Heavy,25,31,12,0,0,0,Standard,23,6,Colossal Sword
Keen Greatsword,Greatsword,Keen,Keen,25,31,12,0,0,0,Standard,23,6,Colossal Sword
Quality Greatsword,Greatsword,Quality,Quality,25,31,12,0,0,0,Standard,23,6,Colossal Sword
Fire Greatsword,Greatsword,Fire,Fire,25,31,12,0,0,0,Standard,23,6,Colossal Sword
Flame Art Greatsword,Greatsword,Flame Art,Flame Art,25,31,12,0,0,0,Standard,23,6,Colossal Sword
Lightning Greatsword,Greatsword,Lightning,Lightning,25,31,12,0,0,0,Standard,23,6,Colossal Sword
Sacred Greatsword,Greatsword,Sacred,Sacred,25,31,12,0,0,0,Standard,23,6,Colossal Sword
Magic Greatsword,Greatsword,Magic,Magic,25,31,12,0,0,0,Standard,23,6,Colossal Sword
Cold Greatsword,Greatsword,Cold,Cold,25,31,12,0,0,0,Standard,23,6,Colossal Sword
Poison Greatsword,Greatsword,Poison,Poison,25,31,12,0,0,0,Standard,23,6,Colossal Sword
Blood Greatsword,Greatsword,Blood,Blood,25,31,12,0,0,0,Standard,23,6,Colossal Sword
Occult Greatsword,Greatsword,Occult,Occult,25,31,12,0,0,0,Standard,23,6,Colossal Sword
Watchdog's Greatsword,Watchdog's Greatsword,None,None,25,30,10,0,0,0,Standard,22,6,Colossal Sword
Watchdog's Heavy Greatsword,Watchdog's Greatsword,Heavy,Heavy,25,30,10,0,0,0,Standard,22,6,Colossal Sword
Watchdog's Keen Greatsword,Watchdog's Greatsword,Keen,Keen,25,30,10,0,0,0,Standard,22,6,Colossal Sword
Watchdog's Quality Greatsword,Watchdog's Greatsword,Quality,Quality,25,30,10,0,0,0,Standard,22,6,Colossal Sword
Watchdog's Fire Greatsword,Watchdog's Greatsword,Fire,Fire,25,30,10,0,0,0,Standard,22,6,Colossal Sword
Watchdog's Flame Art Greatsword,Watchdog's Greatsword,Flame Art,Flame Art,25,30,10,0,0,0,Standard,22,6,Colossal Sword
Watchdog's Lightning Greatsword,Watchdog's Greatsword,Lightning,Lightning,25,30,10,0,0,0,Standard,22,6,Colossal Sword
Watchdog's Sacred Greatsword,Watchdog's Greatsword,Sacred,Sacred,25,30,10,0,0,0,Standard,22,6,Colossal Sword
Watchdog's Magic Greatsword,Watchdog's Greatsword,Magic,Magic,25,30,10,0,0,0,Standard,22,6,Colossal Sword
Watchdog's Cold Greatsword,Watchdog's Greatsword,Cold,Cold,25,30,10,0,0,0,Standard,22,6,Colossal Sword
Watchdog's Poison Greatsword,Watchdog's Greatsword,Poison,Poison,25,30,10,0,0,0,Standard,22,6,Colossal Sword
Watchdog's Blood Greatsword,Watchdog's Greatsword,Blood,Blood,25,30,10,0,0,0,Standard,22,6,Colossal Sword
Watchdog's Occult Greatsword,Watchdog's Greatsword,Occult,Occult,25,30,10,0,0,0,Standard,22,6,Colossal Sword
Maliketh's Black Blade,Maliketh's Black Blade,None,-,10,34,12,0,20,0,Standard,22,6,Colossal Sword
Troll's Golden Sword,Troll's Golden Sword,None,None,25,29,10,0,0,0,Standard,19,6,Colossal Sword
Troll's Golden Heavy Sword,Troll's Golden Sword,Heavy,Heavy,25,29,10,0,0,0,Standard,19,6,Colossal Sword
Troll's Golden Keen Sword,Troll's Golden Sword,Keen,Keen,25,29,10,0,0,0,Standard,19,6,Colossal Sword
Troll's Golden Quality Sword,Troll's Golden Sword,Quality,Quality,25,29,10,0,0,0,Standard,19,6,Colossal Sword
Troll's Golden Fire Sword,Troll's Golden Sword,Fire,Fire,25,29,10,0,0,0,Standard,19,6,Colossal Sword
Troll's Golden Flame Art Sword,Troll's Golden Sword,Flame Art,Flame Art,25,29,10,0,0,0,Standard,19,6,Colossal Sword
Troll's Golden Lightning Sword,Troll's Golden Sword,Lightning,Lightning,25,29,10,0,0,0,Standard,19,6,Colossal Sword
Troll's Golden Sacred Sword,Troll's Golden Sword,Sacred,Sacred,25,29,10,0,0,0,Standard,19,6,Colossal Sword
Troll's Golden Magic Sword,Troll's Golden Sword,Magic,Magic,25,29,10,0,0,0,Standard,19,6,Colossal Sword
Troll's Golden Cold Sword,Troll's Golden Sword,Cold,Cold,25,29,10,0,0,0,Standard,19,6,Colossal Sword
Troll's Golden Poison Sword,Troll's Golden Sword,Poison,Poison,25,29,10,0,0,0,Standard,19,6,Colossal Sword
Troll's Golden Blood Sword,Troll's Golden Sword,Blood,Blood,25,29,10,0,0,0,Standard,19,6,Colossal Sword
Troll's Golden Occult Sword,Troll's Golden Sword,Occult,Occult,25,29,10,0,0,0,Standard,19,6,Colossal Sword
Zweihander,Zweihander,None,None,25,19,11,0,0,0,Standard,15.5,6,Colossal Sword
Heavy Zweihander,Zweihander,Heavy,Heavy,25,19,11,0,0,0,Standard,15.5,6,Colossal Sword
Keen Zweihander,Zweihander,Keen,Keen,25,19,11,0,0,0,Standard,15.5,6,Colossal Sword
Quality Zweihander,Zweihander,Quality,Quality,25,19,11,0,0,0,Standard,15.5,6,Colossal Sword
Fire Zweihander,Zweihander,Fire,Fire,25,19,11,0,0,0,Standard,15.5,6,Colossal Sword
Flame Art Zweihander,Zweihander,Flame Art,Flame Art,25,19,11,0,0,0,Standard,15.5,6,Colossal Sword
Lightning Zweihander,Zweihander,Lightning,Lightning,25,19,11,0,0,0,Standard,15.5,6,Colossal Sword
Sacred Zweihander,Zweihander,Sacred,Sacred,25,19,11,0,0,0,Standard,15.5,6,Colossal Sword
Magic Zweihander,Zweihander,Magic,Magic,25,19,11,0,0,0,Standard,15.5,6,Colossal Sword
Cold Zweihander,Zweihander,Cold,Cold,25,19,11,0,0,0,Standard,15.5,6,Colossal Sword
Poison Zweihander,Zweihander,Poison,Poison,25,19,11,0,0,0,Standard,15.5,6,Colossal Sword
Blood Zweihander,Zweihander,Blood,Blood,25,19,11,0,0,0,Standard,15.5,6,Colossal Sword
Occult Zweihander,Zweihander,Occult,Occult,25,19,11,0,0,0,Standard,15.5,6,Colossal Sword
Starscourge Greatsword,Starscourge Greatsword,None,-,10,38,12,15,0,0,Standard,20,6,Colossal Sword
Royal Greatsword,Royal Greatsword,None,-,10,26,18,22,0,0,Standard,20,6,Colossal Sword
Godslayer's Greatsword,Godslayer's Greatsword,None,-,10,20,22,0,20,0,Standard,17.5,6,Colossal Sword
Ruins Greatsword,Ruins Greatsword,None,-,10,50,0,16,0,0,Standard,23,6,Colossal Sword
Grafted Blade Greatsword,Grafted Blade Greatsword,None,-,10,40,14,0,0,0,Standard,21,6,Colossal Sword
Troll Knight's Sword,Troll Knight's Sword,None,-,10,20,14,18,0,0,Standard,18,6,Colossal Sword
Estoc,Estoc,None,None,25,11,13,0,0,0,Standard/Pierce,4.5,4,Thrusting Sword
Heavy Estoc,Estoc,Heavy,Heavy,25,11,13,0,0,0,Standard/Pierce,4.5,4,Thrusting Sword
Keen Estoc,Estoc,Keen,Keen,25,11,13,0,0,0,Standard/Pierce,4.5,4,Thrusting Sword
Quality Estoc,Estoc,Quality,Quality,25,11,13,0,0,0,Standard/Pierce,4.5,4,Thrusting Sword
Fire Estoc,Estoc,Fire,Fire,25,11,13,0,0,0,Standard/Pierce,4.5,4,Thrusting Sword
Flame Art Estoc,Estoc,Flame Art,Flame Art,25,11,13,0,0,0,Standard/Pierce,4.5,4,Thrusting Sword
Lightning Estoc,Estoc,Lightning,Lightning,25,11,13,0,0,0,Standard/Pierce,4.5,4,Thrusting Sword
Sacred Estoc,Estoc,Sacred,Sacred,25,11,13,0,0,0,Standard/Pierce,4.5,4,Thrusting Sword
Magic Estoc,Estoc,Magic,Magic,25,11,13,0,0,0,Standard/Pierce,4.5,4,Thrusting Sword
Cold Estoc,Estoc,Cold,Cold,25,11,13,0,0,0,Standard/Pierce,4.5,4,Thrusting Sword
Poison Estoc,Estoc,Poison,Poison,25,11,13,0,0,0,Standard/Pierce,4.5,4,Thrusting Sword
Blood Estoc,Estoc,Blood,Blood,25,11,13,0,0,0,Standard/Pierce,4.5,4,Thrusting Sword
Occult Estoc,Estoc,Occult,Occult,25,11,13,0,0,0,Standard/Pierce,4.5,4,Thrusting Sword
Cleanrot Knight's Sword,Cleanrot Knight's Sword,None,None,25,11,13,0,0,0,Standard/Pierce,4,4,Thrusting Sword
Cleanrot Knight's Heavy Sword,Cleanrot Knight's Sword,Heavy,Heavy,25,11,13,0,0,0,Standard/Pierce,4,4,Thrusting Sword
Cleanrot Knight's Keen Sword,Cleanrot Knight's Sword,Keen,Keen,25,11,13,0,0,0,Standard/Pierce,4,4,Thrusting Sword
Cleanrot Knight's Quality Sword,Cleanrot Knight's Sword,Quality,Quality,25,11,13,0,0,0,Standard/Pierce,4,4,Thrusting Sword
Cleanrot Knight's Fire Sword,Cleanrot Knight's Sword,Fire,Fire,25,11,13,0,0,0,Standard/Pierce,4,4,Thrusting Sword
Cleanrot Knight's Flame Art Sword,Cleanrot Knight's Sword,Flame Art,Flame Art,25,11,13,0,0,0,Standard/Pierce,4,4,Thrusting Sword
Cleanrot Knight's Lightning Sword,Cleanrot Knight's Sword,Lightning,Lightning,25,11,13,0,0,0,Standard/Pierce,4,4,Thrusting Sword
Cleanrot Knight's Sacred Sword,Cleanrot Knight's Sword,Sacred,Sacred,25,11,13,0,0,0,Standard/Pierce,4,4,Thrusting Sword
Cleanrot Knight's Magic Sword,Cleanrot Knight's Sword,Magic,Magic,25,11,13,0,0,0,Standard/Pierce,4,4,Thrusting Sword
Cleanrot Knight's Cold Sword,Cleanrot Knight's Sword,Cold,Cold,25,11,13,0,0,0,Standard/Pierce,4,4,Thrusting Sword
Cleanrot Knight's Poison Sword,Cleanrot Knight's Sword,Poison,Poison,25,11,13,0,0,0,Standard/Pierce,4,4,Thrusting Sword
Cleanrot Knight's Blood Sword,Cleanrot Knight's Sword,Blood,Blood,25,11,13,0,0,0,Standard/Pierce,4,4,Thrusting Sword
Cleanrot Knight's Occult Sword,Cleanrot Knight's Sword,Occult,Occult,25,11,13,0,0,0,Standard/Pierce,4,4,Thrusting Sword
Rapier,Rapier,None,None,25,7,12,0,0,0,Standard/Pierce,2.5,4,Thrusting Sword
Heavy Rapier,Rapier,Heavy,Heavy,25,7,12,0,0,0,Standard/Pierce,2.5,4,Thrusting Sword
Keen Rapier,Rapier,Keen,Keen,25,7,12,0,0,0,Standard/Pierce,2.5,4,Thrusting Sword
Quality Rapier,Rapier,Quality,Quality,25,7,12,0,0,0,Standard/Pierce,2.5,4,Thrusting Sword
Fire Rapier,Rapier,Fire,Fire,25,7,12,0,0,0,Standard/Pierce,2.5,4,Thrusting Sword
Flame Art Rapier,Rapier,Flame Art,Flame Art,25,7,12,0,0,0,Standard/Pierce,2.5,4,Thrusting Sword
Lightning Rapier,Rapier,Lightning,Lightning,25,7,12,0,0,0,Standard/Pierce,2.5,4,Thrusting Sword
Sacred Rapier,Rapier,Sacred,Sacred,25,7,12,0,0,0,Standard/Pierce,2.5,4,Thrusting Sword
Magic Rapier,Rapier,Magic,Magic,25,7,12,0,0,0,Standard/Pierce,2.5,4,Thrusting Sword
Cold Rapier,Rapier,Cold,Cold,25,7,12,0,0,0,Standard/Pierce,2.5,4,Thrusting Sword
Poison Rapier,Rapier,Poison,Poison,25,7,12,0,0,0,Standard/Pierce,2.5,4,Thrusting Sword
Blood Rapier,Rapier,Blood,Blood,25,7,12,0,0,0,Standard/Pierce,2.5,4,Thrusting Sword
Occult Rapier,Rapier,Occult,Occult,25,7,12,0,0,0,Standard/Pierce,2.5,4,Thrusting Sword
Rogier's Rapier,Rogier's Rapier,None,None,25,8,17,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Rogier's Heavy Rapier,Rogier's Rapier,Heavy,Heavy,25,8,17,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Rogier's Keen Rapier,Rogier's Rapier,Keen,Keen,25,8,17,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Rogier's Quality Rapier,Rogier's Rapier,Quality,Quality,25,8,17,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Rogier's Fire Rapier,Rogier's Rapier,Fire,Fire,25,8,17,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Rogier's Flame Art Rapier,Rogier's Rapier,Flame Art,Flame Art,25,8,17,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Rogier's Lightning Rapier,Rogier's Rapier,Lightning,Lightning,25,8,17,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Rogier's Sacred Rapier,Rogier's Rapier,Sacred,Sacred,25,8,17,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Rogier's Magic Rapier,Rogier's Rapier,Magic,Magic,25,8,17,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Rogier's Cold Rapier,Rogier's Rapier,Cold,Cold,25,8,17,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Rogier's Poison Rapier,Rogier's Rapier,Poison,Poison,25,8,17,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Rogier's Blood Rapier,Rogier's Rapier,Blood,Blood,25,8,17,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Rogier's Occult Rapier,Rogier's Rapier,Occult,Occult,25,8,17,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Antspur Rapier,Antspur Rapier,None,None,25,10,20,0,0,0,Standard/Pierce,3,4,Thrusting Sword
Heavy Antspur Rapier,Antspur Rapier,Heavy,Heavy,25,10,20,0,0,0,Standard/Pierce,3,4,Thrusting Sword
Keen Antspur Rapier,Antspur Rapier,Keen,Keen,25,10,20,0,0,0,Standard/Pierce,3,4,Thrusting Sword
Quality Antspur Rapier,Antspur Rapier,Quality,Quality,25,10,20,0,0,0,Standard/Pierce,3,4,Thrusting Sword
Fire Antspur Rapier,Antspur Rapier,Fire,Fire,25,10,20,0,0,0,Standard/Pierce,3,4,Thrusting Sword
Flame Art Antspur Rapier,Antspur Rapier,Flame Art,Flame Art,25,10,20,0,0,0,Standard/Pierce,3,4,Thrusting Sword
Lightning Antspur Rapier,Antspur Rapier,Lightning,Lightning,25,10,20,0,0,0,Standard/Pierce,3,4,Thrusting Sword
Sacred Antspur Rapier,Antspur Rapier,Sacred,Sacred,25,10,20,0,0,0,Standard/Pierce,3,4,Thrusting Sword
Magic Antspur Rapier,Antspur Rapier,Magic,Magic,25,10,20,0,0,0,Standard/Pierce,3,4,Thrusting Sword
Cold Antspur Rapier,Antspur Rapier,Cold,Cold,25,10,20,0,0,0,Standard/Pierce,3,4,Thrusting Sword
Poison Antspur Rapier,Antspur Rapier,Poison,Poison,25,10,20,0,0,0,Standard/Pierce,3,4,Thrusting Sword
Blood Antspur Rapier,Antspur Rapier,Blood,Blood,25,10,20,0,0,0,Standard/Pierce,3,4,Thrusting Sword
Occult Antspur Rapier,Antspur Rapier,Occult,Occult,25,10,20,0,0,0,Standard/Pierce,3,4,Thrusting Sword
Frozen Needle,Frozen Needle,None,-,10,11,18,0,0,0,Standard/Pierce,2.5,4,Thrusting Sword
Noble's Estoc,Noble's Estoc,None,None,25,9,10,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Noble's Heavy Estoc,Noble's Estoc,Heavy,Heavy,25,9,10,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Noble's Keen Estoc,Noble's Estoc,Keen,Keen,25,9,10,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Noble's Quality Estoc,Noble's Estoc,Quality,Quality,25,9,10,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Noble's Fire Estoc,Noble's Estoc,Fire,Fire,25,9,10,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Noble's Flame Art Estoc,Noble's Estoc,Flame Art,Flame Art,25,9,10,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Noble's Lightning Estoc,Noble's Estoc,Lightning,Lightning,25,9,10,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Noble's Sacred Estoc,Noble's Estoc,Sacred,Sacred,25,9,10,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Noble's Magic Estoc,Noble's Estoc,Magic,Magic,25,9,10,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Noble's Cold Estoc,Noble's Estoc,Cold,Cold,25,9,10,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Noble's Poison Estoc,Noble's Estoc,Poison,Poison,25,9,10,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Noble's Blood Estoc,Noble's Estoc,Blood,Blood,25,9,10,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Noble's Occult Estoc,Noble's Estoc,Occult,Occult,25,9,10,0,0,0,Standard/Pierce,3.5,4,Thrusting Sword
Bloody Helice,Bloody Helice,None,-,10,16,19,0,0,17,Standard/Pierce,8,5.5,Heavy Thrusting Sword
Godskin Stitcher,Godskin Stitcher,None,None,25,14,17,0,0,0,Standard/Pierce,7,5.5,Heavy Thrusting Sword
Heavy Godskin Stitcher,Godskin Stitcher,Heavy,Heavy,25,14,17,0,0,0,Standard/Pierce,7,5.5,Heavy Thrusting Sword
Keen Godskin Stitcher,Godskin Stitcher,Keen,Keen,25,14,17,0,0,0,Standard/Pierce,7,5.5,Heavy Thrusting Sword
Quality Godskin Stitcher,Godskin Stitcher,Quality,Quality,25,14,17,0,0,0,Standard/Pierce,7,5.5,Heavy Thrusting Sword
Fire Godskin Stitcher,Godskin Stitcher,Fire,Fire,25,14,17,0,0,0,Standard/Pierce,7,5.5,Heavy Thrusting Sword
Flame Art Godskin Stitcher,Godskin Stitcher,Flame Art,Flame Art,25,14,17,0,0,0,Standard/Pierce,7,5.5,Heavy Thrusting Sword
Lightning Godskin Stitcher,Godskin Stitcher,Lightning,Lightning,25,14,17,0,0,0,Standard/Pierce,7,5.5,Heavy Thrusting Sword
Sacred Godskin Stitcher,Godskin Stitcher,Sacred,Sacred,25,14,17,0,0,0,Standard/Pierce,7,5.5,Heavy Thrusting Sword
Magic Godskin Stitcher,Godskin Stitcher,Magic,Magic,25,14,17,0,0,0,Standard/Pierce,7,5.5,Heavy Thrusting Sword
Cold Godskin Stitcher,Godskin Stitcher,Cold,Cold,25,14,17,0,0,0,Standard/Pierce,7,5.5,Heavy Thrusting Sword
Poison Godskin Stitcher,Godskin Stitcher,Poison,Poison,25,14,17,0,0,0,Standard/Pierce,7,5.5,Heavy Thrusting Sword
Blood Godskin Stitcher,Godskin Stitcher,Blood,Blood,25,14,17,0,0,0,Standard/Pierce,7,5.5,Heavy Thrusting Sword
Occult Godskin Stitcher,Godskin Stitcher,Occult,Occult,25,14,17,0,0,0,Standard/Pierce,7,5.5,Heavy Thrusting Sword
Great Epee,Great Epee,None,None,25,15,16,0,0,0,Standard/Pierce,6.5,5.5,Heavy Thrusting Sword
Heavy Great Epee,Great Epee,Heavy,Heavy,25,15,16,0,0,0,Standard/Pierce,6.5,5.5,Heavy Thrusting Sword
Keen Great Epee,Great Epee,Keen,Keen,25,15,16,0,0,0,Standard/Pierce,6.5,5.5,Heavy Thrusting Sword
Quality Great Epee,Great Epee,Quality,Quality,25,15,16,0,0,0,Standard/Pierce,6.5,5.5,Heavy Thrusting Sword
Fire Great Epee,Great Epee,Fire,Fire,25,15,16,0,0,0,Standard/Pierce,6.5,5.5,Heavy Thrusting Sword
Flame Art Great Epee,Great Epee,Flame Art,Flame Art,25,15,16,0,0,0,Standard/Pierce,6.5,5.5,Heavy Thrusting Sword
Lightning Great Epee,Great Epee,Lightning,Lightning,25,15,16,0,0,0,Standard/Pierce,6.5,5.5,Heavy Thrusting Sword
Sacred Great Epee,Great Epee,Sacred,Sacred,25,15,16,0,0,0,Standard/Pierce,6.5,5.5,Heavy Thrusting Sword
Magic Great Epee,Great Epee,Magic,Magic,25,15,16,0,0,0,Standard/Pierce,6.5,5.5,Heavy Thrusting Sword
Cold Great Epee,Great Epee,Cold,Cold,25,15,16,0,0,0,Standard/Pierce,6.5,5.5,Heavy Thrusting Sword
Poison Great Epee,Great Epee,Poison,Poison,25,15,16,0,0,0,Standard/Pierce,6.5,5.5,Heavy Thrusting Sword
Blood Great Epee,Great Epee,Blood,Blood,25,15,16,0,0,0,Standard/Pierce,6.5,5.5,Heavy Thrusting Sword
Occult Great Epee,Great Epee,Occult,Occult,25,15,16,0,0,0,Standard/Pierce,6.5,5.5,Heavy Thrusting Sword
Dragon King's Cragblade,Dragon King's Cragblade,None,-,10,18,37,0,0,0,Standard/Pierce,8,5.5,Heavy Thrusting Sword
Falchion,Falchion,None,None,25,9,13,0,0,0,Slash,3.5,5,Curved Sword
Heavy Falchion,Falchion,Heavy,Heavy,25,9,13,0,0,0,Slash,3.5,5,Curved Sword
Keen Falchion,Falchion,Keen,Keen,25,9,13,0,0,0,Slash,3.5,5,Curved Sword
Quality Falchion,Falchion,Quality,Quality,25,9,13,0,0,0,Slash,3.5,5,Curved Sword
Fire Falchion,Falchion,Fire,Fire,25,9,13,0,0,0,Slash,3.5,5,Curved Sword
Flame Art Falchion,Falchion,Flame Art,Flame Art,25,9,13,0,0,0,Slash,3.5,5,Curved Sword
Lightning Falchion,Falchion,Lightning,Lightning,25,9,13,0,0,0,Slash,3.5,5,Curved Sword
Sacred Falchion,Falchion,Sacred,Sacred,25,9,13,0,0,0,Slash,3.5,5,Curved Sword
Magic Falchion,Falchion,Magic,Magic,25,9,13,0,0,0,Slash,3.5,5,Curved Sword
Cold Falchion,Falchion,Cold,Cold,25,9,13,0,0,0,Slash,3.5,5,Curved Sword
Poison Falchion,Falchion,Poison,Poison,25,9,13,0,0,0,Slash,3.5,5,Curved Sword
Blood Falchion,Falchion,Blood,Blood,25,9,13,0,0,0,Slash,3.5,5,Curved Sword
Occult Falchion,Falchion,Occult,Occult,25,9,13,0,0,0,Slash,3.5,5,Curved Sword
Beastman's Curved Sword,Beastman's Curved Sword,None,None,25,13,11,0,0,0,Slash,4,5,Curved Sword
Beastman's Heavy Curved Sword,Beastman's Curved Sword,Heavy,Heavy,25,13,11,0,0,0,Slash,4,5,Curved Sword
Beastman's Keen Curved Sword,Beastman's Curved Sword,Keen,Keen,25,13,11,0,0,0,Slash,4,5,Curved Sword
Beastman's Quality Curved Sword,Beastman's Curved Sword,Quality,Quality,25,13,11,0,0,0,Slash,4,5,Curved Sword
Beastman's Fire Curved Sword,Beastman's Curved Sword,Fire,Fire,25,13,11,0,0,0,Slash,4,5,Curved Sword
Beastman's Flame Art Curved Sword,Beastman's Curved Sword,Flame Art,Flame Art,25,13,11,0,0,0,Slash,4,5,Curved Sword
Beastman's Lightning Curved Sword,Beastman's Curved Sword,Lightning,Lightning,25,13,11,0,0,0,Slash,4,5,Curved Sword
Beastman's Sacred Curved Sword,Beastman's Curved Sword,Sacred,Sacred,25,13,11,0,0,0,Slash,4,5,Curved Sword
Beastman's Magic Curved Sword,Beastman's Curved Sword,Magic,Magic,25,13,11,0,0,0,Slash,4,5,Curved Sword
Beastman's Cold Curved Sword,Beastman's Curved Sword,Cold,Cold,25,13,11,0,0,0,Slash,4,5,Curved Sword
Beastman's Poison Curved Sword,Beastman's Curved Sword,Poison,Poison,25,13,11,0,0,0,Slash,4,5,Curved Sword
Beastman's Blood Curved Sword,Beastman's Curved Sword,Blood,Blood,25,13,11,0,0,0,Slash,4,5,Curved Sword
Beastman's Occult Curved Sword,Beastman's Curved Sword,Occult,Occult,25,13,11,0,0,0,Slash,4,5,Curved Sword
Shotel,Shotel,None,None,25,9,19,0,0,0,Slash,2,5,Curved Sword
Heavy Shotel,Shotel,Heavy,Heavy,25,9,19,0,0,0,Slash,2,5,Curved Sword
Keen Shotel,Shotel,Keen,Keen,25,9,19,0,0,0,Slash,2,5,Curved Sword
Quality Shotel,Shotel,Quality,Quality,25,9,19,0,0,0,Slash,2,5,Curved Sword
Fire Shotel,Shotel,Fire,Fire,25,9,19,0,0,0,Slash,2,5,Curved Sword
Flame Art Shotel,Shotel,Flame Art,Flame Art,25,9,19,0,0,0,Slash,2,5,Curved Sword
Lightning Shotel,Shotel,Lightning,Lightning,25,9,19,0,0,0,Slash,2,5,Curved Sword
Sacred Shotel,Shotel,Sacred,Sacred,25,9,19,0,0,0,Slash,2,5,Curved Sword
Magic Shotel,Shotel,Magic,Magic,25,9,19,0,0,0,Slash,2,5,Curved Sword
Cold Shotel,Shotel,Cold,Cold,25,9,19,0,0,0,Slash,2,5,Curved Sword
Poison Shotel,Shotel,Poison,Poison,25,9,19,0,0,0,Slash,2,5,Curved Sword
Blood Shotel,Shotel,Blood,Blood,25,9,19,0,0,0,Slash,2,5,Curved Sword
Occult Shotel,Shotel,Occult,Occult,25,9,19,0,0,0,Slash,2,5,Curved Sword
Shamshir,Shamshir,None,None,25,7,13,0,0,0,Slash,3.5,5,Curved Sword
Heavy Shamshir,Shamshir,Heavy,Heavy,25,7,13,0,0,0,Slash,3.5,5,Curved Sword
Keen Shamshir,Shamshir,Keen,Keen,25,7,13,0,0,0,Slash,3.5,5,Curved Sword
Quality Shamshir,Shamshir,Quality,Quality,25,7,13,0,0,0,Slash,3.5,5,Curved Sword
Fire Shamshir,Shamshir,Fire,Fire,25,7,13,0,0,0,Slash,3.5,5,Curved Sword
Flame Art Shamshir,Shamshir,Flame Art,Flame Art,25,7,13,0,0,0,Slash,3.5,5,Curved Sword
Lightning Shamshir,Shamshir,Lightning,Lightning,25,7,13,0,0,0,Slash,3.5,5,Curved Sword
Sacred Shamshir,Shamshir,Sacred,Sacred,25,7,13,0,0,0,Slash,3.5,5,Curved Sword
Magic Shamshir,Shamshir,Magic,Magic,25,7,13,0,0,0,Slash,3.5,5,Curved Sword
Cold Shamshir,Shamshir,Cold,Cold,25,7,13,0,0,0,Slash,3.5,5,Curved Sword
Poison Shamshir,Shamshir,Poison,Poison,25,7,13,0,0,0,Slash,3.5,5,Curved Sword
Blood Shamshir,Shamshir,Blood,Blood,25,7,13,0,0,0,Slash,3.5,5,Curved Sword
Occult Shamshir,Shamshir,Occult,Occult,25,7,13,0,0,0,Slash,3.5,5,Curved Sword
Bandit's Curved Sword,Bandit's Curved Sword,None,None,25,11,13,0,0,0,Slash,5,5,Curved Sword
Bandit's Heavy Curved Sword,Bandit's Curved Sword,Heavy,Heavy,25,11,13,0,0,0,Slash,5,5,Curved Sword
Bandit's Keen Curved Sword,Bandit's Curved Sword,Keen,Keen,25,11,13,0,0,0,Slash,5,5,Curved Sword
Bandit's Quality Curved Sword,Bandit's Curved Sword,Quality,Quality,25,11,13,0,0,0,Slash,5,5,Curved Sword
Bandit's Fire Curved Sword,Bandit's Curved Sword,Fire,Fire,25,11,13,0,0,0,Slash,5,5,Curved Sword
Bandit's Flame Art Curved Sword,Bandit's Curved Sword,Flame Art,Flame Art,25,11,13,0,0,0,Slash,5,5,Curved Sword
Bandit's Lightning Curved Sword,Bandit's Curved Sword,Lightning,Lightning,25,11,13,0,0,0,Slash,5,5,Curved Sword
Bandit's Sacred Curved Sword,Bandit's Curved Sword,Sacred,Sacred,25,11,13,0,0,0,Slash,5,5,Curved Sword
Bandit's Magic Curved Sword,Bandit's Curved Sword,Magic,Magic,25,11,13,0,0,0,Slash,5,5,Curved Sword
Bandit's Cold Curved Sword,Bandit's Curved Sword,Cold,Cold,25,11,13,0,0,0,Slash,5,5,Curved Sword
Bandit's Poison Curved Sword,Bandit's Curved Sword,Poison,Poison,25,11,13,0,0,0,Slash,5,5,Curved Sword
Bandit's Blood Curved Sword,Bandit's Curved Sword,Blood,Blood,25,11,13,0,0,0,Slash,5,5,Curved Sword
Bandit's Occult Curved Sword,Bandit's Curved Sword,Occult,Occult,25,11,13,0,0,0,Slash,5,5,Curved Sword
Magma Blade,Magma Blade,None,-,10,9,15,0,16,0,Slash,4,5,Curved Sword
Flowing Curved Sword,Flowing Curved Sword,None,None,25,9,17,0,0,0,Slash,3.5,5,Curved Sword
Flowing Heavy Curved Sword,Flowing Curved Sword,Heavy,Heavy,25,9,17,0,0,0,Slash,3.5,5,Curved Sword
Flowing Keen Curved Sword,Flowing Curved Sword,Keen,Keen,25,9,17,0,0,0,Slash,3.5,5,Curved Sword
Flowing Quality Curved Sword,Flowing Curved Sword,Quality,Quality,25,9,17,0,0,0,Slash,3.5,5,Curved Sword
Flowing Fire Curved Sword,Flowing Curved Sword,Fire,Fire,25,9,17,0,0,0,Slash,3.5,5,Curved Sword
Flowing Flame Art Curved Sword,Flowing Curved Sword,Flame Art,Flame Art,25,9,17,0,0,0,Slash,3.5,5,Curved Sword
Flowing Lightning Curved Sword,Flowing Curved Sword,Lightning,Lightning,25,9,17,0,0,0,Slash,3.5,5,Curved Sword
Flowing Sacred Curved Sword,Flowing Curved Sword,Sacred,Sacred,25,9,17,0,0,0,Slash,3.5,5,Curved Sword
Flowing Magic Curved Sword,Flowing Curved Sword,Magic,Magic,25,9,17,0,0,0,Slash,3.5,5,Curved Sword
Flowing Cold Curved Sword,Flowing Curved Sword,Cold,Cold,25,9,17,0,0,0,Slash,3.5,5,Curved Sword
Flowing Poison Curved Sword,Flowing Curved Sword,Poison,Poison,25,9,17,0,0,0,Slash,3.5,5,Curved Sword
Flowing Blood Curved Sword,Flowing Curved Sword,Blood,Blood,25,9,17,0,0,0,Slash,3.5,5,Curved Sword
Flowing Occult Curved Sword,Flowing Curved Sword,Occult,Occult,25,9,17,0,0,0,Slash,3.5,5,Curved Sword
Wing of Astel,Wing of Astel,None,-,10,7,17,20,0,0,Slash,2.5,5,Curved Sword
Scavenger's Curved Sword,Scavenger's Curved Sword,None,None,25,9,14,0,0,0,Slash,3.5,5,Curved Sword
Scavenger's Heavy Curved Sword,Scavenger's Curved Sword,Heavy,Heavy,25,9,14,0,0,0,Slash,3.5,5,Curved Sword
Scavenger's Keen Curved Sword,Scavenger's Curved Sword,Keen,Keen,25,9,14,0,0,0,Slash,3.5,5,Curved Sword
Scavenger's Quality Curved Sword,Scavenger's Curved Sword,Quality,Quality,25,9,14,0,0,0,Slash,3.5,5,Curved Sword
Scavenger's Fire Curved Sword,Scavenger's Curved Sword,Fire,Fire,25,9,14,0,0,0,Slash,3.5,5,Curved Sword
Scavenger's Flame Art Curved Sword,Scavenger's Curved Sword,Flame Art,Flame Art,25,9,14,0,0,0,Slash,3.5,5,Curved Sword
Scavenger's Lightning Curved Sword,Scavenger's Curved Sword,Lightning,Lightning,25,9,14,0,0,0,Slash,3.5,5,Curved Sword
Scavenger's Sacred Curved Sword,Scavenger's Curved Sword,Sacred,Sacred,25,9,14,0,0,0,Slash,3.5,5,Curved Sword
Scavenger's Magic Curved Sword,Scavenger's Curved Sword,Magic,Magic,25,9,14,0,0,0,Slash,3.5,5,Curved Sword
Scavenger's Cold Curved Sword,Scavenger's Curved Sword,Cold,Cold,25,9,14,0,0,0,Slash,3.5,5,Curved Sword
Scavenger's Poison Curved Sword,Scavenger's Curved Sword,Poison,Poison,25,9,14,0,0,0,Slash,3.5,5,Curved Sword
Scavenger's Blood Curved Sword,Scavenger's Curved Sword,Blood,Blood,25,9,14,0,0,0,Slash,3.5,5,Curved Sword
Scavenger's Occult Curved Sword,Scavenger's Curved Sword,Occult,Occult,25,9,14,0,0,0,Slash,3.5,5,Curved Sword
Eclipse Shotel,Eclipse Shotel,None,-,10,10,25,0,30,0,Slash,3,5,Curved Sword
Serpent-God's Curved Sword,Serpent-God's Curved Sword,None,None,25,13,9,0,0,0,Slash,4,5,Curved Sword
Serpent-God's Heavy Curved Sword,Serpent-God's Curved Sword,Heavy,Heavy,25,13,9,0,0,0,Slash,4,5,Curved Sword
Serpent-God's Keen Curved Sword,Serpent-God's Curved Sword,Keen,Keen,25,13,9,0,0,0,Slash,4,5,Curved Sword
Serpent-God's Quality Curved Sword,Serpent-God's Curved Sword,Quality,Quality,25,13,9,0,0,0,Slash,4,5,Curved Sword
Serpent-God's Fire Curved Sword,Serpent-God's Curved Sword,Fire,Fire,25,13,9,0,0,0,Slash,4,5,Curved Sword
Serpent-God's Flame Art Curved Sword,Serpent-God's Curved Sword,Flame Art,Flame Art,25,13,9,0,0,0,Slash,4,5,Curved Sword
Serpent-God's Lightning Curved Sword,Serpent-God's Curved Sword,Lightning,Lightning,25,13,9,0,0,0,Slash,4,5,Curved Sword
Serpent-God's Sacred Curved Sword,Serpent-God's Curved Sword,Sacred,Sacred,25,13,9,0,0,0,Slash,4,5,Curved Sword
Serpent-God's Magic Curved Sword,Serpent-God's Curved Sword,Magic,Magic,25,13,9,0,0,0,Slash,4,5,Curved Sword
Serpent-God's Cold Curved Sword,Serpent-God's Curved Sword,Cold,Cold,25,13,9,0,0,0,Slash,4,5,Curved Sword
Serpent-God's Poison Curved Sword,Serpent-God's Curved Sword,Poison,Poison,25,13,9,0,0,0,Slash,4,5,Curved Sword
Serpent-God's Blood Curved Sword,Serpent-God's Curved Sword,Blood,Blood,25,13,9,0,0,0,Slash,4,5,Curved Sword
Serpent-God's Occult Curved Sword,Serpent-God's Curved Sword,Occult,Occult,25,13,9,0,0,0,Slash,4,5,Curved Sword
Mantis Blade,Mantis Blade,None,None,25,10,12,0,0,0,Slash,4,5,Curved Sword
Heavy Mantis Blade,Mantis Blade,Heavy,Heavy,25,10,12,0,0,0,Slash,4,5,Curved Sword
Keen Mantis Blade,Mantis Blade,Keen,Keen,25,10,12,0,0,0,Slash,4,5,Curved Sword
Quality Mantis Blade,Mantis Blade,Quality,Quality,25,10,12,0,0,0,Slash,4,5,Curved Sword
Fire Mantis Blade,Mantis Blade,Fire,Fire,25,10,12,0,0,0,Slash,4,5,Curved Sword
Flame Art Mantis Blade,Mantis Blade,Flame Art,Flame Art,25,10,12,0,0,0,Slash,4,5,Curved Sword
Lightning Mantis Blade,Mantis Blade,Lightning,Lightning,25,10,12,0,0,0,Slash,4,5,Curved Sword
Sacred Mantis Blade,Mantis Blade,Sacred,Sacred,25,10,12,0,0,0,Slash,4,5,Curved Sword
Magic Mantis Blade,Mantis Blade,Magic,Magic,25,10,12,0,0,0,Slash,4,5,Curved Sword
Cold Mantis Blade,Mantis Blade,Cold,Cold,25,10,12,0,0,0,Slash,4,5,Curved Sword
Poison Mantis Blade,Mantis Blade,Poison,Poison,25,10,12,0,0,0,Slash,4,5,Curved Sword
Blood Mantis Blade,Mantis Blade,Blood,Blood,25,10,12,0,0,0,Slash,4,5,Curved Sword
Occult Mantis Blade,Mantis Blade,Occult,Occult,25,10,12,0,0,0,Slash,4,5,Curved Sword
Scimitar,Scimitar,None,None,25,7,13,0,0,0,Slash,3,5,Curved Sword
Heavy Scimitar,Scimitar,Heavy,Heavy,25,7,13,0,0,0,Slash,3,5,Curved Sword
Keen Scimitar,Scimitar,Keen,Keen,25,7,13,0,0,0,Slash,3,5,Curved Sword
Quality Scimitar,Scimitar,Quality,Quality,25,7,13,0,0,0,Slash,3,5,Curved Sword
Fire Scimitar,Scimitar,Fire,Fire,25,7,13,0,0,0,Slash,3,5,Curved Sword
Flame Art Scimitar,Scimitar,Flame Art,Flame Art,25,7,13,0,0,0,Slash,3,5,Curved Sword
Lightning Scimitar,Scimitar,Lightning,Lightning,25,7,13,0,0,0,Slash,3,5,Curved Sword
Sacred Scimitar,Scimitar,Sacred,Sacred,25,7,13,0,0,0,Slash,3,5,Curved Sword
Magic Scimitar,Scimitar,Magic,Magic,25,7,13,0,0,0,Slash,3,5,Curved Sword
Cold Scimitar,Scimitar,Cold,Cold,25,7,13,0,0,0,Slash,3,5,Curved Sword
Poison Scimitar,Scimitar,Poison,Poison,25,7,13,0,0,0,Slash,3,5,Curved Sword
Bloody Scimitar,Scimitar,Blood,Blood,25,7,13,0,0,0,Slash,3,5,Curved Sword
Occult Scimitar,Scimitar,Occult,Occult,25,7,13,0,0,0,Slash,3,5,Curved Sword
Grossmesser,Grossmesser,None,None,25,14,12,0,0,0,Slash,4.5,5,Curved Sword
Heavy Grossmesser,Grossmesser,Heavy,Heavy,25,14,12,0,0,0,Slash,4.5,5,Curved Sword
Keen Grossmesser,Grossmesser,Keen,Keen,25,14,12,0,0,0,Slash,4.5,5,Curved Sword
Quality Grossmesser,Grossmesser,Quality,Quality,25,14,12,0,0,0,Slash,4.5,5,Curved Sword
Fire Grossmesser,Grossmesser,Fire,Fire,25,14,12,0,0,0,Slash,4.5,5,Curved Sword
Flame Art Grossmesser,Grossmesser,Flame Art,Flame Art,25,14,12,0,0,0,Slash,4.5,5,Curved Sword
Lightning Grossmesser,Grossmesser,Lightning,Lightning,25,14,12,0,0,0,Slash,4.5,5,Curved Sword
Sacred Grossmesser,Grossmesser,Sacred,Sacred,25,14,12,0,0,0,Slash,4.5,5,Curved Sword
Magic Grossmesser,Grossmesser,Magic,Magic,25,14,12,0,0,0,Slash,4.5,5,Curved Sword
Cold Grossmesser,Grossmesser,Cold,Cold,25,14,12,0,0,0,Slash,4.5,5,Curved Sword
Poison Grossmesser,Grossmesser,Poison,Poison,25,14,12,0,0,0,Slash,4.5,5,Curved Sword
Blood Grossmesser,Grossmesser,Blood,Blood,25,14,12,0,0,0,Slash,4.5,5,Curved Sword
Occult Grossmesser,Grossmesser,Occult,Occult,25,14,12,0,0,0,Slash,4.5,5,Curved Sword
Onyx Lord's Greatsword,Onyx Lord's Greatsword,None,-,10,20,16,16,0,0,Slash,11.5,5.5,Curved Greatsword
Dismounter,Dismounter,None,None,25,19,16,0,0,0,Slash,10,5.5,Curved Greatsword
Heavy Dismounter,Dismounter,Heavy,Heavy,25,19,16,0,0,0,Slash,10,5.5,Curved Greatsword
Keen Dismounter,Dismounter,Keen,Keen,25,19,16,0,0,0,Slash,10,5.5,Curved Greatsword
Quality Dismounter,Dismounter,Quality,Quality,25,19,16,0,0,0,Slash,10,5.5,Curved Greatsword
Fire Dismounter,Dismounter,Fire,Fire,25,19,16,0,0,0,Slash,10,5.5,Curved Greatsword
Flame Art Dismounter,Dismounter,Flame Art,Flame Art,25,19,16,0,0,0,Slash,10,5.5,Curved Greatsword
Lightning Dismounter,Dismounter,Lightning,Lightning,25,19,16,0,0,0,Slash,10,5.5,Curved Greatsword
Sacred Dismounter,Dismounter,Sacred,Sacred,25,19,16,0,0,0,Slash,10,5.5,Curved Greatsword
Magic Dismounter,Dismounter,Magic,Magic,25,19,16,0,0,0,Slash,10,5.5,Curved Greatsword
Cold Dismounter,Dismounter,Cold,Cold,25,19,16,0,0,0,Slash,10,5.5,Curved Greatsword
Poison Dismounter,Dismounter,Poison,Poison,25,19,16,0,0,0,Slash,10,5.5,Curved Greatsword
Blood Dismounter,Dismounter,Blood,Blood,25,19,16,0,0,0,Slash,10,5.5,Curved Greatsword
Occult Dismounter,Dismounter,Occult,Occult,25,19,16,0,0,0,Slash,10,5.5,Curved Greatsword
Bloodhound's Fang,Bloodhound's Fang,None,-,10,18,17,0,0,0,Slash,11.5,5.5,Curved Greatsword
Magma Wyrm's Scalesword,Magma Wyrm's Scalesword,None,-,10,24,15,0,18,0,Slash,15,5.5,Curved Greatsword
Zamor Curved Sword,Zamor Curved Sword,None,-,10,16,18,0,0,0,Slash,9,5.5,Curved Greatsword
Omen Cleaver,Omen Cleaver,None,None,25,19,16,0,0,0,Slash,11.5,5.5,Curved Greatsword
Heavy Omen Cleaver,Omen Cleaver,Heavy,Heavy,25,19,16,0,0,0,Slash,11.5,5.5,Curved Greatsword
Keen Omen Cleaver,Omen Cleaver,Keen,Keen,25,19,16,0,0,0,Slash,11.5,5.5,Curved Greatsword
Quality Omen Cleaver,Omen Cleaver,Quality,Quality,25,19,16,0,0,0,Slash,11.5,5.5,Curved Greatsword
Fire Omen Cleaver,Omen Cleaver,Fire,Fire,25,19,16,0,0,0,Slash,11.5,5.5,Curved Greatsword
Flame Art Omen Cleaver,Omen Cleaver,Flame Art,Flame Art,25,19,16,0,0,0,Slash,11.5,5.5,Curved Greatsword
Lightning Omen Cleaver,Omen Cleaver,Lightning,Lightning,25,19,16,0,0,0,Slash,11.5,5.5,Curved Greatsword
Sacred Omen Cleaver,Omen Cleaver,Sacred,Sacred,25,19,16,0,0,0,Slash,11.5,5.5,Curved Greatsword
Magic Omen Cleaver,Omen Cleaver,Magic,Magic,25,19,16,0,0,0,Slash,11.5,5.5,Curved Greatsword
Cold Omen Cleaver,Omen Cleaver,Cold,Cold,25,19,16,0,0,0,Slash,11.5,5.5,Curved Greatsword
Poison Omen Cleaver,Omen Cleaver,Poison,Poison,25,19,16,0,0,0,Slash,11.5,5.5,Curved Greatsword
Blood Omen Cleaver,Omen Cleaver,Blood,Blood,25,19,16,0,0,0,Slash,11.5,5.5,Curved Greatsword
Occult Omen Cleaver,Omen Cleaver,Occult,Occult,25,19,16,0,0,0,Slash,11.5,5.5,Curved Greatsword
Monk's Flameblade,Monk's Flameblade,None,None,25,18,18,0,0,0,Slash,9,5.5,Curved Greatsword
Monk's Heavy Flameblade,Monk's Flameblade,Heavy,Heavy,25,18,18,0,0,0,Slash,9,5.5,Curved Greatsword
Monk's Keen Flameblade,Monk's Flameblade,Keen,Keen,25,18,18,0,0,0,Slash,9,5.5,Curved Greatsword
Monk's Quality Flameblade,Monk's Flameblade,Quality,Quality,25,18,18,0,0,0,Slash,9,5.5,Curved Greatsword
Monk's Fire Flameblade,Monk's Flameblade,Fire,Fire,25,18,18,0,0,0,Slash,9,5.5,Curved Greatsword
Monk's Flame Art Flameblade,Monk's Flameblade,Flame Art,Flame Art,25,18,18,0,0,0,Slash,9,5.5,Curved Greatsword
Monk's Lightning Flameblade,Monk's Flameblade,Lightning,Lightning,25,18,18,0,0,0,Slash,9,5.5,Curved Greatsword
Monk's Sacred Flameblade,Monk's Flameblade,Sacred,Sacred,25,18,18,0,0,0,Slash,9,5.5,Curved Greatsword
Monk's Magic Flameblade,Monk's Flameblade,Magic,Magic,25,18,18,0,0,0,Slash,9,5.5,Curved Greatsword
Monk's Cold Flameblade,Monk's Flameblade,Cold,Cold,25,18,18,0,0,0,Slash,9,5.5,Curved Greatsword
Monk's Poison Flameblade,Monk's Flameblade,Poison,Poison,25,18,18,0,0,0,Slash,9,5.5,Curved Greatsword
Monk's Blood Flameblade,Monk's Flameblade,Blood,Blood,25,18,18,0,0,0,Slash,9,5.5,Curved Greatsword
Monk's Occult Flameblade,Monk's Flameblade,Occult,Occult,25,18,18,0,0,0,Slash,9,5.5,Curved Greatsword
Beastman's Cleaver,Beastman's Cleaver,None,None,25,25,14,0,0,0,Slash,16.5,5.5,Curved Greatsword
Beastman's Heavy Cleaver,Beastman's Cleaver,Heavy,Heavy,25,25,14,0,0,0,Slash,16.5,5.5,Curved Greatsword
Beastman's Keen Cleaver,Beastman's Cleaver,Keen,Keen,25,25,14,0,0,0,Slash,16.5,5.5,Curved Greatsword
Beastman's Quality Cleaver,Beastman's Cleaver,Quality,Quality,25,25,14,0,0,0,Slash,16.5,5.5,Curved Greatsword
Beastman's Fire Cleaver,Beastman's Cleaver,Fire,Fire,25,25,14,0,0,0,Slash,16.5,5.5,Curved Greatsword
Beastman's Flame Art Cleaver,Beastman's Cleaver,Flame Art,Flame Art,25,25,14,0,0,0,Slash,16.5,5.5,Curved Greatsword
Beastman's Lightning Cleaver,Beastman's Cleaver,Lightning,Lightning,25,25,14,0,0,0,Slash,16.5,5.5,Curved Greatsword
Beastman's Sacred Cleaver,Beastman's Cleaver,Sacred,Sacred,25,25,14,0,0,0,Slash,16.5,5.5,Curved Greatsword
Beastman's Magic Cleaver,Beastman's Cleaver,Magic,Magic,25,25,14,0,0,0,Slash,16.5,5.5,Curved Greatsword
Beastman's Cold Cleaver,Beastman's Cleaver,Cold,Cold,25,25,14,0,0,0,Slash,16.5,5.5,Curved Greatsword
Beastman's Poison Cleaver,Beastman's Cleaver,Poison,Poison,25,25,14,0,0,0,Slash,16.5,5.5,Curved Greatsword
Beastman's Blood Cleaver,Beastman's Cleaver,Blood,Blood,25,25,14,0,0,0,Slash,16.5,5.5,Curved Greatsword
Beastman's Occult Cleaver,Beastman's Cleaver,Occult,Occult,25,25,14,0,0,0,Slash,16.5,5.5,Curved Greatsword
Morgott's Cursed Sword,Morgott's Cursed Sword,None,-,10,14,35,0,0,17,Slash,7.5,5.5,Curved Greatsword
Uchigatana,Uchigatana,None,None,25,11,15,0,0,0,Slash/Pierce,5.5,5,Katana
Heavy Uchigatana,Uchigatana,Heavy,Heavy,25,11,15,0,0,0,Slash/Pierce,5.5,5,Katana
Keen Uchigatana,Uchigatana,Keen,Keen,25,11,15,0,0,0,Slash/Pierce,5.5,5,Katana
Quality Uchigatana,Uchigatana,Quality,Quality,25,11,15,0,0,0,Slash/Pierce,5.5,5,Katana
Fire Uchigatana,Uchigatana,Fire,Fire,25,11,15,0,0,0,Slash/Pierce,5.5,5,Katana
Flame Art Uchigatana,Uchigatana,Flame Art,Flame Art,25,11,15,0,0,0,Slash/Pierce,5.5,5,Katana
Lightning Uchigatana,Uchigatana,Lightning,Lightning,25,11,15,0,0,0,Slash/Pierce,5.5,5,Katana
Sacred Uchigatana,Uchigatana,Sacred,Sacred,25,11,15,0,0,0,Slash/Pierce,5.5,5,Katana
Magic Uchigatana,Uchigatana,Magic,Magic,25,11,15,0,0,0,Slash/Pierce,5.5,5,Katana
Cold Uchigatana,Uchigatana,Cold,Cold,25,11,15,0,0,0,Slash/Pierce,5.5,5,Katana
Poison Uchigatana,Uchigatana,Poison,Poison,25,11,15,0,0,0,Slash/Pierce,5.5,5,Katana
Blood Uchigatana,Uchigatana,Blood,Blood,25,11,15,0,0,0,Slash/Pierce,5.5,5,Katana
Occult Uchigatana,Uchigatana,Occult,Occult,25,11,15,0,0,0,Slash/Pierce,5.5,5,Katana
Nagakiba,Nagakiba,None,None,25,18,22,0,0,0,Slash/Pierce,7,5,Katana
Heavy Nagakiba,Nagakiba,Heavy,Heavy,25,18,22,0,0,0,Slash/Pierce,7,5,Katana
Keen Nagakiba,Nagakiba,Keen,Keen,25,18,22,0,0,0,Slash/Pierce,7,5,Katana
Quality Nagakiba,Nagakiba,Quality,Quality,25,18,22,0,0,0,Slash/Pierce,7,5,Katana
Fire Nagakiba,Nagakiba,Fire,Fire,25,18,22,0,0,0,Slash/Pierce,7,5,Katana
Flame Art Nagakiba,Nagakiba,Flame Art,Flame Art,25,18,22,0,0,0,Slash/Pierce,7,5,Katana
Lightning Nagakiba,Nagakiba,Lightning,Lightning,25,18,22,0,0,0,Slash/Pierce,7,5,Katana
Sacred Nagakiba,Nagakiba,Sacred,Sacred,25,18,22,0,0,0,Slash/Pierce,7,5,Katana
Magic Nagakiba,Nagakiba,Magic,Magic,25,18,22,0,0,0,Slash/Pierce,7,5,Katana
Cold Nagakiba,Nagakiba,Cold,Cold,25,18,22,0,0,0,Slash/Pierce,7,5,Katana
Poison Nagakiba,Nagakiba,Poison,Poison,25,18,22,0,0,0,Slash/Pierce,7,5,Katana
Blood Nagakiba,Nagakiba,Blood,Blood,25,18,22,0,0,0,Slash/Pierce,7,5,Katana
Occult Nagakiba,Nagakiba,Occult,Occult,25,18,22,0,0,0,Slash/Pierce,7,5,Katana
Hand of Malenia,Hand of Malenia,None,-,10,16,48,0,0,0,Slash/Pierce,7,5,Katana
Meteoric Ore Blade,Meteoric Ore Blade,None,-,10,15,14,18,0,0,Slash/Pierce,7.5,5,Katana
Rivers of Blood,Rivers of Blood,None,-,10,12,18,0,0,20,Slash/Pierce,6.5,5,Katana
Moonveil,Moonveil,None,-,10,12,18,23,0,0,Slash/Pierce,6.5,5,Katana
Dragonscale Blade,Dragonscale Blade,None,-,10,12,20,0,0,0,Slash/Pierce,5.5,5,Katana
Serpentbone Blade,Serpentbone Blade,None,-,25,11,22,0,0,0,Slash/Pierce,6,5,Katana
Twinblade,Twinblade,None,None,25,10,18,0,0,0,Standard/Pierce,7,5,Twinblade
Heavy Twinblade,Twinblade,Heavy,Heavy,25,10,18,0,0,0,Standard/Pierce,7,5,Twinblade
Keen Twinblade,Twinblade,Keen,Keen,25,10,18,0,0,0,Standard/Pierce,7,5,Twinblade
Quality Twinblade,Twinblade,Quality,Quality,25,10,18,0,0,0,Standard/Pierce,7,5,Twinblade
Fire Twinblade,Twinblade,Fire,Fire,25,10,18,0,0,0,Standard/Pierce,7,5,Twinblade
Flame Art Twinblade,Twinblade,Flame Art,Flame Art,25,10,18,0,0,0,Standard/Pierce,7,5,Twinblade
Lightning Twinblade,Twinblade,Lightning,Lightning,25,10,18,0,0,0,Standard/Pierce,7,5,Twinblade
Sacred Twinblade,Twinblade,Sacred,Sacred,25,10,18,0,0,0,Standard/Pierce,7,5,Twinblade
Magic Twinblade,Twinblade,Magic,Magic,25,10,18,0,0,0,Standard/Pierce,7,5,Twinblade
Cold Twinblade,Twinblade,Cold,Cold,25,10,18,0,0,0,Standard/Pierce,7,5,Twinblade
Poison Twinblade,Twinblade,Poison,Poison,25,10,18,0,0,0,Standard/Pierce,7,5,Twinblade
Bloody Twinblade,Twinblade,Blood,Blood,25,10,18,0,0,0,Standard/Pierce,7,5,Twinblade
Occult Twinblade,Twinblade,Occult,Occult,25,10,18,0,0,0,Standard/Pierce,7,5,Twinblade
Godskin Peeler,Godskin Peeler,None,None,25,17,22,0,0,0,Standard/Pierce,8,5,Twinblade
Heavy Godskin Peeler,Godskin Peeler,Heavy,Heavy,25,17,22,0,0,0,Standard/Pierce,8,5,Twinblade
Keen Godskin Peeler,Godskin Peeler,Keen,Keen,25,17,22,0,0,0,Standard/Pierce,8,5,Twinblade
Quality Godskin Peeler,Godskin Peeler,Quality,Quality,25,17,22,0,0,0,Standard/Pierce,8,5,Twinblade
Fire Godskin Peeler,Godskin Peeler,Fire,Fire,25,17,22,0,0,0,Standard/Pierce,8,5,Twinblade
Flame Art Godskin Peeler,Godskin Peeler,Flame Art,Flame Art,25,17,22,0,0,0,Standard/Pierce,8,5,Twinblade
Lightning Godskin Peeler,Godskin Peeler,Lightning,Lightning,25,17,22,0,0,0,Standard/Pierce,8,5,Twinblade
Sacred Godskin Peeler,Godskin Peeler,Sacred,Sacred,25,17,22,0,0,0,Standard/Pierce,8,5,Twinblade
Magic Godskin Peeler,Godskin Peeler,Magic,Magic,25,17,22,0,0,0,Standard/Pierce,8,5,Twinblade
Cold Godskin Peeler,Godskin Peeler,Cold,Cold,25,17,22,0,0,0,Standard/Pierce,8,5,Twinblade
Poison Godskin Peeler,Godskin Peeler,Poison,Poison,25,17,22,0,0,0,Standard/Pierce,8,5,Twinblade
Blood Godskin Peeler,Godskin Peeler,Blood,Blood,25,17,22,0,0,0,Standard/Pierce,8,5,Twinblade
Occult Godskin Peeler,Godskin Peeler,Occult,Occult,25,17,22,0,0,0,Standard/Pierce,8,5,Twinblade
Twinned Knight Swords,Twinned Knight Swords,None,None,25,16,18,0,0,0,Standard/Pierce,8,5,Twinblade
Heavy Twinned Knight Swords,Twinned Knight Swords,Heavy,Heavy,25,16,18,0,0,0,Standard/Pierce,8,5,Twinblade
Keen Twinned Knight Swords,Twinned Knight Swords,Keen,Keen,25,16,18,0,0,0,Standard/Pierce,8,5,Twinblade
Quality Twinned Knight Swords,Twinned Knight Swords,Quality,Quality,25,16,18,0,0,0,Standard/Pierce,8,5,Twinblade
Fire Twinned Knight Swords,Twinned Knight Swords,Fire,Fire,25,16,18,0,0,0,Standard/Pierce,8,5,Twinblade
Flame Art Twinned Knight Swords,Twinned Knight Swords,Flame Art,Flame Art,25,16,18,0,0,0,Standard/Pierce,8,5,Twinblade
Lightning Twinned Knight Swords,Twinned Knight Swords,Lightning,Lightning,25,16,18,0,0,0,Standard/Pierce,8,5,Twinblade
Sacred Twinned Knight Swords,Twinned Knight Swords,Sacred,Sacred,25,16,18,0,0,0,Standard/Pierce,8,5,Twinblade
Magic Twinned Knight Swords,Twinned Knight Swords,Magic,Magic,25,16,18,0,0,0,Standard/Pierce,8,5,Twinblade
Cold Twinned Knight Swords,Twinned Knight Swords,Cold,Cold,25,16,18,0,0,0,Standard/Pierce,8,5,Twinblade
Poison Twinned Knight Swords,Twinned Knight Swords,Poison,Poison,25,16,18,0,0,0,Standard/Pierce,8,5,Twinblade
Blood Twinned Knight Swords,Twinned Knight Swords,Blood,Blood,25,16,18,0,0,0,Standard/Pierce,8,5,Twinblade
Occult Twinned Knight Swords,Twinned Knight Swords,Occult,Occult,25,16,18,0,0,0,Standard/Pierce,8,5,Twinblade
Eleonora's Poleblade,Eleonora's Poleblade,None,-,10,12,21,0,0,19,Standard/Pierce,6,5,Twinblade
Gargoyle's Twinblade,Gargoyle's Twinblade,None,None,25,18,15,0,0,0,Standard/Pierce,8.5,5,Twinblade
Gargoyle's Heavy Twinblade,Gargoyle's Twinblade,Heavy,Heavy,25,18,15,0,0,0,Standard/Pierce,8.5,5,Twinblade
Gargoyle's Keen Twinblade,Gargoyle's Twinblade,Keen,Keen,25,18,15,0,0,0,Standard/Pierce,8.5,5,Twinblade
Gargoyle's Quality Twinblade,Gargoyle's Twinblade,Quality,Quality,25,18,15,0,0,0,Standard/Pierce,8.5,5,Twinblade
Gargoyle's Fire Twinblade,Gargoyle's Twinblade,Fire,Fire,25,18,15,0,0,0,Standard/Pierce,8.5,5,Twinblade
Gargoyle's Flame Art Twinblade,Gargoyle's Twinblade,Flame Art,Flame Art,25,18,15,0,0,0,Standard/Pierce,8.5,5,Twinblade
Gargoyle's Lightning Twinblade,Gargoyle's Twinblade,Lightning,Lightning,25,18,15,0,0,0,Standard/Pierce,8.5,5,Twinblade
Gargoyle's Sacred Twinblade,Gargoyle's Twinblade,Sacred,Sacred,25,18,15,0,0,0,Standard/Pierce,8.5,5,Twinblade
Gargoyle's Magic Twinblade,Gargoyle's Twinblade,Magic,Magic,25,18,15,0,0,0,Standard/Pierce,8.5,5,Twinblade
Gargoyle's Cold Twinblade,Gargoyle's Twinblade,Cold,Cold,25,18,15,0,0,0,Standard/Pierce,8.5,5,Twinblade
Gargoyle's Poison Twinblade,Gargoyle's Twinblade,Poison,Poison,25,18,15,0,0,0,Standard/Pierce,8.5,5,Twinblade
Gargoyle's Blood Twinblade,Gargoyle's Twinblade,Blood,Blood,25,18,15,0,0,0,Standard/Pierce,8.5,5,Twinblade
Gargoyle's Occult Twinblade,Gargoyle's Twinblade,Occult,Occult,25,18,15,0,0,0,Standard/Pierce,8.5,5,Twinblade
Gargoyle's Black Blades,Gargoyle's Black Blades,None,-,10,18,15,0,22,0,Standard/Pierce,8.5,5,Twinblade
Mace,Mace,None,None,25,12,7,0,0,0,Strike,4.5,6,Hammer
Heavy Mace,Mace,Heavy,Heavy,25,12,7,0,0,0,Strike,4.5,6,Hammer
Keen Mace,Mace,Keen,Keen,25,12,7,0,0,0,Strike,4.5,6,Hammer
Quality Mace,Mace,Quality,Quality,25,12,7,0,0,0,Strike,4.5,6,Hammer
Fire Mace,Mace,Fire,Fire,25,12,7,0,0,0,Strike,4.5,6,Hammer
Flame Art Mace,Mace,Flame Art,Flame Art,25,12,7,0,0,0,Strike,4.5,6,Hammer
Lightning Mace,Mace,Lightning,Lightning,25,12,7,0,0,0,Strike,4.5,6,Hammer
Sacred Mace,Mace,Sacred,Sacred,25,12,7,0,0,0,Strike,4.5,6,Hammer
Magic Mace,Mace,Magic,Magic,25,12,7,0,0,0,Strike,4.5,6,Hammer
Cold Mace,Mace,Cold,Cold,25,12,7,0,0,0,Strike,4.5,6,Hammer
Poison Mace,Mace,Poison,Poison,25,12,7,0,0,0,Strike,4.5,6,Hammer
Blood Mace,Mace,Blood,Blood,25,12,7,0,0,0,Strike,4.5,6,Hammer
Occult Mace,Mace,Occult,Occult,25,12,7,0,0,0,Strike,4.5,6,Hammer
Club,Club,None,None,25,10,0,0,0,0,Strike,3.5,6,Hammer
Heavy Club,Club,Heavy,Heavy,25,10,0,0,0,0,Strike,3.5,6,Hammer
Keen Club,Club,Keen,Keen,25,10,0,0,0,0,Strike,3.5,6,Hammer
Quality Club,Club,Quality,Quality,25,10,0,0,0,0,Strike,3.5,6,Hammer
Fire Club,Club,Fire,Fire,25,10,0,0,0,0,Strike,3.5,6,Hammer
Flame Art Club,Club,Flame Art,Flame Art,25,10,0,0,0,0,Strike,3.5,6,Hammer
Lightning Club,Club,Lightning,Lightning,25,10,0,0,0,0,Strike,3.5,6,Hammer
Sacred Club,Club,Sacred,Sacred,25,10,0,0,0,0,Strike,3.5,6,Hammer
Magic Club,Club,Magic,Magic,25,10,0,0,0,0,Strike,3.5,6,Hammer
Cold Club,Club,Cold,Cold,25,10,0,0,0,0,Strike,3.5,6,Hammer
Poison Club,Club,Poison,Poison,25,10,0,0,0,0,Strike,3.5,6,Hammer
Bloody Club,Club,Blood,Blood,25,10,0,0,0,0,Strike,3.5,6,Hammer
Occult Club,Club,Occult,Occult,25,10,0,0,0,0,Strike,3.5,6,Hammer
Curved Club,Curved Club,None,None,25,11,7,0,0,0,Strike,5,6,Hammer
Heavy Curved Club,Curved Club,Heavy,Heavy,25,11,7,0,0,0,Strike,5,6,Hammer
Keen Curved Club,Curved Club,Keen,Keen,25,11,7,0,0,0,Strike,5,6,Hammer
Quality Curved Club,Curved Club,Quality,Quality,25,11,7,0,0,0,Strike,5,6,Hammer
Fire Curved Club,Curved Club,Fire,Fire,25,11,7,0,0,0,Strike,5,6,Hammer
Flame Art Curved Club,Curved Club,Flame Art,Flame Art,25,11,7,0,0,0,Strike,5,6,Hammer
Lightning Curved Club,Curved Club,Lightning,Lightning,25,11,7,0,0,0,Strike,5,6,Hammer
Sacred Curved Club,Curved Club,Sacred,Sacred,25,11,7,0,0,0,Strike,5,6,Hammer
Magic Curved Club,Curved Club,Magic,Magic,25,11,7,0,0,0,Strike,5,6,Hammer
Cold Curved Club,Curved Club,Cold,Cold,25,11,7,0,0,0,Strike,5,6,Hammer
Poison Curved Club,Curved Club,Poison,Poison,25,11,7,0,0,0,Strike,5,6,Hammer
Blood Curved Club,Curved Club,Blood,Blood,25,11,7,0,0,0,Strike,5,6,Hammer
Occult Curved Club,Curved Club,Occult,Occult,25,11,7,0,0,0,Strike,5,6,Hammer
Warpick,Warpick,None,None,25,11,9,0,0,0,Strike,2.5,6,Hammer
Heavy Warpick,Warpick,Heavy,Heavy,25,11,9,0,0,0,Strike,2.5,6,Hammer
Keen Warpick,Warpick,Keen,Keen,25,11,9,0,0,0,Strike,2.5,6,Hammer
Quality Warpick,Warpick,Quality,Quality,25,11,9,0,0,0,Strike,2.5,6,Hammer
Fire Warpick,Warpick,Fire,Fire,25,11,9,0,0,0,Strike,2.5,6,Hammer
Flame Art Warpick,Warpick,Flame Art,Flame Art,25,11,9,0,0,0,Strike,2.5,6,Hammer
Lightning Warpick,Warpick,Lightning,Lightning,25,11,9,0,0,0,Strike,2.5,6,Hammer
Sacred Warpick,Warpick,Sacred,Sacred,25,11,9,0,0,0,Strike,2.5,6,Hammer
Magic Warpick,Warpick,Magic,Magic,25,11,9,0,0,0,Strike,2.5,6,Hammer
Cold Warpick,Warpick,Cold,Cold,25,11,9,0,0,0,Strike,2.5,6,Hammer
Poison Warpick,Warpick,Poison,Poison,25,11,9,0,0,0,Strike,2.5,6,Hammer
Blood Warpick,Warpick,Blood,Blood,25,11,9,0,0,0,Strike,2.5,6,Hammer
Occult Warpick,Warpick,Occult,Occult,25,11,9,0,0,0,Strike,2.5,6,Hammer
Morning Star,Morning Star,None,None,25,12,8,0,0,0,Strike,5,6,Hammer
Heavy Morning Star,Morning Star,Heavy,Heavy,25,12,8,0,0,0,Strike,5,6,Hammer
Keen Morning Star,Morning Star,Keen,Keen,25,12,8,0,0,0,Strike,5,6,Hammer
Quality Morning Star,Morning Star,Quality,Quality,25,12,8,0,0,0,Strike,5,6,Hammer
Fire Morning Star,Morning Star,Fire,Fire,25,12,8,0,0,0,Strike,5,6,Hammer
Flame Art Morning Star,Morning Star,Flame Art,Flame Art,25,12,8,0,0,0,Strike,5,6,Hammer
Lightning Morning Star,Morning Star,Lightning,Lightning,25,12,8,0,0,0,Strike,5,6,Hammer
Sacred Morning Star,Morning Star,Sacred,Sacred,25,12,8,0,0,0,Strike,5,6,Hammer
Magic Morning Star,Morning Star,Magic,Magic,25,12,8,0,0,0,Strike,5,6,Hammer
Cold Morning Star,Morning Star,Cold,Cold,25,12,8,0,0,0,Strike,5,6,Hammer
Poison Morning Star,Morning Star,Poison,Poison,25,12,8,0,0,0,Strike,5,6,Hammer
Blood Morning Star,Morning Star,Blood,Blood,25,12,8,0,0,0,Strike,5,6,Hammer
Occult Morning Star,Morning Star,Occult,Occult,25,12,8,0,0,0,Strike,5,6,Hammer
Varre's Bouquet,Varre's Bouquet,None,-,10,8,16,0,0,24,Strike,2,6,Hammer
Spiked Club,Spiked Club,None,None,25,12,7,0,0,0,Strike,5,6,Hammer
Heavy Spiked Club,Spiked Club,Heavy,Heavy,25,12,7,0,0,0,Strike,5,6,Hammer
Keen Spiked Club,Spiked Club,Keen,Keen,25,12,7,0,0,0,Strike,5,6,Hammer
Quality Spiked Club,Spiked Club,Quality,Quality,25,12,7,0,0,0,Strike,5,6,Hammer
Fire Spiked Club,Spiked Club,Fire,Fire,25,12,7,0,0,0,Strike,5,6,Hammer
Flame Art Spiked Club,Spiked Club,Flame Art,Flame Art,25,12,7,0,0,0,Strike,5,6,Hammer
Lightning Spiked Club,Spiked Club,Lightning,Lightning,25,12,7,0,0,0,Strike,5,6,Hammer
Sacred Spiked Club,Spiked Club,Sacred,Sacred,25,12,7,0,0,0,Strike,5,6,Hammer
Magic Spiked Club,Spiked Club,Magic,Magic,25,12,7,0,0,0,Strike,5,6,Hammer
Cold Spiked Club,Spiked Club,Cold,Cold,25,12,7,0,0,0,Strike,5,6,Hammer
Poison Spiked Club,Spiked Club,Poison,Poison,25,12,7,0,0,0,Strike,5,6,Hammer
Blood Spiked Club,Spiked Club,Blood,Blood,25,12,7,0,0,0,Strike,5,6,Hammer
Occult Spiked Club,Spiked Club,Occult,Occult,25,12,7,0,0,0,Strike,5,6,Hammer
Hammer,Hammer,None,None,25,14,7,0,0,0,Strike,6.5,6,Hammer
Heavy Hammer,Hammer,Heavy,Heavy,25,14,7,0,0,0,Strike,6.5,6,Hammer
Keen Hammer,Hammer,Keen,Keen,25,14,7,0,0,0,Strike,6.5,6,Hammer
Quality Hammer,Hammer,Quality,Quality,25,14,7,0,0,0,Strike,6.5,6,Hammer
Fire Hammer,Hammer,Fire,Fire,25,14,7,0,0,0,Strike,6.5,6,Hammer
Flame Art Hammer,Hammer,Flame Art,Flame Art,25,14,7,0,0,0,Strike,6.5,6,Hammer
Lightning Hammer,Hammer,Lightning,Lightning,25,14,7,0,0,0,Strike,6.5,6,Hammer
Sacred Hammer,Hammer,Sacred,Sacred,25,14,7,0,0,0,Strike,6.5,6,Hammer
Magic Hammer,Hammer,Magic,Magic,25,14,7,0,0,0,Strike,6.5,6,Hammer
Cold Hammer,Hammer,Cold,Cold,25,14,7,0,0,0,Strike,6.5,6,Hammer
Poison Hammer,Hammer,Poison,Poison,25,14,7,0,0,0,Strike,6.5,6,Hammer
Blood Hammer,Hammer,Blood,Blood,25,14,7,0,0,0,Strike,6.5,6,Hammer
Occult Hammer,Hammer,Occult,Occult,25,14,7,0,0,0,Strike,6.5,6,Hammer
Monk's Flamemace,Monk's Flamemace,None,None,25,13,13,0,0,0,Strike,6,6,Hammer
Monk's Heavy Flamemace,Monk's Flamemace,Heavy,Heavy,25,13,13,0,0,0,Strike,6,6,Hammer
Monk's Keen Flamemace,Monk's Flamemace,Keen,Keen,25,13,13,0,0,0,Strike,6,6,Hammer
Monk's Quality Flamemace,Monk's Flamemace,Quality,Quality,25,13,13,0,0,0,Strike,6,6,Hammer
Monk's Fire Flamemace,Monk's Flamemace,Fire,Fire,25,13,13,0,0,0,Strike,6,6,Hammer
Monk's Flame Art Flamemace,Monk's Flamemace,Flame Art,Flame Art,25,13,13,0,0,0,Strike,6,6,Hammer
Monk's Lightning Flamemace,Monk's Flamemace,Lightning,Lightning,25,13,13,0,0,0,Strike,6,6,Hammer
Monk's Sacred Flamemace,Monk's Flamemace,Sacred,Sacred,25,13,13,0,0,0,Strike,6,6,Hammer
Monk's Magic Flamemace,Monk's Flamemace,Magic,Magic,25,13,13,0,0,0,Strike,6,6,Hammer
Monk's Cold Flamemace,Monk's Flamemace,Cold,Cold,25,13,13,0,0,0,Strike,6,6,Hammer
Monk's Poison Flamemace,Monk's Flamemace,Poison,Poison,25,13,13,0,0,0,Strike,6,6,Hammer
Monk's Blood Flamemace,Monk's Flamemace,Blood,Blood,25,13,13,0,0,0,Strike,6,6,Hammer
Monk's Occult Flamemace,Monk's Flamemace,Occult,Occult,25,13,13,0,0,0,Strike,6,6,Hammer
Envoy's Horn,Envoy's Horn,None,-,10,10,12,0,16,0,Strike,4,6,Hammer
Scepter of the All-Knowing,Scepter of the All-Knowing,None,-,10,12,18,21,0,0,Strike/Pierce,4.5,6,Hammer
Nox Flowing Hammer,Nox Flowing Hammer,None,-,10,17,7,0,0,0,Strike,6.5,6,Hammer
Ringed Finger,Ringed Finger,None,-,10,15,9,0,0,0,Strike,4.5,6,Hammer
Stone Club,Stone Club,None,None,25,16,8,0,0,0,Strike,7,6,Hammer
Heavy Stone Club,Stone Club,Heavy,Heavy,25,16,8,0,0,0,Strike,7,6,Hammer
Keen Stone Club,Stone Club,Keen,Keen,25,16,8,0,0,0,Strike,7,6,Hammer
Quality Stone Club,Stone Club,Quality,Quality,25,16,8,0,0,0,Strike,7,6,Hammer
Fire Stone Club,Stone Club,Fire,Fire,25,16,8,0,0,0,Strike,7,6,Hammer
Flame Art Stone Club,Stone Club,Flame Art,Flame Art,25,16,8,0,0,0,Strike,7,6,Hammer
Lightning Stone Club,Stone Club,Lightning,Lightning,25,16,8,0,0,0,Strike,7,6,Hammer
Sacred Stone Club,Stone Club,Sacred,Sacred,25,16,8,0,0,0,Strike,7,6,Hammer
Magic Stone Club,Stone Club,Magic,Magic,25,16,8,0,0,0,Strike,7,6,Hammer
Cold Stone Club,Stone Club,Cold,Cold,25,16,8,0,0,0,Strike,7,6,Hammer
Poison Stone Club,Stone Club,Poison,Poison,25,16,8,0,0,0,Strike,7,6,Hammer
Blood Stone Club,Stone Club,Blood,Blood,25,16,8,0,0,0,Strike,7,6,Hammer
Occult Stone Club,Stone Club,Occult,Occult,25,16,8,0,0,0,Strike,7,6,Hammer
Marika's Hammer,Marika's Hammer,None,-,10,20,12,0,19,0,Strike,6,6,Hammer
Large Club,Large Club,None,None,25,22,0,0,0,0,Strike,8.5,6.5,Warhammer
Heavy Large Club,Large Club,Heavy,Heavy,25,22,0,0,0,0,Strike,8.5,6.5,Warhammer
Keen Large Club,Large Club,Keen,Keen,25,22,0,0,0,0,Strike,8.5,6.5,Warhammer
Quality Large Club,Large Club,Quality,Quality,25,22,0,0,0,0,Strike,8.5,6.5,Warhammer
Fire Large Club,Large Club,Fire,Fire,25,22,0,0,0,0,Strike,8.5,6.5,Warhammer
Flame Art Large Club,Large Club,Flame Art,Flame Art,25,22,0,0,0,0,Strike,8.5,6.5,Warhammer
Lightning Large Club,Large Club,Lightning,Lightning,25,22,0,0,0,0,Strike,8.5,6.5,Warhammer
Sacred Large Club,Large Club,Sacred,Sacred,25,22,0,0,0,0,Strike,8.5,6.5,Warhammer
Magic Large Club,Large Club,Magic,Magic,25,22,0,0,0,0,Strike,8.5,6.5,Warhammer
Cold Large Club,Large Club,Cold,Cold,25,22,0,0,0,0,Strike,8.5,6.5,Warhammer
Poison Large Club,Large Club,Poison,Poison,25,22,0,0,0,0,Strike,8.5,6.5,Warhammer
Blood Large Club,Large Club,Blood,Blood,25,22,0,0,0,0,Strike,8.5,6.5,Warhammer
Occult Large Club,Large Club,Occult,Occult,25,22,0,0,0,0,Strike,8.5,6.5,Warhammer
Greathorn Hammer,Greathorn Hammer,None,None,25,22,10,0,0,0,Strike,10,6.5,Warhammer
Heavy Greathorn Hammer,Greathorn Hammer,Heavy,Heavy,25,22,10,0,0,0,Strike,10,6.5,Warhammer
Keen Greathorn Hammer,Greathorn Hammer,Keen,Keen,25,22,10,0,0,0,Strike,10,6.5,Warhammer
Quality Greathorn Hammer,Greathorn Hammer,Quality,Quality,25,22,10,0,0,0,Strike,10,6.5,Warhammer
Fire Greathorn Hammer,Greathorn Hammer,Fire,Fire,25,22,10,0,0,0,Strike,10,6.5,Warhammer
Flame Art Greathorn Hammer,Greathorn Hammer,Flame Art,Flame Art,25,22,10,0,0,0,Strike,10,6.5,Warhammer
Lightning Greathorn Hammer,Greathorn Hammer,Lightning,Lightning,25,22,10,0,0,0,Strike,10,6.5,Warhammer
Sacred Greathorn Hammer,Greathorn Hammer,Sacred,Sacred,25,22,10,0,0,0,Strike,10,6.5,Warhammer
Magic Greathorn Hammer,Greathorn Hammer,Magic,Magic,25,22,10,0,0,0,Strike,10,6.5,Warhammer
Cold Greathorn Hammer,Greathorn Hammer,Cold,Cold,25,22,10,0,0,0,Strike,10,6.5,Warhammer
Poison Greathorn Hammer,Greathorn Hammer,Poison,Poison,25,22,10,0,0,0,Strike,10,6.5,Warhammer
Blood Greathorn Hammer,Greathorn Hammer,Blood,Blood,25,22,10,0,0,0,Strike,10,6.5,Warhammer
Occult Greathorn Hammer,Greathorn Hammer,Occult,Occult,25,22,10,0,0,0,Strike,10,6.5,Warhammer
Battle Hammer,Battle Hammer,None,None,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Heavy Battle Hammer,Battle Hammer,Heavy,Heavy,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Keen Battle Hammer,Battle Hammer,Keen,Keen,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Quality Battle Hammer,Battle Hammer,Quality,Quality,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Fire Battle Hammer,Battle Hammer,Fire,Fire,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Flame Art Battle Hammer,Battle Hammer,Flame Art,Flame Art,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Lightning Battle Hammer,Battle Hammer,Lightning,Lightning,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Sacred Battle Hammer,Battle Hammer,Sacred,Sacred,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Magic Battle Hammer,Battle Hammer,Magic,Magic,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Cold Battle Hammer,Battle Hammer,Cold,Cold,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Poison Battle Hammer,Battle Hammer,Poison,Poison,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Blood Battle Hammer,Battle Hammer,Blood,Blood,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Occult Battle Hammer,Battle Hammer,Occult,Occult,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Great Mace,Great Mace,None,None,25,28,0,0,0,0,Strike,11.5,6.5,Warhammer
Heavy Great Mace,Great Mace,Heavy,Heavy,25,28,0,0,0,0,Strike,11.5,6.5,Warhammer
Keen Great Mace,Great Mace,Keen,Keen,25,28,0,0,0,0,Strike,11.5,6.5,Warhammer
Quality Great Mace,Great Mace,Quality,Quality,25,28,0,0,0,0,Strike,11.5,6.5,Warhammer
Fire Great Mace,Great Mace,Fire,Fire,25,28,0,0,0,0,Strike,11.5,6.5,Warhammer
Flame Art Great Mace,Great Mace,Flame Art,Flame Art,25,28,0,0,0,0,Strike,11.5,6.5,Warhammer
Lightning Great Mace,Great Mace,Lightning,Lightning,25,28,0,0,0,0,Strike,11.5,6.5,Warhammer
Sacred Great Mace,Great Mace,Sacred,Sacred,25,28,0,0,0,0,Strike,11.5,6.5,Warhammer
Magic Great Mace,Great Mace,Magic,Magic,25,28,0,0,0,0,Strike,11.5,6.5,Warhammer
Cold Great Mace,Great Mace,Cold,Cold,25,28,0,0,0,0,Strike,11.5,6.5,Warhammer
Poison Great Mace,Great Mace,Poison,Poison,25,28,0,0,0,0,Strike,11.5,6.5,Warhammer
Blood Great Mace,Great Mace,Blood,Blood,25,28,0,0,0,0,Strike,11.5,6.5,Warhammer
Occult Great Mace,Great Mace,Occult,Occult,25,28,0,0,0,0,Strike,11.5,6.5,Warhammer
Curved Great Club,Curved Great Club,None,None,25,24,10,0,0,0,Strike,10,6.5,Warhammer
Heavy Curved Great Club,Curved Great Club,Heavy,Heavy,25,24,10,0,0,0,Strike,10,6.5,Warhammer
Keen Curved Great Club,Curved Great Club,Keen,Keen,25,24,10,0,0,0,Strike,10,6.5,Warhammer
Quality Curved Great Club,Curved Great Club,Quality,Quality,25,24,10,0,0,0,Strike,10,6.5,Warhammer
Fire Curved Great Club,Curved Great Club,Fire,Fire,25,24,10,0,0,0,Strike,10,6.5,Warhammer
Flame Art Curved Great Club,Curved Great Club,Flame Art,Flame Art,25,24,10,0,0,0,Strike,10,6.5,Warhammer
Lightning Curved Great Club,Curved Great Club,Lightning,Lightning,25,24,10,0,0,0,Strike,10,6.5,Warhammer
Sacred Curved Great Club,Curved Great Club,Sacred,Sacred,25,24,10,0,0,0,Strike,10,6.5,Warhammer
Magic Curved Great Club,Curved Great Club,Magic,Magic,25,24,10,0,0,0,Strike,10,6.5,Warhammer
Cold Curved Great Club,Curved Great Club,Cold,Cold,25,24,10,0,0,0,Strike,10,6.5,Warhammer
Poison Curved Great Club,Curved Great Club,Poison,Poison,25,24,10,0,0,0,Strike,10,6.5,Warhammer
Blood Curved Great Club,Curved Great Club,Blood,Blood,25,24,10,0,0,0,Strike,10,6.5,Warhammer
Occult Curved Great Club,Curved Great Club,Occult,Occult,25,24,10,0,0,0,Strike,10,6.5,Warhammer
Celebrant's Skull,Celebrant's Skull,None,None,25,18,12,0,0,0,Strike,8.5,6.5,Warhammer
Celebrant's Heavy Skull,Celebrant's Skull,Heavy,Heavy,25,18,12,0,0,0,Strike,8.5,6.5,Warhammer
Celebrant's Keen Skull,Celebrant's Skull,Keen,Keen,25,18,12,0,0,0,Strike,8.5,6.5,Warhammer
Celebrant's Quality Skull,Celebrant's Skull,Quality,Quality,25,18,12,0,0,0,Strike,8.5,6.5,Warhammer
Celebrant's Fire Skull,Celebrant's Skull,Fire,Fire,25,18,12,0,0,0,Strike,8.5,6.5,Warhammer
Celebrant's Flame Art Skull,Celebrant's Skull,Flame Art,Flame Art,25,18,12,0,0,0,Strike,8.5,6.5,Warhammer
Celebrant's Lightning Skull,Celebrant's Skull,Lightning,Lightning,25,18,12,0,0,0,Strike,8.5,6.5,Warhammer
Celebrant's Sacred Skull,Celebrant's Skull,Sacred,Sacred,25,18,12,0,0,0,Strike,8.5,6.5,Warhammer
Celebrant's Magic Skull,Celebrant's Skull,Magic,Magic,25,18,12,0,0,0,Strike,8.5,6.5,Warhammer
Celebrant's Cold Skull,Celebrant's Skull,Cold,Cold,25,18,12,0,0,0,Strike,8.5,6.5,Warhammer
Celebrant's Poison Skull,Celebrant's Skull,Poison,Poison,25,18,12,0,0,0,Strike,8.5,6.5,Warhammer
Celebrant's Blood Skull,Celebrant's Skull,Blood,Blood,25,18,12,0,0,0,Strike,8.5,6.5,Warhammer
Celebrant's Occult Skull,Celebrant's Skull,Occult,Occult,25,18,12,0,0,0,Strike,8.5,6.5,Warhammer
Pickaxe,Pickaxe,None,None,25,22,10,0,0,0,Pierce,10,6.5,Warhammer
Heavy Pickaxe,Pickaxe,Heavy,Heavy,25,22,10,0,0,0,Pierce,10,6.5,Warhammer
Keen Pickaxe,Pickaxe,Keen,Keen,25,22,10,0,0,0,Pierce,10,6.5,Warhammer
Quality Pickaxe,Pickaxe,Quality,Quality,25,22,10,0,0,0,Pierce,10,6.5,Warhammer
Fire Pickaxe,Pickaxe,Fire,Fire,25,22,10,0,0,0,Pierce,10,6.5,Warhammer
Flame Art Pickaxe,Pickaxe,Flame Art,Flame Art,25,22,10,0,0,0,Pierce,10,6.5,Warhammer
Lightning Pickaxe,Pickaxe,Lightning,Lightning,25,22,10,0,0,0,Pierce,10,6.5,Warhammer
Sacred Pickaxe,Pickaxe,Sacred,Sacred,25,22,10,0,0,0,Pierce,10,6.5,Warhammer
Magic Pickaxe,Pickaxe,Magic,Magic,25,22,10,0,0,0,Pierce,10,6.5,Warhammer
Cold Pickaxe,Pickaxe,Cold,Cold,25,22,10,0,0,0,Pierce,10,6.5,Warhammer
Poison Pickaxe,Pickaxe,Poison,Poison,25,22,10,0,0,0,Pierce,10,6.5,Warhammer
Blood Pickaxe,Pickaxe,Blood,Blood,25,22,10,0,0,0,Pierce,10,6.5,Warhammer
Occult Pickaxe,Pickaxe,Occult,Occult,25,22,10,0,0,0,Pierce,10,6.5,Warhammer
Beastclaw Greathammer,Beastclaw Greathammer,None,-,10,20,10,0,18,0,Strike,9,6.5,Warhammer
Envoy's Long Horn,Envoy's Long Horn,None,-,10,23,11,0,18,0,Strike,9.5,6.5,Warhammer
Cranial Vessel Candlestand,Cranial Vessel Candlestand,None,-,10,26,8,0,22,0,Strike,12.5,6.5,Warhammer
Great Stars,Great Stars,None,None,25,22,12,0,0,0,Strike,10,6.5,Warhammer
Heavy Great Stars,Great Stars,Heavy,Heavy,25,22,12,0,0,0,Strike,10,6.5,Warhammer
Keen Great Stars,Great Stars,Keen,Keen,25,22,12,0,0,0,Strike,10,6.5,Warhammer
Quality Great Stars,Great Stars,Quality,Quality,25,22,12,0,0,0,Strike,10,6.5,Warhammer
Fire Great Stars,Great Stars,Fire,Fire,25,22,12,0,0,0,Strike,10,6.5,Warhammer
Flame Art Great Stars,Great Stars,Flame Art,Flame Art,25,22,12,0,0,0,Strike,10,6.5,Warhammer
Lightning Great Stars,Great Stars,Lightning,Lightning,25,22,12,0,0,0,Strike,10,6.5,Warhammer
Sacred Great Stars,Great Stars,Sacred,Sacred,25,22,12,0,0,0,Strike,10,6.5,Warhammer
Magic Great Stars,Great Stars,Magic,Magic,25,22,12,0,0,0,Strike,10,6.5,Warhammer
Cold Great Stars,Great Stars,Cold,Cold,25,22,12,0,0,0,Strike,10,6.5,Warhammer
Poison Great Stars,Great Stars,Poison,Poison,25,22,12,0,0,0,Strike,10,6.5,Warhammer
Blood Great Stars,Great Stars,Blood,Blood,25,22,12,0,0,0,Strike,10,6.5,Warhammer
Occult Great Stars,Great Stars,Occult,Occult,25,22,12,0,0,0,Strike,10,6.5,Warhammer
Brick Hammer,Brick Hammer,None,None,25,31,0,0,0,0,Strike,12.5,6.5,Warhammer
Heavy Brick Hammer,Brick Hammer,Heavy,Heavy,25,31,0,0,0,0,Strike,12.5,6.5,Warhammer
Keen Brick Hammer,Brick Hammer,Keen,Keen,25,31,0,0,0,0,Strike,12.5,6.5,Warhammer
Quality Brick Hammer,Brick Hammer,Quality,Quality,25,31,0,0,0,0,Strike,12.5,6.5,Warhammer
Fire Brick Hammer,Brick Hammer,Fire,Fire,25,31,0,0,0,0,Strike,12.5,6.5,Warhammer
Flame Art Brick Hammer,Brick Hammer,Flame Art,Flame Art,25,31,0,0,0,0,Strike,12.5,6.5,Warhammer
Lightning Brick Hammer,Brick Hammer,Lightning,Lightning,25,31,0,0,0,0,Strike,12.5,6.5,Warhammer
Sacred Brick Hammer,Brick Hammer,Sacred,Sacred,25,31,0,0,0,0,Strike,12.5,6.5,Warhammer
Magic Brick Hammer,Brick Hammer,Magic,Magic,25,31,0,0,0,0,Strike,12.5,6.5,Warhammer
Cold Brick Hammer,Brick Hammer,Cold,Cold,25,31,0,0,0,0,Strike,12.5,6.5,Warhammer
Poison Brick Hammer,Brick Hammer,Poison,Poison,25,31,0,0,0,0,Strike,12.5,6.5,Warhammer
Blood Brick Hammer,Brick Hammer,Blood,Blood,25,31,0,0,0,0,Strike,12.5,6.5,Warhammer
Occult Brick Hammer,Brick Hammer,Occult,Occult,25,31,0,0,0,0,Strike,12.5,6.5,Warhammer
Devourer's Scepter,Devourer's Scepter,None,-,10,24,20,0,25,0,Strike,11.5,6.5,Warhammer
Rotten Battle Hammer,Rotten Battle Hammer,None,None,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Heavy Rotten Battle Hammer,Rotten Battle Hammer,Heavy,Heavy,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Keen Rotten Battle Hammer,Rotten Battle Hammer,Keen,Keen,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Quality Rotten Battle Hammer,Rotten Battle Hammer,Quality,Quality,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Fire Rotten Battle Hammer,Rotten Battle Hammer,Fire,Fire,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Flame Art Rotten Battle Hammer,Rotten Battle Hammer,Flame Art,Flame Art,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Lightning Rotten Battle Hammer,Rotten Battle Hammer,Lightning,Lightning,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Sacred Rotten Battle Hammer,Rotten Battle Hammer,Sacred,Sacred,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Magic Rotten Battle Hammer,Rotten Battle Hammer,Magic,Magic,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Cold Rotten Battle Hammer,Rotten Battle Hammer,Cold,Cold,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Poison Rotten Battle Hammer,Rotten Battle Hammer,Poison,Poison,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Blood Rotten Battle Hammer,Rotten Battle Hammer,Blood,Blood,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Occult Rotten Battle Hammer,Rotten Battle Hammer,Occult,Occult,25,26,8,0,0,0,Strike,10,6.5,Warhammer
Nightrider Flail,Nightrider Flail,None,None,25,10,24,0,0,0,Strike,6,6,Flail
Heavy Nightrider Flail,Nightrider Flail,Heavy,Heavy,25,10,24,0,0,0,Strike,6,6,Flail
Keen Nightrider Flail,Nightrider Flail,Keen,Keen,25,10,24,0,0,0,Strike,6,6,Flail
Quality Nightrider Flail,Nightrider Flail,Quality,Quality,25,10,24,0,0,0,Strike,6,6,Flail
Fire Nightrider Flail,Nightrider Flail,Fire,Fire,25,10,24,0,0,0,Strike,6,6,Flail
Flame Art Nightrider Flail,Nightrider Flail,Flame Art,Flame Art,25,10,24,0,0,0,Strike,6,6,Flail
Lightning Nightrider Flail,Nightrider Flail,Lightning,Lightning,25,10,24,0,0,0,Strike,6,6,Flail
Sacred Nightrider Flail,Nightrider Flail,Sacred,Sacred,25,10,24,0,0,0,Strike,6,6,Flail
Magic Nightrider Flail,Nightrider Flail,Magic,Magic,25,10,24,0,0,0,Strike,6,6,Flail
Cold Nightrider Flail,Nightrider Flail,Cold,Cold,25,10,24,0,0,0,Strike,6,6,Flail
Poison Nightrider Flail,Nightrider Flail,Poison,Poison,25,10,24,0,0,0,Strike,6,6,Flail
Blood Nightrider Flail,Nightrider Flail,Blood,Blood,25,10,24,0,0,0,Strike,6,6,Flail
Occult Nightrider Flail,Nightrider Flail,Occult,Occult,25,10,24,0,0,0,Strike,6,6,Flail
Flail,Flail,None,None,25,10,18,0,0,0,Strike,5,6,Flail
Heavy Flail,Flail,Heavy,Heavy,25,10,18,0,0,0,Strike,5,6,Flail
Keen Flail,Flail,Keen,Keen,25,10,18,0,0,0,Strike,5,6,Flail
Quality Flail,Flail,Quality,Quality,25,10,18,0,0,0,Strike,5,6,Flail
Fire Flail,Flail,Fire,Fire,25,10,18,0,0,0,Strike,5,6,Flail
Flame Art Flail,Flail,Flame Art,Flame Art,25,10,18,0,0,0,Strike,5,6,Flail
Lightning Flail,Flail,Lightning,Lightning,25,10,18,0,0,0,Strike,5,6,Flail
Sacred Flail,Flail,Sacred,Sacred,25,10,18,0,0,0,Strike,5,6,Flail
Magic Flail,Flail,Magic,Magic,25,10,18,0,0,0,Strike,5,6,Flail
Cold Flail,Flail,Cold,Cold,25,10,18,0,0,0,Strike,5,6,Flail
Poison Flail,Flail,Poison,Poison,25,10,18,0,0,0,Strike,5,6,Flail
Blood Flail,Flail,Blood,Blood,25,10,18,0,0,0,Strike,5,6,Flail
Occult Flail,Flail,Occult,Occult,25,10,18,0,0,0,Strike,5,6,Flail
Family Heads,Family Heads,None,-,10,8,18,16,0,0,Strike,5.5,6,Flail
Bastard's Stars,Bastard's Stars,None,-,10,8,22,22,0,0,Strike,5.5,6,Flail
Chainlink Flail,Chainlink Flail,None,None,25,18,12,0,0,0,Strike,8,6,Flail
Heavy Chainlink Flail,Chainlink Flail,Heavy,Heavy,25,18,12,0,0,0,Strike,8,6,Flail
Keen Chainlink Flail,Chainlink Flail,Keen,Keen,25,18,12,0,0,0,Strike,8,6,Flail
Quality Chainlink Flail,Chainlink Flail,Quality,Quality,25,18,12,0,0,0,Strike,8,6,Flail
Fire Chainlink Flail,Chainlink Flail,Fire,Fire,25,18,12,0,0,0,Strike,8,6,Flail
Flame Art Chainlink Flail,Chainlink Flail,Flame Art,Flame Art,25,18,12,0,0,0,Strike,8,6,Flail
Lightning Chainlink Flail,Chainlink Flail,Lightning,Lightning,25,18,12,0,0,0,Strike,8,6,Flail
Sacred Chainlink Flail,Chainlink Flail,Sacred,Sacred,25,18,12,0,0,0,Strike,8,6,Flail
Magic Chainlink Flail,Chainlink Flail,Magic,Magic,25,18,12,0,0,0,Strike,8,6,Flail
Cold Chainlink Flail,Chainlink Flail,Cold,Cold,25,18,12,0,0,0,Strike,8,6,Flail
Poison Chainlink Flail,Chainlink Flail,Poison,Poison,25,18,12,0,0,0,Strike,8,6,Flail
Blood Chainlink Flail,Chainlink Flail,Blood,Blood,25,18,12,0,0,0,Strike,8,6,Flail
Occult Chainlink Flail,Chainlink Flail,Occult,Occult,25,18,12,0,0,0,Strike,8,6,Flail
Battle Axe,Battle Axe,None,None,25,12,8,0,0,0,Standard,4.5,5,Axe
Heavy Battle Axe,Battle Axe,Heavy,Heavy,25,12,8,0,0,0,Standard,4.5,5,Axe
Keen Battle Axe,Battle Axe,Keen,Keen,25,12,8,0,0,0,Standard,4.5,5,Axe
Quality Battle Axe,Battle Axe,Quality,Quality,25,12,8,0,0,0,Standard,4.5,5,Axe
Fire Battle Axe,Battle Axe,Fire,Fire,25,12,8,0,0,0,Standard,4.5,5,Axe
Flame Art Battle Axe,Battle Axe,Flame Art,Flame Art,25,12,8,0,0,0,Standard,4.5,5,Axe
Lightning Battle Axe,Battle Axe,Lightning,Lightning,25,12,8,0,0,0,Standard,4.5,5,Axe
Sacred Battle Axe,Battle Axe,Sacred,Sacred,25,12,8,0,0,0,Standard,4.5,5,Axe
Magic Battle Axe,Battle Axe,Magic,Magic,25,12,8,0,0,0,Standard,4.5,5,Axe
Cold Battle Axe,Battle Axe,Cold,Cold,25,12,8,0,0,0,Standard,4.5,5,Axe
Poison Battle Axe,Battle Axe,Poison,Poison,25,12,8,0,0,0,Standard,4.5,5,Axe
Blood Battle Axe,Battle Axe,Blood,Blood,25,12,8,0,0,0,Standard,4.5,5,Axe
Occult Battle Axe,Battle Axe,Occult,Occult,25,12,8,0,0,0,Standard,4.5,5,Axe
Forked Hatchet,Forked Hatchet,None,None,25,9,14,0,0,0,Standard,2.5,5,Axe
Heavy Forked Hatchet,Forked Hatchet,Heavy,Heavy,25,9,14,0,0,0,Standard,2.5,5,Axe
Keen Forked Hatchet,Forked Hatchet,Keen,Keen,25,9,14,0,0,0,Standard,2.5,5,Axe
Quality Forked Hatchet,Forked Hatchet,Quality,Quality,25,9,14,0,0,0,Standard,2.5,5,Axe
Fire Forked Hatchet,Forked Hatchet,Fire,Fire,25,9,14,0,0,0,Standard,2.5,5,Axe
Flame Art Forked Hatchet,Forked Hatchet,Flame Art,Flame Art,25,9,14,0,0,0,Standard,2.5,5,Axe
Lightning Forked Hatchet,Forked Hatchet,Lightning,Lightning,25,9,14,0,0,0,Standard,2.5,5,Axe
Sacred Forked Hatchet,Forked Hatchet,Sacred,Sacred,25,9,14,0,0,0,Standard,2.5,5,Axe
Magic Forked Hatchet,Forked Hatchet,Magic,Magic,25,9,14,0,0,0,Standard,2.5,5,Axe
Cold Forked Hatchet,Forked Hatchet,Cold,Cold,25,9,14,0,0,0,Standard,2.5,5,Axe
Poison Forked Hatchet,Forked Hatchet,Poison,Poison,25,9,14,0,0,0,Standard,2.5,5,Axe
Blood Forked Hatchet,Forked Hatchet,Blood,Blood,25,9,14,0,0,0,Standard,2.5,5,Axe
Occult Forked Hatchet,Forked Hatchet,Occult,Occult,25,9,14,0,0,0,Standard,2.5,5,Axe
Hand Axe,Hand Axe,None,None,25,9,8,0,0,0,Standard,3.5,5,Axe
Heavy Hand Axe,Hand Axe,Heavy,Heavy,25,9,8,0,0,0,Standard,3.5,5,Axe
Keen Hand Axe,Hand Axe,Keen,Keen,25,9,8,0,0,0,Standard,3.5,5,Axe
Quality Hand Axe,Hand Axe,Quality,Quality,25,9,8,0,0,0,Standard,3.5,5,Axe
Fire Hand Axe,Hand Axe,Fire,Fire,25,9,8,0,0,0,Standard,3.5,5,Axe
Flame Art Hand Axe,Hand Axe,Flame Art,Flame Art,25,9,8,0,0,0,Standard,3.5,5,Axe
Lightning Hand Axe,Hand Axe,Lightning,Lightning,25,9,8,0,0,0,Standard,3.5,5,Axe
Sacred Hand Axe,Hand Axe,Sacred,Sacred,25,9,8,0,0,0,Standard,3.5,5,Axe
Magic Hand Axe,Hand Axe,Magic,Magic,25,9,8,0,0,0,Standard,3.5,5,Axe
Cold Hand Axe,Hand Axe,Cold,Cold,25,9,8,0,0,0,Standard,3.5,5,Axe
Poison Hand Axe,Hand Axe,Poison,Poison,25,9,8,0,0,0,Standard,3.5,5,Axe
Blood Hand Axe,Hand Axe,Blood,Blood,25,9,8,0,0,0,Standard,3.5,5,Axe
Occult Hand Axe,Hand Axe,Occult,Occult,25,9,8,0,0,0,Standard,3.5,5,Axe
Jawbone Axe,Jawbone Axe,None,None,25,14,8,0,0,0,Standard,5.5,5,Axe
Heavy Jawbone Axe,Jawbone Axe,Heavy,Heavy,25,14,8,0,0,0,Standard,5.5,5,Axe
Keen Jawbone Axe,Jawbone Axe,Keen,Keen,25,14,8,0,0,0,Standard,5.5,5,Axe
Quality Jawbone Axe,Jawbone Axe,Quality,Quality,25,14,8,0,0,0,Standard,5.5,5,Axe
Fire Jawbone Axe,Jawbone Axe,Fire,Fire,25,14,8,0,0,0,Standard,5.5,5,Axe
Flame Art Jawbone Axe,Jawbone Axe,Flame Art,Flame Art,25,14,8,0,0,0,Standard,5.5,5,Axe
Lightning Jawbone Axe,Jawbone Axe,Lightning,Lightning,25,14,8,0,0,0,Standard,5.5,5,Axe
Sacred Jawbone Axe,Jawbone Axe,Sacred,Sacred,25,14,8,0,0,0,Standard,5.5,5,Axe
Magic Jawbone Axe,Jawbone Axe,Magic,Magic,25,14,8,0,0,0,Standard,5.5,5,Axe
Cold Jawbone Axe,Jawbone Axe,Cold,Cold,25,14,8,0,0,0,Standard,5.5,5,Axe
Poison Jawbone Axe,Jawbone Axe,Poison,Poison,25,14,8,0,0,0,Standard,5.5,5,Axe
Blood Jawbone Axe,Jawbone Axe,Blood,Blood,25,14,8,0,0,0,Standard,5.5,5,Axe
Occult Jawbone Axe,Jawbone Axe,Occult,Occult,25,14,8,0,0,0,Standard,5.5,5,Axe
Iron Cleaver,Iron Cleaver,None,None,25,15,7,0,0,0,Standard,6,5,Axe
Heavy Iron Cleaver,Iron Cleaver,Heavy,Heavy,25,15,7,0,0,0,Standard,6,5,Axe
Keen Iron Cleaver,Iron Cleaver,Keen,Keen,25,15,7,0,0,0,Standard,6,5,Axe
Quality Iron Cleaver,Iron Cleaver,Quality,Quality,25,15,7,0,0,0,Standard,6,5,Axe
Fire Iron Cleaver,Iron Cleaver,Fire,Fire,25,15,7,0,0,0,Standard,6,5,Axe
Flame Art Iron Cleaver,Iron Cleaver,Flame Art,Flame Art,25,15,7,0,0,0,Standard,6,5,Axe
Lightning Iron Cleaver,Iron Cleaver,Lightning,Lightning,25,15,7,0,0,0,Standard,6,5,Axe
Sacred Iron Cleaver,Iron Cleaver,Sacred,Sacred,25,15,7,0,0,0,Standard,6,5,Axe
Magic Iron Cleaver,Iron Cleaver,Magic,Magic,25,15,7,0,0,0,Standard,6,5,Axe
Cold Iron Cleaver,Iron Cleaver,Cold,Cold,25,15,7,0,0,0,Standard,6,5,Axe
Poison Iron Cleaver,Iron Cleaver,Poison,Poison,25,15,7,0,0,0,Standard,6,5,Axe
Blood Iron Cleaver,Iron Cleaver,Blood,Blood,25,15,7,0,0,0,Standard,6,5,Axe
Occult Iron Cleaver,Iron Cleaver,Occult,Occult,25,15,7,0,0,0,Standard,6,5,Axe
Ripple Blade,Ripple Blade,None,-,25,11,11,0,0,20,Standard,4.5,5,Axe
Celebrant's Cleaver,Celebrant's Cleaver,None,None,25,12,8,0,0,0,Standard,4.5,5,Axe
Celebrant's Heavy Cleaver,Celebrant's Cleaver,Heavy,Heavy,25,12,8,0,0,0,Standard,4.5,5,Axe
Celebrant's Keen Cleaver,Celebrant's Cleaver,Keen,Keen,25,12,8,0,0,0,Standard,4.5,5,Axe
Celebrant's Quality Cleaver,Celebrant's Cleaver,Quality,Quality,25,12,8,0,0,0,Standard,4.5,5,Axe
Celebrant's Fire Cleaver,Celebrant's Cleaver,Fire,Fire,25,12,8,0,0,0,Standard,4.5,5,Axe
Celebrant's Flame Art Cleaver Blades,Celebrant's Cleaver Blades,Flame Art,Flame Art,25,12,8,0,0,0,Standard,4.5,5,Axe
Celebrant's Lightning Cleaver,Celebrant's Cleaver,Lightning,Lightning,25,12,8,0,0,0,Standard,4.5,5,Axe
Celebrant's Sacred Cleaver,Celebrant's Cleaver,Sacred,Sacred,25,12,8,0,0,0,Standard,4.5,5,Axe
Celebrant's Magic Cleaver,Celebrant's Cleaver,Magic,Magic,25,12,8,0,0,0,Standard,4.5,5,Axe
Celebrant's Cold Cleaver,Celebrant's Cleaver,Cold,Cold,25,12,8,0,0,0,Standard,4.5,5,Axe
Celebrant's Poison Cleaver,Celebrant's Cleaver,Poison,Poison,25,12,8,0,0,0,Standard,4.5,5,Axe
Celebrant's Blood Cleaver,Celebrant's Cleaver,Blood,Blood,25,12,8,0,0,0,Standard,4.5,5,Axe
Celebrant's Occult Cleaver,Celebrant's Cleaver,Occult,Occult,25,12,8,0,0,0,Standard,4.5,5,Axe
Icerind Hatchet,Icerind Hatchet,None,-,10,11,16,0,0,0,Standard,3,5,Axe
Highland Axe,Highland Axe,None,None,25,12,9,0,0,0,Standard,4.5,5,Axe
Heavy Highland Axe,Highland Axe,Heavy,Heavy,25,12,9,0,0,0,Standard,4.5,5,Axe
Keen Highland Axe,Highland Axe,Keen,Keen,25,12,9,0,0,0,Standard,4.5,5,Axe
Quality Highland Axe,Highland Axe,Quality,Quality,25,12,9,0,0,0,Standard,4.5,5,Axe
Fire Highland Axe,Highland Axe,Fire,Fire,25,12,9,0,0,0,Standard,4.5,5,Axe
Flame Art Highland Axe,Highland Axe,Flame Art,Flame Art,25,12,9,0,0,0,Standard,4.5,5,Axe
Lightning Highland Axe,Highland Axe,Lightning,Lightning,25,12,9,0,0,0,Standard,4.5,5,Axe
Sacred Highland Axe,Highland Axe,Sacred,Sacred,25,12,9,0,0,0,Standard,4.5,5,Axe
Magic Highland Axe,Highland Axe,Magic,Magic,25,12,9,0,0,0,Standard,4.5,5,Axe
Cold Highland Axe,Highland Axe,Cold,Cold,25,12,9,0,0,0,Standard,4.5,5,Axe
Poison Highland Axe,Highland Axe,Poison,Poison,25,12,9,0,0,0,Standard,4.5,5,Axe
Bloody Highland Axe,Highland Axe,Blood,Blood,25,12,9,0,0,0,Standard,4.5,5,Axe
Occult Highland Axe,Highland Axe,Occult,Occult,25,12,9,0,0,0,Standard,4.5,5,Axe
Sacrificial Axe,Sacrificial Axe,None,None,25,16,10,0,0,0,Standard,5.5,5,Axe
Heavy Sacrificial Axe,Sacrificial Axe,Heavy,Heavy,25,16,10,0,0,0,Standard,5.5,5,Axe
Keen Sacrificial Axe,Sacrificial Axe,Keen,Keen,25,16,10,0,0,0,Standard,5.5,5,Axe
Quality Sacrificial Axe,Sacrificial Axe,Quality,Quality,25,16,10,0,0,0,Standard,5.5,5,Axe
Fire Sacrificial Axe,Sacrificial Axe,Fire,Fire,25,16,10,0,0,0,Standard,5.5,5,Axe
Flame Art Sacrificial Axe,Sacrificial Axe,Flame Art,Flame Art,25,16,10,0,0,0,Standard,5.5,5,Axe
Lightning Sacrificial Axe,Sacrificial Axe,Lightning,Lightning,25,16,10,0,0,0,Standard,5.5,5,Axe
Sacred Sacrificial Axe,Sacrificial Axe,Sacred,Sacred,25,16,10,0,0,0,Standard,5.5,5,Axe
Magic Sacrificial Axe,Sacrificial Axe,Magic,Magic,25,16,10,0,0,0,Standard,5.5,5,Axe
Cold Sacrificial Axe,Sacrificial Axe,Cold,Cold,25,16,10,0,0,0,Standard,5.5,5,Axe
Poison Sacrificial Axe,Sacrificial Axe,Poison,Poison,25,16,10,0,0,0,Standard,5.5,5,Axe
Blood Sacrificial Axe,Sacrificial Axe,Blood,Blood,25,16,10,0,0,0,Standard,5.5,5,Axe
Occult Sacrificial Axe,Sacrificial Axe,Occult,Occult,25,16,10,0,0,0,Standard,5.5,5,Axe
Rosus' Axe,Rosus' Axe,None,-,10,18,10,18,0,0,Standard,5.5,5,Axe
Stormhawk Axe,Stormhawk Axe,None,-,10,19,15,0,0,0,Standard,5.5,5,Axe
Greataxe,Greataxe,None,None,25,30,8,0,0,0,Standard,13,5.5,Greataxe
Heavy Greataxe,Greataxe,Heavy,Heavy,25,30,8,0,0,0,Standard,13,5.5,Greataxe
Keen Greataxe,Greataxe,Keen,Keen,25,30,8,0,0,0,Standard,13,5.5,Greataxe
Quality Greataxe,Greataxe,Quality,Quality,25,30,8,0,0,0,Standard,13,5.5,Greataxe
Fire Greataxe,Greataxe,Fire,Fire,25,30,8,0,0,0,Standard,13,5.5,Greataxe
Flame Art Greataxe,Greataxe,Flame Art,Flame Art,25,30,8,0,0,0,Standard,13,5.5,Greataxe
Lightning Greataxe,Greataxe,Lightning,Lightning,25,30,8,0,0,0,Standard,13,5.5,Greataxe
Sacred Greataxe,Greataxe,Sacred,Sacred,25,30,8,0,0,0,Standard,13,5.5,Greataxe
Magic Greataxe,Greataxe,Magic,Magic,25,30,8,0,0,0,Standard,13,5.5,Greataxe
Cold Greataxe,Greataxe,Cold,Cold,25,30,8,0,0,0,Standard,13,5.5,Greataxe
Poison Greataxe,Greataxe,Poison,Poison,25,30,8,0,0,0,Standard,13,5.5,Greataxe
Blood Greataxe,Greataxe,Blood,Blood,25,30,8,0,0,0,Standard,13,5.5,Greataxe
Occult Greataxe,Greataxe,Occult,Occult,25,30,8,0,0,0,Standard,13,5.5,Greataxe
Warped Axe,Warped Axe,None,None,25,24,8,0,0,0,Standard,7.5,5,Axe
Heavy Warped Axe,Warped Axe,Heavy,Heavy,25,24,8,0,0,0,Standard,7.5,5,Axe
Keen Warped Axe,Warped Axe,Keen,Keen,25,24,8,0,0,0,Standard,7.5,5,Axe
Quality Warped Axe,Warped Axe,Quality,Quality,25,24,8,0,0,0,Standard,7.5,5,Axe
Fire Warped Axe,Warped Axe,Fire,Fire,25,24,8,0,0,0,Standard,7.5,5,Axe
Flame Art Warped Axe,Warped Axe,Flame Art,Flame Art,25,24,8,0,0,0,Standard,7.5,5,Axe
Lightning Warped Axe,Warped Axe,Lightning,Lightning,25,24,8,0,0,0,Standard,7.5,5,Axe
Sacred Warped Axe,Warped Axe,Sacred,Sacred,25,24,8,0,0,0,Standard,7.5,5,Axe
Magic Warped Axe,Warped Axe,Magic,Magic,25,24,8,0,0,0,Standard,7.5,5,Axe
Cold Warped Axe,Warped Axe,Cold,Cold,25,24,8,0,0,0,Standard,7.5,5,Axe
Poison Warped Axe,Warped Axe,Poison,Poison,25,24,8,0,0,0,Standard,7.5,5,Axe
Blood Warped Axe,Warped Axe,Blood,Blood,25,24,8,0,0,0,Standard,7.5,5,Axe
Occult Warped Axe,Warped Axe,Occult,Occult,25,24,8,0,0,0,Standard,7.5,5,Axe
Great Omenkiller Cleaver,Great Omenkiller Cleaver,None,None,25,23,12,0,0,0,Standard,11,5.5,Greataxe
Heavy Great Omenkiller Cleaver,Great Omenkiller Cleaver,Heavy,Heavy,25,23,12,0,0,0,Standard,11,5.5,Greataxe
Keen Great Omenkiller Cleaver,Great Omenkiller Cleaver,Keen,Keen,25,23,12,0,0,0,Standard,11,5.5,Greataxe
Quality Great Omenkiller Cleaver,Great Omenkiller Cleaver,Quality,Quality,25,23,12,0,0,0,Standard,11,5.5,Greataxe
Fire Great Omenkiller Cleaver,Great Omenkiller Cleaver,Fire,Fire,25,23,12,0,0,0,Standard,11,5.5,Greataxe
Flame Art Great Omenkiller Cleaver,Great Omenkiller Cleaver,Flame Art,Flame Art,25,23,12,0,0,0,Standard,11,5.5,Greataxe
Lightning Great Omenkiller Cleaver,Great Omenkiller Cleaver,Lightning,Lightning,25,23,12,0,0,0,Standard,11,5.5,Greataxe
Sacred Great Omenkiller Cleaver,Great Omenkiller Cleaver,Sacred,Sacred,25,23,12,0,0,0,Standard,11,5.5,Greataxe
Magic Great Omenkiller Cleaver,Great Omenkiller Cleaver,Magic,Magic,25,23,12,0,0,0,Standard,11,5.5,Greataxe
Cold Great Omenkiller Cleaver,Great Omenkiller Cleaver,Cold,Cold,25,23,12,0,0,0,Standard,11,5.5,Greataxe
Poison Great Omenkiller Cleaver,Great Omenkiller Cleaver,Poison,Poison,25,23,12,0,0,0,Standard,11,5.5,Greataxe
Blood Great Omenkiller Cleaver,Great Omenkiller Cleaver,Blood,Blood,25,23,12,0,0,0,Standard,11,5.5,Greataxe
Occult Great Omenkiller Cleaver,Great Omenkiller Cleaver,Occult,Occult,25,23,12,0,0,0,Standard,11,5.5,Greataxe
Crescent Moon Axe,Crescent Moon Axe,None,None,25,25,15,0,0,0,Standard,12.5,5.5,Greataxe
Heavy Crescent Moon Axe,Crescent Moon Axe,Heavy,Heavy,25,25,15,0,0,0,Standard,12.5,5.5,Greataxe
Keen Crescent Moon Axe,Crescent Moon Axe,Keen,Keen,25,25,15,0,0,0,Standard,12.5,5.5,Greataxe
Quality Crescent Moon Axe,Crescent Moon Axe,Quality,Quality,25,25,15,0,0,0,Standard,12.5,5.5,Greataxe
Fire Crescent Moon Axe,Crescent Moon Axe,Fire,Fire,25,25,15,0,0,0,Standard,12.5,5.5,Greataxe
Flame Art Crescent Moon Axe,Crescent Moon Axe,Flame Art,Flame Art,25,25,15,0,0,0,Standard,12.5,5.5,Greataxe
Lightning Crescent Moon Axe,Crescent Moon Axe,Lightning,Lightning,25,25,15,0,0,0,Standard,12.5,5.5,Greataxe
Sacred Crescent Moon Axe,Crescent Moon Axe,Sacred,Sacred,25,25,15,0,0,0,Standard,12.5,5.5,Greataxe
Magic Crescent Moon Axe,Crescent Moon Axe,Magic,Magic,25,25,15,0,0,0,Standard,12.5,5.5,Greataxe
Cold Crescent Moon Axe,Crescent Moon Axe,Cold,Cold,25,25,15,0,0,0,Standard,12.5,5.5,Greataxe
Poison Crescent Moon Axe,Crescent Moon Axe,Poison,Poison,25,25,15,0,0,0,Standard,12.5,5.5,Greataxe
Blood Crescent Moon Axe,Crescent Moon Axe,Blood,Blood,25,25,15,0,0,0,Standard,12.5,5.5,Greataxe
Occult Crescent Moon Axe,Crescent Moon Axe,Occult,Occult,25,25,15,0,0,0,Standard,12.5,5.5,Greataxe
Axe of Godrick,Axe of Godrick,None,-,10,34,22,0,0,0,Standard,11,5.5,Greataxe
Longhaft Axe,Longhaft Axe,None,None,25,24,8,0,0,0,Standard,12.5,5.5,Greataxe
Heavy Longhaft Axe,Longhaft Axe,Heavy,Heavy,25,24,8,0,0,0,Standard,12.5,5.5,Greataxe
Keen Longhaft Axe,Longhaft Axe,Keen,Keen,25,24,8,0,0,0,Standard,12.5,5.5,Greataxe
Quality Longhaft Axe,Longhaft Axe,Quality,Quality,25,24,8,0,0,0,Standard,12.5,5.5,Greataxe
Fire Longhaft Axe,Longhaft Axe,Fire,Fire,25,24,8,0,0,0,Standard,12.5,5.5,Greataxe
Flame Art Longhaft Axe,Longhaft Axe,Flame Art,Flame Art,25,24,8,0,0,0,Standard,12.5,5.5,Greataxe
Lightning Longhaft Axe,Longhaft Axe,Lightning,Lightning,25,24,8,0,0,0,Standard,12.5,5.5,Greataxe
Sacred Longhaft Axe,Longhaft Axe,Sacred,Sacred,25,24,8,0,0,0,Standard,12.5,5.5,Greataxe
Magic Longhaft Axe,Longhaft Axe,Magic,Magic,25,24,8,0,0,0,Standard,12.5,5.5,Greataxe
Cold Longhaft Axe,Longhaft Axe,Cold,Cold,25,24,8,0,0,0,Standard,12.5,5.5,Greataxe
Poison Longhaft Axe,Longhaft Axe,Poison,Poison,25,24,8,0,0,0,Standard,12.5,5.5,Greataxe
Blood Longhaft Axe,Longhaft Axe,Blood,Blood,25,24,8,0,0,0,Standard,12.5,5.5,Greataxe
Occult Longhaft Axe,Longhaft Axe,Occult,Occult,25,24,8,0,0,0,Standard,12.5,5.5,Greataxe
Rusted Anchor,Rusted Anchor,None,None,25,26,9,0,0,0,Pierce,12.5,5.5,Greataxe
Heavy Rusted Anchor,Rusted Anchor,Heavy,Heavy,25,26,9,0,0,0,Pierce,12.5,5.5,Greataxe
Keen Rusted Anchor,Rusted Anchor,Keen,Keen,25,26,9,0,0,0,Pierce,12.5,5.5,Greataxe
Quality Rusted Anchor,Rusted Anchor,Quality,Quality,25,26,9,0,0,0,Pierce,12.5,5.5,Greataxe
Fire Rusted Anchor,Rusted Anchor,Fire,Fire,25,26,9,0,0,0,Pierce,12.5,5.5,Greataxe
Flame Art Rusted Anchor,Rusted Anchor,Flame Art,Flame Art,25,26,9,0,0,0,Pierce,12.5,5.5,Greataxe
Lightning Rusted Anchor,Rusted Anchor,Lightning,Lightning,25,26,9,0,0,0,Pierce,12.5,5.5,Greataxe
Sacred Rusted Anchor,Rusted Anchor,Sacred,Sacred,25,26,9,0,0,0,Pierce,12.5,5.5,Greataxe
Magic Rusted Anchor,Rusted Anchor,Magic,Magic,25,26,9,0,0,0,Pierce,12.5,5.5,Greataxe
Cold Rusted Anchor,Rusted Anchor,Cold,Cold,25,26,9,0,0,0,Pierce,12.5,5.5,Greataxe
Poison Rusted Anchor,Rusted Anchor,Poison,Poison,25,26,9,0,0,0,Pierce,12.5,5.5,Greataxe
Blood Rusted Anchor,Rusted Anchor,Blood,Blood,25,26,9,0,0,0,Pierce,12.5,5.5,Greataxe
Occult Rusted Anchor,Rusted Anchor,Occult,Occult,25,26,9,0,0,0,Pierce,12.5,5.5,Greataxe
Executioner's Greataxe,Executioner's Greataxe,None,None,25,34,8,0,0,0,Standard,15,5.5,Greataxe
Executioner's Heavy Greataxe,Executioner's Greataxe,Heavy,Heavy,25,34,8,0,0,0,Standard,15,5.5,Greataxe
Executioner's Keen Greataxe,Executioner's Greataxe,Keen,Keen,25,34,8,0,0,0,Standard,15,5.5,Greataxe
Executioner's Quality Greataxe,Executioner's Greataxe,Quality,Quality,25,34,8,0,0,0,Standard,15,5.5,Greataxe
Executioner's Fire Greataxe,Executioner's Greataxe,Fire,Fire,25,34,8,0,0,0,Standard,15,5.5,Greataxe
Executioner's Flame Art Greataxe,Executioner's Greataxe,Flame Art,Flame Art,25,34,8,0,0,0,Standard,15,5.5,Greataxe
Executioner's Lightning Greataxe,Executioner's Greataxe,Lightning,Lightning,25,34,8,0,0,0,Standard,15,5.5,Greataxe
Executioner's Sacred Greataxe,Executioner's Greataxe,Sacred,Sacred,25,34,8,0,0,0,Standard,15,5.5,Greataxe
Executioner's Magic Greataxe,Executioner's Greataxe,Magic,Magic,25,34,8,0,0,0,Standard,15,5.5,Greataxe
Executioner's Cold Greataxe,Executioner's Greataxe,Cold,Cold,25,34,8,0,0,0,Standard,15,5.5,Greataxe
Executioner's Poison Greataxe,Executioner's Greataxe,Poison,Poison,25,34,8,0,0,0,Standard,15,5.5,Greataxe
Executioner's Blood Greataxe,Executioner's Greataxe,Blood,Blood,25,34,8,0,0,0,Standard,15,5.5,Greataxe
Executioner's Occult Greataxe,Executioner's Greataxe,Occult,Occult,25,34,8,0,0,0,Standard,15,5.5,Greataxe
Winged Greathorn,Winged Greathorn,None,-,10,30,20,0,0,0,Standard,11,5.5,Greataxe
Butchering Knife,Butchering Knife,None,None,25,16,20,0,0,0,Standard,8.5,5.5,Greataxe
Heavy Butchering Knife,Butchering Knife,Heavy,Heavy,25,16,20,0,0,0,Standard,8.5,5.5,Greataxe
Keen Butchering Knife,Butchering Knife,Keen,Keen,25,16,20,0,0,0,Standard,8.5,5.5,Greataxe
Quality Butchering Knife,Butchering Knife,Quality,Quality,25,16,20,0,0,0,Standard,8.5,5.5,Greataxe
Fire Butchering Knife,Butchering Knife,Fire,Fire,25,16,20,0,0,0,Standard,8.5,5.5,Greataxe
Flame Art Butchering Knife,Butchering Knife,Flame Art,Flame Art,25,16,20,0,0,0,Standard,8.5,5.5,Greataxe
Lightning Butchering Knife,Butchering Knife,Lightning,Lightning,25,16,20,0,0,0,Standard,8.5,5.5,Greataxe
Sacred Butchering Knife,Butchering Knife,Sacred,Sacred,25,16,20,0,0,0,Standard,8.5,5.5,Greataxe
Magic Butchering Knife,Butchering Knife,Magic,Magic,25,16,20,0,0,0,Standard,8.5,5.5,Greataxe
Cold Butchering Knife,Butchering Knife,Cold,Cold,25,16,20,0,0,0,Standard,8.5,5.5,Greataxe
Poison Butchering Knife,Butchering Knife,Poison,Poison,25,16,20,0,0,0,Standard,8.5,5.5,Greataxe
Blood Butchering Knife,Butchering Knife,Blood,Blood,25,16,20,0,0,0,Standard,8.5,5.5,Greataxe
Occult Butchering Knife,Butchering Knife,Occult,Occult,25,16,20,0,0,0,Standard,8.5,5.5,Greataxe
Gargoyle's Great Axe,Gargoyle's Great Axe,None,None,25,24,8,0,0,0,Standard,8.5,5.5,Greataxe
Gargoyle's Heavy Great Axe,Gargoyle's Great Axe,Heavy,Heavy,25,24,8,0,0,0,Standard,8.5,5.5,Greataxe
Gargoyle's Keen Great Axe,Gargoyle's Great Axe,Keen,Keen,25,24,8,0,0,0,Standard,8.5,5.5,Greataxe
Gargoyle's Quality Great Axe,Gargoyle's Great Axe,Quality,Quality,25,24,8,0,0,0,Standard,8.5,5.5,Greataxe
Gargoyle's Fire Great Axe,Gargoyle's Great Axe,Fire,Fire,25,24,8,0,0,0,Standard,8.5,5.5,Greataxe
Gargoyle's Flame Art Great Axe,Gargoyle's Great Axe,Flame Art,Flame Art,25,24,8,0,0,0,Standard,8.5,5.5,Greataxe
Gargoyle's Lightning Great Axe,Gargoyle's Great Axe,Lightning,Lightning,25,24,8,0,0,0,Standard,8.5,5.5,Greataxe
Gargoyle's Sacred Great Axe,Gargoyle's Great Axe,Sacred,Sacred,25,24,8,0,0,0,Standard,8.5,5.5,Greataxe
Gargoyle's Magic Great Axe,Gargoyle's Great Axe,Magic,Magic,25,24,8,0,0,0,Standard,8.5,5.5,Greataxe
Gargoyle's Cold Great Axe,Gargoyle's Great Axe,Cold,Cold,25,24,8,0,0,0,Standard,8.5,5.5,Greataxe
Gargoyle's Poison Great Axe,Gargoyle's Great Axe,Poison,Poison,25,24,8,0,0,0,Standard,8.5,5.5,Greataxe
Gargoyle's Blood Great Axe,Gargoyle's Great Axe,Blood,Blood,25,24,8,0,0,0,Standard,8.5,5.5,Greataxe
Gargoyle's Occult Great Axe,Gargoyle's Great Axe,Occult,Occult,25,24,8,0,0,0,Standard,8.5,5.5,Greataxe
Gargoyle's Black Axe,Gargoyle's Black Axe,None,-,10,24,8,0,22,0,Standard,8.5,5.5,Greataxe
Short Spear,Short Spear,None,None,25,10,10,0,0,0,Pierce,4,5,Spear
Heavy Short Spear,Short Spear,Heavy,Heavy,25,10,10,0,0,0,Pierce,4,5,Spear
Keen Short Spear,Short Spear,Keen,Keen,25,10,10,0,0,0,Pierce,4,5,Spear
Quality Short Spear,Short Spear,Quality,Quality,25,10,10,0,0,0,Pierce,4,5,Spear
Fire Short Spear,Short Spear,Fire,Fire,25,10,10,0,0,0,Pierce,4,5,Spear
Flame Art Short Spear,Short Spear,Flame Art,Flame Art,25,10,10,0,0,0,Pierce,4,5,Spear
Lightning Short Spear,Short Spear,Lightning,Lightning,25,10,10,0,0,0,Pierce,4,5,Spear
Sacred Short Spear,Short Spear,Sacred,Sacred,25,10,10,0,0,0,Pierce,4,5,Spear
Magic Short Spear,Short Spear,Magic,Magic,25,10,10,0,0,0,Pierce,4,5,Spear
Cold Short Spear,Short Spear,Cold,Cold,25,10,10,0,0,0,Pierce,4,5,Spear
Poison Short Spear,Short Spear,Poison,Poison,25,10,10,0,0,0,Pierce,4,5,Spear
Blood Short Spear,Short Spear,Blood,Blood,25,10,10,0,0,0,Pierce,4,5,Spear
Occult Short Spear,Short Spear,Occult,Occult,25,10,10,0,0,0,Pierce,4,5,Spear
Spear,Spear,None,None,25,12,15,0,0,0,Pierce,4.5,5,Spear
Heavy Spear,Spear,Heavy,Heavy,25,12,15,0,0,0,Pierce,4.5,5,Spear
Keen Spear,Spear,Keen,Keen,25,12,15,0,0,0,Pierce,4.5,5,Spear
Quality Spear,Spear,Quality,Quality,25,12,15,0,0,0,Pierce,4.5,5,Spear
Fire Spear,Spear,Fire,Fire,25,12,15,0,0,0,Pierce,4.5,5,Spear
Flame Art Spear,Spear,Flame Art,Flame Art,25,12,15,0,0,0,Pierce,4.5,5,Spear
Lightning Spear,Spear,Lightning,Lightning,25,12,15,0,0,0,Pierce,4.5,5,Spear
Sacred Spear,Spear,Sacred,Sacred,25,12,15,0,0,0,Pierce,4.5,5,Spear
Magic Spear,Spear,Magic,Magic,25,12,15,0,0,0,Pierce,4.5,5,Spear
Cold Spear,Spear,Cold,Cold,25,12,15,0,0,0,Pierce,4.5,5,Spear
Poison Spear,Spear,Poison,Poison,25,12,15,0,0,0,Pierce,4.5,5,Spear
Bloody Spear,Spear,Blood,Blood,25,12,15,0,0,0,Pierce,4.5,5,Spear
Occult Spear,Spear,Occult,Occult,25,12,15,0,0,0,Pierce,4.5,5,Spear
Crystal Spear,Crystal Spear,None,-,10,10,16,16,0,0,Pierce,5.5,5,Spear
Clayman's Harpoon,Clayman's Harpoon,None,None,25,12,10,12,0,0,Pierce,5.5,5,Spear
Clayman's Heavy Harpoon,Clayman's Harpoon,Heavy,Heavy,25,12,10,12,0,0,Pierce,5.5,5,Spear
Clayman's Keen Harpoon,Clayman's Harpoon,Keen,Keen,25,12,10,12,0,0,Pierce,5.5,5,Spear
Clayman's Quality Harpoon,Clayman's Harpoon,Quality,Quality,25,12,10,12,0,0,Pierce,5.5,5,Spear
Clayman's Fire Harpoon,Clayman's Harpoon,Fire,Fire,25,12,10,12,0,0,Pierce,5.5,5,Spear
Clayman's Flame Art Harpoon,Clayman's Harpoon,Flame Art,Flame Art,25,12,10,12,0,0,Pierce,5.5,5,Spear
Clayman's Lightning Harpoon,Clayman's Harpoon,Lightning,Lightning,25,12,10,12,0,0,Pierce,5.5,5,Spear
Clayman's Sacred Harpoon,Clayman's Harpoon,Sacred,Sacred,25,12,10,12,0,0,Pierce,5.5,5,Spear
Clayman's Magic Harpoon,Clayman's Harpoon,Magic,Magic,25,12,10,12,0,0,Pierce,5.5,5,Spear
Clayman's Cold Harpoon,Clayman's Harpoon,Cold,Cold,25,12,10,12,0,0,Pierce,5.5,5,Spear
Clayman's Poison Harpoon,Clayman's Harpoon,Poison,Poison,25,12,10,12,0,0,Pierce,5.5,5,Spear
Clayman's Blood Harpoon,Clayman's Harpoon,Blood,Blood,25,12,10,12,0,0,Pierce,5.5,5,Spear
Clayman's Occult Harpoon,Clayman's Harpoon,Occult,Occult,25,12,10,12,0,0,Pierce,5.5,5,Spear
Cleanrot Spear,Cleanrot Spear,None,-,10,16,16,0,14,0,Pierce,5.5,5,Spear
Partisan,Partisan,None,None,25,15,12,0,0,0,Pierce,6.5,5,Spear
Heavy Partisan,Partisan,Heavy,Heavy,25,15,12,0,0,0,Pierce,6.5,5,Spear
Keen Partisan,Partisan,Keen,Keen,25,15,12,0,0,0,Pierce,6.5,5,Spear
Quality Partisan,Partisan,Quality,Quality,25,15,12,0,0,0,Pierce,6.5,5,Spear
Fire Partisan,Partisan,Fire,Fire,25,15,12,0,0,0,Pierce,6.5,5,Spear
Flame Art Partisan,Partisan,Flame Art,Flame Art,25,15,12,0,0,0,Pierce,6.5,5,Spear
Lightning Partisan,Partisan,Lightning,Lightning,25,15,12,0,0,0,Pierce,6.5,5,Spear
Sacred Partisan,Partisan,Sacred,Sacred,25,15,12,0,0,0,Pierce,6.5,5,Spear
Magic Partisan,Partisan,Magic,Magic,25,15,12,0,0,0,Pierce,6.5,5,Spear
Cold Partisan,Partisan,Cold,Cold,25,15,12,0,0,0,Pierce,6.5,5,Spear
Poison Partisan,Partisan,Poison,Poison,25,15,12,0,0,0,Pierce,6.5,5,Spear
Blood Partisan,Partisan,Blood,Blood,25,15,12,0,0,0,Pierce,6.5,5,Spear
Occult Partisan,Partisan,Occult,Occult,25,15,12,0,0,0,Pierce,6.5,5,Spear
Celebrant's Rib-Rake,Celebrant's Rib-Rake,None,None,25,8,14,0,0,0,Pierce,5,5,Spear
Celebrant's Heavy Rib-Rake,Celebrant's Rib-Rake,Heavy,Heavy,25,8,14,0,0,0,Pierce,5,5,Spear
Celebrant's Keen Rib-Rake,Celebrant's Rib-Rake,Keen,Keen,25,8,14,0,0,0,Pierce,5,5,Spear
Celebrant's Quality Rib-Rake,Celebrant's Rib-Rake,Quality,Quality,25,8,14,0,0,0,Pierce,5,5,Spear
Celebrant's Fire Rib-Rake,Celebrant's Rib-Rake,Fire,Fire,25,8,14,0,0,0,Pierce,5,5,Spear
Celebrant's Flame Art Rib-Rake,Celebrant's Rib-Rake,Flame Art,Flame Art,25,8,14,0,0,0,Pierce,5,5,Spear
Celebrant's Lightning Rib-Rake,Celebrant's Rib-Rake,Lightning,Lightning,25,8,14,0,0,0,Pierce,5,5,Spear
Celebrant's Sacred Rib-Rake,Celebrant's Rib-Rake,Sacred,Sacred,25,8,14,0,0,0,Pierce,5,5,Spear
Celebrant's Magic Rib-Rake,Celebrant's Rib-Rake,Magic,Magic,25,8,14,0,0,0,Pierce,5,5,Spear
Celebrant's Cold Rib-Rake,Celebrant's Rib-Rake,Cold,Cold,25,8,14,0,0,0,Pierce,5,5,Spear
Celebrant's Poison Rib-Rake,Celebrant's Rib-Rake,Poison,Poison,25,8,14,0,0,0,Pierce,5,5,Spear
Celebrant's Blood Rib-Rake,Celebrant's Rib-Rake,Blood,Blood,25,8,14,0,0,0,Pierce,5,5,Spear
Celebrant's Occult Rib-Rake,Celebrant's Rib-Rake,Occult,Occult,25,8,14,0,0,0,Pierce,5,5,Spear
Pike,Pike,None,None,25,20,14,0,0,0,Pierce,7.5,5,Spear
Heavy Pike,Pike,Heavy,Heavy,25,20,14,0,0,0,Pierce,7.5,5,Spear
Keen Pike,Pike,Keen,Keen,25,20,14,0,0,0,Pierce,7.5,5,Spear
Quality Pike,Pike,Quality,Quality,25,20,14,0,0,0,Pierce,7.5,5,Spear
Fire Pike,Pike,Fire,Fire,25,20,14,0,0,0,Pierce,7.5,5,Spear
Flame Art Pike,Pike,Flame Art,Flame Art,25,20,14,0,0,0,Pierce,7.5,5,Spear
Lightning Pike,Pike,Lightning,Lightning,25,20,14,0,0,0,Pierce,7.5,5,Spear
Sacred Pike,Pike,Sacred,Sacred,25,20,14,0,0,0,Pierce,7.5,5,Spear
Magic Pike,Pike,Magic,Magic,25,20,14,0,0,0,Pierce,7.5,5,Spear
Cold Pike,Pike,Cold,Cold,25,20,14,0,0,0,Pierce,7.5,5,Spear
Poison Pike,Pike,Poison,Poison,25,20,14,0,0,0,Pierce,7.5,5,Spear
Blood Pike,Pike,Blood,Blood,25,20,14,0,0,0,Pierce,7.5,5,Spear
Occult Pike,Pike,Occult,Occult,25,20,14,0,0,0,Pierce,7.5,5,Spear
Torchpole,Torchpole,None,-,25,14,15,0,0,0,Pierce,6,5,Spear
Bolt of Gransax,Bolt of Gransax,None,-,10,20,40,0,0,0,Pierce,8.5,5,Spear
Cross-Naginata,Cross-Naginata,None,None,25,16,20,0,0,0,Pierce,8,5,Spear
Heavy Cross-Naginata,Cross-Naginata,Heavy,Heavy,25,16,20,0,0,0,Pierce,8,5,Spear
Keen Cross-Naginata,Cross-Naginata,Keen,Keen,25,16,20,0,0,0,Pierce,8,5,Spear
Quality Cross-Naginata,Cross-Naginata,Quality,Quality,25,16,20,0,0,0,Pierce,8,5,Spear
Fire Cross-Naginata,Cross-Naginata,Fire,Fire,25,16,20,0,0,0,Pierce,8,5,Spear
Flame Art Cross-Naginata,Cross-Naginata,Flame Art,Flame Art,25,16,20,0,0,0,Pierce,8,5,Spear
Lightning Cross-Naginata,Cross-Naginata,Lightning,Lightning,25,16,20,0,0,0,Pierce,8,5,Spear
Sacred Cross-Naginata,Cross-Naginata,Sacred,Sacred,25,16,20,0,0,0,Pierce,8,5,Spear
Magic Cross-Naginata,Cross-Naginata,Magic,Magic,25,16,20,0,0,0,Pierce,8,5,Spear
Cold Cross-Naginata,Cross-Naginata,Cold,Cold,25,16,20,0,0,0,Pierce,8,5,Spear
Poison Cross-Naginata,Cross-Naginata,Poison,Poison,25,16,20,0,0,0,Pierce,8,5,Spear
Blood Cross-Naginata,Cross-Naginata,Blood,Blood,25,16,20,0,0,0,Pierce,8,5,Spear
Occult Cross-Naginata,Cross-Naginata,Occult,Occult,25,16,20,0,0,0,Pierce,8,5,Spear
Death Ritual Spear,Death Ritual Spear,None,-,10,14,20,18,0,0,Pierce,6.5,5,Spear
Inquisitor's Girandole,Inquisitor's Girandole,None,-,10,18,15,0,16,0,Pierce,7.5,5,Spear
Spiked Spear,Spiked Spear,None,None,25,14,16,0,0,0,Pierce,6,5,Spear
Heavy Spiked Spear,Spiked Spear,Heavy,Heavy,25,14,16,0,0,0,Pierce,6,5,Spear
Keen Spiked Spear,Spiked Spear,Keen,Keen,25,14,16,0,0,0,Pierce,6,5,Spear
Quality Spiked Spear,Spiked Spear,Quality,Quality,25,14,16,0,0,0,Pierce,6,5,Spear
Fire Spiked Spear,Spiked Spear,Fire,Fire,25,14,16,0,0,0,Pierce,6,5,Spear
Flame Art Spiked Spear,Spiked Spear,Flame Art,Flame Art,25,14,16,0,0,0,Pierce,6,5,Spear
Lightning Spiked Spear,Spiked Spear,Lightning,Lightning,25,14,16,0,0,0,Pierce,6,5,Spear
Sacred Spiked Spear,Spiked Spear,Sacred,Sacred,25,14,16,0,0,0,Pierce,6,5,Spear
Magic Spiked Spear,Spiked Spear,Magic,Magic,25,14,16,0,0,0,Pierce,6,5,Spear
Cold Spiked Spear,Spiked Spear,Cold,Cold,25,14,16,0,0,0,Pierce,6,5,Spear
Poison Spiked Spear,Spiked Spear,Poison,Poison,25,14,16,0,0,0,Pierce,6,5,Spear
Blood Spiked Spear,Spiked Spear,Blood,Blood,25,14,16,0,0,0,Pierce,6,5,Spear
Occult Spiked Spear,Spiked Spear,Occult,Occult,25,14,16,0,0,0,Pierce,6,5,Spear
Iron Spear,Iron Spear,None,None,25,13,11,0,0,0,Pierce,4.5,5,Spear
Heavy Iron Spear,Iron Spear,Heavy,Heavy,25,13,11,0,0,0,Pierce,4.5,5,Spear
Keen Iron Spear,Iron Spear,Keen,Keen,25,13,11,0,0,0,Pierce,4.5,5,Spear
Quality Iron Spear,Iron Spear,Quality,Quality,25,13,11,0,0,0,Pierce,4.5,5,Spear
Fire Iron Spear,Iron Spear,Fire,Fire,25,13,11,0,0,0,Pierce,4.5,5,Spear
Flame Art Iron Spear,Iron Spear,Flame Art,Flame Art,25,13,11,0,0,0,Pierce,4.5,5,Spear
Lightning Iron Spear,Iron Spear,Lightning,Lightning,25,13,11,0,0,0,Pierce,4.5,5,Spear
Sacred Iron Spear,Iron Spear,Sacred,Sacred,25,13,11,0,0,0,Pierce,4.5,5,Spear
Magic Iron Spear,Iron Spear,Magic,Magic,25,13,11,0,0,0,Pierce,4.5,5,Spear
Cold Iron Spear,Iron Spear,Cold,Cold,25,13,11,0,0,0,Pierce,4.5,5,Spear
Poison Iron Spear,Iron Spear,Poison,Poison,25,13,11,0,0,0,Pierce,4.5,5,Spear
Blood Iron Spear,Iron Spear,Blood,Blood,25,13,11,0,0,0,Pierce,4.5,5,Spear
Occult Iron Spear,Iron Spear,Occult,Occult,25,13,11,0,0,0,Pierce,4.5,5,Spear
Rotten Crystal Spear,Rotten Crystal Spear,None,-,10,10,16,16,0,0,Pierce,5.5,5,Spear
Mohgwyn's Sacred Spear,Mohgwyn's Spear,None,-,10,24,14,0,0,27,Pierce,10,5.5,Great Spear
Siluria's Tree,Siluria's Tree,None,-,10,27,13,0,20,0,Pierce,10,5.5,Great Spear
Serpent-Hunter,Serpent-Hunter,None,-,10,0,0,0,0,0,Pierce,12,5.5,Great Spear
Vyke's War Spear,Vyke's War Spear,None,-,10,16,20,0,18,0,Pierce,8,5.5,Great Spear
Lance,Lance,None,None,25,20,14,0,0,0,Pierce,9,5.5,Great Spear
Heavy Lance,Lance,Heavy,Heavy,25,20,14,0,0,0,Pierce,9,5.5,Great Spear
Keen Lance,Lance,Keen,Keen,25,20,14,0,0,0,Pierce,9,5.5,Great Spear
Quality Lance,Lance,Quality,Quality,25,20,14,0,0,0,Pierce,9,5.5,Great Spear
Fire Lance,Lance,Fire,Fire,25,20,14,0,0,0,Pierce,9,5.5,Great Spear
Flame Art Lance,Lance,Flame Art,Flame Art,25,20,14,0,0,0,Pierce,9,5.5,Great Spear
Lightning Lance,Lance,Lightning,Lightning,25,20,14,0,0,0,Pierce,9,5.5,Great Spear
Sacred Lance,Lance,Sacred,Sacred,25,20,14,0,0,0,Pierce,9,5.5,Great Spear
Magic Lance,Lance,Magic,Magic,25,20,14,0,0,0,Pierce,9,5.5,Great Spear
Cold Lance,Lance,Cold,Cold,25,20,14,0,0,0,Pierce,9,5.5,Great Spear
Poison Lance,Lance,Poison,Poison,25,20,14,0,0,0,Pierce,9,5.5,Great Spear
Bloody Lance,Lance,Blood,Blood,25,20,14,0,0,0,Pierce,9,5.5,Great Spear
Occult Lance,Lance,Occult,Occult,25,20,14,0,0,0,Pierce,9,5.5,Great Spear
Treespear,Treespear,None,-,25,15,22,0,18,0,Pierce,9.5,5.5,Great Spear
Halberd,Halberd,None,None,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Heavy Halberd,Halberd,Heavy,Heavy,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Keen Halberd,Halberd,Keen,Keen,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Quality Halberd,Halberd,Quality,Quality,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Fire Halberd,Halberd,Fire,Fire,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Flame Art Halberd,Halberd,Flame Art,Flame Art,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Lightning Halberd,Halberd,Lightning,Lightning,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Sacred Halberd,Halberd,Sacred,Sacred,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Magic Halberd,Halberd,Magic,Magic,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Cold Halberd,Halberd,Cold,Cold,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Poison Halberd,Halberd,Poison,Poison,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Blood Halberd,Halberd,Blood,Blood,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Occult Halberd,Halberd,Occult,Occult,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Pest's Glaive,Pest's Glaive,None,None,25,13,13,0,0,0,Standard/Pierce,7,5,Halberd
Pest's Heavy Glaive,Pest's Glaive,Heavy,Heavy,25,13,13,0,0,0,Standard/Pierce,7,5,Halberd
Pest's Keen Glaive,Pest's Glaive,Keen,Keen,25,13,13,0,0,0,Standard/Pierce,7,5,Halberd
Pest's Quality Glaive,Pest's Glaive,Quality,Quality,25,13,13,0,0,0,Standard/Pierce,7,5,Halberd
Pest's Fire Glaive,Pest's Glaive,Fire,Fire,25,13,13,0,0,0,Standard/Pierce,7,5,Halberd
Pest's Flame Art Glaive,Pest's Glaive,Flame Art,Flame Art,25,13,13,0,0,0,Standard/Pierce,7,5,Halberd
Pest's Lightning Glaive,Pest's Glaive,Lightning,Lightning,25,13,13,0,0,0,Standard/Pierce,7,5,Halberd
Pest's Sacred Glaive,Pest's Glaive,Sacred,Sacred,25,13,13,0,0,0,Standard/Pierce,7,5,Halberd
Pest's Magic Glaive,Pest's Glaive,Magic,Magic,25,13,13,0,0,0,Standard/Pierce,7,5,Halberd
Pest's Cold Glaive,Pest's Glaive,Cold,Cold,25,13,13,0,0,0,Standard/Pierce,7,5,Halberd
Pest's Poison Glaive,Pest's Glaive,Poison,Poison,25,13,13,0,0,0,Standard/Pierce,7,5,Halberd
Pest's Blood Glaive,Pest's Glaive,Blood,Blood,25,13,13,0,0,0,Standard/Pierce,7,5,Halberd
Pest's Occult Glaive,Pest's Glaive,Occult,Occult,25,13,13,0,0,0,Standard/Pierce,7,5,Halberd
Lucerne,Lucerne,None,None,25,15,12,0,0,0,Standard/Pierce,7,5,Halberd
Heavy Lucerne,Lucerne,Heavy,Heavy,25,15,12,0,0,0,Standard/Pierce,7,5,Halberd
Keen Lucerne,Lucerne,Keen,Keen,25,15,12,0,0,0,Standard/Pierce,7,5,Halberd
Quality Lucerne,Lucerne,Quality,Quality,25,15,12,0,0,0,Standard/Pierce,7,5,Halberd
Fire Lucerne,Lucerne,Fire,Fire,25,15,12,0,0,0,Standard/Pierce,7,5,Halberd
Flame Art Lucerne,Lucerne,Flame Art,Flame Art,25,15,12,0,0,0,Standard/Pierce,7,5,Halberd
Lightning Lucerne,Lucerne,Lightning,Lightning,25,15,12,0,0,0,Standard/Pierce,7,5,Halberd
Sacred Lucerne,Lucerne,Sacred,Sacred,25,15,12,0,0,0,Standard/Pierce,7,5,Halberd
Magic Lucerne,Lucerne,Magic,Magic,25,15,12,0,0,0,Standard/Pierce,7,5,Halberd
Cold Lucerne,Lucerne,Cold,Cold,25,15,12,0,0,0,Standard/Pierce,7,5,Halberd
Poison Lucerne,Lucerne,Poison,Poison,25,15,12,0,0,0,Standard/Pierce,7,5,Halberd
Blood Lucerne,Lucerne,Blood,Blood,25,15,12,0,0,0,Standard/Pierce,7,5,Halberd
Occult Lucerne,Lucerne,Occult,Occult,25,15,12,0,0,0,Standard/Pierce,7,5,Halberd
Banished Knight's Halberd,Banished Knight's Halberd,None,None,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Banished Knight's Heavy Halberd,Banished Knight's Halberd,Heavy,Heavy,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Banished Knight's Keen Halberd,Banished Knight's Halberd,Keen,Keen,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Banished Knight's Quality Halberd,Banished Knight's Halberd,Quality,Quality,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Banished Knight's Fire Halberd,Banished Knight's Halberd,Fire,Fire,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Banished Knight's Flame Art Halberd,Banished Knight's Halberd,Flame Art,Flame Art,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Banished Knight's Lightning Halberd,Banished Knight's Halberd,Lightning,Lightning,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Banished Knight's Sacred Halberd,Banished Knight's Halberd,Sacred,Sacred,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Banished Knight's Magic Halberd,Banished Knight's Halberd,Magic,Magic,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Banished Knight's Cold Halberd,Banished Knight's Halberd,Cold,Cold,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Banished Knight's Poison Halberd,Banished Knight's Halberd,Poison,Poison,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Banished Knight's Blood Halberd,Banished Knight's Halberd,Blood,Blood,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Banished Knight's Occult Halberd,Banished Knight's Halberd,Occult,Occult,25,14,12,0,0,0,Standard/Pierce,8,5,Halberd
Commander's Standard,Commander's Standard,None,-,10,24,14,0,0,0,Standard/Pierce,11.5,5,Halberd
Nightrider Glaive,Nightrider Glaive,None,None,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Heavy Nightrider Glaive,Nightrider Glaive,Heavy,Heavy,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Keen Nightrider Glaive,Nightrider Glaive,Keen,Keen,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Quality Nightrider Glaive,Nightrider Glaive,Quality,Quality,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Fire Nightrider Glaive,Nightrider Glaive,Fire,Fire,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Flame Art Nightrider Glaive,Nightrider Glaive,Flame Art,Flame Art,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Lightning Nightrider Glaive,Nightrider Glaive,Lightning,Lightning,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Sacred Nightrider Glaive,Nightrider Glaive,Sacred,Sacred,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Magic Nightrider Glaive,Nightrider Glaive,Magic,Magic,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Cold Nightrider Glaive,Nightrider Glaive,Cold,Cold,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Poison Nightrider Glaive,Nightrider Glaive,Poison,Poison,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Blood Nightrider Glaive,Nightrider Glaive,Blood,Blood,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Occult Nightrider Glaive,Nightrider Glaive,Occult,Occult,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Ripple Crescent Halberd,Ripple Crescent Halberd,None,-,25,12,12,0,0,20,Standard/Pierce,8.5,5,Halberd
Vulgar Militia Saw,Vulgar Militia Saw,None,None,25,15,13,0,0,0,Standard/Pierce,8,5,Halberd
Heavy Vulgar Militia Saw,Vulgar Militia Saw,Heavy,Heavy,25,15,13,0,0,0,Standard/Pierce,8,5,Halberd
Keen Vulgar Militia Saw,Vulgar Militia Saw,Keen,Keen,25,15,13,0,0,0,Standard/Pierce,8,5,Halberd
Quality Vulgar Militia Saw,Vulgar Militia Saw,Quality,Quality,25,15,13,0,0,0,Standard/Pierce,8,5,Halberd
Fire Vulgar Militia Saw,Vulgar Militia Saw,Fire,Fire,25,15,13,0,0,0,Standard/Pierce,8,5,Halberd
Flame Art Vulgar Militia Saw,Vulgar Militia Saw,Flame Art,Flame Art,25,15,13,0,0,0,Standard/Pierce,8,5,Halberd
Lightning Vulgar Militia Saw,Vulgar Militia Saw,Lightning,Lightning,25,15,13,0,0,0,Standard/Pierce,8,5,Halberd
Sacred Vulgar Militia Saw,Vulgar Militia Saw,Sacred,Sacred,25,15,13,0,0,0,Standard/Pierce,8,5,Halberd
Magic Vulgar Militia Saw,Vulgar Militia Saw,Magic,Magic,25,15,13,0,0,0,Standard/Pierce,8,5,Halberd
Cold Vulgar Militia Saw,Vulgar Militia Saw,Cold,Cold,25,15,13,0,0,0,Standard/Pierce,8,5,Halberd
Poison Vulgar Militia Saw,Vulgar Militia Saw,Poison,Poison,25,15,13,0,0,0,Standard/Pierce,8,5,Halberd
Blood Vulgar Militia Saw,Vulgar Militia Saw,Blood,Blood,25,15,13,0,0,0,Standard/Pierce,8,5,Halberd
Occult Vulgar Militia Saw,Vulgar Militia Saw,Occult,Occult,25,15,13,0,0,0,Standard/Pierce,8,5,Halberd
Golden Halberd,Golden Halberd,None,-,10,30,14,0,12,0,Standard/Pierce,13.5,5,Halberd
Glaive,Glaive,None,None,25,18,15,0,0,0,Standard/Pierce,10,5,Halberd
Heavy Glaive,Glaive,Heavy,Heavy,25,18,15,0,0,0,Standard/Pierce,10,5,Halberd
Keen Glaive,Glaive,Keen,Keen,25,18,15,0,0,0,Standard/Pierce,10,5,Halberd
Quality Glaive,Glaive,Quality,Quality,25,18,15,0,0,0,Standard/Pierce,10,5,Halberd
Fire Glaive,Glaive,Fire,Fire,25,18,15,0,0,0,Standard/Pierce,10,5,Halberd
Flame Art Glaive,Glaive,Flame Art,Flame Art,25,18,15,0,0,0,Standard/Pierce,10,5,Halberd
Lightning Glaive,Glaive,Lightning,Lightning,25,18,15,0,0,0,Standard/Pierce,10,5,Halberd
Sacred Glaive,Glaive,Sacred,Sacred,25,18,15,0,0,0,Standard/Pierce,10,5,Halberd
Magic Glaive,Glaive,Magic,Magic,25,18,15,0,0,0,Standard/Pierce,10,5,Halberd
Cold Glaive,Glaive,Cold,Cold,25,18,15,0,0,0,Standard/Pierce,10,5,Halberd
Poison Glaive,Glaive,Poison,Poison,25,18,15,0,0,0,Standard/Pierce,10,5,Halberd
Blood Glaive,Glaive,Blood,Blood,25,18,15,0,0,0,Standard/Pierce,10,5,Halberd
Occult Glaive,Glaive,Occult,Occult,25,18,15,0,0,0,Standard/Pierce,10,5,Halberd
Loretta's War Sickle,Loretta's War Sickle,None,-,10,20,15,20,0,0,Standard/Pierce,10,5,Halberd
Guardian's Swordspear,Guardian's Swordspear,None,None,25,17,16,0,0,0,Standard/Pierce,9,5,Halberd
Guardian's Heavy Swordspear,Guardian's Swordspear,Heavy,Heavy,25,17,16,0,0,0,Standard/Pierce,9,5,Halberd
Guardian's Keen Swordspear,Guardian's Swordspear,Keen,Keen,25,17,16,0,0,0,Standard/Pierce,9,5,Halberd
Guardian's Quality Swordspear,Guardian's Swordspear,Quality,Quality,25,17,16,0,0,0,Standard/Pierce,9,5,Halberd
Guardian's Fire Swordspear,Guardian's Swordspear,Fire,Fire,25,17,16,0,0,0,Standard/Pierce,9,5,Halberd
Guardian's Flame Art Swordspear,Guardian's Swordspear,Flame Art,Flame Art,25,17,16,0,0,0,Standard/Pierce,9,5,Halberd
Guardian's Lightning Swordspear,Guardian's Swordspear,Lightning,Lightning,25,17,16,0,0,0,Standard/Pierce,9,5,Halberd
Guardian's Sacred Swordspear,Guardian's Swordspear,Sacred,Sacred,25,17,16,0,0,0,Standard/Pierce,9,5,Halberd
Guardian's Magic Swordspear,Guardian's Swordspear,Magic,Magic,25,17,16,0,0,0,Standard/Pierce,9,5,Halberd
Guardian's Cold Swordspear,Guardian's Swordspear,Cold,Cold,25,17,16,0,0,0,Standard/Pierce,9,5,Halberd
Guardian's Poison Swordspear,Guardian's Swordspear,Poison,Poison,25,17,16,0,0,0,Standard/Pierce,9,5,Halberd
Guardian's Blood Swordspear,Guardian's Swordspear,Blood,Blood,25,17,16,0,0,0,Standard/Pierce,9,5,Halberd
Guardian's Occult Swordspear,Guardian's Swordspear,Occult,Occult,25,17,16,0,0,0,Standard/Pierce,9,5,Halberd
Vulgar Militia Shotel,Vulgar Militia Shotel,None,None,25,14,16,0,0,0,Standard/Pierce,8,5,Halberd
Heavy Vulgar Militia Shotel,Vulgar Militia Shotel,Heavy,Heavy,25,14,16,0,0,0,Standard/Pierce,8,5,Halberd
Keen Vulgar Militia Shotel,Vulgar Militia Shotel,Keen,Keen,25,14,16,0,0,0,Standard/Pierce,8,5,Halberd
Quality Vulgar Militia Shotel,Vulgar Militia Shotel,Quality,Quality,25,14,16,0,0,0,Standard/Pierce,8,5,Halberd
Fire Vulgar Militia Shotel,Vulgar Militia Shotel,Fire,Fire,25,14,16,0,0,0,Standard/Pierce,8,5,Halberd
Flame Art Vulgar Militia Shotel,Vulgar Militia Shotel,Flame Art,Flame Art,25,14,16,0,0,0,Standard/Pierce,8,5,Halberd
Lightning Vulgar Militia Shotel,Vulgar Militia Shotel,Lightning,Lightning,25,14,16,0,0,0,Standard/Pierce,8,5,Halberd
Sacred Vulgar Militia Shotel,Vulgar Militia Shotel,Sacred,Sacred,25,14,16,0,0,0,Standard/Pierce,8,5,Halberd
Magic Vulgar Militia Shotel,Vulgar Militia Shotel,Magic,Magic,25,14,16,0,0,0,Standard/Pierce,8,5,Halberd
Cold Vulgar Militia Shotel,Vulgar Militia Shotel,Cold,Cold,25,14,16,0,0,0,Standard/Pierce,8,5,Halberd
Poison Vulgar Militia Shotel,Vulgar Militia Shotel,Poison,Poison,25,14,16,0,0,0,Standard/Pierce,8,5,Halberd
Blood Vulgar Militia Shotel,Vulgar Militia Shotel,Blood,Blood,25,14,16,0,0,0,Standard/Pierce,8,5,Halberd
Occult Vulgar Militia Shotel,Vulgar Militia Shotel,Occult,Occult,25,14,16,0,0,0,Standard/Pierce,8,5,Halberd
Dragon Halberd,Dragon Halberd,None,-,10,22,10,0,0,0,Standard/Pierce,10.5,5,Halberd
Gargoyle's Halberd,Gargoyle's Halberd,None,None,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Gargoyle's Heavy Halberd,Gargoyle's Halberd,Heavy,Heavy,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Gargoyle's Keen Halberd,Gargoyle's Halberd,Keen,Keen,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Gargoyle's Quality Halberd,Gargoyle's Halberd,Quality,Quality,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Gargoyle's Fire Halberd,Gargoyle's Halberd,Fire,Fire,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Gargoyle's Flame Art Halberd,Gargoyle's Halberd,Flame Art,Flame Art,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Gargoyle's Lightning Halberd,Gargoyle's Halberd,Lightning,Lightning,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Gargoyle's Sacred Halberd,Gargoyle's Halberd,Sacred,Sacred,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Gargoyle's Magic Halberd,Gargoyle's Halberd,Magic,Magic,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Gargoyle's Cold Halberd,Gargoyle's Halberd,Cold,Cold,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Gargoyle's Poison Halberd,Gargoyle's Halberd,Poison,Poison,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Gargoyle's Blood Halberd,Gargoyle's Halberd,Blood,Blood,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Gargoyle's Occult Halberd,Gargoyle's Halberd,Occult,Occult,25,26,10,0,0,0,Standard/Pierce,12,5,Halberd
Gargoyle's Black Halberd,Gargoyle's Black Halberd,None,-,10,26,10,0,22,0,Standard/Pierce,12,5,Halberd
Scythe,Scythe,None,None,25,14,14,0,0,0,Slash,7.5,5,Reaper
Heavy Scythe,Scythe,Heavy,Heavy,25,14,14,0,0,0,Slash,7.5,5,Reaper
Keen Scythe,Scythe,Keen,Keen,25,14,14,0,0,0,Slash,7.5,5,Reaper
Quality Scythe,Scythe,Quality,Quality,25,14,14,0,0,0,Slash,7.5,5,Reaper
Fire Scythe,Scythe,Fire,Fire,25,14,14,0,0,0,Slash,7.5,5,Reaper
Flame Art Scythe,Scythe,Flame Art,Flame Art,25,14,14,0,0,0,Slash,7.5,5,Reaper
Lightning Scythe,Scythe,Lightning,Lightning,25,14,14,0,0,0,Slash,7.5,5,Reaper
Sacred Scythe,Scythe,Sacred,Sacred,25,14,14,0,0,0,Slash,7.5,5,Reaper
Magic Scythe,Scythe,Magic,Magic,25,14,14,0,0,0,Slash,7.5,5,Reaper
Cold Scythe,Scythe,Cold,Cold,25,14,14,0,0,0,Slash,7.5,5,Reaper
Poison Scythe,Scythe,Poison,Poison,25,14,14,0,0,0,Slash,7.5,5,Reaper
Blood Scythe,Scythe,Blood,Blood,25,14,14,0,0,0,Slash,7.5,5,Reaper
Occult Scythe,Scythe,Occult,Occult,25,14,14,0,0,0,Slash,7.5,5,Reaper
Grave Scythe,Grave Scythe,None,None,25,17,13,0,0,0,Slash,9.5,5,Reaper
Heavy Grave Scythe,Grave Scythe,Heavy,Heavy,25,17,13,0,0,0,Slash,9.5,5,Reaper
Keen Grave Scythe,Grave Scythe,Keen,Keen,25,17,13,0,0,0,Slash,9.5,5,Reaper
Quality Grave Scythe,Grave Scythe,Quality,Quality,25,17,13,0,0,0,Slash,9.5,5,Reaper
Fire Grave Scythe,Grave Scythe,Fire,Fire,25,17,13,0,0,0,Slash,9.5,5,Reaper
Flame Art Grave Scythe,Grave Scythe,Flame Art,Flame Art,25,17,13,0,0,0,Slash,9.5,5,Reaper
Lightning Grave Scythe,Grave Scythe,Lightning,Lightning,25,17,13,0,0,0,Slash,9.5,5,Reaper
Sacred Grave Scythe,Grave Scythe,Sacred,Sacred,25,17,13,0,0,0,Slash,9.5,5,Reaper
Magic Grave Scythe,Grave Scythe,Magic,Magic,25,17,13,0,0,0,Slash,9.5,5,Reaper
Cold Grave Scythe,Grave Scythe,Cold,Cold,25,17,13,0,0,0,Slash,9.5,5,Reaper
Poison Grave Scythe,Grave Scythe,Poison,Poison,25,17,13,0,0,0,Slash,9.5,5,Reaper
Blood Grave Scythe,Grave Scythe,Blood,Blood,25,17,13,0,0,0,Slash,9.5,5,Reaper
Occult Grave Scythe,Grave Scythe,Occult,Occult,25,17,13,0,0,0,Slash,9.5,5,Reaper
Halo Scythe,Halo Scythe,None,-,10,13,16,0,15,0,Slash,8.5,5,Reaper
Winged Scythe,Winged Scythe,None,-,10,16,16,0,24,0,Slash,7.5,5,Reaper
Whip,Whip,None,None,25,8,14,0,0,0,Strike,2,4,Whip
Heavy Whip,Whip,Heavy,Heavy,25,8,14,0,0,0,Strike,2,4,Whip
Keen Whip,Whip,Keen,Keen,25,8,14,0,0,0,Strike,2,4,Whip
Quality Whip,Whip,Quality,Quality,25,8,14,0,0,0,Strike,2,4,Whip
Fire Whip,Whip,Fire,Fire,25,8,14,0,0,0,Strike,2,4,Whip
Flame Art Whip,Whip,Flame Art,Flame Art,25,8,14,0,0,0,Strike,2,4,Whip
Lightning Whip,Whip,Lightning,Lightning,25,8,14,0,0,0,Strike,2,4,Whip
Sacred Whip,Whip,Sacred,Sacred,25,8,14,0,0,0,Strike,2,4,Whip
Magic Whip,Whip,Magic,Magic,25,8,14,0,0,0,Strike,2,4,Whip
Cold Whip,Whip,Cold,Cold,25,8,14,0,0,0,Strike,2,4,Whip
Poison Whip,Whip,Poison,Poison,25,8,14,0,0,0,Strike,2,4,Whip
Blood Whip,Whip,Blood,Blood,25,8,14,0,0,0,Strike,2,4,Whip
Occult Whip,Whip,Occult,Occult,25,8,14,0,0,0,Strike,2,4,Whip
Thorned Whip,Thorned Whip,None,None,25,8,16,0,0,0,Strike,2.5,4,Whip
Heavy Thorned Whip,Thorned Whip,Heavy,Heavy,25,8,16,0,0,0,Strike,2.5,4,Whip
Keen Thorned Whip,Thorned Whip,Keen,Keen,25,8,16,0,0,0,Strike,2.5,4,Whip
Quality Thorned Whip,Thorned Whip,Quality,Quality,25,8,16,0,0,0,Strike,2.5,4,Whip
Fire Thorned Whip,Thorned Whip,Fire,Fire,25,8,16,0,0,0,Strike,2.5,4,Whip
Flame Art Thorned Whip,Thorned Whip,Flame Art,Flame Art,25,8,16,0,0,0,Strike,2.5,4,Whip
Lightning Thorned Whip,Thorned Whip,Lightning,Lightning,25,8,16,0,0,0,Strike,2.5,4,Whip
Sacred Thorned Whip,Thorned Whip,Sacred,Sacred,25,8,16,0,0,0,Strike,2.5,4,Whip
Magic Thorned Whip,Thorned Whip,Magic,Magic,25,8,16,0,0,0,Strike,2.5,4,Whip
Cold Thorned Whip,Thorned Whip,Cold,Cold,25,8,16,0,0,0,Strike,2.5,4,Whip
Poison Thorned Whip,Thorned Whip,Poison,Poison,25,8,16,0,0,0,Strike,2.5,4,Whip
Blood Thorned Whip,Thorned Whip,Blood,Blood,25,8,16,0,0,0,Strike,2.5,4,Whip
Occult Thorned Whip,Thorned Whip,Occult,Occult,25,8,16,0,0,0,Strike,2.5,4,Whip
Magma Whip Candlestick,Magma Whip Candlestick,None,-,10,8,16,0,18,0,Strike,2.5,4,Whip
Hoslow's Petal Whip,Hoslow's Petal Whip,None,None,25,10,20,0,0,0,Strike,3.5,4,Whip
Hoslow's Heavy Petal Whip,Hoslow's Petal Whip,Heavy,Heavy,25,10,20,0,0,0,Strike,3.5,4,Whip
Hoslow's Keen Petal Whip,Hoslow's Petal Whip,Keen,Keen,25,10,20,0,0,0,Strike,3.5,4,Whip
Hoslow's Quality Petal Whip,Hoslow's Petal Whip,Quality,Quality,25,10,20,0,0,0,Strike,3.5,4,Whip
Hoslow's Fire Petal Whip,Hoslow's Petal Whip,Fire,Fire,25,10,20,0,0,0,Strike,3.5,4,Whip
Hoslow's Flame Art Petal Whip,Hoslow's Petal Whip,Flame Art,Flame Art,25,10,20,0,0,0,Strike,3.5,4,Whip
Hoslow's Lightning Petal Whip,Hoslow's Petal Whip,Lightning,Lightning,25,10,20,0,0,0,Strike,3.5,4,Whip
Hoslow's Sacred Petal Whip,Hoslow's Petal Whip,Sacred,Sacred,25,10,20,0,0,0,Strike,3.5,4,Whip
Hoslow's Magic Petal Whip,Hoslow's Petal Whip,Magic,Magic,25,10,20,0,0,0,Strike,3.5,4,Whip
Hoslow's Cold Petal Whip,Hoslow's Petal Whip,Cold,Cold,25,10,20,0,0,0,Strike,3.5,4,Whip
Hoslow's Poison Petal Whip,Hoslow's Petal Whip,Poison,Poison,25,10,20,0,0,0,Strike,3.5,4,Whip
Hoslow's Blood Petal Whip,Hoslow's Petal Whip,Blood,Blood,25,10,20,0,0,0,Strike,3.5,4,Whip
Hoslow's Occult Petal Whip,Hoslow's Petal Whip,Occult,Occult,25,10,20,0,0,0,Strike,3.5,4,Whip
Giant's Red Braid,Giant's Red Braid,None,-,10,18,12,0,21,0,Strike,2.5,4,Whip
Urumi,Urumi,None,None,25,10,19,0,0,0,Slash,3,4,Whip
Heavy Urumi,Urumi,Heavy,Heavy,25,10,19,0,0,0,Slash,3,4,Whip
Keen Urumi,Urumi,Keen,Keen,25,10,19,0,0,0,Slash,3,4,Whip
Quality Urumi,Urumi,Quality,Quality,25,10,19,0,0,0,Slash,3,4,Whip
Fire Urumi,Urumi,Fire,Fire,25,10,19,0,0,0,Slash,3,4,Whip
Flame Art Urumi,Urumi,Flame Art,Flame Art,25,10,19,0,0,0,Slash,3,4,Whip
Lightning Urumi,Urumi,Lightning,Lightning,25,10,19,0,0,0,Slash,3,4,Whip
Sacred Urumi,Urumi,Sacred,Sacred,25,10,19,0,0,0,Slash,3,4,Whip
Magic Urumi,Urumi,Magic,Magic,25,10,19,0,0,0,Slash,3,4,Whip
Cold Urumi,Urumi,Cold,Cold,25,10,19,0,0,0,Slash,3,4,Whip
Poison Urumi,Urumi,Poison,Poison,25,10,19,0,0,0,Slash,3,4,Whip
Blood Urumi,Urumi,Blood,Blood,25,10,19,0,0,0,Slash,3,4,Whip
Occult Urumi,Urumi,Occult,Occult,25,10,19,0,0,0,Slash,3,4,Whip
Caestus,Caestus,None,None,25,8,8,0,0,0,Strike,1.5,5,Fist
Heavy Caestus,Caestus,Heavy,Heavy,25,8,8,0,0,0,Strike,1.5,5,Fist
Keen Caestus,Caestus,Keen,Keen,25,8,8,0,0,0,Strike,1.5,5,Fist
Quality Caestus,Caestus,Quality,Quality,25,8,8,0,0,0,Strike,1.5,5,Fist
Fire Caestus,Caestus,Fire,Fire,25,8,8,0,0,0,Strike,1.5,5,Fist
Flame Art Caestus,Caestus,Flame Art,Flame Art,25,8,8,0,0,0,Strike,1.5,5,Fist
Lightning Caestus,Caestus,Lightning,Lightning,25,8,8,0,0,0,Strike,1.5,5,Fist
Sacred Caestus,Caestus,Sacred,Sacred,25,8,8,0,0,0,Strike,1.5,5,Fist
Magic Caestus,Caestus,Magic,Magic,25,8,8,0,0,0,Strike,1.5,5,Fist
Cold Caestus,Caestus,Cold,Cold,25,8,8,0,0,0,Strike,1.5,5,Fist
Poison Caestus,Caestus,Poison,Poison,25,8,8,0,0,0,Strike,1.5,5,Fist
Blood Caestus,Caestus,Blood,Blood,25,8,8,0,0,0,Strike,1.5,5,Fist
Occult Caestus,Caestus,Occult,Occult,25,8,8,0,0,0,Strike,1.5,5,Fist
Spiked Caestus,Spiked Caestus,None,None,25,8,10,0,0,0,Strike,2,5,Fist
Heavy Spiked Caestus,Spiked Caestus,Heavy,Heavy,25,8,10,0,0,0,Strike,2,5,Fist
Keen Spiked Caestus,Spiked Caestus,Keen,Keen,25,8,10,0,0,0,Strike,2,5,Fist
Quality Spiked Caestus,Spiked Caestus,Quality,Quality,25,8,10,0,0,0,Strike,2,5,Fist
Fire Spiked Caestus,Spiked Caestus,Fire,Fire,25,8,10,0,0,0,Strike,2,5,Fist
Flame Art Spiked Caestus,Spiked Caestus,Flame Art,Flame Art,25,8,10,0,0,0,Strike,2,5,Fist
Lightning Spiked Caestus,Spiked Caestus,Lightning,Lightning,25,8,10,0,0,0,Strike,2,5,Fist
Sacred Spiked Caestus,Spiked Caestus,Sacred,Sacred,25,8,10,0,0,0,Strike,2,5,Fist
Magic Spiked Caestus,Spiked Caestus,Magic,Magic,25,8,10,0,0,0,Strike,2,5,Fist
Cold Spiked Caestus,Spiked Caestus,Cold,Cold,25,8,10,0,0,0,Strike,2,5,Fist
Poison Spiked Caestus,Spiked Caestus,Poison,Poison,25,8,10,0,0,0,Strike,2,5,Fist
Blood Spiked Caestus,Spiked Caestus,Blood,Blood,25,8,10,0,0,0,Strike,2,5,Fist
Occult Spiked Caestus,Spiked Caestus,Occult,Occult,25,8,10,0,0,0,Strike,2,5,Fist
Grafted Dragon,Grafted Dragon,None,-,10,20,14,0,16,0,Strike,2.5,5,Fist
Iron Ball,Iron Ball,None,None,25,11,8,0,0,0,Strike,2.5,5,Fist
Heavy Iron Ball,Iron Ball,Heavy,Heavy,25,11,8,0,0,0,Strike,2.5,5,Fist
Keen Iron Ball,Iron Ball,Keen,Keen,25,11,8,0,0,0,Strike,2.5,5,Fist
Quality Iron Ball,Iron Ball,Quality,Quality,25,11,8,0,0,0,Strike,2.5,5,Fist
Fire Iron Ball,Iron Ball,Fire,Fire,25,11,8,0,0,0,Strike,2.5,5,Fist
Flame Art Iron Ball,Iron Ball,Flame Art,Flame Art,25,11,8,0,0,0,Strike,2.5,5,Fist
Lightning Iron Ball,Iron Ball,Lightning,Lightning,25,11,8,0,0,0,Strike,2.5,5,Fist
Sacred Iron Ball,Iron Ball,Sacred,Sacred,25,11,8,0,0,0,Strike,2.5,5,Fist
Magic Iron Ball,Iron Ball,Magic,Magic,25,11,8,0,0,0,Strike,2.5,5,Fist
Cold Iron Ball,Iron Ball,Cold,Cold,25,11,8,0,0,0,Strike,2.5,5,Fist
Poison Iron Ball,Iron Ball,Poison,Poison,25,11,8,0,0,0,Strike,2.5,5,Fist
Blood Iron Ball,Iron Ball,Blood,Blood,25,11,8,0,0,0,Strike,2.5,5,Fist
Occult Iron Ball,Iron Ball,Occult,Occult,25,11,8,0,0,0,Strike,2.5,5,Fist
Star Fist,Star Fist,None,None,25,12,8,0,0,0,Strike,3,5,Fist
Heavy Star Fist,Star Fist,Heavy,Heavy,25,12,8,0,0,0,Strike,3,5,Fist
Keen Star Fist,Star Fist,Keen,Keen,25,12,8,0,0,0,Strike,3,5,Fist
Quality Star Fist,Star Fist,Quality,Quality,25,12,8,0,0,0,Strike,3,5,Fist
Fire Star Fist,Star Fist,Fire,Fire,25,12,8,0,0,0,Strike,3,5,Fist
Flame Art Star Fist,Star Fist,Flame Art,Flame Art,25,12,8,0,0,0,Strike,3,5,Fist
Lightning Star Fist,Star Fist,Lightning,Lightning,25,12,8,0,0,0,Strike,3,5,Fist
Sacred Star Fist,Star Fist,Sacred,Sacred,25,12,8,0,0,0,Strike,3,5,Fist
Magic Star Fist,Star Fist,Magic,Magic,25,12,8,0,0,0,Strike,3,5,Fist
Cold Star Fist,Star Fist,Cold,Cold,25,12,8,0,0,0,Strike,3,5,Fist
Poison Star Fist,Star Fist,Poison,Poison,25,12,8,0,0,0,Strike,3,5,Fist
Blood Star Fist,Star Fist,Blood,Blood,25,12,8,0,0,0,Strike,3,5,Fist
Occult Star Fist,Star Fist,Occult,Occult,25,12,8,0,0,0,Strike,3,5,Fist
Katar,Katar,None,None,25,8,10,0,0,0,Slash/Pierce,2.5,5,Fist
Heavy Katar,Katar,Heavy,Heavy,25,8,10,0,0,0,Slash/Pierce,2.5,5,Fist
Keen Katar,Katar,Keen,Keen,25,8,10,0,0,0,Slash/Pierce,2.5,5,Fist
Quality Katar,Katar,Quality,Quality,25,8,10,0,0,0,Slash/Pierce,2.5,5,Fist
Fire Katar,Katar,Fire,Fire,25,8,10,0,0,0,Slash/Pierce,2.5,5,Fist
Flame Art Katar,Katar,Flame Art,Flame Art,25,8,10,0,0,0,Slash/Pierce,2.5,5,Fist
Lightning Katar,Katar,Lightning,Lightning,25,8,10,0,0,0,Slash/Pierce,2.5,5,Fist
Sacred Katar,Katar,Sacred,Sacred,25,8,10,0,0,0,Slash/Pierce,2.5,5,Fist
Magic Katar,Katar,Magic,Magic,25,8,10,0,0,0,Slash/Pierce,2.5,5,Fist
Cold Katar,Katar,Cold,Cold,25,8,10,0,0,0,Slash/Pierce,2.5,5,Fist
Poison Katar,Katar,Poison,Poison,25,8,10,0,0,0,Slash/Pierce,2.5,5,Fist
Blood Katar,Katar,Blood,Blood,25,8,10,0,0,0,Slash/Pierce,2.5,5,Fist
Occult Katar,Katar,Occult,Occult,25,8,10,0,0,0,Slash/Pierce,2.5,5,Fist
Clinging Bone,Clinging Bone,None,-,10,8,22,0,0,16,Slash/Pierce,3,5,Fist
Veteran's Prosthesis,Veteran's Prosthesis,None,-,10,15,12,0,0,0,Slash/Pierce,4,5,Fist
Cipher Pata,Cipher Pata,None,-,10,0,0,0,30,0,Slash/Pierce,0,5,Fist
Hookclaws,Hookclaws,None,None,25,8,14,0,0,0,Slash/Pierce,2,3,Claw
Heavy Hookclaws,Hookclaws,Heavy,Heavy,25,8,14,0,0,0,Slash/Pierce,2,3,Claw
Keen Hookclaws,Hookclaws,Keen,Keen,25,8,14,0,0,0,Slash/Pierce,2,3,Claw
Quality Hookclaws,Hookclaws,Quality,Quality,25,8,14,0,0,0,Slash/Pierce,2,3,Claw
Fire Hookclaws,Hookclaws,Fire,Fire,25,8,14,0,0,0,Slash/Pierce,2,3,Claw
Flame Art Hookclaws,Hookclaws,Flame Art,Flame Art,25,8,14,0,0,0,Slash/Pierce,2,3,Claw
Lightning Hookclaws,Hookclaws,Lightning,Lightning,25,8,14,0,0,0,Slash/Pierce,2,3,Claw
Sacred Hookclaws,Hookclaws,Sacred,Sacred,25,8,14,0,0,0,Slash/Pierce,2,3,Claw
Magic Hookclaws,Hookclaws,Magic,Magic,25,8,14,0,0,0,Slash/Pierce,2,3,Claw
Cold Hookclaws,Hookclaws,Cold,Cold,25,8,14,0,0,0,Slash/Pierce,2,3,Claw
Poison Hookclaws,Hookclaws,Poison,Poison,25,8,14,0,0,0,Slash/Pierce,2,3,Claw
Blood Hookclaws,Hookclaws,Blood,Blood,25,8,14,0,0,0,Slash/Pierce,2,3,Claw
Occult Hookclaws,Hookclaws,Occult,Occult,25,8,14,0,0,0,Slash/Pierce,2,3,Claw
Venomous Fang,Venomous Fang,None,None,25,9,9,0,0,0,Slash/Pierce,2.5,3,Claw
Heavy Venomous Fang,Venomous Fang,Heavy,Heavy,25,9,9,0,0,0,Slash/Pierce,2.5,3,Claw
Keen Venomous Fang,Venomous Fang,Keen,Keen,25,9,9,0,0,0,Slash/Pierce,2.5,3,Claw
Quality Venomous Fang,Venomous Fang,Quality,Quality,25,9,9,0,0,0,Slash/Pierce,2.5,3,Claw
Fire Venomous Fang,Venomous Fang,Fire,Fire,25,9,9,0,0,0,Slash/Pierce,2.5,3,Claw
Flame Art Venomous Fang,Venomous Fang,Flame Art,Flame Art,25,9,9,0,0,0,Slash/Pierce,2.5,3,Claw
Lightning Venomous Fang,Venomous Fang,Lightning,Lightning,25,9,9,0,0,0,Slash/Pierce,2.5,3,Claw
Sacred Venomous Fang,Venomous Fang,Sacred,Sacred,25,9,9,0,0,0,Slash/Pierce,2.5,3,Claw
Magic Venomous Fang,Venomous Fang,Magic,Magic,25,9,9,0,0,0,Slash/Pierce,2.5,3,Claw
Cold Venomous Fang,Venomous Fang,Cold,Cold,25,9,9,0,0,0,Slash/Pierce,2.5,3,Claw
Poison Venomous Fang,Venomous Fang,Poison,Poison,25,9,9,0,0,0,Slash/Pierce,2.5,3,Claw
Blood Venomous Fang,Venomous Fang,Blood,Blood,25,9,9,0,0,0,Slash/Pierce,2.5,3,Claw
Occult Venomous Fang,Venomous Fang,Occult,Occult,25,9,9,0,0,0,Slash/Pierce,2.5,3,Claw
Bloodhound Claws,Bloodhound Claws,None,None,25,10,15,0,0,0,Slash/Pierce,3,3,Claw
Heavy Bloodhound Claws,Bloodhound Claws,Heavy,Heavy,25,10,15,0,0,0,Slash/Pierce,3,3,Claw
Keen Bloodhound Claws,Bloodhound Claws,Keen,Keen,25,10,15,0,0,0,Slash/Pierce,3,3,Claw
Quality Bloodhound Claws,Bloodhound Claws,Quality,Quality,25,10,15,0,0,0,Slash/Pierce,3,3,Claw
Fire Bloodhound Claws,Bloodhound Claws,Fire,Fire,25,10,15,0,0,0,Slash/Pierce,3,3,Claw
Flame Art Bloodhound Claws,Bloodhound Claws,Flame Art,Flame Art,25,10,15,0,0,0,Slash/Pierce,3,3,Claw
Lightning Bloodhound Claws,Bloodhound Claws,Lightning,Lightning,25,10,15,0,0,0,Slash/Pierce,3,3,Claw
Sacred Bloodhound Claws,Bloodhound Claws,Sacred,Sacred,25,10,15,0,0,0,Slash/Pierce,3,3,Claw
Magic Bloodhound Claws,Bloodhound Claws,Magic,Magic,25,10,15,0,0,0,Slash/Pierce,3,3,Claw
Cold Bloodhound Claws,Bloodhound Claws,Cold,Cold,25,10,15,0,0,0,Slash/Pierce,3,3,Claw
Poison Bloodhound Claws,Bloodhound Claws,Poison,Poison,25,10,15,0,0,0,Slash/Pierce,3,3,Claw
Blood Bloodhound Claws,Bloodhound Claws,Blood,Blood,25,10,15,0,0,0,Slash/Pierce,3,3,Claw
Occult Bloodhound Claws,Bloodhound Claws,Occult,Occult,25,10,15,0,0,0,Slash/Pierce,3,3,Claw
Raptor Talons,Raptor Talons,None,None,25,6,14,0,0,0,Slash/Pierce,1.5,3,Claw
Heavy Raptor Talons,Raptor Talons,Heavy,Heavy,25,6,14,0,0,0,Slash/Pierce,1.5,3,Claw
Keen Raptor Talons,Raptor Talons,Keen,Keen,25,6,14,0,0,0,Slash/Pierce,1.5,3,Claw
Quality Raptor Talons,Raptor Talons,Quality,Quality,25,6,14,0,0,0,Slash/Pierce,1.5,3,Claw
Fire Raptor Talons,Raptor Talons,Fire,Fire,25,6,14,0,0,0,Slash/Pierce,1.5,3,Claw
Flame Art Raptor Talons,Raptor Talons,Flame Art,Flame Art,25,6,14,0,0,0,Slash/Pierce,1.5,3,Claw
Lightning Raptor Talons,Raptor Talons,Lightning,Lightning,25,6,14,0,0,0,Slash/Pierce,1.5,3,Claw
Sacred Raptor Talons,Raptor Talons,Sacred,Sacred,25,6,14,0,0,0,Slash/Pierce,1.5,3,Claw
Magic Raptor Talons,Raptor Talons,Magic,Magic,25,6,14,0,0,0,Slash/Pierce,1.5,3,Claw
Cold Raptor Talons,Raptor Talons,Cold,Cold,25,6,14,0,0,0,Slash/Pierce,1.5,3,Claw
Poison Raptor Talons,Raptor Talons,Poison,Poison,25,6,14,0,0,0,Slash/Pierce,1.5,3,Claw
Blood Raptor Talons,Raptor Talons,Blood,Blood,25,6,14,0,0,0,Slash/Pierce,1.5,3,Claw
Occult Raptor Talons,Raptor Talons,Occult,Occult,25,6,14,0,0,0,Slash/Pierce,1.5,3,Claw
Prelate's Inferno Crozier,Prelate's Inferno Crozier,None,None,25,45,8,0,0,0,Strike,23.5,7,Colossal Weapon
Prelate's Heavy Inferno Crozier,Prelate's Inferno Crozier,Heavy,Heavy,25,45,8,0,0,0,Strike,23.5,7,Colossal Weapon
Prelate's Keen Inferno Crozier,Prelate's Inferno Crozier,Keen,Keen,25,45,8,0,0,0,Strike,23.5,7,Colossal Weapon
Prelate's Quality Inferno Crozier,Prelate's Inferno Crozier,Quality,Quality,25,45,8,0,0,0,Strike,23.5,7,Colossal Weapon
Prelate's Fire Inferno Crozier,Prelate's Inferno Crozier,Fire,Fire,25,45,8,0,0,0,Strike,23.5,7,Colossal Weapon
Prelate's Flame Art Inferno Crozier,Prelate's Inferno Crozier,Flame Art,Flame Art,25,45,8,0,0,0,Strike,23.5,7,Colossal Weapon
Prelate's Lightning Inferno Crozier,Prelate's Inferno Crozier,Lightning,Lightning,25,45,8,0,0,0,Strike,23.5,7,Colossal Weapon
Prelate's Sacred Inferno Crozier,Prelate's Inferno Crozier,Sacred,Sacred,25,45,8,0,0,0,Strike,23.5,7,Colossal Weapon
Prelate's Magic Inferno Crozier,Prelate's Inferno Crozier,Magic,Magic,25,45,8,0,0,0,Strike,23.5,7,Colossal Weapon
Prelate's Cold Inferno Crozier,Prelate's Inferno Crozier,Cold,Cold,25,45,8,0,0,0,Strike,23.5,7,Colossal Weapon
Prelate's Poison Inferno Crozier,Prelate's Inferno Crozier,Poison,Poison,25,45,8,0,0,0,Strike,23.5,7,Colossal Weapon
Prelate's Blood Inferno Crozier,Prelate's Inferno Crozier,Blood,Blood,25,45,8,0,0,0,Strike,23.5,7,Colossal Weapon
Prelate's Occult Inferno Crozier,Prelate's Inferno Crozier,Occult,Occult,25,45,8,0,0,0,Strike,23.5,7,Colossal Weapon
Watchdog's Staff,Watchdog's Staff,None,-,10,34,10,0,0,0,Strike,19,7,Colossal Weapon
Great Club,Great Club,None,None,25,35,0,0,0,0,Strike,17,7,Colossal Weapon
Heavy Great Club,Great Club,Heavy,Heavy,25,35,0,0,0,0,Strike,17,7,Colossal Weapon
Keen Great Club,Great Club,Keen,Keen,25,35,0,0,0,0,Strike,17,7,Colossal Weapon
Quality Great Club,Great Club,Quality,Quality,25,35,0,0,0,0,Strike,17,7,Colossal Weapon
Fire Great Club,Great Club,Fire,Fire,25,35,0,0,0,0,Strike,17,7,Colossal Weapon
Flame Art Great Club,Great Club,Flame Art,Flame Art,25,35,0,0,0,0,Strike,17,7,Colossal Weapon
Lightning Great Club,Great Club,Lightning,Lightning,25,35,0,0,0,0,Strike,17,7,Colossal Weapon
Sacred Great Club,Great Club,Sacred,Sacred,25,35,0,0,0,0,Strike,17,7,Colossal Weapon
Magic Great Club,Great Club,Magic,Magic,25,35,0,0,0,0,Strike,17,7,Colossal Weapon
Cold Great Club,Great Club,Cold,Cold,25,35,0,0,0,0,Strike,17,7,Colossal Weapon
Poison Great Club,Great Club,Poison,Poison,25,35,0,0,0,0,Strike,17,7,Colossal Weapon
Blood Great Club,Great Club,Blood,Blood,25,35,0,0,0,0,Strike,17,7,Colossal Weapon
Occult Great Club,Great Club,Occult,Occult,25,35,0,0,0,0,Strike,17,7,Colossal Weapon
Envoy's Greathorn,Envoy's Greathorn,None,-,10,28,12,0,24,0,Strike,19.5,7,Colossal Weapon
Duelist Greataxe,Duelist Greataxe,None,None,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Heavy Duelist Greataxe,Duelist Greataxe,Heavy,Heavy,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Keen Duelist Greataxe,Duelist Greataxe,Keen,Keen,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Quality Duelist Greataxe,Duelist Greataxe,Quality,Quality,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Fire Duelist Greataxe,Duelist Greataxe,Fire,Fire,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Flame Art Duelist Greataxe,Duelist Greataxe,Flame Art,Flame Art,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Lightning Duelist Greataxe,Duelist Greataxe,Lightning,Lightning,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Sacred Duelist Greataxe,Duelist Greataxe,Sacred,Sacred,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Magic Duelist Greataxe,Duelist Greataxe,Magic,Magic,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Cold Duelist Greataxe,Duelist Greataxe,Cold,Cold,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Poison Duelist Greataxe,Duelist Greataxe,Poison,Poison,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Blood Duelist Greataxe,Duelist Greataxe,Blood,Blood,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Occult Duelist Greataxe,Duelist Greataxe,Occult,Occult,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Axe of Godfrey,Axe of Godfrey,None,-,10,42,14,0,0,0,Standard,18,6,Colossal Weapon
Dragon Greatclaw,Dragon Greatclaw,None,-,10,30,14,0,0,0,Standard,16,6,Colossal Weapon
Staff of the Avatar,Staff of the Avatar,None,-,10,34,8,0,24,0,Strike,20,7,Colossal Weapon
Fallingstar Beast Jaw,Fallingstar Beast Jaw,None,-,10,34,12,20,0,0,Strike/Pierce,21.5,7,Colossal Weapon
Ghiza's Wheel,Ghiza's Wheel,None,-,10,28,18,0,0,0,Standard,19,6,Colossal Weapon
Giant-Crusher,Giant-Crusher,None,None,25,60,0,0,0,0,Strike,26.5,7,Colossal Weapon
Heavy Giant-Crusher,Giant-Crusher,Heavy,Heavy,25,60,0,0,0,0,Strike,26.5,7,Colossal Weapon
Keen Giant-Crusher,Giant-Crusher,Keen,Keen,25,60,0,0,0,0,Strike,26.5,7,Colossal Weapon
Quality Giant-Crusher,Giant-Crusher,Quality,Quality,25,60,0,0,0,0,Strike,26.5,7,Colossal Weapon
Fire Giant-Crusher,Giant-Crusher,Fire,Fire,25,60,0,0,0,0,Strike,26.5,7,Colossal Weapon
Flame Art Giant-Crusher,Giant-Crusher,Flame Art,Flame Art,25,60,0,0,0,0,Strike,26.5,7,Colossal Weapon
Lightning Giant-Crusher,Giant-Crusher,Lightning,Lightning,25,60,0,0,0,0,Strike,26.5,7,Colossal Weapon
Sacred Giant-Crusher,Giant-Crusher,Sacred,Sacred,25,60,0,0,0,0,Strike,26.5,7,Colossal Weapon
Magic Giant-Crusher,Giant-Crusher,Magic,Magic,25,60,0,0,0,0,Strike,26.5,7,Colossal Weapon
Cold Giant-Crusher,Giant-Crusher,Cold,Cold,25,60,0,0,0,0,Strike,26.5,7,Colossal Weapon
Poison Giant-Crusher,Giant-Crusher,Poison,Poison,25,60,0,0,0,0,Strike,26.5,7,Colossal Weapon
Blood Giant-Crusher,Giant-Crusher,Blood,Blood,25,60,0,0,0,0,Strike,26.5,7,Colossal Weapon
Occult Giant-Crusher,Giant-Crusher,Occult,Occult,25,60,0,0,0,0,Strike,26.5,7,Colossal Weapon
Golem's Halberd,Golem's Halberd,None,None,25,36,14,0,0,0,Standard/Pierce,21.5,6,Colossal Weapon
Golem's Heavy Halberd,Golem's Halberd,Heavy,Heavy,25,36,14,0,0,0,Standard/Pierce,21.5,6,Colossal Weapon
Golem's Keen Halberd,Golem's Halberd,Keen,Keen,25,36,14,0,0,0,Standard/Pierce,21.5,6,Colossal Weapon
Golem's Quality Halberd,Golem's Halberd,Quality,Quality,25,36,14,0,0,0,Standard/Pierce,21.5,6,Colossal Weapon
Golem's Fire Halberd,Golem's Halberd,Fire,Fire,25,36,14,0,0,0,Standard/Pierce,21.5,6,Colossal Weapon
Golem's Flame Art Halberd,Golem's Halberd,Flame Art,Flame Art,25,36,14,0,0,0,Standard/Pierce,21.5,6,Colossal Weapon
Golem's Lightning Halberd,Golem's Halberd,Lightning,Lightning,25,36,14,0,0,0,Standard/Pierce,21.5,6,Colossal Weapon
Golem's Sacred Halberd,Golem's Halberd,Sacred,Sacred,25,36,14,0,0,0,Standard/Pierce,21.5,6,Colossal Weapon
Golem's Magic Halberd,Golem's Halberd,Magic,Magic,25,36,14,0,0,0,Standard/Pierce,21.5,6,Colossal Weapon
Golem's Cold Halberd,Golem's Halberd,Cold,Cold,25,36,14,0,0,0,Standard/Pierce,21.5,6,Colossal Weapon
Golem's Poison Halberd,Golem's Halberd,Poison,Poison,25,36,14,0,0,0,Standard/Pierce,21.5,6,Colossal Weapon
Golem's Blood Halberd,Golem's Halberd,Blood,Blood,25,36,14,0,0,0,Standard/Pierce,21.5,6,Colossal Weapon
Golem's Occult Halberd,Golem's Halberd,Occult,Occult,25,36,14,0,0,0,Standard/Pierce,21.5,6,Colossal Weapon
Troll's Hammer,Troll's Hammer,None,-,25,28,8,0,10,0,Strike,16,7,Colossal Weapon
Rotten Staff,Rotten Staff,None,-,10,34,8,0,0,0,Strike,18,7,Colossal Weapon
Rotten Greataxe,Rotten Greataxe,None,None,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Heavy Rotten Greataxe,Rotten Greataxe,Heavy,Heavy,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Keen Rotten Greataxe,Rotten Greataxe,Keen,Keen,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Quality Rotten Greataxe,Rotten Greataxe,Quality,Quality,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Fire Rotten Greataxe,Rotten Greataxe,Fire,Fire,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Flame Art Rotten Greataxe,Rotten Greataxe,Flame Art,Flame Art,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Lightning Rotten Greataxe,Rotten Greataxe,Lightning,Lightning,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Sacred Rotten Greataxe,Rotten Greataxe,Sacred,Sacred,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Magic Rotten Greataxe,Rotten Greataxe,Magic,Magic,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Cold Rotten Greataxe,Rotten Greataxe,Cold,Cold,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Poison Rotten Greataxe,Rotten Greataxe,Poison,Poison,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Blood Rotten Greataxe,Rotten Greataxe,Blood,Blood,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Occult Rotten Greataxe,Rotten Greataxe,Occult,Occult,25,30,10,0,0,0,Standard,20,6,Colossal Weapon
Torch,Torch,None,-,25,5,5,0,0,0,Strike,1.5,3,Torch
Steel-Wire Torch,Steel-Wire Torch,None,-,25,10,8,0,0,0,Strike,3,3,Torch
St. Trina's Torch,St. Trina's Torch,None,-,10,10,10,0,14,0,Strike,3,3,Torch
Ghostflame Torch,Ghostflame Torch,None,-,25,10,10,14,0,0,Strike,2.5,3,Torch
Beast-Repellent Torch,Beast-Repellent Torch,None,-,25,12,8,0,0,0,Strike,2.5,3,Torch
Sentry's Torch,Sentry's Torch,None,-,10,15,8,0,15,0,Strike,5,3,Torch
Buckler,Buckler,None,None,25,8,13,0,0,0,Strike,1.5,5,Small Shield
Heavy Buckler,Buckler,Heavy,Heavy,25,8,13,0,0,0,Strike,1.5,5,Small Shield
Keen Buckler,Buckler,Keen,Keen,25,8,13,0,0,0,Strike,1.5,5,Small Shield
Quality Buckler,Buckler,Quality,Quality,25,8,13,0,0,0,Strike,1.5,5,Small Shield
Fire Buckler,Buckler,Fire,Fire,25,8,13,0,0,0,Strike,1.5,5,Small Shield
Flame Art Buckler,Buckler,Flame Art,Flame Art,25,8,13,0,0,0,Strike,1.5,5,Small Shield
Lightning Buckler,Buckler,Lightning,Lightning,25,8,13,0,0,0,Strike,1.5,5,Small Shield
Sacred Buckler,Buckler,Sacred,Sacred,25,8,13,0,0,0,Strike,1.5,5,Small Shield
Magic Buckler,Buckler,Magic,Magic,25,8,13,0,0,0,Strike,1.5,5,Small Shield
Cold Buckler,Buckler,Cold,Cold,25,8,13,0,0,0,Strike,1.5,5,Small Shield
Poison Buckler,Buckler,Poison,Poison,25,8,13,0,0,0,Strike,1.5,5,Small Shield
Bloody Buckler,Buckler,Blood,Blood,25,8,13,0,0,0,Strike,1.5,5,Small Shield
Occult Buckler,Buckler,Occult,Occult,25,8,13,0,0,0,Strike,1.5,5,Small Shield
Perfumer's Shield,Perfumer's Shield,None,None,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Perfumer's Heavy Shield,Perfumer's Shield,Heavy,Heavy,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Perfumer's Keen Shield,Perfumer's Shield,Keen,Keen,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Perfumer's Quality Shield,Perfumer's Shield,Quality,Quality,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Perfumer's Fire Shield,Perfumer's Shield,Fire,Fire,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Perfumer's Flame Art Shield,Perfumer's Shield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Perfumer's Lightning Shield,Perfumer's Shield,Lightning,Lightning,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Perfumer's Sacred Shield,Perfumer's Shield,Sacred,Sacred,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Perfumer's Magic Shield,Perfumer's Shield,Magic,Magic,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Perfumer's Cold Shield,Perfumer's Shield,Cold,Cold,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Perfumer's Poison Shield,Perfumer's Shield,Poison,Poison,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Perfumer's Blood Shield,Perfumer's Shield,Blood,Blood,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Perfumer's Occult Shield,Perfumer's Shield,Occult,Occult,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Man-Serpent's Shield,Man-Serpent's Shield,None,None,25,8,0,0,0,0,Strike,2,5,Small Shield
Man-serpent's Heavy Shield,Man-serpent's Shield,Heavy,Heavy,25,8,0,0,0,0,Strike,2,5,Small Shield
Man-serpent's Keen Shield,Man-serpent's Shield,Keen,Keen,25,8,0,0,0,0,Strike,2,5,Small Shield
Man-serpent's Quality Shield,Man-serpent's Shield,Quality,Quality,25,8,0,0,0,0,Strike,2,5,Small Shield
Man-serpent's Fire Shield,Man-serpent's Shield,Fire,Fire,25,8,0,0,0,0,Strike,2,5,Small Shield
Man-serpent's Flame Art Shield,Man-serpent's Shield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,2,5,Small Shield
Man-serpent's Lightning Shield,Man-serpent's Shield,Lightning,Lightning,25,8,0,0,0,0,Strike,2,5,Small Shield
Man-serpent's Sacred Shield,Man-serpent's Shield,Sacred,Sacred,25,8,0,0,0,0,Strike,2,5,Small Shield
Man-serpent's Magic Shield,Man-serpent's Shield,Magic,Magic,25,8,0,0,0,0,Strike,2,5,Small Shield
Man-serpent's Cold Shield,Man-serpent's Shield,Cold,Cold,25,8,0,0,0,0,Strike,2,5,Small Shield
Man-serpent's Poison Shield,Man-serpent's Shield,Poison,Poison,25,8,0,0,0,0,Strike,2,5,Small Shield
Man-serpent's Blood Shield,Man-serpent's Shield,Blood,Blood,25,8,0,0,0,0,Strike,2,5,Small Shield
Man-serpent's Occult Shield,Man-serpent's Shield,Occult,Occult,25,8,0,0,0,0,Strike,2,5,Small Shield
Rickety Shield,Rickety Shield,None,None,25,8,0,0,0,0,Strike,1,5,Small Shield
Heavy Rickety Shield,Rickety Shield,Heavy,Heavy,25,8,0,0,0,0,Strike,1,5,Small Shield
Keen Rickety Shield,Rickety Shield,Keen,Keen,25,8,0,0,0,0,Strike,1,5,Small Shield
Quality Rickety Shield,Rickety Shield,Quality,Quality,25,8,0,0,0,0,Strike,1,5,Small Shield
Fire Rickety Shield,Rickety Shield,Fire,Fire,25,8,0,0,0,0,Strike,1,5,Small Shield
Flame Art Rickety Shield,Rickety Shield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,1,5,Small Shield
Lightning Rickety Shield,Rickety Shield,Lightning,Lightning,25,8,0,0,0,0,Strike,1,5,Small Shield
Sacred Rickety Shield,Rickety Shield,Sacred,Sacred,25,8,0,0,0,0,Strike,1,5,Small Shield
Magic Rickety Shield,Rickety Shield,Magic,Magic,25,8,0,0,0,0,Strike,1,5,Small Shield
Cold Rickety Shield,Rickety Shield,Cold,Cold,25,8,0,0,0,0,Strike,1,5,Small Shield
Poison Rickety Shield,Rickety Shield,Poison,Poison,25,8,0,0,0,0,Strike,1,5,Small Shield
Bloody Rickety Shield,Rickety Shield,Blood,Blood,25,8,0,0,0,0,Strike,1,5,Small Shield
Occult Rickety Shield,Rickety Shield,Occult,Occult,25,8,0,0,0,0,Strike,1,5,Small Shield
Pillory Shield,Pillory Shield,None,None,25,10,0,0,0,0,Strike,3.5,5,Small Shield
Heavy Pillory Shield,Pillory Shield,Heavy,Heavy,25,10,0,0,0,0,Strike,3.5,5,Small Shield
Keen Pillory Shield,Pillory Shield,Keen,Keen,25,10,0,0,0,0,Strike,3.5,5,Small Shield
Quality Pillory Shield,Pillory Shield,Quality,Quality,25,10,0,0,0,0,Strike,3.5,5,Small Shield
Fire Pillory Shield,Pillory Shield,Fire,Fire,25,10,0,0,0,0,Strike,3.5,5,Small Shield
Flame Art Pillory Shield,Pillory Shield,Flame Art,Flame Art,25,10,0,0,0,0,Strike,3.5,5,Small Shield
Lightning Pillory Shield,Pillory Shield,Lightning,Lightning,25,10,0,0,0,0,Strike,3.5,5,Small Shield
Sacred Pillory Shield,Pillory Shield,Sacred,Sacred,25,10,0,0,0,0,Strike,3.5,5,Small Shield
Magic Pillory Shield,Pillory Shield,Magic,Magic,25,10,0,0,0,0,Strike,3.5,5,Small Shield
Cold Pillory Shield,Pillory Shield,Cold,Cold,25,10,0,0,0,0,Strike,3.5,5,Small Shield
Poison Pillory Shield,Pillory Shield,Poison,Poison,25,10,0,0,0,0,Strike,3.5,5,Small Shield
Blood Pillory Shield,Pillory Shield,Blood,Blood,25,10,0,0,0,0,Strike,3.5,5,Small Shield
Occult Pillory Shield,Pillory Shield,Occult,Occult,25,10,0,0,0,0,Strike,3.5,5,Small Shield
Beastman's Jar-Shield,Beastman's Jar-Shield,None,None,25,10,0,0,0,0,Strike,5,5.5,Medium Shield
Beastman's Heavy Jar-Shield,Beastman's Jar-Shield,Heavy,Heavy,25,10,0,0,0,0,Strike,5,5.5,Medium Shield
Beastman's Keen Jar-Shield,Beastman's Jar-Shield,Keen,Keen,25,10,0,0,0,0,Strike,5,5.5,Medium Shield
Beastman's Quality Jar-Shield,Beastman's Jar-Shield,Quality,Quality,25,10,0,0,0,0,Strike,5,5.5,Medium Shield
Beastman's Fire Jar-Shield,Beastman's Jar-Shield,Fire,Fire,25,10,0,0,0,0,Strike,5,5.5,Medium Shield
Beastman's Flame Art Jar-Shield,Beastman's Jar-Shield,Flame Art,Flame Art,25,10,0,0,0,0,Strike,5,5.5,Medium Shield
Beastman's Lightning Jar-Shield,Beastman's Jar-Shield,Lightning,Lightning,25,10,0,0,0,0,Strike,5,5.5,Medium Shield
Beastman's Sacred Jar-Shield,Beastman's Jar-Shield,Sacred,Sacred,25,10,0,0,0,0,Strike,5,5.5,Medium Shield
Beastman's Magic Jar-Shield,Beastman's Jar-Shield,Magic,Magic,25,10,0,0,0,0,Strike,5,5.5,Medium Shield
Beastman's Cold Jar-Shield,Beastman's Jar-Shield,Cold,Cold,25,10,0,0,0,0,Strike,5,5.5,Medium Shield
Beastman's Poison Jar-Shield,Beastman's Jar-Shield,Poison,Poison,25,10,0,0,0,0,Strike,5,5.5,Medium Shield
Beastman's Blood Jar-Shield,Beastman's Jar-Shield,Blood,Blood,25,10,0,0,0,0,Strike,5,5.5,Medium Shield
Beastman's Occult Jar-Shield,Beastman's Jar-Shield,Occult,Occult,25,10,0,0,0,0,Strike,5,5.5,Medium Shield
Red Thorn Roundshield,Red Thorn Roundshield,None,None,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Heavy Red Thorn Roundshield,Red Thorn Roundshield,Heavy,Heavy,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Keen Red Thorn Roundshield,Red Thorn Roundshield,Keen,Keen,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Quality Red Thorn Roundshield,Red Thorn Roundshield,Quality,Quality,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Fire Red Thorn Roundshield,Red Thorn Roundshield,Fire,Fire,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Flame Art Red Thorn Roundshield,Red Thorn Roundshield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Lightning Red Thorn Roundshield,Red Thorn Roundshield,Lightning,Lightning,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Sacred Red Thorn Roundshield,Red Thorn Roundshield,Sacred,Sacred,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Magic Red Thorn Roundshield,Red Thorn Roundshield,Magic,Magic,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Cold Red Thorn Roundshield,Red Thorn Roundshield,Cold,Cold,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Poison Red Thorn Roundshield,Red Thorn Roundshield,Poison,Poison,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Bloody Red Thorn Roundshield,Red Thorn Roundshield,Blood,Blood,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Occult Red Thorn Roundshield,Red Thorn Roundshield,Occult,Occult,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Scripture Wooden Shield,Scripture Wooden Shield,None,None,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Heavy Scripture Wooden Shield,Scripture Wooden Shield,Heavy,Heavy,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Keen Scripture Wooden Shield,Scripture Wooden Shield,Keen,Keen,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Quality Scripture Wooden Shield,Scripture Wooden Shield,Quality,Quality,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Fire Scripture Wooden Shield,Scripture Wooden Shield,Fire,Fire,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Flame Art Scripture Wooden Shield,Scripture Wooden Shield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Lightning Scripture Wooden Shield,Scripture Wooden Shield,Lightning,Lightning,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Sacred Scripture Wooden Shield,Scripture Wooden Shield,Sacred,Sacred,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Magic Scripture Wooden Shield,Scripture Wooden Shield,Magic,Magic,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Cold Scripture Wooden Shield,Scripture Wooden Shield,Cold,Cold,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Poison Scripture Wooden Shield,Scripture Wooden Shield,Poison,Poison,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Blood Scripture Wooden Shield,Scripture Wooden Shield,Blood,Blood,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Occult Scripture Wooden Shield,Scripture Wooden Shield,Occult,Occult,25,8,0,0,0,0,Strike,1.5,5,Small Shield
Riveted Wooden Shield,Riveted Wooden Shield,None,None,25,8,0,0,0,0,Strike,2,5,Small Shield
Heavy Riveted Wooden Shield,Riveted Wooden Shield,Heavy,Heavy,25,8,0,0,0,0,Strike,2,5,Small Shield
Keen Riveted Wooden Shield,Riveted Wooden Shield,Keen,Keen,25,8,0,0,0,0,Strike,2,5,Small Shield
Quality Riveted Wooden Shield,Riveted Wooden Shield,Quality,Quality,25,8,0,0,0,0,Strike,2,5,Small Shield
Fire Riveted Wooden Shield,Riveted Wooden Shield,Fire,Fire,25,8,0,0,0,0,Strike,2,5,Small Shield
Flame Art Riveted Wooden Shield,Riveted Wooden Shield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,2,5,Small Shield
Lightning Riveted Wooden Shield,Riveted Wooden Shield,Lightning,Lightning,25,8,0,0,0,0,Strike,2,5,Small Shield
Sacred Riveted Wooden Shield,Riveted Wooden Shield,Sacred,Sacred,25,8,0,0,0,0,Strike,2,5,Small Shield
Magic Riveted Wooden Shield,Riveted Wooden Shield,Magic,Magic,25,8,0,0,0,0,Strike,2,5,Small Shield
Cold Riveted Wooden Shield,Riveted Wooden Shield,Cold,Cold,25,8,0,0,0,0,Strike,2,5,Small Shield
Poison Riveted Wooden Shield,Riveted Wooden Shield,Poison,Poison,25,8,0,0,0,0,Strike,2,5,Small Shield
Blood Riveted Wooden Shield,Riveted Wooden Shield,Blood,Blood,25,8,0,0,0,0,Strike,2,5,Small Shield
Occult Riveted Wooden Shield,Riveted Wooden Shield,Occult,Occult,25,8,0,0,0,0,Strike,2,5,Small Shield
Blue-White Wooden Shield,Blue-White Wooden Shield,None,None,25,8,0,0,0,0,Strike,2,5,Small Shield
Heavy Blue-White Wooden Shield,Blue-White Wooden Shield,Heavy,Heavy,25,8,0,0,0,0,Strike,2,5,Small Shield
Keen Blue-White Wooden Shield,Blue-White Wooden Shield,Keen,Keen,25,8,0,0,0,0,Strike,2,5,Small Shield
Quality Blue-White Wooden Shield,Blue-White Wooden Shield,Quality,Quality,25,8,0,0,0,0,Strike,2,5,Small Shield
Fire Blue-White Wooden Shield,Blue-White Wooden Shield,Fire,Fire,25,8,0,0,0,0,Strike,2,5,Small Shield
Flame Art Blue-White Wooden Shield,Blue-White Wooden Shield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,2,5,Small Shield
Lightning Blue-White Wooden Shield,Blue-White Wooden Shield,Lightning,Lightning,25,8,0,0,0,0,Strike,2,5,Small Shield
Sacred Blue-White Wooden Shield,Blue-White Wooden Shield,Sacred,Sacred,25,8,0,0,0,0,Strike,2,5,Small Shield
Magic Blue-White Wooden Shield,Blue-White Wooden Shield,Magic,Magic,25,8,0,0,0,0,Strike,2,5,Small Shield
Cold Blue-White Wooden Shield,Blue-White Wooden Shield,Cold,Cold,25,8,0,0,0,0,Strike,2,5,Small Shield
Poison Blue-White Wooden Shield,Blue-White Wooden Shield,Poison,Poison,25,8,0,0,0,0,Strike,2,5,Small Shield
Blood Blue-White Wooden Shield,Blue-White Wooden Shield,Blood,Blood,25,8,0,0,0,0,Strike,2,5,Small Shield
Occult Blue-White Wooden Shield,Blue-White Wooden Shield,Occult,Occult,25,8,0,0,0,0,Strike,2,5,Small Shield
Rift Shield,Rift Shield,None,None,25,8,0,0,0,0,Strike,2,5,Small Shield
Heavy Rift Shield,Rift Shield,Heavy,Heavy,25,8,0,0,0,0,Strike,2,5,Small Shield
Keen Rift Shield,Rift Shield,Keen,Keen,25,8,0,0,0,0,Strike,2,5,Small Shield
Quality Rift Shield,Rift Shield,Quality,Quality,25,8,0,0,0,0,Strike,2,5,Small Shield
Fire Rift Shield,Rift Shield,Fire,Fire,25,8,0,0,0,0,Strike,2,5,Small Shield
Flame Art Rift Shield,Rift Shield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,2,5,Small Shield
Lightning Rift Shield,Rift Shield,Lightning,Lightning,25,8,0,0,0,0,Strike,2,5,Small Shield
Sacred Rift Shield,Rift Shield,Sacred,Sacred,25,8,0,0,0,0,Strike,2,5,Small Shield
Magic Rift Shield,Rift Shield,Magic,Magic,25,8,0,0,0,0,Strike,2,5,Small Shield
Cold Rift Shield,Rift Shield,Cold,Cold,25,8,0,0,0,0,Strike,2,5,Small Shield
Poison Rift Shield,Rift Shield,Poison,Poison,25,8,0,0,0,0,Strike,2,5,Small Shield
Blood Rift Shield,Rift Shield,Blood,Blood,25,8,0,0,0,0,Strike,2,5,Small Shield
Occult Rift Shield,Rift Shield,Occult,Occult,25,8,0,0,0,0,Strike,2,5,Small Shield
Iron Roundshield,Iron Roundshield,None,None,25,8,0,0,0,0,Strike,3,5,Small Shield
Heavy Iron Roundshield,Iron Roundshield,Heavy,Heavy,25,8,0,0,0,0,Strike,3,5,Small Shield
Keen Iron Roundshield,Iron Roundshield,Keen,Keen,25,8,0,0,0,0,Strike,3,5,Small Shield
Quality Iron Roundshield,Iron Roundshield,Quality,Quality,25,8,0,0,0,0,Strike,3,5,Small Shield
Fire Iron Roundshield,Iron Roundshield,Fire,Fire,25,8,0,0,0,0,Strike,3,5,Small Shield
Flame Art Iron Roundshield,Iron Roundshield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,3,5,Small Shield
Lightning Iron Roundshield,Iron Roundshield,Lightning,Lightning,25,8,0,0,0,0,Strike,3,5,Small Shield
Sacred Iron Roundshield,Iron Roundshield,Sacred,Sacred,25,8,0,0,0,0,Strike,3,5,Small Shield
Magic Iron Roundshield,Iron Roundshield,Magic,Magic,25,8,0,0,0,0,Strike,3,5,Small Shield
Cold Iron Roundshield,Iron Roundshield,Cold,Cold,25,8,0,0,0,0,Strike,3,5,Small Shield
Poison Iron Roundshield,Iron Roundshield,Poison,Poison,25,8,0,0,0,0,Strike,3,5,Small Shield
Bloody Iron Roundshield,Iron Roundshield,Blood,Blood,25,8,0,0,0,0,Strike,3,5,Small Shield
Occult Iron Roundshield,Iron Roundshield,Occult,Occult,25,8,0,0,0,0,Strike,3,5,Small Shield
Gilded Iron Shield,Gilded Iron Shield,None,None,25,8,0,0,0,0,Strike,3,5,Small Shield
Gilded Heavy Iron Shield,Gilded Iron Shield,Heavy,Heavy,25,8,0,0,0,0,Strike,3,5,Small Shield
Gilded Keen Iron Shield,Gilded Iron Shield,Keen,Keen,25,8,0,0,0,0,Strike,3,5,Small Shield
Gilded Quality Iron Shield,Gilded Iron Shield,Quality,Quality,25,8,0,0,0,0,Strike,3,5,Small Shield
Gilded Fire Iron Shield,Gilded Iron Shield,Fire,Fire,25,8,0,0,0,0,Strike,3,5,Small Shield
Gilded Flame Art Iron Shield,Gilded Iron Shield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,3,5,Small Shield
Gilded Lightning Iron Shield,Gilded Iron Shield,Lightning,Lightning,25,8,0,0,0,0,Strike,3,5,Small Shield
Gilded Sacred Iron Shield,Gilded Iron Shield,Sacred,Sacred,25,8,0,0,0,0,Strike,3,5,Small Shield
Gilded Magic Iron Shield,Gilded Iron Shield,Magic,Magic,25,8,0,0,0,0,Strike,3,5,Small Shield
Gilded Cold Iron Shield,Gilded Iron Shield,Cold,Cold,25,8,0,0,0,0,Strike,3,5,Small Shield
Gilded Poison Iron Shield,Gilded Iron Shield,Poison,Poison,25,8,0,0,0,0,Strike,3,5,Small Shield
Gilded Blood Iron Shield,Gilded Iron Shield,Blood,Blood,25,8,0,0,0,0,Strike,3,5,Small Shield
Gilded Occult Iron Shield,Gilded Iron Shield,Occult,Occult,25,8,0,0,0,0,Strike,3,5,Small Shield
Ice Crest Shield,Ice Crest Shield,None,None,25,9,0,0,0,0,Strike,3,5,Small Shield
Heavy Ice Crest Shield,Ice Crest Shield,Heavy,Heavy,25,9,0,0,0,0,Strike,3,5,Small Shield
Keen Ice Crest Shield,Ice Crest Shield,Keen,Keen,25,9,0,0,0,0,Strike,3,5,Small Shield
Quality Ice Crest Shield,Ice Crest Shield,Quality,Quality,25,9,0,0,0,0,Strike,3,5,Small Shield
Fire Ice Crest Shield,Ice Crest Shield,Fire,Fire,25,9,0,0,0,0,Strike,3,5,Small Shield
Flame Art Ice Crest Shield,Ice Crest Shield,Flame Art,Flame Art,25,9,0,0,0,0,Strike,3,5,Small Shield
Lightning Ice Crest Shield,Ice Crest Shield,Lightning,Lightning,25,9,0,0,0,0,Strike,3,5,Small Shield
Sacred Ice Crest Shield,Ice Crest Shield,Sacred,Sacred,25,9,0,0,0,0,Strike,3,5,Small Shield
Magic Ice Crest Shield,Ice Crest Shield,Magic,Magic,25,9,0,0,0,0,Strike,3,5,Small Shield
Cold Ice Crest Shield,Ice Crest Shield,Cold,Cold,25,9,0,0,0,0,Strike,3,5,Small Shield
Poison Ice Crest Shield,Ice Crest Shield,Poison,Poison,25,9,0,0,0,0,Strike,3,5,Small Shield
Blood Ice Crest Shield,Ice Crest Shield,Blood,Blood,25,9,0,0,0,0,Strike,3,5,Small Shield
Occult Ice Crest Shield,Ice Crest Shield,Occult,Occult,25,9,0,0,0,0,Strike,3,5,Small Shield
Smoldering Shield,Smoldering Shield,None,-,25,10,9,0,12,0,Strike,3,5,Small Shield
Spiralhorn Shield,Spiralhorn Shield,None,None,25,8,10,0,0,0,Strike,2,5,Small Shield
Heavy Spiralhorn Shield,Spiralhorn Shield,Heavy,Heavy,25,8,10,0,0,0,Strike,2,5,Small Shield
Keen Spiralhorn Shield,Spiralhorn Shield,Keen,Keen,25,8,10,0,0,0,Strike,2,5,Small Shield
Quality Spiralhorn Shield,Spiralhorn Shield,Quality,Quality,25,8,10,0,0,0,Strike,2,5,Small Shield
Fire Spiralhorn Shield,Spiralhorn Shield,Fire,Fire,25,8,10,0,0,0,Strike,2,5,Small Shield
Flame Art Spiralhorn Shield,Spiralhorn Shield,Flame Art,Flame Art,25,8,10,0,0,0,Strike,2,5,Small Shield
Lightning Spiralhorn Shield,Spiralhorn Shield,Lightning,Lightning,25,8,10,0,0,0,Strike,2,5,Small Shield
Sacred Spiralhorn Shield,Spiralhorn Shield,Sacred,Sacred,25,8,10,0,0,0,Strike,2,5,Small Shield
Magic Spiralhorn Shield,Spiralhorn Shield,Magic,Magic,25,8,10,0,0,0,Strike,2,5,Small Shield
Cold Spiralhorn Shield,Spiralhorn Shield,Cold,Cold,25,8,10,0,0,0,Strike,2,5,Small Shield
Poison Spiralhorn Shield,Spiralhorn Shield,Poison,Poison,25,8,10,0,0,0,Strike,2,5,Small Shield
Blood Spiralhorn Shield,Spiralhorn Shield,Blood,Blood,25,8,10,0,0,0,Strike,2,5,Small Shield
Occult Spiralhorn Shield,Spiralhorn Shield,Occult,Occult,25,8,10,0,0,0,Strike,2,5,Small Shield
Coil Shield,Coil Shield,None,-,10,10,10,0,0,0,Strike,1.5,5,Small Shield
Kite Shield,Kite Shield,None,None,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Heavy Kite Shield,Kite Shield,Heavy,Heavy,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Keen Kite Shield,Kite Shield,Keen,Keen,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Quality Kite Shield,Kite Shield,Quality,Quality,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Fire Kite Shield,Kite Shield,Fire,Fire,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Flame Art Kite Shield,Kite Shield,Flame Art,Flame Art,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Lightning Kite Shield,Kite Shield,Lightning,Lightning,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Sacred Kite Shield,Kite Shield,Sacred,Sacred,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Magic Kite Shield,Kite Shield,Magic,Magic,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Cold Kite Shield,Kite Shield,Cold,Cold,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Poison Kite Shield,Kite Shield,Poison,Poison,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Blood Kite Shield,Kite Shield,Blood,Blood,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Occult Kite Shield,Kite Shield,Occult,Occult,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Marred Leather Shield,Marred Leather Shield,None,None,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Marred Heavy Leather Shield,Marred Leather Shield,Heavy,Heavy,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Marred Keen Leather Shield,Marred Leather Shield,Keen,Keen,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Marred Quality Leather Shield,Marred Leather Shield,Quality,Quality,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Marred Fire Leather Shield,Marred Leather Shield,Fire,Fire,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Marred Flame Art Leather Shield,Marred Leather Shield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Marred Lightning Leather Shield,Marred Leather Shield,Lightning,Lightning,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Marred Sacred Leather Shield,Marred Leather Shield,Sacred,Sacred,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Marred Magic Leather Shield,Marred Leather Shield,Magic,Magic,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Marred Cold Leather Shield,Marred Leather Shield,Cold,Cold,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Marred Poison Leather Shield,Marred Leather Shield,Poison,Poison,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Marred Blood Leather Shield,Marred Leather Shield,Blood,Blood,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Marred Occult Leather Shield,Marred Leather Shield,Occult,Occult,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Marred Wooden Shield,Marred Wooden Shield,None,None,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Marred Heavy Wooden Shield,Marred Wooden Shield,Heavy,Heavy,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Marred Keen Wooden Shield,Marred Wooden Shield,Keen,Keen,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Marred Quality Wooden Shield,Marred Wooden Shield,Quality,Quality,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Marred Fire Wooden Shield,Marred Wooden Shield,Fire,Fire,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Marred Flame Art Wooden Shield,Marred Wooden Shield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Marred Lightning Wooden Shield,Marred Wooden Shield,Lightning,Lightning,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Marred Sacred Wooden Shield,Marred Wooden Shield,Sacred,Sacred,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Marred Magic Wooden Shield,Marred Wooden Shield,Magic,Magic,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Marred Cold Wooden Shield,Marred Wooden Shield,Cold,Cold,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Marred Poison Wooden Shield,Marred Wooden Shield,Poison,Poison,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Marred Blood Wooden Shield,Marred Wooden Shield,Blood,Blood,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Marred Occult Wooden Shield,Marred Wooden Shield,Occult,Occult,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Banished Knight's Shield,Banished Knight's Shield,None,None,25,14,0,0,0,0,Strike,6,5.5,Medium Shield
Banished Knight's Heavy Shield,Banished Knight's Shield,Heavy,Heavy,25,14,0,0,0,0,Strike,6,5.5,Medium Shield
Banished Knight's Keen Shield,Banished Knight's Shield,Keen,Keen,25,14,0,0,0,0,Strike,6,5.5,Medium Shield
Banished Knight's Quality Shield,Banished Knight's Shield,Quality,Quality,25,14,0,0,0,0,Strike,6,5.5,Medium Shield
Banished Knight's Fire Shield,Banished Knight's Shield,Fire,Fire,25,14,0,0,0,0,Strike,6,5.5,Medium Shield
Banished Knight's Flame Art Shield,Banished Knight's Shield,Flame Art,Flame Art,25,14,0,0,0,0,Strike,6,5.5,Medium Shield
Banished Knight's Lightning Shield,Banished Knight's Shield,Lightning,Lightning,25,14,0,0,0,0,Strike,6,5.5,Medium Shield
Banished Knight's Sacred Shield,Banished Knight's Shield,Sacred,Sacred,25,14,0,0,0,0,Strike,6,5.5,Medium Shield
Banished Knight's Magic Shield,Banished Knight's Shield,Magic,Magic,25,14,0,0,0,0,Strike,6,5.5,Medium Shield
Banished Knight's Cold Shield,Banished Knight's Shield,Cold,Cold,25,14,0,0,0,0,Strike,6,5.5,Medium Shield
Banished Knight's Poison Shield,Banished Knight's Shield,Poison,Poison,25,14,0,0,0,0,Strike,6,5.5,Medium Shield
Banished Knight's Blood Shield,Banished Knight's Shield,Blood,Blood,25,14,0,0,0,0,Strike,6,5.5,Medium Shield
Banished Knight's Occult Shield,Banished Knight's Shield,Occult,Occult,25,14,0,0,0,0,Strike,6,5.5,Medium Shield
Albinauric Shield,Albinauric Shield,None,None,25,11,0,0,0,0,Strike,4.5,5.5,Medium Shield
Heavy Albinauric Shield,Albinauric Shield,Heavy,Heavy,25,11,0,0,0,0,Strike,4.5,5.5,Medium Shield
Keen Albinauric Shield,Albinauric Shield,Keen,Keen,25,11,0,0,0,0,Strike,4.5,5.5,Medium Shield
Quality Albinauric Shield,Albinauric Shield,Quality,Quality,25,11,0,0,0,0,Strike,4.5,5.5,Medium Shield
Fire Albinauric Shield,Albinauric Shield,Fire,Fire,25,11,0,0,0,0,Strike,4.5,5.5,Medium Shield
Flame Art Albinauric Shield,Albinauric Shield,Flame Art,Flame Art,25,11,0,0,0,0,Strike,4.5,5.5,Medium Shield
Lightning Albinauric Shield,Albinauric Shield,Lightning,Lightning,25,11,0,0,0,0,Strike,4.5,5.5,Medium Shield
Sacred Albinauric Shield,Albinauric Shield,Sacred,Sacred,25,11,0,0,0,0,Strike,4.5,5.5,Medium Shield
Magic Albinauric Shield,Albinauric Shield,Magic,Magic,25,11,0,0,0,0,Strike,4.5,5.5,Medium Shield
Cold Albinauric Shield,Albinauric Shield,Cold,Cold,25,11,0,0,0,0,Strike,4.5,5.5,Medium Shield
Poison Albinauric Shield,Albinauric Shield,Poison,Poison,25,11,0,0,0,0,Strike,4.5,5.5,Medium Shield
Blood Albinauric Shield,Albinauric Shield,Blood,Blood,25,11,0,0,0,0,Strike,4.5,5.5,Medium Shield
Occult Albinauric Shield,Albinauric Shield,Occult,Occult,25,11,0,0,0,0,Strike,4.5,5.5,Medium Shield
Sun Realm Shield,Sun Realm Shield,None,None,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Heavy Sun Realm Shield,Sun Realm Shield,Heavy,Heavy,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Keen Sun Realm Shield,Sun Realm Shield,Keen,Keen,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Quality Sun Realm Shield,Sun Realm Shield,Quality,Quality,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Fire Sun Realm Shield,Sun Realm Shield,Fire,Fire,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Flame Art Sun Realm Shield,Sun Realm Shield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Lightning Sun Realm Shield,Sun Realm Shield,Lightning,Lightning,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Sacred Sun Realm Shield,Sun Realm Shield,Sacred,Sacred,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Magic Sun Realm Shield,Sun Realm Shield,Magic,Magic,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Cold Sun Realm Shield,Sun Realm Shield,Cold,Cold,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Poison Sun Realm Shield,Sun Realm Shield,Poison,Poison,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Blood Sun Realm Shield,Sun Realm Shield,Blood,Blood,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Occult Sun Realm Shield,Sun Realm Shield,Occult,Occult,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Silver Mirrorshield,Silver Mirrorshield,None,-,10,12,10,10,0,0,Strike,3.5,5.5,Medium Shield
Round Shield,Round Shield,None,None,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Heavy Round Shield,Round Shield,Heavy,Heavy,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Keen Round Shield,Round Shield,Keen,Keen,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Quality Round Shield,Round Shield,Quality,Quality,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Fire Round Shield,Round Shield,Fire,Fire,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Flame Art Round Shield,Round Shield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Lightning Round Shield,Round Shield,Lightning,Lightning,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Sacred Round Shield,Round Shield,Sacred,Sacred,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Magic Round Shield,Round Shield,Magic,Magic,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Cold Round Shield,Round Shield,Cold,Cold,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Poison Round Shield,Round Shield,Poison,Poison,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Blood Round Shield,Round Shield,Blood,Blood,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Occult Round Shield,Round Shield,Occult,Occult,25,8,0,0,0,0,Strike,4,5.5,Medium Shield
Scorpion Kite Shield,Scorpion Kite Shield,None,None,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Heavy Scorpion Kite Shield,Scorpion Kite Shield,Heavy,Heavy,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Keen Scorpion Kite Shield,Scorpion Kite Shield,Keen,Keen,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Quality Scorpion Kite Shield,Scorpion Kite Shield,Quality,Quality,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Fire Scorpion Kite Shield,Scorpion Kite Shield,Fire,Fire,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Flame Art Scorpion Kite Shield,Scorpion Kite Shield,Flame Art,Flame Art,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Lightning Scorpion Kite Shield,Scorpion Kite Shield,Lightning,Lightning,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Sacred Scorpion Kite Shield,Scorpion Kite Shield,Sacred,Sacred,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Magic Scorpion Kite Shield,Scorpion Kite Shield,Magic,Magic,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Cold Scorpion Kite Shield,Scorpion Kite Shield,Cold,Cold,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Poison Scorpion Kite Shield,Scorpion Kite Shield,Poison,Poison,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Blood Scorpion Kite Shield,Scorpion Kite Shield,Blood,Blood,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Occult Scorpion Kite Shield,Scorpion Kite Shield,Occult,Occult,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Twinbird Kite Shield,Twinbird Kite Shield,None,None,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Heavy Twinbird Kite Shield,Twinbird Kite Shield,Heavy,Heavy,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Keen Twinbird Kite Shield,Twinbird Kite Shield,Keen,Keen,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Quality Twinbird Kite Shield,Twinbird Kite Shield,Quality,Quality,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Fire Twinbird Kite Shield,Twinbird Kite Shield,Fire,Fire,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Flame Art Twinbird Kite Shield,Twinbird Kite Shield,Flame Art,Flame Art,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Lightning Twinbird Kite Shield,Twinbird Kite Shield,Lightning,Lightning,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Sacred Twinbird Kite Shield,Twinbird Kite Shield,Sacred,Sacred,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Magic Twinbird Kite Shield,Twinbird Kite Shield,Magic,Magic,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Cold Twinbird Kite Shield,Twinbird Kite Shield,Cold,Cold,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Poison Twinbird Kite Shield,Twinbird Kite Shield,Poison,Poison,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Blood Twinbird Kite Shield,Twinbird Kite Shield,Blood,Blood,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Occult Twinbird Kite Shield,Twinbird Kite Shield,Occult,Occult,25,12,0,0,0,0,Strike,4.5,5.5,Medium Shield
Blue-Gold Kite Shield,Blue-Gold Kite Shield,None,None,25,12,0,0,0,0,Strike,5,5.5,Medium Shield
Heavy Blue-Gold Kite Shield,Blue-Gold Kite Shield,Heavy,Heavy,25,12,0,0,0,0,Strike,5,5.5,Medium Shield
Keen Blue-Gold Kite Shield,Blue-Gold Kite Shield,Keen,Keen,25,12,0,0,0,0,Strike,5,5.5,Medium Shield
Quality Blue-Gold Kite Shield,Blue-Gold Kite Shield,Quality,Quality,25,12,0,0,0,0,Strike,5,5.5,Medium Shield
Fire Blue-Gold Kite Shield,Blue-Gold Kite Shield,Fire,Fire,25,12,0,0,0,0,Strike,5,5.5,Medium Shield
Flame Art Blue-Gold Kite Shield,Blue-Gold Kite Shield,Flame Art,Flame Art,25,12,0,0,0,0,Strike,5,5.5,Medium Shield
Lightning Blue-Gold Kite Shield,Blue-Gold Kite Shield,Lightning,Lightning,25,12,0,0,0,0,Strike,5,5.5,Medium Shield
Sacred Blue-Gold Kite Shield,Blue-Gold Kite Shield,Sacred,Sacred,25,12,0,0,0,0,Strike,5,5.5,Medium Shield
Magic Blue-Gold Kite Shield,Blue-Gold Kite Shield,Magic,Magic,25,12,0,0,0,0,Strike,5,5.5,Medium Shield
Cold Blue-Gold Kite Shield,Blue-Gold Kite Shield,Cold,Cold,25,12,0,0,0,0,Strike,5,5.5,Medium Shield
Poison Blue-Gold Kite Shield,Blue-Gold Kite Shield,Poison,Poison,25,12,0,0,0,0,Strike,5,5.5,Medium Shield
Blood Blue-Gold Kite Shield,Blue-Gold Kite Shield,Blood,Blood,25,12,0,0,0,0,Strike,5,5.5,Medium Shield
Occult Blue-Gold Kite Shield,Blue-Gold Kite Shield,Occult,Occult,25,12,0,0,0,0,Strike,5,5.5,Medium Shield
Brass Shield,Brass Shield,None,None,25,16,0,0,0,0,Strike,7,5.5,Medium Shield
Heavy Brass Shield,Brass Shield,Heavy,Heavy,25,16,0,0,0,0,Strike,7,5.5,Medium Shield
Keen Brass Shield,Brass Shield,Keen,Keen,25,16,0,0,0,0,Strike,7,5.5,Medium Shield
Quality Brass Shield,Brass Shield,Quality,Quality,25,16,0,0,0,0,Strike,7,5.5,Medium Shield
Fire Brass Shield,Brass Shield,Fire,Fire,25,16,0,0,0,0,Strike,7,5.5,Medium Shield
Flame Art Brass Shield,Brass Shield,Flame Art,Flame Art,25,16,0,0,0,0,Strike,7,5.5,Medium Shield
Lightning Brass Shield,Brass Shield,Lightning,Lightning,25,16,0,0,0,0,Strike,7,5.5,Medium Shield
Sacred Brass Shield,Brass Shield,Sacred,Sacred,25,16,0,0,0,0,Strike,7,5.5,Medium Shield
Magic Brass Shield,Brass Shield,Magic,Magic,25,16,0,0,0,0,Strike,7,5.5,Medium Shield
Cold Brass Shield,Brass Shield,Cold,Cold,25,16,0,0,0,0,Strike,7,5.5,Medium Shield
Poison Brass Shield,Brass Shield,Poison,Poison,25,16,0,0,0,0,Strike,7,5.5,Medium Shield
Blood Brass Shield,Brass Shield,Blood,Blood,25,16,0,0,0,0,Strike,7,5.5,Medium Shield
Occult Brass Shield,Brass Shield,Occult,Occult,25,16,0,0,0,0,Strike,7,5.5,Medium Shield
Great Turtle Shell,Great Turtle Shell,None,None,25,14,0,0,0,0,Strike,5.5,5.5,Medium Shield
Heavy Great Turtle Shell,Great Turtle Shell,Heavy,Heavy,25,14,0,0,0,0,Strike,5.5,5.5,Medium Shield
Keen Great Turtle Shell,Great Turtle Shell,Keen,Keen,25,14,0,0,0,0,Strike,5.5,5.5,Medium Shield
Quality Great Turtle Shell,Great Turtle Shell,Quality,Quality,25,14,0,0,0,0,Strike,5.5,5.5,Medium Shield
Fire Great Turtle Shell,Great Turtle Shell,Fire,Fire,25,14,0,0,0,0,Strike,5.5,5.5,Medium Shield
Flame Art Great Turtle Shell,Great Turtle Shell,Flame Art,Flame Art,25,14,0,0,0,0,Strike,5.5,5.5,Medium Shield
Lightning Great Turtle Shell,Great Turtle Shell,Lightning,Lightning,25,14,0,0,0,0,Strike,5.5,5.5,Medium Shield
Sacred Great Turtle Shell,Great Turtle Shell,Sacred,Sacred,25,14,0,0,0,0,Strike,5.5,5.5,Medium Shield
Magic Great Turtle Shell,Great Turtle Shell,Magic,Magic,25,14,0,0,0,0,Strike,5.5,5.5,Medium Shield
Cold Great Turtle Shell,Great Turtle Shell,Cold,Cold,25,14,0,0,0,0,Strike,5.5,5.5,Medium Shield
Poison Great Turtle Shell,Great Turtle Shell,Poison,Poison,25,14,0,0,0,0,Strike,5.5,5.5,Medium Shield
Blood Great Turtle Shell,Great Turtle Shell,Blood,Blood,25,14,0,0,0,0,Strike,5.5,5.5,Medium Shield
Occult Great Turtle Shell,Great Turtle Shell,Occult,Occult,25,14,0,0,0,0,Strike,5.5,5.5,Medium Shield
Shield of the Guilty,Shield of the Guilty,None,None,25,8,0,0,0,0,Strike,2,5,Small Shield
Heavy Shield of the Guilty,Shield of the Guilty,Heavy,Heavy,25,8,0,0,0,0,Strike,2,5,Small Shield
Keen Shield of the Guilty,Shield of the Guilty,Keen,Keen,25,8,0,0,0,0,Strike,2,5,Small Shield
Quality Shield of the Guilty,Shield of the Guilty,Quality,Quality,25,8,0,0,0,0,Strike,2,5,Small Shield
Fire Shield of the Guilty,Shield of the Guilty,Fire,Fire,25,8,0,0,0,0,Strike,2,5,Small Shield
Flame Art Shield of the Guilty,Shield of the Guilty,Flame Art,Flame Art,25,8,0,0,0,0,Strike,2,5,Small Shield
Lightning Shield of the Guilty,Shield of the Guilty,Lightning,Lightning,25,8,0,0,0,0,Strike,2,5,Small Shield
Sacred Shield of the Guilty,Shield of the Guilty,Sacred,Sacred,25,8,0,0,0,0,Strike,2,5,Small Shield
Magic Shield of the Guilty,Shield of the Guilty,Magic,Magic,25,8,0,0,0,0,Strike,2,5,Small Shield
Cold Shield of the Guilty,Shield of the Guilty,Cold,Cold,25,8,0,0,0,0,Strike,2,5,Small Shield
Poison Shield of the Guilty,Shield of the Guilty,Poison,Poison,25,8,0,0,0,0,Strike,2,5,Small Shield
Blood Shield of the Guilty,Shield of the Guilty,Blood,Blood,25,8,0,0,0,0,Strike,2,5,Small Shield
Occult Shield of the Guilty,Shield of the Guilty,Occult,Occult,25,8,0,0,0,0,Strike,2,5,Small Shield
Carian Knight's Shield,Carian Knight's Shield,None,None,25,10,10,15,0,0,Strike,4.5,5.5,Medium Shield
Carian Knight's Heavy Shield,Carian Knight's Shield,Heavy,Heavy,25,10,10,15,0,0,Strike,4.5,5.5,Medium Shield
Carian Knight's Keen Shield,Carian Knight's Shield,Keen,Keen,25,10,10,15,0,0,Strike,4.5,5.5,Medium Shield
Carian Knight's Quality Shield,Carian Knight's Shield,Quality,Quality,25,10,10,15,0,0,Strike,4.5,5.5,Medium Shield
Carian Knight's Fire Shield,Carian Knight's Shield,Fire,Fire,25,10,10,15,0,0,Strike,4.5,5.5,Medium Shield
Carian Knight's Flame Art Shield,Carian Knight's Shield,Flame Art,Flame Art,25,10,10,15,0,0,Strike,4.5,5.5,Medium Shield
Carian Knight's Lightning Shield,Carian Knight's Shield,Lightning,Lightning,25,10,10,15,0,0,Strike,4.5,5.5,Medium Shield
Carian Knight's Sacred Shield,Carian Knight's Shield,Sacred,Sacred,25,10,10,15,0,0,Strike,4.5,5.5,Medium Shield
Carian Knight's Magic Shield,Carian Knight's Shield,Magic,Magic,25,10,10,15,0,0,Strike,4.5,5.5,Medium Shield
Carian Knight's Cold Shield,Carian Knight's Shield,Cold,Cold,25,10,10,15,0,0,Strike,4.5,5.5,Medium Shield
Carian Knight's Poison Shield,Carian Knight's Shield,Poison,Poison,25,10,10,15,0,0,Strike,4.5,5.5,Medium Shield
Carian Knight's Bloody Shield,Carian Knight's Shield,Blood,Blood,25,10,10,15,0,0,Strike,4.5,5.5,Medium Shield
Carian Knight's Occult Shield,Carian Knight's Shield,Occult,Occult,25,10,10,15,0,0,Strike,4.5,5.5,Medium Shield
Large Leather Shield,Large Leather Shield,None,None,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Heavy Large Leather Shield,Large Leather Shield,Heavy,Heavy,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Keen Large Leather Shield,Large Leather Shield,Keen,Keen,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Quality Large Leather Shield,Large Leather Shield,Quality,Quality,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Fire Large Leather Shield,Large Leather Shield,Fire,Fire,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Flame Art Large Leather Shield,Large Leather Shield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Lightning Large Leather Shield,Large Leather Shield,Lightning,Lightning,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Sacred Large Leather Shield,Large Leather Shield,Sacred,Sacred,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Magic Large Leather Shield,Large Leather Shield,Magic,Magic,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Cold Large Leather Shield,Large Leather Shield,Cold,Cold,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Poison Large Leather Shield,Large Leather Shield,Poison,Poison,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Bloody Large Leather Shield,Large Leather Shield,Blood,Blood,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Occult Large Leather Shield,Large Leather Shield,Occult,Occult,25,8,0,0,0,0,Strike,3,5.5,Medium Shield
Horse Crest Wooden Shield,Horse Crest Wooden Shield,None,None,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Heavy Horse Crest Wooden Shield,Horse Crest Wooden Shield,Heavy,Heavy,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Keen Horse Crest Wooden Shield,Horse Crest Wooden Shield,Keen,Keen,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Quality Horse Crest Wooden Shield,Horse Crest Wooden Shield,Quality,Quality,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Fire Horse Crest Wooden Shield,Horse Crest Wooden Shield,Fire,Fire,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Flame Art Horse Crest Wooden Shield,Horse Crest Wooden Shield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Lightning Horse Crest Wooden Shield,Horse Crest Wooden Shield,Lightning,Lightning,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Sacred Horse Crest Wooden Shield,Horse Crest Wooden Shield,Sacred,Sacred,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Magic Horse Crest Wooden Shield,Horse Crest Wooden Shield,Magic,Magic,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Cold Horse Crest Wooden Shield,Horse Crest Wooden Shield,Cold,Cold,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Poison Horse Crest Wooden Shield,Horse Crest Wooden Shield,Poison,Poison,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Blood Horse Crest Wooden Shield,Horse Crest Wooden Shield,Blood,Blood,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Occult Horse Crest Wooden Shield,Horse Crest Wooden Shield,Occult,Occult,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Candletree Wooden Shield,Candletree Wooden Shield,None,None,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Heavy Candletree Wooden Shield,Candletree Wooden Shield,Heavy,Heavy,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Keen Candletree Wooden Shield,Candletree Wooden Shield,Keen,Keen,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Quality Candletree Wooden Shield,Candletree Wooden Shield,Quality,Quality,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Fire Candletree Wooden Shield,Candletree Wooden Shield,Fire,Fire,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Flame Art Candletree Wooden Shield,Candletree Wooden Shield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Lightning Candletree Wooden Shield,Candletree Wooden Shield,Lightning,Lightning,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Sacred Candletree Wooden Shield,Candletree Wooden Shield,Sacred,Sacred,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Magic Candletree Wooden Shield,Candletree Wooden Shield,Magic,Magic,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Cold Candletree Wooden Shield,Candletree Wooden Shield,Cold,Cold,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Poison Candletree Wooden Shield,Candletree Wooden Shield,Poison,Poison,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Blood Candletree Wooden Shield,Candletree Wooden Shield,Blood,Blood,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Occult Candletree Wooden Shield,Candletree Wooden Shield,Occult,Occult,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Flame Crest Wooden Shield,Flame Crest Wooden Shield,None,None,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Heavy Flame Crest Wooden Shield,Flame Crest Wooden Shield,Heavy,Heavy,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Keen Flame Crest Wooden Shield,Flame Crest Wooden Shield,Keen,Keen,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Quality Flame Crest Wooden Shield,Flame Crest Wooden Shield,Quality,Quality,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Fire Flame Crest Wooden Shield,Flame Crest Wooden Shield,Fire,Fire,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Flame Art Flame Crest Wooden Shield,Flame Crest Wooden Shield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Lightning Flame Crest Wooden Shield,Flame Crest Wooden Shield,Lightning,Lightning,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Sacred Flame Crest Wooden Shield,Flame Crest Wooden Shield,Sacred,Sacred,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Magic Flame Crest Wooden Shield,Flame Crest Wooden Shield,Magic,Magic,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Cold Flame Crest Wooden Shield,Flame Crest Wooden Shield,Cold,Cold,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Poison Flame Crest Wooden Shield,Flame Crest Wooden Shield,Poison,Poison,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Blood Flame Crest Wooden Shield,Flame Crest Wooden Shield,Blood,Blood,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Occult Flame Crest Wooden Shield,Flame Crest Wooden Shield,Occult,Occult,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Hawk Crest Wooden Shield,Hawk Crest Wooden Shield,None,None,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Heavy Hawk Crest Wooden Shield,Hawk Crest Wooden Shield,Heavy,Heavy,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Keen Hawk Crest Wooden Shield,Hawk Crest Wooden Shield,Keen,Keen,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Quality Hawk Crest Wooden Shield,Hawk Crest Wooden Shield,Quality,Quality,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Fire Hawk Crest Wooden Shield,Hawk Crest Wooden Shield,Fire,Fire,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Flame Art Hawk Crest Wooden Shield,Hawk Crest Wooden Shield,Flame Art,Flame Art,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Lightning Hawk Crest Wooden Shield,Hawk Crest Wooden Shield,Lightning,Lightning,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Sacred Hawk Crest Wooden Shield,Hawk Crest Wooden Shield,Sacred,Sacred,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Magic Hawk Crest Wooden Shield,Hawk Crest Wooden Shield,Magic,Magic,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Cold Hawk Crest Wooden Shield,Hawk Crest Wooden Shield,Cold,Cold,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Poison Hawk Crest Wooden Shield,Hawk Crest Wooden Shield,Poison,Poison,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Blood Hawk Crest Wooden Shield,Hawk Crest Wooden Shield,Blood,Blood,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Occult Hawk Crest Wooden Shield,Hawk Crest Wooden Shield,Occult,Occult,25,8,0,0,0,0,Strike,3.5,5.5,Medium Shield
Beast Crest Heater Shield,Beast Crest Heater Shield,None,None,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Heavy Beast Crest Heater Shield,Beast Crest Heater Shield,Heavy,Heavy,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Keen Beast Crest Heater Shield,Beast Crest Heater Shield,Keen,Keen,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Quality Beast Crest Heater Shield,Beast Crest Heater Shield,Quality,Quality,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Fire Beast Crest Heater Shield,Beast Crest Heater Shield,Fire,Fire,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Flame Art Beast Crest Heater Shield,Beast Crest Heater Shield,Flame Art,Flame Art,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Lightning Beast Crest Heater Shield,Beast Crest Heater Shield,Lightning,Lightning,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Sacred Beast Crest Heater Shield,Beast Crest Heater Shield,Sacred,Sacred,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Magic Beast Crest Heater Shield,Beast Crest Heater Shield,Magic,Magic,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Cold Beast Crest Heater Shield,Beast Crest Heater Shield,Cold,Cold,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Poison Beast Crest Heater Shield,Beast Crest Heater Shield,Poison,Poison,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Blood Beast Crest Heater Shield,Beast Crest Heater Shield,Blood,Blood,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Occult Beast Crest Heater Shield,Beast Crest Heater Shield,Occult,Occult,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Red Crest Heater Shield,Red Crest Heater Shield,None,None,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Heavy Red Crest Heater Shield,Red Crest Heater Shield,Heavy,Heavy,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Keen Red Crest Heater Shield,Red Crest Heater Shield,Keen,Keen,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Quality Red Crest Heater Shield,Red Crest Heater Shield,Quality,Quality,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Fire Red Crest Heater Shield,Red Crest Heater Shield,Fire,Fire,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Flame Art Red Crest Heater Shield,Red Crest Heater Shield,Flame Art,Flame Art,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Lightning Red Crest Heater Shield,Red Crest Heater Shield,Lightning,Lightning,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Sacred Red Crest Heater Shield,Red Crest Heater Shield,Sacred,Sacred,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Magic Red Crest Heater Shield,Red Crest Heater Shield,Magic,Magic,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Cold Red Crest Heater Shield,Red Crest Heater Shield,Cold,Cold,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Poison Red Crest Heater Shield,Red Crest Heater Shield,Poison,Poison,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Blood Red Crest Heater Shield,Red Crest Heater Shield,Blood,Blood,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Occult Red Crest Heater Shield,Red Crest Heater Shield,Occult,Occult,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Blue Crest Heater Shield,Blue Crest Heater Shield,None,None,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Heavy Blue Crest Heater Shield,Blue Crest Heater Shield,Heavy,Heavy,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Keen Blue Crest Heater Shield,Blue Crest Heater Shield,Keen,Keen,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Quality Blue Crest Heater Shield,Blue Crest Heater Shield,Quality,Quality,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Fire Blue Crest Heater Shield,Blue Crest Heater Shield,Fire,Fire,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Flame Art Blue Crest Heater Shield,Blue Crest Heater Shield,Flame Art,Flame Art,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Lightning Blue Crest Heater Shield,Blue Crest Heater Shield,Lightning,Lightning,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Sacred Blue Crest Heater Shield,Blue Crest Heater Shield,Sacred,Sacred,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Magic Blue Crest Heater Shield,Blue Crest Heater Shield,Magic,Magic,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Cold Blue Crest Heater Shield,Blue Crest Heater Shield,Cold,Cold,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Poison Blue Crest Heater Shield,Blue Crest Heater Shield,Poison,Poison,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Blood Blue Crest Heater Shield,Blue Crest Heater Shield,Blood,Blood,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Occult Blue Crest Heater Shield,Blue Crest Heater Shield,Occult,Occult,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Eclipse Crest Heater Shield,Eclipse Crest Heater Shield,None,None,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Heavy Eclipse Crest Heater Shield,Eclipse Crest Heater Shield,Heavy,Heavy,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Keen Eclipse Crest Heater Shield,Eclipse Crest Heater Shield,Keen,Keen,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Quality Eclipse Crest Heater Shield,Eclipse Crest Heater Shield,Quality,Quality,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Fire Eclipse Crest Heater Shield,Eclipse Crest Heater Shield,Fire,Fire,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Flame Art Eclipse Crest Heater Shield,Eclipse Crest Heater Shield,Flame Art,Flame Art,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Lightning Eclipse Crest Heater Shield,Eclipse Crest Heater Shield,Lightning,Lightning,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Sacred Eclipse Crest Heater Shield,Eclipse Crest Heater Shield,Sacred,Sacred,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Magic Eclipse Crest Heater Shield,Eclipse Crest Heater Shield,Magic,Magic,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Cold Eclipse Crest Heater Shield,Eclipse Crest Heater Shield,Cold,Cold,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Poison Eclipse Crest Heater Shield,Eclipse Crest Heater Shield,Poison,Poison,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Blood Eclipse Crest Heater Shield,Eclipse Crest Heater Shield,Blood,Blood,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Occult Eclipse Crest Heater Shield,Eclipse Crest Heater Shield,Occult,Occult,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Inverted Hawk Heater Shield,Inverted Hawk Heater Shield,None,None,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Heavy Inverted Hawk Heater Shield,Inverted Hawk Heater Shield,Heavy,Heavy,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Keen Inverted Hawk Heater Shield,Inverted Hawk Heater Shield,Keen,Keen,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Quality Inverted Hawk Heater Shield,Inverted Hawk Heater Shield,Quality,Quality,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Fire Inverted Hawk Heater Shield,Inverted Hawk Heater Shield,Fire,Fire,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Flame Art Inverted Hawk Heater Shield,Inverted Hawk Heater Shield,Flame Art,Flame Art,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Lightning Inverted Hawk Heater Shield,Inverted Hawk Heater Shield,Lightning,Lightning,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Sacred Inverted Hawk Heater Shield,Inverted Hawk Heater Shield,Sacred,Sacred,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Magic Inverted Hawk Heater Shield,Inverted Hawk Heater Shield,Magic,Magic,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Cold Inverted Hawk Heater Shield,Inverted Hawk Heater Shield,Cold,Cold,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Poison Inverted Hawk Heater Shield,Inverted Hawk Heater Shield,Poison,Poison,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Blood Inverted Hawk Heater Shield,Inverted Hawk Heater Shield,Blood,Blood,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Occult Inverted Hawk Heater Shield,Inverted Hawk Heater Shield,Occult,Occult,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Heater Shield,Heater Shield,None,None,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Heavy Heater Shield,Heater Shield,Heavy,Heavy,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Keen Heater Shield,Heater Shield,Keen,Keen,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Quality Heater Shield,Heater Shield,Quality,Quality,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Fire Heater Shield,Heater Shield,Fire,Fire,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Flame Art Heater Shield,Heater Shield,Flame Art,Flame Art,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Lightning Heater Shield,Heater Shield,Lightning,Lightning,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Sacred Heater Shield,Heater Shield,Sacred,Sacred,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Magic Heater Shield,Heater Shield,Magic,Magic,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Cold Heater Shield,Heater Shield,Cold,Cold,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Poison Heater Shield,Heater Shield,Poison,Poison,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Blood Heater Shield,Heater Shield,Blood,Blood,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Occult Heater Shield,Heater Shield,Occult,Occult,25,10,0,0,0,0,Strike,3.5,5.5,Medium Shield
Black Leather Shield,Black Leather Shield,None,None,25,10,0,0,0,0,Strike,3,5.5,Medium Shield
Heavy Black Leather Shield,Black Leather Shield,Heavy,Heavy,25,10,0,0,0,0,Strike,3,5.5,Medium Shield
Keen Black Leather Shield,Black Leather Shield,Keen,Keen,25,10,0,0,0,0,Strike,3,5.5,Medium Shield
Quality Black Leather Shield,Black Leather Shield,Quality,Quality,25,10,0,0,0,0,Strike,3,5.5,Medium Shield
Fire Black Leather Shield,Black Leather Shield,Fire,Fire,25,10,0,0,0,0,Strike,3,5.5,Medium Shield
Flame Art Black Leather Shield,Black Leather Shield,Flame Art,Flame Art,25,10,0,0,0,0,Strike,3,5.5,Medium Shield
Lightning Black Leather Shield,Black Leather Shield,Lightning,Lightning,25,10,0,0,0,0,Strike,3,5.5,Medium Shield
Sacred Black Leather Shield,Black Leather Shield,Sacred,Sacred,25,10,0,0,0,0,Strike,3,5.5,Medium Shield
Magic Black Leather Shield,Black Leather Shield,Magic,Magic,25,10,0,0,0,0,Strike,3,5.5,Medium Shield
Cold Black Leather Shield,Black Leather Shield,Cold,Cold,25,10,0,0,0,0,Strike,3,5.5,Medium Shield
Poison Black Leather Shield,Black Leather Shield,Poison,Poison,25,10,0,0,0,0,Strike,3,5.5,Medium Shield
Blood Black Leather Shield,Black Leather Shield,Blood,Blood,25,10,0,0,0,0,Strike,3,5.5,Medium Shield
Occult Black Leather Shield,Black Leather Shield,Occult,Occult,25,10,0,0,0,0,Strike,3,5.5,Medium Shield
Dragon Towershield,Dragon Towershield,None,None,25,30,0,0,0,0,Strike,17.5,6,Greatshield
Heavy Dragon Towershield,Dragon Towershield,Heavy,Heavy,25,30,0,0,0,0,Strike,17.5,6,Greatshield
Keen Dragon Towershield,Dragon Towershield,Keen,Keen,25,30,0,0,0,0,Strike,17.5,6,Greatshield
Quality Dragon Towershield,Dragon Towershield,Quality,Quality,25,30,0,0,0,0,Strike,17.5,6,Greatshield
Fire Dragon Towershield,Dragon Towershield,Fire,Fire,25,30,0,0,0,0,Strike,17.5,6,Greatshield
Flame Art Dragon Towershield,Dragon Towershield,Flame Art,Flame Art,25,30,0,0,0,0,Strike,17.5,6,Greatshield
Lightning Dragon Towershield,Dragon Towershield,Lightning,Lightning,25,30,0,0,0,0,Strike,17.5,6,Greatshield
Sacred Dragon Towershield,Dragon Towershield,Sacred,Sacred,25,30,0,0,0,0,Strike,17.5,6,Greatshield
Magic Dragon Towershield,Dragon Towershield,Magic,Magic,25,30,0,0,0,0,Strike,17.5,6,Greatshield
Cold Dragon Towershield,Dragon Towershield,Cold,Cold,25,30,0,0,0,0,Strike,17.5,6,Greatshield
Poison Dragon Towershield,Dragon Towershield,Poison,Poison,25,30,0,0,0,0,Strike,17.5,6,Greatshield
Blood Dragon Towershield,Dragon Towershield,Blood,Blood,25,30,0,0,0,0,Strike,17.5,6,Greatshield
Occult Dragon Towershield,Dragon Towershield,Occult,Occult,25,30,0,0,0,0,Strike,17.5,6,Greatshield
Distinguished Greatshield,Distinguished Greatshield,None,None,25,32,0,0,0,0,Strike,17,6,Greatshield
Distinguished Heavy Greatshield,Distinguished Greatshield,Heavy,Heavy,25,32,0,0,0,0,Strike,17,6,Greatshield
Distinguished Keen Greatshield,Distinguished Greatshield,Keen,Keen,25,32,0,0,0,0,Strike,17,6,Greatshield
Distinguished Quality Greatshield,Distinguished Greatshield,Quality,Quality,25,32,0,0,0,0,Strike,17,6,Greatshield
Distinguished Fire Greatshield,Distinguished Greatshield,Fire,Fire,25,32,0,0,0,0,Strike,17,6,Greatshield
Distinguished Flame Art Greatshield,Distinguished Greatshield,Flame Art,Flame Art,25,32,0,0,0,0,Strike,17,6,Greatshield
Distinguished Lightning Greatshield,Distinguished Greatshield,Lightning,Lightning,25,32,0,0,0,0,Strike,17,6,Greatshield
Distinguished Sacred Greatshield,Distinguished Greatshield,Sacred,Sacred,25,32,0,0,0,0,Strike,17,6,Greatshield
Distinguished Magic Greatshield,Distinguished Greatshield,Magic,Magic,25,32,0,0,0,0,Strike,17,6,Greatshield
Distinguished Cold Greatshield,Distinguished Greatshield,Cold,Cold,25,32,0,0,0,0,Strike,17,6,Greatshield
Distinguished Poison Greatshield,Distinguished Greatshield,Poison,Poison,25,32,0,0,0,0,Strike,17,6,Greatshield
Distinguished Blood Greatshield,Distinguished Greatshield,Blood,Blood,25,32,0,0,0,0,Strike,17,6,Greatshield
Distinguished Occult Greatshield,Distinguished Greatshield,Occult,Occult,25,32,0,0,0,0,Strike,17,6,Greatshield
Crucible Hornshield,Crucible Hornshield,None,-,10,26,0,0,0,0,Strike,11.5,6,Greatshield
Dragonclaw Shield,Dragonclaw Shield,None,-,10,28,12,0,0,0,Strike,13.5,6,Greatshield
Briar Greatshield,Briar Greatshield,None,None,25,21,0,0,0,0,Strike,9.5,6,Greatshield
Heavy Briar Greatshield,Briar Greatshield,Heavy,Heavy,25,21,0,0,0,0,Strike,9.5,6,Greatshield
Keen Briar Greatshield,Briar Greatshield,Keen,Keen,25,21,0,0,0,0,Strike,9.5,6,Greatshield
Quality Briar Greatshield,Briar Greatshield,Quality,Quality,25,21,0,0,0,0,Strike,9.5,6,Greatshield
Fire Briar Greatshield,Briar Greatshield,Fire,Fire,25,21,0,0,0,0,Strike,9.5,6,Greatshield
Flame Art Briar Greatshield,Briar Greatshield,Flame Art,Flame Art,25,21,0,0,0,0,Strike,9.5,6,Greatshield
Lightning Briar Greatshield,Briar Greatshield,Lightning,Lightning,25,21,0,0,0,0,Strike,9.5,6,Greatshield
Sacred Briar Greatshield,Briar Greatshield,Sacred,Sacred,25,21,0,0,0,0,Strike,9.5,6,Greatshield
Magic Briar Greatshield,Briar Greatshield,Magic,Magic,25,21,0,0,0,0,Strike,9.5,6,Greatshield
Cold Briar Greatshield,Briar Greatshield,Cold,Cold,25,21,0,0,0,0,Strike,9.5,6,Greatshield
Poison Briar Greatshield,Briar Greatshield,Poison,Poison,25,21,0,0,0,0,Strike,9.5,6,Greatshield
Blood Briar Greatshield,Briar Greatshield,Blood,Blood,25,21,0,0,0,0,Strike,9.5,6,Greatshield
Occult Briar Greatshield,Briar Greatshield,Occult,Occult,25,21,0,0,0,0,Strike,9.5,6,Greatshield
Erdtree Greatshield,Erdtree Greatshield,None,-,10,30,0,0,12,0,Strike,13.5,6,Greatshield
Golden Beast Crest Shield,Golden Beast Crest Shield,None,None,25,24,0,0,0,0,Strike,12.5,6,Greatshield
Heavy Golden Beast Crest Shield,Golden Beast Crest Shield,Heavy,Heavy,25,24,0,0,0,0,Strike,12.5,6,Greatshield
Keen Golden Beast Crest Shield,Golden Beast Crest Shield,Keen,Keen,25,24,0,0,0,0,Strike,12.5,6,Greatshield
Quality Golden Beast Crest Shield,Golden Beast Crest Shield,Quality,Quality,25,24,0,0,0,0,Strike,12.5,6,Greatshield
Fire Golden Beast Crest Shield,Golden Beast Crest Shield,Fire,Fire,25,24,0,0,0,0,Strike,12.5,6,Greatshield
Flame Art Golden Beast Crest Shield,Golden Beast Crest Shield,Flame Art,Flame Art,25,24,0,0,0,0,Strike,12.5,6,Greatshield
Lightning Golden Beast Crest Shield,Golden Beast Crest Shield,Lightning,Lightning,25,24,0,0,0,0,Strike,12.5,6,Greatshield
Sacred Golden Beast Crest Shield,Golden Beast Crest Shield,Sacred,Sacred,25,24,0,0,0,0,Strike,12.5,6,Greatshield
Magic Golden Beast Crest Shield,Golden Beast Crest Shield,Magic,Magic,25,24,0,0,0,0,Strike,12.5,6,Greatshield
Cold Golden Beast Crest Shield,Golden Beast Crest Shield,Cold,Cold,25,24,0,0,0,0,Strike,12.5,6,Greatshield
Poison Golden Beast Crest Shield,Golden Beast Crest Shield,Poison,Poison,25,24,0,0,0,0,Strike,12.5,6,Greatshield
Blood Golden Beast Crest Shield,Golden Beast Crest Shield,Blood,Blood,25,24,0,0,0,0,Strike,12.5,6,Greatshield
Occult Golden Beast Crest Shield,Golden Beast Crest Shield,Occult,Occult,25,24,0,0,0,0,Strike,12.5,6,Greatshield
Jellyfish Shield,Jellyfish Shield,None,-,10,20,14,0,0,0,Strike,8,6,Greatshield
Fingerprint Stone Shield,Fingerprint Stone Shield,None,None,25,48,0,0,0,0,Strike,29,6,Greatshield
Heavy Fingerprint Stone Shield,Fingerprint Stone Shield,Heavy,Heavy,25,48,0,0,0,0,Strike,29,6,Greatshield
Keen Fingerprint Stone Shield,Fingerprint Stone Shield,Keen,Keen,25,48,0,0,0,0,Strike,29,6,Greatshield
Quality Fingerprint Stone Shield,Fingerprint Stone Shield,Quality,Quality,25,48,0,0,0,0,Strike,29,6,Greatshield
Fire Fingerprint Stone Shield,Fingerprint Stone Shield,Fire,Fire,25,48,0,0,0,0,Strike,29,6,Greatshield
Flame Art Fingerprint Stone Shield,Fingerprint Stone Shield,Flame Art,Flame Art,25,48,0,0,0,0,Strike,29,6,Greatshield
Lightning Fingerprint Stone Shield,Fingerprint Stone Shield,Lightning,Lightning,25,48,0,0,0,0,Strike,29,6,Greatshield
Sacred Fingerprint Stone Shield,Fingerprint Stone Shield,Sacred,Sacred,25,48,0,0,0,0,Strike,29,6,Greatshield
Magic Fingerprint Stone Shield,Fingerprint Stone Shield,Magic,Magic,25,48,0,0,0,0,Strike,29,6,Greatshield
Cold Fingerprint Stone Shield,Fingerprint Stone Shield,Cold,Cold,25,48,0,0,0,0,Strike,29,6,Greatshield
Poison Fingerprint Stone Shield,Fingerprint Stone Shield,Poison,Poison,25,48,0,0,0,0,Strike,29,6,Greatshield
Blood Fingerprint Stone Shield,Fingerprint Stone Shield,Blood,Blood,25,48,0,0,0,0,Strike,29,6,Greatshield
Occult Fingerprint Stone Shield,Fingerprint Stone Shield,Occult,Occult,25,48,0,0,0,0,Strike,29,6,Greatshield
Icon Shield,Icon Shield,None,-,10,22,0,0,0,0,Strike,11.5,6,Greatshield
One-Eyed Shield,One-Eyed Shield,None,-,10,36,0,0,0,0,Strike,20.5,6,Greatshield
Visage Shield,Visage Shield,None,-,10,44,0,0,0,0,Strike,24,6,Greatshield
Spiked Palisade Shield,Spiked Palisade Shield,None,None,25,20,0,0,0,0,Strike,11.5,6,Greatshield
Heavy Spiked Palisade Shield,Spiked Palisade Shield,Heavy,Heavy,25,20,0,0,0,0,Strike,11.5,6,Greatshield
Keen Spiked Palisade Shield,Spiked Palisade Shield,Keen,Keen,25,20,0,0,0,0,Strike,11.5,6,Greatshield
Quality Spiked Palisade Shield,Spiked Palisade Shield,Quality,Quality,25,20,0,0,0,0,Strike,11.5,6,Greatshield
Fire Spiked Palisade Shield,Spiked Palisade Shield,Fire,Fire,25,20,0,0,0,0,Strike,11.5,6,Greatshield
Flame Art Spiked Palisade Shield,Spiked Palisade Shield,Flame Art,Flame Art,25,20,0,0,0,0,Strike,11.5,6,Greatshield
Lightning Spiked Palisade Shield,Spiked Palisade Shield,Lightning,Lightning,25,20,0,0,0,0,Strike,11.5,6,Greatshield
Sacred Spiked Palisade Shield,Spiked Palisade Shield,Sacred,Sacred,25,20,0,0,0,0,Strike,11.5,6,Greatshield
Magic Spiked Palisade Shield,Spiked Palisade Shield,Magic,Magic,25,20,0,0,0,0,Strike,11.5,6,Greatshield
Cold Spiked Palisade Shield,Spiked Palisade Shield,Cold,Cold,25,20,0,0,0,0,Strike,11.5,6,Greatshield
Poison Spiked Palisade Shield,Spiked Palisade Shield,Poison,Poison,25,20,0,0,0,0,Strike,11.5,6,Greatshield
Blood Spiked Palisade Shield,Spiked Palisade Shield,Blood,Blood,25,20,0,0,0,0,Strike,11.5,6,Greatshield
Occult Spiked Palisade Shield,Spiked Palisade Shield,Occult,Occult,25,20,0,0,0,0,Strike,11.5,6,Greatshield
Manor Towershield,Manor Towershield,None,None,25,30,0,0,0,0,Strike,16,6,Greatshield
Heavy Manor Towershield,Manor Towershield,Heavy,Heavy,25,30,0,0,0,0,Strike,16,6,Greatshield
Keen Manor Towershield,Manor Towershield,Keen,Keen,25,30,0,0,0,0,Strike,16,6,Greatshield
Quality Manor Towershield,Manor Towershield,Quality,Quality,25,30,0,0,0,0,Strike,16,6,Greatshield
Fire Manor Towershield,Manor Towershield,Fire,Fire,25,30,0,0,0,0,Strike,16,6,Greatshield
Flame Art Manor Towershield,Manor Towershield,Flame Art,Flame Art,25,30,0,0,0,0,Strike,16,6,Greatshield
Lightning Manor Towershield,Manor Towershield,Lightning,Lightning,25,30,0,0,0,0,Strike,16,6,Greatshield
Sacred Manor Towershield,Manor Towershield,Sacred,Sacred,25,30,0,0,0,0,Strike,16,6,Greatshield
Magic Manor Towershield,Manor Towershield,Magic,Magic,25,30,0,0,0,0,Strike,16,6,Greatshield
Cold Manor Towershield,Manor Towershield,Cold,Cold,25,30,0,0,0,0,Strike,16,6,Greatshield
Poison Manor Towershield,Manor Towershield,Poison,Poison,25,30,0,0,0,0,Strike,16,6,Greatshield
Blood Manor Towershield,Manor Towershield,Blood,Blood,25,30,0,0,0,0,Strike,16,6,Greatshield
Occult Manor Towershield,Manor Towershield,Occult,Occult,25,30,0,0,0,0,Strike,16,6,Greatshield
Crossed-Tree Towershield,Crossed-Tree Towershield,None,None,25,30,0,0,0,0,Strike,16,6,Greatshield
Heavy Crossed-Tree Towershield,Crossed-Tree Towershield,Heavy,Heavy,25,30,0,0,0,0,Strike,16,6,Greatshield
Keen Crossed-Tree Towershield,Crossed-Tree Towershield,Keen,Keen,25,30,0,0,0,0,Strike,16,6,Greatshield
Quality Crossed-Tree Towershield,Crossed-Tree Towershield,Quality,Quality,25,30,0,0,0,0,Strike,16,6,Greatshield
Fire Crossed-Tree Towershield,Crossed-Tree Towershield,Fire,Fire,25,30,0,0,0,0,Strike,16,6,Greatshield
Flame Art Crossed-Tree Towershield,Crossed-Tree Towershield,Flame Art,Flame Art,25,30,0,0,0,0,Strike,16,6,Greatshield
Lightning Crossed-Tree Towershield,Crossed-Tree Towershield,Lightning,Lightning,25,30,0,0,0,0,Strike,16,6,Greatshield
Sacred Crossed-Tree Towershield,Crossed-Tree Towershield,Sacred,Sacred,25,30,0,0,0,0,Strike,16,6,Greatshield
Magic Crossed-Tree Towershield,Crossed-Tree Towershield,Magic,Magic,25,30,0,0,0,0,Strike,16,6,Greatshield
Cold Crossed-Tree Towershield,Crossed-Tree Towershield,Cold,Cold,25,30,0,0,0,0,Strike,16,6,Greatshield
Poison Crossed-Tree Towershield,Crossed-Tree Towershield,Poison,Poison,25,30,0,0,0,0,Strike,16,6,Greatshield
Blood Crossed-Tree Towershield,Crossed-Tree Towershield,Blood,Blood,25,30,0,0,0,0,Strike,16,6,Greatshield
Occult Crossed-Tree Towershield,Crossed-Tree Towershield,Occult,Occult,25,30,0,0,0,0,Strike,16,6,Greatshield
Inverted Hawk Towershield,Inverted Hawk Towershield,None,None,25,30,0,0,0,0,Strike,16,6,Greatshield
Heavy Inverted Hawk Towershield,Inverted Hawk Towershield,Heavy,Heavy,25,30,0,0,0,0,Strike,16,6,Greatshield
Keen Inverted Hawk Towershield,Inverted Hawk Towershield,Keen,Keen,25,30,0,0,0,0,Strike,16,6,Greatshield
Quality Inverted Hawk Towershield,Inverted Hawk Towershield,Quality,Quality,25,30,0,0,0,0,Strike,16,6,Greatshield
Fire Inverted Hawk Towershield,Inverted Hawk Towershield,Fire,Fire,25,30,0,0,0,0,Strike,16,6,Greatshield
Flame Art Inverted Hawk Towershield,Inverted Hawk Towershield,Flame Art,Flame Art,25,30,0,0,0,0,Strike,16,6,Greatshield
Lightning Inverted Hawk Towershield,Inverted Hawk Towershield,Lightning,Lightning,25,30,0,0,0,0,Strike,16,6,Greatshield
Sacred Inverted Hawk Towershield,Inverted Hawk Towershield,Sacred,Sacred,25,30,0,0,0,0,Strike,16,6,Greatshield
Magic Inverted Hawk Towershield,Inverted Hawk Towershield,Magic,Magic,25,30,0,0,0,0,Strike,16,6,Greatshield
Cold Inverted Hawk Towershield,Inverted Hawk Towershield,Cold,Cold,25,30,0,0,0,0,Strike,16,6,Greatshield
Poison Inverted Hawk Towershield,Inverted Hawk Towershield,Poison,Poison,25,30,0,0,0,0,Strike,16,6,Greatshield
Blood Inverted Hawk Towershield,Inverted Hawk Towershield,Blood,Blood,25,30,0,0,0,0,Strike,16,6,Greatshield
Occult Inverted Hawk Towershield,Inverted Hawk Towershield,Occult,Occult,25,30,0,0,0,0,Strike,16,6,Greatshield
Ant's Skull Plate,Ant's Skull Plate,None,-,10,28,0,0,0,0,Strike,13.5,6,Greatshield
Redmane Greatshield,Redmane Greatshield,None,None,25,30,0,0,0,0,Strike,14,6,Greatshield
Heavy Redmane Greatshield,Redmane Greatshield,Heavy,Heavy,25,30,0,0,0,0,Strike,14,6,Greatshield
Keen Redmane Greatshield,Redmane Greatshield,Keen,Keen,25,30,0,0,0,0,Strike,14,6,Greatshield
Quality Redmane Greatshield,Redmane Greatshield,Quality,Quality,25,30,0,0,0,0,Strike,14,6,Greatshield
Fire Redmane Greatshield,Redmane Greatshield,Fire,Fire,25,30,0,0,0,0,Strike,14,6,Greatshield
Flame Art Redmane Greatshield,Redmane Greatshield,Flame Art,Flame Art,25,30,0,0,0,0,Strike,14,6,Greatshield
Lightning Redmane Greatshield,Redmane Greatshield,Lightning,Lightning,25,30,0,0,0,0,Strike,14,6,Greatshield
Sacred Redmane Greatshield,Redmane Greatshield,Sacred,Sacred,25,30,0,0,0,0,Strike,14,6,Greatshield
Magic Redmane Greatshield,Redmane Greatshield,Magic,Magic,25,30,0,0,0,0,Strike,14,6,Greatshield
Cold Redmane Greatshield,Redmane Greatshield,Cold,Cold,25,30,0,0,0,0,Strike,14,6,Greatshield
Poison Redmane Greatshield,Redmane Greatshield,Poison,Poison,25,30,0,0,0,0,Strike,14,6,Greatshield
Blood Redmane Greatshield,Redmane Greatshield,Blood,Blood,25,30,0,0,0,0,Strike,14,6,Greatshield
Occult Redmane Greatshield,Redmane Greatshield,Occult,Occult,25,30,0,0,0,0,Strike,14,6,Greatshield
Eclipse Crest Greatshield,Eclipse Crest Greatshield,None,None,25,32,0,0,0,0,Strike,15,6,Greatshield
Heavy Eclipse Crest Greatshield,Eclipse Crest Greatshield,Heavy,Heavy,25,32,0,0,0,0,Strike,15,6,Greatshield
Keen Eclipse Crest Greatshield,Eclipse Crest Greatshield,Keen,Keen,25,32,0,0,0,0,Strike,15,6,Greatshield
Quality Eclipse Crest Greatshield,Eclipse Crest Greatshield,Quality,Quality,25,32,0,0,0,0,Strike,15,6,Greatshield
Fire Eclipse Crest Greatshield,Eclipse Crest Greatshield,Fire,Fire,25,32,0,0,0,0,Strike,15,6,Greatshield
Flame Art Eclipse Crest Greatshield,Eclipse Crest Greatshield,Flame Art,Flame Art,25,32,0,0,0,0,Strike,15,6,Greatshield
Lightning Eclipse Crest Greatshield,Eclipse Crest Greatshield,Lightning,Lightning,25,32,0,0,0,0,Strike,15,6,Greatshield
Sacred Eclipse Crest Greatshield,Eclipse Crest Greatshield,Sacred,Sacred,25,32,0,0,0,0,Strike,15,6,Greatshield
Magic Eclipse Crest Greatshield,Eclipse Crest Greatshield,Magic,Magic,25,32,0,0,0,0,Strike,15,6,Greatshield
Cold Eclipse Crest Greatshield,Eclipse Crest Greatshield,Cold,Cold,25,32,0,0,0,0,Strike,15,6,Greatshield
Poison Eclipse Crest Greatshield,Eclipse Crest Greatshield,Poison,Poison,25,32,0,0,0,0,Strike,15,6,Greatshield
Blood Eclipse Crest Greatshield,Eclipse Crest Greatshield,Blood,Blood,25,32,0,0,0,0,Strike,15,6,Greatshield
Occult Eclipse Crest Greatshield,Eclipse Crest Greatshield,Occult,Occult,25,32,0,0,0,0,Strike,15,6,Greatshield
Cuckoo Greatshield,Cuckoo Greatshield,None,None,25,32,0,0,0,0,Strike,15,6,Greatshield
Heavy Cuckoo Greatshield,Cuckoo Greatshield,Heavy,Heavy,25,32,0,0,0,0,Strike,15,6,Greatshield
Keen Cuckoo Greatshield,Cuckoo Greatshield,Keen,Keen,25,32,0,0,0,0,Strike,15,6,Greatshield
Quality Cuckoo Greatshield,Cuckoo Greatshield,Quality,Quality,25,32,0,0,0,0,Strike,15,6,Greatshield
Fire Cuckoo Greatshield,Cuckoo Greatshield,Fire,Fire,25,32,0,0,0,0,Strike,15,6,Greatshield
Flame Art Cuckoo Greatshield,Cuckoo Greatshield,Flame Art,Flame Art,25,32,0,0,0,0,Strike,15,6,Greatshield
Lightning Cuckoo Greatshield,Cuckoo Greatshield,Lightning,Lightning,25,32,0,0,0,0,Strike,15,6,Greatshield
Sacred Cuckoo Greatshield,Cuckoo Greatshield,Sacred,Sacred,25,32,0,0,0,0,Strike,15,6,Greatshield
Magic Cuckoo Greatshield,Cuckoo Greatshield,Magic,Magic,25,32,0,0,0,0,Strike,15,6,Greatshield
Cold Cuckoo Greatshield,Cuckoo Greatshield,Cold,Cold,25,32,0,0,0,0,Strike,15,6,Greatshield
Poison Cuckoo Greatshield,Cuckoo Greatshield,Poison,Poison,25,32,0,0,0,0,Strike,15,6,Greatshield
Blood Cuckoo Greatshield,Cuckoo Greatshield,Blood,Blood,25,32,0,0,0,0,Strike,15,6,Greatshield
Occult Cuckoo Greatshield,Cuckoo Greatshield,Occult,Occult,25,32,0,0,0,0,Strike,15,6,Greatshield
Golden Greatshield,Golden Greatshield,None,None,25,34,0,0,0,0,Strike,17,6,Greatshield
Heavy Golden Greatshield,Golden Greatshield,Heavy,Heavy,25,34,0,0,0,0,Strike,17,6,Greatshield
Keen Golden Greatshield,Golden Greatshield,Keen,Keen,25,34,0,0,0,0,Strike,17,6,Greatshield
Quality Golden Greatshield,Golden Greatshield,Quality,Quality,25,34,0,0,0,0,Strike,17,6,Greatshield
Fire Golden Greatshield,Golden Greatshield,Fire,Fire,25,34,0,0,0,0,Strike,17,6,Greatshield
Flame Art Golden Greatshield,Golden Greatshield,Flame Art,Flame Art,25,34,0,0,0,0,Strike,17,6,Greatshield
Lightning Golden Greatshield,Golden Greatshield,Lightning,Lightning,25,34,0,0,0,0,Strike,17,6,Greatshield
Sacred Golden Greatshield,Golden Greatshield,Sacred,Sacred,25,34,0,0,0,0,Strike,17,6,Greatshield
Magic Golden Greatshield,Golden Greatshield,Magic,Magic,25,34,0,0,0,0,Strike,17,6,Greatshield
Cold Golden Greatshield,Golden Greatshield,Cold,Cold,25,34,0,0,0,0,Strike,17,6,Greatshield
Poison Golden Greatshield,Golden Greatshield,Poison,Poison,25,34,0,0,0,0,Strike,17,6,Greatshield
Blood Golden Greatshield,Golden Greatshield,Blood,Blood,25,34,0,0,0,0,Strike,17,6,Greatshield
Occult Golden Greatshield,Golden Greatshield,Occult,Occult,25,34,0,0,0,0,Strike,17,6,Greatshield
Gilded Greatshield,Gilded Greatshield,None,None,25,36,0,0,0,0,Strike,17.5,6,Greatshield
Heavy Gilded Greatshield,Gilded Greatshield,Heavy,Heavy,25,36,0,0,0,0,Strike,17.5,6,Greatshield
Keen Gilded Greatshield,Gilded Greatshield,Keen,Keen,25,36,0,0,0,0,Strike,17.5,6,Greatshield
Quality Gilded Greatshield,Gilded Greatshield,Quality,Quality,25,36,0,0,0,0,Strike,17.5,6,Greatshield
Fire Gilded Greatshield,Gilded Greatshield,Fire,Fire,25,36,0,0,0,0,Strike,17.5,6,Greatshield
Flame Art Gilded Greatshield,Gilded Greatshield,Flame Art,Flame Art,25,36,0,0,0,0,Strike,17.5,6,Greatshield
Lightning Gilded Greatshield,Gilded Greatshield,Lightning,Lightning,25,36,0,0,0,0,Strike,17.5,6,Greatshield
Sacred Gilded Greatshield,Gilded Greatshield,Sacred,Sacred,25,36,0,0,0,0,Strike,17.5,6,Greatshield
Magic Gilded Greatshield,Gilded Greatshield,Magic,Magic,25,36,0,0,0,0,Strike,17.5,6,Greatshield
Cold Gilded Greatshield,Gilded Greatshield,Cold,Cold,25,36,0,0,0,0,Strike,17.5,6,Greatshield
Poison Gilded Greatshield,Gilded Greatshield,Poison,Poison,25,36,0,0,0,0,Strike,17.5,6,Greatshield
Blood Gilded Greatshield,Gilded Greatshield,Blood,Blood,25,36,0,0,0,0,Strike,17.5,6,Greatshield
Occult Gilded Greatshield,Gilded Greatshield,Occult,Occult,25,36,0,0,0,0,Strike,17.5,6,Greatshield
Haligtree Crest Greatshield,Haligtree Crest Greatshield,None,None,25,36,0,0,0,0,Strike,18.5,6,Greatshield
Heavy Haligtree Crest Greatshield,Haligtree Crest Greatshield,Heavy,Heavy,25,36,0,0,0,0,Strike,18.5,6,Greatshield
Keen Haligtree Crest Greatshield,Haligtree Crest Greatshield,Keen,Keen,25,36,0,0,0,0,Strike,18.5,6,Greatshield
Quality Haligtree Crest Greatshield,Haligtree Crest Greatshield,Quality,Quality,25,36,0,0,0,0,Strike,18.5,6,Greatshield
Fire Haligtree Crest Greatshield,Haligtree Crest Greatshield,Fire,Fire,25,36,0,0,0,0,Strike,18.5,6,Greatshield
Flame Art Haligtree Crest Greatshield,Haligtree Crest Greatshield,Flame Art,Flame Art,25,36,0,0,0,0,Strike,18.5,6,Greatshield
Lightning Haligtree Crest Greatshield,Haligtree Crest Greatshield,Lightning,Lightning,25,36,0,0,0,0,Strike,18.5,6,Greatshield
Sacred Haligtree Crest Greatshield,Haligtree Crest Greatshield,Sacred,Sacred,25,36,0,0,0,0,Strike,18.5,6,Greatshield
Magic Haligtree Crest Greatshield,Haligtree Crest Greatshield,Magic,Magic,25,36,0,0,0,0,Strike,18.5,6,Greatshield
Cold Haligtree Crest Greatshield,Haligtree Crest Greatshield,Cold,Cold,25,36,0,0,0,0,Strike,18.5,6,Greatshield
Poison Haligtree Crest Greatshield,Haligtree Crest Greatshield,Poison,Poison,25,36,0,0,0,0,Strike,18.5,6,Greatshield
Blood Haligtree Crest Greatshield,Haligtree Crest Greatshield,Blood,Blood,25,36,0,0,0,0,Strike,18.5,6,Greatshield
Occult Haligtree Crest Greatshield,Haligtree Crest Greatshield,Occult,Occult,25,36,0,0,0,0,Strike,18.5,6,Greatshield
Wooden Greatshield,Wooden Greatshield,None,None,25,14,0,0,0,0,Strike,8,6,Greatshield
Heavy Wooden Greatshield,Wooden Greatshield,Heavy,Heavy,25,14,0,0,0,0,Strike,8,6,Greatshield
Keen Wooden Greatshield,Wooden Greatshield,Keen,Keen,25,14,0,0,0,0,Strike,8,6,Greatshield
Quality Wooden Greatshield,Wooden Greatshield,Quality,Quality,25,14,0,0,0,0,Strike,8,6,Greatshield
Fire Wooden Greatshield,Wooden Greatshield,Fire,Fire,25,14,0,0,0,0,Strike,8,6,Greatshield
Flame Art Wooden Greatshield,Wooden Greatshield,Flame Art,Flame Art,25,14,0,0,0,0,Strike,8,6,Greatshield
Lightning Wooden Greatshield,Wooden Greatshield,Lightning,Lightning,25,14,0,0,0,0,Strike,8,6,Greatshield
Sacred Wooden Greatshield,Wooden Greatshield,Sacred,Sacred,25,14,0,0,0,0,Strike,8,6,Greatshield
Magic Wooden Greatshield,Wooden Greatshield,Magic,Magic,25,14,0,0,0,0,Strike,8,6,Greatshield
Cold Wooden Greatshield,Wooden Greatshield,Cold,Cold,25,14,0,0,0,0,Strike,8,6,Greatshield
Poison Wooden Greatshield,Wooden Greatshield,Poison,Poison,25,14,0,0,0,0,Strike,8,6,Greatshield
Blood Wooden Greatshield,Wooden Greatshield,Blood,Blood,25,14,0,0,0,0,Strike,8,6,Greatshield
Occult Wooden Greatshield,Wooden Greatshield,Occult,Occult,25,14,0,0,0,0,Strike,8,6,Greatshield
Lordsworn's Shield,Lordsworn's Shield,None,None,25,16,0,0,0,0,Strike,10,6,Greatshield
Heavy Lordsworn's Shield,Lordsworn's Shield,Heavy,Heavy,25,16,0,0,0,0,Strike,10,6,Greatshield
Keen Lordsworn's Shield,Lordsworn's Shield,Keen,Keen,25,16,0,0,0,0,Strike,10,6,Greatshield
Quality Lordsworn's Shield,Lordsworn's Shield,Quality,Quality,25,16,0,0,0,0,Strike,10,6,Greatshield
Fire Lordsworn's Shield,Lordsworn's Shield,Fire,Fire,25,16,0,0,0,0,Strike,10,6,Greatshield
Flame Art Lordsworn's Shield,Lordsworn's Shield,Flame Art,Flame Art,25,16,0,0,0,0,Strike,10,6,Greatshield
Lightning Lordsworn's Shield,Lordsworn's Shield,Lightning,Lightning,25,16,0,0,0,0,Strike,10,6,Greatshield
Sacred Lordsworn's Shield,Lordsworn's Shield,Sacred,Sacred,25,16,0,0,0,0,Strike,10,6,Greatshield
Magic Lordsworn's Shield,Lordsworn's Shield,Magic,Magic,25,16,0,0,0,0,Strike,10,6,Greatshield
Cold Lordsworn's Shield,Lordsworn's Shield,Cold,Cold,25,16,0,0,0,0,Strike,10,6,Greatshield
Poison Lordsworn's Shield,Lordsworn's Shield,Poison,Poison,25,16,0,0,0,0,Strike,10,6,Greatshield
Blood Lordsworn's Shield,Lordsworn's Shield,Blood,Blood,25,16,0,0,0,0,Strike,10,6,Greatshield
Occult Lordsworn's Shield,Lordsworn's Shield,Occult,Occult,25,16,0,0,0,0,Strike,10,6,Greatshield
Glintstone Staff,Glintstone Staff,None,-,25,6,0,10,0,0,Strike,3,3,Glintstone Staff
Crystal Staff,Crystal Staff,None,-,10,8,0,48,0,0,Strike,4.5,3,Glintstone Staff
Gelmir Glintstone Staff,Gelmir Glintstone Staff,None,-,25,6,0,14,14,0,Strike,2.5,3,Glintstone Staff
Demi-Human Queen's Staff,Demi-Human Queen's Staff,None,-,25,6,0,10,0,0,Strike,3,3,Glintstone Staff
Carian Regal Scepter,Carian Regal Scepter,None,-,10,8,10,60,0,0,Strike,3,3,Glintstone Staff
Digger's Staff,Digger's Staff,None,-,25,8,0,12,0,0,Strike,4.5,3,Glintstone Staff
Astrologer's Staff,Astrologer's Staff,None,-,25,7,0,16,0,0,Strike,3,3,Glintstone Staff
Carian Glintblade Staff,Carian Glintblade Staff,None,-,25,6,12,22,0,0,Strike,2.5,3,Glintstone Staff
Prince of Death's Staff,Prince of Death's Staff,None,-,25,6,0,18,18,0,Strike,3,3,Glintstone Staff
Albinauric Staff,Albinauric Staff,None,-,25,6,0,10,0,12,Strike,2.5,3,Glintstone Staff
Academy Glintstone Staff,Academy Glintstone Staff,None,-,25,6,0,28,0,0,Strike,3,3,Glintstone Staff
Carian Glintstone Staff,Carian Glintstone Staff,None,-,25,6,8,24,0,0,Strike,3,3,Glintstone Staff
Azur's Glintstone Staff,Azur's Glintstone Staff,None,-,10,10,0,52,0,0,Strike,4,3,Glintstone Staff
Lusat's Glintstone Staff,Lusat's Glintstone Staff,None,-,10,10,0,52,0,0,Strike,4,3,Glintstone Staff
Meteorite Staff,Meteorite Staff,None,-,0,6,0,18,0,0,Strike,4.5,3,Glintstone Staff
Staff of the Guilty,Staff of the Guilty,None,-,25,8,0,0,12,0,Strike,4.5,3,Glintstone Staff
Rotten Crystal Staff,Rotten Crystal Staff,None,-,10,8,0,48,0,0,Strike,4.5,3,Glintstone Staff
Staff of Loss,Staff of Loss,None,-,25,6,12,14,0,0,Strike,2.5,3,Glintstone Staff
Finger Seal,Finger Seal,None,-,25,4,0,0,10,0,Strike,1.5,3,Sacred Seal
Godslayer's Seal,Godslayer's Seal,None,-,25,4,0,0,27,0,Strike,1.5,3,Sacred Seal
Giant's Seal,Giant's Seal,None,-,25,4,0,0,14,0,Strike,1.5,3,Sacred Seal
Gravel Stone Seal,Gravel Stone Seal,None,-,25,4,0,0,18,0,Strike,1.5,3,Sacred Seal
Clawmark Seal,Clawmark Seal,None,-,25,4,0,0,10,0,Strike,1.5,3,Sacred Seal
Golden Order Seal,Golden Order Seal,None,-,10,0,0,17,17,0,Strike,0,3,Sacred Seal
Erdtree Seal,Erdtree Seal,None,-,10,0,0,0,40,0,Strike,0,3,Sacred Seal
Dragon Communion Seal,Dragon Communion Seal,None,-,10,0,0,0,10,10,Strike,0,3,Sacred Seal
Frenzied Flame Seal,Frenzied Flame Seal,None,-,10,0,0,0,0,0,Strike,0,3,Sacred Seal
Shortbow,Shortbow,None,-,25,8,10,0,0,0,0,2.5,2,Light Bow
Misbegotten Shortbow,Misbegotten Shortbow,None,-,25,16,8,0,0,0,0,3,2,Light Bow
Red Branch Shortbow,Red Branch Shortbow,None,-,25,8,16,0,0,0,0,2.5,2,Light Bow
Harp Bow,Harp Bow,None,-,10,9,9,0,0,0,0,2,2,Light Bow
Composite Bow,Composite Bow,None,-,25,15,15,0,0,0,0,3,2,Light Bow
Longbow,Longbow,None,-,25,9,14,0,0,0,0,4,2,Bow
Albinauric Bow,Albinauric Bow,None,-,25,7,18,0,0,0,0,4.5,2,Bow
Horn Bow,Horn Bow,None,-,25,10,14,12,0,0,0,4.5,2,Bow
Erdtree Bow,Erdtree Bow,None,-,10,8,12,0,14,0,0,4,2,Bow
Serpent Bow,Serpent Bow,None,-,10,8,15,0,0,11,0,3.5,2,Bow
Pulley Bow,Pulley Bow,None,-,10,11,11,0,0,0,0,5,2,Bow
Black Bow,Black Bow,None,-,10,9,20,0,0,0,0,4,2,Light Bow
Lion Greatbow,Lion Greatbow,None,-,10,22,18,0,0,0,0,9.5,7,Greatbow
Golem Greatbow,Golem Greatbow,None,-,10,24,18,0,0,0,0,14.5,7,Greatbow
Erdtree Greatbow,Erdtree Greatbow,None,-,10,20,14,0,14,0,0,11,7,Greatbow
Greatbow,Greatbow,None,-,25,20,20,0,0,0,0,10,7,Greatbow
Soldier's Crossbow,Soldier's Crossbow,None,-,25,10,8,0,0,0,0,3.5,2,Crossbow
Light Crossbow,Light Crossbow,None,-,25,12,8,0,0,0,0,4,2,Crossbow
Heavy Crossbow,Heavy Crossbow,None,-,25,14,10,0,0,0,0,5.5,2,Crossbow
Pulley Crossbow,Pulley Crossbow,None,-,10,16,16,0,0,0,0,4,2,Crossbow
Full Moon Crossbow,Full Moon Crossbow,None,-,10,10,10,14,0,0,0,4,2,Crossbow
Arbalest,Arbalest,None,-,25,18,12,0,0,0,0,6,2,Crossbow
Crepus's Black-Key Crossbow,Crepus's Black-Key Crossbow,None,-,10,14,16,0,0,0,0,5,2,Crossbow
Hand Ballista,Hand Ballista,None,-,25,30,14,0,0,0,0,10,7,Ballista
Jar Cannon,Jar Cannon,None,-,10,34,12,0,0,0,0,15,7,Ballista
`;