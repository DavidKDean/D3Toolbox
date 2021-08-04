// LegGem Data
function loadGem(gem, level, patch) {
	var currentpatch = 19;
	var title = $('.d3-tooltip h3');
	var prop0 = $('.d3-tooltip .property-0');
	var prop1 = $('.d3-tooltip .property-1');
	var prop2 = $('.d3-tooltip .property-2');
	var flavor = $('.d3-tooltip .property-3');
	var required =
		' <span class="required d3-color-red">(Requires Rank 25)</span>';
	var levelcap = $('.d3-tooltip .levelcap');
	var input = $('#gem');
	var cap = 0;
	var type = 'jewelry';

	if (patch == 'live') {
		patch = currentpatch;
	}

	/*============================== Start Legendary Gems ==============================*/
	/*Bane of the Powerful*/
	if (gem == '1') {
		title.html('Bane of the Powerful');
		flavor.html(
			'Few things embolden the spirit like a powerful enemy lying dead at your feet." -Andomiel Chu, Master Gem Cutter of Xiansai.'
		);
		coeff1 = 30;
		coeff2 = 1;
		total = coeff1 + coeff2 * level;
		total = total.toFixed(1);
		prop1.html(
			'Gain 20% increased damage for <span class="d3-color-blue"><span class="value">' +
				total +
				'</span></span> seconds after killing an elite pack.'
		);
		if (patch >= 6) {
			prop2.html(
				'Gain 15% increased damage versus elites and take 15% reduced damage from elites.'
			);
		} else {
			prop2.html('Increase damage against elites by 15.0%');
		}
	}
	/*Bane of the Stricken*/
	if (gem == '2') {
		title.html('Bane of the Stricken');
		flavor.html(
			'After the defeat of Malthael, Diadra the Scholar wandered the world. She studied the gem cutters of Xiansai, and brought their secrets back to Westmarch. Bane of the Stricken is the first gem to come out of her Westmarch workshop.'
		);
		coeff1 = 0.8;
		coeff2 = 0.01;
		total = coeff1 + coeff2 * level;
		total = total.toFixed(2);
		prop1.html(
			'Each attack you make against an enemy increases the damage it takes from your attacks by <span class="d3-color-blue"><span class="value">' +
				total +
				'%</span></span>.'
		);
		prop2.html('Gain 25% increased damage against bosses and Rift Guardians.');
	}
	/*Bane of the Trapped*/
	if (gem == '3') {
		title.html('Bane of the Trapped');
		flavor.html(
			'Lady Tu de Qing commissioned this gem from the workshops of Xiansai, saying "I prefer my targets asleep or drunk. Barring that, I\'ll take sluggish.'
		);
		coeff1 = 15;
		coeff2 = 0.3;
		total = coeff1 + coeff2 * level;
		total = total.toFixed(2);
		prop1.html(
			'Increase damage against enemies under the effects of control-impairing effects by<span class="d3-color-blue"> <span class="value">' +
				total +
				'%</span></span>.'
		);
		prop2.html(
			'Gain an aura that reduces the movement speed of enemies within 15 yards by 30%.'
		);
	}
	/*Boon of the Hoarder*/
	if (gem == '4') {
		title.html('Boon of the Hoarder');
		flavor.html(
			'"Rumors speak of a greedy Baroness who sends forth minions to collect treasure, equipped with gems to aid in gathering ever more. Boon of the Hoarder is said to be one of these precious gems." -Abd al-Hazir '
		);
		coeff1 = 25;
		coeff2 = 1.5;
		cap = 50;
		if (level > cap) {
			level = cap;
		}
		total = coeff1 + coeff2 * level;
		total = total.toFixed(1);
		prop1.html(
			'<span class="d3-color-blue"><span class="value">' +
				total +
				'%</span></span> chance on killing an enemy to cause an explosion of gold.'
		);
		prop2.html(
			'Gain 30% increased movement speed for 2 seconds after picking up gold.'
		);
	}
	/*Boyarsky's Chip*/
	if (gem == '5') {
		title.html("Boyarsky's Chip");
		flavor.html(
			'This fragment of a gem, called a chip, was discovered in an underground vault by old man Boyarsky, who fashioned it into the beautiful gem that it is today. It damages those who would damage its owner, and once inserted into a socket, it will never fall out.'
		);
		coeff1 = 16000;
		coeff2 = 800;
		total = coeff1 + coeff2 * level;
		total = commafy(total);
		prop1.html(
			'Adds <span class="d3-color-blue"><span class="value">' +
				total +
				'</span></span> Thorns.'
		);
		prop2.html(
			'Taunt the first enemy hit by your Primary skills for 2 seconds.'
		);
	}
	/*Enforcer*/
	if (gem == '6') {
		title.html('Enforcer');
		flavor.html(
			'This stone shares its powerful heart with those who serve the bearer.'
		);
		coeff1 = 15;
		coeff2 = 0.3;
		total = coeff1 + coeff2 * level;
		total = total.toFixed(2);
		prop1.html(
			'Increase the damage of your pets by <span class="d3-color-blue"><span class="value">' +
				total +
				'%</span></span>.'
		);
		if (patch >= 6) {
			prop2.html('Your pets take 90% less damage.');
		} else {
			prop2.html('Your pets take 25% less damage.');
		}
	}
	/*Esoteric Alteration*/
	if (gem == '7') {
		title.html('Esoteric Alteration');
		flavor.html(
			'Chuanyang of Xiansai designed a gem which would transport magical energies from their target to the workshop of his greatest competitor, Chau Thanh. He created several copies of this gem before he mysteriously disappeared.'
		);
		coeff1 = 10;
		coeff2 = 0.5;
		cap = 100;
		total = coeff1 + coeff2 * level;
		total = total.toFixed(1);
		prop1.html(
			'Gain <span class="d3-color-blue"><span class="value">' +
				total +
				'%</span></span> non-Physical damage reduction.'
		);
		prop2.html(
			'While below half Life, your resistances to Cold, Fire, Lightning, Poison, and Arcane are increased by 75%.'
		);
	}
	/*Gem of Ease*/
	if (gem == '8') {
		title.html('Gem of Ease');
		flavor.html(
			'This stone twinkles with low level light, inviting its bearer to dream of higher ambitions.'
		);
		type = 'weapons';
		coeff1 = 500;
		coeff2 = 50;
		total = coeff1 + coeff2 * level;
		prop1.html(
			'Monster kills grant <span class="d3-color-blue"><span class="value">+</span><span class="value">' +
				total +
				'</span></span> experience.'
		);
		prop2.html('Level Requirement Set to 1.');
	}
	/*Gem of Efficacious Toxin*/
	if (gem == '9') {
		title.html('Gem of Efficacious Toxin');
		flavor.html(
			'The poison mixers of Xiansai tell of a sickly gem cutter named Zhong Yi Rou who would come by their vats and scream "I\'ll put you all out of work someday! Yes I will!"'
		);
		coeff1 = 2000;
		coeff2 = 50;
		total = coeff1 + coeff2 * level;
		prop1.html(
			'Poison all enemies hit for <span class="d3-color-blue"><span class="value">' +
				total +
				'%</span></span> weapon damage over 10 seconds.'
		);
		if (patch >= 6) {
			prop2.html(
				'All enemies you poison take 10% increased damage from all sources and deal 10% less damage.'
			);
		} else {
			prop2.html(
				'All enemies you poison take 10% increased damage from all sources.'
			);
		}
	}
	/*Gogok of Swiftness*/
	if (gem == '10') {
		title.html('Gogok of Swiftness');
		flavor.html(
			'"You do not need to be stronger than your enemy, if you are faster of mind and body." -Queen Seondeok '
		);
		if (patch >= 6) {
			coeff1 = 0.5;
			coeff2 = 0.01;
			cap = 150;
			if (level > cap) {
				level = cap;
			}
			total = coeff1 + coeff2 * level;
			total = total.toFixed(2);
			prop1.html(
				'Gain Swiftness with every attack, increasing your Attack Speed by 1% and Dodge by <span class="d3-color-blue"><span class="value">' +
					total +
					'%</span></span> for 4 seconds. This effect stacks up to 15 times.'
			);
			prop2.html('Gain 1% Cooldown Reduction per stack of Swiftness.');
		} else {
			coeff1 = 50;
			coeff2 = 1;
			cap = 50;
			if (level > cap) {
				level = cap;
			}
			total = coeff1 + coeff2 * level;
			total = total.toFixed(1);
			prop1.html(
				'<span class="d3-color-blue"><span class="value">' +
					total +
					'%</span></span> chance on hit to gain Swiftness, increasing your Attack Speed by 1% for 4 seconds. This effect stacks up to 15 times.'
			);
			prop2.html('Gain 1% Cooldown Reduction per stack of Swiftness.');
		}
	}
	/*Iceblink*/
	if (gem == '11') {
		title.html('Iceblink');
		flavor.html(
			'Adventurers used to speak fondly of splint mail armor that would freeze their opponents in place. The sickly gemcutter, Zhong Yi Rou heard these tales and set out to create a gem that could do the same." I\'ll make a few modifications all my own, yes I will," she was heard to mutter.'
		);
		coeff1 = 5;
		coeff2 = 0.4;
		cap = 50;
		if (level > cap) {
			level = cap;
		}
		total = coeff1 + coeff2 * level;
		total = total.toFixed(1);
		prop1.html(
			'Your Cold skills now apply Chill effects and your Chill effects now Slow enemy movement speed by an additional <span class="d3-color-blue"><span class="value">' +
				total +
				'%</span></span>.'
		);
		prop2.html(
			'Enemies you Chill have a 10% increased chance to be Critically Hit.'
		);
	}
	/*Invigorating Gemstone*/
	if (gem == '12') {
		title.html('Invigorating Gemstone');
		flavor.html(
			'"Some say this stone derives its power from its owners life force, which is shortened with each use. Well I say any fight I can walk away from is a victory, and tomorrow can take care of itself." - Famed warrior Lenalas, the day before his death'
		);
		if (patch >= 7) {
			coeff1 = 1;
			coeff2 = 0.02;
			total = coeff1 + coeff2 * level;
			total = total.toFixed(2);
			prop1.html(
				'Each hit done increases healing received by <span class="d3-color-blue"><span class="value">' +
					total +
					'%</span></span> for 5 seconds. Stacks up to 10 times.'
			);
			prop2.html('You are immune to control impairing effects.');
		} else {
			coeff1 = 30;
			coeff2 = 0.4;
			cap = 50;
			if (level > cap) {
				level = cap;
			}
			total = coeff1 + coeff2 * level;
			total = total.toFixed(1);
			prop1.html(
				'While under any control-impairing effects, reduce all damage taken by <span class="d3-color-blue"><span class="value">' +
					total +
					'%</span></span>.'
			);
			prop2.html(
				'Heal for 20% of maximum life when hit by a control-impairing effect.'
			);
		}
	}
	/*Legacy of Dreams*/
	if (gem == '13') {
		title.html('Legacy of Dreams');
		flavor.html(
			'A Xiansai master forged this gem from other powerful rings hoping to combine their potencies and form a synergy.'
		);
		cap = 99;
		coeff1 = 3.75;
		coeff2 = 3.75;
		total = coeff1 + coeff2 * level;
		total = commafy(total);
		prop1.html(
			'While you have no set bonuses equipped every legendary item you have equipped increases your damage dealt by <span class="d3-color-blue"><span class="value">' +
				total +
				'%</span></span> and reduces your damage taken by 2%.'
		);
		prop2.html('This bonus is doubled for Ancient items.');
	}
	/*Mirinae, Teardrop of the Starweaver*/
	if (gem == '14') {
		title.html(
			'<span class="mirinae">Mirinae, Teardrop of the Starweaver</span>'
		);
		flavor.html(
			'"It was said that once a year, the two lovers would arrive at opposite river banks. A bridge of birds would form so they could touch. When they parted, their tears filled the land. Mirinae is one such tear. The sadness and rage in its core will only affect those close to it." -Scholar Sojin Hwang '
		);
		if (patch >= 6) {
			coeff1 = 3000;
			coeff2 = 60;
			total = coeff1 + coeff2 * level;
			prop1.html(
				'15% chance on hit to smite a nearby enemy for <span class="d3-color-blue"><span class="value">' +
					total +
					'%</span></span> weapon damage as Holy and heal yourself for 3% of your maximum life.'
			);
			prop2.html('Smite a nearby enemy every 3 seconds.');
		} else {
			coeff1 = 2000;
			coeff2 = 40;
			total = coeff1 + coeff2 * level;
			prop1.html(
				'15% chance on hit to smite a nearby enemy for <span class="d3-color-blue"><span class="value">' +
					total +
					'%</span></span> weapon damage as Holy.'
			);
			prop2.html('Smite a nearby enemy every 5 seconds.');
		}
	}
	/*Molten Wildebeest's Gizzard*/
	if (gem == '15') {
		title.html("Molten Wildebeest's Gizzard");
		flavor.html(
			'The gizzard of the molten wildebeest evinced such extraordinary properties when steeped in the correct mixture of alchemical reagents that the animals were hunted to extinction long ago.'
		);
		coeff1 = 10000;
		coeff2 = 1000;
		total = coeff1 + coeff2 * level;
		total = commafy(total);
		prop1.html(
			'Regenerates <span class="d3-color-blue"><span class="value">' +
				total +
				'</span></span> Life per Second.'
		);
		prop2.html(
			'After not taking damage for 4 seconds, gain an absorb shield for 200% of your total Life per Second.'
		);
	}
	/*Moratorium*/
	if (gem == '16') {
		title.html('Moratorium');
		flavor.html(
			'Precious stones can sometimes be found among the peaks of Ivgorod. The harmonics of these gems, while in combat, are said to forestall death itself.'
		);
		coeff1 = 3;
		coeff2 = 0.1;
		total = coeff1 + coeff2 * level;
		total = total.toFixed(2);
		prop1.html(
			'35% of all damage taken is instead staggered and dealt to you over <span class="d3-color-blue"><span class="value">' +
				total +
				'</span></span> seconds.'
		);
		if (patch >= 6) {
			prop2.html('20% chance on kill to clear all staggered damage.');
		} else {
			prop2.html('10% chance on kill to clear all staggered damage.');
		}
	}
	/*Mutilation Guard*/
	if (gem == '17') {
		title.html('Mutilation Guard');
		flavor.html(
			'Chau Thanh of Guozhi designed a gem which would transport the pain and suffering of a physical attack to an undisclosed location. When asked about the ultimate destination of this damage, she would simply smile and mutter "Well deserved. Well deserved."'
		);
		coeff1 = 10;
		coeff2 = 0.5;
		cap = 100;
		total = coeff1 + coeff2 * level;
		total = total.toFixed(1);
		prop1.html(
			'Gain <span class="d3-color-blue"><span class="value">' +
				total +
				'%</span></span> melee damage reduction.'
		);
		prop2.html(
			'While below 50% Life, you may move unhindered through enemies.'
		);
	}
	/*Pain Enhancer*/
	if (gem == '18') {
		title.html('Pain Enhancer');
		flavor.html(
			'Xiangyi, most beautiful of Xiansai master gem cutters, crafted this gem in honor of a former lover. The angrier she got, the faster she worked, and the gem was ready in no time. Only after she had tested its efficacy was she finally satisfied.'
		);
		if (patch >= 6) {
			coeff1 = 2500;
		} else {
			coeff1 = 1200;
		}
		coeff2 = 30;
		total = coeff1 + coeff2 * level;
		total = total.toFixed(1);
		total = commafy(total);
		prop1.html(
			'Critical hits cause the enemy to bleed for <span class="d3-color-blue"><span class="value">' +
				total +
				'%</span></span> weapon damage as Physical over 3 seconds.'
		);
		prop2.html(
			'Gain Blood Frenzy, granting you 3% increased Attack Speed for each bleeding enemy within 20 yards.'
		);
	}
	/*Red Soulstone Shard*/
	if (gem == '19') {
		title.html('Red Soulstone Shard');
		flavor.html(
			"This looks just like it was part of the infamous red soulstone. But that's impossible... It was destroyed long ago."
		);
		type = 'helms';
		coeff1 = 12500;
		coeff2 = 50;
		total = coeff1 + coeff2 * level;
		total = commafy(total);
		prop1.html(
			'Periodically struggle for control, unleashing a ring of Fire that inflicts <span class="d3-color-blue"><span class="value">' +
				total +
				'%</span></span> weapon damage to enemies it passes through.'
		);
		prop2.html(
			'After gaining a level, your resource costs are removed and cooldowns on skills are reduced by 75% for 30 seconds.'
		);
	}
	/*Simplicity's Strength*/
	if (gem == '20') {
		title.html("Simplicity's Strength");
		flavor.html(
			'"A simple task performed a thousand times may seem a drudgery, yet the power it creates is immeasurable." - Matriarch Lian Rasmussen'
		);
		coeff1 = 25;
		coeff2 = 0.5;
		total = coeff1 + coeff2 * level;
		total = total.toFixed(2);
		prop1.html(
			'Increase the damage of primary skills by <span class="d3-color-blue"><span class="value">' +
				total +
				'%</span></span>.'
		);
		if (patch >= 6) {
			prop2.html('Primary skills heal you for 4% of maximum Life on hit.');
		} else {
			prop2.html('Primary skills heal you for 2% of maximum Life on hit.');
		}
	}
	/*Taeguk*/
	if (gem == '21') {
		title.html('Taeguk');
		flavor.html(
			'"Given enough resources, one is possessed of an absolute and infinite potentiality." -High Priest Baek'
		);
		if (patch >= 6) {
			coeff1 = 2;
			coeff2 = 0.04;
			total = coeff1 + coeff2 * level;
			total = total.toFixed(2);
			prop1.html(
				'Gain <span class="d3-color-blue"><span class="value">' +
					total +
					'%</span></span> increased damage for 1.5 seconds when you spend resource on a channeled skill. This effect stacks up to 10 times.'
			);
			prop2.html('Gain 2.0% increased Armor for every stack.');
		} else {
			coeff1 = 20;
			coeff2 = 1;
			total = coeff1 + coeff2 * level;
			prop1.html(
				'Gain 0.5% increased damage for 3 seconds after spending primary resource. This effect stacks up to <span class="d3-color-blue"><span class="value">' +
					total +
					'</span></span> times.'
			);
			prop2.html('Gain 0.5% increased Armor for every stack.');
		}
	}
	/*Wreath of Lightning*/
	if (gem == '22') {
		title.html('Wreath of Lightning');
		flavor.html(
			'The madwoman Arianne believed she could cut a gem that would make for her a hood of lightning. "Lightning," she was heard to mutter "On my head!" Her body was discovered some weeks later, with no hair, clutching this gem.'
		);
		if (patch >= 6) {
			coeff1 = 1250;
			coeff2 = 25;
		} else {
			coeff1 = 600;
			coeff2 = 10;
		}
		total = coeff1 + coeff2 * level;
		total = total.toFixed(1);
		total = commafy(total);
		prop1.html(
			'15% chance on hit to gain a Wreath of Lightning, dealing <span class="d3-color-blue"><span class="value">' +
				total +
				'%</span></span> weapon damage as Lightning every second to nearby enemies for 3 seconds.'
		);
		prop2.html(
			'While under the effect of the Wreath of Lightning, gain 25% increased movement speed.'
		);
	}
	/*Zei's Stone of Vengeance*/
	if (gem == '23') {
		title.html("Zei's Stone of Vengeance");
		flavor.html(
			'Legend says this gem was crafted by Zei to torment fleeing enemies. Other legends claim that Zei never existed.'
		);
		if (patch >= 6) {
			coeff1 = 4;
			coeff2 = 0.08;
		} else {
			coeff1 = 4;
			coeff2 = 0.05;
		}
		total1 = coeff1 + coeff2 * level;
		total1 = total1.toFixed(2);
		total2 = total1 * 5;
		total2 = total2.toFixed(2);
		prop1.html(
			'Damage you deal is increased by <span class="d3-color-blue"><span class="value">' +
				total1 +
				'%</span></span> for every 10 yards between you and the enemy hit. Maximum <span class="d3-color-blue"><span class="value">' +
				total2 +
				'%</span></span> increase at 50 yards.'
		);
		prop2.html('20% chance on hit to Stun the enemy for 1 second.');
	}
	/*============================== End Legendary Gems ==============================*/

	/*Is the LegGem max level?*/
	if (cap > 0 && cap == level) {
		var ranktext = ' (Max)';
	} else if (cap > 0 && cap > level) {
		var ranktext = '/' + cap;
	} else {
		var ranktext = '';
	}
	prop0.html(type);
	levelcap.html('Rank ' + level + ranktext);

	/*Does the LegGem have a max level?*/
	if (cap > 0) {
		input.prop('max', cap);
		if (input.val() > cap) {
			input.val(cap);
			loadNumbers();
		}
	} else {
		input.prop('max', '999');
	}

	/*Is the LegGem at least level 25?*/
	if (level > 24) {
		$('.level25').addClass('d3-color-orange');
	} else {
		$('.level25').removeClass('d3-color-orange');
		prop2.append(required);
	}
}

// StatGem Data
function loadStatGem(statgem, patch) {
	var currentpatch = 19;
	var statgemtitle = $('.d3-tooltip-statgem h3');
	var prop4 = $('.d3-tooltip-statgem .property-4');
	var prop5 = $('.d3-tooltip-statgem .property-5');
	var prop6 = $('.d3-tooltip-statgem .property-6');

	if (patch == 'live') {
		patch = currentpatch;
	}

	/*============================== Start Stat Gems ==============================*/
	/*Amethyst*/
	if (statgem == '24') {
		statgemtitle.html('Amethyst');
		prop4.html('<span class="d3-color-gray">Weapon:</span> +35 Life per Hit');
		prop5.html('<span class="d3-color-gray">Helm:</span> +10% Life');
		prop6.html('<span class="d3-color-gray">Other:</span> +10 Vitality');
	}
	if (statgem == '25') {
		statgemtitle.html('Flawless Amethyst');
		prop4.html('<span class="d3-color-gray">Weapon:</span> +160 Life per Hit');
		prop5.html('<span class="d3-color-gray">Helm:</span> +12% Life');
		prop6.html('<span class="d3-color-gray">Other:</span> +20 Vitality');
	}
}

function loadNumbers() {
	var grlvlobj = $('#riftlevel');
	var gemobj = $('#gem');
	var selected = $('.gems .clicked').attr('data-gem');
	/*var statgemselected = $('.statgems .clicked').attr('data-statgem');*/
	var patch = $('.filters .clicked').attr('data-patch');
	var upgrade = $('#upgrade');
	var empowered = $('#empowered');
	var deathless = $('#deathless');
	var gemplus = $('.gemjump .plus');
	var gemminus = $('.gemjump .minus');
	var level = 12;
	var rankjump = 3;
	var gem = cleanInput(gemobj.val(), 0, 0);
	var grlvl = cleanInput(grlvlobj.val(), 1, 0);

	if (deathless.is(':checked')) {
		level++;
		rankjump++;
	}
	if (empowered.is(':checked')) {
		level++;
		rankjump++;
	}
	if (upgrade.is(':checked')) {
		grlvl = gem + level;
		grlvlobj.prop('disabled', true);
	} else {
		grlvlobj.prop('disabled', false);
	}

	gemplus.html(rankjump);
	gemminus.html(rankjump);
	if (gem < rankjump) {
		gemminus.hide();
	} else {
		gemminus.show();
	}

	gemobj.val(gem);
	grlvlobj.val(grlvl);
	loadGem(selected, gem, patch);
	loadShards(grlvl);

	var pct0 = loadChance(grlvl, gem + 0);
	var pct1 = loadChance(grlvl, gem + 1);
	var pct2 = loadChance(grlvl, gem + 2);
	var pct3 = loadChance(grlvl, gem + 3);
	var pct4 = loadChance(grlvl, gem + 4);

	// Math credit: Thomas Wigele
	var FFF = 100 * (1 - 0.01 * pct0) * (1 - 0.01 * pct0) * (1 - 0.01 * pct0);
	var SSS = 100 * (0.01 * pct0) * (0.01 * pct1) * (0.01 * pct2);
	if ($(empowered).is(':checked') && $(deathless).is(':checked')) {
		FFF *= 1 - 0.01 * pct0;
		FFF *= 1 - 0.01 * pct0;
		SSS *= 0.01 * pct3;
		SSS *= 0.01 * pct4;
	} else if ($(empowered).is(':checked') || $(deathless).is(':checked')) {
		FFF *= 1 - 0.01 * pct0;
		SSS *= 0.01 * pct3;
	}
	var GT0 = 100 * (1 - FFF * 0.01);

	// Gem level below Chances
	$('#plus0').html(gem + 1);
	$('#plus1').html(gem + 2);
	$('#plus2').html(gem + 3);
	$('#plus3').html(gem + 4);
	$('#plus4').html(gem + 5);

	$('#rank0')
		.val(pct0 + '%')
		.css('background-color', loadColor(pct0));
	$('#rank1')
		.val(pct1 + '%')
		.css('background-color', loadColor(pct1));
	$('#rank2')
		.val(pct2 + '%')
		.css('background-color', loadColor(pct2));
	$('#rank3')
		.val(pct3 + '%')
		.css('background-color', loadColor(pct3));
	$('#rank4')
		.val(pct4 + '%')
		.css('background-color', loadColor(pct4));
	$('#probability-GT0')
		.val(GT0.toFixed(1) + '%')
		.css('background-color', loadColor(GT0));
	$('#probability-SSS')
		.val(SSS.toFixed(1) + '%')
		.css('background-color', loadColor(SSS));
	$('#probability-FFF')
		.val(FFF.toFixed(1) + '%')
		.css('background-color', loadColor(FFF));
}

// Deathless and Empowered Chance visibility
function upgradeVisibility() {
	var empowered = $('#empowered');
	var deathless = $('#deathless');
	var upgradeFour = $('#upgradeFour');
	var upgradeFive = $('#upgradeFive');
	var chance = $('div.chance');
	if ($(deathless).is(':checked') && $(empowered).is(':checked')) {
		chance.css({ width: 'calc(100%/5)' });
		upgradeFour.show(1);
		upgradeFive.show(1);
	} else if (
		$(deathless).is(':checked') &&
		$(empowered).prop('checked', false)
	) {
		chance.css({ width: 'calc(100%/4)' });
		upgradeFour.show(1);
		upgradeFive.hide(1);
	} else if (
		$(deathless).prop('checked', false) &&
		$(empowered).is(':checked')
	) {
		chance.css({ width: 'calc(100%/4)' });
		upgradeFour.show(1);
		upgradeFive.hide(1);
	} else if (
		$(deathless).prop('checked', false) &&
		$(empowered).prop('checked', false)
	) {
		chance.css({ width: 'calc(100%/3)' });
		upgradeFour.hide(1);
		upgradeFive.hide(1);
	}
}

// Valid Input
function cleanInput(input, min, max) {
	input = input.replace(/\D/g, min);
	if (input == '') {
		input = min;
	}
	input = parseFloat(input);
	if (!$.isNumeric(input)) {
		input = min;
	}
	if (input > max && max > 0) {
		input = max;
	}
	if (input < min) {
		input = min;
	}
	return input;
}

// Max Blood Shards @GRift
function loadShards(grlvl) {
	var balance = 500 + grlvl * 10;
	$('#shards').html(
		'<img src="img/Other/Bloodshard.png" /><span class="d3-color-purple">' +
			balance +
			'</span>'
	);
}

// LegGem upgrade Chance
function loadChance(grlvl, gem) {
	var result = grlvl - gem;
	if (result >= 10) return 100;
	else if (result >= 9) return 90;
	else if (result >= 8) return 80;
	else if (result >= 7) return 70;
	else if (result >= 0) return 60;
	else if (result >= -1) return 30;
	else if (result >= -2) return 15;
	else if (result >= -3) return 8;
	else if (result >= -4) return 4;
	else if (result >= -5) return 2;
	else if (result >= -15) return 1;
	else return 0;
}

// HSL Colors
function loadColor(pct) {
	var dec = pct / 100;
	var hue = dec * 200;
	return 'hsl(' + hue + ',40%,50%)';
}

function commafy(num) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Stat Gem Increase
function statGemUp(gem, rank) {
	gem = parseInt(gem);
	for (var x = gem + 1; x <= 5; x++) {
		rank = Math.floor(rank / 3);
		$('.statgem[data-stat-gem=' + x + ']').val(rank);
	}
}

// Stat Gem Decrease
function statGemDown(gem, rank) {
	gem = parseInt(gem);
	for (var x = gem - 1; x > 0; x--) {
		rank *= 3;
		$('.statgem[data-stat-gem=' + x + ']').val(rank);
	}
}

$(document).ready(function() {
	var gemobj = $('#gem');
	var gems = $('.gems img');
	var statgems = $('.statgems img');
	var filters = $('.filters span');
	var ptrgems = $('.gems img.ptr');
	ptrgems.addClass('partial');

	// Tabs
	var previousActiveTabIndex = 0;
	$('.tab-switcher').on('click keypress', function(event) {
		// event.which === 13 means the "Enter" key is pressed
		if (
			(event.type === 'keypress' && event.which === 13) ||
			event.type === 'click'
		) {
			var tabClicked = $(this).data('tab-index');
			if (tabClicked != previousActiveTabIndex) {
				$('#allTabs .tab-data').each(function() {
					if ($(this).data('tab-index') == tabClicked) {
						$('.tab-data').hide();
						$(this).show();
						previousActiveTabIndex = $(this).data('tab-index');
						return;
					}
				});
			}
		}
	});

	$('.column.original,#augment .empowered').hide();

	$('#empowered,#deathless,#upgrade').click(function() {
		loadNumbers();
		upgradeVisibility();
	});

	/* Leg Gem Reset Logic */
	$('.clearform').click(function() {
		var chance = $('div.chance');
		$(this)
			.closest('form')[0]
			.reset();
		$('#empowered').prop('checked', false);
		$('#deathless').prop('checked', false);
		$('#upgradeFour').hide(1);
		$('#upgradeFive').hide(1);
		chance.css({ width: 'calc(100%/3)' });
		loadNumbers();
		/*xpLabels();
    augmentCalcMod();*/
	});

	/* Exit Logic */
	$('.exit').click(function() {
		window.close();
	});

	/* Leg Gem Patch Logic */
	gems.click(function() {
		gems.removeClass('clicked');
		$(this).addClass('clicked');
		var gem = $(this).attr('data-gem');
		var level = $('#gem').val();
		var patch = $('.filters .clicked').attr('data-patch');
		loadGem(gem, level, patch);
		gemobj.focus();
	});

	/* Stat Gem Patch Logic */
	statgems.click(function() {
		statgems.removeClass('clicked');
		$(this).addClass('clicked');
		var statgem = $(this).attr('data-statgem');
		var patch = $('.filters .clicked').attr('data-patch');
		loadStatGem(statgem, patch);
	});

	// Patch Filters
	filters.click(function() {
		filters.removeClass('clicked');
		$(this).addClass('clicked');
		var patch = $(this).attr('data-patch');
		var category = $('.gems img.patch' + patch);
		if (patch == 'live') {
			gems.removeClass('partial');
			ptrgems.addClass('partial');
		} else {
			gems.removeClass('clicked').addClass('partial');
			category.removeClass('partial');
			var newgem = category.first();
			newgem.addClass('clicked');
			var gem = newgem.attr('data-gem');
			var level = gemobj.val();
			loadGem(gem, level, patch);
		}
	});

	// Increase Gem Level field by +3, +4, or +5 if Deathless or Empowered is selected
	$('.gemjump span').click(function() {
		var gem = parseFloat(gemobj.val());
		var jump = 3;
		if ($(empowered).is(':checked')) {
			jump++;
		}
		if ($(deathless).is(':checked')) {
			jump++;
		}
		if ($(this).hasClass('plus')) {
			gemobj.val(gem + jump);
		}
		if ($(this).hasClass('minus')) {
			gemobj.val(gem - jump);
		}
		loadNumbers();
	});
});
