describe("Gilded Rose", function() {

    it("the quality of new item Carrot Cake should decrease by one", function() {
        display()
        items.push(new Item('Carrot Cake', 10, 20))
        update_quality()
        expect(items[6].sell_in).toEqual(9)
    });
    it("the quality of item Elixir should decrease by one and quality decreases by one", function() {
        display()
        update_quality()
        expect(items[2].quality).toEqual(6)
        expect(items[2].sell_in).toEqual(4)
    });

    it("decreasing the sell_in day increases the quality by 1 in backstage passes", function() {
        display()
        update_quality()
        expect(items[4].sell_in).toEqual(14)
        expect(items[4].quality).toEqual(21)
    });

    it("decreasing the product quality to a negative number will return a value of 0", function() {
        display()
        items[5].quality = 0
        update_quality()
        expect(items[5].quality).toEqual(0)
    });


    it("decreasing the sell_in day increases the quality by 1 in backstage passes", function() {
        display()
        update_quality()
        expect(items[4].sell_in).toEqual(14)
        expect(items[4].quality).toEqual(21)
    });

    it("Ensuring Sulfuras' quality remains constant at 80 and never alters", function() {
        itemnew = []
        itemnew.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80))
        update_quality()
        expect(itemnew[0].sell_in).toEqual(0)
        expect(itemnew[0].quality).toEqual(80)
    });


    it("Dexterity Vest sell_in  and quality values decrease due to update_quality function ", function() {
        items = []
        items.push(new Item('+ 5 Dexterity Vest', 10, 20))
        update_quality()
        expect(items[0].sell_in).toEqual(9)
        expect(items[0].quality).toEqual(19)
    });

    it("Backstage sell_in  value decreases by one and quality values increases by 1 due to update_quality function ", function() {
        items = []
        items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20))
        update_quality()
        expect(items[0].sell_in).toEqual(14)
        expect(items[0].quality).toEqual(21)
    });


    it("Aged Brie increased in quality due to reduction sell by days", function() {
        items = []
        items.push(new Item('Aged Brie', 2, 0))
        update_quality()
        expect(items[0].sell_in).toEqual(1)
        expect(items[0].quality).toEqual(1)
    });

    it("Aged Brie increased in quality due to reduction sell by days beyond 50", function() {
        items = []
        items.push(new Item('Aged Brie', 3, 50))
        update_quality()
        expect(items[0].sell_in).toEqual(2)
        expect(items[0].quality).toEqual(50)
    });

    it("Aged Brie increased in quality and decreases in sell_in days. Quality increases the older it gets", function() {
        items = []
        items.push(new Item('Aged Brie', 0, 0))
        update_quality()
        expect(items[0].sell_in).toEqual(-1)
        expect(items[0].quality).toEqual(2)
    });

    it("Conjured Mana Cake's sell by days reduce, reducing the product's quality", function() {
        items = []
        items.push(new Item('Conjured Mana Cake', 3, 6))
        update_quality()
        expect(items[0].sell_in).toEqual(2)
        expect(items[0].quality).toEqual(5)
    });


    it("Conjured Mana Cake's sell by days  producing negative number and quality returned as 0", function() {
        items = []
        items.push(new Item('Conjured Mana Cake', 0, 0))
        update_quality()
        expect(items[0].sell_in).toEqual(-1)
        expect(items[0].quality).toEqual(0)
    });


    it("+5 Dexterity vest sell by days  producing negative number and quality returned as 0", function() {
        items = []
        items.push(new Item('+5 Dexterity Vest', 0, 0))
        update_quality()
        expect(items[0].sell_in).toEqual(-1)
        expect(items[0].quality).toEqual(0)
    });


    it("Elixir of the Mongoose sell by days  producing negative number and quality returned as 0", function() {
        items = []
        items.push(new Item('Elixir of the Mongoose', 0, 0))
        update_quality()
        expect(items[0].sell_in).toEqual(-1)
        expect(items[0].quality).toEqual(0)
    });


    it("Sulfuras sell by days  producing negative number and quality returned as 0", function() {
        items = []
        items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 0))
        update_quality()
        expect(items[0].sell_in).toEqual(-1)
        expect(items[0].quality).toEqual(0)
    });



    it("Backstage Pass sell by days  producing negative number and quality returned as 0", function() {
        items = []
        items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 0, 0))
        update_quality()
        expect(items[0].sell_in).toEqual(-1)
        expect(items[0].quality).toEqual(0)
    });



    it("Backstage passes increases quality by 2 with every reducion in sell_in days under 10 days ", function() {
        items = []
        items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 26))
        update_quality()
        expect(items[0].sell_in).toEqual(9)
        expect(items[0].quality).toEqual(28)
    });


    it("Backstage passes decreasing from 5 to 4 days increases quality from 37 to 40 ", function() {
        items = []
        items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 37))
        update_quality()
        expect(items[0].sell_in).toEqual(4)
        expect(items[0].quality).toEqual(40)
    });


    it("Dexterity vest quality does not fall below 0 ", function() {
        items = []
        items.push(new Item('+5 Dexterity Vest', 1, 0))
        update_quality()
        expect(items[0].sell_in).toEqual(0)
        expect(items[0].quality).toEqual(0)
    });


    it("Dexterity vest quality decreases doubly when sell in days are reduced below 0", function() {
        items = []
        items.push(new Item('+5 Dexterity Vest', -1, 10))
        update_quality()
        expect(items[0].sell_in).toEqual(-2)
        expect(items[0].quality).toEqual(8)
    });

    it("Sulfuras quality will not decrease from 80 with decrease in sell in days", function() {
        items = []
        items.push(new Item('Sulfuras, Hand of Ragnaros', 1, 80))
        update_quality()
        expect(items[0].sell_in).toEqual(0)
        expect(items[0].quality).toEqual(80)
    });


    it("Backstage passes quality will not exceed 50 with reduction in sell in days", function() {
        items = []
        items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50))
        update_quality()
        expect(items[0].sell_in).toEqual(4)
        expect(items[0].quality).toEqual(50)
    });


});
