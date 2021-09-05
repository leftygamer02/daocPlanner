sSTR[999]=0;sCON[999]=0;sDEX[999]=0;sQUI[999]=0;sINT[999]=0;sPIE[999]=0;sEMP[999]=0;sCHA[999]=0; 
sSTR[998]=0;sCON[998]=0;sDEX[998]=0;sQUI[998]=0;sINT[998]=0;sPIE[998]=0;sEMP[998]=0;sCHA[998]=0; 
sSTR[9]=60;sCON[9]=80;sDEX[9]=50;sQUI[9]=50;sINT[9]=60;sPIE[9]=60;sEMP[9]=60;sCHA[9]=60; 
sSTR[18]=55;sCON[18]=55;sDEX[18]=55;sQUI[18]=60;sINT[18]=60;sPIE[18]=75;sEMP[18]=60;sCHA[18]=60; 
sSTR[11]=70;sCON[11]=70;sDEX[11]=50;sQUI[11]=50;sINT[11]=60;sPIE[11]=60;sEMP[11]=60;sCHA[11]=60; 

Abilities = new Array(13)		
Abilities[1]=new abilityPT("Mending",0,65,2,1,0,0)
Abilities[2]=new abilityPT("Augmentation",0,68,2,1,0,0)
Abilities[3]=new abilityPT("Staff",0,83,5,0,0,0)
Abilities[4]=new abilityPT("Cloth Armor",0,99,7,0,0,0)
Abilities[5]=new abilityPT("Leather Armor",0,100,7,0,0,0)
Abilities[6]=new abilityPT("Shields (Small)",0,102,7,0,0,0)
Abilities[7]=new abilityPT("Hammer",0,137,5,0,0,0)
Abilities[8]=new abilityPT("Mending Spec.",5,66,3,0,65,0)
Abilities[9]=new abilityPT("Augmentation Spec.",5,69,3,0,68,0)
Abilities[10]=new abilityPT("Pacification",5,71,2,1,0,0)
Abilities[11]=new abilityPT("Pacification Spec.",5,72,3,0,71,0)
Abilities[12]=new abilityPT("Studded Armor",10,101,7,0,0,0)
Abilities[13]=new abilityPT("Chain Armor",20,104,7,0,0,0)
	
//Styles = new Array(0);

Spells = new Array();

Lines = new Array();

var idx=1;
Lines[65079]=new linePT('Minor Heal','Heals target for a very small amount of health. Casts quickly and uses little power.',65,0) 
Spells[idx++]=new spellPT("Minor Mending",1,65079,65,"6 HP ",65,"1 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Refinement",3,65079,65,"11 HP ",65,"2 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Improvement",5,65079,65,"16 HP ",65,"3 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Reconstitution",8,65079,65,"23 HP ",65,"4 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Amelioration",11,65079,65,"31 HP ",65,"5 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Purification",14,65079,65,"38 HP ",65,"6 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Recovery",18,65079,65,"48 HP ",65,"8 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Reparation",23,65079,65,"60 HP ",65,"10 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Restoration",29,65079,65,"75 HP ",65,"12 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Reconstruction",37,65079,65,"95 HP ",65,"14 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Emendation",47,65079,65,"119 HP ",65,"17 PP",'2000','2.2s','','','','') 
Lines[65081]=new linePT('Heal','Heals target for a small amount of health. Uses little power.',65,0) 
Spells[idx++]=new spellPT("Refinement",4,65081,65,"26 HP ",65,"4 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Improvement",6,65081,65,"36 HP ",65,"6 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Reconstitution",9,65081,65,"50 HP ",65,"9 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Amelioration",12,65081,65,"65 HP ",65,"11 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Purification",16,65081,65,"85 HP ",65,"15 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Recovery",21,65081,65,"109 HP ",65,"19 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Reparation",27,65081,65,"138 HP ",65,"25 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Restoration",31,65081,65,"158 HP ",65,"28 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Reconstruction",36,65081,65,"183 HP ",65,"33 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Emendation",46,65081,65,"231 HP ",65,"42 PP",'2000','2.8s','','','','') 
Lines[65063]=new linePT('Resurrection','Brings target back to life, and restores a portion of their health and power, and eliminates the experience penalty and con loss they would have suffered were they to have /released. (Note that con loss still applies when resurrected on a PvP server.)',65,0) 
Spells[idx++]=new spellPT("Arrival from Valhalla",10,65063,65,"10%H 0%P ",65,"25%+ ",'1500','4.0s','','','','') 
Lines[65080]=new linePT('Minor Group Heal','Heals every member of the group for a small amount of health.',65,0) 
Spells[idx++]=new spellPT("Group Reparation",15,65080,65,"33 HP ",65,"17 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Group Purification",25,65080,65,"53 HP ",65,"21 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Group Restoration",35,65080,65,"73 HP ",65,"24 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Group Emendation",45,65080,65,"93 HP ",65,"25 PP",'2000','3.0s','','','','') 
Lines[66082]=new linePT('Major Heal','Heals target.',66,0) 
Spells[idx++]=new spellPT("Major Reconstitution",5,66082,66,"55 HP ",66,"10 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Amelioration",8,66082,66,"82 HP ",66,"15 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Purification",11,66082,66,"109 HP ",66,"20 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Recovery",14,66082,66,"136 HP ",66,"24 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Reparation",18,66082,66,"172 HP ",66,"30 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Restoration",25,66082,66,"235 HP ",66,"39 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Reconstruction",33,66082,66,"307 HP ",66,"48 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Emendation",42,66082,66,"387 HP ",66,"57 PP",'2000','3.2s','','','','') 
Lines[66084]=new linePT('Cure Disease','Attempts to cure target of all disease.',66,0) 
Spells[idx++]=new spellPT("Cure Disease",6,66084,66,"",66,"6% ",'1500','3.2s','','','','') 
Lines[66083]=new linePT('Cure Poison','Attempts to cure target of all poisons.',66,0) 
Spells[idx++]=new spellPT("Cure Poison",7,66083,66,"",66,"6% ",'1500','3.2s','','','','') 
Lines[66094]=new linePT('Greater Heal','Heals target for a large amount of health.',66,0) 
Spells[idx++]=new spellPT("Greater Amelioration",10,66094,66,"145 HP ",66,"29 PP",'2000','3.6s','','','','') 
Spells[idx++]=new spellPT("Greater Purification",13,66094,66,"184 HP ",66,"36 PP",'2000','3.5s','','','','') 
Spells[idx++]=new spellPT("Greater Recovery",17,66094,66,"236 HP ",66,"47 PP",'2000','3.4s','','','','') 
Spells[idx++]=new spellPT("Greater Reparation",23,66094,66,"314 HP ",66,"62 PP",'2000','3.3s','','','','') 
Spells[idx++]=new spellPT("Greater Restoration",31,66094,66,"419 HP ",66,"83 PP",'2000','3.1s','','','','') 
Spells[idx++]=new spellPT("Greater Reconstruction",41,66094,66,"549 HP ",66,"109 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Greater Emendation",50,66094,66,"667 HP ",66,"133 PP",'2000','2.8s','','','','') 
Lines[66096]=new linePT('Heal (Instant)','Caster immediately heals target for a given percentage of the caster\'s maximum health. Can be cast during combat.',66,0) 
Spells[idx++]=new spellPT("Favor from Eir",12,66096,66,"33% HP ",66,"",'2000','','','900s','','') 
Spells[idx++]=new spellPT("Boon from Eir",22,66096,66,"55% HP ",66,"",'2000','','','900s','','') 
Spells[idx++]=new spellPT("Dispensation from Eir",32,66096,66,"75% HP ",66,"",'2000','','','900s','','') 
Spells[idx++]=new spellPT("Tribute from Eir",43,66096,66,"100% HP ",66,"",'2000','','','900s','','') 
Lines[66063]=new linePT('Resurrection','Brings target back to life, and restores a portion of their health and power, and eliminates the experience penalty and con loss they would have suffered were they to have /released. (Note that con loss still applies when resurrected on a PvP server.)',66,0) 
Spells[idx++]=new spellPT("Reception from Valhalla",15,66063,66,"30%H 10%P ",66,"25%+ ",'1500','4.0s','','','','') 
Spells[idx++]=new spellPT("Welcome from Valhalla",24,66063,66,"50%H 25%P ",66,"25%+ ",'1500','4.0s','','','','') 
Spells[idx++]=new spellPT("Remigration from Valhalla",40,66063,66,"100%H 50%P ",66,"25%+ ",'1500','4.0s','','','','') 
Lines[66095]=new linePT('Group Heal','Heals every member of the group.',66,0) 
Spells[idx++]=new spellPT("Favor of Battle",16,66095,66,"103 HP ",66,"44 PP",'2000','3.7s','','','','') 
Spells[idx++]=new spellPT("Boon of Battle",26,66095,66,"163 HP ",66,"65 PP",'2000','3.5s','','','','') 
Spells[idx++]=new spellPT("Dispensation of Battle",36,66095,66,"223 HP ",66,"82 PP",'2000','3.3s','','','','') 
Spells[idx++]=new spellPT("Tribute of Battle",46,66095,66,"283 HP ",66,"97 PP",'2000','3.1s','','','','') 
Lines[66097]=new linePT('Group Heal (Instant)','Caster immediately heals all of his/her group members for a given percentage of the caster\'s maximum health. Can be cast during combat.',66,0) 
Spells[idx++]=new spellPT("Eir's Glorious Touch",21,66097,66,"50% HP ",66,"",'2000','','','1200s','','') 
Spells[idx++]=new spellPT("Eir's Magnificent Touch",35,66097,66,"75% HP ",66,"",'2000','','','1200s','','') 
Spells[idx++]=new spellPT("Eir's Heavenly Touch",45,66097,66,"100% HP ",66,"",'2000','','','1200s','','') 
Lines[66098]=new linePT('Spreadheal (Self)','Specialized healing spell that intelligently heals the most damaged members of the group. Useful when there\'s no time to determine who needs help first.',66,0) 
Spells[idx++]=new spellPT("Ancestor's Gift",30,66098,66,"187 HP ",66,"79 PP",'','3.5s','','','','') 
Spells[idx++]=new spellPT("Ancestor's Favor",39,66098,66,"241 HP ",66,"95 PP",'','3.5s','','','','') 
Spells[idx++]=new spellPT("Ancestor's Boon",48,66098,66,"295 HP ",66,"110 PP",'','3.5s','','','','') 
Lines[66099]=new linePT('Cure Nearsight','Attempts to cure target of nearsight.',66,0) 
Spells[idx++]=new spellPT("Cure Nearsight I",25,66099,66,'',66,'','1500','6.0s','','','','') 
Spells[idx++]=new spellPT("Cure Nearsight II",35,66099,66,'',66,'','1500','3.5s','','','','') 
Lines[68003]=new linePT('Shield','Adds to the recipient\'s Armor Factor (AF), resulting in better protection against some forms of attack. It acts in addition to any armor the target is wearing.',68,0) 
Spells[idx++]=new spellPT("Guardian's Lesser Ward",1,68003,68,"11 AF ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Guardian's Ward",5,68003,68,"15 AF ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Guardian's Lesser Shield",10,68003,68,"20 AF ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Guardian's Shield",16,68003,68,"26 AF ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Guardian's Lesser Barrier",22,68003,68,"32 AF ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Guardian's Barrier",31,68003,68,"41 AF ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Guardian's Lesser Protection",42,68003,68,"52 AF ",68,"",'1000','3.0s','','','','') 
Lines[68037]=new linePT('Buff (Strength)','Increases the target\'s Strength, which will cause it to be able to carry more weight, do more damage and be more effective in melee combat.',68,0) 
Spells[idx++]=new spellPT("Lesser Strength of the Viking",2,68037,68,"+11 STR ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Strength of the Viking",4,68037,68,"+13 STR ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Lesser Vigor of the Viking",8,68037,68,"+16 STR ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Vigor of the Viking",13,68037,68,"+20 STR ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Lesser Power of the Viking",18,68037,68,"+24 STR ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Power of the Viking",25,68037,68,"+30 STR ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Lesser Might of the Viking",33,68037,68,"+36 STR ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Might of the Viking",43,68037,68,"+44 STR ",68,"",'1000','3.0s','','','','') 
Lines[68085]=new linePT('Buff (Constitution)','Increases the target\'s Constitution, which will cause it to be able to take more damage.',68,0) 
Spells[idx++]=new spellPT("Augment Health",3,68085,68,"+12 CON ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Increase Health",9,68085,68,"+17 CON ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Enhance Health",14,68085,68,"+21 CON ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Strengthen Health",20,68085,68,"+26 CON ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Exaggerate Health",29,68085,68,"+33 CON ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Intensify Health",38,68085,68,"+40 CON ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Amplify Health",47,68085,68,"+47 CON ",68,"",'1000','3.0s','','','','') 
Lines[68039]=new linePT('Buff (Dexterity)','Increases the target\'s Dexterity, which will cause it to be more effective in melee combat and to cast spells faster.',68,0) 
Spells[idx++]=new spellPT("Minor Evasion",11,68039,68,"+18 DEX ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Lesser Evasion",15,68039,68,"+22 DEX ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Evasion",21,68039,68,"+26 DEX ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Major Evasion",28,68039,68,"+32 DEX ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Greater Evasion",37,68039,68,"+39 DEX ",68,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Superior Evasion",48,68039,68,"+48 DEX ",68,"",'1000','3.0s','','','','') 
Lines[69004]=new linePT('Damage Add (Self)','Target does more damage with every melee weapon hit.',69,0) 
Spells[idx++]=new spellPT("Augmented Blow",1,69004,69,"1 DPS ",69,"",'','3.0s','','','','') 
Spells[idx++]=new spellPT("Increased Blow",4,69004,69,"1 DPS ",69,"",'','3.0s','','','','') 
Spells[idx++]=new spellPT("Enhanced Blow",7,69004,69,"2 DPS ",69,"",'','3.0s','','','','') 
Spells[idx++]=new spellPT("Strengthen Blow",11,69004,69,"3 DPS ",69,"",'','3.0s','','','','') 
Spells[idx++]=new spellPT("Exaggerated Blow",16,69004,69,"4 DPS ",69,"",'','3.0s','','','','') 
Spells[idx++]=new spellPT("Intensified Blow",22,69004,69,"5 DPS ",69,"",'','3.0s','','','','') 
Spells[idx++]=new spellPT("Amplified Blow",30,69004,69,"7 DPS ",69,"",'','3.0s','','','','') 
Spells[idx++]=new spellPT("Burgeoned Blow",39,69004,69,"9 DPS ",69,"",'','3.0s','','','','') 
Spells[idx++]=new spellPT("Exalted Blow",49,69004,69,"11 DPS ",69,"",'','3.0s','','','','') 
Lines[69040]=new linePT('Buff (Combat Speed)','Increases the target\'s combat speed, which will cause it to be considerably more effective in melee combat.',69,0) 
Spells[idx++]=new spellPT("Lesser Purity of Attack",2,69040,69,"8% Hasted ",69,"",'1000','3.5s','','','','') 
Spells[idx++]=new spellPT("Purity of Attack",10,69040,69,"10% Hasted ",69,"",'1000','3.5s','','','','') 
Spells[idx++]=new spellPT("Lesser Purity of Offense",20,69040,69,"12% Hasted ",69,"",'1000','3.5s','','','','') 
Spells[idx++]=new spellPT("Purity of Offense",31,69040,69,"15% Hasted ",69,"",'1000','3.5s','','','','') 
Spells[idx++]=new spellPT("Lesser Purity of Aggression",40,69040,69,"17% Hasted ",69,"",'1000','3.5s','','','','') 
Spells[idx++]=new spellPT("Purity of Aggression",50,69040,69,"20% Hasted ",69,"",'1000','3.5s','','','','') 
Lines[69053]=new linePT('Speed (Group, Chant)','The movement speed of the caster and his/her group is increased. Does not work in combat.',69,0) 
Spells[idx++]=new spellPT("Ease of Movement",5,69053,69,"+123% SPEED ",69,"",'2000','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Flow of Movement",15,69053,69,"+131% SPEED ",69,"",'2000','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Grace of Movement",25,69053,69,"+138% SPEED ",69,"",'2000','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Purity of Movement",35,69053,69,"+146% SPEED ",69,"",'2000','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Elegance of Movement",45,69053,69,"+153% SPEED ",69,"",'2000','3.0s','','','6s (pulse)','') 
Lines[69047]=new linePT('Buff (Self, Strength/Constitution)','Increases the target\'s Strength and Constitution, which will cause it to  be able to carry more weight,  as well as to both do more damage in melee combat and to be able to take more damage before dying.',69,0) 
Spells[idx++]=new spellPT("Asgard's Lesser Strength",8,69047,69,"+24 STR/CON ",69,"10% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Asgard's Strength",19,69047,69,"+37 STR/CON ",69,"10% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Asgard's Lesser Potence",28,69047,69,"+48 STR/CON ",69,"10% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Asgard's Potence",34,69047,69,"+55 STR/CON ",69,"10% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Asgard's Lesser Might",42,69047,69,"+64 STR/CON ",69,"10% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Asgard's Might",49,69047,69,"+73 STR/CON ",69,"10% ",'','3.0s','','','20m','') 
Lines[69006]=new linePT('Damage Shield (Self)','Anyone that hits the target with a melee attack is damaged by this protective shield.',69,0) 
Spells[idx++]=new spellPT("Asgard's Lesser Defense",13,69006,69,"3 DPS ",69,"10% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Asgard's Defense",21,69006,69,"5 DPS ",69,"10% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Asgard's Protection",29,69006,69,"6 DPS ",69,"10% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Asgard's Deflection",43,69006,69,"9 DPS ",69,"10% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Asgard's Greater Deflection",48,69006,69,"10 DPS ",69,"10% ",'','3.0s','','','20m','') 
Lines[69172]=new linePT('Buff (Combat Speed, Group)','Increases the caster\'s group\'s combat speed for a short duration, which will cause all members to be considerably more effective in melee combat.',69,0) 
Spells[idx++]=new spellPT("Celerity",18,69172,69,"24% Haste ",69,"17 PP",'1000','3.0s','','','20s','') 
Spells[idx++]=new spellPT("Enhanced Celerity",26,69172,69,"28% Haste ",69,"24 PP",'1000','3.0s','','','20s','') 
Spells[idx++]=new spellPT("Amplified Celerity",32,69172,69,"31% Haste ",69,"30 PP",'1000','3.0s','','','20s','') 
Spells[idx++]=new spellPT("Pure Celerity",44,69172,69,"37% Haste ",69,"42 PP",'1000','3.0s','','','20s','') 
Lines[69086]=new linePT('Buff (Group, Body Resistance)','Target\'s resistance to Body damage is increased.',69,0) 
Spells[idx++]=new spellPT("Gods' Health",23,69086,69,"+8 BODY ",69,"19 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Gods' Vigor",33,69086,69,"+16 BODY ",69,"27 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Gods' Potency",46,69086,69,"+24 BODY ",69,"39 PP",'1000','3.0s','','','10m','') 
Lines[69087]=new linePT('Buff (Group, Spirit Resistance)','Target\'s resistance to Spirit damage is increased.',69,0) 
Spells[idx++]=new spellPT("Gods' Drive",24,69087,69,"+8 SPIRIT ",69,"19 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Gods' Will",36,69087,69,"+16 SPIRIT ",69,"30 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Gods' Spirit",47,69087,69,"+24 SPIRIT ",69,"40 PP",'1000','3.0s','','','10m','') 
Lines[69088]=new linePT('Buff (Group, Energy Resistance)','Target\'s resistance to Energy damage is increased.',69,0) 
Spells[idx++]=new spellPT("Thunder Affinity",27,69088,69,"+8 ENERGY ",69,"22 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Storm Affinity",37,69088,69,"+16 ENERGY ",69,"31 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Lightning Affinity",48,69088,69,"+24 ENERGY ",69,"41 PP",'1000','3.0s','','','10m','') 
Lines[71050]=new linePT('Mesmerise','Target is stunned and cannot move or take any other action for the duration of the spell. Spells cast by friendly players, resistances to the spell\'s damage type, or realm abilities such as \"Purge\" and \"Determination\" can help to counteract the effect. If the target suffers any damage or other negative effect, the spell will break.',71,0) 
Spells[idx++]=new spellPT("Lull",1,71050,71,"16 sec ",71,"2 PP",'1500','2.5s','','','16s','Body') 
Spells[idx++]=new spellPT("Greater Lull",5,71050,71,"21 sec ",71,"4 PP",'1500','2.5s','','','21s','Body') 
Spells[idx++]=new spellPT("Diversion",10,71050,71,"28 sec ",71,"6 PP",'1500','2.5s','','','28s','Body') 
Spells[idx++]=new spellPT("Greater Diversion",16,71050,71,"35 sec ",71,"10 PP",'1500','2.5s','','','35s','Body') 
Spells[idx++]=new spellPT("Sedate",22,71050,71,"43 sec ",71,"13 PP",'1500','2.5s','','','43s','Body') 
Spells[idx++]=new spellPT("Greater Sedation",29,71050,71,"52 sec ",71,"18 PP",'1500','2.5s','','','52s','Body') 
Spells[idx++]=new spellPT("Entrance",36,71050,71,"61 sec ",71,"23 PP",'1500','2.5s','','','61s','Body') 
Spells[idx++]=new spellPT("Greater Entrancement",43,71050,71,"70 sec ",71,"27 PP",'1500','2.5s','','','70s','Body') 
Lines[71091]=new linePT('Stun','Target is stunned and cannot move or take any other action for the duration of the spell. Spells cast by friendly players, resistances to the spell\'s damage type, or realm abilities such as \"Purge\" and \"Determination\" can help to counteract the effect.',71,0) 
Spells[idx++]=new spellPT("Halt Aggression",2,71091,71,"6 sec ",71,"2 PP",'1500','2.5s','','','6s','Body') 
Spells[idx++]=new spellPT("Halt Hostility",11,71091,71,"7 sec ",71,"7 PP",'1500','2.5s','','','7s','Body') 
Spells[idx++]=new spellPT("Halt Attack",20,71091,71,"8 sec ",71,"12 PP",'1500','2.5s','','','8s','Body') 
Spells[idx++]=new spellPT("Halt Offense",32,71091,71,"9 sec ",71,"20 PP",'1500','2.5s','','','9s','Body') 
Spells[idx++]=new spellPT("Halt Rally",42,71091,71,"10 sec ",71,"27 PP",'1500','2.5s','','','10s','Body') 
Spells[idx++]=new spellPT("Halt Invasion",50,71091,71,"11 sec ",71,"33 PP",'1500','2.5s','','','11s','Body') 
Lines[71051]=new linePT('Amnesia','Chance that the target\'s \'hate list\' (which controls which target a monster will attack next) is cleared; it becomes then very easy for other group members to \'taunt\' or distract. This will cause player characters to lose their selected target.',71,0) 
Spells[idx++]=new spellPT("Wake Senseless",4,71051,71,"70% ",71,"3 PP",'2300','2.0s','','','','') 
Lines[71052]=new linePT('Amnesia (AOE)','Chance that the target\'s \'hate list\' (which controls which target a monster will attack next) is cleared; it becomes then very easy for other group members to \'taunt\' or distract. This will cause player characters to lose their selected target. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius.',71,0) 
Spells[idx++]=new spellPT("Wake Forgetful",14,71052,71,"77% ",71,"9 PP",'2300','2.0s','100','','','') 
Spells[idx++]=new spellPT("Wake Ignorant",24,71052,71,"84% ",71,"15 PP",'2300','2.0s','175','','','') 
Spells[idx++]=new spellPT("Wake Mindless",34,71052,71,"91% ",71,"21 PP",'2300','2.0s','250','','','') 
Spells[idx++]=new spellPT("Wake Oblivious",44,71052,71,"100% ",71,"28 PP",'2300','2.0s','325','','','') 
Lines[71054]=new linePT('Remove Mesmerisation','Target is no longer mesmerised.',71,0) 
Spells[idx++]=new spellPT("Cleanse Mind",23,71054,71,"",71,"6% ",'1500','3.0s','','','','') 
Lines[72173]=new linePT('Stun (AOE)','Target is stunned and cannot move or take any other action for the duration of the spell. Spells cast by friendly players , resistances to the spell\'s damage type,or realm abilities such as \"Purge\" and \"Determination\" can help to counteract the effect. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius.  The spell\'s effect may be more easily resisted further away from the spell\'s center.',72,0) 
Spells[idx++]=new spellPT("Suspend Charge",1,72173,72,"6 sec ",72,"2 PP",'1500','2.5s','250','','6s','Body') 
Spells[idx++]=new spellPT("Halt Charge",11,72173,72,"7 sec ",72,"7 PP",'1500','2.5s','250','','7s','Body') 
Spells[idx++]=new spellPT("Interrupt Charge",32,72173,72,"9 sec ",72,"20 PP",'1500','2.5s','250','','9s','Body') 
Spells[idx++]=new spellPT("Nullify Charge",42,72173,72,"10 sec ",72,"27 PP",'1500','2.5s','250','','10s','Body') 
Spells[idx++]=new spellPT("Cease Charge",50,72173,72,"11 sec ",72,"33 PP",'1500','2.5s','250','','11s','Body') 
Lines[72071]=new linePT('Stun (Instant)','Target is stunned and cannot move or take any other action for the duration of the spell. Spells cast by friendly players, resistances to the spell\'s damage type, or realm abilities such as \"Purge\" and \"Determination\" can help to counteract the effect. Spell can be cast during combat.',72,0) 
Spells[idx++]=new spellPT("Paralyzing Glance",28,72071,72,"8 sec ",72,"17 PP",'1500','','','600s','8s','Body') 
Lines[72174]=new linePT('Stun (AOE, Instant)','Target is stunned and cannot move or take any other action for the duration of the spell. Spells cast by friendly players, resistances to the spell\'s damage type, or realm abilities such as \"Purge\" and \"Determination\" can help to counteract the effect. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius.  The spell\'s effect may be more easily resisted further away from the spell\'s center. Spell can be cast during combat.',72,0) 
Spells[idx++]=new spellPT("Paralyzing Glare",38,72174,72,"9 sec ",72,"24 PP",'1500','','150','600s','9s','Body') 
Spells[idx++]=new spellPT("Paralizing Gaze",48,72174,72,"10 sec ",72,"31 PP",'1500','','300','600s','10s','Body') 
Lines[72001]=new linePT('Debuff (Combat Speed)','Reduces the target\'s combat speed, which will cause it to be considerably less effective in melee combat.',72,0) 
Spells[idx++]=new spellPT("Hinder Spirit",2,72001,72,"-16% ",72,"2 PP",'1500','','','5s','20s','Body') 
Spells[idx++]=new spellPT("Harry Spirit",9,72001,72,"-19% ",72,"6 PP",'1500','','','5s','20s','Body') 
Spells[idx++]=new spellPT("Restrain Spirit",21,72001,72,"-25% ",72,"13 PP",'1500','','','5s','20s','Body') 
Spells[idx++]=new spellPT("Obstruct Spirit",31,72001,72,"-30% ",72,"19 PP",'1500','','','5s','20s','Body') 
Spells[idx++]=new spellPT("Block Spirit",40,72001,72,"-35% ",72,"25 PP",'1500','','','5s','20s','Body') 
Spells[idx++]=new spellPT("Impede Spirit",49,72001,72,"-39% ",72,"32 PP",'1500','','','5s','20s','Body') 
Lines[72012]=new linePT('Root','Target is effectively immobilized (loses 99% of possible movement speed) for the duration of the spell. If any damage is done to the target, the spell will break.',72,0) 
Spells[idx++]=new spellPT("Deny Movement",3,72012,72,"99% 9 sec ",72,"2 PP",'1500','2.5s','','','9s','Body') 
Spells[idx++]=new spellPT("Repel Movement",7,72012,72,"99% 14 sec ",72,"4 PP",'1500','2.5s','','','14s','Body') 
Spells[idx++]=new spellPT("Reject Movement",12,72012,72,"99% 21 sec ",72,"6 PP",'1500','2.5s','','','21s','Body') 
Spells[idx++]=new spellPT("Negate Movement",18,72012,72,"99% 30 sec ",72,"8 PP",'1500','2.5s','','','30s','Body') 
Spells[idx++]=new spellPT("Deny Advancement",24,72012,72,"99% 38 sec ",72,"12 PP",'1500','2.5s','','','38s','Body') 
Spells[idx++]=new spellPT("Repel Advancement",30,72012,72,"99% 47 sec ",72,"15 PP",'1500','2.5s','','','47s','Body') 
Spells[idx++]=new spellPT("Reject Advancement",37,72012,72,"99% 56 sec ",72,"18 PP",'1500','2.5s','','','56s','Body') 
Spells[idx++]=new spellPT("Negate Advancement",46,72012,72,"99% 69 sec ",72,"24 PP",'1500','2.5s','','','69s','Body') 
Lines[72058]=new linePT('Buff (Power Regeneration)','Target\'s rate of power regeneration is increased, reducing downtime between battles.',72,0) 
Spells[idx++]=new spellPT("Purity of Mind",4,72058,72,"1 PP Regen ",72,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Purity of Thought",15,72058,72,"2 PP Regen ",72,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Purity of Intellect",25,72058,72,"3 PP Regen ",72,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Purity of Contemplation",35,72058,72,"4 PP Regen ",72,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Purity of Meditation",45,72058,72,"5 PP Regen ",72,"",'1000','3.0s','','','','') 
Lines[72057]=new linePT('Mesmerise (AOE)','Target is stunned and cannot move or take any other action for the duration of the spell. Spells cast by friendly players, resistances to the spell\'s damage type, or realm abilities such as \"Purge\" and \"Determination\" can help to counteract the effect. If the target suffers any damage or other negative effect, the spell will break. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius. The spell\'s effect may be more easily resisted further away from the spell\'s center.',72,0) 
Spells[idx++]=new spellPT("Allay Area",6,72057,72,"16 sec ",72,"4 PP",'1500','3.0s','350','','16s','Body') 
Spells[idx++]=new spellPT("Pacify Area",13,72057,72,"25 sec ",72,"8 PP",'1500','3.0s','350','','25s','Body') 
Spells[idx++]=new spellPT("Conciliate Area",20,72057,72,"34 sec ",72,"12 PP",'1500','3.0s','350','','34s','Body') 
Spells[idx++]=new spellPT("Placate Area",27,72057,72,"43 sec ",72,"17 PP",'1500','3.0s','350','','43s','Body') 
Spells[idx++]=new spellPT("Harmonize Area",34,72057,72,"52 sec ",72,"21 PP",'1500','3.0s','350','','52s','Body') 
Spells[idx++]=new spellPT("Tranquilize Area",44,72057,72,"65 sec ",72,"28 PP",'1500','3.0s','350','','65s','Body') 
Lines[72142]=new linePT('Mesmerise (Instant)','Target is stunned and cannot move or take any other action for the duration of the spell. Spells cast by friendly players, resistances to the spell\'s damage type, or realm abilities such as \"Purge\" and \"Determination\" can help to counteract the effect. If the target suffers any damage or other negative effect, the spell will break. This spell can be cast while in combat.',72,0) 
Spells[idx++]=new spellPT("Pacifying Glance",29,72142,72,"22 sec ",72,"18 PP",'1500','','','600s','22s','Body') 
Lines[72143]=new linePT('Mesmerise (AOE, Instant)','Target is stunned and cannot move or take any other action for the duration of the spell. Spells cast by friendly players, resistances to the spell\'s damage type, or realm abilities such as \"Purge\" and \"Determination\" can help to counteract the effect. If the target suffers any damage or other negative effect,  the spell will break. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius. The spell\'s effect may be more easily resisted further away from the spell\'s center. Spell can be cast during combat.',72,0) 
Spells[idx++]=new spellPT("Pacifying Glare",36,72143,72,"26 sec ",72,"23 PP",'1500','','150','600s','26s','Body') 
Spells[idx++]=new spellPT("Pacifying Gaze",47,72143,72,"31 sec ",72,"30 PP",'1500','','300','600s','31s','Body') 
