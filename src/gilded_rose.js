function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

var items

function display() {
    items = []

    items.push(new Item('+5 Dexterity Vest', 10, 20));
    items.push(new Item('Aged Brie', 2, 0));
    items.push(new Item('Elixir of the Mongoose', 5, 7));
    items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
    items.push(new Item('Conjured Mana Cake', 3, 6));
}

// code below is refactored fro original but unsuccessful 

// function agedBrie(itemPassedIn) {
//
//     (itemPassedIn.quality = itemPassedIn.quality + 1) && (itemPassedIn.sell_in = itemPassedIn.sell_in - 1)
// }
//
// function sulfuras(itemPassedIn) {
//
//     itemPassedIn.sell_in = itemPassedIn.sell_in - 1
// }
//
// function backstagePass(itemPassedIn) {
//     (itemPassedIn.quality = itemPassedIn.quality + 1) && (itemPassedIn.sell_in = itemPassedIn.sell_in - 1)) && (
//     if (itemPassedIn.sell_in <= 10) {
//         itemPassedIn.quality = itemPassedIn.quality + 1
//     } else if (itemPassedIn.sell_in <= 5) {
//         itemPassedIn.quality = itemPassedIn.quality + 2
//     }
// }
//
// function normalItems(itemPassedIn) {
//
//     (itemPassedIn.sell_in = itemPassedIn.sell_in - 1) && (itemPassedIn.quality = itemPassedIn.quality - 1)
// }



function update_quality() {
    for (var i = 0; i < items.length; i++) {
        // if (items[i].name === 'Aged Brie') {
        //             agedBrie(items[i])
        //             continue;
        //         }
        //         if (items[i].name === 'Sulfuras, Hand of Ragnaros') {
        //             sulfuras(items[i])
        //             continue;
        //         }
        //         if (items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        //             backstagePass(items[i])
        //             continue;
        //         } else {
        //             normalItems(items[i])
        //             continue;
        //         }
        if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (items[i].quality > 0) {
                if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
                    items[i].quality = items[i].quality - 1
                }
            }
        } else {
            if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1
                if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                    if (items[i].sell_in < 11) {
                        if (items[i].quality < 50) {
                            items[i].quality = items[i].quality + 1
                        }
                    }
                    if (items[i].sell_in < 6) {
                        if (items[i].quality < 50) {
                            items[i].quality = items[i].quality + 1
                        }
                    }
                }
            }
        }
        if (items[i].name != '') {
            items[i].sell_in = items[i].sell_in - 1;
            // } else {
            //     items[i].sell_in = items[i].sell_in - 1;
        }
        if (items[i].sell_in < 0) {
            if (items[i].name != 'Aged Brie') {
                if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                    if (items[i].quality > 0) {
                        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
                            items[i].quality = items[i].quality - 1
                        }
                    }
                } else {
                    items[i].quality = items[i].quality - items[i].quality
                }
            } else {
                if (items[i].quality < 50) {
                    items[i].quality = items[i].quality + 1
                }
            }
        }
    }
}
