sSTR[999]=0;sCON[999]=0;sDEX[999]=0;sQUI[999]=0;sINT[999]=0;sPIE[999]=0;sEMP[999]=0;sCHA[999]=0; 
sSTR[998]=0;sCON[998]=0;sDEX[998]=0;sQUI[998]=0;sINT[998]=0;sPIE[998]=0;sEMP[998]=0;sCHA[998]=0; 
sSTR[5]=45;sCON[5]=45;sDEX[5]=60;sQUI[5]=70;sINT[5]=80;sPIE[5]=60;sEMP[5]=60;sCHA[5]=60; 
sSTR[6]=60;sCON[6]=60;sDEX[6]=60;sQUI[6]=60;sINT[6]=60;sPIE[6]=60;sEMP[6]=60;sCHA[6]=60; 
sSTR[7]=70;sCON[7]=70;sDEX[7]=50;sQUI[7]=50;sINT[7]=60;sPIE[7]=60;sEMP[7]=60;sCHA[7]=60; 

Abilities = new Array(14)		
Abilities[1]=new abilityPT("Rejuvenation",0,2,2,1,0,0)
Abilities[2]=new abilityPT("Enhancement",0,3,2,1,0,0)
Abilities[3]=new abilityPT("Staff",0,83,5,0,0,0)
Abilities[4]=new abilityPT("Crush",0,87,5,0,0,0)
Abilities[5]=new abilityPT("Cloth Armor",0,99,7,0,0,0)
Abilities[6]=new abilityPT("Leather Armor",0,100,7,0,0,0)
Abilities[7]=new abilityPT("Shields (Small)",0,102,7,0,0,0)
Abilities[8]=new abilityPT("Smiting",5,4,2,1,0,0)
Abilities[9]=new abilityPT("Rejuvenation Spec.",5,77,3,0,2,0)
Abilities[10]=new abilityPT("Enhancement Spec.",5,79,3,0,3,0)
Abilities[11]=new abilityPT("Smiting Spec.",5,81,3,0,4,0)
Abilities[12]=new abilityPT("Studded Armor",10,101,7,0,0,0)
Abilities[13]=new abilityPT("Shields (Medium)",10,103,7,0,0,0)
Abilities[14]=new abilityPT("Chain Armor",20,104,7,0,0,0)
	
//Styles = new Array(0);

Spells = new Array();
Lines = new Array();

var idx=1;
Lines[2079]=new linePT('Minor Heal','Heals target for a very small amount of health. Casts quickly and uses little power.',2,0) 
Spells[idx++]=new spellPT("Minor Rejuvenation",1,2079,2,"6 HP ",2,"1 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Regeneracy",3,2079,2,"11 HP ",2,"2 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Relief",5,2079,2,"16 HP ",2,"3 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Restoration",8,2079,2,"23 HP ",2,"4 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Recuperation",11,2079,2,"31 HP ",2,"5 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Renewal",14,2079,2,"38 HP ",2,"6 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Revival",18,2079,2,"48 HP ",2,"8 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Resuscitation",23,2079,2,"60 HP ",2,"10 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Reviction",29,2079,2,"75 HP ",2,"12 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Refection",37,2079,2,"95 HP ",2,"14 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Refocillation",47,2079,2,"119 HP ",2,"17 PP",'2000','2.2s','','','','') 
Lines[2081]=new linePT('Heal','Heals target for a small amount of health. Uses little power.',2,0) 
Spells[idx++]=new spellPT("Regeneracy",4,2081,2,"26 HP ",2,"4 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Relief",6,2081,2,"36 HP ",2,"6 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Restoration",9,2081,2,"50 HP ",2,"9 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Recuperation",12,2081,2,"65 HP ",2,"11 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Renewal",16,2081,2,"85 HP ",2,"15 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Revival",21,2081,2,"109 HP ",2,"19 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Resuscitation",27,2081,2,"138 HP ",2,"25 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Reviction",31,2081,2,"158 HP ",2,"28 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Refection",36,2081,2,"183 HP ",2,"33 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Refocillation",46,2081,2,"231 HP ",2,"42 PP",'2000','2.8s','','','','') 
Lines[2063]=new linePT('Resurrection','Brings target back to life, and restores a portion of their health and power, and eliminates the experience penalty and con loss they would have suffered were they to have /released. (Note that con loss still applies when resurrected on a PvP server.)',2,0) 
Spells[idx++]=new spellPT("Revive",10,2063,2,"10%H 0%P ",2,"25%+ ",'1500','4.0s','','','','') 
Lines[2080]=new linePT('Minor Group Heal','Heals every member of the group for a small amount of health.',2,0) 
Spells[idx++]=new spellPT("Angelic Commendation",15,2080,2,"33 HP ",2,"17 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Angelic Benediction",25,2080,2,"53 HP ",2,"21 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Angelic Blessing",35,2080,2,"73 HP ",2,"24 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Angelic Approbation",45,2080,2,"93 HP ",2,"25 PP",'2000','3.0s','','','','') 
Lines[77082]=new linePT('Major Heal','Heals target.',77,0) 
Spells[idx++]=new spellPT("Major Restoration",5,77082,77,"55 HP ",77,"10 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Recuperation",8,77082,77,"82 HP ",77,"15 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Renewal",11,77082,77,"109 HP ",77,"20 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Revival",14,77082,77,"136 HP ",77,"24 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Resuscitation",18,77082,77,"172 HP ",77,"30 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Reviction",25,77082,77,"235 HP ",77,"39 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Refection",33,77082,77,"307 HP ",77,"48 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Refocillation",43,77082,77,"396 HP ",77,"58 PP",'2000','3.2s','','','','') 
Lines[77083]=new linePT('Cure Poison','Attempts to cure target of all poisons.',77,0) 
Spells[idx++]=new spellPT("Cure Poison",6,77083,77,"",77,"6% ",'1500','3.2s','','','','') 
Lines[77084]=new linePT('Cure Disease','Attempts to cure target of all disease.',77,0) 
Spells[idx++]=new spellPT("Cure Disease",7,77084,77,"",77,"6% ",'1500','3.2s','','','','') 
Lines[77094]=new linePT('Greater Heal','Heals target for a large amount of health.',77,0) 
Spells[idx++]=new spellPT("Greater Recuperation",10,77094,77,"145 HP ",77,"29 PP",'2000','3.6s','','','','') 
Spells[idx++]=new spellPT("Greater Renewal",14,77094,77,"197 HP ",77,"39 PP",'2000','3.5s','','','','') 
Spells[idx++]=new spellPT("Greater Revival",19,77094,77,"263 HP ",77,"52 PP",'2000','3.4s','','','','') 
Spells[idx++]=new spellPT("Greater Resuscitation",25,77094,77,"341 HP ",77,"68 PP",'2000','3.3s','','','','') 
Spells[idx++]=new spellPT("Greater Reviction",32,77094,77,"432 HP ",77,"86 PP",'2000','3.1s','','','','') 
Spells[idx++]=new spellPT("Greater Refection",41,77094,77,"549 HP ",77,"109 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Greater Refocillation",50,77094,77,"667 HP ",77,"133 PP",'2000','2.8s','','','','') 
Lines[77096]=new linePT('Heal (Instant)','Caster immediately heals target for a given percentage of the caster\'s maximum health. Can be cast during combat.',77,0) 
Spells[idx++]=new spellPT("Gift of the Heavens",11,77096,77,"40% HP ",77,"",'2000','','','900s','','') 
Spells[idx++]=new spellPT("Boon of the Heavens",21,77096,77,"60% HP ",77,"",'2000','','','900s','','') 
Spells[idx++]=new spellPT("Favor of the Heavens",33,77096,77,"80% HP ",77,"",'2000','','','900s','','') 
Spells[idx++]=new spellPT("Blessing of the Heavens",42,77096,77,"100% HP ",77,"",'2000','','','900s','','') 
Lines[77063]=new linePT('Resurrection','Brings target back to life, and restores a portion of their health and power, and eliminates the experience penalty and con loss they would have suffered were they to have /released. (Note that con loss still applies when resurrected on a PvP server.)',77,0) 
Spells[idx++]=new spellPT("Raise Fallen",15,77063,77,"10%H 10%P ",77,"25%+ ",'1500','4.0s','','','','') 
Spells[idx++]=new spellPT("Reincarnate",24,77063,77,"25%H 25%P ",77,"25%+ ",'1500','4.0s','','','','') 
Spells[idx++]=new spellPT("Resurrection",40,77063,77,"50%H 50%P ",77,"25%+ ",'1500','4.0s','','','','') 
Lines[77095]=new linePT('Group Heal','Heals every member of the group.',77,0) 
Spells[idx++]=new spellPT("Heaven's Commendation",15,77095,77,"97 HP ",77,"42 PP",'2000','3.7s','','','','') 
Spells[idx++]=new spellPT("Heaven's Benediction",26,77095,77,"163 HP ",77,"65 PP",'2000','3.5s','','','','') 
Spells[idx++]=new spellPT("Heaven's Blessing",36,77095,77,"223 HP ",77,"82 PP",'2000','3.3s','','','','') 
Spells[idx++]=new spellPT("Heaven's Approbation",46,77095,77,"283 HP ",77,"97 PP",'2000','3.1s','','','','') 
Lines[77097]=new linePT('Group Heal (Instant)','Caster immediately heals all of his/her group members for a given percentage of the caster\'s maximum health. Can be cast during combat.',77,0) 
Spells[idx++]=new spellPT("Beautified Remedy",23,77097,77,"50% HP ",77,"",'2000','','','1200s','','') 
Spells[idx++]=new spellPT("Glorious Remedy",35,77097,77,"75% HP ",77,"",'2000','','','1200s','','') 
Spells[idx++]=new spellPT("Magnificent Remedy",45,77097,77,"100% HP ",77,"",'2000','','','1200s','','') 
Lines[77098]=new linePT('Spreadheal (Self)','Specialized healing spell that intelligently heals the most damaged members of the group. Useful when there\'s no time to determine who needs help first.',77,0) 
Spells[idx++]=new spellPT("Gift of the Host",30,77098,77,"187 HP ",77,"79 PP",'2000','3.5s','','','','') 
Spells[idx++]=new spellPT("Boon of the Host",39,77098,77,"241 HP ",77,"95 PP",'2000','3.5s','','','','') 
Spells[idx++]=new spellPT("Blessing of the Host",48,77098,77,"295 HP ",77,"110 PP",'2000','3.5s','','','','') 
Lines[77099]=new linePT('Cure Nearsight','Removes the given condition from the target. This spell\'s cast time is not influenced by stats.',77,0) 
Spells[idx++]=new spellPT("Cure Nearsight I",20,77099,77,'',77,'30 PP','1500','6.0s','','','','') 
Spells[idx++]=new spellPT("Cure Nearsight II",35,77099,77,'',77,'30 PP','1500','3.5s','','','','')
Lines[3003]=new linePT('Shield','Adds to the recipient\'s Armor Factor (AF), resulting in better protection against some forms of attack. It acts in addition to any armor the target is wearing.',3,0) 
Spells[idx++]=new spellPT("Aura of Shielding",2,3003,3,"12 AF ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Greater Aura of Shielding",5,3003,3,"15 AF ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Aura of Defense",10,3003,3,"20 AF ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Greater Aura of Defense",16,3003,3,"26 AF ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Aura of Guarding",22,3003,3,"32 AF ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Greater Aura of Guarding",31,3003,3,"41 AF ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Aura of Deflection",42,3003,3,"52 AF ",3,"",'1000','3.0s','','','','') 
Lines[3037]=new linePT('Buff (Strength)','Increases the target\'s Strength, which will cause it to be able to carry more weight, do more damage and be more effective in melee combat.',3,0) 
Spells[idx++]=new spellPT("Blessed Strength",3,3037,3,"+12 STR ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Blessed Potency",7,3037,3,"+15 STR ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Blessed Power",14,3037,3,"+21 STR ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Holy Strength",20,3037,3,"+26 STR ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Holy Potency",30,3037,3,"+34 STR ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Holy Power",41,3037,3,"+42 STR ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Holy Might",50,3037,3,"+50 STR ",3,"",'1000','3.0s','','','','') 
Lines[3085]=new linePT('Buff (Constitution)','Increases the target\'s Constitution, which will cause it to be able to take more damage.',3,0) 
Spells[idx++]=new spellPT("Blessing of Health",6,3085,3,"+14 CON ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Benison of Health",11,3085,3,"+18 CON ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Benediction of Health",15,3085,3,"+22 CON ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Blessing of Fortitude",24,3085,3,"+29 CON ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Benison of Fortitude",33,3085,3,"+36 CON ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Benediction of Fortitude",43,3085,3,"+44 CON ",3,"",'1000','3.0s','','','','') 
Lines[3039]=new linePT('Buff (Dexterity)','Increases the target\'s Dexterity, which will cause it to be more effective in melee combat and to cast spells faster.',3,0) 
Spells[idx++]=new spellPT("Blessed Dexterity",8,3039,3,"+16 DEX ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Blessed Agility",13,3039,3,"+20 DEX ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Blessed Coordination",19,3039,3,"+25 DEX ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Holy Dexterity",28,3039,3,"+32 DEX ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Holy Agility",38,3039,3,"+40 DEX ",3,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Holy Coordination",48,3039,3,"+48 DEX ",3,"",'1000','3.0s','','','','') 
Lines[79047]=new linePT('Buff (Strength/Constitution)','Increases the target\'s Strength and Constitution, which will cause it to  be able to carry more weight,  as well as to both do more damage in melee combat and to be able to take more damage before dying.',79,0) 
Spells[idx++]=new spellPT("Angelic Strength",5,79047,79,"+21 STR/CON ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Angelic Potency",9,79047,79,"+25 STR/CON ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Angelic Power",13,79047,79,"+30 STR/CON ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Archangel's Strength",19,79047,79,"+37 STR/CON ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Archangel's Potency",26,79047,79,"+45 STR/CON ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Archangel's Power",35,79047,79,"+57 STR/CON ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Archangel's Might",46,79047,79,"+69 STR/CON ",79,"",'1000','3.0s','','','','') 
Lines[79003]=new linePT('Shield','Adds to the recipient\'s Armor Factor (AF), resulting in better protection against some forms of attack. It acts in addition to any armor the target is wearing.',79,0) 
Spells[idx++]=new spellPT("Blessed Shield",6,79003,79,"20 AF ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Blessed Guard",12,79003,79,"27 AF ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Blessed Barrier",18,79003,79,"35 AF ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Holy Shield",25,79003,79,"43 AF ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Holy Guard",34,79003,79,"55 AF ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Holy Barrier",44,79003,79,"67 AF ",79,"",'1000','3.0s','','','','') 
Lines[79048]=new linePT('Buff (Dexterity/Quickness)','Increases the target\'s Dexterity and Quickness, which will cause it to do more damage and be more effective in melee combat as well as cast spells faster.',79,0) 
Spells[idx++]=new spellPT("Angelic Dexterity",7,79048,79,"+22 DEX/QUI ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Angelic Agility",14,79048,79,"+31 DEX/QUI ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Angelic Coordination",20,79048,79,"+39 DEX/QUI ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Dexterity of the Archangel",30,79048,79,"+51 DEX/QUI ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Agility of the Archangel",40,79048,79,"+63 DEX/QUI ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Coordination of the Archangel",50,79048,79,"+75 DEX/QUI ",79,"",'1000','3.0s','','','','') 
Lines[79089]=new linePT('Buff (Health Regeneration)','Target regenerates the given amount of health every \"tick\".',79,0) 
Spells[idx++]=new spellPT("Renewal",10,79089,79,"3 HP ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Regeneration",21,79089,79,"5 HP ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Revitalization",32,79089,79,"7 HP ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Heavenly Infusion",43,79089,79,"9 HP ",79,"",'1000','3.0s','','','','') 
Lines[79090]=new linePT('Buff (Acuity)','Increases the target\'s Intelligence, which will cause it to have a larger power pool and more effective spells. Castable on Wizards, Theurgists, Cabalists, Sorcerers, and Necromancers.',79,0) 
Spells[idx++]=new spellPT("Acuity of the Seer",11,79090,79,"+21 ACU ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Acuity of the Prophet",22,79090,79,"+32 ACU ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Acuity of the Sage",31,79090,79,"+41 ACU ",79,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Acuity of the Magi",42,79090,79,"+52 ACU ",79,"",'1000','3.0s','','','','') 
Lines[79100]=new linePT('Buff (Self, Combat Damage)','Target\'s melee damage per second (DPS) is increased.',79,0) 
Spells[idx++]=new spellPT("Refiner's Strength",17,79100,79,"+15% DPS ",79,"10 PP",'','2.0s','','','20m','') 
Spells[idx++]=new spellPT("Purifying Strength",28,79100,79,"+30% DPS ",79,"17 PP",'','2.0s','','','20m','') 
Spells[idx++]=new spellPT("Mercybringer",39,79100,79,"+50% DPS ",79,"25 PP",'','2.0s','','','20m','') 
Lines[79086]=new linePT('Buff (Group, Body Resistance)','Target\'s resistance to Body damage is increased.',79,0) 
Spells[idx++]=new spellPT("Shield of Health",23,79086,79,"+8 BODY ",79,"19 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Guard of Health",33,79086,79,"+16 BODY ",79,"27 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Barrier of Health",45,79086,79,"+24 BODY ",79,"38 PP",'1000','3.0s','','','20m','') 
Lines[79087]=new linePT('Buff (Group, Spirit Resistance)','Target\'s resistance to Spirit damage is increased.',79,0) 
Spells[idx++]=new spellPT("Spiritual Shield",24,79087,79,"+8 SPIRIT ",79,"19 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Spiritual Guard",36,79087,79,"+16 SPIRIT ",79,"30 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Spiritual Barrier",47,79087,79,"+24 SPIRIT ",79,"40 PP",'1000','3.0s','','','20m','') 
Lines[79088]=new linePT('Buff (Group, Energy Resistance)','Target\'s resistance to Energy damage is increased.',79,0) 
Spells[idx++]=new spellPT("Energy Shield",27,79088,79,"+8 ENERGY ",79,"22 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Energy Guard",37,79088,79,"+16 ENERGY ",79,"31 PP",'1000','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Energy Barrier",48,79088,79,"+24 ENERGY ",79,"41 PP",'1000','3.0s','','','20m','') 
Lines[79099]=new linePT('Defensive Proc (Group)','Spell that adds a small chance for your group\'s armor to \"proc\", or cast a given spell when struck in melee combat.',79,0) 
Spells[idx++]=new spellPT("Strength From Adversity",29,79099,79,"53 HP ",79,"18 PP",'1500','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Test of Faith",38,79099,79,"90 HP ",79,"24 PP",'1500','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Trial By Fire",49,79099,79,"126 HP ",79,"32 PP",'1500','3.0s','','','10m','') 
Lines[4002]=new linePT('Damage','',4,0) 
Spells[idx++]=new spellPT("Minor Smite",5,4002,4,"14  D ",4,"4 PP",'1500','3.0s','','','','Spirit') 
Spells[idx++]=new spellPT("Lesser Smite",7,4002,4,"20  D ",4,"5 PP",'1500','3.0s','','','','Spirit') 
Spells[idx++]=new spellPT("Smite",9,4002,4,"26  D ",4,"7 PP",'1500','3.0s','','','','Spirit') 
Spells[idx++]=new spellPT("Major Smite",13,4002,4,"34  D ",4,"9 PP",'1500','3.0s','','','','Spirit') 
Spells[idx++]=new spellPT("Greater Smite",16,4002,4,"43  D ",4,"11 PP",'1500','3.0s','','','','Spirit') 
Spells[idx++]=new spellPT("Minor Judgement",21,4002,4,"54  D ",4,"15 PP",'1500','3.0s','','','','Spirit') 
Spells[idx++]=new spellPT("Lesser Judgement",27,4002,4,"71  D ",4,"19 PP",'1500','3.0s','','','','Spirit') 
Spells[idx++]=new spellPT("Judgement",34,4002,4,"88  D ",4,"24 PP",'1500','3.0s','','','','Spirit') 
Spells[idx++]=new spellPT("Greater Judgement",42,4002,4,"108  D ",4,"30 PP",'1500','3.0s','','','','Spirit') 
Spells[idx++]=new spellPT("Supreme Judgement",50,4002,4,"127  D ",4,"37 PP",'1500','3.0s','','','','Spirit') 
Lines[4091]=new linePT('Stun','Target is stunned and cannot move or take any other action for the duration of the spell. Spells cast by friendly players, resistances to the spell\'s damage type, or realm abilities such as \"Purge\" and \"Determination\" can help to counteract the effect.',4,0) 
Spells[idx++]=new spellPT("Stunning Flash",6,4091,4,"3 sec ",4,"4 PP",'1500','2.5s','','','3s','Spirit') 
Spells[idx++]=new spellPT("Stunning Flare",15,4091,4,"5 sec ",4,"9 PP",'1500','2.5s','','','5s','Spirit') 
Spells[idx++]=new spellPT("Stunning Glare",26,4091,4,"6 sec ",4,"16 PP",'1500','2.5s','','','6s','Spirit') 
Spells[idx++]=new spellPT("Stunning Halo",36,4091,4,"8 sec ",4,"23 PP",'1500','2.5s','','','8s','Spirit') 
Spells[idx++]=new spellPT("Stunning Aura",46,4091,4,"9 sec ",4,"30 PP",'1500','2.5s','','','9s','Spirit') 
Lines[81004]=new linePT('Damage Add (Self)','Target does more damage with every melee weapon hit.',81,0) 
Spells[idx++]=new spellPT("Hammer of Faith",1,81004,81,"1 DPS ",81,"2 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Hammer of the Pious",4,81004,81,"1 DPS ",81,"3 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Hammer of Devotion",9,81004,81,"2 DPS ",81,"6 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Hammer of Grace",14,81004,81,"3 DPS ",81,"9 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Hammer of Justice",18,81004,81,"4 DPS ",81,"11 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Hammer of Zeal",24,81004,81,"5 DPS ",81,"15 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Hammer of the Martyr",31,81004,81,"7 DPS ",81,"19 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Hammer of Holiness",40,81004,81,"9 DPS ",81,"25 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Hammer of the Sanctified",50,81004,81,"11 DPS ",81,"33 PP",'','3.0s','','','20m','') 
Lines[81092]=new linePT('Mesmerise (PBAOE, Instant)','Target is stunned and cannot move or take any other action for the duration of the spell. Spells cast by friendly players, resistances to the spell\'s damage type, or realm abilities such as \"Purge\" and \"Determination\" can help to counteract the effect. If the target suffers any damage or other negative effect,  the spell will break. Spell affects everyone in the immediate radius of the caster, and the spell\'s effect may be more easily resisted further away from the spell\'s center. Spell can be cast during combat.',81,0) 
Spells[idx++]=new spellPT("Heavenly Visions",3,81092,81,"9 sec ",81,"3 PP",'','','200','300s','9s','Spirit') 
Spells[idx++]=new spellPT("Heavenly Images",7,81092,81,"11 sec ",81,"5 PP",'','','200','300s','11s','Spirit') 
Spells[idx++]=new spellPT("Heavenly Mirage",15,81092,81,"15 sec ",81,"9 PP",'','','200','300s','15s','Spirit') 
Spells[idx++]=new spellPT("Heavenly Dreams",23,81092,81,"19 sec ",81,"14 PP",'','','200','300s','19s','Spirit') 
Spells[idx++]=new spellPT("Heavenly Imagination",34,81092,81,"25 sec ",81,"21 PP",'','','200','300s','25s','Spirit') 
Spells[idx++]=new spellPT("Theophany",44,81092,81,"30 sec ",81,"28 PP",'','','200','300s','30s','Spirit') 
Lines[81002]=new linePT('Damage','',81,0) 
Spells[idx++]=new spellPT("Holy Anger",5,81002,81,"20  D ",81,"4 PP",'1500','3.0s','','','','Spirit') 
Spells[idx++]=new spellPT("Greater Holy Anger",8,81002,81,"32  D ",81,"6 PP",'1500','3.0s','','','','Spirit') 
Spells[idx++]=new spellPT("Holy Rage",12,81002,81,"44  D ",81,"9 PP",'1500','3.0s','','','','Spirit') 
Spells[idx++]=new spellPT("Greater Holy Rage",16,81002,81,"60  D ",81,"11 PP",'1500','3.0s','','','','Spirit') 
Spells[idx++]=new spellPT("Holy Wrath",21,81002,81,"75  D ",81,"15 PP",'1500','3.0s','','','','Spirit') 
Spells[idx++]=new spellPT("Greater Holy Wrath",27,81002,81,"99  D ",81,"19 PP",'1500','3.0s','','','','Spirit') 
Spells[idx++]=new spellPT("Holy Fury",35,81002,81,"145  D ",81,"25 PP",'1500','3.0s','','','','Spirit') 
Spells[idx++]=new spellPT("Greater Holy Fury",43,81002,81,"176  D ",81,"31 PP",'1500','3.0s','','','','Spirit') 
Lines[81075]=new linePT('Damage (PBAOE, Instant)','Target takes damage. Damage done is of the spell\'s given damage type. Spell affects everyone in the immediate radius of the caster, and does less damage the further away they are from the caster. Spell can be cast during combat.  PBAOE spells often put the caster in direct peril, but are among the most damaging spells in the game.',81,0) 
Spells[idx++]=new spellPT("Drive Evil",6,81075,81,"17  D ",81,"5 PP",'','','200','20s','','Spirit') 
Spells[idx++]=new spellPT("Repel Evil",11,81075,81,"28  D ",81,"9 PP",'','','200','20s','','Spirit') 
Spells[idx++]=new spellPT("Repulse Evil",17,81075,81,"45  D ",81,"14 PP",'','','200','20s','','Spirit') 
Spells[idx++]=new spellPT("Dispel Evil",22,81075,81,"57  D ",81,"18 PP",'','','200','20s','','Spirit') 
Spells[idx++]=new spellPT("Banish Evil",32,81075,81,"82  D ",81,"26 PP",'','','200','20s','','Spirit') 
Spells[idx++]=new spellPT("Annihilate Evil",42,81075,81,"118  D ",81,"35 PP",'','','200','20s','','Spirit') 
Lines[81019]=new linePT('Damage (AOE)','Target takes damage. Damage done is of the spell\'s given damage type. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius, and does less damage the further away targets are from the spell\'s center.',81,0) 
Spells[idx++]=new spellPT("Heavenly Strike",10,81019,81,"26  D ",81,"10 PP",'1500','4.0s','350','','','Spirit') 
Spells[idx++]=new spellPT("Heavenly Blast",20,81019,81,"51  D ",81,"21 PP",'1500','4.0s','350','','','Spirit') 
Spells[idx++]=new spellPT("Heavenly Bolt",30,81019,81,"76  D ",81,"31 PP",'1500','4.0s','350','','','Spirit') 
Spells[idx++]=new spellPT("Heavenly Force",39,81019,81,"102  D ",81,"42 PP",'1500','4.0s','350','','','Spirit') 
Spells[idx++]=new spellPT("Heavenly Detonation",49,81019,81,"127  D ",81,"54 PP",'1500','4.0s','350','','','Spirit') 
