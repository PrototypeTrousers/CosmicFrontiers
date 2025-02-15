ServerEvents.recipes(event => {
	event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:sand",
            "minecraft:sand",
            "minecraft:sand",
            "minecraft:sand",
        ], // input items
	    "minecraft:gunpowder", // reagent
	    "minecraft:tnt", // output
	    1000, // source cost
	    // true // keep nbt of reagent, think like a smithing recipe
	);

})

//Time to do some Gregification
//Spellbooks
ServerEvents.recipes(e => {
    e.remove({id: 'ars_nouveau:novice_spell_book'})
    e.shaped('ars_nouveau:novice_spell_book', [
            'ABC',
            'DE ',
            '   '
        ],
        {
            A: 'minecraft:book',
            B: 'gtceu:iron_shovel',
            C: 'gtceu:iron_pickaxe',
            D: 'gtceu:iron_sword',
            E: 'gtceu:iron_axe',
        }
    )
    //e.remove({id: 'ars_nouveau:apprentice_spell_book'})
    //e.shaped('ars_nouveau:apprentice_spell_book', [
    //        'BAA',
    //        'ECD',
    //        ' C '
    //    ],
    //    {
    //        A: 'minecraft:iron_ingot',
    //        B: 'gtceu:iron_plate',
    //        C: 'minecraft:stick',
    //        D: '#forge:tools/hammers',
    //        E: '#forge:tools/files',
    //    }
    //)
    //e.remove({id: 'ars_nouveau:archmage_spell_book'})
    //e.shaped('ars_nouveau:archmage_spell_book', [
    //        'BAA',
    //        'ECD',
    //        ' C '
    //    ],
    //    {
    //        A: 'minecraft:iron_ingot',
    //        B: 'gtceu:iron_plate',
    //        C: 'minecraft:stick',
    //        D: '#forge:tools/hammers',
    //        E: '#forge:tools/files',
    //    }
    //)

//Fiber Recipes
    e.remove({id: 'ars_nouveau:magebloom_fiber'})
    e.recipes.gtceu.spooling_machine('ars_nouveau:magebloom_fiber')
        .itemInputs('ars_nouveau:magebloom')
        .itemOutputs('ars_nouveau:magebloom_fiber')
        .duration(60)
        .EUt(4);
//Spooling Recipes

    e.remove({output: 'ars_nouveau:blank_thread'})
    e.recipes.gtceu.spooling_machine('ars_nouveau:blank_thread')
        .itemInputs('4x ars_nouveau:magebloom_fiber')
        .itemInputs('gtceu:gold_rod')
        .itemOutputs('ars_nouveau:blank_thread')
        .duration(60)
        .EUt(4);

//Magic Stations
    e.remove({id: 'ars_nouveau:arcane_core'})
    e.shaped('ars_nouveau:arcane_core', [
            'ACA',
            'BDB',
            'AAA'
        ],
        {
            A: 'ars_nouveau:sourcestone',
            B: 'gtceu:gold_rod',
            C: '#forge:circuits/mv',
            D: 'ars_nouveau:source_gem',
        }
    )
    e.remove({id: 'ars_nouveau:enchanting_apparatus'})
    e.shaped('ars_nouveau:enchanting_apparatus', [
            'BAB',
            'CDC',
            'BAB'
        ],
        {
            A: 'ars_nouveau:sourcestone',
            B: 'minecraft:gold_nugget',
            C: 'gtceu:gold_plate',
            D: 'minecraft:diamond',
        }
    )
    e.remove({id: 'ars_nouveau:agronomic_sourcelink'})
    e.shaped('ars_nouveau:agronomic_sourcelink', [
            ' A ',
            'BCB',
            ' A '
        ],
        {
            A: 'ars_nouveau:source_gem',
            B: 'gtceu:gold_plate',
            C: 'minecraft:wheat',
        }
    )
    e.remove({id: 'ars_nouveau:source_jar'})
    e.shaped('ars_nouveau:source_jar', [
            'CBC',
            'A A',
            'CCC'
        ],
        {
            A: '#forge:glass',
            B: 'gtceu:gold_plate',
            C: 'ars_nouveau:archwood_slab',
        }
    )
    e.remove({id: 'ars_nouveau:relay'})
    e.shaped('ars_nouveau:relay', [
            'A A',
            'ABA',
            'A A'
        ],
        {
            A: 'gtceu:gold_rod',
            B: 'ars_nouveau:source_gem_block',
        }
    )
})